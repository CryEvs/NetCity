<!-- #INCLUDE FILE="ReportBuildWizard_inc.asp" -->
<!-- #INCLUDE FILE="ReportBuildConstants_inc.asp" -->
<!-- #INCLUDE FILE="ShowReportInfo_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kFormName		= "ReportBuild2"
Const kBackScript	= 1

Const kDelim = ","
Const kTreeDispl = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
Const kAnchIDPrefix = "objanch_"

Dim nStatus
Dim strObjectID, strReportName, strIsPublished
Dim objPublObjectsRs
Dim arrObjectsTree, bNoObjects
Dim dictObjects, nObjIndex

Function onUnLoad()
	onUnload = "closeObjectInfo();"
End Function

Function CheckQueryFields( nQueryId )
	Dim nNum
	nNum = objNSNETWork.GetQueryFieldsCount(nQueryId )
	CheckQueryFields = (nNum > 0)
End Function

Sub Main()
	Dim objReport
	Dim nNum
	nNum = objNSNETWork.GetQueryObjectsCount(Clng( strQueryId ) )
	If nNum > 1 Then
		RedirectTo "ReportBuildWizardStep3.asp", Null
		Response.End
		Exit Sub
	End If
	
	Call InitDataObjectsTree()
	
	Set objReport = objNSNETWork.GetReportInfo(Clng( strReportID ) )
	strReportName = GetSafeStr( objReport("DISPLAYNAME"), -1, Null )
	strIsPublished = GetSafeStr( objReport("ISPUBLISHED"), 1, Null )
	nStatus = GetLngQueryBuildStatus( strQueryID )
End Sub

Sub onHeadSpecial()
%><script><!--
var wndObjInfo = null;

function selectTopObj ( nStep, nIndex ) {
	if( isDBBusy() ) return false;
	var form = document.forms['<%=kFormName%>'];
	form.elements['STEPDIR'].value = nStep;
	form.elements['ObjIndex'].value = nIndex;
	setDBBusy();
	DoSubmit(form, '<%=kSaveScriptName%>');
}
function showPath ( elA ) {
	clearPath();
	elA.style.fontWeight='bold';
	
	var sID = elA.id;
	var nPos = -1;
	var elParentA = null;
	do{
		nPos = sID.lastIndexOf(',');
		if( nPos > -1 ){
			sID = sID.substr(0, nPos);
			elParentA = document.getElementById(sID);
			if( elParentA != null ){
				elParentA.style.fontWeight='bold';
			}
		}
	} while ((nPos > -1) && (elParentA != null))
}
function clearPath ( ) {
	var form = document.forms['<%=kFormName%>'];
	var sIDs = '';
	var elA = null;
	if( form.elements['ObjArray'].length ){
		for( var i = 0; i < form.elements['ObjArray'].length; i++ ) {
			sIDs = form.elements['ObjArray'][i].value;
			setNormalFont(sIDs);
		}
	}
	else{
		sIDs = form.elements['ObjArray'].value;
		setNormalFont(sIDs);
	}
}
function setNormalFont ( sIDs ) {
	var sID = sIDs.substr(0, sIDs.length - 1);
	var elA = document.getElementById('<%=kAnchIDPrefix%>' + sID);
	if( elA != null ){
		elA.style.fontWeight='normal';
	}
}
function closeObjectInfo() {
	if( wndObjInfo && !wndObjInfo.closed )
	{
		wndObjInfo.forceClosing = true;
		wndObjInfo.close();
	}
}
function ViewObjectInfo( strObjectId ) {
	closeObjectInfo();
	var url = urlHelper.makeUrl("popupobjinfo.asp", { ID: strObjectId });
	var winOptions = { url: url, name: '_blank', specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no,directories=no,width=670,height=460', winChild: wndObjInfo };
	windowOpen( winOptions );
	wndObjInfo = winOptions.winChild;
	center( wndObjInfo, 670, 460 );
	wndObjInfo.focus();
}

function Back() {
	goBack(document.forms['<%=kFormName%>'],'ReportConstructor.asp');
}

function OpenAllTree() {
	 $('input[name=checkbox-tree]').prop('checked', true);
}

function CloseAllTree() {
	$('input[name=checkbox-tree]').prop('checked', false);
}
$(function() {
	if($('[name=DOBJID').val()>0)
		OpenAllTree();
});

//--></script><%
End Sub

Sub DrawButtons()
	Button "ok_check_db('1', 'ReportBuildWizardStep1.asp')", obLanguage("SetupSchoolCalendar","kPrev"), obLanguage("SetupSchoolCalendar","kPrev"), "glyphicon glyphicon-circle-arrow-left"
	'Button "onStepTo(" & kBackScript - 1 & ")", obLanguage("SetupSchoolCalendar","kPrev"), obLanguage("SetupSchoolCalendar","kPrev"), "glyphicon glyphicon-circle-arrow-left"
	ImageButton "OpenAllTree()", obLanguage("Buttons","kExpandTree"), "glyphicon glyphicon-folder-open"
	ImageButton "CloseAllTree()", obLanguage("Buttons","kTurnTree"), "glyphicon glyphicon-folder-close"
	
End Sub

Sub onDrawStepContent()
	DrawObjectsFilter( kFormName )
	DrawDataObjects( kFormName )
End Sub

Sub DrawObjectsFilter( theStrForm )
	Dim strObjID, strDisplName
	If bNoObjects Then
		DrawInfo obLanguage("Constructor","kNoDataObjects"), False
		Exit Sub
	End If
	
	OpenFormGroup obLanguage("Constructor","kFinalDataObject")
	DrawSelectRs objPublObjectsRs, "DOBJID", "OBJECTID", "DISPLAYNAME", strObjectID, obLanguage("Constructor","kAny"), "OnChangeSelect('"&theStrForm&"','"&strScriptName&"')"
	CloseFormGroup
End Sub

Sub DrawDataObjects( theStrForm )
	If IsEmpty(arrObjectsTree) Then
		bNoReport = True
		Exit Sub
	End If
	
	nObjIndex = 0
%><div class=" form-group ">
	<div class="col-md-12 col-lg-8">
		<div class="steps-all"><%
				Call DrawDataObjectsTree( theStrForm, arrObjectsTree, 1 )%>
		</div>
	</div>
</div>
<%
End Sub
	
Sub DrawDataObjectsTree( theStrForm, arrTree, ByVal lableId )
	Dim strObjID, strDisplName
	Dim i
	If IsEmpty(lableId) Then
		lableId = 1
	End If

	%><div class="object-node">
		<div class="object-wrapper">
			<%
			For i = 0 To UBound(arrTree, 2)
				strObjID = arrTree(0, i)
				strDisplName = arrTree(1, i)
				nObjIndex = nObjIndex + 1
				
				%><label <%rw IIf( Not IsEmpty(arrTree(2, i)),"for='" & lableId & "'","")%> >
				
				<input type="hidden" name="ObjArray" value="<%=arrTree(3, i)%>">
				<button title="<%=obLanguage("Constructor","kObjInfo")%>" type="button" onclick="<%="ViewObjectInfo(" & strObjID & ")"%>"><span class="glyphicon glyphicon-info-sign"></span></button>
				<a href="JavaScript:selectTopObj(<%=(kBackScript + 2)%>, <%=nObjIndex%>)" onmouseover="self.status='<%=obLanguage("Constructor","kChoseObject")%>';showPath(this);return true;" onmouseout="self.status=''" id="<%=(kAnchIDPrefix & Left(arrTree(3, i), Len(arrTree(3, i)) - 1))%>"><%=DB2HTML(strDisplName)%></a>
				
				</label><%
				
				If Not IsEmpty(arrTree(2, i)) Then
					%><div class="object-child">
						<input type="checkbox" id="<%=lableId%>" name="checkbox-tree"><%
							lableId = lableId + 1
								Call DrawDataObjectsTree( theStrForm, arrTree(2, i), lableId )
					%></div><%
				End If
			Next
	%></div></div><%
End Sub

Sub WriteHiddenParams()
	rw WriteHiddenTags(Array("CLEANUP", "N", "ObjIndex", -1, "STEPDIR", 3))
End Sub

Function IsAdminReportByQuery( nQueryID )
	Dim objRs
	Set objRs = objNSNETWork.GetReportTypeByQueryId(nQueryID )
	IsAdminReportByQuery = Cbool( Left(objRs.GetString,1) <> "S" )
End Function

Function GetLngQueryBuildStatus( strQueryID )
	Dim objRs
	Set objRs = objNSNETWork.GetQueryData(Clng( strQueryId ) )
	If objRs.EOF Then GetLngQueryBuildStatus = 0 : Exit Function
	GetLngQueryBuildStatus = CLng( objRs("BUILDSTATUS") )
End Function

Sub InitDataObjectsTree()
	'bAdmin = IsAdminReportByQuery(strQueryID)
	strObjectID = GetSafeID( Request("DOBJID"), "-1" )

	arrObjectsTree = GetDataObjectsTree(strFunctionalityType)
	bNoObjects = IsEmpty(arrObjectsTree)
	
	If Not bNoObjects Then
		Set dictObjects = Server.CreateObject("NetCity.Storage")
		GetDataObjectsFromTree(arrObjectsTree)
		Set objPublObjectsRs = objNSNETWork.GetPublicObjectsList(strFunctionalityType)
		
		If dictObjects.Exists(strObjectID) Then
			arrObjectsTree = FilterObjectsTree(arrObjectsTree)
		End If
	End If
End Sub

Function FilterObjectsTree( ByRef arrTree )
	Dim strObjID, strDisplName
	Dim i, j, bFound, bOneFound
	
	ReDim arrRet(3, UBound(arrTree, 2))
	
	j = 0
	bOneFound = False
	For i = 0 To UBound(arrTree, 2)
		strObjID = arrTree(0, i)
		bFound = False
		
		If strObjID = strObjectID Then
			arrRet(2, j) = Empty
			bFound = True
		Else
			If IsEmpty(arrTree(2, i)) Then
				' по этому пути нет нужного объекта
			Else
				arrRet(2, j) = FilterObjectsTree(arrTree(2, i))
				If Not IsEmpty(arrRet(2, j)) Then
					bFound = True
				End If
			End If
		End If
		
		If bFound Then
			strDisplName = arrTree(1, i)
			arrRet(0, j) = strObjID
			arrRet(1, j) = strDisplName
			arrRet(3, j) = arrTree(3, i) ' IDs path
			j = j + 1
			bOneFound = True
		End If		
	Next

	If bOneFound Then
		ReDim Preserve arrRet(3, j - 1)
		FilterObjectsTree = arrRet
	Else
		FilterObjectsTree = Empty
	End If
End Function

Sub GetDataObjectsFromTree( arrTree )
	Dim strObjID, strDisplName
	Dim i
	
	For i = 0 To UBound(arrTree, 2)
		strObjID = arrTree(0, i)
		strDisplName = arrTree(1, i)
		dictObjects(strObjID) = strDisplName
		If Not IsEmpty(arrTree(2, i)) Then
			Call GetDataObjectsFromTree( arrTree(2, i) )
		End If
	Next
End Sub

Function GetDataObjectsTree( bAdmin )
	Dim objDataObjects
	Dim arrTree
	Dim strObjID, strDisplName
	Dim nCnt, i
	
	Set objDataObjects = objNSNETWork.GetDataObjectsList(bAdmin)
	If objDataObjects.EOF Then
		GetDataObjectsTree = Empty
		Exit Function
	End If
	
	nCnt = objDataObjects.RecordCount - 1
	ReDim arrTree(3, nCnt) ' 1st index: 0 - OBJECTID, 1 - DISPLAYNAME, 2 - array of child objects
									' 3 - str of IDs path

	i = 0
	While Not objDataObjects.EOF
		strObjID = GetSafeID(objDataObjects("OBJECTID"), Null)
		strDisplName = GetSafeStr(objDataObjects("DISPLAYNAME"), -1, "")
		
		arrTree(0, i) = strObjID
		arrTree(1, i) = strDisplName
		arrTree(2, i) = GetDetailObjectsTree(strObjID, kDelim & strObjID & kDelim)
		arrTree(3, i) = kDelim & strObjID & kDelim
		
		i = i + 1
		objDataObjects.MoveNext
	Wend
	
	GetDataObjectsTree = arrTree
End Function

Function GetDetailObjectsTree( strMasterObjID, ByVal strIDs)
	Dim objDataObjects
	Dim arrTree
	Dim strObjID, strDisplName
	Dim nCnt, i, j
	Dim nPos

	Set objDataObjects = objNSNETWork.GetObjectRelationShips( strQueryId , strFunctionalityType, strMasterObjID)
	If objDataObjects.EOF Then
		GetDetailObjectsTree = Empty
		Exit Function
	End If
	
	nCnt = objDataObjects.RecordCount - 1
	ReDim arrTree(3, nCnt) ' 1st index: 0 - OBJECTID, 1 - DISPLAYNAME, 2 - array of child objects, 3 - str of IDs path
	
	i = 0
	While Not objDataObjects.EOF
		strObjID = GetSafeID(objDataObjects("OBJECTID"), Null)
		strDisplName = GetSafeStr(objDataObjects("DISPLAYNAME"), -1, "")
		
		If InStr(strIDs, kDelim & strObjID & kDelim) = 0 Then
			arrTree(0, i) = strObjID
			arrTree(1, i) = strDisplName
			arrTree(2, i) = GetDetailObjectsTree(strObjID, strIDs & strObjID & kDelim)
			arrTree(3, i) = strIDs & strObjID & kDelim
			
			i = i + 1
		End If
		objDataObjects.MoveNext
	Wend

	If i = 0 Then
		GetDetailObjectsTree = Empty
		Exit Function
	End If

	If i <> (nCnt + 1) Then
		ReDim Preserve arrTree(3, i - 1)
	End If

	GetDetailObjectsTree = arrTree
End Function
%>
