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
function CalculateOSH()
{
	var form = document.SchoolEdit;

	if (GetValueInt(form.T150603) < GetValueInt(form.T150703))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T150703.focus();
		return false;
	}

	if (GetValueInt(form.T150604) < GetValueInt(form.T150704))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T150704.focus();
		return false;
	}

	if (GetValueInt(form.T150605) < GetValueInt(form.T150705))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T150705.focus();
		return false;
	}

	form.T150103.value = GetValueInt(form.T150203) + GetValueInt(form.T150303) + GetValueInt(form.T150403) + GetValueInt(form.T150503) + GetValueInt(form.T150603) + GetValueInt(form.T150903) + GetValueInt(form.T1510003) + GetValueInt(form.T151103) + GetValueInt(form.T151203) + GetValueInt(form.T151303) + GetValueInt(form.T151403) + GetValueInt(form.T151503) + GetValueInt(form.T151603);

	form.T150104.value = GetValueInt(form.T150204) + GetValueInt(form.T150304) + GetValueInt(form.T150404) + GetValueInt(form.T150504) + GetValueInt(form.T150604) + GetValueInt(form.T150804) + GetValueInt(form.T150904) + GetValueInt(form.T1510004) + GetValueInt(form.T151104) + GetValueInt(form.T151204) + GetValueInt(form.T151304) + GetValueInt(form.T151404) + GetValueInt(form.T151504) + GetValueInt(form.T151604);

	form.T150105.value = GetValueInt(form.T150205) + GetValueInt(form.T150305) + GetValueInt(form.T150405) + GetValueInt(form.T150505) + GetValueInt(form.T150605) + GetValueInt(form.T150805) + GetValueInt(form.T150905) + GetValueInt(form.T1510005) + GetValueInt(form.T151105) + GetValueInt(form.T151205) + GetValueInt(form.T151305) + GetValueInt(form.T151405) + GetValueInt(form.T151505) + GetValueInt(form.T151605);

	form.T160403.value = GetValueInt(form.T160103) + GetValueInt(form.T160203) + GetValueInt(form.T160303);
	form.T160404.value = GetValueInt(form.T160104) + GetValueInt(form.T160204) + GetValueInt(form.T160304);
	form.T160405.value = GetValueInt(form.T160105) + GetValueInt(form.T160205) + GetValueInt(form.T160305);
	form.T160406.value = GetValueInt(form.T160106) + GetValueInt(form.T160206) + GetValueInt(form.T160306);
	form.T160407.value = GetValueInt(form.T160107) + GetValueInt(form.T160207) + GetValueInt(form.T160307);
	form.T160408.value = GetValueInt(form.T160108) + GetValueInt(form.T160208) + GetValueInt(form.T160308);
	form.T160409.value = GetValueInt(form.T160109) + GetValueInt(form.T160209) + GetValueInt(form.T160309);
	form.T160410.value = GetValueInt(form.T160110) + GetValueInt(form.T160210) + GetValueInt(form.T160310);
	form.T160411.value = GetValueInt(form.T160111) + GetValueInt(form.T160211) + GetValueInt(form.T160311);
	form.T160412.value = GetValueInt(form.T160112) + GetValueInt(form.T160212) + GetValueInt(form.T160312);
	form.T160413.value = GetValueInt(form.T160113) + GetValueInt(form.T160213) + GetValueInt(form.T160313);
	form.T160414.value = GetValueInt(form.T160114) + GetValueInt(form.T160214) + GetValueInt(form.T160314);
	form.T160415.value = GetValueInt(form.T160115) + GetValueInt(form.T160215) + GetValueInt(form.T160315);
	form.T160416.value = GetValueInt(form.T160116) + GetValueInt(form.T160216) + GetValueInt(form.T160316);
	form.T160417.value = GetValueInt(form.T160117) + GetValueInt(form.T160217) + GetValueInt(form.T160317);
	form.T160418.value = GetValueInt(form.T160118) + GetValueInt(form.T160218) + GetValueInt(form.T160318);

	return true;
}
//--></script>
<%
	End If
%>

<%
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
End Sub

Sub SetLangGradesInfo( theLangId )
	Dim objStudLangInfo, n2LngStudCnt, n2LngGroupsCnt

	Set objStudLangInfo = objNSNET.GetOSH1ForeignLangInfoEx( strCurrYearID, dtPresentationDate, kGradeLevelMinor, theLangId, bIsMNS )
	If bIsMNS Then
		Call SetLoadedOSHValue( "T16" & FormatValueIndex( kGradeLevelMinor ) & FormatValueIndex( theLangId * 2 + 1 ), objStudLangInfo("GROUPSCOUNT"))
	End If
	Call SetLoadedOSHValue( "T16" & FormatValueIndex( kGradeLevelMinor ) & FormatValueIndex( theLangId * 2 + 2 ), objStudLangInfo("STUDSCOUNT"))
	n2LngStudCnt = CInt(objStudLangInfo("LEARN2LANGSTUDSCOUNT"))
	n2LngGroupsCnt = CInt(objStudLangInfo("LEARN2LANGGROUPSCOUNT"))

	Set objStudLangInfo = objNSNET.GetOSH1ForeignLangInfoEx( strCurrYearID, dtPresentationDate, kGradeLevelMiddle, theLangId, bIsMNS )
	If Not bIsMNS Then
		Call SetLoadedOSHValue( "T16" & FormatValueIndex( kGradeLevelMiddle ) & FormatValueIndex( theLangId * 2 + 1 ), objStudLangInfo("GROUPSCOUNT"))
	End If
	Call SetLoadedOSHValue( "T16" & FormatValueIndex( kGradeLevelMiddle ) & FormatValueIndex( theLangId * 2 + 2 ), objStudLangInfo("STUDSCOUNT"))
	n2LngStudCnt = n2LngStudCnt + CInt(objStudLangInfo("LEARN2LANGSTUDSCOUNT"))
	n2LngGroupsCnt = n2LngGroupsCnt + CInt(objStudLangInfo("LEARN2LANGGROUPSCOUNT"))

	Set objStudLangInfo = objNSNET.GetOSH1ForeignLangInfoEx( strCurrYearID, dtPresentationDate, kGradeLevelSenior, theLangId, bIsMNS )
	If Not bIsMNS Then
		Call SetLoadedOSHValue( "T16" & FormatValueIndex( kGradeLevelSenior ) & FormatValueIndex( theLangId * 2 + 1 ), objStudLangInfo("GROUPSCOUNT"))
	End If
	Call SetLoadedOSHValue( "T16" & FormatValueIndex( kGradeLevelSenior ) & FormatValueIndex( theLangId * 2 + 2 ), objStudLangInfo("STUDSCOUNT"))
	n2LngStudCnt = n2LngStudCnt + CInt(objStudLangInfo("LEARN2LANGSTUDSCOUNT"))
	n2LngGroupsCnt = n2LngGroupsCnt + CInt(objStudLangInfo("LEARN2LANGGROUPSCOUNT"))

	Call SetLoadedOSHValue( "T1605" & FormatValueIndex( theLangId * 2 + 1 ), n2LngGroupsCnt)
	Call SetLoadedOSHValue( "T1605" & FormatValueIndex( theLangId * 2 + 2 ), n2LngStudCnt)
End Sub
%>
