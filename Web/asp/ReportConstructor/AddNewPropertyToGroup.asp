<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/UpdateQueryFields_inc.asp" -->

<%	'©2001-2006 ROOS. All rights reserved.

Dim bCleanUpSortOrders, bCleanUpQueryFields
Dim nQueryId
Dim strGroupsArray, strPropsArray, strDelGroup

Sub Readstate()
	bCleanUpSortOrders = Cbool( GetSafeStr( Request("CLALLSORT"), -1, "N" ) = "Y" )
	bCleanUpQueryFields = Cbool( GetSafeStr( Request("CLALLQF"), -1, "N" ) = "Y" )
	strGroupsArray = GetSafeStr( Request("IDARRAY"), -1, "" )
	strPropsArray = GetSafeStr( Request("PROPSARRAY"), -1, "" )
	nQueryId = GetSafeLng( obTokenMgr.GetData( strToken, stQueryID ), Null )
End Sub

Sub InsertField ( strFieldCond )
	Dim bFound
	Dim objRs, objRec
	Dim objExtProps

	Set objExtProps = obNS2.GetGroupingsData( objCon, nQueryId )
	Set objRs = obNS2.GetQueryPublicObjectsList( objCon, nQueryId )
	If Not objExtProps.EOF Then
		If Not objRs.EOF Then
			Set objRec = GetObjectProps( GetSafeID( objRs("OBJECTID"), Null ), Array( strFieldCond, "Y") )
			If Not objRec.EOF Then
				If strPropsArray <> "" Then Call UpdateQueryGroupings( strGroupsArray, strPropsArray )
				bFound = True
				While bFound
					bFound = False
					objExtProps.MoveFirst
					While Not ( bFound Or objExtProps.EOF )
						If objRec.EOF Then
							objRs.MoveNext
							Set objRec = GetObjectProps( GetSafeID( objRs("OBJECTID"), Null ), Array( strFieldCond, "Y") )
							objRec.MoveFirst
						End If
						If objExtProps("PROPERTYID") = objRec("PROPERTYID") Then
							bFound = True
						Else
							objExtProps.MoveNext
						End If
					Wend
					If bFound Then
						objRec.MoveNext
					Else
						Call obNS2.AddGroupingProperty( objCon, nQueryId, GetSafeLng( objRec("PROPERTYID"), Null ) )					
					End If
				Wend
			End If
		End If
	Else
		If Not objRs.EOF Then
			Set objRec = GetObjectProps( GetSafeID( objRs("OBJECTID"), Null ), Array( strFieldCond, "Y") )
			If Not objRec.EOF Then
				If strPropsArray <> "" Then Call UpdateQueryGroupings( strGroupsArray, strPropsArray )
				Call obNS2.AddGroupingProperty( objCon, nQueryId, GetSafeLng( objRec("PROPERTYID"), Null ) )
			End If
		End If
	End If
End Sub

Sub Main()
	Call InsertField ("INGROUP")
	If bCleanUpSortOrders Then
		Call obNS2.DeleteSortOrders( objCon, nQueryId )
	End If
	If bCleanUpQueryFields Then
		Call obNS2.DeleteAllQueryFields( objCon, nQueryId )
	End If
End Sub

Sub MakeRedirect()
	RedirectTo "ReportBuildWizardStep4.asp", Null 
End Sub

Call ReadState()
Call Main()
Call MakeRedirect()
%>
