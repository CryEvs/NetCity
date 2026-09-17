<!-- #INCLUDE FILE="../../headernoscreen_YearNo.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Const MaxNameSize = 50
Const MaxShortNameSize = 10

On Error Resume Next

If Not HasUserRight(arSchoolSubjects) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim strSubjectID, strName, strAbbr, nGroupID, nRes

strSubjectID = GetSafeID(Request("SBJID"), NULL)
nGroupID = GetSafeID(Request("GROUP"), NULL)

If CLng(nGroupID) < 0 then 'remove
	nRes = objNSNET.RemoveSubjectGroup(-CLng(nGroupID))
	TestError obLanguage("SetupSchoolCalendar","kCantRemoveGroup")
	If nRes = -1 Then GenerateError obLanguage("SetupSchoolCalendar","kGroupInUse",strFunctionalityType)
ElseIf nGroupID = 0 Then 'add
	strName = Trim( GetSafeStr( Request("NAME"), MaxNameSize, NULL ) )
	strAbbr = Trim( GetSafeStr( Request("ABBREV"), MaxShortNameSize, NULL ) )

	nRes = objNSNET.CreateSubjectSubgroup(strSubjectID, strName, strAbbr)
	TestError obLanguage("SetupSchoolCalendar","kCantAddSubjectGroup")
	If nRes = -1 Then GenerateError obLanguage("SetupSchoolCalendar","kSubjGroupNameExists")
	If nRes = -2 Then GenerateError obLanguage("SetupSchoolCalendar","kSubjGroupAbbrevExists")
Else 'edit
	strName = Trim( GetSafeStr( Request("NAME"), MaxNameSize, NULL ) )
	strAbbr = Trim( GetSafeStr( Request("ABBREV"), MaxShortNameSize, NULL ) )

	nRes = objNSNET.EditSubjectGroup(nGroupID, strName, strAbbr)
	TestError obLanguage("SetupSchoolCalendar","kCantChangeGroup")
	If nRes = -1 Then GenerateError obLanguage("SetupSchoolCalendar","kSubjGroupNameExists")
	If nRes = -2 Then GenerateError obLanguage("SetupSchoolCalendar","kSubjGroupAbbrevExists")
End if

RedirectTo "EditSchoolSubject.asp", Array("SBJID", strSubjectID, "GROUP", nGroupID)

Function GetErrorPageMode
	GetErrorPageMode = kErrPageMode_Transfer
End Function

%>
