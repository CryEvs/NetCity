<!-- #INCLUDE FILE="MoveBook_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kManagerSignDispl = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

Dim strDocID, objDocInfo
Dim nDocType, nDocSubType
Dim strDocSubType

Sub ReadState()
	strDocID = GetSafeID(obTokenMgr.GetData(strToken, stMovDocID), Null)
End Sub

Sub Main()
	Set objDocInfo = objNSNET.GetMoveDocInfo(strDocID)
	If objDocInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
End Sub

Sub onDrawPage()
	Dim bSubType, bGrade
	Dim arrForTitle, nClassIndex
	Dim strGrade

	nDocType = GetSafeLng(objDocInfo("DOCTYPE"), Null)
	nDocSubType = GetSafeLng(objDocInfo("MBSUBTYPE"), -1)
	strDocSubType = ""

	bSubType = False
	' Здесь структура сохранена, как в MoveBook.asp. Просьба к И... - НЕ ОПТИМИЗИРОВАТЬ!!!
	If nDocType=kDocType_OUT or nDocType = kDocType_ENROLL or nDocType = kDocType_Year Then
		If nDocType = kDocType_Year Then
			If CLng(strFunctionalityType)=kFuncType_Add Then
			Else
				bSubType = True
			End If
		Else
			If CLng(strFunctionalityType)=kFuncType_Add Then
			Else
				bSubType = True
			End if
		End if
		If nDocSubType=0 Then 
'			Call DrawExGrade(nGrade,"ok('View','');",true)
'			bGrade = True
'		Else 
		End if
'	Else 
	End if

	If bSubType Then
		If nDocSubType>=0 Then
			If nDocType = kDocType_Year Then
				strDocSubType = GetTitleDocSubTypeYear(nDocSubType)
			Else 
				strDocSubType = GetTitleDocSubType(nDocSubType)
			End if
		End If
	End If

	Call DrawMoveDoc()
	Response.Write "<br/><br/>" & GetPageVer()
End Sub

Function GetPageVer
	GetPageVer = ""
End Function

Function GetFormDictionaryValue(objDict, strVal)
	GetFormDictionaryValue = ""
	If objDict.Exists(strVal) Then
		GetFormDictionaryValue = objDict(strVal)(1)
	End If
End Function

Sub DrawMoveDoc()
	Dim strTitle, strSchoolInfo, strSchoolInfoText
	Dim objSchoolInfo, strSchName, strCityName, strAddress, strTel, strFax, strManager
	Dim strDocTypeAbout
	Dim cmdMoveDocClasses, objMoveDocClasses, cmdSubDocStudents, objSubDocStudents
	Dim strSubDocID, strClassName1, strClassName2
	Dim nIndSubDocs, nIndStudents
	Dim strClassesOrderText, strText, objDocStudents, strFullName
	Dim objSchoolFormComponent
	Dim dictSchoolInfo
	Dim dtDocDate

	Set cmdMoveDocClasses = objNSNET.GetMoveDocClasses_Prepare()
	Set objMoveDocClasses = objNSNET.GetMoveDocClasses_Execute(cmdMoveDocClasses, strDocID)
	Call objNSNET.DisposeCommand(cmdMoveDocClasses)
	Set cmdSubDocStudents = objNSNET.GetMoveSubDocStudents_Prepare(-1, -1)

	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolId)
	strSchName = objNSNET.GetFullSchoolName(strSchoolId)
	strCityName = objNSNET.GetCityName(GetSafeID(objSchoolInfo("CITYID"), Null))

	On Error Resume Next
	Set objSchoolFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
	If objSchoolFormComponent Is Nothing Then GenerateError obLanguage("EMReports","kCantCreateMorfComponent")
	Set dictSchoolInfo = objSchoolFormComponent.GetSchoolInfo(strSchoolID, 1)
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))

	strAddress = GetFormDictionaryValue(dictSchoolInfo, "T00address")
	strTel = GetFormDictionaryValue(dictSchoolInfo, "T00phones")
	strFax = GetFormDictionaryValue(dictSchoolInfo, "T00fax")
	strManager = GetFormDictionaryValue(dictSchoolInfo, "T00fio1")

	strSchoolInfoText = GetSchoolInfoText(strSchName, strCityName, strAddress, strTel, strFax)
	Response.Write strSchoolInfoText

	strTitle = "<br/><div class=""text-center""><h4>" & "Приказ № " & DB2HTML(GetSafeStr(objDocInfo("DOCNUMBER"), -1, "")) & "</h4></div><br/>"
	Response.Write strTitle

	strDocTypeAbout = GetDocTypeAbout(nDocType)
'	If strDocSubType <> "" Then
'		strDocTypeAbout = strDocTypeAbout & " (" & strDocSubType & ")"
'	End If 

	If CLng(strFunctionalityType) = kFuncType_Common And nDocType = kDocType_ENROLL Then
		dtDocDate = objDocInfo("ADMINDATE")
	Else
		dtDocDate = objDocInfo("DOCDATE")
	End If

	strTitle = "<div class=""text-left""><small>" & "от " & Date2Str(dtDocDate) & " г.<br/><br/>" & DB2HTML(strDocTypeAbout) & "<br/><br/>ПРИКАЗЫВАЮ:</small></div>"
	Response.Write strTitle

	strText = "<div class=""select text-left"">"
	Response.Write strText

	nIndSubDocs = 0
	While Not objMoveDocClasses.EOF
		nIndSubDocs = nIndSubDocs + 1
		strSubDocID = GetSafeID(objMoveDocClasses("SUBDOCID"), Null)

		strClassesOrderText = GetClassesOrderText(objMoveDocClasses, nDocType)
		strText = "<br/>" & nIndSubDocs & ". " & DB2HTML(strClassesOrderText) & "<br/>"

		Set objDocStudents = objNSNET.GetMoveSubDocStudents_Execute(cmdSubDocStudents, strSubDocID)
		nIndStudents = 0
		While Not objDocStudents.EOF
			nIndStudents = nIndStudents + 1
			strFullName = GetSafeStr(objDocStudents("LASTNAME"), -1, "") & " " & GetSafeStr(objDocStudents("FIRSTNAME"), -1, "") & " " & GetSafeStr(objDocStudents("MIDDLENAME"), -1, "")
			strFullName = Trim(strFullName)
			strText = strText & nIndSubDocs & "." & nIndStudents & ". " & DB2HTML(strFullName) & "<br/>"

			objDocStudents.MoveNext
		WEnd
		Response.Write strText

		objMoveDocClasses.MoveNext
	WEnd

	objNSNET.DisposeCommand(cmdSubDocStudents)

	strText = "<br/><br/><br/>" & obLanguage("SetupSchoolUI","kOUDirector",strFunctionalityType) & "<nobr>" & kManagerSignDispl & DB2HTML(strManager) & "</nobr>"
	Response.Write strText

	strText = "</div>"
	Response.Write strText
End Sub

Function GetClassesOrderText(objMoveDocClasses, nDocType)
	Dim strClassName1, strClassName2, strClassesOrderText

	Select Case nDocType
	Case kDocType_OUT
		strClassName1 = GetSafeStr(objMoveDocClasses("CLASSNAME1"), -1, "")
		strClassesOrderText = obLanguage("Movement","kOutStudentsFromClass",strFunctionalityType)
		strClassesOrderText = Replace(strClassesOrderText, "%", strClassName1)

	Case kDocType_ENROLL
		strClassName2 = GetSafeStr(objMoveDocClasses("CLASSNAME2"), -1, "")
		strClassesOrderText = obLanguage("Movement","kEnrollStudentsToClass",strFunctionalityType)
		strClassesOrderText = Replace(strClassesOrderText, "%", strClassName2)

	Case kDocType_MOVE, kDocType_YEAR, kDocType_STAY
		strClassName1 = GetSafeStr(objMoveDocClasses("CLASSNAME1"), -1, "")

		If (strClassName1 = null OR strClassName1 = "") Then
			strClassName1 = GetSafeStr(objMoveDocClasses("GRADEFROM"), -1, "")
		End If

		strClassName2 = GetSafeStr(objMoveDocClasses("CLASSNAME2"), -1, "")
		strClassesOrderText = obLanguage("Movement","kMoveStudents",strFunctionalityType)
		strClassesOrderText = Replace(strClassesOrderText, "%1", strClassName1)
		strClassesOrderText = Replace(strClassesOrderText, "%2", strClassName2)

	Case kDocType_GRADUATE
		strClassName1 = GetSafeStr(objMoveDocClasses("CLASSNAME1"), -1, "")
		strClassesOrderText = obLanguage("Movement","kGraduateStudentsFromClass",strFunctionalityType)
		strClassesOrderText = Replace(strClassesOrderText, "%", strClassName1)

	Case Else
		GenerateError obLanguage("Movement","kErrUnknownDocType")
	End Select

	GetClassesOrderText = strClassesOrderText
End Function

Function GetDocTypeAbout(nDocType)
	Select Case nDocType
	Case kDocType_OUT		GetDocTypeAbout = "О выбытии"
	Case kDocType_ENROLL	GetDocTypeAbout = "О зачислении"
	Case kDocType_MOVE		GetDocTypeAbout = "О переводе"
	Case kDocType_YEAR		GetDocTypeAbout = "О переводе на следующий учебный год"
	Case kDocType_STAY		GetDocTypeAbout = "Об оставлении на второй год"
	Case kDocType_GRADUATE		GetDocTypeAbout = "О выпуске"
	Case Else		GenerateError obLanguage("Movement","kErrUnknownDocType")
	End Select
End Function

Function GetSchoolInfoText(strSchName, strCityName, strAddress, strTel, strFax)
	Dim strSchoolInfo

	strSchoolInfo = "<table class=""table""><tr><td colspan=""3"" class=""text-center"">" & DB2HTML(strSchName) & "</td></tr><tr><td colspan=""3"" class=""text-center"">" & _
		DB2HTML(strCityName) & IIf(IsDull(strAddress), "", ",&nbsp;" & DB2HTML(strAddress)) & "</td></tr><tr><td colspan=""3"" class=""text-center"">" & _
		obLanguage("Reports","kPhonesS") & "&nbsp;" & DB2HTML(strTel)
	If Not IsDull(strFax) Then
		strSchoolInfo = strSchoolInfo & ",&nbsp;" & obLanguage("Reports","kFaxS") & "&nbsp;" & DB2HTML(strFax)
	End If
	strSchoolInfo = strSchoolInfo & "</td></tr></table>"

	GetSchoolInfoText = strSchoolInfo
End Function
%>
