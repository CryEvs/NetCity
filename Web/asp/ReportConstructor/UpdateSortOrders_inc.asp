<%
Sub UpdateSortOrders( strArray, strPropsArray )
	Dim arrID, arrValues
	
	If strArray = "" Then Exit Sub
	arrID = Split( strArray, "|", -1, 0 )
	If arrID( UBound( arrID ) ) = "" Then
		ReDim Preserve arrID( UBound( arrID ) - 1 )
	End If
	If strPropsArray = "" Then Exit Sub
	arrValues = Split( strPropsArray, "|", -1, 0 )
	ReDim Preserve arrValues( UBound( arrID ) )
	Call obNS2.UpdateSortOrders( objCon, arrValues, arrID )
End Sub

Sub UpdateSortDirections( strArray, strSDArray )	
	Dim arrID, arrValues
	
	If strArray = "" Then Exit Sub
	arrID = Split( strArray, "|", -1, 0 )
	If arrID( UBound( arrID ) ) = "" Then
		ReDim Preserve arrID( UBound( arrID ) - 1 )
	End If
	If strSDArray = "" Then Exit Sub
	arrValues = Split( strSDArray, "|", -1, 0 )
	ReDim Preserve arrValues( UBound( arrID ) )
	Call obNS2.UpdateSortOrdersDirection( objCon, arrValues, arrID )
End Sub
%>
