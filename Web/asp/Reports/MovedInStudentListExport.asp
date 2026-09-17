<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/MovedInStudentList_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Function GetTableHeader()
	GetTableHeader = "<table width=""100%"" class=""ThinTable""  border=""1"" cellspacing=""0"">" & _
		"<tr align=""center"" class=""xtcb"" style=""background-color: #eaeaea"">"
End Function

Function GetForm()
	GetForm = "<div class=""body"" style=""font-size:12.0pt"" align=""center"">" & strTitle & "</div><br>" & DrawTable()
End Function
%>
