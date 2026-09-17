<% ' © 2007-2012 IRTech. All rights reserved.
Function PrintExpression ( nExpressionId )
	Dim i
	Dim strExp
	Dim objExplines
	Dim arrExplines

	strExp = ""
	Set objExplines = objNSNETWork.GetExpressionData(nExpressionId )
		arrExplines = objExplines.GetRows(,,ARRAY("LPARENTH", "RPARENTH", "OPERATIONID", "FUNCTIONID", "CONSTANT", "FUNCSIGN", "OPSIGN", "OBJSIGN"))

		For i = 0 To Ubound (arrExplines, 2)
			' (
			If arrExplines(0,i)="Y" Then strExp = strExp & kOpenSign

			' function (
			If Not IsNull (arrExplines(3,i)) Then strExp = strExp & arrExplines(5,i) & kOpenSign

			' constant
			If Not IsNull (arrExplines(4,i)) Then
				strExp = strExp & arrExplines(4,i)
			' property
			Else
				strExp = strExp & arrExplines(7,i)
			End If
			' function )
			If Not IsNull (arrExplines(3,i)) Then strExp = strExp & kCloseSign

			' )
			If arrExplines(1,i)="Y" Then strExp = strExp & kCloseSign
			' operation
			If Not IsNull (arrExplines(2,i)) Then strExp = strExp & " " & arrExplines(6,i) & " "
		Next
		If Len (strExp) > kMaxVisibleExpLen Then strExp = Left(strExp, kMaxVisibleExpLen) & "..."
	PrintExpression = DB2HTML(strExp)
End Function
%>
