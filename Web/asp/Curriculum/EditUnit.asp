<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE FILE="PlannerCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strPlanID, strUnitID
Dim strUnitName, strUnitDescription, bReadOnly, strET
Dim nUnitInPlan, nUnitInPlanMax
Dim bExtraActivity, strEaParam

Function GetPageTitle()
	If bReadOnly Then
		GetPageTitle = obLanguage("Curriculum","kTitleUnitView")
	Else
		If strUnitID = "-1" Then
			GetPageTitle = obLanguage("Curriculum","kTitleUnit")
		Else
			GetPageTitle = obLanguage("Curriculum","kTitleEditUnit")
		End If
	End If
End Function

Function GetPageMenuItem()
	GetPageMenuItem = IIf(bExtraActivity, MenuItem_miEA_LessonPlanning, MenuItem_miLessonPlanning)
End Function

Function GetPageTabItem()
	GetPageTabItem = IIf(bExtraActivity, TabItem_tbEA_LessonsPlans, TabItem_tbLessonsPlans)
	bTabInternalPage = True
 End Function

Sub ReadState()
	strUnitID = GetSafeStrParam(Request("UNID"), Null)
	strPlanID = GetSafeStrParam(Request("PLANID"), Null)
	bReadOnly = CBool(Request("RO"))

	bExtraActivity = GetSafeBool(Request("extraActivity"), False)
	strEaParam = IIf(bExtraActivity, "?extraActivity=true", "")
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stCrMngmUnitID, strUnitID)
	Call obTokenMgr.SetData(strToken, stCurrPlan, strPlanID)
End Sub

Sub Main()
	Dim objUnitInfo
	Dim bTmpRO

	bTmpRO = bReadOnly
	Call CheckUserRightsOnEditPlan(strPlanID, strUnitID) ' bReadOnly is setting here
	If bTmpRO Then
		bReadOnly = bTmpRO
	End If
	If strUnitID = "-1" Then strET = "plan" Else strET = "unit"

	If strUnitID <> "-1" Then
		Set objUnitInfo = objNSNET.GetUnitInfo(strUnitID)
		If objUnitInfo.EOF Then GenerateError(obLanguage("Curriculum","kUnitNotExists"))
		strUnitName = CStr(objUnitInfo("UNITNAME"))
		nUnitInPlan = GetSafeLng(objUnitInfo("NUNITINPLAN"), Null)
		strUnitDescription = GetSafeStr(objUnitInfo("DESCRIPTION"), 2000, "")
	Else
		strUnitName = ""
		strUnitDescription = ""
	End If

	If Not bReadOnly Then
		If InStr(strPlanID, ",") > 0 Then
			' It is compound id. Plan has no units.
			nUnitInPlanMax = 0
		Else
			nUnitInPlanMax = objNSNET.GetUnitInPlanMax(strPlanID)
		End If
	
		If strUnitID = "-1" Then
			' для нового Раздела надо увеличить nUnitInPlanMax
			nUnitInPlanMax = nUnitInPlanMax + 1
			nUnitInPlan = nUnitInPlanMax
		End If
	End If
End Sub

Sub onHead()%>
<script src="<%=GetVersionedJsLink("libs/jquery.validate/jquery.validate.min.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("libs/jquery.validate/localization/messages_ru.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("uikit.validate.min.js")%>" type="text/javascript"></script>
<script><!--
function canSubmit() {
	<%If Not bReadOnly Then%>
		var form;
		form = $(document.forms["UnitEdit"]);

		form.validate({ 
			rules: {
				UN: {required: true, maxlength: <%=kUnitNameMaxLen%>},
				UD: {maxlength: 2000}
			}
		});

		if(!form.valid()){
			return false;
		}
	
		if( $(document.UnitEdit.NUNITINPLAN).val() != <%=nUnitInPlan%> ){
			return $.show.confirmation(language.Generic.Curriculum.kMsgChangeNUnitInPlan);
		}
	<%End If%>

	return true;
}

function saveUnit() {
	ok_check_db("UnitEdit", "SaveUnit.asp<%=strEaParam%>");
}

function Back() {
	$.when(dataWereChanged && $.show.confirmation(language.Generic.Common.kDataWereChanged) || !dataWereChanged).then(function(){
		DoSubmit(document.UnitEdit, '/angular/school/planning/subjectplans/<%=strEaParam%>');
	});
}
//-->
</script>
<%End Sub

Sub DrawButtons
	ButtonCancel "Back()", obLanguage("Common","kBack")
	ButtonSave "saveUnit()", obLanguage("Common","kSave")
	ButtonReset "resetScreen('UnitEdit');", obLanguage("Common","kReset")
End Sub

Sub onDrawPage()%>
	<form NAME="UnitEdit" METHOD="post" ACTION="/asp/Curriculum/SaveUnit.asp<%=strEaParam%>" class="form-horizontal form-edit" OnKeyPress="dataChanged()">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("elemType", strET))%><%
		If Not bReadOnly Then Call DrawButtonPanel()
		SetFiltersWidth "", "col-md-2", "col-md-8"
		If bReadOnly Then
			Call DrawReadonlyRow( obLanguage("Curriculum","kUnitName"), strUnitName )
			Call DrawReadonlyRow( obLanguage("Curriculum","kNUnitINPlan"), nUnitInPlan )
			Call DrawReadonlyRow( obLanguage("Curriculum","kDescription"), strUnitDescription )
		Else
			Call DrawInputRowWithClass(obLanguage("Curriculum","kUnitName"), strUnitName, "UN", "text", 60, kUnitNameMaxLen, "", "FilterWhiteSpace")
			Call DrawSelectInfoRow( obLanguage("Curriculum","kNUnitINPlan"), nUnitInPlan, "NUNITINPLAN", GetIntervalFilterArray(nUnitInPlanMax), "", "", Null, "dataChanged();")
			Call DrawInputRow( obLanguage("Curriculum","kDescription"), strUnitDescription, "UD", "area", 60, 5, "")
		End If%>
	</form><%
End Sub%>
