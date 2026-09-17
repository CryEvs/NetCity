<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
Dim gyRs
Dim arrReportsNames, arrReportsFiles
Dim dctFormsRevisonPaths, objSchoolFormComponent
Dim objEOLegalFormInfo
Dim hasGOU, hasNOU
Dim bShowMnsFormsL
Dim bIsRik76Relevance, bIsD4Relevance, bIsD12Relevance, bIsD7Relevance, bIsD8Relevance, bIsD9Relevance, bIsD6Relevance, bIsRIK83Relevance, bIsSv1Relevance, bIsD11Relevance

Const kMaxReports = 28

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames", "kStatisticWatchingForm")
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_StatForms
 End Function

Sub ReadState()
	bShowMnsFormsL = obContext.ServerSettings.SystemSettings.ShowMnsForms
End Sub

Sub Main()
	Dim dctFormsRelevance

	Call InitYears()
	Call InitSchoolFormComponent()
	Set dctFormsRevisonPaths = objSchoolFormComponent.GetStatFormsPathsByGYear(strCurrGlobalYearId)
	Set objEOLegalFormInfo = objSchoolFormComponent.GetEOLegalFormInfo(strEmId, kWizardSteps)

	Set dctFormsRelevance = objSchoolFormComponent.GetStatFormsRelevance(strCurrGlobalYearId)

	bIsRik76Relevance = dctFormsRelevance(StatForm_Rik76)
	bIsD4Relevance = dctFormsRelevance(StatForm_D4)
	bIsD12Relevance = dctFormsRelevance(StatForm_D12)
	bIsD7Relevance = dctFormsRelevance(StatForm_D7)
	bIsD8Relevance = dctFormsRelevance(StatForm_D8)
	bIsD9Relevance = dctFormsRelevance(StatForm_D9)
	bIsD6Relevance = dctFormsRelevance(StatForm_D6)
	bIsRIK83Relevance = dctFormsRelevance(StatForm_Rik83Em)
	bIsSv1Relevance = dctFormsRelevance(StatForm_Sv1)
	bIsD11Relevance = dctFormsRelevance(StatForm_D11)

	hasGOU = objEOLegalFormInfo("gouschools") > 0
	hasNOU = objEOLegalFormInfo("nouschools") > 0

	Call GetNames()
	Call GetLinks()
End Sub

Sub InitSchoolFormComponent()
	Set objSchoolFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
	If objSchoolFormComponent Is Nothing Then GenerateError obLanguage("EMReports","kCantCreateMorfComponent")
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
End Sub

Sub WriteState()
End Sub

Sub InitYears()
	Set gyRs = objNSNET.GetGlobalYearList()
End Sub

Sub DrawYears(theStrForm)
	DrawFilterRow theStrForm, obLanguage("Common","kSchoolYear"), "CURRGLOBALYEAR", gyRs, "GLOBALYEARID", "SCHOOLYEARNAME", strCurrGlobalYearId, False
End Sub

Sub GetNames
	ReDim arrReportsNames(kMaxReports)

	If hasGOU Then
		If bIsRik76Relevance Then arrReportsNames(0) = obLanguage("EMReportNames","kForm76")
		If bIsD4Relevance    Then arrReportsNames(6) = obLanguage("EMReportNames","kFormD4")
		If bIsD12Relevance   Then arrReportsNames(9) = obLanguage("EMReportNames","kFormD12")
		If bIsD7Relevance    Then arrReportsNames(12) = obLanguage("EMReportNames","kFormD7")
		If bIsD8Relevance    Then arrReportsNames(14) = obLanguage("EMReportNames","kFormD8")
		If bIsD9Relevance    Then arrReportsNames(16) = obLanguage("EMReportNames","kFormD9")
		If bIsD6Relevance    Then arrReportsNames(22) = obLanguage("EMReportNames","kFormD6")
		If bIsRIK83Relevance Then arrReportsNames(24) = obLanguage("EMReportNames","kForm83RIK")
	End If

	If hasNOU Then
		If bIsRik76Relevance Then arrReportsNames(1) = obLanguage("EMReportNames","kForm76NOU")
		If bIsD4Relevance    Then arrReportsNames(7) = obLanguage("EMReportNames","kFormD4NOU")
		If bIsD12Relevance   Then arrReportsNames(10) = obLanguage("EMReportNames","kFormD12NOU")
		If bIsD7Relevance    Then arrReportsNames(13) = obLanguage("EMReportNames","kFormD7NOU")
		If bIsD8Relevance    Then arrReportsNames(15) = obLanguage("EMReportNames","kFormD8NOU")
		If bIsD6Relevance    Then arrReportsNames(23) = obLanguage("EMReportNames","kFormD6NOU")
		If bIsD9Relevance    Then arrReportsNames(17) = obLanguage("EMReportNames","kFormD9NOU")
		If bIsRIK83Relevance Then arrReportsNames(25) = obLanguage("EMReportNames","kForm83RIKNOU")
	End If

	If bIsRik76Relevance Then 
		If objEOLegalFormInfo("gouinternats") > 0 Then arrReportsNames(2) = obLanguage("EMReportNames","kForm76InternatsGOU")
		If objEOLegalFormInfo("nouinternats") > 0 Then arrReportsNames(3) = obLanguage("EMReportNames","kForm76InternatsNOU")
		If bShowMNSFormsL Then arrReportsNames(4) = obLanguage("EMReportNames","kForm76MNS")
	End If

	If bIsSv1Relevance Then arrReportsNames(5) = obLanguage("EMReportNames","kFormSV1")

	If bIsD11Relevance Then arrReportsNames(8) = obLanguage("EMReportNames","kFormD11")

	arrReportsNames(11) = obLanguage("EMReportNames","kFormND1")

	arrReportsNames(18) = obLanguage("EMReportNames","kForm103RIK")
	arrReportsNames(19) = obLanguage("EMReportNames","kFormZpSoc")
	arrReportsNames(20) = obLanguage("EMReportNames","kFormZpEduc")
	arrReportsNames(21) = obLanguage("EMReportNames","kFormD3")

	arrReportsNames(26) = obLanguage("EMReportNames","kFormDO1Sv")

	arrReportsNames(27) = obLanguage("EMReportNames","kReportExportStatForms")
	' arrReportsNames(28) = obLanguage("EMReportNames","kRNCountSchoolsNoCloseOSH1")
End Sub

Sub GetLinks
	Dim genPathRIK76
	ReDim arrReportsFiles(kMaxReports)

	genPathRIK76 = "../StatForms/RIK76/" & dctFormsRevisonPaths(StatForm_Rik76) & "/Page1.asp"

	If hasGOU Then
		If bIsRik76Relevance Then  arrReportsFiles(0) = genPathRIK76 & "?FS=1"
		If bIsD4Relevance Then     arrReportsFiles(6) = "../StatForms/D4/" & dctFormsRevisonPaths(StatForm_D4) & "/Page1.asp?FS=1"
		If bIsD12Relevance Then    arrReportsFiles(9) = "../StatForms/D12/" & dctFormsRevisonPaths(StatForm_D12) & "/Page1.asp?FS=1"
		If bIsD7Relevance Then     arrReportsFiles(12) = "../StatForms/D7/" & dctFormsRevisonPaths(StatForm_D7) & "/Page1.asp?FS=1"
		If bIsD8Relevance Then     arrReportsFiles(14) = "../StatForms/D8/" & dctFormsRevisonPaths(StatForm_D8) & "/Page1.asp?FS=1"
		If bIsD9Relevance Then     arrReportsFiles(16) = "../StatForms/D9/" & dctFormsRevisonPaths(StatForm_D9) & "/Page1.asp?FS=1"
		If bIsD6Relevance Then     arrReportsFiles(22) = "../StatForms/D6/" & dctFormsRevisonPaths(StatForm_D6) & "/Page1.asp?FS=1"
		If bIsRIK83Relevance Then  arrReportsFiles(24) = "../StatForms/RIK83/" & dctFormsRevisonPaths(StatForm_Rik83Em) & "/Page1.asp?FS=1"
	End If

	If hasNOU Then
		If bIsRik76Relevance Then  arrReportsFiles(1) = genPathRIK76 & "?FS=2"
		If bIsD4Relevance Then     arrReportsFiles(7) = "../StatForms/D4/" & dctFormsRevisonPaths(StatForm_D4) & "/Page1.asp?FS=2"
		If bIsD12Relevance Then    arrReportsFiles(10) = "../StatForms/D12/" & dctFormsRevisonPaths(StatForm_D12) & "/Page1.asp?FS=2"
		If bIsD7Relevance Then     arrReportsFiles(13) = "../StatForms/D7/" & dctFormsRevisonPaths(StatForm_D7) & "/Page1.asp?FS=2"
		If bIsD8Relevance Then     arrReportsFiles(15) = "../StatForms/D8/" & dctFormsRevisonPaths(StatForm_D8) & "/Page1.asp?FS=2"
		If bIsD9Relevance Then     arrReportsFiles(17) = "../StatForms/D9/" & dctFormsRevisonPaths(StatForm_D9) & "/Page1.asp?FS=2"
		If bIsD6Relevance Then     arrReportsFiles(23) = "../StatForms/D6/" & dctFormsRevisonPaths(StatForm_D6) & "/Page1.asp?FS=2"
		If bIsRIK83Relevance Then  arrReportsFiles(25) = "../StatForms/RIK83/" & dctFormsRevisonPaths(StatForm_Rik83Em) & "/Page1.asp?FS=2"
	End If

	If bIsRik76Relevance Then
		If objEOLegalFormInfo("gouinternats") > 0 Then arrReportsFiles(2) = genPathRIK76 & "?FS=3"
		If objEOLegalFormInfo("nouinternats") > 0 Then arrReportsFiles(3) = genPathRIK76 & "?FS=4"
		If bShowMNSFormsL Then arrReportsFiles(4) = genPathRIK76 & "?FS=5"
	End If

	If bIsSv1Relevance Then arrReportsFiles(5) = "../StatForms/SV1/" & dctFormsRevisonPaths(StatForm_Sv1) & "/Page1.asp"

	If bIsD11Relevance Then arrReportsFiles(8) = "../StatForms/D11/" & dctFormsRevisonPaths(StatForm_D11) & "/Page1.asp"

	arrReportsFiles(11) = "../StatForms/ND1/" & dctFormsRevisonPaths(StatForm_Nd1) & "/Page1.asp"

	arrReportsFiles(18) = "../StatForms/RIK103/" & dctFormsRevisonPaths(StatForm_Rik103) & "/Page1.asp"
	arrReportsFiles(19) = "../StatForms/ZpSoc/" & dctFormsRevisonPaths(StatForm_ZpSoc) & "/Page1.asp"
	arrReportsFiles(20) = "../StatForms/ZpEduc/" & dctFormsRevisonPaths(StatForm_ZpEduc) & "/Page1.asp"
	arrReportsFiles(21) = "../StatForms/D3/" & dctFormsRevisonPaths(StatForm_D3) & "/Page1.asp"
	
	arrReportsFiles(26) = "../StatForms/DO1/" & dctFormsRevisonPaths(StatForm_DO1Em) & "/Page1.asp"

	arrReportsFiles(27) = "../FormOSHExport.asp"
	' arrReportsFiles(28) = "../ReportSchoolListWithoutOSH1.asp"
End Sub

Sub onHeadSpecial()
%>
<script>
function GoToLink(strHREF)
{
	if (strHREF == '') {
		alert(language.Generic.ReportNames.kReportUnavailable);
		return;
	}
	ok('FGSN', strHREF);
}
</script>
<%End Sub

Sub DrawLinkButtons
	SimpleButton "ok('FGSN', 'FillingControl.asp');", obLanguage("EMReportNames", "kFillingControl")
End Sub

Sub onDrawPage()
	Dim i

	DrawButtonPanel
%>
	<form name="FGSN" method="POST" action="" onsubmit="return canSubmit();">
		<%=WriteObligatoryTags()%>
		<table class="NullTable" style="width:100%;">
			<tr>
				<td valign="top">
					<table class="NullTable"><%Call DrawYears("FGSN")%></table>
				</td>
			</tr>
			<tr>
				<td>
					<table cellpadding="1">
						<%
						For i = 0 To kMaxReports
							If Not (IsDull(arrReportsFiles(i)) And IsDull(arrReportsNames(i))) Then%>
							<tr>
								<td nowrap style="padding: 1px;">
									<a href="JavaScript:GoToLink('<%=arrReportsFiles(i)%>')"><%=arrReportsNames(i)%></a>
								</td>
							</tr><%
							End IF
						Next%>
						<tr>
							<td nowrap="" style="padding: 1px;">
								<a href="1-GU.xls" target="_blank"><%=obLanguage("EMReportNames","kForm1GU")%></a>
							</td>
						</tr>
						<tr>
							<td nowrap="" style="padding: 1px;">
								<a href="1-MU.xls" target="_blank"><%=obLanguage("EMReportNames","kForm1MU")%></a>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</form><%
End Sub
%>

