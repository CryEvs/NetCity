<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/ReportCommonUpdate_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/ReportConstructor/UpdateQueryFields_inc.asp" -->

<%	'©2001-2006 ROOS. All rights reserved.

Dim nFID
Dim nObjectID, strPropsArray, strFNArray, strFldArray
Dim objRs

nObjectID = GetSafeLng( Request("OBJID"), 0 )
nFID = GetSafeLng( Request("FID"), 0 )
strFldArray = GetSafeStr( Request("IDARRAY"), -1, "" )
strPropsArray = GetSafeStr( Request("PROPSARRAY"), -1, "" )
strFNArray = GetSafeStr( Request("FNARRAY"), -1, "" )
If strPropsArray <> "" And nFID <> "0" Then
	Call UpdateQueryFields( strFldArray, strPropsArray )
	Call UpdateQueryFieldsNames( strFldArray, strFNArray )
	Set objRs = GetObjectProps( nObjectID, Array("INRESULT", "Y") )
	If Not objRs.EOF Then Call obNS2.UpdateQueryFields( objCon, Array( GetSafeLng( objRs("PROPERTYID"), Null ) ), Array( nFID ) )
	Call obTokenMgr.SetData ( strToken, "nObjectID", nObjectID )
End If


RedirectTo "ReportBuildWizardStep5.asp", Null
%>
