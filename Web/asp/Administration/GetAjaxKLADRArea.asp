<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Session.CodePage = 65001
Response.Charset = "utf-8"

%>
<!-- #INCLUDE FILE=../scripts/common.asp -->
<!-- #INCLUDE FILE=../scripts/stdhead.asp -->
<!-- #INCLUDE FILE=../scripts/PageStates.asp -->
<!-- #INCLUDE FILE="ImportKLADR_inc.asp" -->

<%' © 2007-2015 IRTech. All rights reserved.

Dim theArea, arrAreas, i
Call SetConnection()
theArea = Request("theArea")
nStateID = CLng(Request("nStateId"))
bAll = Cbool(Request("bAll"))
nProvinceID = Request("nProvinceId")
nCityID = Request("nCityID")
If nProvinceID = "0" Or nProvinceID = "" Then 
	Set oProvinceID = Nothing
Else
	oProvinceID = Clng(nProvinceID)
End If

Select Case theArea
Case "state"
	If Not bAll Then
		Set rsAreas = objNSNET.GetKladrStates()
	Else
		Set rsAreas = objNSNET.GetStatesToImport()
	End If
Case "street"
	If Not bAll Then
		Set rsAreas = objNSNET.GetKladrLocations(nStateID, oProvinceID, nCityID)
	Else
		Set rsAreas = objNSNET.GetLocationsToImport(nStateID, oProvinceID, nCityID)
	End If
Case "city"	
	If Not bAll Then
		Set rsAreas = objNSNET.GetKLADRCities(nStateID, oProvinceID)
	Else
		Set rsAreas = objNSNET.GetCitiesToImport(nStateID, oProvinceID)    
	End If
Case "province"
	If Not bAll Then
		Set rsAreas = objNSNET.GetKLADRProvinces(nStateID)
	Else
		Set rsAreas = objNSNET.GetProvincesToImport(nStateID)    
	End If
End Select
Call comHelper.DataSetAdapterHelper.Replace(rsAreas, "NAME", "__", "")
arrAreas = rsAreas.GetRows(,,Array("NAME", "CODE"))
Response.Write comHelper.JsonHelper.SerializeObject(arrAreas)
%>