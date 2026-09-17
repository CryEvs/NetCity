<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/assignment.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="Journal_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim strSubjClassID

Sub ReadState()
	strCurrYearID = obTokenMgr.GetData(strToken,stCurrYear)
	strTermID = obTokenMgr.GetData(strToken, stCurrTerm)
	strSubjClassID = obTokenMgr.GetData(strToken,stCurrSubjClass)
	strClassID_IUP = GetSafeStr(obTokenMgr.GetData( strToken, stCurrClass_IUP),-1, Null)
	Call InitIUPClassID(strClassID_IUP)
	strSrezColor = "#EAEAEA"
	strTKRColor = "#EAEAEA"
	bDisplayLastAccess = False
	bPrint = True
End Sub

Sub onDrawPage()
	If Not bIsDebug Then On Error Resume Next
	Response.Write GetPageTitlePrint(obLanguage("Common","kJournal",strFunctionalityType), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), obLanguage("Common","kPeriod"), objNSNET.GetTermName(strTermID), obLanguage("Filter","kClassGB",strFunctionalityType)&"/"&obLanguage("Filter","kCourseGB"), objNSNET.GetSubjectClassName(strSubjClassID), obLanguage("Filter","kTeacherGB",strFunctionalityType), strTeacherName))
	Call DrawJournalTable( False, False, False, False )
	Response.Write GetPageVerPrint()
End Sub
%>	
