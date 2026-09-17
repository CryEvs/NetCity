<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE FILE="PlannerCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strUnitID, strUnitName, strNewUnitName, strPlanID, strPlanIDOrig
Dim bReadOnly
Dim objPlansRs
Dim nUnitInPlan, nUnitInPlanMax
Dim bReadOnlyForAuthor
Dim bExtraActivity, strEaParam

Function GetPageTitle()
	GetPageTitle = obLanguage("Curriculum","kTitleCopyUnit") & " " & GreenText(strUnitName) & " " & obLanguage("Curriculum","kTo")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = IIf(bExtraActivity, MenuItem_miEA_LessonPlanning, MenuItem_miLessonPlanning)
End Function

Function GetPageTabItem()
	GetPageTabItem = IIf(bExtraActivity, TabItem_tbEA_LessonsPlans, TabItem_tbLessonsPlans)
	bTabInternalPage = True
 End Function

Sub ReadState()
	strUnitID = GetSafeID(Request("UNID"),GetSafeID(obTokenMgr.GetData(strToken,stCrMngmUnitID),"0"))
	strPlanID = GetSafeStrParam(Request("PLANID"), "0")
	strPlanIDOrig = GetSafeID(Request("PLANID_ORIG"), strPlanID)
	strNewUnitName = Trim(GetSafeStr(Request("UN"), kUnitNameMaxLen, ""))
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
	Call obTokenMgr.SetData(strToken, stCurrPlan, strPlanID)
	Call obTokenMgr.SetData(strToken, stCrMngmUnitID, strUnitID)
End Sub

Sub Main()
	Dim objUnitInfo
	Set objUnitInfo = objNSNET.GetUnitInfo(strUnitID)
	strUnitName = objUnitInfo("UnitName")

	If strPlanID = "0" Then
		strPlanID =  objUnitInfo("PlanID")
		strPlanIDOrig = strPlanID
		strNewUnitName = strUnitName
	End If

	'***************************************************************************
	' check user rights here
	Call CheckUserRightsOnEditPlan(strPlanIDOrig, strUnitID)
	If bReadOnly Then GenerateError(obLanguage("Common","kErrPageAccess")) ' COPY is not allowed for readonly state!
	'***************************************************************************

	Set objPlansRs = GetPlansWithSameSubject(strPlanIDOrig, bReadOnlyForAuthor)
	strPlanID = GetSafeIDForRs(strPlanID, objPlansRs, "PLANID")
	If CStr(strPlanID) = "0" Then
		If Not objPlansRs.EOF Then
			strPlanID = CStr(objPlansRs("PLANID"))
			strPlanIDOrig = strPlanID
		End If
	End If

	If InStr(strPlanID, ",") > 0 Then
		' It is compound id. Plan has no units.
		nUnitInPlanMax = 0
	Else
		nUnitInPlanMax = objNSNET.GetUnitInPlanMax(strPlanID)
	End If
	' copy as create new
	nUnitInPlanMax = nUnitInPlanMax + 1
	nUnitInPlan = nUnitInPlanMax
End Sub

Sub onHead()%>
<script src="<%=GetVersionedJsLink("libs/jquery.validate/jquery.validate.min.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("libs/jquery.validate/localization/messages_ru.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("uikit.validate.min.js")%>" type="text/javascript"></script>

<SCRIPT><!--
function changeFilter(){
	DoSubmit(document.forms["main"], "CopyUnit.asp" & strEaParam);
}
function canSubmit(){
	var form;
	form = $(document.forms["main"]);

	form.validate({ 
		rules: {
			UN: {required: true, maxlength: 2000}
		}
	});

	if(!form.valid()){
		return false;
	}

	if( $("select[name='NUNITINPLAN']", form).val() != <%=nUnitInPlan%> ){
		return $.show.confirmation(language.Generic.Curriculum.kMsgChangeNUnitInPlan);
	}
	return true;
}
function saveUnit() {
	ok_check_db("main", "SaveUnitCopy.asp<%=strEaParam%>");
}
function Back() {
	DoSubmit(document.main, '/angular/school/planning/subjectplans/<%=strEaParam%>');
}
//-->
</SCRIPT>
<%
End Sub

Sub DrawButtons
	ButtonCancel "Back()", obLanguage("Common","kBack")
	Call ButtonSave( "saveUnit()", obLanguage("Curriculum","kCopyUnit") )
End Sub

Sub onDrawPage()%>
<form name="main" METHOD="post" ACTION="/asp/Curriculum/SaveUnitCopy.asp<%=strEaParam%>" class="form-horizontal form-edit" OnKeyPress="dataChanged()">
<%=WriteObligatoryTags()%>
<%=WriteHiddenTags(Array("PLANID_ORIG", strPlanIDOrig, "elemType", "unit")) %><%
	DrawButtonPanel
	SetFiltersWidth "", "col-md-3", "col-md-8"
	Call DrawSelectInfoRow( obLanguage("Common","kSubject"), strPlanID, "PLANID", objPlansRs, "PLANID", "PLANNAME", Null, "changeFilter();" )
	Call DrawInputRowWithClass(obLanguage("Curriculum", "kByName"), strNewUnitName, "UN", "text", 50, kUnitNameMaxLen, "", "FilterWhiteSpace")
	Call DrawSelectInfoRow( obLanguage("Curriculum","kNUnitINPlan"), nUnitInPlan, "NUNITINPLAN", GetIntervalFilterArray(nUnitInPlanMax), "", "", Null, "dataChanged();")
	%>
</form><%
End Sub
%>
