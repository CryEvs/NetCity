<%
Const markNA_TKR	= -1

Dim arrMarkTypes_TKR

Sub GetMarkTypes_TKR()
	ReDim arrMarkTypes_TKR(1, 1) '(2, 1)

	arrMarkTypes_TKR(0,0)				= ""
	arrMarkTypes_TKR(0,1)				= obLanguage("Common","kWithoutMark")
	arrMarkTypes_TKR(-markNA_TKR,0)		= obLanguage("Common","kNonAttest")
	arrMarkTypes_TKR(-markNA_TKR,1)		= obLanguage("Common","kNonAttest")
End Sub

Function GetMark_TKR( ByVal nMark )
	If IsNull(nMark) Then
		GetMark_TKR = Chr(183) '"."
	Else
		nMark = CLng(nMark)
		If nMark > 0 Then
			GetMark_TKR = nMark
		Else
			If -nMark > UBound(arrMarkTypes_TKR) Then nMark = 0
			GetMark_TKR = arrMarkTypes_TKR(-nMark, 0)
		End If
	End If
End Function
%>
