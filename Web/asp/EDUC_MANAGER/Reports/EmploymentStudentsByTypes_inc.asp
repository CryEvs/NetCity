<!-- #INCLUDE FILE="../../Reports/ReportService_inc.asp" -->
<%	' © 2007-2014 IRTech. All rights reserved.
const kCountProgDirections = 14

Dim nGlobalYearId
Dim strFilterEMID
Dim dtEndDate, strEndDate
Dim arrCoverageAddEducByDirectionsRecords
Dim usedProgDirections
Dim colSpan

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("EMReportNames","kRNEmploymentStudentsByTypes")
End Function

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kEMName"),objNSNET.GetEducManagementName(filterEMID), _
		obLanguage("Common","kSchoolYear"),objNSNET.GetGlobalYearName(nGlobalYearID), _
		obLanguage("Common","kDate"), strEndDate _
		)
End Function

Sub SpecialRead()
	nGlobalYearID = CLng(GetSafe("CMNYEAR", 0))
	SetScriptTimeOut 900
	strEndDate = GetSafe("DDT",  "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	strFilterEMID = GetSafe("FilterEMID", -1)
End Sub

Sub SpecialMain()
	Dim arrayList, arrUsedProgDirections, i

	On Error Resume Next
	Set arrayList = objNSNET.GetEmCoverageAddEducationByDirections(strFilterEMID, nGlobalYearId, dtEndDate)
	TestError obLanguage("Common","kUnexpErr")
	
	arrCoverageAddEducByDirectionsRecords = arrayList.ToArray()
	
	Set arrayList = objNSNET.GetUsedProgDirection(nGlobalYearId)
	TestError obLanguage("Common","kUnexpErr")

	ReDim usedProgDirections(kCountProgDirections)
	arrUsedProgDirections = arrayList.ToArray()
	colSpan = Ubound(arrUsedProgDirections)
	For i = 0 To colSpan
		usedProgDirections(arrUsedProgDirections(i)) = true
	Next
	colSpan = colSpan + 1
End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-num"">" & _
	"<tr><th rowspan=""2"" class=""text-nowrap"">" & DB2HTML_BR(obLanguage("EMReports","kOrderNumNL")) & "</th>"
	GetTableHeader = GetTableHeader & GetManagementColumn(2)
	GetTableHeader = GetTableHeader & "<th rowspan=""2"">" & obLanguage("Common","kCity") & "</th><th rowspan=""2"">" & obLanguage("EMReports","kDistrictCity") & _
	"</th><th rowspan=""2"">" & obLanguage("EMReports","kOU") & "</th><th rowspan=""2"">" & obLanguage("Common","kStudentsCount") & _
	"</th><th rowspan=""2"">" & obLanguage("Common","kStudentsUdodCount") & "</th><th colspan=""" & colSpan & """>" & obLanguage("Common","kIncludingTypes") & "</th></tr>" & _
	
	"<tr><th>" & obLanguage("Common","kTech") & "</th><th>" & obLanguage("Common","kNaturalistic") & "</th><th>" & obLanguage("Common","kSport") & _
	"</th><th>" & obLanguage("Common","kArt") & "</th><th>" & obLanguage("Common","kTouristAndLocalHistory") & "</th><th>" & obLanguage("Common","kSocialAndPedagogical") & "</th>"

	If usedProgDirections(ProgDirections_ArtAest) Then GetTableHeader = GetTableHeader & "<th>" & obLanguage("Common","kArtisticAndAesthetic") & "</th>"
	If usedProgDirections(ProgDirections_Cultur) Then GetTableHeader = GetTableHeader & "<th>" & obLanguage("Common","kCulturals") & "</th>"
	If usedProgDirections(ProgDirections_ScientTech) Then GetTableHeader = GetTableHeader & "<th>" & obLanguage("Common","kScientificAndTechnical") & "</th>"
	If usedProgDirections(ProgDirections_EcoBio) Then GetTableHeader = GetTableHeader & "<th>" & obLanguage("Common","kEcologicalAndBiological") & "</th>"
	If usedProgDirections(ProgDirections_MilitarPatr) Then GetTableHeader = GetTableHeader & "<th>" & obLanguage("Common","kMilitaryPatriotic") & "</th>"
	If usedProgDirections(ProgDirections_SportTech) Then GetTableHeader = GetTableHeader & "<th>" & obLanguage("Common","kSportAndTechnology") & "</th>"
	If usedProgDirections(ProgDirections_PreProf) Then GetTableHeader = GetTableHeader & "<th>" & obLanguage("Common","kPreProfessional") & "</th>"
	If usedProgDirections(ProgDirections_Prof) Then GetTableHeader = GetTableHeader & "<th>" & obLanguage("Common","kProfessional") & "</th>"

	GetTableHeader = GetTableHeader & "</tr>"
End Function

Function GetReportTable
	Dim i, strReport, objRecord, objByProgDirections, countRecords
	Dim totalCountStudents, totalCountStudentsAddSchool, totalCountStudentsArtAest, totalCountStudentsSocPed, totalSumStudensWithCultur, totalCountStudentsScientTech, totalCountStudentsNatur
	Dim totalCountStudentsEcoBio, totalCountStudentsSport, totalCountStudentsTourHist, totalCountStudentsMilitarPatr, totalCountStudentsSportTech, totalCountStudentsPreProf, totalCountStudentsProf
	Dim totalCountStudentsTech, totalCountStudentsArt


	strReport = GetTableHeader()
	countRecords = UBound(arrCoverageAddEducByDirectionsRecords)

	If countRecords = -1 Then
		GetReportTable = GetWarningPrint(obLanguage("Reports", "kNoStudents"))
	Else
		For i = 0 To countRecords
			Set objRecord = arrCoverageAddEducByDirectionsRecords(i)
			Set objByProgDirections = objRecord.StudentsCountByProgDirections
			strReport = strReport & "<tr class=""text-nowrap"">" &_
			"<td>" & i+1 & "</td>"
			If subEms Then
				strReport = strReport & "<td class=""cell-text"">" & DB2HTML(objRecord.EmName) & "</td>"
			End If
			
			strReport = strReport & "<td class=""cell-text"">" & DB2HTML(objRecord.CityName) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objRecord.DistrictName) & "</td>" & _
			"<td class=""cell-text"">" & DB2HTML(objRecord.SchoolName) & "</td>" & _
			"<td>" & DB2HTML(objRecord.StudentsCount) & "</td>" & _
			"<td>" & DB2HTML(objRecord.StudentsCountAddEduc) & "</td>" & _

			"<td>" & DB2HTML(objByProgDirections.TechCount) & "</td>" &_
			"<td>" & DB2HTML(objByProgDirections.NaturCount) & "</td>" &_
			"<td>" & DB2HTML(objByProgDirections.SportCount) & "</td>" &_
			"<td>" & DB2HTML(objByProgDirections.ArtCount) & "</td>" &_
			"<td>" & DB2HTML(objByProgDirections.TourHistCount) & "</td>" &_
			"<td>" & DB2HTML(objByProgDirections.SocPedCount) & "</td>"

			totalCountStudents = totalCountStudents + objRecord.StudentsCount
			totalCountStudentsAddSchool = totalCountStudentsAddSchool + objRecord.StudentsCountAddEduc

			totalCountStudentsTech = totalCountStudentsTech + objByProgDirections.TechCount
			totalCountStudentsNatur = totalCountStudentsNatur + objByProgDirections.NaturCount
			totalCountStudentsSport = totalCountStudentsSport + objByProgDirections.SportCount
			totalCountStudentsArt = totalCountStudentsArt + objByProgDirections.ArtCount
			totalCountStudentsTourHist = totalCountStudentsTourHist + objByProgDirections.TourHistCount
			totalCountStudentsSocPed = totalCountStudentsSocPed + objByProgDirections.SocPedCount
			
			If usedProgDirections(ProgDirections_ArtAest) Then
				strReport = strReport & "<td>" & DB2HTML(objByProgDirections.ArtAestCount) & "</td>"
				totalCountStudentsArtAest = totalCountStudentsArtAest + objByProgDirections.ArtAestCount
			End If
			If usedProgDirections(ProgDirections_Cultur) Then
				strReport = strReport & "<td>" & DB2HTML(objByProgDirections.CulturCount) & "</td>"
				totalSumStudensWithCultur = totalSumStudensWithCultur + objByProgDirections.CulturCount
			End If
			If usedProgDirections(ProgDirections_ScientTech) Then
				strReport = strReport & "<td>" & DB2HTML(objByProgDirections.ScientTechCount) & "</td>"
				totalCountStudentsScientTech = totalCountStudentsScientTech + objByProgDirections.ScientTechCount
			End If
			If usedProgDirections(ProgDirections_EcoBio) Then
				strReport = strReport & "<td>" & DB2HTML(objByProgDirections.EcoBioCount) & "</td>"
				totalCountStudentsEcoBio = totalCountStudentsEcoBio + objByProgDirections.EcoBioCount
			End If
			If usedProgDirections(ProgDirections_MilitarPatr) Then
				strReport = strReport & "<td>" & DB2HTML(objByProgDirections.MilitarPatrCount) & "</td>"
				totalCountStudentsMilitarPatr = totalCountStudentsMilitarPatr + objByProgDirections.MilitarPatrCount
			End If
			If usedProgDirections(ProgDirections_SportTech) Then
				strReport = strReport & "<td>" & DB2HTML(objByProgDirections.SportTechCount) & "</td>"
				totalCountStudentsSportTech = totalCountStudentsSportTech + objByProgDirections.SportTechCount
			End If
			If usedProgDirections(ProgDirections_PreProf) Then
				strReport = strReport & "<td>" & DB2HTML(objByProgDirections.PreProfCount) & "</td>"
				totalCountStudentsPreProf = totalCountStudentsPreProf + objByProgDirections.PreProfCount
			End If
			If usedProgDirections(ProgDirections_Prof) Then
				strReport = strReport & "<td>" & DB2HTML(objByProgDirections.ProfCount) & "</td>"
				totalCountStudentsProf = totalCountStudentsProf + objByProgDirections.ProfCount
			End If
			strReport = strReport & "</tr>"
		Next

		strReport = strReport & "<tr class=""totals""><td>" & obLanguage("EMReports","kTotal") & "</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>"
		If subEms Then
			strReport = strReport & "<td>&nbsp</td>"
		End If
		strReport = strReport & "<td>" & totalCountStudents & "</td><td>" & totalCountStudentsAddSchool & _
		"</td><td>" & totalCountStudentsTech & "</td><td>" & totalCountStudentsNatur & "</td><td>" & totalCountStudentsSport & _
		"</td><td>" & totalCountStudentsArt & "</td><td>" & totalCountStudentsTourHist & "</td><td>" & totalCountStudentsSocPed & "</td>"

		If usedProgDirections(ProgDirections_ArtAest) Then strReport = strReport & "<td>" & totalCountStudentsArtAest & "</td>"
		If usedProgDirections(ProgDirections_Cultur) Then strReport = strReport & "<td>" & totalSumStudensWithCultur & "</td>"
		If usedProgDirections(ProgDirections_ScientTech) Then strReport = strReport & "<td>" & totalCountStudentsScientTech & "</td>"
		If usedProgDirections(ProgDirections_EcoBio) Then strReport = strReport & "<td>" & totalCountStudentsEcoBio & "</td>"
		If usedProgDirections(ProgDirections_MilitarPatr) Then strReport = strReport & "<td>" & totalCountStudentsMilitarPatr & "</td>"
		If usedProgDirections(ProgDirections_SportTech) Then strReport = strReport & "<td>" & totalCountStudentsSportTech & "</td>"
		If usedProgDirections(ProgDirections_PreProf) Then strReport = strReport & "<td>" & totalCountStudentsPreProf & "</td>"
		If usedProgDirections(ProgDirections_Prof) Then strReport = strReport & "<td>" & totalCountStudentsProf & "</td>"

		GetReportTable = strReport & "</table>"
	End If
End Function
%>