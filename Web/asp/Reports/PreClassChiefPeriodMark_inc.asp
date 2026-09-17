<% ' © 2007-2008 IRTech. All rights reserved.

Const k_MaxMark = 5

'	returns
' array( Long1 )( Long2, String1 )
'	where
' Long1 is Group Index
' Long2 is number of students in group,
' String1 - list of students w problem subjects
'
Function GetGlobalAvg( arrSubjMarks, nCSGs )
	Dim j, k
	' not to use ReDim, 1st index - max number of students, 2nd index - metadata
	Dim arrPreAvg( 127, 5 )
	' 1st index - groups of students
	Dim arrGlobalAvg( 5 )
	Dim nIdsIndex, nMark, nIndex, nGlobalIndex
	
	' init GlobalAvg array
	For j = 0 To 5
		arrGlobalAvg ( j ) = Array( 0, "" )
	Next
	
	nIdsIndex = -1
	' j is CSG index, k is Student index
	' CSG <> subject!
	For j = 0 To nCSGs
		For k = 0 To Ubound( arrSubjMarks(j,2), 2 )
			nIndex = WasIdAdded( arrPreAvg, arrSubjMarks(j,2)(0,k), nIdsIndex)
			If nIndex = -1 Then
				nIdsIndex = nIdsIndex + 1
				' student id
				arrPreAvg( nIdsIndex, 0 ) = arrSubjMarks(j,2)(0,k)
				' name, surname
				arrPreAvg( nIdsIndex, 1 ) = DB_2_HTML( arrSubjMarks(j,2)(1,k) )
				' flags array
				arrPreAvg( nIdsIndex, 2 ) = Array( True, 0, True, 0, 0, 0 )
				' a- problem subjects 
				arrPreAvg( nIdsIndex, 3 ) = " ("
				' b- problem subjects
				arrPreAvg( nIdsIndex, 4 ) = " ("
				' c problem subjects
				arrPreAvg( nIdsIndex, 5 ) = " (" 
				nIndex = nIdsIndex
			End If

			nMark = arrSubjMarks(j,2)(2,k)
			If nMark <> "" Then
				' marks count
				arrPreAvg( nIndex, 2 )(5) = arrPreAvg( nIndex, 2 )(5) + 1
				' only >= 4,5
				If nMark < 4.5 Then arrPreAvg( nIndex, 2 )(0) = False
				' 3,5 <= mark < 4,5 count
				If nMark >= 3.5 And nMark < 4.5 Then
					arrPreAvg( nIndex, 2 )(1) = arrPreAvg( nIndex, 2 )(1) + 1
					arrPreAvg( nIndex, 3 ) = arrPreAvg( nIndex, 3 ) & DB_2_HTML( arrSubjMarks(j,1) ) & ", "
				End If
				' only >= 3,5
				If nMark < 3.5 Then arrPreAvg( nIndex, 2 )(2) = False
				' 2,5 <= mark < 3,5 count
				If nMark => 2.5 And nMark < 3.5 Then
					arrPreAvg( nIndex, 2 )(3) = arrPreAvg( nIndex, 2 )(3) + 1
					arrPreAvg( nIndex, 4 ) = arrPreAvg( nIndex, 4 ) & DB_2_HTML( arrSubjMarks(j,1) ) & ", "
				End If
				' mark < 2,5 count
				If nMark < 2.5 Then
					arrPreAvg( nIndex, 2 )(4) = arrPreAvg( nIndex, 2 )(4) + 1
					arrPreAvg( nIndex, 5 ) = arrPreAvg( nIndex, 5 ) & DB_2_HTML( arrSubjMarks(j,1) ) & ", "
				End If
			End If
		Next
	Next
	bNoCurrMarks = True
	' build groups by using flags array
	For j = 0 To nIdsIndex
		nGlobalIndex = -1
		arrPreAvg( j, 1 ) = "&nbsp;" & arrPreAvg( j, 1 )
		' student has marks check
		If arrPreAvg( j, 2 )(5) > 0 Then
			arrGlobalAvg( 5 )(0) = arrGlobalAvg( 5 )(0) + 1
			' classastudents:		(0) = true
			If arrPreAvg( j, 2 )(0) Then
				arrGlobalAvg( 0 )(0) = arrGlobalAvg( 0 )(0) + 1
				nGlobalIndex = 0
			' classaminusstudents:	(2) = true, (3) <=2
			ElseIf arrPreAvg( j, 2 )(2) And arrPreAvg( j, 2 )(1) <= 2 Then
				arrGlobalAvg( 1 )(0) = arrGlobalAvg( 1 )(0) + 1
				nGlobalIndex = 1
			' classaminusstudents:	(2) = true
			ElseIf arrPreAvg( j, 2 )(2) Then
				arrGlobalAvg( 2 )(0) = arrGlobalAvg( 2 )(0) + 1
				nGlobalIndex = 2
			' classaminusstudents:	(3) <= 2 And (4) = 0
			ElseIf arrPreAvg( j, 2 )(3) <= 2 And arrPreAvg( j, 2 )(4) = 0 Then
				arrGlobalAvg( 3 )(0) = arrGlobalAvg( 3 )(0) + 1
				nGlobalIndex = 3
			' classaminusstudents:	(4) > 0
			ElseIf arrPreAvg( j, 2 )(4) > 0 Then
				arrGlobalAvg( 4 )(0) = arrGlobalAvg( 4 )(0) + 1
				nGlobalIndex = 4
			End If
			bNoCurrMarks = False
		End If
		' sudent may not belong to any group
		If nGlobalIndex <> -1 Then
			arrGlobalAvg( nGlobalIndex )(1) = arrGlobalAvg( nGlobalIndex )(1) & arrPreAvg( j, 1 )
			If nGlobalIndex = 1 Then
				arrGlobalAvg( nGlobalIndex )(1) = arrGlobalAvg( nGlobalIndex )(1) & Left( arrPreAvg( j, 3 ), Len( arrPreAvg( j, 3 ) ) - 2 ) & ")"
			ElseIf nGlobalIndex = 3 Then
				arrGlobalAvg( nGlobalIndex )(1) = arrGlobalAvg( nGlobalIndex )(1) & Left( arrPreAvg( j, 4 ), Len( arrPreAvg( j, 4 ) ) - 2 ) & ")"
			ElseIf nGlobalIndex = 4 Then
				arrGlobalAvg( nGlobalIndex )(1) = arrGlobalAvg( nGlobalIndex )(1) & Left( arrPreAvg( j, 5 ), Len( arrPreAvg( j, 5 ) ) - 2 ) & ")"
			End If
			arrGlobalAvg( nGlobalIndex )(1) = arrGlobalAvg( nGlobalIndex )(1) & "<br>"
		End If
	Next
	GetGlobalAvg = arrGlobalAvg
End Function
%>
