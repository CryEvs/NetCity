
<% '©2001-2006 ROOS. All rights reserved.

Function UpdateQueryFields( strFldArray, strPropsArray )
	Dim i
	Dim arrID, arrValues
	
	If strFldArray = "" Then Exit Function
	arrID = Split( strFldArray, "|", -1, 0 )
	If arrID( UBound( arrID ) ) = "" Then
		ReDim Preserve arrID( UBound( arrID ) - 1 )
	End If

	If strPropsArray = "" Then Exit Function
	arrValues = Split( strPropsArray, "|", -1, 0 )
	ReDim Preserve arrValues( UBound( arrID ) )

	For i = 0 To UBound( arrID )
		If arrValues(i)<>"" Then Call obNS2.UpdateQueryFields( objCon, Array(arrValues(i)), Array(arrID(i)) )
	Next
End Function
%>
