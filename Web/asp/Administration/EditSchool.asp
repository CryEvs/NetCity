<!-- #INCLUDE FILE=sa_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strEditSchoolID, strName, strEOID, bNew
Dim strAct, strDistrict, strCity
Dim strFullName, strSettlementTypeName, strOtrasl, strEOTypeID
Dim bChange, bEmptyFounders, bCreativesDefined
Dim objFounders, objEOs, objEOInfo, objCreatives
Dim strEOTypeName, strEOFormName, strEOLegalFormName, strSchoolNumber
Dim bAvailavableEOPresent, bCreateEOError, objRS, strEOLegalFormName83

Function GetPageTitle()
	GetPageTitle = IIf(bNew, obLanguage("ServAdmin","kTitleCreateNewSchool"), obLanguage("ServAdmin","kTitleEditSchool"))
End Function

Function GetPageMenuItem()
	GetPageMenuItem = mi_SA_School
End Function

Function GetPageTabItem()
	GetPageTabItem = tb_SA_School
End Function

Function onLoad()
	onLoad = ""
	If bChange Then onLoad = onLoad & "JavaScript:dataChanged();"
End Function

Sub ReadState()
	strAct				= GetSafeStr(Request("act"), -1, "")
	bChange				= GetSafeBool(Request("bChange"), False)
	bNew				= (strAct = "new")
	If bNew Then strEditSchoolID = "0" Else strEditSchoolID = GetSafeID(Request("EditSchoolID"), Null)
	strDistrict			= GetSafeID(Request("District"), "-1")
	strCity				= GetSafeID(Request("City"), obTokenMgr.GetData(strToken, "City"))
	Set objRS			= objNSNET.GetCityInfo(strCity)
	Call obTokenMgr.SetData(strToken,"City", strCity)
	Call obTokenMgr.SetData(strToken,"Country", objRS("COUNTRYID").Value)
	Call obTokenMgr.SetData(strToken,"State", objRS("STATE_PROVINCEID").Value)
	Call obTokenMgr.SetData(strToken,"Province", IIF(IsDull(objRS("PROVINCEID")), -1, objRS("PROVINCEID").Value))
	strSettlementTypeName = objNSNET.GetCitySettlementTypeName(strCity)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,"Back", "EditSchool.asp")
End Sub

Sub Main()
	Dim objRs
	Dim rsOtrasl, nOtraslID
	strEOTypeID = 0
	
	If Not bNew Then
		Set objRS				= objNSNET.GetSchoolInfo(strEditSchoolID)
		If objRS.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
		strName					= GetSafeStr(objRs("SCHOOLNAME"), 200, Null)
		strFullName				= GetSafeStr(objRs("FULLSCHOOLNAME"), 400, Null)
		strSchoolNumber			= GetSafeStr(objRs("SCHOOLNUMBER"), 200, Null)
		strEOID					= GetSafeStr(objRs("EOID"), -1, Null)
		strEOTypeName			= objRS("EOTypeName")
		strEOFormName			= objRS("EOFormName")
		strEOLegalFormName		= objRS("EOLegalFormName")
		strEOLegalFormName83	= objRS("EOLegalFormName83")
	Else
		strName					= GetSafeStr(Request("Name"),200,"")
		strFullName				= GetSafeStr(Request("FullName"),400,"")
		strSchoolNumber			= GetSafeStr(Request("SchoolNumber"),200,"")
		bEmptyFounders			= True
		Set objEOs				= objNSNET.GetCityNotRelatedEOList(strCity)
		If objEOs.EOF Then RedirectTo "CreateArea.asp", Array("EOTYPEID", Request("EOTYPEID"), "EOFORMID", Request("EOFORMID"), "EOLEGALFORMID", Request("EOLEGALFORMID"), "NAME", Request("NAME"))
		bAvailavableEOPresent	= not objEOs.EOF

		If bAvailavableEOPresent Then
			strEOID					= GetSafeStr(Request("EOID"), -1, GetSafeStr(Request("AreaID"), -1, objEOs("EOID")))
			If strEOID="-1" Then strEOID = objEOs("EOID")
			Set objEOInfo			= objNSNET.GetEOInfo(strEOID)
			strEOTypeName			= objEOInfo("EOTypeName")
			strEOFormName			= objEOInfo("EOFormName")
			strEOLegalFormName		= objEOInfo("EOLegalFormName")
			strEOLegalFormName83	= objEOInfo("EOLegalFormName83")
		End IF
	End If

	Set objFounders			= objNSNET.GetEOFounders(strEOID)
	bEmptyFounders			= objFounders.EOF
	Set objCreatives		= objNSNET.GetEOCreativeList(strEOID)
	TestError obLanguage("ServAdmin","kErrEOCreatives")
	If objCreatives.EOF Then GenerateError obLanguage("ServAdmin","kErrEOCreatives")
	If CInt(strEOTypeID) <> 3 Then Exit Sub
	Set objRs				= objNSNET.GetEOInfo(strEOID)
	strOtrasl				= ""
	nOtraslID				= 0

	If Not objRs.EOF Then
		strEOTypeID		= CLng(objRs("EOFORMID"))
		nOtraslID		= GetSafeLng(objRs("OTRASLID"), 0)

		Set rsOtrasl = objNSNET.GetOtrasls()

		Do While Not rsOtrasl.EOF
			If nOtraslID = rsOtrasl("ITEMID") Then strOtrasl=rsOtrasl("ITEMNAME") : Exit Sub
			rsOtrasl.MoveNext
		Loop
	End If
End Sub

Sub onHeadSpecial()%>
<script><!--
function goToEO() {
	$.show.confirmation(language.Generic.ServAdmin.kEditEO + '.\n' + language.Generic.Common.kContinue)
		.then(function() {
			if(isDBBusy()) return;

			setDBBusy();
			DoSubmit(document.main, "createArea.asp");
		});
}

function CreateEO() {
	$.show.confirmation(language.Generic.ServAdmin.kCreateEO + '.\n' + language.Generic.Common.kContinue)
		.then(function() {
			if(isDBBusy()) return;

			setDBBusy();
			DoSubmit( document.create, "createArea.asp");
		});
}
function Back() {
	goBack(document.main, 'createschool.asp');
}
//-->
</script><%
End Sub

Sub DrawButtons()
	If Not bNew And Not bIsRegionEMForSchool Then ButtonEdit "goToEO();", obLanguage("Common","kChange")
	If bNew Then
		ButtonEdit "goToEO();", obLanguage("Common","kChange")
		ButtonAdd "CreateEO();", obLanguage("Common","kAdd")
	End If
End Sub

Sub DrawFilters(strForm)
	If Not bNew Then
		Call DrawReadonlyRow(obLanguage("ServAdmin","kShortEOName"), strName)
		Call DrawReadonlyRow(obLanguage("ServAdmin","kFullEOName"), strFullName)
		Call DrawReadonlyRow(obLanguage("ServAdmin","kSchoolNumber"), strSchoolNumber)
	Else
		Call DrawSelectInfoRow(obLanguage("ServAdmin","kShortEOName"), strEOID, "EOID", objEOs, "EOID", "EONAME", Null, "ok_check_db('main','editSchool.asp');")
	End If
			
	Call DrawReadonlyRow(obLanguage("Common","kEOType"), strEOTypeName)
	Call DrawReadonlyRow(obLanguage("ServAdmin","kEOForm"), strEOFormName)
	Call DrawReadonlyRow(obLanguage("ServAdmin","kLegalForm"), strEOLegalFormName)
	Call DrawReadonlyRow(obLanguage("ServAdmin","kLegalForm83"), strEOLegalFormName83)
	Call DrawReadonlyRow(obLanguage("ServAdmin","kSettlementType"), strSettlementTypeName)

	OpenFormGroup obLanguage("ServAdmin","kFounders")
		If bEmptyFounders Then%><%=obLanguage("ServAdmin","kNoFounders")%><%
		Else
			While Not objFounders.EOF%><%=DB2HTML(objFounders("FNAME"))%><br /><%
				objFounders.MoveNext
			Wend
		End If
	CloseFormGroup
				
	OpenFormGroup IIF(CInt(strEOTypeID) <> 3, obLanguage("ServAdmin","kCreatives_w"), obLanguage("ServAdmin","kOtrasl"))
		If CInt(strEOTypeID) <> 3 Then
			While Not objCreatives.EOF
				If objCreatives("TEAMCOUNT") > 0 Then%>
					<%=DB2HTML(objCreatives("TYPENAME"))%><br /><%
					bCreativesDefined = True
				End If
				objCreatives.MoveNext
			Wend

			If Not bCreativesDefined Then Response.Write obLanguage("ServAdmin","kNoCreatives")
		Else%>
			<%=strOtrasl%><%
		End If
	CloseFormGroup
End Sub

Sub onDrawPage()
	If bNew Then%>
		<form name="create" class="form-horizontal" method="post" action="createArea.asp">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags(Array("EditSchoolID", strEditSchoolID, "act", strAct, "District", strDistrict, "City", strCity, "PID", strCity, "bChange", bChange, "Area", "EO", "AreaID", "-1"))%>
		</form><%
	End If%>

	<form name="main" class="form-horizontal" method="post" action="createArea.asp">
		<%=WriteObligatoryTags()%>
		<%If Not bNew Then%>
			<%=WriteHiddenTags(Array("EditSchoolID", strEditSchoolID, "act", strAct, "District", strDistrict, "City", strCity, "PID", strCity, "bChange", bChange, "EOID", strEOID, "Area", "EO", "AreaID", strEOID))%>
		<%Else%>
			<%=WriteHiddenTags(Array("EditSchoolID", strEditSchoolID, "act", strAct, "District", strDistrict, "City", strCity, "PID", strCity, "bChange", bChange, "Area", "EO", "AreaID", strEOID))%>
		<%End IF
		
		Call DrawButtonsFilters(True, "main")%>
	</form><%
End Sub%>