<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim objClassInfo, strTeacherID

Sub specialWrite()
	WriteClass
	If strClassID <> "0" Then WriteTerm
End Sub

Sub Main()
	Set objClassInfo = objNSNET.GetClassInfo(strClassID)
	' test for classes absence
	If objClassInfo.EOF Then Exit Sub
	strTeacherID = CStr(GetSafeLng(objClassInfo("TEACHERID"), Null))' get class chief ID
End Sub

Sub specialHead()
End Sub

Sub WriteMoreHiddenTags( )
	Call WriteHiddenTags(Array("TID", strTeacherID))
End Sub

%>
