<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/UpdateQueryFields_inc.asp" -->

<%	'©2001-2006 ROOS. All rights reserved.

Dim strObjectID, strPropsArray, strGID, strPropertyID, strGroupsArray
Dim objRs

strObjectID = GetSafeID( Request("OBJID"), "0" )
strGID = GetSafeID( Request("GID"), "0" )
strGroupsArray = GetSafeStr( Request("IDARRAY"), -1, "" )
strPropsArray = GetSafeStr( Request("PROPSARRAY"), -1, "" )

If strGroupsArray <> "" And strPropsArray <> "" And strGID <> "0" Then
	Call UpdateQueryGroupings( strGroupsArray, strPropsArray )
	Set objRs = GetObjectProps( strObjectID, Array("INGROUP", "Y") )
	If Not objRs.EOF Then Call obNS2.UpdateGroupings( objCon, Array( GetSafeLng(objRs("PROPERTYID"), Null) ), Array( Clng(strGID) ) )
End If

RedirectTo "ReportBuildWizardStep4.asp", Null
%>