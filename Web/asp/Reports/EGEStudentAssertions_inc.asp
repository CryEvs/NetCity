<!-- #INCLUDE FILE="DrawReports_inc.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim strClassID
Dim strSchoolPrincipal
Dim objEGEStudentAssertions

Const kEGESubjRUSSIAN_LNG = "Русский язык"
Const kEGESubjMATHEMATIC = "Математика (базовый уровень)"
Const kEGESubjMATHEMATIC_profile = "Математика (профильный уровень)"
Const kEGESubjPHYSICS = "Физика"
Const kEGESubjCHEMISTRY= "Химия"
Const kEGESubjBIOLOGY = "Биология"
Const kEGESubjHISTORY = "История"
Const kEGESubjGEOGRAPHY= "География"
Const kEGESubjLITERATURE = "Литература"
Const kEGESubjSOCIAL_STUDIES = "Обществознание"
Const kEGESubjINFORMATICA = "Информатика и ИКТ"
Const kEGESubjENGLISH_LNG_wrt= "Английский язык (кроме устн.)"
Const kEGESubjENGLISH_LNG= "Английский язык (устн.)"
Const kEGESubjDEUTSCH_LNG_wrt= "Немецкий язык (кроме устн.)"
Const kEGESubjDEUTSCH_LNG= "Немецкий язык (устн.)"
Const kEGESubjFRENCH_LNG_wrt= "Французский язык (кроме устн.)"
Const kEGESubjFRENCH_LNG= "Французский язык (устн.)"
Const kEGESubjSPANISH_LNG_wrt= "Испанский язык (кроме устн.)"
Const kEGESubjSPANISH_LNG= "Испанский язык (устн.)"

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNEGEStudentAssertions")
End Function
Function GetPageParams()
	GetPageParams = Array(obLanguage("Common","kClass",strFunctionalityType), objNSNET.GetClassName(strClassID))
End Function

Sub specialRead()
	strClassID = GetSafeID(Request("PCLID"),GetSafeID(obTokenMgr.GetData(strToken,stCurrClass), Null))
End Sub

Sub specialMain()
    Dim objInfo, i, intRows, arrSchoolInfo
	Set objEGEStudentAssertions = objNSNET.GetEGEStudentsAssertions(strClassID)
	Call InitSchoolSettings( objNSNET )
	strSchoolPrincipal = objNSNET.GetSchoolInfoParamValue(strSchoolId, "T00fio1") 
End Sub

Function GetReportTable()
	Dim strReport, strTeacherName
	Dim arrSumm, i
	Dim objTemp
	ReDim arrSumm(18)
	for i = 0 to 18
        arrSumm(i) = 0
    next
    Set objTemp = objNSNET.GetClassChiefs(strClassID)
    strTeacherName = objTemp("NICKNAME")
	If Not objEGEStudentAssertions.EOF Then 
	    strReport = "<table class=""table-print""><tr><th>" & obLanguage("Reports","kFIOstud") & "</th><th>" & obLanguage("Common", "kEGESubjRUSSIAN_LNG") & "</th><th>" & obLanguage("Common", "kEGESubjMATHEMATIC") &_
		 "</th><th>" & obLanguage("Common", "kEGESubjMATHEMATIC_profile") & "</th><th>" & obLanguage("Common", "kEGESubjPHYSICS") & "</th><th>" & obLanguage("Common", "kEGESubjCHEMISTRY") & "</th><th>" & obLanguage("Common", "kEGESubjBIOLOGY") &_
		 "</th><th>" & obLanguage("Common", "kEGESubjHISTORY") & "</th><th>" & obLanguage("Common", "kEGESubjGEOGRAPHY") & "</th><th>" & obLanguage("Common", "kEGESubjLITERATURE") & "</th><th>" & obLanguage("Common", "kEGESubjSOCIAL_STUDIES") &_
		 "</th><th>" & obLanguage("Common", "kEGESubjINFORMATICA") & "</th><th>" & obLanguage("Common", "kEGESubjENGLISH_LNG_wrt") & "</th><th>" & obLanguage("Common", "kEGESubjENGLISH_LNG") &_
	     "</th><th>" & obLanguage("Common", "kEGESubjDEUTSCH_LNG_wrt") & "</th><th>" & obLanguage("Common", "kEGESubjDEUTSCH_LNG") &_
		 "</th><th>" & obLanguage("Common", "kEGESubjFRENCH_LNG_wrt") & "</th><th>" & obLanguage("Common", "kEGESubjFRENCH_LNG") &_
		 "</th><th>" & obLanguage("Common", "kEGESubjSPANISH_LNG_wrt") & "</th><th>" & obLanguage("Common", "kEGESubjSPANISH_LNG") & "</th></tr>"
	     
	    strReport = strReport & "<tr>"
	    for i = 1 to 20
	        strReport = strReport & "<th>" & i & "</th>"    
	    next
	    strReport = strReport & "</tr>"
    	
	    While Not objEGEStudentAssertions.EOF
			strReport = strReport & "<tr><td class='cell-text text-nowrap'>" & objEGEStudentAssertions("FIO") & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("RUSSIAN_LNG")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("MATHEMATIC")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("MATHEMATIC_profile")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("PHYSICS")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("CHEMISTRY")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("BIOLOGY")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("HISTORY")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("GEOGRAPHY")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("LITERATURE")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("SOCIAL_STUDIES")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("INFORMATICA")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("ENGLISH_LNG_wrt")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("ENGLISH_LNG")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("DEUTSCH_LNG_wrt")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("DEUTSCH_LNG")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("FRENCH_LNG_wrt")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("FRENCH_LNG")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("SPANISH_LNG_wrt")) & "</td><td>" &_
			DB2HTML(objEGEStudentAssertions("SPANISH_LNG")) & "</td><tr>"
			arrSumm(0) = arrSumm(0) + IIF(Not IsDull(objEGEStudentAssertions("RUSSIAN_LNG")),1,0)
			arrSumm(1) = arrSumm(1) + IIF(Not IsDull(objEGEStudentAssertions("MATHEMATIC")),1,0)
			arrSumm(2) = arrSumm(2) + IIF(Not IsDull(objEGEStudentAssertions("MATHEMATIC_profile")),1,0)
			arrSumm(3) = arrSumm(3) + IIF(Not IsDull(objEGEStudentAssertions("PHYSICS")),1,0)
			arrSumm(4) = arrSumm(4) + IIF(Not IsDull(objEGEStudentAssertions("CHEMISTRY")),1,0)
			arrSumm(5) = arrSumm(5) + IIF(Not IsDull(objEGEStudentAssertions("BIOLOGY")),1,0)
			arrSumm(6) = arrSumm(6) + IIF(Not IsDull(objEGEStudentAssertions("HISTORY")),1,0)
			arrSumm(7) = arrSumm(7) + IIF(Not IsDull(objEGEStudentAssertions("GEOGRAPHY")),1,0)
			arrSumm(8) = arrSumm(8) + IIF(Not IsDull(objEGEStudentAssertions("LITERATURE")),1,0)
			arrSumm(9) = arrSumm(9) + IIF(Not IsDull(objEGEStudentAssertions("SOCIAL_STUDIES")),1,0)
			arrSumm(10) = arrSumm(10) + IIF(Not IsDull(objEGEStudentAssertions("INFORMATICA")),1,0)
			arrSumm(11) = arrSumm(11) + IIF(Not IsDull(objEGEStudentAssertions("ENGLISH_LNG_wrt")),1,0)
			arrSumm(12) = arrSumm(12) + IIF(Not IsDull(objEGEStudentAssertions("ENGLISH_LNG")),1,0)
			arrSumm(13) = arrSumm(13) + IIF(Not IsDull(objEGEStudentAssertions("DEUTSCH_LNG_wrt")),1,0)
			arrSumm(14) = arrSumm(14) + IIF(Not IsDull(objEGEStudentAssertions("DEUTSCH_LNG")),1,0)
			arrSumm(15) = arrSumm(15) + IIF(Not IsDull(objEGEStudentAssertions("FRENCH_LNG_wrt")),1,0)
			arrSumm(16) = arrSumm(16) + IIF(Not IsDull(objEGEStudentAssertions("FRENCH_LNG")),1,0)
			arrSumm(17) = arrSumm(17) + IIF(Not IsDull(objEGEStudentAssertions("SPANISH_LNG_wrt")),1,0)
			arrSumm(18) = arrSumm(18) + IIF(Not IsDull(objEGEStudentAssertions("SPANISH_LNG")),1,0)	        
    	    
	        objEGEStudentAssertions.MoveNext
	    Wend
	    strReport = strReport & "<tr class='totals'><td><b>" & obLanguage("Common", "kTotalStudentsBySubject") & "</b></td>"
	    for i = 0 to 18
    	    strReport = strReport & "<td><b>" & arrSumm(i) &  "</b></td>"        
	    next
	    strReport = strReport & "</table>"
	    strReport = strReport & "<br><br><table><tr><td>" & obLanguage("Common","kClassChief",strFunctionalityType) & " " & strTeacherName & "</td><td width=""200px"">&nbsp;</td><td colspan=""5"">" & obLanguage("SchoolInfo","kFIODirector") & strSchoolPrincipal & "<br>Дата " & FormatDateTime(NSNow(),2) & "</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>"
	    
	End IF
	GetReportTable = strReport
End Function
%>
