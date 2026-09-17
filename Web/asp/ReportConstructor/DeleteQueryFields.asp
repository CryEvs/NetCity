<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/ReportCommonUpdate_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/UpdateQueryFields_inc.asp" -->

<%	'©2001-2006 ROOS. All rights reserved.

Dim strQueryID, strPropsArray, strFNArray, strFldArray
Dim strDelGroups

strQueryID = GetSafeId( obTokenMgr.GetData( strToken, stQueryID ), Null )
strDelGroups = GetSafeStr( Request("DEL"), -1, "" )
strFldArray = GetSafeStr( Request("IDARRAY"), -1, "" )
strPropsArray = GetSafeStr( Request("PROPSARRAY"), -1, "" )
strFNArray = GetSafeStr( Request("FNARRAY"), -1, "" )

Call UpdateQueryFields( strFldArray, strPropsArray )
Call UpdateQueryFieldsNames( strFldArray, strFNArray )
Call DeleteQueryFields( strQueryID, strDelGroups )

RedirectTo "ReportBuildWizardStep5.asp", Null

Function DeleteQueryFields( strQueryID, strPropsOrderArray )
	Dim arrValues

	If strPropsOrderArray <> "" Then
		arrValues = Split( strPropsOrderArray, "|", -1, 0 )
		If arrValues( UBound( arrValues ) ) = "" Then
			ReDim Preserve arrValues( UBound( arrValues ) - 1 )
		End If
		Call obNS2.DeleteQueryFieldsByIds( objCon, Clng( strQueryId ), arrValues )
	End If
End Function
%>
