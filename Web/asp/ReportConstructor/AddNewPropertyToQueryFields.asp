<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/ReportCommonUpdate_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/UpdateQueryFields_inc.asp" -->

<%	'©2001-2006 ROOS. All rights reserved.

Dim strQueryID, strPropsArray, strDistinct, strFldArray, strFNArray, strPropertyId, strGroupedReport
Dim objGroupings, objRs, objRec
Dim nObjectID

strGroupedReport	= GetSafeStr( Request("GRP"), -1, "" )
strDistinct	= GetSafeStr( Request("DIST"), -1, "" )
strFNArray	= GetSafeStr( Request("FNARRAY"), -1, "" )
strFldArray = GetSafeStr( Request("IDARRAY"), -1, "" )
strPropsArray = GetSafeStr( Request("PROPSARRAY"), -1, "" )
strQueryID = GetSafeID( obTokenMgr.GetData( strToken, stQueryID ), Null )

Call obNS2.UpdateSetDistinctQuery( objCon, Clng( strQueryId ), strDistinct )
Call obNS2.UpdateSetGroupedReportQuery( objCon, Clng( strQueryId ), strGroupedReport )

Set objGroupings = obNS2.GetQueryGroupingsProps( objCon, Clng(strQueryId) )

Set objRs = obNS2.GetQueryPublicObjectsList( objCon, Clng( strQueryID ) )
If Not objRs.EOF Then
	nObjectID = GetSafeID( obTokenMgr.GetData( strToken,  "nObjectID" ), "0")
	If nObjectID <> "0" Then
		Do
			If nObjectID = GetSafeID(objRs("OBJECTID"), Null) Then Exit Do
			objRs.MoveNext
		Loop Until objRs.EOF 
		If objRs.EOF Then nObjectID = "0"
	End If
	If nObjectID = "0" Then objRs.MoveFirst : nObjectID = GetSafeID(objRs("OBJECTID"), Null) 
	Set objRec = GetObjectProps( nObjectID, Array("INRESULT", "Y") )
	If Not objRec.EOF Then
		If strPropsArray <> "" Then Call UpdateQueryFields( strFldArray, strPropsArray )
		If strFNArray <> "" Then Call UpdateQueryFieldsNames( strFldArray, strFNArray )
		
		If Not objGroupings.EOF Then
			strPropertyId = GetSafeID( objGroupings("PROPERTYID"), Null )
		Else
			strPropertyId = GetSafeID( objRec("PROPERTYID"), Null )
		End If
		Call obNS2.AddQueryField( objCon, Clng( strQueryId ), Clng( strPropertyId ) )
	End If
End If

RedirectTo "ReportBuildWizardStep5.asp", Null
%>
