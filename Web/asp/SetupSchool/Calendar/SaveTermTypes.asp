<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim i
Dim dctTermTypes, nTermTypeID, nGrade, nGradeSet
Dim arrTermTypes, nProfileID, prof_grade
Dim arrKeys

If Not HasUserRight(arEditSchoolTermTypes) Then GenerateError obLanguage("Common","kErrPageAccess")

Set dctTermTypes = Server.CreateObject( "NetCity.Storage" )
Set arrKeys = Request("termTypeKeys")

For Each prof_grade in arrKeys
	nTermTypeID =  Request.Form("Grade_" & prof_grade)
	If Not IsDull(nTermTypeID) Then
		If CLng(nTermTypeID)>0 Then dctTermTypes(prof_grade) = nTermTypeID
	End If
Next
SetScriptTimeOut 900
Call objNSNET.SaveTermTypes(strCurrYearId, dctTermTypes)
TestError obLanguage("Common","kErrorMsg")
Call WriteJsonResult(obLanguage("SetupSchoolCalendar", "kMsgSave"), False, 0)
%>
