<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

If Not (HasUserRight(arClassMgmEnrollClass) Or HasUserRight(arEnrollSelf)) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim strSubjectID, strTermID
Dim strAccessCSG, arrStudSCG, arrStudSCG_RO
Dim nCount, i
Dim strVal, arrVal
Dim strStudentID, strCSGID
Dim strAction


strAction = GetSafeStr(Request("ACT"), -1, Null)
strTermID = GetSafeID(Request("TERMID"), NULL)
strSubjectID = GetSafeID(Request("SJID"), NULL)
strAccessCSG = CStr(Request("AccessCSG"))

If strAction = "copy" Then

	On Error Resume Next
	Call objNSNET.DoExpandStudentsGroupsToNextPeriods(strCurrYearID, strTermID, strAccessCSG)
	TestError(obLanguage("ClassManagement","kCantCopyStudentGroup"))
	Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("ClassManagement","kStudentGroupWasCopied")))

Else ' do save

	strClassID_IUP = GetSafeStr(Request("PCLID_IUP"), -1, Null)
	Call InitIUPClassID(strClassID_IUP)
	If bIsIupGrade Then
		strClassID = GetSafeID(Request("IUPCLASSID"), Null)
		If strClassID = "-1" Then GenerateError obLanguage("Common","kUnexpErr")
	End If

	arrStudSCG = Empty ' transform to Null in .Net
	nCount = Request("STUD_CSG").Count
	If nCount > 0 Then
		ReDim arrStudSCG(1, nCount - 1)
		For i = 1 To nCount
			strVal = Request("STUD_CSG")(i)
			arrVal = Split(strVal, "_" )
			strStudentID = arrVal(0)
			strCSGID = arrVal(1)

			arrStudSCG(0, i - 1) = strStudentID
			arrStudSCG(1, i - 1) = strCSGID
		Next
	End If

	arrStudSCG_RO = Empty ' transform to Null in .Net
	nCount = Request("STUD_CSG_RO").Count
	If nCount > 0 Then
		ReDim arrStudSCG_RO(nCount - 1)
		For i = 1 To nCount
			strVal = Request("STUD_CSG_RO")(i)
			arrStudSCG_RO(i - 1) = strVal
		Next
	End If

	On Error Resume Next
	Call objNSNET.AssignStudentsToGroup(strClassID, strTermID, strAccessCSG, arrStudSCG, arrStudSCG_RO)
	TestError(obLanguage("ClassManagement","kCantSaveStudentGroup"))
End If

If strAction <> "copy" Then
	Call WriteJsonResult(obLanguage("ClassManagement","kStudentGroupWasSaved"), False, 0)
Else
	RedirectTo "Enrollment.asp?", Array("SJID", strSubjectID)
End If
%>
