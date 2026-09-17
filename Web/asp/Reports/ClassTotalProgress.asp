<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/ClassTotalProgress_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Function GetTableHeader()
	Dim Rowspan
	If Not bNoMarks And bExam Then Rowspan =" rowspan=""2""" Else Rowspan =""
	GetTableHeader = "<table class=""table-print-num"">" &"<tr>"
	GetTableHeader = GetTableHeader & _
		"<th"& Rowspan &">" & obLanguage("Filter","kN_PP") & "</th>" & _
		"<th"& Rowspan &">" & obLanguage("Reports","kLastNameAndFirstName") &" "& obLanguage("Reports","kOfStudent",strFunctionalityType) & "</th>"
End Function
%>
