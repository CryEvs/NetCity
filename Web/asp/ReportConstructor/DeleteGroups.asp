<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/UpdateQueryFields_inc.asp" -->

<%	'©2001-2006 ROOS. All rights reserved.

Dim bCleanUpSortOrders, bCleanQueryFields
Dim strQueryID, strPropsArray, strDelGroups, strGroupsArray
Dim arrValues

Sub DeleteGroupProperties( strQueryID, strPropsOrderArray )
	Dim objRs
	Dim arrValues, arrRs
	
	If strPropsOrderArray <> "" Then
		arrValues = Split( strPropsOrderArray, "|", -1, 0 )
		If arrValues( UBound( arrValues ) ) = "" Then
			ReDim Preserve arrValues( UBound( arrValues ) - 1 )
		End If
		objCon.BeginTrans
		Call obNS2.DeleteGroupingsById( objCon, arrValues )
		Set objRs = obNS2.GetGroupingsData( objCon, Clng( strQueryId ) )
		If objRs.EOF Then objCon.CommitTrans : Exit Sub
		arrRs = objRs.GetRows(,,Array("GROUPINGID"))
		Call obNS2.UpdateGroupingsGroupOrder( objCon, arrRs )
		objCon.CommitTrans
	End If
End Sub

Sub ReadState()
	bCleanUpSortOrders = Cbool( GetSafeStr( Request("CLEANUP"), -1, "N" ) = "Y" )
	bCleanQueryFields = Cbool( GetSafeStr( Request("CLEANQF"), -1, "N" ) = "Y" )
	strQueryID = GetSafeId( obTokenMgr.GetData( strToken, stQueryID ), Null )
	strDelGroups = GetSafeStr( Request("DEL"), -1, "" )
	strPropsArray = GetSafeStr( Request("PROPSARRAY"), -1, "" )
	strGroupsArray = GetSafeStr( Request("IDARRAY"), -1, "" )
End Sub

Sub Main()
	Dim bFound
	Dim i, j
	Dim objGroupings
	Dim arrGroupings, arrPropValues, arrGroupsArray

	Set objGroupings = obNS2.GetGroupingsData( objCon, Clng(strQueryId) )
	arrGroupings = objGroupings.GetRows(,,Array("GROUPINGID","PROPERTYID"))

	Call UpdateQueryGroupings( strGroupsArray, strPropsArray )
	Call DeleteGroupProperties( strQueryID, strDelGroups )

	If bCleanUpSortOrders Or bCleanQueryFields Then
		arrValues = Split( strPropsArray, "|", -1, 0 )
		If arrValues( UBound( arrValues ) ) = "" Then
			ReDim Preserve arrValues( UBound( arrValues ) - 1 )
		End If

		arrGroupsArray = Split( strDelGroups, "|", -1, 0 )
		If arrGroupsArray( UBound( arrGroupsArray) ) = "" Then
			ReDim Preserve arrGroupsArray( UBound( arrGroupsArray ) - 1 )
		End If

		Redim arrPropValues( Ubound( arrGroupsArray ) )
		For i = 0 To Ubound( arrGroupsArray )
			j = 0
			bFound = False
			While j <= Ubound( arrGroupings, 2 ) And Not bFound
				If Clng(arrGroupings(0,j)) = Clng(arrGroupsArray(i)) Then
					bFound = True
				Else
					j = j + 1
				End If
			Wend
			arrPropValues(i) = arrGroupings(1,j)
		Next
		If bCleanUpSortOrders Then
			Call obNS2.CleanUpSortOrders( objCon, Clng( strQueryId ), arrPropValues )
		End If
		
		If bCleanQueryFields Then
			Call obNS2.CleanUpQueryFields( objCon, Clng( strQueryId ), arrPropValues )
		End If
	End If
End Sub

Sub MakeRedirect()
	RedirectTo "ReportBuildWizardStep4.asp", Null
End Sub

Call ReadState()
Call Main()
Call MakeRedirect()
%>
