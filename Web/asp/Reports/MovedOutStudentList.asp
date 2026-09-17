<!-- #INCLUDE FILE="../headerPrint.asp" -->
<!-- #INCLUDE FILE="MovedOutStudentList_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub Main()
	Dim objYearInfo
	Set objYearInfo = objNSNET.GetYearInfo(strCurrYearID)
	strTitle = obLanguage("Reports","kMovedOutStudentListsForTerm",strFunctionalityType) & ": " & strTermName & "<br>" & Year(objYearInfo("STARTDATE")) & "-" & Year(objYearInfo("ENDDATE")) & " " & obLanguage("Reports","kOfSchoolYear_s")
	Call GetTable()
	strReport = GetForm() & GetPageVerPrint()
End Sub

%>
