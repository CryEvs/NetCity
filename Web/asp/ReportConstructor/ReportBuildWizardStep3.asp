<!-- #INCLUDE FILE="ReportBuildWizard_inc.asp" -->
<!-- #INCLUDE FILE="ReportBuildConstants_inc.asp" -->
<!-- #INCLUDE FILE="ShowReportInfo_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kFormName = "ReportBuild3"
Const kBackScript = 2

Const kTreeDispl = "&nbsp;&nbsp;&nbsp;&nbsp;"

Const kArrQObjectID		= 0
Const kArrObjectID		= 1
Const kArrDisplayName	= 2

Const kSplitter = "|"

Dim bConfirm
Dim nStatus, nSelectCnt
Dim strObjectMasterID, strObjectID, strReportName, strIsPublished
Dim objObjectsRs
Dim arrObjects

Sub onSpecialReadState()
	bConfirm = CBool( GetLngQueryBuildStatus( strQueryID ) > 3 )

	Call InitDetailObjects()
End Sub

Function CheckQueryFields( nQueryId )
	Dim nNum
	nNum = objNSNETWork.GetQueryFieldsCount(nQueryId )
	CheckQueryFields = (nNum > 0)
End Function

Sub Main
	Dim objReport
	Set objReport = objNSNETWork.GetReportInfo(Clng(strReportID) )
	strReportName = GetSafeStr( objReport("DISPLAYNAME"), -1, Null )
	strIsPublished = GetSafeStr( objReport("ISPUBLISHED"), 1, Null )
	nStatus = GetLngQueryBuildStatus( strQueryID )
End Sub

Sub onHeadSpecial()
%><script><!--
var flags_count = 0;
var wndObjInfo = null;
function closeObjectInfo()
{
	if( wndObjInfo && !wndObjInfo.closed )
	{
		wndObjInfo.forceClosing = true;
		wndObjInfo.close();
	}
}
function ViewObjectInfo( strObjectId )
{
	closeObjectInfo();
	var url = urlHelper.makeUrl("popupobjinfo.asp", { ID: strObjectId });
	var winOptions = { url: url, name: '_blank', specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no,directories=no,width=670,height=460',  winChild: wndObjInfo };
	windowOpen( winOptions );
	wndObjInfo = winOptions.winChild;
	center( wndObjInfo, 670, 460 );
	wndObjInfo.focus();
}

function Click_Handler( curr_checkbox )
{ if ( curr_checkbox.checked ) flags_count++; else flags_count-- }

function delObjects()
{
	var defArgs = new Array();
	if( isDBBusy() ) return false;
	if (flags_count > 0)
	{<%
	If bConfirm Then%>
		defArgs = $.show.getConfirmation(language.Generic.Constructor.kConfirmDelete);<%
	End If%>
		extDeferred.when(defArgs).then(function(){
			var form = document.forms['<%=kFormName%>'];
			var strObjects = '';
			for (var i = 0; i < form.elements.length; i++){
				if (form.elements[i].name == 'DetailObjects')
					if (form.elements[i].checked)
						strObjects += form.elements[i].value + '<%=kSplitter%>';
			}
			setDBBusy();
			ok( '<%=kFormName%>','DeleteObjects.asp?OBJSTR='+strObjects );
		});
	} else
		alert(language.Generic.Constructor.kAlertNoObjectsToDel);
}
//--></script><%
End Sub

Sub DrawButtons()
	Button "onStepTo(" & kBackScript - 1 & ")", obLanguage("SetupSchoolCalendar","kPrev"), obLanguage("SetupSchoolCalendar","kPrev"), "glyphicon glyphicon-circle-arrow-left"
	Button "onStepTo(" & kBackScript + 2 & ")", obLanguage("SetupSchoolCalendar","kNext"), obLanguage("SetupSchoolCalendar","kNext"), "glyphicon glyphicon-circle-arrow-right"


	ButtonDel "delObjects()", obLanguage("Constructor","kBtnDel")
End Sub

Sub onDrawStepContent()
	If IsEmpty( arrObjects ) Then Exit Sub

		%>
	<table class="table table-bordered table-condensed">
		<tr>
			<th class="min">&nbsp;</th>
			<th><%=obLanguage("Constructor","kSelectedObjects")%></th>
			<th><%=obLanguage("Constructor","kRelateWith")%></th>
			<th><%=obLanguage("Constructor","kEmptyValues")%></th>
			<th><%=obLanguage("Constructor","kCheck")%></th>
		</tr><%

	Call DrawDataObjectsTree( arrObjects, "" )
				%></table><%

End Sub

Sub DrawDataObjectsTree( arrTree, ByVal strDispl )
	Dim i, strObjID, strQObjID, strDisplName, strIsLeft

	For i = 0 To UBound(arrTree, 2)
		strObjID = arrTree(0, i)
		strQObjID = arrTree(1, i)
		strDisplName = arrTree(2, i)
		strIsLeft = arrTree(3, i)

		%><tr>
			<td class="text-center">
				<%ImageButton "ViewObjectInfo(" & strObjID & ")", obLanguage("Constructor","kObjInfo"), "glyphicon glyphicon-info-sign"%>
			</td>
			<td class="text-nowrap"><%=strDispl%><%=DB2HTML(strDisplName)%></td><%

			Set objObjectsRS = objNSNETWork.GetObjectRelationShips( strQueryId, strFunctionalityType, strObjID)
			%><td><%
			If Not objObjectsRS.EOF Then
				Call DrawSelectRs( objObjectsRs, CStr(strQObjID), "OBJECTID", "DISPLAYNAME", strObjectID, " ", "ok_check_db( '" & kFormName & "','InsDetailObject.asp?OBJID='+this.options[selectedIndex].value+'&MOBJID='+this.name )" )
			Else
				%><%=obLanguage("Constructor","kNoRelatedObjects")%><%
			End If
			%></td>

			<td>
				<input type="hidden" name="QObjID" value="<%=strQObjID%>">
				<%DrawSimpleSelectArr Array("", "", "N", obLanguage("Common","kNo"), "Y", obLanguage("Common","kYes")), "ISLEFT_" & strQObjID, strIsLeft, Null, "dataChanged();"%>
			</td>
			<td class="text-center">
				<input type="checkbox" name="DetailObjects" value="<%=strQObjID%>" OnClick="Click_Handler(this)">
			</td>
		</tr><%
		If Not IsEmpty(arrTree(4, i)) Then
			Call DrawDataObjectsTree( arrTree(4, i), strDispl & kTreeDispl )
		End If
	Next
End Sub

Function GetLngQueryBuildStatus( strQueryID )
	Dim objRs
	Set objRs = objNSNETWork.GetQueryData(Clng( strQueryId ) )
	If objRs.EOF Then GetQueryBuildStatus = 0 : Exit Function
	GetLngQueryBuildStatus = CLng( objRs("BUILDSTATUS") )
End Function

Sub InitDetailObjects()
	Dim objRs, strQObjID

	Set objRs = objNSNETWork.GetMasterObjectInfo(Clng( strQueryID ) )
	If objRs.EOF Then Exit Sub
	strQObjID = GetSafeID(objRs("QUERYOBJECTID"), Null)

	ReDim arrObjects(4, 0) ' 1st index: 0 - OBJECTID, 1 - QUERYOBJECTID, 2 - DISPLAYNAME, 3 - ISLEFT, 4 - array of child objects
	arrObjects(0, 0) = GetSafeID(objRs("OBJECTID"), Null)
	arrObjects(1, 0) = strQObjID
	arrObjects(2, 0) = GetSafeStr(objRs("DISPLAYNAME"), -1, "")
	arrObjects(3, 0) = GetSafeStr(objRs("ISLEFT"), 1, "")
	arrObjects(4, 0) = GetDetailObjectsTree(strQObjID)

	strObjectID = -1
End Sub

Function GetDetailObjectsTree( strMasterObjID )
	Dim objDataObjects
	Dim arrTree
	Dim strObjID, strQObjID, strDisplName, strIsLeft
	Dim nCnt, i
	
	Set objDataObjects = objNSNETWork.GetQueryObjectByMasterObjectId(strMasterObjID)
	If objDataObjects.EOF Then
		GetDetailObjectsTree = Empty
		Exit Function
	End If

	nCnt = objDataObjects.RecordCount - 1
	ReDim arrTree(4, nCnt) ' 1st index: 0 - OBJECTID, 1 - QUERYOBJECTID, 2 - DISPLAYNAME, 3 - ISLEFT, 4 - array of child objects

	i = 0
	While Not objDataObjects.EOF
		strObjID = GetSafeID(objDataObjects("OBJECTID"), Null)
		strQObjID = GetSafeID(objDataObjects("QUERYOBJECTID"), Null)
		strDisplName = GetSafeStr(objDataObjects("DISPLAYNAME"), -1, "")
		strIsLeft = GetSafeStr(objDataObjects("ISLEFT"), 1, "")

		arrTree(0, i) = strObjID
		arrTree(1, i) = strQObjID
		arrTree(2, i) = strDisplName
		arrTree(3, i) = strIsLeft
		arrTree(4, i) = GetDetailObjectsTree(strQObjID)

		i = i + 1
		objDataObjects.MoveNext
	Wend

	GetDetailObjectsTree = arrTree
End Function
%>
