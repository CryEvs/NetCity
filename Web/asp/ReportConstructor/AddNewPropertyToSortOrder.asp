<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/UpdateSortOrders_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/UpdateQueryFields_inc.asp" -->

<%	'©2001-2006 ROOS. All rights reserved.

Dim strQueryID, strPropsArray, strArray, strSDArray
Dim objRs, objRec

Sub ReadState
	strSDArray = GetSafeStr( Request("SDARRAY"), -1, "" )
	strArray = GetSafeStr( Request("IDARRAY"), -1, "" )
	strPropsArray = GetSafeStr( Request("PROPSARRAY"), -1, "" )
	strQueryID = GetSafeID( obTokenMgr.GetData( strToken, stQueryID ), Null )
End Sub
	
Sub Main
	Call InsertField ("SORTORDERS","INSORT")
End Sub
	
Sub MakeRedirect
	RedirectTo "ReportBuildWizardStep7.asp", Null
End Sub
	
Sub InsertField ( strSqlTable, strFieldCond )
	Dim bFound
	Dim nPropertyId
	Dim objRs, objRec, objExtProps, objGroupings

	Set objExtProps = obNS2.GetPropertyIdFromVarTable( objCon, Clng( strQueryID ), strSqlTable )
	Set objRs = obNS2.GetQueryPublicObjectsList( objCon, Clng( strQueryID ) )
	If Not objExtProps.EOF Then
		If Not objRs.EOF Then
			Set objRec = GetObjectProps(GetSafeID(objRs("OBJECTID"), Null), Array( strFieldCond, "Y"))
			If Not objRec.EOF Then
				If strPropsArray <> "" Then Call UpdateSortOrders(strArray, strPropsArray)
				If strSDArray <> "" Then Call UpdateSortDirections(strArray, strSDArray)
				bFound = true			
				While bFound
					bFound = False
					objExtProps.MoveFirst
					While Not (bFound Or objExtProps.EOF)
						If objRec.EOF Then
							objRs.MoveNext
							Set objRec = GetObjectProps(GetSafeID(objRs("OBJECTID"), Null), Array( strFieldCond, "Y"))
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
						Set objGroupings = obNS2.GetQueryGroupingsProps( objCon, CLng( strQueryId ) )
						If Not objGroupings.EOF Then
							nPropertyId = GetSafeLng( objGroupings("PROPERTYID"), Null )
						Else
							nPropertyId = GetSafeLng( objRec("PROPERTYID"), Null )
						End If
						Call obNS2.AddSortOrder( objCon, CLng( strQueryID ), nPropertyId )
					End If
				Wend
			End If
		End If
	Else
		Set objGroupings = obNS2.GetQueryGroupingsProps( objCon, CLng( strQueryId ) )
		If Not objRs.EOF Then
			Set objRec = GetObjectProps(GetSafeID(objRs("OBJECTID"), Null), Array( strFieldCond, "Y"))
			If Not objRec.EOF Then
				If strPropsArray <> "" Then Call UpdateSortOrders(strArray, strPropsArray)
				If strSDArray <> "" Then Call UpdateSortDirections(strArray, strSDArray)

				If Not objGroupings.EOF Then
					nPropertyId = GetSafeLng( objGroupings("PROPERTYID"), Null )
				Else
					nPropertyId = GetSafeLng( objRec("PROPERTYID"), Null )
				End If
				Call obNS2.AddSortOrder( objCon, CLng( strQueryID ), nPropertyId )
			End If
		End If
	End If
End Sub

Call ReadState()
Call Main()
Call MakeRedirect()
%>
