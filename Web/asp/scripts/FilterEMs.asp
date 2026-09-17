<% ' © 2007-2013 IRTech. All rights reserved.

Const kCommissTypeID_VK	 = "3"
Const kCommissTypeID_Privilege	= "4"


Dim arrFilterEMs, arrSavedEMs, arrSavedEMsPrev
Dim rsEOTypes, strEOTypeID
Dim rsEOLegalForms, strEOLegalFormID

Sub DrawSelectGRade(strFuncTypeID)
	Dim arrGrades, i
	arrGrades = GetArrGrades(strFuncTypeID,1,1,0)
	Call drawSimpleFilter2D( obLanguage("EMReports","kGrade"), "GR", GetSafe("GR",-1), arrGrades )
End Sub

Sub DrawEOTypes(strForm)
	If bExit Then Exit Sub
	DrawFilterRow strForm, obLanguage("Common","kEOType"), "EOTYPEID", rsEOTypes, "EOTYPEID", "NAME", strEOTypeID, False
End Sub

Sub DrawEOTypes2(strForm)
	If bExit Then Exit Sub
	DrawFilterRow strForm, obLanguage("Common","kEOType"), "EOTYPEID", rsEOTypes, "EOTYPEID", "NAME2", strEOTypeID, True
End Sub

Sub DrawEOLegalForms(strForm)
	If bExit Then Exit Sub
	DrawFilterRow strForm, obLanguage("SchoolInfo","kEOLegalForm"), "EOLEGALFORMID", rsEOLegalForms, "EOLEGALFORMID", "NAME", strEOLegalFormID, True
End Sub

Sub InitEOTypes
	Set rsEOTypes = objNSNET.GetEOTypesForFuncType(kFuncType_Common)
	Call InitEOTypes0(rsEOTypes)
End Sub

Sub InitEOTypesDOU
	Set rsEOTypes = objNSNET.GetEOTypesForFuncType(kFuncType_Common, Array(kEOTypeID_PrimarySchool))
	Call InitEOTypes0(rsEOTypes)
End Sub

Sub InitEOTypes0(rsEOTypes)
	If rsEOTypes.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	strEOTypeID = CStr(GetSafe("EOTYPEID", rsEOTypes("EOTYPEID")))
	If strEOTypeID <> "-1" Then
		strEOTypeID = GetSafeIDForParent( strEOTypeID, rsEOTypes, "EOTYPEID" )
	End If
End Sub

Sub InitEOTypes_EM()
	strEOTypeID = CStr(GetSafe("EOTYPEID", rsEOTypes("EOTYPEID")))
	If strEOTypeID = "-1" Then
		strEOTypeID = GetSafeID(rsEOTypes("EOTYPEID"), "0")
	End If
	strEOTypeID = GetSafeIDForParent( strEOTypeID, rsEOTypes, "EOTYPEID" )
	If strEOTypeID = "0" Then
		strEOTypeID = GetSafeID(rsEOTypes("EOTYPEID"), "0")
	End If
	Call obTokenMgr.SetData(strToken, "EOTYPEID", strEOTypeID)
End Sub

Sub InitEOTypesEM
	Set rsEOTypes = objNSNET.GetAssignedEOTypesInEM(strFilterEMID, -1)
	If rsEOTypes.EOF Then bExit = True: Exit Sub
	
	InitEOTypes_EM
End Sub

Sub InitEOTypesEM_FuncType_Add
	Set rsEOTypes = objNSNET.GetAssignedEOTypesInEM(strFilterEMID, kFuncType_Add)
	If rsEOTypes.EOF Then bExit = True: Exit Sub
	
	InitEOTypes_EM
End Sub

Sub InitEOLegalForms
	Set rsEOLegalForms = objNSNET.GetEOLegalForms()
	If rsEOLegalForms.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	strEOLegalFormID = CStr(GetSafe("EOLEGALFORMID", rsEOLegalForms("EOLEGALFORMID")))
	If strEOLegalFormID <> "-1" Then
		strEOLegalFormID = GetSafeIDForParent(strEOLegalFormID, rsEOLegalForms, "EOLEGALFORMID")
	End If
End Sub

Sub DrawDOUGroupTypesFilter()
	Dim arr
	arr = Array( _
		"-1", obLanguage("Common","kAll"), _
		"0", obLanguage("EMReports","kDOUPermanentGroup"), _
		"1", obLanguage("EMReports","kDOUShortTermGroup") )
	Call drawSimpleFilter2D( obLanguage("EMReports","kDOUGroupType"), "DGT", -1, convert1Dto2D(arr) )
End Sub

Sub DrawDOUGroupStepsFilter()
	Dim arr
	arr = Array( _
		"-1", obLanguage("Common","kAll"), _
		"1", obLanguage("EMReports","kDOUGroupStepEarly"), _
		"2", obLanguage("EMReports","kDOUGroupPreSchool") )
	Call drawSimpleFilter2D( obLanguage("MenuFolders","kFNClasses",1), "DGStep", -1, convert1Dto2D(arr) )
End Sub

Sub DrawDOUCommissionTypesFilter()
	Dim arr, i
	Dim objCommissTypes, objPrivileges
	Dim strCommissTypeID, strTypeName, strItemID, strItemName

	Set objCommissTypes = objNSNET.GetCommissTypes(kCommissTypeID_VK)
	If objCommissTypes.EOF Then GenerateError obLanguage("SetupSchool","kErrNoCommissTypes")

	ReDim arr(1, objCommissTypes.RecordCount - 1)
	i = 0
	While Not objCommissTypes.EOF
		strCommissTypeID = GetSafeID(objCommissTypes("COMMISSTYPEID"), Null)
		strTypeName = GetSafeStr(objCommissTypes("TYPENAME"), -1, "")

		If strCommissTypeID = kCommissTypeID_Privilege Then
			Set objPrivileges = objNSNET.GetPrivileges(0)
			If objPrivileges.EOF Then GenerateError obLanguage("Common","kUnexpErr")

			If objPrivileges.RecordCount > 1 Then
				ReDim Preserve arr(1, UBound(arr, 2) + objPrivileges.RecordCount - 1)
			End If

			While Not objPrivileges.EOF
				strItemID = GetSafeID(objPrivileges("ITEMID"), Null)
				strItemName = GetSafeStr(objPrivileges("ITEMNAME"), -1, "")

				arr(0, i) = strCommissTypeID & "_" & strItemID
				arr(1, i) = strTypeName & " (" & strItemName & ")"

				i = i + 1
				objPrivileges.MoveNext
			WEnd
		Else
			arr(0, i) = strCommissTypeID & "_-1"
			arr(1, i) = strTypeName
			i = i + 1
		End If

		objCommissTypes.MoveNext
	WEnd

	Call drawSimpleFilter2D( obLanguage("SetupSchool","kCommissionType"), "CMS_TP", -1, arr )
End Sub

' returns strEMStateID
Function ReadEMRegionFilter(bRegimeOwnSchools)
	Dim bContinue
	Dim nLevel, strParentEMID
	arrSavedEMsPrev = obTokenMgr.GetData(strToken, stArraySavedEMs)
	If IsEmpty(arrSavedEMsPrev) Then
		ReDim arrSavedEMsPrev(-1)
	End If

	nLevel = -1
	ReDim arrSavedEMs(-1)
	ReDim arrFilterEMs(3, -1)
	strParentEMID = strEMID

	Do
		nLevel = nLevel + 1
		ReDim Preserve arrFilterEMs(3, nLevel)
		ReDim Preserve arrSavedEMs(nLevel)

		If bRegimeOwnSchools Then
			bContinue = ReadCurrEMFilter(nLevel, strParentEMID)
		Else
			bContinue = ReadCurrEMFilter_2(nLevel, strParentEMID)
		End If
		If bContinue Then
			If arrFilterEMs(1, nLevel) = "-1" Then
				' Выбор показа "своих" школ на любом уровне - прекращает дальнейшее "раскручивание" дерева
				' Для ReadCurrEMFilter_2 это значит - Выбрали родительское УО, а не "подчинённые УО"
				bContinue = False
			End If
		End If

		If bContinue Then
			strParentEMID = arrFilterEMs(1, nLevel)
		Else
			If arrFilterEMs(1, nLevel) = "-1" Then
				ReadEMRegionFilter = strParentEMID ' strEMStateID
			Else
				ReadEMRegionFilter = arrFilterEMs(1, nLevel) ' strEMStateID
			End If
			' Exit Sub
		End If
	Loop While bContinue
End Function

Function ReadCurrEMFilter(nLevel, strParentEMID)
	Dim strDefaultVal, strPrevVal
	Dim bCheckSchools, objSchools
	Dim bOwnSchoolsExists
	Dim strCurrEMID, objChildEMs

	strPrevVal = "0" ' не определено
	If UBound(arrSavedEMsPrev) >= nLevel Then
		strPrevVal = arrSavedEMsPrev(nLevel)
	End If

	' Для верхнего уровня надо смотреть, есть ли "свои" школы,
	' для остальных - запрос для соответствующих УО постороен так, что у них есть "свои" школы
	bCheckSchools = (nLevel = 0)
	If bCheckSchools Then
		Set objSchools = objNSNET.GetEMSchoolsEx(strParentEMID, kWizardSteps, False)
		bOwnSchoolsExists = Not objSchools.EOF
		strDefaultVal = IIf(Not bOwnSchoolsExists, "0", "-1")
		If Not bOwnSchoolsExists And strPrevVal = "-1" Then
			' для этого случая strPrevVal = "-1" - могло "перетечь" из другой ветки (bRegimeOwnSchools = False в ReadEMRegionFilter)
			strPrevVal = "0" ' не определено
		End If
	Else
		bOwnSchoolsExists = True
		strDefaultVal = "-1" ' означает показывать "свои" школы
	End If

	strCurrEMID = GetSafeID(Request("FilterEMID_" & nLevel), IIf(strPrevVal <> "0", strPrevVal, strDefaultVal))
	If Not bOwnSchoolsExists And strCurrEMID = "-1" Then
		' Request("FilterEMID_" & nLevel) = "-1" - также могло "перетечь" из другой ветки (bRegimeOwnSchools = False в ReadEMRegionFilter)
		strCurrEMID = IIf(strPrevVal <> "0", strPrevVal, strDefaultVal)
	End If

	Set objChildEMs = objNSNET.GetChildList_EM(strParentEMID)
	If Not objChildEMs.EOF Then
		If strCurrEMID <> "-1" Then
			strCurrEMID = GetSafeIDForRs(strCurrEMID, objChildEMs, "EMID")
			If strCurrEMID = "0" Then
				If bOwnSchoolsExists Then
					strCurrEMID = "-1"
				Else
					strCurrEMID = GetSafeID(objChildEMs("EMID"), Null)
				End If
			End If
		End If
	Else
		strCurrEMID = strDefaultVal
	End If
	Set arrFilterEMs(0, nLevel) = objChildEMs
	arrFilterEMs(1, nLevel) = strCurrEMID
	arrFilterEMs(2, nLevel) = bOwnSchoolsExists ' Эсть элемент - "свои" школы
	arrFilterEMs(3, nLevel) = strParentEMID
	arrSavedEMs(nLevel) = strCurrEMID
	ReadCurrEMFilter = Not objChildEMs.EOF
End Function


Function ReadCurrEMFilter_2(nLevel, strParentEMID)
	Dim strDefaultVal, strPrevVal
	Dim bCheckSchools, objSchools
	'Dim bOwnSchoolsExists
	Dim strCurrEMID, objChildEMs

	'strDefaultVal = strParentEMID ' по-умолчанию - берётся вышестоящее УО
	strDefaultVal = "-1" ' по-умолчанию - берётся вышестоящее УО
	strPrevVal = "0" ' не определено
	If IsArray(arrSavedEMsPrev) Then
		If UBound(arrSavedEMsPrev) >= nLevel Then
			strPrevVal = arrSavedEMsPrev(nLevel)
		End If
	End If
	strCurrEMID = GetSafeID(Request("FilterEMID_" & nLevel), IIf(strPrevVal <> "0", strPrevVal, strDefaultVal))
	Set objChildEMs = objNSNET.GetChildList_EM(strParentEMID)
	If Not objChildEMs.EOF Then
		If strCurrEMID <> "-1" Then
			strCurrEMID = GetSafeIDForRs(strCurrEMID, objChildEMs, "EMID")
			If strCurrEMID = "0" Then
				strCurrEMID = GetSafeID(objChildEMs("EMID"), Null)
			End If
		End If
	Else
		strCurrEMID = strDefaultVal
	End If
	Set arrFilterEMs(0, nLevel) = objChildEMs
	arrFilterEMs(1, nLevel) = strCurrEMID
	'arrFilterEMs(2, nLevel) = bOwnSchoolsExists ' Эсть элемент - "свои" школы
	arrFilterEMs(3, nLevel) = strParentEMID
	arrSavedEMs(nLevel) = strCurrEMID
	ReadCurrEMFilter_2 = Not objChildEMs.EOF
End Function


Function DrawEMRegionFilter(strFormName)
	Dim strOnChange, valNull
	Dim bOwnSchoolsExists
	Dim strCurrEMID, objChildEMs
	Dim i, bSchoolsExists

	strOnChange = "OnChangeSelect('" & strFormName & "','" & strScriptName & "');"
	For i = 0 To UBound(arrFilterEMs, 2)
		Set objChildEMs = arrFilterEMs(0, i)
		strCurrEMID = arrFilterEMs(1, i)
		bOwnSchoolsExists = arrFilterEMs(2, i)

		bSchoolsExists = True
		If objChildEMs.EOF Then
			If Not bOwnSchoolsExists Then
				Call DrawInfo(oblanguage("EM","kNoEM_EOs"), False)
				bSchoolsExists = False
			End If
		Else
			valNull = IIf(bOwnSchoolsExists, "<" & obLanguage("EM","kDirectControlEOs") & ">", Null)
			Call DrawSelectInfoRow(obLanguage("EM","kManagement"), strCurrEMID, "FilterEMID_" & i, objChildEMs, "EMID", "FNAME", valNull, strOnChange)
		End If
	Next
	DrawEMRegionFilter = bSchoolsExists
End Function

Function DrawEMRegionFilter_2(strFormName)
	Dim strOnChange, valNull
	Dim strParentEMID, strCurrEMID, objChildEMs
	Dim i
	Dim bNoSubEms

	bNoSubEms = UBound(arrFilterEMs, 2) = 0 And arrFilterEMs(0,0).EOF

	strOnChange = "OnChangeSelect('" & strFormName & "','" & strScriptName & "');"
	For i = 0 To UBound(arrFilterEMs, 2)
		Set objChildEMs = arrFilterEMs(0, i)
		strCurrEMID = arrFilterEMs(1, i)
		strParentEMID = arrFilterEMs(3, i)
		If Not objChildEMs.EOF Then
			valNull = "<" & objNSNET.GetEducManagementName(strParentEMID) & ">"
			Call DrawSelectInfoRow(obLanguage("EM","kManagement"), strCurrEMID, "FilterEMID_" & i, objChildEMs, "EMID", "FNAME", valNull, strOnChange)
		End If
	Next
	DrawEMRegionFilter_2 = True
	If bNoSubEms Then
		'Если у текущего УО нет подотчетных, то выводим его название в фильтрах обычным текстом
		Call DrawReadonlyRow(obLanguage("EM","kManagement"), DB2HTML(objNSNET.GetEducManagementName(strParentEMID)))
	ElseIf Not arrFilterEMs(0,UBound(arrFilterEMs, 2)).EOF Then
		'Если у выбранного управления есть подотчетные рисуем флаг
		WriteHiddenTags(Array("subEMs", 1))
	End If
	WriteHiddenTags(Array("FilterEMID", strParentEMID))
End Function

Sub WriteEMs
	Call obTokenMgr.SetData(strToken, stArraySavedEMs, arrSavedEMs)
End Sub
%>
