<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterYears.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterWeeks.asp -->
<!-- #INCLUDE FILE="PlannerCommon.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/attachments_inc.asp -->

<%	'© 2007-2015 IRTech. All rights reserved.
'--------- Page Parameters -------
' AT=<Access Token>
' UNID=<UnitID>
' LSID=<LessonID>
' LN=<Lesson Name>
' NLESSONINUNIT=<NLessonInUnit>
' NHOURS=<Lesson Hours>
' LD=<Lesson Description>
' BOOKREF=<Reference books>

Const kLessonHoursMax = 100

Dim strUnitID, strLessonID, gradeId
Dim bReadOnly, objRs, strET
Dim objUnitInfo, objUnitList
Dim objLessonInfo

Dim strLessonName, strDescription, strBookRef, strHomework, strDetails
Dim strLessonHours
Dim nLessonInUnit, nLessonInUnitMax
Dim bSelfPage, strBackPage, objForm
Dim strCodeContentElement, strContentElement

Dim strValuablyFocusedComponent
Dim strDetailInfComponent
Dim strTotalLearningAndSubjectSkills
Dim strTeachConditionAndImplementer
Dim strAT, strVer
Dim strFilesJson
Dim strPlanID
Dim bExtraActivity, strEaParam

Function GetPageTitle()
	If bReadOnly Then
		GetPageTitle = obLanguage("Curriculum","kTitleLessonView")
	Else
		If strLessonID <> "-1" Then
			GetPageTitle = obLanguage("Curriculum","kTitleEditLesson",strFunctionalityType)
		Else
			GetPageTitle = obLanguage("Curriculum","kTitleCreateLessonForUnit", strFunctionalityType) & " " & GreenText(DB2HTML(objUnitInfo("UNITNAME")))
		End If
	End If
End Function

Function GetPageMenuItem()
	GetPageMenuItem = IIf(bExtraActivity, MenuItem_miEA_LessonPlanning, MenuItem_miLessonPlanning)
End Function

Function GetPageTabItem()
	bTabInternalPage = True
	GetPageTabItem = IIf(bExtraActivity, TabItem_tbEA_LessonsPlans, TabItem_tbLessonsPlans)
 End Function

Sub ReadState()
	strUnitID		= GetSafeID(Request("UNID"), GetSafeID(obTokenMgr.GetData(strToken,stCrMngmUnitID), "0"))
	strLessonID		= GetSafeID(Request("LSID"), GetSafeID(obTokenMgr.GetData(strToken,stCrMngmLessonID), "-1"))
	gradeId			= GetSafeLng(Request("GRADEID"), kDefValue)
	bReadOnly		= CBool(Request("RO"))

	If bReadOnly And strLessonID = "-1" Then GenerateError obLanguage("Common","kInvalidParameter")

	bSelfPage		= (CStr(Request("Self_EditLesson")) = "1")

	bExtraActivity = GetSafeBool(Request("extraActivity"), False)
	strEaParam = IIf(bExtraActivity, "?extraActivity=true", "")
	strBackPage		= "/asp/Curriculum/EditLesson.asp" + strEaParam
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,stCrMngmUnitID, strUnitID)
	Call obTokenMgr.SetData(strToken,stCrMngmLessonID, strLessonID)
	Call obTokenMgr.SetData(strToken, stCurrPlan, strPlanID)
End Sub

Sub Main()
	Dim bInc_NInWeekMax, nStatus, dtNextWeek
	Dim bTmpRO, objSubjectPlanInfo

	Set objUnitInfo = objNSNET.GetUnitInfo(strUnitID)
	
	If objUnitInfo.EOF Then GenerateError(obLanguage("Curriculum","kUnitNotExists"))	
	strPlanID = objUnitInfo("PLANID")

	If gradeId = "-1" Then
		Set objSubjectPlanInfo = objNSNET.GetSubjectPlanInfo(strPlanID)
		gradeId = objSubjectPlanInfo("GRADE")
	End If

	bTmpRO = bReadOnly
	Call CheckUserRightsOnEditPlan(strPlanID, strLessonID)

	If bTmpRO Then
		bReadOnly = bTmpRO
	End If
	
	Set objUnitList = objNSNET.GetUnitList(strPlanID)
	If objUnitList.EOF Then GenerateError(obLanguage("Curriculum","kUnitNotExists"))
	Call comHelper.DataSetAdapterHelper.AddTemplatedColumn(objUnitList, "NAME", Array("NUNITINPLAN", "UNITNAME"), "{0}. {1}")

	strFilesJson = ""
	If strLessonID <> "-1" Then
		Dim oAttachmentsComponent, result

		Set objLessonInfo = objNSNET.GetLessonInfoWithContentElements(strLessonID)
		If objLessonInfo.EOF Then GenerateError(obLanguage("Curriculum","kLessonNotExists"))

		Set oAttachmentsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IFileAttachmentsComponent")

		Set result = oAttachmentsComponent.GetFileAttachmentInfoLesson(strLessonID)
		strFilesJson = ConvertJsonObject2Str(result)
	End If

	If (Not bSelfPage And strLessonID <> "-1") Or bReadOnly Then
		strLessonName						= GetSafeStr(objLessonInfo("LESSONNAME"), kLessonNameMaxLen_DB, Null)
		strLessonHours						= CStr(objLessonInfo("HOURS"))
		strDescription						= GetSafeStr(objLessonInfo("DESCRIPTION"), 2000, "")
		strHomework							= GetSafeStr(objLessonInfo("HOMEASSIGNMENT"), kHomeWorkMaxLen_DB, "")
		strDetails							= GetSafeStr(objLessonInfo("DETAILS"), 2000, "")
		strCodeContentElement				= GetSafeStr(objLessonInfo("CODECONTENTELEMENT"), -1, "")
		strContentElement					= GetSafeStr(objLessonInfo("CONTENTELEMENT"), -1, "")
		strBookRef							= GetSafeStr(objLessonInfo("BOOKREF"), 2000, "")
		strDetailInfComponent				= GetSafeStr(objLessonInfo("EXTRAINFO1"), 2000, "")
		strTotalLearningAndSubjectSkills	= GetSafeStr(objLessonInfo("EXTRAINFO2"), 2000, "")
		strValuablyFocusedComponent			= GetSafeStr(objLessonInfo("EXTRAINFO3"), 2000, "")
		strTeachConditionAndImplementer		= GetSafeStr(objLessonInfo("EXTRAINFO4"), 2000, "")
	Else
		strLessonName						= Trim(GetSafeStr(Request("LN"), 200, ""))
		strLessonHours						= GetSafeStr(Request("NHOURS"), -1, "1")
		strDescription						= GetSafeStr(Request("LD"), 2000, "")
		strHomework							= GetSafeStr(Request("HOMEASSIGNMENT"), kHomeWorkMaxLen_DB, "")
		strDetails							= GetSafeStr(Request("DETAILS"), 2000, "")
		strBookRef							= GetSafeStr(Request("BOOKREF"), 2000, "")
		strDetailInfComponent				= GetSafeStr(Request("EXTRAINFO1"), 2000, "")
		strTotalLearningAndSubjectSkills	= GetSafeStr(Request("EXTRAINFO2"), 2000, "")
		strValuablyFocusedComponent			= GetSafeStr(Request("EXTRAINFO3"), 2000, "")
		strTeachConditionAndImplementer		= GetSafeStr(Request("EXTRAINFO4"), 2000, "")
	End If

	If IsObject(obTokenMgr.GetData(strToken,"QA_dct")) Then
		Set objForm = obTokenMgr.GetData(strToken,"QA_dct")

		If GetSafeLng(objForm("IsAssignmentDct"), 0) <> 1 Then
			strLessonName						= GetSafeStr(objForm("LN"), 200, "")
			strLessonHours						= GetSafeStr(objForm("NHOURS"), 4000, "")
			strDescription						= GetSafeStr(objForm("LD"), 2000, "")
			strHomework							= GetSafeStr(objForm("HOMEASSIGNMENT"), 400, "")
			strDetails							= GetSafeStr(objForm("DETAILS"), 2000, "")
			strBookRef							= GetSafeStr(objForm("BOOKREF"), 2000, "")
			strDetailInfComponent				= GetSafeStr(objForm("EXTRAINFO1"), 2000, "")
			strTotalLearningAndSubjectSkills	= GetSafeStr(objForm("EXTRAINFO2"), 2000, "")
			strValuablyFocusedComponent			= GetSafeStr(objForm("EXTRAINFO3"), 2000, "")
			strTeachConditionAndImplementer		= GetSafeStr(objForm("EXTRAINFO4"), 2000, "")
		End If

		Call obTokenMgr.SetData(strToken, "QA_dct", Null)
	End If

	If Not bReadOnly Then
		' nLessonInUnitMax и nLessonInUnit меняются при смене Раздела, поэтому nLessonInUnit не берётся из Request
		nLessonInUnit = 0
		nLessonInUnitMax = objNSNET.GetLessonInUnitMax(strUnitID)

		If strLessonID <> "-1" Then
			' для существующего Урока и его первоначального Раздела nLessonInUnitMax увеличивать не надо
			If strUnitID = GetSafeID(objLessonInfo("UNITID"), Null) Then nLessonInUnit = GetSafeLng(objLessonInfo("NLESSONINUNIT"), Null) ' <> "0"
		End If

		If nLessonInUnit = 0 Then
			' для нового Урока или изменённого Раздела надо увеличить nLessonInUnitMax
			nLessonInUnitMax = nLessonInUnitMax + 1
			nLessonInUnit = nLessonInUnitMax
		End If
	End If

	If strLessonID = "-1" Then strET = "unit" Else strET = "lesson"
End Sub

Sub onHead()%>
<script src="/vendor/components/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>
<link href="/vendor/components/jquery-ui/themes/redmond/jquery-ui.min.css" rel="stylesheet" type="text/css"/>

<script src="/vendor/components/jquery.dynatree/dist/jquery.dynatree.min.js" type="text/javascript"></script>
<link href="/vendor/components/jquery.dynatree/dist/skin-vista/ui.dynatree.css" rel="stylesheet" type="text/css"/>

<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/file-attachments.min.css")%>">

<script type="text/javascript" src="<%=GetVersionedJsLink("contentElements.js")%>"></script>
<script type="text/javascript" src="/js/Tree.js"></script>

<script src="<%=GetVersionedJsLink("fileAttachmentCtrl.min.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedResLink("/static/dist/common/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script>

<script src="<%=GetVersionedJsLink("libs/jquery.validate/jquery.validate.min.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("libs/jquery.validate/localization/messages_ru.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("uikit.validate.min.js")%>" type="text/javascript"></script>

<script><!--
var fileAttachmentCtrl;

$(document).ready(function() {
	fileAttachmentCtrl = new FileAttachmentCtrl({
			multiple: true,
			showDescription: true,
			readonly: <%=Bool2JS(bReadOnly)%>,
			block: $('#attachFiles')
		}, {
			wasChanged: true,
			context: {
				LessonId: <%=GetSafeLng(strLessonID, 0)%>
			}
			<%If Not IsDull(strFilesJson) Then%>,
				files: <%=strFilesJson%>
			<%End If%>
		}
	);

	$("#tree").contentElementsTree({
		initAjax: {
			url: urlHelper.makeUrl("/asp/ajax/GetContentElements.asp", { 
				SECTIONSYSTEM: "LESSON",
				UNITID: <%=strUnitID%>, 
				LESSONID: <%=strLessonID%>,
				GRADEID: <%=gradeId%>
			}),
			data: { mode: "all" },
			cache: false // Append random '_' argument to url to prevent caching.
		}
	});
});

function canSubmit() {
<%If Not bReadOnly Then%>
	var form;
	form = $(document.forms["LessonEdit"]);

	form.validate({ 
		rules: {
			LN: {required: true, maxlength: <%=kLessonNameMaxLen_DB%>},
			NHOURS: {min: 1, max: <%=kLessonHoursMax%>},
			LD: {maxlength: 2000},
			BOOKREF: {maxlength: 2000},
			HOMEASSIGNMENT: {maxlength: <%=kHomeWorkMaxLen_DB%>},
			DETAILS: {maxlength: 2000},
			EXTRAINFO1: {maxlength: 2000},
			EXTRAINFO2: {maxlength: 2000},
			EXTRAINFO3: {maxlength: 2000},
			EXTRAINFO4: {maxlength: 2000}
		}
	});

	if(!form.valid()){
		return false;
	}
	
	if( $("[name='NLESSONINUNIT']", form).val() != <%=nLessonInUnit%> ){
		return $.show.getConfirmation(language.Generic.Curriculum.kMsgChangeNLessonInUnit);
	}

<%End If%>
	return true;
}

function saveLesson() {
	GetSchoolArray("tree");

	fileAttachmentCtrl.appendInputToForm(document.forms['LessonEdit']);
	ok_check_db("LessonEdit", "SaveLesson.asp<%=strEaParam%>");
}

function changeUnit() {
	DoSubmit(document.forms["LessonEdit"], "EditLesson.asp<%=strEaParam%>");
}

function Back() {
	checkForChanges().then(function () {
		DoSubmit(document.LessonEdit, '/angular/school/planning/subjectplans/<%=strEaParam%>');
	});
}
//-->
</script><%
End Sub

Sub DrawButtons()
	ButtonCancel "Back()", obLanguage("Common","kBack")
	If Not bReadOnly Then 
		ButtonSave "saveLesson()", obLanguage("Common","kSave")
		ButtonReset "resetScreen('LessonEdit');", obLanguage("Common","kReset")
	End If
End Sub

Sub onDrawPage()%>
<form NAME="LessonEdit" METHOD="post" ACTION="/asp/Curriculum/SaveLesson.asp<%=strEaParam%>" OnKeyPress="dataChanged()" class="form-horizontal form-edit form-sm">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags( Array( "tree", "")) %>
	<%=WriteHiddenTags(Array("RO", bReadOnly, "Self_EditLesson", "1", "DESTINATION", "", "BACK", strBackPage, "elemType", strET))%><%
	SetFiltersWidth "", "col-md-3", "col-md-7"
	If bReadOnly Then
		Call DrawReadonlyRow( obLanguage("Curriculum","kLesTheme", strFunctionalityType) & ":" , strLessonName )
		Call DrawReadonlyRow( obLanguage("Curriculum","kUnit") & ":", objUnitInfo("UNITNAME") )
		Call DrawReadonlyRow( obLanguage("Curriculum","kNumLessonInUnit", strFunctionalityType) & ":", objLessonInfo("NLESSONINUNIT") )
		Call DrawReadonlyRow( obLanguage("Curriculum","kHoursNumber") & ":", strLessonHours )

		If Not obContext.ServerSettings.SystemSettings.EnableLessonMaps Then
		Call DrawReadonlyRow( obLanguage("Curriculum","kLesMatter", strFunctionalityType) & ":", strDescription )
		End If

		Call DrawReadonlyRow( obLanguage("Curriculum","kBookRef") & ":", strBookRef )
		Call DrawReadonlyRow( obLanguage("Curriculum","kLessonHomework") & ":", strHomework )

		If Not obContext.ServerSettings.SystemSettings.EnableLessonMaps Then
		Call DrawReadonlyRow( obLanguage("Curriculum","kLessonDetails", strFunctionalityType) & ":", strDetails )
		End If

		Call OpenFormGroup(obLanguage("Common","kAttachedFiles"))
			%><div id="attachFiles"></div><%
		Call CloseFormGroup
			
		'Добавление КЭС
		If Module_QA_Available() And (CLng(strFunctionalityType) = kFuncType_Common) Then
			Call DrawReadonlyRow( obLanguage("Curriculum","kCodeElementContent") & ":", strCodeContentElement)
			Call DrawReadonlyRow( obLanguage("Curriculum","kElementContent") & ":", strContentElement)
		End If

		If Not obContext.ServerSettings.SystemSettings.EnableLessonMaps Then
			Call DrawReadonlyRow( obLanguage("Curriculum","kDetailInfComponent") & ":", strDetailInfComponent )
			Call DrawReadonlyRow( obLanguage("Curriculum","kTotalLearningAndSubjectSkills") & ":", strTotalLearningAndSubjectSkills )
			Call DrawReadonlyRow( obLanguage("Curriculum","kValuablyFocusedComponent") & ":", strValuablyFocusedComponent )
			Call DrawReadonlyRow( obLanguage("Curriculum","kTeachConditionAndImplementer") & ":", strTeachConditionAndImplementer)
		End If
	Else
		Call DrawButtonPanel()

		Call DrawInputRowWithClass(obLanguage("Curriculum", "kLesTheme", strFunctionalityType) & ":", strLessonName, "LN", "text", 60, kLessonNameMaxLen_DB, "", "FilterWhiteSpace")
		Call DrawSelectInfoRow( obLanguage("Curriculum","kUnit") & ":", strUnitID, "UNID", objUnitList, "UNITID", "NAME", Null, "changeUnit();" )
		Call DrawSelectInfoRow( obLanguage("Curriculum","kNumLessonInUnit", strFunctionalityType), nLessonInUnit, "NLESSONINUNIT", GetIntervalFilterArray(nLessonInUnitMax), "", "", Null, "dataChanged();")
		Call DrawInputRowAndNote( obLanguage("Curriculum","kHoursNumber") & ":", "", strLessonHours, "NHOURS", "text", 8, 4, "", "" )

		If Not obContext.ServerSettings.SystemSettings.EnableLessonMaps Then
		Call DrawInputRowAndNote( obLanguage("Curriculum","kLesMatter", strFunctionalityType) & ":", "",strDescription, "LD", "area", 60, 5, "", "" )
		End If

		Call DrawInputRowAndNote( obLanguage("Curriculum","kBookRef") & ":" ,obLanguage("Curriculum","kBookRefNote") , strBookRef, "BOOKREF", "area", 60, 5, "", "" )
		Call DrawInputRowAndNote( obLanguage("Curriculum","kLessonHomework") & ":", "", strHomework, "HOMEASSIGNMENT", "area", 60, 3, "", "" )

		If Not obContext.ServerSettings.SystemSettings.EnableLessonMaps Then
		Call DrawInputRowAndNote( obLanguage("Curriculum","kLessonDetails", strFunctionalityType) & ":", "", strDetails, "DETAILS", "area", 60, 5, "", "" )
		End If

		Call OpenFormGroup(obLanguage("Common","kAttachedFiles"))
			%><div id="attachFiles"></div><%
		Call CloseFormGroup

		If Module_QA_Available() And (CLng(strFunctionalityType) = kFuncType_Common) Then
			Call OpenFormGroup(obLanguage("Common","kContentElementCodes"))
				%><div id="tree"></div><%
			Call CloseFormGroup
		End If

		If Not obContext.ServerSettings.SystemSettings.EnableLessonMaps Then
			Call DrawInputRowAndNote( obLanguage("Curriculum","kDetailInfComponent") & ":", obLanguage("Curriculum","kDetailInfComponentNote") , strDetailInfComponent, "EXTRAINFO1", "area", 60, 5, "", "" )
			Call DrawInputRowAndNote( obLanguage("Curriculum","kTotalLearningAndSubjectSkills") & ":", obLanguage("Curriculum","kTotalLearningAndSubjectSkillsNote") , strTotalLearningAndSubjectSkills, "EXTRAINFO2", "area", 60, 5, "", "" )
			Call DrawInputRowAndNote( obLanguage("Curriculum","kValuablyFocusedComponent") & ":", obLanguage("Curriculum","kValuablyFocusedComponentNote") , strValuablyFocusedComponent, "EXTRAINFO3", "area", 60, 5, "", "" )
			Call DrawInputRowAndNote( obLanguage("Curriculum","kTeachConditionAndImplementer") & ":", obLanguage("Curriculum","kTeachConditionAndImplementerNote") , strTeachConditionAndImplementer, "EXTRAINFO4", "area", 60, 5, "", "" )
		End If

	End If%>
</form><%
End Sub%>