<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim i, objSubj, objClassInfo, objSgInfo, objTermsRS, objGroups
Dim lngSubj, lngGrade, lngProfile, lngGroup
Dim objTeachersRs, nTeacherID
Dim objIupLevels, lngIupLevel
Dim nSubjectGroupID, strClassName, strClassComments, strFromClassID
Dim bAllSubjectsBounded, bShowGroup
Dim bTeachersEmpty, bCanSave
Dim bExistsClassSubjectWithGroup
Dim strGroupName
Dim objAvailableIupGradesRs
Dim bNewSubjectGroup
Dim arrTerms, arrGrades
Dim strSubjectName, strSgName
Dim bMaySetWithoutGroup

Function GetPageTitle()
	If bNewSubjectGroup Then GetPageTitle = obLanguage("ClassManagement","kBindSubjClass") & obLanguage("Common","kClass_v",strFunctionalityType) Else GetPageTitle = obLanguage("Common","kEdit") &" "& LCase(obLanguage("Common","kSubject"))
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningGroups
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbSubjects
 End Function

Sub ReadState()
	If Not HasUserRight(arClassMgmEditSubjects) Then GenerateError obLanguage("Common","kErrPageAccess")
	nSubjectGroupID = GetSafeLng(Request("CLID"), 0)
	bNewSubjectGroup = (nSubjectGroupID = 0)
	strClassID_IUP = Request("PCLID_IUP")
	IF bNewSubjectGroup Then
		If readonly Then GenerateError obLanguage("Filter","kErrorEditClosedYear")
		strClassID_IUP = GetSafeStr(strClassID_IUP, -1, GetSafeStr(obTokenMgr.GetData( strToken,stCurrClass_IUP),-1,"0"))
		Call InitIUPClassID(strClassID_IUP)
	Else
		Set objSgInfo = objNSNET.GetSubjectGroupInfo(nSubjectGroupID)
		lngSubj = GetSafeLng(objSgInfo("SUBJECTID"), Null)
		strClassComments = objSgInfo("COMMENTS")
		strSgName = objSgInfo("NAME")
		strSubjectName = objSgInfo("SUBJECTNAME")
		If Len(strSgName) > Len(strSubjectName) Then
			strSgName = Right(strSgName, Len(strSgName) - Len(strSubjectName))
		End If
		If Len(strSgName) > 0 Then strSgName = Right(strSgName, Len(strSgName)-1)
		lngIupLevel = objSgInfo("IUP_LEVEL")
		bIsIupGrade = (objSgInfo("IS_CSG") = 0)
		lngGrade = CLng(objSgInfo("GRADE"))
		lngGroup = objSgInfo("GROUPID")
		strGroupName = objSgInfo("GROUPNAME")
		nTeacherID = GetSafeLng(objSgInfo("TEACHERID"), Null)
		strClassID = objSgInfo("PCLASSID")
		If IsDull(strClassID_IUP) Then
			'если в request есть - то нужно использовать именно его. для правильной работы фильтров
			strClassID_IUP = MakeIupClassId(strClassID, lngGrade, bIsIupGrade)
		End If
	End If

	arrTerms = Split(Request("TERMS"), ", ")

	If bIsIupGrade Then
		lngGrade = strIupGrade
		strClassName = lngGrade & " *"
		arrGrades = Split(GetSafeStr(Request("GRADES"),-1,strIupGrade), ", ")
	Else
		Set objClassInfo = objNSNET.GetClassInfo(strClassID)
		lngProfile = GetSafeLng( objClassInfo("PROFILEID"), Null )
		lngGrade = GetSafeLng( objClassInfo("GRADE"), Null )
		strClassName = objClassInfo("CLASSNAME")
		If bNewSubjectGroup Then nTeacherID = GetSafeLng(objClassInfo("TEACHERID"), Null) ' get class teacher as default
	End If

	bAllSubjectsBounded = False
	bShowGroup = False
End Sub

Sub WriteState()
	WriteClass_IUP
End Sub

Sub GetTermList
	If bNewSubjectGroup Then
		If bIsIupGrade Then
			strSubjectName = objSubj.FindCell("SUBJECTID=" & lngSubj, "SUBJECTNAME")
			Set objTermsRs = objNSNET.GetTermListForSubjectGroup_IUP(strCurrYearId)
		Else
			Set objTermsRS = objNSNET.GetTermListForSubjectGroup(strClassId, lngSubj)
		End If
	Else
		Set objTermsRs = objNSNET.GetSubjectGroupTerms(nSubjectGroupID)
	End If
	If objTermsRS.EOF Then GenerateError obLanguage("ClassManagement","kErrNoPeriods")
End Sub

Sub GetSubjectList
	If Not bNewSubjectGroup Then 
		'subjects not needed
		Exit Sub
	End If
	If bIsIupGrade Then 
		Set objSubj = objNSNET.GetUnassignedSubjectList_IUP(strCurrYearId)
		If Not objSubj.EOF Then
			lngIupLevel = GetSafeLng(Request("LEVELID"), objIupLevels("LEVELID"))
		End If
	Else
		Set objSubj = objNSNET.GetUnassignedSubjectList(lngGrade, lngProfile, strClassId, strCurrYearId)
	End If
	bAllSubjectsBounded = objSubj.EOF
	readonly = readonly OR bAllSubjectsBounded
	IF bAllSubjectsBounded Then Exit Sub
	lngSubj = GetSafeLng(Request("SJID"), 0)
	If lngSubj > 0 Then
		If Not bIsIupGrade Then
			If Not objNSNET.IsSubjectValid(strClassId, lngProfile, lngSubj, strCurrYearId) Then lngSubj = GetSafeID(objSubj("SUBJECTID"), Null)
		End If
	Else
		lngSubj = GetSafeLng(objSubj("SUBJECTID"), Null)
	End If
End Sub

Sub CheckShowGroups
	Dim bClassSubjectWithoutGroupExist

	Set objGroups = Nothing
	bMaySetWithoutGroup = False

	If bIsIupGrade THen
		bShowGroup = False
		Exit Sub
	End If
	If bNewSubjectGroup Then
		Set objGroups = objNSNET.GetClassSubjectGroupList(lngSubj, strClassId, -1)
		bShowGroup = Not objGroups Is Nothing
		bMaySetWithoutGroup = Not objNSNET.DoesClassSubjectWithoutGroupExist(strClassId, lngSubj)
	Else
		If IsNull(lngGroup) Then
			' If Subject has groups, but current ClassSubjectGroups has no group then group may be set here
			Set objGroups = objNSNET.GetClassSubjectGroupList(lngSubj, strClassId, nSubjectGroupID)
			bShowGroup = Not objGroups Is Nothing
		Else 
			bShowGroup = True
			bClassSubjectWithoutGroupExist = objNSNET.DoesClassSubjectWithoutGroupExist(strClassId, lngSubj)
			If Not bClassSubjectWithoutGroupExist Then
				bMaySetWithoutGroup = objNSNET.IsCSGBoundedWithAllStudents(nSubjectGroupID)
			End If
		End If
	End If
End Sub

Sub GetTeachers
	bTeachersEmpty = True
	If Not readonly Then
		Set objTeachersRs = objNSNET.GetTeachers(strCurrYearId, lngSubj)
		bTeachersEmpty = objTeachersRs.eof
	End If
End Sub

Sub Main
	If bIsIupGrade Then 
		Set objIupLevels = objNSNET.GetIupLevels()
	End If

	Call GetSubjectList()
	If bAllSubjectsBounded Then Exit Sub
	Call GetTermList()
	Call CheckShowGroups()
	Call GetTeachers()

	If bIsIupGrade Then
		Set objAvailableIupGradesRs = objNSNET.GetGradesForSubjectGroup(strCurrYearId, nSubjectGroupID)
	End If

	bCanSave = Not readonly And Not bTeachersEmpty
End Sub

Sub onHead()
%>
<SCRIPT><!--
function Back(){
	goBack(document.ClassEdit, "ClassSubjects.asp");
}
<%If bCanSave Then%>
function canSubmit() {
	var form = document.ClassEdit;
	if( form.Desc.value.length >= 2000 ) {
		alert(language.Generic.ClassManagement.kMsgCommentsTooLong );
		form.Desc.focus();
		return false;
	}
	<%If bIsIupGrade Then %>
	if($('[name=GRADES]:checked').length + $('[name=GRADES][type=hidden]').length == 0 )
	{
		alert(language.Generic.Curriculum.kErrSubjectGroupGradesNotSelected);
		return false;
	}
	<%End If %>
	if($('[name=TERMS]:checked').length + $('[name=TERMS][type=hidden]').length == 0 )
	{
		alert(language.Generic.Curriculum.kErrTermsNotSelected);
		return false;
	}

	return true;
}
function saveChanges(){
	if( isDBBusy() ) return false;
	var form = document.ClassEdit;
	if(!canSubmit())
		return;

	jsSubmit({form: document.ClassEdit
		, showProcessing: true
		, action: document.ClassEdit.action
		, data: {ACT: "check"}
		, onSuccess: function(){ ok_check_db('ClassEdit', 'SaveClassSubject.asp'); }
	});
}

function resetForm(){
	document.forms["ClassEdit"].reset();
}
<%End If%>

<%If Not readonly Then%>
$(document).ready(function(){
$('#subjectname').width($('select[name=SJID]').width());
});
function subjectChanged(){
	dataChanged();
	DoSubmit( document.ClassEdit, "ClassSubjectEdit.asp" );
}
<%End If%>
//--></SCRIPT>
<%
	
End Sub

Sub DrawButtons()
	ButtonCancel "Back()", obLanguage("Common","kBack")
	If bCanSave Then
		ButtonSave "saveChanges();", obLanguage("Common","kSave")
		ButtonReset "resetScreen('ClassEdit');", obLanguage("Common","kReset")
	End If
End Sub

Sub onDrawPage()%>
<form name="ClassEdit" METHOD="post" ACTION="SaveClassSubject.asp" class="form-horizontal form-edit">
<%=WriteObligatoryTags()%>
<%=WriteHiddenTags(Array("PCLID_IUP", strClassID_IUP, "CLID", nSubjectGroupID))%><%
	If Not bNewSubjectGroup Then
		%><%=WriteHiddenTags(Array("SJID", lngSubj))%><%
	End If

	Call DrawButtonPanel()

	If bAllSubjectsBounded Then
		DrawInfo obLanguage("ClassManagement","kAllSubjectsBinded")&" """&DB2HTML(strClassName)&""" "& obLanguage("ClassManagement","kWClass",strFunctionalityType), False
	Else
		SetFiltersWidth "", "col-md-2", "col-md-8"
		Call DrawSubjectGroupInfo()
	End If
%></form><%
End Sub

Sub DrawSubjectGroupInfo()
	If bIsIupGrade Then
		OpenFormGroup obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType)
		Call DrawCheckBoxes(objAvailableIupGradesRs, "GRADES", "GRADEID", "GRADEID", IIF(bNewSubjectGroup, arrGrades,"RELATION") , IIF(bNewSubjectGroup, "","CANREMOVE"), "", readonly)
		CloseFormGroup
	Else
		DrawReadonlyRow obLanguage("Common","kClass",strFunctionalityType), strClassName
	End If
	If Not bNewSubjectGroup Then
		 DrawTitleRow obLanguage("Common","kSubject"), objSgInfo("SUBJECTNAME")
	Else
		DrawSelectInfoRow obLanguage("Common","kSubject"), lngSubj, "SJID", objSubj, "SUBJECTID", "SUBJECTNAME", Null, "subjectChanged()"
	End If
	If bIsIupGrade Then
		DrawSelectInfoRow obLanguage("Curriculum","kIupLevel"), lngIupLevel, "LEVELID", objIupLevels, "LEVELID", "LEVELNAME", Null, ""
		OpenFormGroup obLanguage("Common","kName")
			%><div class="fixin-input-elem"><span class="form-control form-control-title" id="subjectname" value="<%=DB2Value(strSubjectName)%>">
			<span class="text" ><%=DB2Value(strSubjectName)%></span></span><div><i>/</i><input type="text" maxlength="20" value="<%=DB2Value(strSgName)%>" name="NAME" class="form-control form-control-inline"/></div></div><%
		CloseFormGroup
	End If

	OpenFormGroup obLanguage("Common","kSchoolPeriod")
	Call DrawCheckBoxes(objTermsRS, "TERMS", "TERMID", "TERMNAME", IIF(bNewSubjectGroup, arrTerms, "RELATION"), IIF(bNewSubjectGroup, "", "CANREMOVE"), "", readonly)
	CloseFormGroup

	If bShowGroup Then
		If Not objGroups Is Nothing Then
			Call DrawSelectInfoRow(obLanguage("Common","kGroup"), lngGroup, "GROUP", objGroups, "GROUPID", "GROUPNAME", Null, "")
		ElseIf bMaySetWithoutGroup Then
			Call DrawSimpleFilterRow(obLanguage("Common","kGroup"), "GROUP", Array(0, obLanguage("ClassManagement","kWithoutGroup"), lngGroup, objSgInfo("GROUPNAME")), lngGroup, False, "")
		ElseIf IsNull(objSgInfo("GROUPID")) Then
			Call DrawReadonlyRow(obLanguage("Common","kGroup"), obLanguage("ClassManagement","kWithoutGroup"))
		Else
			Call DrawReadonlyRow(obLanguage("Common","kGroup"), objSgInfo("GROUPNAME"))
			%><INPUT TYPE="hidden" NAME="GROUP" VALUE="<%=lngGroup%>"><%
		End If
	End If

	If readonly Then
		Call DrawReadonlyRow(obLanguage("ClassManagement","kListTeachersComm",strFunctionalityType), objSgInfo("NICKNAME"))
		Call DrawTextRow(obLanguage("Common","kComment"), strClassComments, "")
	Else
		If bTeachersEmpty Then
			OpenFormGroup obLanguage("Common","kTeacher",strFunctionalityType)
			DrawInfo obLanguage("ClassManagement","kListTeachersEmpty",strFunctionalityType), False
			CloseFormGroup
		Else
			Call DrawSelectInfoRow(obLanguage("Common","kTeacher",strFunctionalityType), nTeacherID, "TID", objTeachersRs, "TEACHERID", "NICKNAME", Null, "")
			Call DrawInputRow(obLanguage("Common","kComment"), strClassComments, "Desc", "area", 35, 6, "")
		End If
	End If
End Sub


%>
