<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim objStateList, objSchoolInfo, objCity
Dim syRs, strSchoolDist

Function GetPageTitle()
	GetPageTitle = obLanguage("SchoolInfo","kTitleSchoolInfoCard")
End Function

Sub ReadState()
	readonly = TRUE
End Sub

Sub Main()
	
End Sub
%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%
Sub onDrawPage()
%>
		<div CLASS="body"><%=GetPageTitle()%><br><br>
		<%=obLanguage("SchoolInfo","kLicences")%><br><br>
		<%=obLanguage("Common","kSchoolYear")%>:&nbsp;<%=DB2HTML(obTokenMgr.GetData(strToken, "CurrYearName"))%>
		</div>
		<br>
		<TABLE Class="ThinTable" ALIGN="CENTER" BORDER=1 CELLSPACING=0 CELLPADDING=5>
				<% Call LoadShoolInfoEx( 0,kLicenceSchoolInfoPage,-1) %>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/Licences/SchoolInfo1b_inc.asp -->
		</TABLE><%
End Sub
%>
