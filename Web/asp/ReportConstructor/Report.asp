<!-- #INCLUDE FILE="../headerprint.asp" -->
<!-- #INCLUDE FILE="Report_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
	Dim tmpRes

Sub DrawTitleHeader(str)
	rw "<div align=""center"" class=""smalltext"">"
	rw str
	rw "</div>"
End Sub
Sub DrawReportDispName(str)
	rw "<div class=""body"" style=""font-size:12.0pt"" align=""center"">"
	rw str
	rw "</div><br>"
End Sub
Sub DrawTimeParam(str)
	rw "<div class=""select"">"
	rw str
	rw "</div>"
End Sub
Sub EndDrawParams()
	rw "<br>"
End Sub

%>
