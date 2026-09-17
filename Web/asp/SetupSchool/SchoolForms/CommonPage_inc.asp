<% ' © 2007-2015 IRTech. All rights reserved.

Const nMNS = 1

Const kUndefinedValue = -1

Const kMinOSHGrade	= 0
Const kMaxOSHGrade	= 12
Const k5_9MinOSHGrade = 5
Const k5_9MaxOSHGrade = 9

Const kClassType_SKO = 6

Const kMessage1 = "Вы не сможете больше вносить изменения в ""form"" за этот учебный год.\nВы желаете закрыть ""form"" для этого года и подготовить Форму для следующего учебного года ?\n"
Const kMessage2 = "ВНИМАНИЕ! Последнее предупреждение!\n\nВы не сможете больше вносить изменения в ""form"" для этого учебного года, Вы сможете только просматривать или печатать её содержимое.\nВы действительно желаете закрыть Форму?"
Const kBtnClose = "Закрыть form"

Dim bIsAutoCalcMode

Dim dtPresentationDate, sSchoolID, sGlobalID

Function GetBtnCloseFormName()
	Dim formName

	formName = Replace(GetFormTitle(), "а", "у", 1, 1)
	GetBtnCloseFormName = Replace(kBtnClose, "form", LCase(Left(formName,1)) & Mid(formName, 2), 1)
End Function

Function GetFormCloseMessage1()
	GetFormCloseMessage1 = Replace(kMessage1, "form", Replace(GetFormTitle(), "а", "у", 1, 1), 1)
End Function

Function GetFormCloseMessage2()
	GetFormCloseMessage2 = Replace(kMessage2, "form", Replace(GetFormTitle(), "а", "у", 1, 1), 1)
End Function

Function GetFormTitle()
End Function

Function GetFormId()
End Function

Function GetFormName()
End Function

Function GetFormPageNum()
End Function

Function GetPageTitle()
	GetPageTitle = GetFormTitle()
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStatReports
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arProfileEditSchoolInfo) or HasUserRight(arProfileViewSchoolInfo) or HasUserRight(arBrowseStatReports) or HasUserRight(arFillStatReports)
End Function

Function IsMovementAware()
	IsMovementAware = False
End Function

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = False
End Function

Function onLoad()
	onLoad = onLoad & SpecialOnLoad()
End Function

Sub Main()
	Call InitSchoolFormComponent()
	If bIsAutoCalcMode Then
		Call AutoCalcJSON()
	Else
		Call LoadShoolInfoEx( GetFormId(), GetFormPageNum(), -1)
	End If
	Call GetYearDatesInfo()
	SpecialMain()
End Sub

Sub SpecialMain()
End Sub

Function SpecialOnLoad()
End Function

Function IsMovementAware()
	IsMovementAware = False
End Function

Function GetFormPresentationDate()
End Function

Sub ReadState()
	bIsMNS = Not IsDull(Request("MNS"))
	Call InitStateFormsInfo()

	If bIsEMForSchool Or ( (readonly Or HasUserRight(arBrowseStatReports)) And Not HasUserRight(arFillStatReports) ) Then
		readonly = True
	ElseIf objSchoolFormComponent.IsFormClosed(CLng(strCurrYearID), GetFormId(), bIsMNS) Then
		readonly = True
	Else
		readonly = False
	End If

	bIsAutoCalcMode = ( GetSafeStr( Request("AC"), 1, "" ) = "Y" )
	dtPresentationDate = GetFormPresentationDate()
	SpecialReadState()
End Sub

Sub SpecialReadState()
End Sub

Sub onHead()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/stat-forms/css/stat-form.min.css")%>">
	<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_js_inc.asp -->

	<%Call SpecialOnHead()%><%
End Sub

%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%

Sub SpecialOnHead()%>
	<script type="text/javascript">
		var statFormCtrl;

		deferredResLoader.loadScript("/static/dist/common/js/fileUpload-bundle.min.js");
		deferredResLoader.loadScript("/static/dist/pages/stat-forms/js/statforms.js");
		deferredResLoader.ready(function () {
			var formId = <%=GetFormId()%>;
			var isMns = <%=IIF(bIsMNS,1,0)%> === 1;

			statFormCtrl = new StatFormsCtrl(appContext.yearId, formId, isMns);
		});

		// импорт
		function ImportStatForm() {
			if (statFormCtrl) {
				statFormCtrl.ImportStatForm();
			}
		};
	</script><%
End Sub

Sub SpecialDrawPage()
End Sub

Sub DrawPage()
End Sub

Sub DrawLinkButtons()
	Dim kbtnCloseFormOSH1, kFormClose1, kFormClose2
	Dim formId
	Dim pageNum

	kbtnCloseFormOSH1 = GetBtnCloseFormName()
	kFormClose1 = GetFormCloseMessage1()
	kFormClose2 = GetFormCloseMessage2()

	formId = GetFormId()
	pageNum = GetFormPageNum()

	If Not readonly and pageNum <> 1 Then 
		ButtonSave "SaveSchoolForm(" & GetFormId() & "," & GetFormPageNum() & ")", obLanguage("Common","kSave")
		ButtonReset "resetScreen('SchoolEdit')", obLanguage("Common","kReset")
	End If

	If IsServerSideAutoCalc() And Not readonly Then
		Call Button( "autoCalc()", obLanguage("SchoolInfo","kbtnCalculate_"), obLanguage("SchoolInfo","kbtnCalculate"), "")
	End If

	If pageNum = 1 then
		If Not objSchoolFormComponent.IsFormClosed(strCurrYearID, formId, bIsMNS) Then
			If Not bIsEMForSchool Then
				Call Button( "closeForm('" & DB2HTML(kFormClose1) & "', '" & DB2HTML(kFormClose2) & "', " & formId & ")", kbtnCloseFormOSH1, kbtnCloseFormOSH1, "")
			End If
		End If
		Call ButtonExport( "exportForm(" & formId & ")" )
	End If

	Call ButtonPrint("showPrintVersion()")

	If Not readonly And HasUserRight(arFillStatReports) And pageNum = 1 Then
		Call ButtonImport("ImportStatForm();", "Импорт")
	End If
End Sub

Sub DrawFilters(strForm)
End Sub

Sub onDrawPage()
	Dim nFormPageNum

	nFormPageNum = GetFormPageNum()%>
	<%SetFiltersWidth "col-md-offset-3 col-md-6", "col-md-4", "col-md-8"%>
	<%Call DrawButtonsFiltersEx(True, True, "SchoolEdit")%>
	<%DrawPagesList(nFormPageNum)%>

	<hr style="box-shadow: inset 0 0 5px 5px rgba(0,0,0,.1); height: 5px;"/>
	<div class="stat-form-wrapper">
		<form name="SchoolEdit" method="post" action="Page<%=nFormPageNum%>.asp" onsubmit="return canSubmit();" >
			<%If bIsMNS Then WriteHiddenTags(Array("MNS", nMNS))%>
			<%=WriteObligatoryTags()%>
			<%SpecialDrawPage() %>
			<%DrawPage()%>
		</form>
	</div>
	<hr style="box-shadow: inset 0 0 5px 5px rgba(0,0,0,.1); height: 5px;"/>

	<%DrawPagesList(nFormPageNum)%><%
End Sub

Sub AutoCalc
End Sub

Function GetFormPages()
End Function

Sub DrawPagesList(theCurPage)
	Dim strValue, arrPages, i

	arrPages = GetFormPages()%>

	<div class="row">
		<div class="col-md-12">
			<nav class="text-center">
				<ul class="pagination"><%
					For i = 1 To Ubound(arrPages)%><%
						If theCurPage <> i Then%>
							<li><%=ShowAnchor( "gotoPageEM(" & i & ")", obLanguage("Common","kCurPage") & i, arrPages(i), "" )%></li><%
						Else%>
							<li class="active"><a><%=arrPages(i)%></a></li><%
						End If
					Next%>
				</ul>
			</nav>
		</div>
	</div><%
End Sub
%>
