<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->
<!-- #INCLUDE FILE="../scripts/populate.asp" -->
<!-- #INCLUDE FILE="../scripts/EoNames_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved. 
Dim strBackPage, strSaved, nRetVal, i, transaction
Dim nCityID, nCountryId, nStateProvinceID, nProvinceId
Dim strEOName, nEOTypeID, nEOFormID, nEOLegalFormID
Dim nSchoolCityID, nSchoolCountryId, nSchoolProvinceID, nSchoolStateProvinceID
Dim objSchoolInfo, objCity
Dim nEOLegalForm83ID

Response.Charset = "utf-8"

nCityID = GetSafeLng(Request("City"), Null)
nStateProvinceID = GetSafeLng(Request("State"), Null)
strEOName = GetSafeStr( Request("EONAME"), 200, "")	
nEOTypeID = GetSafeLng(Request("EOTYPEID"), 0)
nEOFormID = GetSafeLng(Request("EOFORMID"), 0)
nEOLegalFormID = GetSafeLng(Request("EOLEGALFORMID"), 0)
nEOLegalForm83ID = GetSafeLng(Request("EOLEGALFORM83ID"), 0)
strBackPage = obTokenMgr.GetData(strToken, "Back")

transaction = objNSNET.GetTransaction()
nRetVal = objNSNET.CreateEO_WT(transaction, nCityID, strEOName, nEOFormID, nEOLegalFormID, nEOLegalForm83ID)
objNSNET.CommitTransaction(transaction)
If nRetVal = -1 Then
	Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("ServAdmin","kEONameExists")))
	RedirectTo "CreateOU.asp?", Array("Self_CreateOU", 1, "EONAME", strEOName)
Else
	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolId)
	nSchoolCityID = Clng(objSchoolInfo("CITYID"))
	Set objCity = objNSNET.GetCityInfo(nCityID)
	nCountryId = CLng(objCity("COUNTRYID"))
	nProvinceId = GetSafeLng(objCity("PROVINCEID"),0)
	strEOName = strEOName & " (" & objCity("NAME") & ")"
	Set objCity = objNSNET.GetCityInfo(nSchoolCityID)
	nSchoolCountryId = CLng(objCity("COUNTRYID"))
	nSchoolStateProvinceID = CLng(objCity("STATE_PROVINCEID"))
	nSchoolProvinceID = GetSafeLng(objCity("PROVINCEID"), 0)
	nEOLegalForm83ID = GetSafeLng(objSchoolInfo("EOLEGALFORM83ID"), 0)
	%>
	<script>
		var EOID = <%=nRetVal%>;
		var EOName = '<%=GetEONAMEJava(strEOName, nEOLegalFormID, nEOLegalForm83ID, nEOTypeID, nEOFormID, True)%>';
		var EOTypeID = <%=nEOTypeID%>;
		var EOFormID = <%=nEOFormID%>;
		var EOLegalFormID = <%=nEOLegalFormID%>;
		var nOutsideType = <%
			If nCityID = nSchoolCityID Then
				RW 0
			ElseIf nProvinceId=nSchoolProvinceID And nSchoolProvinceID<>0 Then 
				RW 1
			ElseIf nSchoolProvinceID = 0 Then
				If nStateProvinceID=nSchoolStateProvinceID then 
					RW 1
				ElseIf nCountryId=nSchoolCountryId then 
					RW 3 
				Else RW 4 
				End If
			ElseIf nStateProvinceID=nSchoolStateProvinceID then 
				RW 2
			ElseIf nCountryId=nSchoolCountryId Then 
				RW 3 
			Else 
				RW 4
			End If%>;
	
		//IE
		if (opener && opener.arrneweo && opener.control)
		{
			opener.arrneweo[0] = EOID;
			opener.arrneweo[1] = EOName;
			opener.arrneweo[2] = EOLegalFormID;
			opener.arrneweo[3] = EOTypeID;
			opener.arrneweo[4] = EOFormID;
			opener.arrneweo[5] = nOutsideType;
			opener.control.addeo(opener.arrneweo);
		}
		else if (opener && opener.afterCreateOu) {
			opener.afterCreateOu({name: EOName, id: EOID, legalForm: EOLegalFormID, outsideType: nOutsideType, form: EOFormID, type: EOTypeID});
		}
		window.close();
	</script>
	<%
End If
%>

