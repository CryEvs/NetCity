<% ' © 2007-2016 IRTech. All rights reserved.

Const markNA		= -1
Const markExempted	= -2
Const markAccepted	= -3
Const markStudied	= -4
Const markNotRated	= -5
Const kMaxTotalMark	= 5

Const kMark_5	= 5
Const kMark_4	= 4
Const kMark_3	= 3
Const kMark_2	= 2
Const kMark_1	= 1
Const kMark_NA	= -1

Dim arrMarkTypes
Dim dictMarkVal2MarkType

Sub GetMarkTypes(bIsGradeSystemPass, isNotRated, minMark, maxMark)
	Dim nIndex

	minMark = CLng(minMark)
	maxMark = CLng(maxMark)

	If kIsTKR Then
		ReDim arrMarkTypes(4, 1)
	Else
		ReDim arrMarkTypes(IIf(bIsGradeSystemPass, 4, IIf(isNotRated, 3, 2)), 1)
	End If

	nIndex = 0
	arrMarkTypes(nIndex,0)	= ""
	arrMarkTypes(nIndex,1)	= obLanguage("Common","kWithoutMark")

	If Not kIsTKR And Not bIsGradeSystemPass And isNotRated Then
		nIndex = nIndex + 1
		arrMarkTypes(nIndex,0)	= markNotRated
		arrMarkTypes(nIndex,1)	= obLanguage("Common","kNotRated")
	End If

	If Not kIsTKR And bIsGradeSystemPass Then
		nIndex = nIndex + 1
		arrMarkTypes(nIndex,0)	= maxMark
		arrMarkTypes(nIndex,1)	= obLanguage("Common","kPass")

		nIndex = nIndex + 1
		arrMarkTypes(nIndex,0)	= minMark
		arrMarkTypes(nIndex,1)	= obLanguage("Common","kNotPass")
	End If

	nIndex = nIndex + 1
	arrMarkTypes(nIndex,0)	= markNA
	arrMarkTypes(nIndex,1)	= obLanguage("Common","kNonAttest")

	nIndex = nIndex + 1
	arrMarkTypes(nIndex,0)	= markExempted
	arrMarkTypes(nIndex,1)	= obLanguage("Common","kExempted")

	If kIsTKR Then
		nIndex = nIndex + 1
		arrMarkTypes(nIndex,0)	= markAccepted
		arrMarkTypes(nIndex,1)	= obLanguage("Common","kAccepted")

		nIndex = nIndex + 1
		arrMarkTypes(nIndex,0)	= markStudied
		arrMarkTypes(nIndex,1)	= obLanguage("Common","kStudied")
	End If

	Call GetMarkTypesInfo(bIsGradeSystemPass, minMark, maxMark)
End Sub

Sub GetMarkTypesInfo(bIsGradeSystemPass, minMark, maxMark)
	Call GetMarkTypesInfoEx(bIsGradeSystemPass, minMark, maxMark, True)
End Sub

Sub GetMarkTypesInfoEx(bIsGradeSystemPass, minMark, maxMark, bFull)
	Set dictMarkVal2MarkType = CreateObject("NetCity.DictionaryStorage")
	dictMarkVal2MarkType(CLng(markNA)) = obLanguage("Common","kNonAttest")
	dictMarkVal2MarkType(CLng(markExempted)) = obLanguage("Common","kExempted")
	dictMarkVal2MarkType(CLng(markNotRated)) = obLanguage("Common","kNotRated")
	If kIsTKR Then
		dictMarkVal2MarkType(CLng(markAccepted)) = obLanguage("Common","kAccepted")
		dictMarkVal2MarkType(CLng(markStudied)) = obLanguage("Common","kStudied")
	Else
		If bIsGradeSystemPass Then
			dictMarkVal2MarkType(CLng(maxMark)) = IIf(bFull, obLanguage("Common","kPass"), obLanguage("Common","kPassS"))
			dictMarkVal2MarkType(CLng(minMark)) = IIf(bFull, obLanguage("Common","kNotPass"), obLanguage("Common","kNotPassS"))
		End If
	End If
End Sub

' #7101. 2014_02_05. Сделал, чтобы 0 - отображался как обычная оценка, а отсутствие оценки обозначалось IsDull().
Function GetMark( ByVal nMark, bIsGradeSystemPass )
	If IsDull(nMark) Then
		GetMark = ""
	Else
		nMark = CLng(nMark)
		If nMark < 0 Or bIsGradeSystemPass Then
			GetMark = GetMark2Type(nMark)
		Else
			GetMark = nMark
		End If
	End If
End Function

Function GetMark2Type( ByVal nMark )
	nMark = CLng(nMark)
	If Not dictMarkVal2MarkType.Exists(nMark) Then
		GetMark2Type = ""
	Else
		GetMark2Type = dictMarkVal2MarkType(nMark)
	End If
End Function
%>
