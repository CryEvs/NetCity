<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Curriculum/Curriculum_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Function GetPageTitle()
	GetPageTitle = "<table><tr><td class=""xtl8wr"">" & DB2HTML_BR(objNSNET.GetSchoolName(strSchoolID)) & "</td></tr>" & _
			"<tr><td class=""xtl12bwr"">" & DB2HTML_BR(obLanguage("Curriculum","kTitleCurriculum") & ": " & obTokenMgr.GetData(strToken, "CurrYearName")) & "</td></tr>" & _
			"<tr><td class=""xtl12bwr"">" & DB2HTML_BR(strPlanName) & "</td></tr><tr><td>&nbsp;</td></tr>" & _
			"<tr><td class=""xtl10wr""><b>" & obLanguage("Curriculum","kTotalHours") & ":</b>&nbsp;" & nPlanHours & "</td></tr>"
	If Not IsDull(strBookName) Then GetPageTitle = GetPageTitle & "<tr><td class=""xtl10wr""><b>" & obLanguage("Curriculum","kTextBook") & ":</b>&nbsp;" & DB2HTML_BR(strBookName) & "</td></tr>"
	If Not IsDull(strMaterials) Then GetPageTitle = GetPageTitle & "<tr><td class=""xtl10b""><b>" & obLanguage("Curriculum","kAddLiterature") & ":</b></td><td class=""xtl10"">" & GetDb2HtmlTextList(strMaterials) & "</td></tr>"
	GetPageTitle = GetPageTitle & "<tr><td>&nbsp;</td></tr></table>"
End Function

Sub onDrawPage()
	Response.Write GetPageTitle & strReport & GetPageVerExcel()
End Sub
%>
