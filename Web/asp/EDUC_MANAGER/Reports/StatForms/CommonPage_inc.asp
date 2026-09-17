<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolForms/StatForms_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/EDUC_MANAGER/Reports/StatForms/EmFilter_inc.asp" -->
<!-- #INCLUDE FILE="./Form_autocalc_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim bIsAutoCalcMode
Dim bFormSpec
Dim bIOsCommonYearChanged

Dim arrEmInfo, intRows
Dim strShoolYearStart, strShoolYearEnd
Dim strShoolPrevYearStart, strShoolPrevYearEnd
Dim strCommonYearID, strCommonYearName
Dim objCommonYears
Dim strWarningMessage
Dim objSchoolFormComponent

Const kSumValueOfIncludingRows = "Сумма значений строк "
Const kValueOfInclidingRow = "Значение строки "
Const kMustBeSmaller = " должно быть не больше"
Const kMustBeSmaller_s = " должна быть не больше"

Const kUndefinedValue = -1

Const kMinOSHGrade	= 0
Const kMaxOSHGrade	= 12

Function GetFormName()
End Function

Function GetFormId()
End Function

Function GetSourceFormId()
End Function

Function GetFormPageNum()
End Function

Function GetPageTitle()
	GetPageTitle = GetFormName()
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = true
End Function

Sub AutoCalcEMInfo()
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = False
End Function

Sub SpecialMain()
End Sub

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Reports
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_StatForms
 End Function

Sub Main()
	CreateComponent()
	If bIsAutoCalcMode Then
		Call AutoCalcJSON()
	Else
		LoadEMInfo()
	End If
	SpecialMain()
End Sub

Function onLoad()
	onLoad = onLoad & SpecialOnLoad()
End Function

Function SpecialOnLoad()
End Function

Sub ReadState()
	Call InitEmFilters()
	Call isReadOnly()
	InitCommonYear()
	bIsAutoCalcMode = ( GetSafeStr( Request("AC"), 1, "" ) = "Y" )
	If GetFormPageNum() = 1 Then Call InitFilterTitlePage()
	SpecialReadState()
	bFormSpec = GetSafeLng(Request("FS"), 0)
End Sub

Sub CreateComponent()
	Set objSchoolFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
	If objSchoolFormComponent Is Nothing Then GenerateError obLanguage("EMReports","kCantCreateMorfComponent")
End Sub

Sub LoadEmInfo()
	Dim formId, page, srcFormId, kMinGlobalYearId
	On Error Resume Next

	formId = GetFormId()
	page = GetFormPageNum()
	srcFormId = GetSourceFormId()

	bFormSpec = GetSafeLng(Request("FS"), 0)

	kMinGlobalYearId = GetMinGlobalYear()
	If strCommonYearID < kMinGlobalYearId Then strCommonYearID = kMinGlobalYearId

	Set dictSchoolInfo = objSchoolFormComponent.GetEMFormParameters(formId, filterEMID, strCommonYearID, page, -1, bFormSpec)
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))

	If page = 1 And Not IsDull(srcFormId) Then
		Call CheckAvailabilityForm(srcFormId, Null)
	End If
	If page > 3 or page = 2 or (page = 3 and formId = 103) then call InitializeCommonYears
End Sub

Function GetMinGlobalYear()
End Function

Function GetFormFieldName(nSection, nRow, nCol)
End Function

Sub SpecialReadState()
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, "Back", Request.ServerVariables("SCRIPT_NAME" ).Item)
	Call obTokenMgr.SetData(strToken, "stCommYearID", strCommonYearID)
	SpecialWriteState()
End Sub

Sub SpecialWriteState()
End Sub

Sub InitializeCommonYears()
	If Not bIsDebug Then On Error Resume Next

	Dim objInfo
	Dim blnIsOpenedOSHFound

	strShoolYearStart = ""
	strShoolYearEnd = ""
	strShoolPrevYearStart = ""
	strShoolPrevYearEnd = ""

	Set objInfo = objNSNET.GetEMGlobalYearsList(filterEMID, -1, False)
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
	Do While Not objInfo.EOF
		If Cstr(objInfo("GLOBALYEARID")) = CStr(strCommonYearID) Then
			strShoolYearStart = Year(objInfo("STARTDATE"))
			strShoolYearEnd =  Year(objInfo("ENDDATE"))
			objInfo.MoveNext
			If Not objInfo.EOF Then
				strShoolPrevYearStart = Year(objInfo("STARTDATE"))
				strShoolPrevYearEnd = Year(objInfo("ENDDATE"))
			Else
				strShoolPrevYearEnd = strShoolYearStart
				strShoolPrevYearStart = strShoolPrevYearEnd - 1
			End IF
			TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
			Exit Do
		End If
		objInfo.MoveNext
	Loop
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
End Sub

Sub InitFilterTitlePage
	Dim arrGYears
	Dim kMinGlobalYearId
	kMinGlobalYearId = GetMinGlobalYear()
	filterEMID = ReadEMRegionFilter(False)
	Call obTokenMgr.SetData(strToken,"filterEmId",filterEMID)
	Call isReadOnly()
	bIOsCommonYearChanged = GetSafeBool((Request("CHCY")="Y"),False)
	Set objCommonYears = objNSNET.GetEMGlobalYearsList(filterEMID, -1, False)
	Call WriteEMs()
	If kMinGlobalYearId Then objCommonYears.Filter = "GLOBALYEARID >= " & kMinGlobalYearId
End Sub

Sub onHead()%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/stat-forms/css/stat-form.min.css")%>">
	<script><!--
		<%If GetFormPageNum() = 1 Then%>
			function changeCommonYear() {
				postTo("/asp/EDUC_MANAGER/Reports/StatForms/ChangeYear.asp", { FORMID: <%=GetFormId()%>, CMNYEARID: $("select[name='CMNYEARID']").val(), FS: <%=bFormSpec%> });
			}
		<%End If %>

		$(document).ready(function() {
			// подменяется название экрана
			$("h1.title a").text(language.Generic.EMReportNames.kStatisticWatchingForm);
		});
	//--></script>
	<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolForms/SchoolInfo_js_inc.asp" --><%

	Call SpecialOnHead()
End Sub

Sub SpecialOnHead()
End Sub

Sub SpecialDrawPage()
End Sub

Sub DrawPage()
End Sub

Sub DrawLinkButtons()
	Dim pageNum, formId

	formId = GetFormId()
	pageNum = GetFormPageNum()

	If Not readonly Then ButtonSave "SaveForm(" & formId & ", " & pageNum & ", '" & GetSavingMessage() & "')", obLanguage("Common","kSave")
	If Not readonly Then ButtonReset "resetScreen('SchoolEdit')", obLanguage("Common","kReset")
	If IsServerSideAutoCalc() And Not readonly Then
		SimpleButton "autoCalc()", obLanguage("SchoolInfo","kbtnCalculate_")
	End If
	If pageNum = 1 Then
		Call ButtonExport( "openExcel('xls', true, " & formId & ")")
	End If
	Call ButtonPrint("showPrintVersion()")
End Sub

'Вызывается только для титульного листа
Sub DrawFilters(strForm)
	Call DrawFilterTitlePage()
End Sub

Sub onDrawPage()
	Dim nFormPageNum 

	nFormPageNum = GetFormPageNum()%>

	<form name="SchoolEdit" method="post" action="Page<%=nFormPageNum%>.asp" OnSubmit="return canSubmit();" >
		<%SetFiltersWidth "col-md-offset-3 col-md-6", "col-md-4", "col-md-8"
		Call DrawButtonsFiltersEx(True, (nFormPageNum = 1), "SchoolEdit")%>

		<%DrawPagesList(nFormPageNum)%>

		<hr style="box-shadow: inset 0 0 5px 5px rgba(0,0,0,.1); height: 5px;"/>
		<div class="stat-form-wrapper">
		
				<%=WriteHiddenTags(Array("FS", bFormSpec))%>
				<%=WriteObligatoryTags()%>
				<% SpecialDrawPage() %>
				<% DrawPage() %>
		
		</div>
		<hr style="box-shadow: inset 0 0 5px 5px rgba(0,0,0,.1); height: 5px;"/>
	</form>

	<%DrawPagesList(nFormPageNum)%><%
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
					For i=1 To Ubound(arrPages)
						If theCurPage <> i Then%>
							<li><a href="javascript: gotoPageEM(<%=i%>)"><%=arrPages(i)%></a></li><%
						Else%>
							<li class="active"><a><%=arrPages(i)%></a></li><%
						End If
					Next%>
				</ul>
			</nav>
		</div>
	</div><%
End Sub

Function GetSavingMessage()
	GetSavingMessage = obLanguage("SchoolInfo","kFormWasSaved").Format(Array(GetFormName()))
End Function
%>
