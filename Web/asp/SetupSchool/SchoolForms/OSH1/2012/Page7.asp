<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE=../../../MoveDoc_inc.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 7
End Function

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
	isInfoFormValid();
function CalculateOSH()
{
	SumRowByIndex(15, 1, [3, 4, 5], [2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
	ValidateIncludedRows(15, 6, [7], 3, 5);
	SumRow(16, 4, [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 1, 3);
	return true;
}
//--></script>
<%
	End If
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section15_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section16_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalc( )
	Dim objStudentsOutInfo, objStudLangInfo
	Dim nReason, nGradeLevel, nStudents
	Dim nGrade1Students4Reason6, nGrade2Students4Reason6, nGrade3Students4Reason6
	Dim nSecondForeignLangClassesCount, nSecondForeignLangStudentsCount

	Call ClearAvtoCalcFields("T15",2,15,3,5)
	Call ClearAvtoCalcFields("T16",1,5,3,18)

	' Page 7 Table 15
	Set objStudentsOutInfo = objNSNET.GetOSH1StudentsOutInfo(strCurrYearID, bIsMNS )
	TestError( kStudentsOutInfoUnavalable )

	nGrade1Students4Reason6 = 0
	nGrade2Students4Reason6 = 0
	nGrade3Students4Reason6 = 0
	Do While Not objStudentsOutInfo.EoF
		nReason = GetSafeLng( objStudentsOutInfo("REASON"), kOtherReason )
		if nReason=18 Then
			nReason=kOtherReason
		End If
		nGradeLevel = GetSafeLng( objStudentsOutInfo("GRADELEVEL"), kOtherReason )	
		nStudents = GetSafeLng( objStudentsOutInfo("STUDENTSCOUNT"), 0 )
		If 0 < nReason And nReason <= kOtherReason Then
			If Not( ( nGradeLevel = 1 And ( nReason = 5 Or nReason = 8 ) ) Or _
				( nGradeLevel = 3 And nReason = 3 ) ) _
			Then
				If nReason = 6 Or nReason = 7 Then
					If nGradeLevel = 1 Then
						nGrade1Students4Reason6 = nGrade1Students4Reason6 + nStudents
					Elseif nGradeLevel = 2 Then
						nGrade2Students4Reason6 = nGrade2Students4Reason6 + nStudents
					Elseif nGradeLevel = 3 Then
						nGrade3Students4Reason6 = nGrade3Students4Reason6 + nStudents
					End If
				Else
					Call SetLoadedOSHValue( "T15" & FormatValueIndex( nReason ) &_
										 FormatValueIndex( nGradeLevel + 2 ), nStudents )
				End If
			End If
		End If
		objStudentsOutInfo.MoveNext
	Loop
	Call SetLoadedOSHValue( "T150603", nGrade1Students4Reason6 )
	Call SetLoadedOSHValue( "T150604", nGrade2Students4Reason6 )
	Call SetLoadedOSHValue( "T150605", nGrade3Students4Reason6 )

	Call SetLangGradesInfo(kLangEnglish)
	Call SetLangGradesInfo(kLangGerman)
	Call SetLangGradesInfo(kLangFrench)
	Call SetLangGradesInfo(kLangItalian)
	Call SetLangGradesInfo(kLangSpanish)
	Call SetLangGradesInfo(kLangChina)
	Call SetLangGradesInfo(kLangArabic)
	Call SetLangGradesInfo(kLangOthers)

	Call Set2LangInfo()
End Sub

Sub SetLangGradesInfo( theLangId )
	Dim objStudLangInfo, n2LngStudCnt, n2LngGroupsCnt

	Set objStudLangInfo = objNSNET.GetOSH1ForeignLangInfoEx( strCurrYearID, dtPresentationDate, kGradeLevelMinor, theLangId, bIsMNS )
	If Not bIsMNS Then
		Call SetLoadedOSHValue( "T16" & FormatValueIndex( kGradeLevelMinor ) & FormatValueIndex( theLangId * 2 + 1 ), objStudLangInfo("GROUPSCOUNT"))
	End If
	Call SetLoadedOSHValue( "T16" & FormatValueIndex( kGradeLevelMinor ) & FormatValueIndex( theLangId * 2 + 2 ), objStudLangInfo("STUDSCOUNT"))

	Set objStudLangInfo = objNSNET.GetOSH1ForeignLangInfoEx( strCurrYearID, dtPresentationDate, kGradeLevelMiddle, theLangId, bIsMNS )
	If Not bIsMNS Then
		Call SetLoadedOSHValue( "T16" & FormatValueIndex( kGradeLevelMiddle ) & FormatValueIndex( theLangId * 2 + 1 ), objStudLangInfo("GROUPSCOUNT"))
	End If
	Call SetLoadedOSHValue( "T16" & FormatValueIndex( kGradeLevelMiddle ) & FormatValueIndex( theLangId * 2 + 2 ), objStudLangInfo("STUDSCOUNT"))

	Set objStudLangInfo = objNSNET.GetOSH1ForeignLangInfoEx( strCurrYearID, dtPresentationDate, kGradeLevelSenior, theLangId, bIsMNS )
	If Not bIsMNS Then
		Call SetLoadedOSHValue( "T16" & FormatValueIndex( kGradeLevelSenior ) & FormatValueIndex( theLangId * 2 + 1 ), objStudLangInfo("GROUPSCOUNT"))
	End If
	Call SetLoadedOSHValue( "T16" & FormatValueIndex( kGradeLevelSenior ) & FormatValueIndex( theLangId * 2 + 2 ), objStudLangInfo("STUDSCOUNT"))

End Sub

Sub Set2LangInfo()
	Dim objStudLang2Info, n2LngStudCnt, strLang
	Dim nLang, nOtherLangCnt, bOtherLang

	Set objStudLang2Info = objNSNET.GetOSH1ForeignLang2Info( strCurrYearID, dtPresentationDate, bIsMNS)

	nOtherLangCnt = 0
	While Not objStudLang2Info.EOF
		strLang = GetSafeStr(objStudLang2Info("NAME"), -1, "")
		strLang = UCase(strLang)
		n2LngStudCnt = GetSafeLng(objStudLang2Info("STUDSCOUNT"), 0)
		
		bOtherLang = False
		If InStr(strLang, kRusEnglishTemplate) = 1 Then
			nLang = kLangEnglish
		ElseIf InStr(strLang, kRusFrenchTemplate) = 1 Then
			nLang = kLangFrench
		ElseIf InStr(strLang, kRusGermanTemplate) = 1 Then
			nLang = kLangGerman
		ElseIf InStr(strLang, kRusItalTemplate) = 1 Then
			nLang = kLangItalian
		ElseIf InStr(strLang, kRusSpanTemplate) = 1 Then
			nLang = kLangSpanish
		ElseIf InStr(strLang, kRusChinaTemplate) = 1 Then
			nLang = kLangChina
		ElseIf InStr(strLang, kRusArabTemplate) = 1 Then
			nLang = kLangArabic
		Else
			bOtherLang = True
			nOtherLangCnt = nOtherLangCnt + n2LngStudCnt
		End If

		If Not bOtherLang Then
			Call SetLoadedOSHValue( "T1605" & FormatValueIndex(nLang * 2 + 2), n2LngStudCnt)
		End If

		objStudLang2Info.MoveNext
	WEnd

	If nOtherLangCnt > 0 Then
		Call SetLoadedOSHValue( "T1605" & FormatValueIndex(kLangOthers * 2 + 2), nOtherLangCnt)
	End If
End Sub

Sub ClearAvtoCalcFields(sName,nRowStart,nRowFinish,nColStart, nColFinish)
	Dim nCount,i,j
	For j=nColStart to nColFinish
		For i=nRowStart to nRowFinish
			If Not (j = 3 And i = 5 Or i = 8 ) Then Call SetLoadedOSHValue( SName & FormatValueIndex(i)& IIF(nColStart>0 And nColFinish>0,FormatValueIndex(j),""), "")
		Next
	Next
End Sub
%>
