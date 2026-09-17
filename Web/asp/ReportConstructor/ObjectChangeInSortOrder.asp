<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/UpdateSortOrders_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/UpdateQueryFields_inc.asp" -->

<% '©2001-2006 ROOS. All rights reserved.

Dim strObjectID, strSID, strPropsArray, strQueryID, strSDArray, strArray
Dim objRs

strQueryID = GetSafeID( obTokenMgr.GetData( strToken, stQueryID ), Null )
strObjectID = GetSafeID( Request("OBJID"), "0" )
strSID = GetSafeID( Request("SID"), "0" )
strArray = GetSafeStr( Request("IDARRAY"), -1, "" )
strPropsArray = GetSafeStr( Request("PROPSARRAY"), -1, "" )
strSDArray = GetSafeStr( Request("SDARRAY"), -1, "" )

If strArray <> "" And strPropsArray <> "" And strSID <> "0" Then
	Call UpdateSortOrders( strArray, strPropsArray )
	Call UpdateSortDirections( strArray, strSDArray )
	Set objRs = GetObjectProps( strObjectID, Array("INSORT", "Y") )
	If Not objRs.EOF Then Call obNS2.UpdateSortOrders( objCon, Array( GetSafeID( objRs("PROPERTYID"), Null ) ), Array( strSID ) )
End If

RedirectTo "ReportBuildWizardStep7.asp", Null
%>
