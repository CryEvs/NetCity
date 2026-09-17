
<% ' © 2007-2015 IRTech. All rights reserved.

Const k_10 = 10
Dim arrGradingScales, arrDefaultGRSystem, dctGradingScales
Dim strCurrGSActivityId

Sub GetScaleFromRs ( objGS, arrGS )
	Dim i
	
	objGS.MoveFirst
	i = -1
	Redim arrGS( 1, 0 )
	While Not objGS.EOF
		i = i + 1
		Redim Preserve arrGS( 1, i )
		arrGS( 0, i ) = CLng( objGS("NAME") )
		arrGS( 1, i ) = CLng( objGS("THRESHOLD") * k_10 )
		objGS.MoveNext
	Wend
End Sub

Function GetGrScale(strActivityID, strSubjClassID)
	Dim bDefault, key
	Dim objGSRs, objRs
	Dim arrTmpScales
	Dim gradeComponent

	on error resume next
	Set gradeComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGradingComponent")
	bDefault=True
	If Not isDull(strActivityID) Then
		If IsEmpty(dctGradingScales) Then Set dctGradingScales = CreateObject("NetCity.DictionaryStorage")
		key = strActivityID & "," & strSubjClassID
		If dctGradingScales.Exists(key) Then
			GetGrScale = dctGradingScales(key)
			Exit Function
		End If
		Set objGSRs = gradeComponent.GetGradingScale(strActivityID, strSubjClassID)
		TestError obLanguage("GradingScale","kCantGetGradingScalesInfo")
		bDefault=objGSRs.EOF
	End If
	' default grading scale, old-style compatibility (slow)
	If bDefault Then
		If Not IsArray( arrDefaultGRSystem ) Then
			Set objRs = gradeComponent.GetDefaultGradingScaleList(strCurrYearId )
			TestError obLanguage("GradingScale","kCantGetGradingScalesInfo")
			If objRs.EOF Then GenerateError obLanguage("GradingScale","kCantGetDefaultGradingScaleInfo")
			Call GetScaleFromRs( objRs, arrDefaultGRSystem )
		End If
		GetGrScale = arrDefaultGRSystem
	Else
		Call GetScaleFromRs( objGSRs, arrGradingScales )
		GetGrScale = arrGradingScales
	End If
	If Not isDull(strActivityID) Then dctGradingScales(key) = GetGrScale
	TestError obLanguage("GradingScale","kCantGetGradingScalesInfo")
End Function

Function GetGrading_Manual( nResult )
	GetGrading_Manual = Round( nMaxMark * CLng(nResult) / RATIO_1000 )
End Function

Function GetResult_Manual( nMark )
	GetResult_Manual = Round( RATIO_1000 * CLng(nMark) / nMaxMark )
End Function

Function GetGradingCommon(nResult)
	If Not IsDull(strActivityId) And strActivityId <> kActivityID_Manual Then
		If strCurrGSActivityId <> strActivityId Then
			arrGradingScales = GetGrScale(strActivityID, strSubjClassID)
			strCurrGSActivityId = strActivityId
		End If
		GetGradingCommon = GetGrading(nResult)
	Else
		GetGradingCommon = GetGrading_Manual(nResult)
	End If
End Function

Function GetGrading( nResult )
	Dim i

	i = 0
	nResult = CLng( nResult )
	While i <= Ubound( arrGradingScales, 2 )
		If i = 0 And nResult >= arrGradingScales( 1, 0 ) Then
			GetGrading = arrGradingScales( 0, 0 ) : Exit Function
		ElseIf i = Ubound( arrGradingScales, 2 ) And nResult < arrGradingScales( 1, i ) Then
			GetGrading = arrGradingScales( 0, i ) - 1 : Exit Function
		ElseIf i > 0 Then
			If nResult < arrGradingScales( 1, i - 1 ) And nResult >= arrGradingScales( 1, i ) Then
				GetGrading = arrGradingScales( 0, i ) : Exit Function
			End If
		End If
		i = i + 1
	Wend
End Function
%>
