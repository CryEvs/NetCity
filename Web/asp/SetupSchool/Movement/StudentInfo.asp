<!-- #INCLUDE Virtual="/asp/headersimple.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersUsers.asp" -->
<!-- #INCLUDE FILE="MoveBookPlaceReasons_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/MoveDoc_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim bStudent, strEditUserID, nPoolSchoolID
Dim strFirstName, strLastName, strMiddleName, strEMail, strDisplayName, nReason
Dim strDate, strHomePhone, bMale
Dim i, objInfo, bParents, objPar
Dim strBackPage
Dim strForeign, objLangList, strForeignID,  strForeignID2, strLang1, strLang2
Dim nCategory
Dim bStudentInSchool, strStudentSchoolName, objDetailsRs
Dim bIsAdmin
Dim nDocType, nFuncType, bEm
Dim bByDirecting
Dim strAddress
Dim nStep
Dim nViewType, nPoolCategoryID
Dim bPseudoPool ' дети, попавшие в пул не из-за выбытия из школы, а при зачислении в ОДО, nViewType - соответсвует PoolCategories: 2, 3
Dim objPoolCategories, nCategoryID, strCategoryName

Function hasUserRightsOnPage()
	bIsAdmin = True

	If bIsEducManager Then
		hasUserRightsOnPage = True

		Exit Function
	ElseIf objNSNET.IsAdminOfServer(strUserID) Then
		hasUserRightsOnPage = True
		
		Exit Function
	Else
		hasUserRightsOnPage = HasUserRight(arMovePoolStudents)
		bIsAdmin = False
	End If
End Function

Function CanBack()
	CanBack = False
End Function

Sub ReadState()
	strEditUserID	= GetSafeID( Request("UID"), Null)
	strBackPage		= GetSafeStr(Request("BackPage"), 255, Request.ServerVariables("HTTP_REFERER"))

	If strFunctionalityType = kFuncType_Add Then readonly = True Else readonly = bIsEMForSchool
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,stBackPage, strScriptName)
End Sub

Sub MainUserInfo()
	bStudent			= objNSNET.DoesUserHaveRole(strEditUserID, strSchoolID, rlStudent)
	nPoolSchoolID		= GetSafeLng(Request("POOLSCHOOL"), -1)
	Set objInfo			= objNSNET.GetUserInfo(strEditUserID)
	bMale				= (objInfo("GENDER") = obLanguage("Common","kMaleLet"))
	strFirstName		= objInfo("FIRSTNAME")
	strMiddleName		= objInfo("MIDDLENAME")
	strLastName			= objInfo("LASTNAME")
	strEMail			= objInfo("EMAIL")
	strHomePhone		= objInfo("HOMEPHONE")
	strDate				= objInfo("BIRTHDATE")
	If IsDull(strDate) Then strDate = "" Else strDate = Date2Str(strDate)
End Sub

Sub DrawButtons()
	ButtonSave "saveChanges(this)", obLanguage("Common","kSave")
End Sub

Sub DrawFilters(strForm)%>
	<div id="NS_MOVDOC_EDITING_ROW"><%
		Call DrawReadonlyRow(obLanguage("Common","kLastName"), strLastName)
		Call DrawReadonlyRow(obLanguage("Common","kFirstName"), strFirstName)
		Call DrawReadonlyRow(obLanguage("Common","kMiddleName"), strMiddleName)
		Call DrawReadonlyRow(obLanguage("Common","kBDate"), strDate)
		Call DrawReadonlyRow(obLanguage("Common","kGender"), IIF(bMale, obLanguage("Common","kMale"), obLanguage("Common","kFemale")))
		Call DrawReadonlyRow(obLanguage("SetupSchoolUI","kHomePhone"), strHomePhone)

		If Not bByDirecting Then
			Call DrawReadonlyRow("E-Mail ", strEMail)
		Else
			Call DrawReadonlyRow(obLanguage("Common","kHomeAddress"), strAddress)
		End If

		Call DrawSpecialTable()

		If strFunctionalityType <> kFuncType_Add And Not bByDirecting Then
			Call DrawKategory()
			
			If Not bStudentInSchool Then
				Call DrawReasonOrPoolDepartPlace()
			End If
		End If%>
	</div><%
End Sub

Sub onDrawPage()
	Call onHead()%>

	<form NAME="MainForm" METHOD="POST" ACTION="<%=strBackPage%>" class="form-horizontal form-xs">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("UID", strEditUserID, "BackPage", strBackPage, "PseudoPool", IIf(bPseudoPool, "1", "0")))%><%
		
		Call SetFiltersWidth("col-md-12", "col-md-4", "col-md-8")
		Call DrawButtonsFilters(Not readonly And Not bByDirecting, "MainForm")
		Call RestoreDefFiltersWidth()%>
	</form>
	
	<script rel='onload'><%=onLoad()%></script>
	<script rel='onclose'><%=onUnload()%></script><%
End Sub

Sub DrawKategory()
	Dim arr(1,1)

	arr(0,0) = 1 : arr(0,1) = 0
	arr(1,0) = obLanguage("PoolStudents","kAccessible")
	arr(1,1) = obLanguage("PoolStudents","kInaccessible")
	
	OpenFormGroup obLanguage("PoolStudents","kAccessCategory")
		If readonly Then
			If bStudentInSchool Then
				If Not IsDull(strStudentSchoolName) Then
					Response.Write obLanguage("PoolStudents","kEnrolled") & ": " & DB2HTML(strStudentSchoolName)
				Else
					Response.Write obLanguage("PoolStudents","kRemoved")
				End If
			Else
				Response.Write arr(1, arr(0, nCategory))
			End If
		Else
			Response.Write "<input type=""hidden"" name=""DefCategory"" value=""" & nCategory & """>"
			Call DrawSelectArr(arr, "Category", nCategory, Null, "ChangeCategory(this);")
		End If
	CloseFormGroup
End Sub

Sub DrawReasonOrPoolDepartPlace()
	If bPseudoPool Then%>
		<div id="INACTIVE_REASON"><%
			OpenFormGroup obLanguage("PoolStudents","kInaccessibilityReason")
				Call DrawReason()
			CloseFormGroup%>
		</div>

		<div id="POOL_CATEGORY"><%
			OpenFormGroup obLanguage("PoolStudents","kCategory")
				Call DrawPoolCategory()
			CloseFormGroup%>
		</div><%
	Else%>
		<div id="NS_MOVDOC_EDITING_ROW_0"><%
			OpenFormGroup IIF(nCategory = 0, obLanguage("PoolStudents","kInaccessibilityReason"), obLanguage("PoolStudents","kPoolDepartPlace"))
				Call DrawReason()
				Call DrawPoolDepartPlace()
			CloseFormGroup%>
		</div>

		<div id="POOLDEPARTREASON_ROW"><%
			OpenFormGroup obLanguage("PoolStudents","kPoolReason")
				Call DrawPoolDepartReason()
			CloseFormGroup%>
		</div><%
	End If
End Sub

Function ShowReason( nReason )
	Select Case nReason
	Case NotAvailableReasons_Worked: ShowReason = obLanguage("PoolStudents","kWorked")
	Case NotAvailableReasons_Learned: ShowReason = obLanguage("PoolStudents","kLearned")
	Case NotAvailableReasons_LearnedPOO: ShowReason = obLanguage("PoolStudents","kLearnedPOO")
	Case NotAvailableReasons_Leaved: ShowReason = obLanguage("PoolStudents","kLeaved")
	Case NotAvailableReasons_Gone: ShowReason = obLanguage("PoolStudents","kGone")
	Case NotAvailableReasons_DuplicateSgo: ShowReason = obLanguage("PoolStudents","kDuplicateSGO")
	Case Else ShowReason = "&nbsp;"
	End Select
End Function

Sub DrawReason()
	Dim arr
	arr = convert1Dto2D(_
	Array(_
		NotAvailableReasons_Worked, obLanguage("PoolStudents","kWorked"),_
		NotAvailableReasons_Learned, obLanguage("PoolStudents","kLearned"),_
		NotAvailableReasons_LearnedPOO, obLanguage("PoolStudents","kLearnedPOO"),_
		NotAvailableReasons_Leaved, obLanguage("PoolStudents","kLeaved"),_
		NotAvailableReasons_Gone, obLanguage("PoolStudents","kGone"),_
		NotAvailableReasons_DuplicateSgo, obLanguage("PoolStudents","kDuplicateSGO")_
	))

	If Not readonly Then
		Call DrawSelectArr(arr, "Reason", nReason, " ", "ChangeReason(this);")
	Else
		rw ShowReason( nReason )
	End If
End Sub

Sub DrawPoolCategory()
	If Not readonly Then
		Call DrawSelectRs(objPoolCategories, "PoolCategory", "CATEGORYID", "CATEGORYNAME", nCategoryID, Null, "")
	Else
		Response.Write DB2HTML(strCategoryName)
	End If
End Sub

Sub DrawPoolDepartPlace()
	Dim nEOIDTO, nOSTId, strOSTName

	nEOIDTO			= GetSafeLng(objDetailsRs("EOIDTO"), -1)
	nOSTId			= GetSafeLng(objDetailsRs("OUTSIDETYPEID"), 0)
	strOSTName		= DB2HTML(objDetailsRs("OUTSIDETYPENAME"))

	Call DrawSelectEOs(strEditUserID, nEOIDTO)
	RW "<br class=""mini"" />"
	Call DrawSelectOST(strEditUserID, nOSTId, strOSTName)
End Sub

Sub DrawPoolDepartReason()
	If readonly Then
		Response.Write objDetailsRs("ITEMNAME") & " "
	Else
		Call DrawSelectReasons(nDocType, strEditUserID, GetSafeLng(objDetailsRs("REASON"), -1))
	End If
End Sub

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolUI","kTitleStudentInfo",strFunctionalityType) & ": " & objNSNET.GetUserNickName(strEditUserID)
End Function

Function onLoad()
	onLoad = ""

	If Not bByDirecting Then
		If nFuncType = kFuncType_Common And nDocType = kDocType_GRADUATE Then
			onLoad = OnLoad & "correctArrEOTypeReasons('" & nStep & "');"
		End If

		If Not readonly Then onLoad = onLoad & "_onLoad();"
		onLoad = onLoad & "ShowAddCategoryOnLoad(" & strEditUserID & ");"
	End If
End Function

Sub Main()
	Dim objSchoolInfo
	Dim nFromSchoolID
	Dim nFromGrade, nPoolSYID, strTmpSYID, nGradeJunior_Max, nGradeMiddle_Max
	Dim nTmpFuncType
	Dim objPoolSYInfo, nArchStatus, bUseArchConn

	Call MainUserInfo()
	Set objInfo = objNSNET.GetStudentInfo(strEditUserID)
	If objInfo.EOF Then GenerateError obLanguage("SetupSchoolUI","kNoAddedInfoAcces")
	nStep = -1

	If strFunctionalityType <> kFuncType_Add Then
		strForeignID = GetSafeLng(objInfo("LANG_ID"), 0)
		strForeignID2 = GetSafeLng(objInfo("LANG_ID2"), 0)

		strLang1 = GetSafeStr(objInfo("LANG"), -1, "")
		strLang2 = GetSafeStr(objInfo("LANG2"), -1, "")
	End If

	Set objPar = objInfo("chaptParents").Value
	bParents = Not objPar.EOF

	nViewType = GetSafeLng(Request("ViewType"), Null)
	Call obTokenMgr.SetData(strToken, "ViewType", nViewType)
	bByDirecting = (nViewType = 0)

	bPseudoPool = GetSafeLng(Request("PseudoPool"), Null) = 1
	If bPseudoPool Then
		nPoolCategoryID = GetSafeLng(Request("PoolCategory"), Null)
	Else
		nPoolCategoryID = 1
	End If

	If Not bByDirecting Then
		If nViewType = -1 Then nCategory = 0 Else nCategory = 1

		bStudentInSchool = False
		nFromGrade = -1
		nPoolSYID = -1
		nReason = objNSNET.GetPoolStudent(strEditUserID, 0)

		Set objDetailsRs = objNSNET.GetPoolStudentDetails(strEditUserID, nReason <> 0)
		If Not objDetailsRs.EOF Then
			If Not bPseudoPool Then
				nFromSchoolID = objDetailsRs("FROMSCHOOLID")
				nFromGrade = GetSafeLng(objDetailsRs("GRADE"), -1)
				nPoolSYID = GetSafeLng(objDetailsRs("SYID"), -1)
			End If
		End If

		If nPoolSchoolID > 0 Then
			Set objSchoolInfo = objNSNET.GetEOInfo(nPoolSchoolID)
			If Not objDetailsRs.EOF Then
				If objDetailsRs("FROMSCHOOLID") <> objSchoolInfo("SCHOOLID") Then readonly = True
			End If
		End If

		If nReason <> 0 Then
			nCategory = 0 ' Archive
		Else	' Common pool
			bStudentInSchool = objDetailsRs.EOF
			If bStudentInSchool Then
				readonly = True
				strStudentSchoolName = ""

				Set objSchoolInfo = objNSNET.GetUserSchool(strEditUserID)
				If Not objSchoolInfo.EOF Then strStudentSchoolName = GetSafeStr(objSchoolInfo("EONAME"), -1, "") & " (" & GetSafeStr(objSchoolInfo("CITY"), -1, "") & ")"

				Set objDetailsRs = objNSNET.GetStudentMovToPoolDetails(strEditUserID, nViewType)
				If Not objDetailsRs.EOF Then
					nFromSchoolID = objDetailsRs("SCHOOLID")
				End If
			End If
		End If

		If (nCategory = 0 And Not bIsAdmin) Then readonly = True
		If (strFunctionalityType <> kFuncType_Add) And Not bPseudoPool Then
			nDocType		= Clng(objDetailsRs("DOCTYPE"))
			nFuncType		= Clng(objDetailsRs("FUNCTYPEID"))
			nTmpFuncType	= nFuncType

			If nDocType = kDocType_GRADUATE And nFuncType <> kFuncType_Add And nFuncType <> kFuncType_PreSchool And nFromGrade <> -1 And nPoolSYID <> -1 Then
				strTmpSYID = strCurrYearID ' Временно запоминаем реальное значение
				strCurrYearID = nPoolSYID

				' Особенности ФБ. Настройки школы ахивируются и чистятся, поэтому надо точно определить, из какой базы их брать - из рабочей или из архивной.
				' Смотрим ARCHIVESTATUS:
				' значения = 0, 1, 2 - рабочая база
				' значения = 3, 4 - архивная база
				' значение = -1 - неизвестно, делаем "только для чтения"
				Set objPoolSYInfo = objNSNET.GetYearInfo(strCurrYearID)
				If objPoolSYInfo.EOF Then
					GenerateError obLanguage("Common","kUnexpErr")
				End If

				nArchStatus = GetSafeLng(objPoolSYInfo("ARCHIVESTATUS"), 0)
				If nArchStatus = -1 Then
					readonly = True
				Else
					bUseArchConn = (nArchStatus = 3) Or (nArchStatus = 4)
					If bUseArchConn Then
						Call InitSchoolSettings(objNSNETArch)
					Else
						Call InitSchoolSettings(objNSNETWork)
					End If
				End If

				strCurrYearID = strTmpSYID ' Восстанавливаем запомненное значение

				If Not readonly Then
					nGradeJunior_Max = CLng(arrSchoolSettings(1, kSSIndex_GradeJunior_Max))
					nGradeMiddle_Max = CLng(arrSchoolSettings(1, kSSIndex_GradeMiddle_Max))

					If nFromGrade = nGradeJunior_Max Then
						' Для школ (точнее - не детсадов), если выпуск из младшей ступени, то действуем как для детсадов
						nTmpFuncType = kFuncType_PreSchool
					End If
					nStep = IIf(nFromGrade = nGradeJunior_Max, 1, IIF(nFromGrade = nGradeMiddle_Max, 2, 3))
				End If
			End If
			
			Call InitMoveEOs_Js(nDocType, nFromSchoolID, nTmpFuncType, nStep)
			If Not readonly Then
				Call GetDepartReasons(nDocType, nTmpFuncType, nStep)
				Call DrawOutSideTypesScript(nFromSchoolID)
			End If
		End If
	Else
		readonly = False
		nDocType = kDocType_OUT
		nFuncType = kFuncType_PreSchool
		strAddress = GetAddress(strEditUserID)
	End If
		
	If bPseudoPool Then
		nDocType = 1
		nTmpFuncType = 2
		nFromSchoolID = -1

		nCategoryID = 4 ' Государственная школа
		strCategoryName = ""
		If Not objDetailsRs.EOF Then
			nCategoryID = GetSafeID(objDetailsRs("CATEGORYID"), "0")
			strCategoryName = GetSafeStr(objDetailsRs("CATEGORYNAME"), -1, "")
		End If

		Call InitMoveEOs_Js(nDocType, nFromSchoolID, nTmpFuncType, nStep)
		If Not readonly Then
			Call GetDepartReasons(nDocType, nTmpFuncType, nStep)
			Call DrawOutSideTypesScript(nFromSchoolID)
			Set objPoolCategories = objNSNET.GetPoolCategories("1, 1000")
		End If
	End If%>

	<script type="text/javascript">
		var nDocType=<%=nDocType%>;
		var nFuncTypeArrayIndex =<%=nTmpFuncType-1%>;
		var control;
	</script><%
End Sub

Sub onHead()%>
	<style>
		.block-content {
			min-height: 0;
		}
	</style>

	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>

	<script type="text/javascript">
		isHaveToLogout = true;
		bNewWindow = true;

		function _onLoad() {
			moeEoReady.then(function () {
				control = ctrl_constructor(<%=strEditUserID%>, false);
			});
		}

		function _getForm(element) {
			var parent = $(element).parent();

			if(parent.is('form')) {
				return parent[0];
			}
			else {
				return _getForm(parent);
			}
		}

		function canSubmit() {
			if(dataWereChanged || !reasonValidator.validateByEOId($('#defreason').attr("io"),control.eoid())) {
				if ($("select[name='Category']").prop("selectedIndex") == 1 & $("select[name='Reason']").val() == '-1') {
					alert(language.Generic.PoolStudents.kErrNotSelectedReason);
					return false;
				}
				<%If Not bByDirecting Then%>
				var setValue = getListValue($("select[name='Category']")[0]);
				if(setValue != <%=nCategory%>) {
					return $.show.getConfirmation(language.Generic.PoolStudents.kConfirmCategoryChange);
				}
				<%End If%>
			}

			return true;
		}

		function getDialog() {
			var result;
			_.each(_.allKeys(BootstrapDialog.dialogs), function(value) {
				if(_.has(BootstrapDialog.dialogs[value], 'showInDialog')) {
					result = BootstrapDialog.dialogs[value];
				}
			});

			return result;
		}

		function saveChanges(obj) {
			var _dialog = getDialog();
			
			if(isDBBusy()) return false;
			
			var form = _getForm(obj);
			var uId = form.UID.value;

			extDeferred.when(canSubmit).then(function() {
				setDBBusy();

				jsSubmit({
					form: form,
					action: "/asp/SetupSchool/Movement/savePoolStudentInfo.asp",
					showProcessing: true,
					onSuccess: function(response) {
						setDBFree();

						if(_dialog.$modal.prop("dataWereChanged")) {
							jsSubmit({
								action: "/asp/scripts/ajaxmethods.asp",
								data: {method: "<%=kUpdatePoolStudentsLine%>", UID: uId},
								showProcessing: true,
								onSuccess: function(_response) {
									if (_response.data.archReason == 0) {
										if (_response.data.school == "") {
											_response.data.school = "&nbsp";
										}

										$(".uid" + uId).parent().siblings()
											.eq(3).html(returnTableCell(_response.data.reason)).end()
											.eq(4).html(returnTableCell(_response.data.school)).end();
									}
									else {
										if ($("*[name=ViewType]").val() != -1) {
											$(".uid" + uId).parent().parent().addClass('deleted');
										}
										else {
											$(".uid" + uId).parent().siblings()
												.eq(3).html(returnTableCell(_response.data.reason)).end()
												.eq(4).html(returnTableCell(_response.data.school)).end()
												.eq(5).html(returnTableCell(_response.data.archReason)).end();
										}
									}

									alert(response.message);
									_dialog.$modal.prop("dataWereChanged", false);
									_dialog.close();
								}
							});
						}
						else {
							_dialog.close();
							alert(response.message);
						}
					},
					onError: function() {
						setDBFree();
						_dialog.close();
					}
				});
			});
		}

		function ChangeCategory(obj) {
			var form = _getForm(obj);
			ShowAddCategoryItem(form);
			dataChanged();
		}

		function ShowAddCategoryOnLoad(studentId) {
			var form = _getForm($('#NS_MOVDOC_EDITING_ROW'));
			ShowAddCategoryItem(form);
		}

		function ShowAddCategoryItem(form) {
			if (form.Category) {
				<%If bPseudoPool Then%>
					if (form.Category.options.selectedIndex == 0) {
						$('#INACTIVE_REASON').hide();
						$('#POOL_CATEGORY').show();

						form.Reason.style.display = "none";
						form.PoolCategory.style.display = "";
					}
					else {
						$('#INACTIVE_REASON').show();
						$('#POOL_CATEGORY').hide();

						form.Reason.style.display = "";
						form.PoolCategory.style.display = "none";
					}
				<%Else%>
					if (form.Category.options.selectedIndex == 0) {
						$('#NS_MOVDOC_EDITING_ROW_0 > div.form-group').find('label').html(language.Generic.PoolStudents.kPoolDepartPlace);
						$('select,span', $('#NS_MOVDOC_EDITING_ROW_0 > div.form-group').find('div')).not('#Reason').show();
						$('#POOLDEPARTREASON_ROW').show();

						form.Reason.style.display = "none";
					}
					else {
						$('#NS_MOVDOC_EDITING_ROW_0 > div.form-group').find('label').html(language.Generic.PoolStudents.kInaccessibilityReason);
						$('#POOLDEPARTREASON_ROW').hide();
						$('select,span', $('#NS_MOVDOC_EDITING_ROW_0 > div.form-group').find('div')).hide();
						form.Reason.style.display = "";
					}
				<%End If%>
			}
		}

		function ChangeReason(obj) {
			var form = _getForm(obj);

			if(form.Category.options.selectedIndex == 0) {
				form.Reason.options.selectedIndex = 0;
				alert(language.Generic.PoolStudents.kErrInaccessibilityReason);

				return;
			}

			dataChanged();
		}

		function ChangePoolDepartPlace() {
			dataChanged();
		}
	</script><%
End Sub

Sub DrawSpecialTable()
	OpenFormGroup obLanguage("Common","kParents")%>
		<ul><%
			If bParents Then
				While Not objPar.EOF%>
					<li><%=DB2HTML(objPar("NICKNAME"))%></li><%
					objPar.MoveNext
				Wend
			End If%>
		</ul><%
	CloseFormGroup

	If Not IsDull(strLang1) Then Call DrawReadonlyRow(obLanguage("SetupSchoolUI","kForeign"), strLang1)
	If Not IsDull(strLang2) Then Call DrawReadonlyRow(obLanguage("SetupSchoolUI","kForeign2"), strLang2)
End Sub

Function GetAddress(nStudID)
	Dim strAddress, rsUserAddr

	Set rsUserAddr = objNSNET.GetUserAddress(nStudID, 1) ' 1 - фактический адрес
	If rsUserAddr.EOF Then GetAddress = "" : Exit Function

	strAddress = strAddress & GetSafeStr(rsUserAddr("ADDRESS"), -1, "") & " "
	GetAddress = strAddress
End Function%>