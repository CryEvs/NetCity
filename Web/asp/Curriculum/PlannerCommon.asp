
<% ' © 2007-2008 IRTech. All rights reserved.

Const kCommonSchoolYearWeekCnt = 34 ' количество недель в "обычном" учебном году

Const kLessonNameMaxLen_DB = 400
Const kUnitNameMaxLen = 200
Const kHomeWorkMaxLen_DB = 400

Function GetPlansWithSameSubject(ByVal strPlanID, bROForAuthor)
	Dim objPlan, strSubjectID
	If Not bIsDebug Then On Error Resume Next

	' Define SubjectID for selected Plan.
	' The selected Unit may be copied to Plans with this SubjectID only.
	Set objPlan = objNSNET.GetSubjectPlanInfo(strPlanID)
	TestError obLanguage("Curriculum","kErrorCantGetPlanInfo")

	strSubjectID = GetSafeID(objPlan("SUBJECTID"), Null)
	' Get Plans. Grades and Variants may be all possible.
	' The strSubjectID is defined so bAll has no matter and set to True here.
	Set GetPlansWithSameSubject = objNSNET.GetSubjectPlanList(strFunctionalityType, strCurrYearID, strSubjectID, -1, -1, IIf(bROForAuthor, strUserID, 0))
End Function

'***********************************************************************

Function GetIntervalFilterArray(nMax)
	Dim i, arr
	ReDim arr( 1, nMax-1 )
	For i = 1 To nMax
		arr(0, i-1) = i
		arr(1, i-1) = i
	Next
	GetIntervalFilterArray = arr
End Function


'************************************************************************************************
' User rights on editable pages (EditUnit, CopyUnit, EditLesson, CopyLesson)
'
' strPlanID - may be real PlanID or compound IDs.
' strItemID - UnitID or LessonID. May be "-1" - for new.
' bReadOnly set here.
Sub CheckUserRightsOnEditPlan(ByVal strPlanID, ByVal strItemID)
	Dim bCurrMgmViewSelf, bCurrMgmViewAll, bCurrMgmCreate, bCurrMgmCreateAll

	bCurrMgmViewSelf = HasUserRight(arCurrMgmViewSelf)
	bCurrMgmViewAll = HasUserRight(arCurrMgmViewAll)
	bCurrMgmCreate = HasUserRight(arCurrMgmCreate)
	bCurrMgmCreateAll = HasUserRight(arCurrMgmCreateAll)
	If Not (bCurrMgmViewSelf Or bCurrMgmViewAll Or bCurrMgmCreate Or bCurrMgmCreateAll) Then GenerateError(obLanguage("Common","kErrPageAccess"))
	bReadOnly = readonly Or Not(HasUserRight(arCurrMgmCreateAll) Or HasUserRight(arCurrMgmCreate))
	If bReadOnly Then
		If strItemID = "-1" Then GenerateError(obLanguage("Common","kErrPageAccess"))
	Else
		If Not bCurrMgmCreateAll Then
			If Not bCurrMgmCreate Then GenerateError(obLanguage("Common","kErrPageAccess"))
			If Not IsPermissibleSubject(strPlanID) Then
				If strItemID = "-1" Then GenerateError(obLanguage("Common","kErrPageAccess"))
				bReadOnly = True
			End If
		End If
	End If
End Sub

Function IsPermissibleSubject(ByVal strPlanID)
	Dim strSubjectID, objPlan
	If Not bIsDebug Then On Error Resume Next
	Set objPlan = objNSNET.GetSubjectPlanInfo(strPlanID)
	TestError obLanguage("Curriculum","kErrorCantGetPlanInfo")

	strSubjectID = objPlan("SUBJECTID")
	IsPermissibleSubject = objNSNET.IsSubjectPermissible(strCurrYearID, strSubjectID, strUserID)
	TestError(obLanguage("Curriculum","kCantGetTeacherSubjectsInfo",strFunctionalityType))
End Function

%>
