<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/UpdateSortOrders_inc.asp" -->

<%	'©2001-2006 ROOS. All rights reserved.

Dim strQueryID, strPropsArray, strSDArray, strArray, strDelGroups

Sub ReadState()
	strQueryID = GetSafeId( obTokenMgr.GetData(strToken, stQueryID), Null )
	strDelGroups = GetSafeStr( Request("DEL"), -1, "" )
	strArray = GetSafeStr( Request("IDARRAY"), -1, "" )
	strPropsArray = GetSafeStr( Request("PROPSARRAY"), -1, "" )
	strSDArray = GetSafeStr( Request("SDARRAY"), -1, "" )
End Sub

Sub Main()
	Call UpdateSortOrders( strArray, strPropsArray )
	Call UpdateSortDirections( strArray, strSDArray )
	Call DeleteSortOrders( strQueryID, strDelGroups )
End Sub

Sub MakeRedirect()
	RedirectTo "ReportBuildWizardStep7.asp", Null
End Sub

Call ReadState()
Call Main()
Call MakeRedirect()

Function DeleteSortOrders( strQueryID, strPropsOrderArray )
	Dim arrValues
	
	If strPropsOrderArray <> "" Then
		arrValues = Split( strPropsOrderArray, "|", -1, 0 )
		If arrValues( UBound(arrValues) ) = "" Then
			ReDim Preserve arrValues( UBound(arrValues) - 1 )
		End If
		Call obNS2.DeleteSortOrdersByIds( objCon, Clng(strQueryId), arrValues )
	End If
End Function
%>
