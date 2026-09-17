<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/CuriculumPlan_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub onDrawPage()
	If strTable<>"" Then
		Response.Write GetPageTitlePrint(strHeader, GetArrPageTitle()) & strTable & GetPageVerPrint()
	Else
		Response.Write "<div align=center><h3>"& obLanguage("SetupSchoolCurPlan","kCurriculumEmpty") &".</h3></div>"
	End If
End Sub
%>
