<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/MovedOutStudentList_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub Main()
	Dim objYearInfo
	Set objYearInfo = objNSNET.GetYearInfo(strSchoolYearID)
	strTitle = "<b>" & obLanguage("Reports","kMovedOutStudentListsForTerm",strFunctionalityType) & ": " & strTermName & "<br>" & Year(objYearInfo("STARTDATE")) & "-" & Year(objYearInfo("ENDDATE")) & " " & obLanguage("Reports","kOfSchoolYear_s") & "</b>"
	Call GetTable()
	strReport=GetForm() & GetPageVerExcel()
End Sub

Function GetTableHeader()
	GetTableHeader = "<table width=""100%"" class=""ThinTable""  border=""1"" cellspacing=""0"">" & _
		"<tr align=""center"" class=""xtcb"" style=""background-color: #eaeaea"">"
End Function

Function GetForm()
	GetForm = "<div class=""body"" style=""font-size:12.0pt"" align=""center"">" & strTitle & "</div><br>" & DrawTable()
End Function
%>
