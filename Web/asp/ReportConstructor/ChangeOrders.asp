<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->
<!-- #INCLUDE FILE="ReportBuildConstants_inc.asp" -->
<!-- #INCLUDE FILE="UpdateQueryFields_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Dim strQueryId, strIns, strReqOrder, strDirection
Dim strTable, strOrder, strID
Dim arrValues
Dim transaction 

strQueryID = GetSafeID( obTokenMgr.GetData( strToken, stQueryID ), Null )
strIns = CStr( Request("GroupProperty"))
strReqOrder = GetSafeStr( Request("ORDER"), 1, Null )
strDirection = GetSafeStr( Request("DIRECTION"), 1, Null )
transaction = objNSNETWork.GetTransaction()
Select Case strReqOrder
	Case kOrderGroup
		strTable = "GROUPINGS"
		strOrder = "GROUPORDER"
		strID = "GROUPINGID"
		Call UpdateQueryGroupings( transaction, 0 )
	Case kOrderSort
		strTable = "SORTORDERS"
		strOrder = "SORTORDER"
		strID = "SORTORDERID"
		Call UpdateSortOrders( transaction, 0 )
	Case kOrderQueryFields
		strTable = "QUERYFIELDS"
		strOrder = "FIELDORDER"
		strID = "FIELDID"
		Call UpdateQueryFields( transaction, 0 )
End Select

Select Case strDirection
	Case kDirectionUp
		Call SetPropsOrderUp( transaction, strQueryID, strIns )
	Case kDirectionEUp
		Call SetPropsOrderEUp( transaction, strQueryID, strIns )
	Case kDirectionDn
		Call SetPropsOrderDn( transaction, strQueryID, strIns )
	Case kDirectionEDn
		Call SetPropsOrderEDn( transaction, strQueryID, strIns )
End Select
objNSNETWork.CommitTransaction(transaction)

Select Case strReqOrder
	Case kOrderGroup
		RedirectTo "ReportBuildWizardStep4.asp", Null
	Case kOrderSort
		RedirectTo "ReportBuildWizardStep7.asp", Null
	Case kOrderQueryFields
		RedirectTo "ReportBuildWizardStep5.asp", Null
End Select

Function SetPropsOrderUp( transaction, strQueryID, strIns )
	Dim arrVal

	arrVal = Split( strIns, ",", -1, 0 )
	If arrVal( UBound( arrVal ) ) = "" Then
		ReDim Preserve arrVal( UBound( arrVal ) - 1 )
	End If
	Call objNSNETWork.SetPropsOrdersUp_WT(transaction, Clng( strQueryId ), arrVal, strTable, strOrder, strId )
End Function

Function SetPropsOrderDn( transaction, strQueryID, strIns )
	Dim arrVal

	arrVal = Split( strIns, ",", -1, 0 )
	If arrVal( UBound(arrVal) ) = "" Then
		ReDim Preserve arrVal( UBound( arrVal ) - 1 )
	End If
	Call objNSNETWork.SetPropsOrdersDown_WT(transaction, Clng( strQueryId ), arrVal, strTable, strOrder, strId )
End Function

Function SetPropsOrderEUp( transaction, strQueryID, strIns )
	Dim i, strFilter, arrVal

	arrVal = Split( strIns, ",", -1, 0 )
	If arrVal( UBound( arrVal ) ) = "" Then
		ReDim Preserve arrVal( UBound( arrVal ) - 1 )
	End If

	strFilter = ""
	For i = 0 To Ubound( arrVal )
		strFilter = strFilter & " AND " & strID & "<>" & arrVal( i )
	Next

	Call objNSNETWork.SetPropsOrdersEndUp_WT(transaction, Clng( strQueryId ), arrVal, strTable, strFilter, strOrder, strId )
End Function

Sub SetPropsOrderEDn( transaction, strQueryID, strIns )
	Dim i, strFilter, arrVal

	arrVal = Split( strIns, ",", -1, 0 )
	If arrVal( UBound( arrVal ) ) = "" Then
		ReDim Preserve arrVal( UBound( arrVal ) - 1 )
	End If

	strFilter = ""
	For i = 0 To Ubound( arrVal )
		strFilter = strFilter & " AND " & strID & "<>" & arrVal(i)
	Next

	Call objNSNETWork.SetPropsOrdersEndDown_WT(transaction, Clng(strQueryId), arrVal, strTable, strFilter, strOrder, strId )
End Sub
%>
