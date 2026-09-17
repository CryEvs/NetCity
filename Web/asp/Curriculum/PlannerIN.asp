<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/teacher.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/screenNonPrint.asp -->
<!-- #INCLUDE FILE="PlannerCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strCurrElemType
Dim strCurrPlanID, strCurrUnitID, strCurrLessonID, strCurrElemName

Dim strNotSwitch
Dim strExpCol, strExpElem
Dim xDOMObj, oXSL

Dim strSubjectID, strGradeID, strVariantID
Dim objPlansRs, bPlansEmpty, bNeedRefreshTree
Dim strTreeFilterOld, strTreeFilterNew
Dim bAll
Dim bHasSelection

Sub ReadState()
	Dim strXmlSource

	SetScriptTimeOut 900

	strCurrPlanID = GetSafeStrParam(Request("PLANID"),GetSafeStrParam(obTokenMgr.GetData(strToken,stCurrPlan),"0"))
	strCurrUnitID = GetSafeID(Request("UNID"),GetSafeID(obTokenMgr.GetData(strToken,stCrMngmUnitID),"0"))
	strCurrLessonID = GetSafeID(Request("LSID"),GetSafeID(obTokenMgr.GetData(strToken,stCrMngmLessonID),"0"))
	strCurrElemType = GetSafeStr(Request("ELEMTYPE"),2,"")
	strCurrElemName = GetSafeStr(Request("ELEMNAME"),200,"")
	strNotSwitch = GetSafeStr(Request("NOTSWITCH"),1,"N")
	strExpCol = GetSafeStr(Request("EXPCOL"),10,"")
	strExpElem = GetSafeStr(Request("EXPANDELEM"),1,"N")

' Get from obTokenMgr
	strCurrYearID = GetSafeLng(obTokenMgr.GetData(strToken,stCurrYear), Null)
	strSubjectID = GetSafeLng(obTokenMgr.GetData(strToken, stCurrSubject), Null)
	strGradeID = GetSafeLng(obTokenMgr.GetData(strToken, stCurrGrade), Null)
	strVariantID = GetSafeLng(obTokenMgr.GetData(strToken, "VARIANTID"), Null)
	bAll = GetSafeBool(obTokenMgr.GetData(strToken, stCrMgmAll), Null)

	Set xDOMObj = GetXMLTree(stCrMngmXMLTree)
	Set oXSL = GetXMLTree(stCrMngmXSL)

	strTreeFilterNew = strCurrYearID & "," & strSubjectID & "," & strGradeID & "," & strVariantID
	strTreeFilterOld = CStr(obTokenMgr.GetData(strToken, stCurrPlannerTreeFilter))

	bNeedRefreshTree = True
	If (strTreeFilterNew = strTreeFilterOld) And (Not xDOMObj Is Nothing) Then
		If xDOMObj.text<>"" Then bNeedRefreshTree = False
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stCrMngmXMLTree, xDOMObj.xml)
	If Not oXSL Is Nothing Then Call obTokenMgr.SetData(strToken, stCrMngmXSL, oXSL.xml)
	Call obTokenMgr.SetData(strToken, stCurrPlannerTreeFilter, strTreeFilterNew)
End Sub

Sub Main()
%>
<script language="jscript" runat="server">
	function jSwitchPlan( strPlanID ) {
		var node = xDOMObj.selectSingleNode("/PlannerTree/Plan[PlanID='"+strPlanID+"']/Opened");
		if( node != null )
			node.text = (node.text == "0") ? "1" : "0";
	}

	function jSwitchUnit( strPlanID, strUnitID ) {
		var node = xDOMObj.selectSingleNode("/PlannerTree/Plan[PlanID='"+strPlanID+"']/Units/Unit[UnitID="+strUnitID+"]/Opened");
		if( node != null )
			node.text = (node.text == "0") ? "1" : "0";
	}

	function jOpenPlan( strPlanID ) {
		var node = xDOMObj.selectSingleNode("/PlannerTree/Plan[PlanID='"+strPlanID+"']/Opened");
		if( node != null )
			node.text = "1";
	}

	function jOpenUnit( strPlanID, strUnitID ) {
		var node = xDOMObj.selectSingleNode("/PlannerTree/Plan[PlanID='"+strPlanID+"']/Units/Unit[UnitID="+strUnitID+"]/Opened");
		if( node != null )
			node.text = "1";
	}

	function jClosePlan( strPlanID ) {
		var node = xDOMObj.selectSingleNode("/PlannerTree/Plan[PlanID='"+strPlanID+"']/Opened");
		if( node != null )
			node.text = "0";
	}

	function jCloseUnit( strPlanID, strUnitID ) {
		var node = xDOMObj.selectSingleNode("/PlannerTree/Plan[PlanID='"+strPlanID+"']/Units/Unit[UnitID="+strUnitID+"]/Opened");
		if( node != null )
			node.text = "0";
	}

	function jExpandAll() {
		var nodes = xDOMObj.selectNodes("//Opened");
		for( var i = 0; i < nodes.length; i++ )
			nodes[i].text = "1";
	}

	function jCollapseAll() {
		var nodes = xDOMObj.selectNodes("//Opened");
		for( var i = 0; i < nodes.length; i++ )
			nodes[i].text = "0";
	}
</script>
<%
	Dim strUnitID, strCom, strClause, strClause2

	If bNeedRefreshTree Then Call BuildPlannerTree()

	bHasSelection = False
	If Not bPlansEmpty Then
		If oXSL Is Nothing Then Call LoadXSL()

		Dim node
		xDOMObj.selectSingleNode("/PlannerTree/CurrElemType").text = strCurrElemType
		xDOMObj.selectSingleNode("/PlannerTree/CurrPlanID").text = strCurrPlanID
		xDOMObj.selectSingleNode("/PlannerTree/CurrUnitID").text = strCurrUnitID
		xDOMObj.selectSingleNode("/PlannerTree/CurrLessonID").text = strCurrLessonID

		If strCurrElemType="pl" And strNotSwitch<>"Y" Then jSwitchPlan strCurrPlanID
		If strCurrElemType="pl" And strExpElem="Y" Then jOpenPlan strCurrPlanID

		If strCurrElemType="un" And strNotSwitch<>"Y" Then jSwitchUnit strCurrPlanID, strCurrUnitID
		If strCurrElemType="un" And strExpElem="Y" Then jOpenUnit strCurrPlanID, strCurrUnitID

		If strCurrElemType="ls" And strNotSwitch<>"Y" Then jSwitchLesson strCurrPlanID, strCurrUnitID, strCurrLessonID

		If strExpCol="exp" Then jExpandAll
		If strExpCol="clps" Then jCollapseAll

		Dim plNodes, plCnt, plNode
		Set plNodes = xDOMObj.selectNodes("//Plan")
		plCnt = 0
		While plCnt < plNodes.length
			Set plNode = plNodes(plCnt)
			If strNotSwitch = "Y" Then
				If plNode.selectNodes("Units/Unit").length > 0 Then
					If plNode.selectSingleNode("Opened").text = "1" Then
						If strCurrElemType = "pl" And CStr(strCurrPlanID) = CStr(plNode.selectSingleNode("PlanID").text) Then
							bHasSelection = True
						End If
					Else
						If strCurrElemType = "pl" And CStr(strCurrPlanID) = CStr(plNode.selectSingleNode("PlanID").text) Then
							bHasSelection = True
						End If
					End If
				Else
					If strCurrElemType = "pl" And CStr(strCurrPlanID) = CStr(plNode.selectSingleNode("PlanID").text) Then
						bHasSelection = True
					End If
				End If
			End If
			plCnt = plCnt + 1
		WEnd

		Dim unNodes, unCnt, unNode
		Set unNodes = xDOMObj.selectNodes("//Plan[Opened='1']/Units/Unit")
		unCnt = 0
		While unCnt < unNodes.length
			Set unNode = unNodes(unCnt)
			If strNotSwitch = "Y" Then
				If unNode.selectNodes("Lessons/Lesson").length > 0 Then
					If unNode.selectSingleNode("Opened").text = "1" Then
							If strCurrElemType = "un" And CLng(strCurrUnitID) = CLng(unNode.selectSingleNode("UnitID").text) Then
								bHasSelection = True
							End If
					Else
						If strCurrElemType = "un" And CLng(strCurrUnitID) = CLng(unNode.selectSingleNode("UnitID").text) Then
							bHasSelection = True
						End If
					End If
				Else
					If strCurrElemType = "un" And CLng(strCurrUnitID) = CLng(unNode.selectSingleNode("UnitID").text) Then
						bHasSelection = True
					End If
				End If
			End If
			unCnt = unCnt + 1
		WEnd

		Dim lsNodes, lsCnt, lsNode
		Set lsNodes = xDOMObj.selectNodes("//Plan[Opened='1']/Units/Unit[Opened='1']/Lessons/Lesson")
		lsCnt = 0
		While lsCnt < lsNodes.length
			Set lsNode = lsNodes(lsCnt)
			If strCurrElemType = "ls" And CLng(strCurrLessonID) = CLng(lsNode.selectSingleNode("LessonID").text) Then
				bHasSelection = True
			End If
			lsCnt = lsCnt + 1
		WEnd
	End If
End Sub

Function onLoad()
	If bHasSelection Then 
		onLoad = "freezeParentScrolling();"
	Else
		onLoad = ""
	End If
End Function


Sub onHead()
%>
<script><!--
var currElementID = '0';
<%If strCurrElemType="pl" Then %>
	currElementID = '<%=strCurrPlanID%>';
<%ElseIf strCurrElemType="un" Then %>
	currElementID = '<%=strCurrUnitID%>';
<%ElseIf strCurrElemType="ls" Then %>
	currElementID = '<%=strCurrLessonID%>';
<%End If %>

var currElementType = '<%=strCurrElemType%>';
var currPlID = '<%=strCurrPlanID%>';
var currUnID = '<%=strCurrUnitID%>';
var currLsID = '<%=strCurrLessonID%>';
var currElementName = '<%=strCurrElemName%>';
var currElementEmpty = false;

$(document).ready(function() {
	if (currElementID > 0) {
		var currElem = $("p[name='" + currElementType + "_p_" + currElementID  + "']")
		currElem.addClass("bg-success")
		currElementEmpty = currElem.find("button[onclick]").length ==	 0;
		$("html, body").animate({scrollTop: currElem.offset().top}, 0);
	}
});


function setCurrElement(plID, unID, lsID, elemType, elemName) {
	if (currElementID != 0) {
		$("p[name='" + currElementType + "_p_" + currElementID  + "']").removeClass("bg-success")
	}
	currElementName = elemName;
	currPlID = plID;
	currUnID = unID;
	currLsID = lsID;
	
	if (elemType == 'pl')
		currElementID =  plID;
	else if (elemType == 'un')
		currElementID =  unID;
	else if (elemType == 'ls')
		currElementID =  lsID;

	currElementType = elemType;

	var currElem = $("p[name='" + currElementType + "_p_" + currElementID  + "']").addClass("bg-success")
	currElementEmpty = currElem.find("button[onclick]").length == 0;
}

function freezeParentScrolling() {
	if(window.parent && window.parent.freezeScrolling)
	{
		window.parent.freezeScrolling();
	}
}

function openCurrPlan(plID) {
	freezeParentScrolling();
	var form = document.forms["plannertree"];
	form.elements["PLANID"].value = plID;
	form.elements["ELEMTYPE"].value = 'pl';
	form.submit();
}

function openCurrUnit(plID,unID) {
	freezeParentScrolling();
	var form = document.forms["plannertree"];
	form.elements["PLANID"].value = plID;
	form.elements["UNID"].value = unID;
	form.elements["ELEMTYPE"].value = 'un';
	form.submit();
}
//-->
</script>
<%
End Sub

Sub onDrawPage()
%>
<form name="plannertree" method="get" action="/asp/Curriculum/PlannerIN.asp#CurrPos">
<%=WriteObligatoryTags()%>
	<input type="hidden" name="PLANID" value="<%=strCurrPlanID%>">
	<input type="hidden" name="UNID" value="<%=strCurrUnitID%>">
	<input type="hidden" name="LSID" value="<%=strCurrLessonID%>">
	<input type="hidden" name="ELEMTYPE" value="<%=strCurrElemType%>">
	<input type="hidden" name="ELEMNAME" value="<%=DB2Value(strCurrElemName)%>">
	<input type="hidden" name="SHOWTREE" value="Y">
	<table border="0" align="center" width="100%" cellpadding="5" cellspacing="0">
		<tr>
			<td valign="top" nowrap><%
				If bPlansEmpty Then
					DrawInfo obLanguage("Curriculum","kPlansEmpty")
				Else
					Response.Write xDOMObj.transformNode(oXSL)
					If xDOMObj.parseError.errorCode<>0 Then Response.Write xDOMObj.parseError.reason
				End If%>
			</td>
		</tr>
	</table>
</form>
<%
End Sub

Sub BuildPlannerTree
	Dim oldDOMObj
	Dim xRoot, xPlan, xUnit, xLesson
	Dim xUnits, xLessons, xObj
	Dim objUnitsRs, objLessonsRs
	Dim strPlanID, strUnitID, strLessonID
	Dim cmdPlanUnits, cmdUnitLessons
	Dim arrTempNodes, objTempNode, dctOpenedPlans, dctOpenedUnits


	If Not xDOMObj Is Nothing Then
		If xDOMObj.text <> "" Then Set oldDOMObj=xDOMObj
	End If

	Set xDOMObj = Server.CreateObject("MSXML2.FreeThreadedDOMDocument")
	Set xRoot = xDOMObj.createElement("PlannerTree")

	Set objPlansRs = objNSNET.GetSubjectPlanList(strFunctionalityType, strCurrYearID, strSubjectID, strGradeID, strVariantID, 0)
	bPlansEmpty = objPlansRs.EOF
	Set cmdPlanUnits = objNSNET.GetSubjectPlanUnitList_Prepare()
	Set cmdUnitLessons = objNSNET.GetUnitLessonList_Prepare(KTPViewReport_KSubjectPlanViewReduced)

	'поиск открытых узлов в предыдущем документе
	Set dctOpenedPlans = Server.CreateObject("NetCity.Storage")
	Set dctOpenedUnits = Server.CreateObject("NetCity.Storage")
	If Not IsEmpty(oldDOMObj) Then
		Set arrTempNodes = oldDOMObj.selectNodes("//Plan[Opened=1]/PlanID")
		For Each objTempNode in arrTempNodes
			Call dctOpenedPlans.SetData(CLng(objTempNode.text), 1)
		Next
	
		Set arrTempNodes = oldDOMObj.selectNodes("//Unit[Opened=1]/UnitID")
		For Each objTempNode in arrTempNodes
			Call dctOpenedUnits.SetData(CLng(objTempNode.text), 1)
		Next
	End If

	While Not objPlansRs.EOF
		If IsDull(objPlansRs("PLANID")) Then GenerateError kUnexpErrror
		strPlanID = objPlansRs("PLANID")

		Set xPlan = xDOMObj.createElement("Plan")
		xPlan.AppendChild(xDOMObj.CreateElement("PlanID"))
		xPlan.lastChild.text = strPlanID
		xPlan.AppendChild(xDOMObj.CreateElement("PlanName"))
		xPlan.lastChild.text = " "&objPlansRs("PLANNAME")
		xPlan.AppendChild(xDOMObj.CreateElement("NLetterHours"))
		xPlan.lastChild.text = " " & obLanguage("Curriculum", "kHoursShort") 
		xPlan.AppendChild(xDOMObj.CreateElement("Opened"))
		xPlan.lastChild.text = IIF(dctOpenedPlans.Exists(strPlanID), "1", "0")

		Set xUnits = xDOMObj.CreateElement("Units")
		Set objUnitsRs = objNSNET.GetSubjectPlanUnitList_Execute(cmdPlanUnits, strPlanID)
		While Not objUnitsRs.EOF
			strUnitID = objUnitsRs("UNITID")
			Set xUnit = xDOMObj.createElement("Unit")
			xUnit.AppendChild(xDOMObj.CreateElement("UnitID"))
			xUnit.lastChild.text = strUnitID
			xUnit.AppendChild(xDOMObj.CreateElement("UnitName"))
			xUnit.lastChild.text = objUnitsRs("UNITNAME")
			xUnit.AppendChild(xDOMObj.CreateElement("NUnitInPlan"))
			xUnit.lastChild.text = objUnitsRs("NUNITINPLAN")
			xUnit.AppendChild(xDOMObj.CreateElement("NUnitInPlanText"))
			xUnit.lastChild.text = " " & obLanguage("Curriculum", "kUnit") & " " & objUnitsRs("NUNITINPLAN")
			xUnit.AppendChild(xDOMObj.CreateElement("NLetterHours"))
			xUnit.lastChild.text = " " & obLanguage("Curriculum", "kHoursShort")
			xUnit.AppendChild(xDOMObj.CreateElement("Opened"))
			xUnit.lastChild.text = IIF(dctOpenedUnits.Exists(strUnitID), "1", "0")
			Set xLessons = xDOMObj.CreateElement("Lessons")
			Call AppendLessonsToXMLTree(xLessons, cmdUnitLessons, strUnitID, False)

			xUnit.AppendChild(xLessons)
			xUnits.AppendChild(xUnit)
			objUnitsRs.MoveNext
		WEnd
		xPlan.AppendChild(xUnits)

		xRoot.AppendChild(xPlan)
		objPlansRs.MoveNext
	WEnd
	xRoot.AppendChild(xDOMObj.CreateElement("CurrElemType"))
	xRoot.AppendChild(xDOMObj.CreateElement("CurrPlanID"))
	xRoot.AppendChild(xDOMObj.CreateElement("CurrUnitID"))
	xRoot.AppendChild(xDOMObj.CreateElement("CurrLessonID"))
	xDOMObj.AppendChild(xRoot)

	objNSNET.DisposeCommand(cmdPlanUnits)
	objNSNET.DisposeCommand(cmdUnitLessons)
	Set cmdPlanUnits = Nothing
	Set cmdUnitLessons = Nothing
End Sub

Sub LoadXSL()
	Dim strAttrText
	Dim attrNodes, attrCnt, attrNode

	Set oXSL = Server.CreateObject("MSXML2.FreeThreadedDOMDocument")
	oXSL.async = false
	oXSL.validateOnParse = False
	Dim loaded
	loaded = oXSL.Load(Server.MapPath("/asp/Curriculum/Planner.xsl"))
	If oXSL.parseError.errorCode<>0 Then Response.Write oXSL.parseError.reason
	
	' replace language dependend constants
	Set attrNodes = oXSL.selectNodes("//xsl:attribute[@name='onmouseover']")
	attrCnt = 0
	While attrCnt < attrNodes.length
		Set attrNode = attrNodes(attrCnt)
		strAttrText = attrNode.text
		strAttrText = Replace(strAttrText, "kXSLChoose", obLanguage("Curriculum","kXSLChoose"))
		strAttrText = Replace(strAttrText, "kXSLRollUnroll", obLanguage("Curriculum","kXSLRollUnroll"))
		attrNode.text = strAttrText
		attrCnt = attrCnt + 1
	WEnd
End Sub
%>
