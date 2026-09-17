<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FiltersCommon.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterWeeks.asp -->
<!-- #INCLUDE FILE="PlannerCommon.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
' AT=<Access Token>
' PLANID=<PlanID> - copy to
' PLANID_ORIG=<PlanID original> - copy from
' UNID=<UnitID>
' LSID=<LessonID>
' NLNAME=<New Lesson Name>


Dim strPlanIDOrig, strPlanID, strUnitID, strLessonID
Dim objRs, rsPlans, objUnitsRs, bEmptyUnits
Dim strNewLessonName, objLessonInfo, strLessonName
Dim bReadOnly
Dim bReadOnlyForAuthor
Dim bExtraActivity, strEaParam

Dim nCurriculumHours, nCurriculumHoursLimit
Dim nLessonInUnit, nLessonInUnitMax

Function GetPageTitle()
	GetPageTitle = obLanguage("Curriculum","kTitleCopyLesson") & " " & GreenText(strLessonName) & " " & obLanguage("Curriculum","kTo")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = IIf(bExtraActivity, MenuItem_miEA_LessonPlanning, MenuItem_miLessonPlanning)
End Function

Function GetPageTabItem()
	GetPageTabItem = IIf(bExtraActivity, TabItem_tbEA_LessonsPlans, TabItem_tbLessonsPlans)
	bTabInternalPage = True
 End Function

Sub ReadState()
	strLessonID = GetSafeID(Request("LSID"),GetSafeID(obTokenMgr.GetData(strToken,stCrMngmLessonID),"0"))
	strPlanIDOrig = GetSafeID(Request("PLANID_ORIG"), "0")
	strPlanID = GetSafeStrParam(Request("PLANID"), "0")
	strUnitID = GetSafeID(Request("UNID"), "0")
	strNewLessonName = Trim(GetSafeStr(Request("NLNAME"), 200, ""))
	If HasUserRight(arCurrMgmCreateAll) Then
		' В данном случае эта роль "перебивает" выставленный в Planner.asp флаг bReadOnlyForAuthor
		bReadOnlyForAuthor = False
	Else
		bReadOnlyForAuthor = obTokenMgr.GetData(strToken, stReadOnlyForAuthor)
	End If
	bExtraActivity = GetSafeBool(Request("extraActivity"), False)
	strEaParam = IIf(bExtraActivity, "?extraActivity=true", "")
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,stCrMngmLessonID, strLessonID)
End Sub

Sub Main()
	Dim cmdPlanUnits
	Dim objUnitInfo

	Set objLessonInfo = objNSNET.GetLessonInfo(strLessonID)
	If objLessonInfo.EOF Then GenerateError(obLanguage("Curriculum","kLessonNotExists"))

	strLessonName = CStr(objLessonInfo("LESSONNAME"))

	If strPlanIDOrig = "0" Then
		' Get original lesson info
		strUnitID = CStr(objLessonInfo("UNITID"))

		Set objUnitInfo = objNSNET.GetUnitInfo(strUnitID)
		strPlanID = CStr(objUnitInfo("PLANID"))

		strPlanIDOrig = strPlanID

		strNewLessonName = strLessonName
	End If

	' check user rights here
	Call CheckUserRightsOnEditPlan(strPlanIDOrig, strLessonID)
	If bReadOnly Then GenerateError(obLanguage("Common","kErrPageAccess")) ' COPY is not allowed for readonly state!
	Set rsPlans = GetPlansWithSameSubject(strPlanIDOrig, bReadOnlyForAuthor)
	strPlanID = GetSafeIDForRs(strPlanID, rsPlans, "PLANID")
	If CStr(strPlanID) = "0" Then
		If Not rsPlans.EOF Then
			strPlanID = CStr(rsPlans("PLANID"))
			strPlanIDOrig = strPlanID
		End If
	End If

	Set objUnitsRs = objNSNET.GetUnitList(strPlanID)

	bEmptyUnits = objUnitsRs.EOF
	If Not bEmptyUnits Then
		Call comHelper.DataSetAdapterHelper.AddTemplatedColumn(objUnitsRs, "NAME", Array("NUNITINPLAN", "UNITNAME"), "{0}. {1}")

		If strUnitID <> "0" Then
			' validate strUnitID
			Set objUnitInfo = objNSNET.GetUnitInfo(strUnitID)
			If objUnitInfo.EOF Then GenerateError(obLanguage("Curriculum","kUnitNotExists"))
			If strPlanID <> GetSafeID(objUnitInfo("PLANID"), Null) Then strUnitID = "0" ' was invalid strUnitID
		End If
		If strUnitID = "0" Then strUnitID = CStr(objUnitsRs("UNITID")) ' get first

		nLessonInUnitMax = objNSNET.GetLessonInUnitMax(strUnitID)
		' copy as create new
		nLessonInUnitMax = nLessonInUnitMax + 1
		nLessonInUnit = nLessonInUnitMax
	End If
End Sub

Sub onHead()%>
<script src="<%=GetVersionedJsLink("libs/jquery.validate/jquery.validate.min.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("libs/jquery.validate/localization/messages_ru.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("uikit.validate.min.js")%>" type="text/javascript"></script>

<script><!--
function changeFilter(){
	DoSubmit(document.forms["LessonCopy"], "CopyLesson.asp<%=strEaParam%>");
}
function canSubmit(){
<%If Not bEmptyUnits Then%>	

	var form;
	form = $(document.forms["LessonCopy"]);

	form.validate({ 
		rules: {
			NLNAME: {required: true, maxlength: 2000}
		}
	});

	if(!form.valid()){
		return false;
	}

	if( $("select[name='NLESSONINUNIT']", form).val() != <%=nLessonInUnit%> ){
		return $.show.confirmation(language.Generic.Curriculum.kMsgChangeNLessonInUnit);
	}
<%End If%>	
	return true;
}
function saveLesson(){
	ok_check_db("LessonCopy", "SaveLessonCopy.asp<%=strEaParam%>");
}
function Back(){
	DoSubmit(document.LessonCopy, '/angular/school/planning/subjectplans/<%=strEaParam%>');
}
//-->
</script><%
End Sub

Sub DrawButtons
	ButtonCancel "Back()", obLanguage("Common","kBack")
	If Not bEmptyUnits Then Call ButtonSave( "saveLesson()", obLanguage("Curriculum","kCopyLesson") )
End Sub

Sub onDrawPage()
%>
<form NAME="LessonCopy" METHOD="post" ACTION="CopyLesson.asp<%=strEaParam%>" class="form-horizontal form-edit" OnKeyPress="dataChanged()">
<%=WriteObligatoryTags()%>
<%=WriteHiddenTags(Array("PLANID_ORIG", strPlanIDOrig, "elemType", "lesson")) %>
<%If bEmptyUnits Then%>
	<%=WriteHiddenTags(Array("NLNAME", strNewLessonName)) %>
<%End If
	DrawButtonPanel

	Call DrawSelectInfoRow( obLanguage("Curriculum","kVariant"), strPlanID, "PLANID", rsPlans, "PLANID", "PLANNAME", Null, "changeFilter();" )
	If bEmptyUnits Then
		DrawInfo obLanguage("Curriculum","kEmptyUnits"), False
	Else
		Call DrawSelectInfoRow( obLanguage("Curriculum","kUnit"), strUnitID, "UNID", objUnitsRS, "UNITID", "NAME", Null, "changeFilter();" )
		Call DrawInputRowWithClass(obLanguage("Curriculum", "kByName"), strNewLessonName, "NLNAME", "text", 50, kLessonNameMaxLen_DB, "", "FilterWhiteSpace")
		Call DrawFilterRow( "", obLanguage("Curriculum","kNumLessonInUnit", strFunctionalityType), "NLESSONINUNIT", GetIntervalFilterArray(nLessonInUnitMax), "", "", Null, False)
	End If
	%>
</form>
<%
End Sub
%>
