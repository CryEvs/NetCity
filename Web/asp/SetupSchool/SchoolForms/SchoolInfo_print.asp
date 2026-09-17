<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/ui.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim objStateList, objSchoolInfo, objCity
Dim syRs, strSchoolDist
Dim bCanEditExtraSchoolInfo

Function GetPageTitle()
	GetPageTitle = obLanguage("SchoolInfo","kTitleSchoolInfoCard")
	bCanEditExtraSchoolInfo = False
End Function

Sub ReadState()
	readonly = TRUE
End Sub

Sub Main()
	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	Set objCity = objNSNET.GetCityInfo(objSchoolInfo("CITYID") )
	Set syRs = objNSNET.GetSchoolYearList(strSchoolID, True)
End Sub
%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo_inc.asp -->
<%
Sub onDrawPage()
%>
		<div CLASS="body"><%=GetPageTitle()%><br><br>
		<%=obLanguage("Common","kSchoolYear")%>:&nbsp;<%=DB2HTML(obTokenMgr.GetData(strToken, "CurrYearName"))%></div>
		<br>
		<TABLE Class="ThinTable" ALIGN="CENTER" BORDER=1 CELLSPACING=0 CELLPADDING=5>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo0t_inc.asp -->
				<%Call LoadShoolInfoEx( 0,kMainSchoolInfoPage,-1) %>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolForms/SchoolInfo0b_inc.asp -->
		</TABLE><%
End Sub
%>
