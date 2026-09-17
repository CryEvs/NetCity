<!-- #INCLUDE Virtual="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterClasses.asp" -->
<!-- #INCLUDE FILE="qadd_vb.asp" -->
<!-- #INCLUDE FILE="qadd.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/MoveDoc_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objDocsRs, DocId, nDocSubType, strDocName, strDocID, dicDocInfo

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolUI","kTitleStudentQAdd",strFunctionalityType)
End Function

Sub ReadState()
	strBackPage = Request("BACK") & ""
	If IsDull(strBackPage) Then strBackPage = "/angular/school/users/students/"
	Call obTokenMgr.SetData(strToken, stBackPage, strBackPage)
	Set dicDocInfo		= obTokenMgr.GetData(strToken, stMoveDocState)
	nDocSubType			= CLng(dicDocInfo("DOCSUBTYPE"))
	strBackPage			= "/asp/SetupSchool/Movement/MoveBookEdit.asp"
	strPagePostTo		= "SaveStudentInfoQAdd.asp"
	strListTitle		= obLanguage("SetupSchoolUI","kListStudentQAdd", strFunctionalityType)
	bIsBDateObligatory	= True
End Sub

Sub Main()
	If Not HasUserRight(arMoveBookEdit) Then GenerateError obLanguage("Common","kErrPageAccess")

	If nDocSubType <> kmdstNoClassEnroll Then
		If nDocSubType <> kmdstAllClassesEnroll Then
			Call InitMoveDocClasses(strCurrYearID, kDocType_ENROLL, nDocSubType, False)
		Else
			Call InitYearClasses()
		End If
	End If

	QuickAddInit
End Sub

Sub onHead()
	Dim bStudent

	bStudent = (InStrRev(Request.ServerVariables("SCRIPT_NAME"),"Student") > 0)
	If CLng(strFunctionalityType) <> kFuncType_PreSchool Or (CLng(strFunctionalityType) = kFuncType_PreSchool And Not bStudent) Then
		qadd_edit_name = Array("FN", "MN", "LN", "GN", "LON", "PW", "PW2", "ChangePW", "PCM", "EM", "CID","FLN","FFN","FMN","MLN","MFN","MMN","BDT")
	Else
		qadd_edit_name = Array("FN", "MN", "LN", "GN", "CID","FLN","FFN","FMN","MLN","MFN","MMN","BDT")
	End If
	
	If CLng(strFunctionalityType) = kFuncType_Add Then
		Call comHelper.ArrayHelper.AppendArray(qadd_edit_name, Array("CategoryNotEnrolled"))
	End If
	Call qAddScript()
	%>

	<script><!--
		function onPreSubmitForm() {
			bContinueSubmitForm = false;

			heavyAction(function() {
				var onDialogClose = function() {
					$(document).trigger('showProcessing');
					autoParams = getFormsParams(document.UserInfo);
					return postTo({
						path: '/asp/SetupSchool/SaveStudentInfoQAdd.asp',
						nocache: false,
						params: autoParams
					});
				};

				onDialogClose()
			});
		}

		function ValidateSpecific() {
			var form = document.UserInfo;

			var ErrLastNameCmn = language.Generic.SetupSchoolUI.kErrLastName; 
			var ErrFirstNameCmn = language.Generic.SetupSchoolUI.kErrFirstName; 
			var ErrMiddleNameCmn = language.Generic.Common.kMiddleName; 

			if(form.FLN.value != "" || form.FMN.value != "" || form.FFN.value != "") {
				var Fathers = language.Generic.SetupSchoolUI.kFathers;

				var ErrLastName = ErrLastNameCmn + " " + Fathers;
				if( isInvalidName(form.FLN, ErrLastName)) return false;

				var ErrFirstName = ErrFirstNameCmn + " " + Fathers;
				if(isInvalidName(form.FFN, ErrFirstName)) return false;

				var ErrMiddleName = ErrMiddleNameCmn + " " + Fathers;
				if(isInvalidNameEx(form.FMN, ErrMiddleName, false)) return false;
			}

			if(form.MLN.value != "" || form.MMN.value != "" || form.MFN.value != "") {
				var Mothers = language.Generic.SetupSchoolUI.kMothers;

				var ErrLastName = ErrLastNameCmn + " " + Mothers;
				if(isInvalidName(form.MLN, ErrLastName)) return false;

				var ErrFirstName = ErrFirstNameCmn + " " + Mothers;
				if(isInvalidName(form.MFN, ErrFirstName)) return false;

				var ErrMiddleName = ErrMiddleNameCmn + " " + Mothers;
				if(isInvalidNameEx(form.MMN, ErrMiddleName, false)) return false;
			}

			return true;
		}

		function Back() {
			goBack(document.UserInfo, "<%=strBackPage%>?RestoreParams=1");
		}
	//--></script><%
End Sub

Sub DrawSpecificRows()
	Dim strAll, strClassName
	Dim obMovementComponent, arrPoolCategories

	If nDocSubType <> kmdstNoClassEnroll Then
		strClassName = obTokenMgr.GetData(strToken,"strClassName")
		Call DrawSelectInfoRow(obLanguage("Filter","kClassGB",strFunctionalityType) & ":", IIF(Not IsDull(strClassName), strClassName, ""), "CID", objClassesRs, "CLASSNAME", "CLASSNAME", null, "qadd_on_data_change()")
	Else
		Dim arrGrades
		arrGrades = GetArrGrades(strFunctionalityType, 0, 0, 1)
		Call DrawSelectInfoRow(obLanguage("SetupSchoolCalendar", "kGrade", strFunctionalityType), "", "CID", arrGrades, Null, Null, Null, "qadd_on_data_change()")
	End If

	If CLng(strFunctionalityType) = kFuncType_Add Then 
		Set obMovementComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMovementComponent")
		Set arrPoolCategories = obMovementComponent.GetPoolCategories(True) 

		Call DrawSelectNamedEntitiesArrRow(obLanguage("PoolStudents","kCategory"), Null, "CategoryNotEnrolled", arrPoolCategories.ToArray(), Null, "")
	End If
	%>

	<p class="bg-warning text-center"><b><%=obLanguage("Common","kFather")%></b></p><%
	Call DrawInputTextRow(obLanguage("Common","kLastName"), "", "FLN", 30, kMaxLastname, "qadd_on_data_change()", "")
	Call DrawInputTextRow(obLanguage("Common","kFirstName"), "", "FFN", 30, kMaxLastname, "qadd_on_data_change()", "")
	Call DrawInputTextRow(obLanguage("Common","kMiddleName"), "", "FMN", 30, kMaxLastname, "qadd_on_data_change()", "")%>

	<p class="bg-warning text-center"><b><%=obLanguage("Common","kMother")%></b></p><%
	Call DrawInputTextRow(obLanguage("Common","kLastName"), "", "MLN", 30, kMaxLastname, "qadd_on_data_change()", "")
	Call DrawInputTextRow(obLanguage("Common","kFirstName"), "", "MFN", 30, kMaxLastname, "qadd_on_data_change()", "")
	Call DrawInputTextRow(obLanguage("Common","kMiddleName"), "", "MMN", 30, kMaxLastname, "qadd_on_data_change()", "")
End Sub%>