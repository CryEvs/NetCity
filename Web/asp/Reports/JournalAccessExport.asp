<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/JournalAccess_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Function GetPageSubTitle( strClassName, strTeacherName )
	GetPageSubTitle = "<table>" & _
		"<tr><td class=""xtl10wr""><b>" & filterClasses & ":</b>&nbsp;" & DB2HTML_BR(strClassName) & "</td></tr>" & _
		IIF(IsDull(strTeacherName), "", "<tr><td class=""xtl10wr""><b>" & obLanguage("Common","kClassChief",strFunctionalityType) & ":</b>&nbsp;" & DB2HTML_BR(strTeacherName) & "</td></tr>") & _
		"<tr><td>&nbsp;</td></tr></table>"
End Function
%>
