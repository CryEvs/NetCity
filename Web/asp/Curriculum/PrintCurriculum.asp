<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->
<!-- #INCLUDE VIRTUAL="/asp/Curriculum/Curriculum_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Function GetPageTitle()
	GetPageTitle = "<div align=""center"" class=""smalltext"">" & DB2HTML(objNSNET.GetSchoolName(strSchoolID)) & "</div>" & _
		"<div class=""body"" style=""font-size:12.0pt"" align=""center"">" & DB2HTML(obLanguage("Curriculum","kTitleCurriculum") & ": " & obTokenMgr.GetData(strToken, "CurrYearName")) & "</div>" & _
		"<div class=""body"" style=""font-size:12.0pt"" align=""center"">" & DB2HTML(strPlanName) & "</div><br>" & _
		"<table border=""0""><tr><td valign=""top"" class=""body"">" & obLanguage("Curriculum","kTotalHours") & ":</td><td class=""select"">" & nPlanHours & "</td></tr>"
	If Not IsDull(strBookName) Then GetPageTitle = GetPageTitle & "<tr><td valign=""top"" class=""body"">" & obLanguage("Curriculum","kTextBook") & ":</td><td class=""select"">" & DB2HTML(strBookName) & "</td></tr>"
	If Not IsDull(strMaterials) Then GetPageTitle = GetPageTitle & "<tr><td valign=""top"" class=""body"">" & obLanguage("Curriculum","kAddLiterature") & ":</td><td class=""select"">" & DB2HTML_BR(strMaterials) & "</td></tr>"
	GetPageTitle = GetPageTitle & "</table></br>"
End Function

Sub onDrawPage()
	Response.Write GetPageTitle & strReport & GetPageVerPrint()
End Sub
%>
