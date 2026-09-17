<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/populate.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Administration/AddrLevel_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Const kLength = "200"
Const kSchool_InitEOFormID = 20
Const kSchool_InitEOTypeID = 5

Dim bSelfPage, strBackPage
Dim strParentCityID
Dim strScriptName, rsEOTypes
Dim strEOLegalFormID, nEOFormID, nEOTypeID, strAreaName, objEOLegalForms, rsEOForms
Dim nDocType
Dim bDrawKLADRLinks
Dim nStep

Function GetPageTitle()
	GetPageTitle = IIf(strIsFactAddress, obLanguage("Common","kHomeAddress"), obLanguage("Common","kRegistrationAddress")) & " " & GreenText(DB2HTML(objNSNET.GetUserNickName(strEditUserID)))
End Function

Sub ReadState()
	strBackPage = GetSafeStr(obTokenMgr.GetData(strToken,stBackPage), 255, Request.ServerVariables("HTTP_REFERER" ))
	If Instr(lcase(strBackPage), "createou.asp")<=0 Then
		Call obTokenMgr.SetData(strToken, "Back", strBackPage)
		Call obTokenMgr.SetData(strToken,stBackPage, strBackPage)
	End If
	bSelfPage = (CStr(Request("Self_CreateOU")) = "1" Or CStr(Request("FromCreateOU")) = "1")
	strScriptName = Request.ServerVariables("SCRIPT_NAME")
	nDocType = GetSafeLng(Request("DOCTYPE"), obTokenMgr.GetData(strToken, "DOCTYPE"))
	Call obTokenMgr.SetData(strToken, "DOCTYPE", nDocType)
	nStep = GetSafeLng(obTokenMgr.GetData(strToken, stMovStepFrom), -1)
End Sub

Sub Main()
	Dim objSchoolInfo, objInfo
	Dim objCity
	If bSelfPage Then
		' enter from this page via filter change
		ReadLevel

	Else
		Set rsCountries = objNSNET.GetCountryList()
		If rsCountries.EOF Then Exit Sub
		Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolId)
		nCityID = objSchoolInfo("CITYID")
		Set objCity = objNSNET.GetCityInfo(nCityID)
		nCountryID = objCity("COUNTRYID")
		nStateID = objCity("STATE_PROVINCEID")
		nProvinceID = GetSafeLng(objCity("PROVINCEID"),-1)

		InitStatesProvinsesCities
		WriteStateData
	End If

	bDrawKLADRLinks = bUseKLADR And (nCountryID = 2)
	Set rsEOTypes = objNSNET.GetFilteredEOTypesAndEOForms(strFunctionalityType, nDocType, nStep)
	Set rsEOForms = rsEOTypes.Fields()("rsEOForms").Value
	strEOLegalFormID = GetSafeStr(Request("EOLEGALFORMID"),1,"")
	If IsDull(strEOLegalFormID) Then
		strEOLegalFormID = "3"  ' муниципальное ОУ
	End If
	If strFunctionalityType = 2 Then
		nEOFormID = GetSafeLng(Request("EOFORMID"), kSchool_InitEOFormID)
		nEOTypeID = GetSafeLng(Request("EOTYPEID"), kSchool_InitEOTypeID)
	Else
		nEOFormID = GetSafeLng(Request("EOFORMID"), rsEOForms("EOFORMID"))
		nEOTypeID = GetSafeLng(Request("EOTYPEID"), rsEOTypes("EOTYPEID"))
	End If
	
	strAreaName = GetSafeStr(Request("EONAME"),200,"")
	Set objEOLegalForms = objNSNET.GetEOLegalForms()
End Sub

Sub onHeadSpecial()
Call DrawJSLibsLinks()%>
<script>
	function OnChangeFilter(theArea){
		document.UserInfo.level.value = theArea;
		DoSubmit(document.UserInfo, '<%=strScriptName%>');
	}
	function importKLADR(theArea){
		document.UserInfo.Area.value = theArea;
		DoSubmit(document.UserInfo, "/asp/Administration/ImportKLADR.asp");
	}
	function cancel(){
		opener.control.reseteo();
		window.close();
	}
	function addOU(){
		if ( $('input[name=EONAME]').val() == ""){
			alert(language.Generic.ServAdmin.kErrNameIsEmpty);
			$('input[name=EONAME]').focus();
			return false;
		}
		else{
			setDBBusy();
			DoSubmit( document.UserInfo, "SaveOU.asp");
		}
	}
</script><%
End Sub

Sub onDrawPage()
Call onHeadSpecial()%>
<form NAME="UserInfo" METHOD="POST" ACTION="">
	<%=WriteObligatoryTags()%>
	<input type="hidden" value="" name="Area" />
	<input type="hidden" value="1" name="FromCreateOU" />
	<input type="hidden" value="1" name="Self_CreateOU" />
	<input type="hidden" value="" name="level" />
	<input type="hidden" value="<%=nDocType%>" name="DOCTYPE" />
	<table cellpadding="3">
	<tr><td>
		<table border="0">
			<tr><td><table class="ThickTable" border="1" align="center" cellpadding="3" cellspacing="0"><%Call DrawAddressRow()%></table></td></tr>
		</table></td></tr>
	<tr><td valign="top"><input type="button" name="Cancel" value="<%=obLanguage("Common","kBack")%>" onclick="cancel();"/>&nbsp;
	<%If nCityID>0 Then %>
	<input type="button" name="AddOU" value="<%=obLanguage("ServAdmin","kAddOU")%>" onclick="addOU();"/>
	<%End If %></tr>
	</table></form><%
End Sub

Sub DrawAddressRow()%>
	<tr><th><%=obLanguage("Common","kCountry")%>:</th>
		<td class="select"><%
		Call DrawSelectRs( rsCountries, "Country", "COUNTRYID", "COUNTRYNAME", nCountryID, Null, "OnChangeFilter('country');" )%></td><%
		If bDrawKLADRLinks Then%><td>&nbsp;</td><%End If%></tr>
	<tr><th><%=obLanguage("Common","kState")%>:</th><td><%
		If rsStates.EOF Then rw obLanguage("SetupSchoolUI","kNoData_States") & "</td><td>&nbsp;</td></tr>" : Exit Sub
		Call DrawSelectRs( rsStates, "State", "STATE_PROVINCEID", "STATEPROVINCENAME", nStateID, Null, "OnChangeFilter('state');" )%></td><%
		If bDrawKLADRLinks Then%><td>&nbsp;</td><%End If%></tr>
	<%If Not objNSNET.IsRegionMoscowOrStPetersburg(nStateID) Then%>
	<tr><th><%=obLanguage("Common","kProvince")%>:</th><td><%
		If rsProvinces.EOF Then
			rw obLanguage("SetupSchoolUI","kNoData_Province") & "</td>"
		Else
			Call DrawselectRs (rsProvinces,"Province", "PROVINCEID","PROVINCENAME", IIF(nProvinceID, nProvinceID, 0), obLanguage("Common","kAll"), "OnChangeFilter('province');")%></td>
		<%End If
		If bDrawKLADRLinks Then%><td><%rw ShowAnchor ("importKLADR('province');", obLanguage("Common","kChange"), obLanguage("Common","kImportKLADR"), "")%></td><%End If%></tr>
	<%End If%>
	<tr><th><%=obLanguage("Common","kCity")%>:</th><td><%
		If rsCities.EOF Then rw obLanguage("SetupSchoolUI","kNoData_Cities") & "</td>" & IIf(bDrawKLADRLinks, "<td>" & ShowAnchor ("importKLADR('city');", obLanguage("Common","kChange"), obLanguage("Common","kImportKLADR"), "") & "</td>", "&nbsp;") & "</tr>" : Exit Sub
		Call DrawSelectRs( rsCities, "City", "CITYID", "NAME", nCityID, Null, "OnChangeFilter('city');" )%>
		</td><%
		If bDrawKLADRLinks Then%><td><%rw ShowAnchor ("importKLADR('city');", obLanguage("Common","kChange"), obLanguage("Common","kImportKLADR"), "")%></td><%End If%></tr><%
	Call DrawInputRow( obLanguage("ServAdmin","kShortEOName_") & ":", strAreaName, "EONAME", "text", 50, 200, "" )%>
	<tr><th><%=obLanguage("Common","kEOType")%></th><td class="select"><%
	If rsEOTypes.EOF Then rw obLanguage("ServAdmin","kErrEOTypes") & "</td><td>&nbsp;</td></tr>" : Exit Sub
	Call DrawSelectRs( rsEOTypes, "EOTYPEID", "EOTYPEID", "TYPENAMEWITHCC", nEOTypeID, Null, "OnChangeFilter('eoType');" )%></td><%
	If bDrawKLADRLinks Then%><td>&nbsp;</td><%End If%></tr><%
	Call DrawEOForms
	Call DrawSelectInfoRow( obLanguage("ServAdmin","kLegalForm") & ":", strEOLegalFormID, "EOLEGALFORMID", objEOLegalForms, "EOLEGALFORMID", "NAME", Null,"" )
End Sub

Sub DrawInputRow( InfoName, strInfo, inputName, inputType, size, length, strAux )%>
	<tr align="left"><th nowrap><%=InfoName%></th>
	<td nowrap class="select"><%
		Select Case inputType
			Case "area": rw ShowTextArea( inputName, length, size, "", strInfo )
			Case "text":%><input type="text" name="<%=inputName%>" size="<%=TextInputSize(size)%>" maxlength="<%=length%>" value="<%= DB2Value(strInfo) %>" OnChange="dataChanged()"><%
			Case "hidden":%><input type="hidden" name="<%=inputName%>" value="<%= DB2Value(strInfo) %>"><%
		End Select
		rw "&nbsp;"&strAux%>
	</td><%If bDrawKLADRLinks Then%><td>&nbsp;</td><%End If%></tr><%
End Sub

Function WriteObligatoryTags()%>
	<input type="hidden" name="LoginType" value="<%=IIF(bIsEducManager, 2, IIF(bIsAdminInterface, 1, 0) )%>">
	<input type="hidden" name="AT" value="<%=strToken%>">
	<input type="hidden" name="VER" VALUE="<%=DateDiff("s", #1/1/1999#, Now, 0, 0 )%>"><%
End Function

Function ShowAnchor( jsCall, sStatus, aBody, Attr )
	ShowAnchor = "<a HREF=""JavaScript:"&jsCall&""" onmouseover=""self.status='"&sStatus&"';return true;"" onmouseout=""self.status=''"" "& Attr &">"&aBody&"</a>"
End Function

Sub DrawEOForms
	If Not rsEOTypes.BOF Then
		rsEOTypes.MoveFirst
		rsEOTypes.Find("EOTYPEID=" & nEOTypeID)
		If level = "eoType" Then nEOFormID = rsEOForms("EOFORMID")
	End If
	rw "<tr><th nowrap>" & obLanguage("ServAdmin","kEOForm") & ":</th>"
	rw "<td nowrap class=""select"">"
	If rsEOForms.RecordCount > 1 Then
		rw "<table border=1 cellpadding=""5"" width=""100%"" >"
		While not rsEOForms.EOF
			rw "<tr><td width=""1%""><input type=""radio"" name=""EOFORMID"" value=""" & rsEOForms("EOFORMID") & """" & IIF(rsEOForms("EOFORMID")=nEOFormID," checked","") & " onChange=""dataChanged();"" /></td>"
			rw "<td width=""1%"">" & rsEOForms("CLASSIFIERCODE") & "</td>"
			rw "<td>" & rsEOForms("FORMNAME") & "</td></tr>"
			rsEOForms.MoveNext
		Wend
		rw "</table>"
	ElseIF rsEOForms.RecordCount = 1 Then
		rw rsEOForms("CLASSIFIERCODE") & "&nbsp;" & rsEOForms("FORMNAME") & "<input type=""hidden"" name=""EOFORMID"" value=""" & rsEOForms("EOFORMID") & """>"
	End IF
	rw "</td></tr>"
End Sub

Sub DrawSelectInfoRow( InfoName, strInfo, inputName, theRs, theValueField, theTextField, strNull, strChange )
	If Not theRs.EOF Then%>
	<tr><th nowrap><%=InfoName%></th>
		<td class="select"><%Call DrawSelectRs( theRs, inputName, theValueField, theTextField, strInfo, strNull, strChange )%></td>
	</tr><%
	Else%>
		<input TYPE="hidden" NAME="<%=inputName%>" VALUE="0"><%
	End If
End Sub
%>
