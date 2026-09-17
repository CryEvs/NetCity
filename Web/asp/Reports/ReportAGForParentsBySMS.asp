<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterStudents.asp" -->
<!-- #INCLUDE FILE="SchoolReports_inc.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolForms/SchoolInfo_inc.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/SmsAccess_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SMS_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
'	CLID=<Class ID>
'	RPTID=<Report ID>
'   Этот отчёт доступен только для преподавателей.

Const kDaysCountMax = 30
Const kDaysCountDefault = 7
Const kShoolEmailDefault = "NetSchool"

Dim strTeacherID
Dim bOk, bNoSeparate, strTokenValue
Dim nDaysCount
Dim strEmptyMsg
Dim bEmptySchoolEmail, strSchoolEmail
Dim bWebGate
Dim bReportView, strSMSView
Dim strSMSText
Dim bTranslit, bUseMoreParts
Dim objSmsComponent
Function hasUserRightsOnPage()
	If HasUserRight(arReportsForAllClasses) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
	Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")
	strTokenValue = GetSafeStr(obTokenMgr.GetData(strToken, stSeparate), 1, "0")
	bNoSeparate = CBool(GetSafeStr(Request("STDNT"), 1, strTokenValue) = "1")
	
	strSMSView = GetSafeLng(Request("SMSView"), GetSafeLng(obTokenMgr.GetData(strToken, stSMSView), SmsType_Report))
	bReportView = (strSMSView = SmsType_Report) ' short condition

	bTranslit = GetSafeBool(Request("transliterateValue"), GetSafeBool(obTokenMgr.GetData(strToken, stbTranslit), false))
	bUseMoreParts = GetSafeBool(Request("useMorePartsValue"), GetSafeBool(obTokenMgr.GetData(strToken, stUseMorePartsSMS), false))

	nDaysCount = GetSafeLng(Request("DAYSCNT"), GetSafeLng(obTokenMgr.GetData(strToken, stHistoryDaysCount), kDaysCountDefault))
	strSMSText = GetSafeStr(Request("SMSText"), kSMSTextMaxLen, GetSafeStr(obTokenMgr.GetData(strToken, stArbitrSMS), kSMSTextMaxLen, ""))
End Sub

Sub specialWrite()
	WriteClass
	'Call obTokenMgr.SetData(strToken, stSchoolEmail, strSchoolEmail)
	Call obTokenMgr.SetData(strToken, stSMSView, strSMSView)

	Call obTokenMgr.SetData(strToken, stbTranslit, bTranslit)
	Call obTokenMgr.SetData(strToken, stUseMorePartsSMS, bUseMoreParts)

	Call obTokenMgr.SetData(strToken, stHistoryDaysCount, nDaysCount)
	Call obTokenMgr.SetData(strToken, stArbitrSMS, strSMSText)
End Sub

Sub Main()
	Dim objRsParentsSMS
	Dim strMobiles, strCurrMobile, nInd
	Dim arrMobiles, i, bSubscribeSMS
	bOk = False
	If bAll Then
		Call InitYearClasses()
		If objClassesRs.EOF Then Exit Sub ' for Classes test objClassesRs.EOF but not strClassID = "0" because GetClassListForYearStudent do not set strClassID = "0" for objClassesRs.EOF. It is for using one style.
	Else
		strTeacherID = strUserID
		Call InitTeacherClasses(False)
		If objClassesRs.EOF Then Exit Sub
	End If
	Set rsStudents = objNSNET.GetClassStudentListForTerm(strClassID, -1, True)

	If rsStudents.EOF Then
		strEmptyMsg = obLanguage("Filter","kNoStudents",strFunctionalityType)
		Exit Sub
	End If

	'bEmptySchoolEmail = Not GetSchoolEmail()
	Call InitSchoolSettings( objNSNET )
	bWebGate = (arrSchoolSettings( 1, kSSIndex_SMSGate ) = "0")

	If bNoSeparate Then
		Set objRsParentsSMS = objNSNET.GetParentsWithSMS(strClassID, False, True,SendingSchoolSmsAvailable())
		If objRsParentsSMS.EOF Then
			strEmptyMsg = obLanguage("Reports","kNoParentsWithSMSContacts")
			Exit Sub
		End If

		strMobiles = ""
		nInd = -1
		While Not objRsParentsSMS.EOF
			strCurrMobile = GetSafeStr(objRsParentsSMS("PARAMVALUE"), -1, "")
			If strCurrMobile <> "" Then
				strMobiles = strMobiles & strCurrMobile & ";"
				nInd = nInd + 1
			End If
			objRsParentsSMS.MoveNext
		WEnd

		If strMobiles = "" Then
			strEmptyMsg = obLanguage("Reports","kNoParentsWithSMSContacts")
			Exit Sub
		End If
		strMobiles = Left(strMobiles, Len(strMobiles) - 1)

		If bWebGate Then
			arrMobiles = CheckPhones(strMobiles, nInd)
			bSubscribeSMS = False
			For i = 0 To UBound(arrMobiles)
				If arrMobiles(i) <> "" Then
					bSubscribeSMS = True
					Exit For
				End If
			Next
			If Not bSubscribeSMS Then
				strEmptyMsg = obLanguage("Reports","kNoParentsSubscribe")
				Exit Sub
			End If

			strMobiles = Join(arrMobiles, ";")
		End If
		Call obTokenMgr.SetData(strToken, stParentMobiles, strMobiles)
	End If

	bOk = True
End Sub

Sub specialHead()
	If Not bOk Then Exit Sub
%>
<script>
<!--
function SendSMS(nStudentID, nStart, nEnd) {
	var form = document.Reports;
<%If Not bReportView Then%>
	if( trimStr(form.elements["SMSText"].value) == "") {
		alert(language.Generic.Reports.kErrEmptySMSText );
		form.elements["SMSText"].focus();
		return;
	}
<%End If%>
	report.generate({
		data:{
			StudentID: nStudentID,
			IndStart: nStart,
			IndEnd: nEnd
		}
	});
}

<%If bReportView Then%>
	function changeVerify(check) {
		var value = "0";
		if (check.checked) value = "1";
		$('[name=' + check.name + 'Value]').val(value);
	}
<%End If%>
//-->
</script>
<%If Not bReportView Then%>
	<script type="text/javascript" src="<%=GetVersionedJsLink("calcLenght.js")%>"></script>
<%End If
End Sub

Sub WriteMoreHiddenTags( )
	WriteHiddenTags(Array("transliterateValue", Clng(bTranslit), "useMorePartsValue", Clng(bUseMoreParts)))
End Sub

Sub specialFilters( strForm )
	Dim i, arrDays
	Call DrawYearClasses(strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType)))
	If bExit Then Exit Sub
	
	DrawSimpleFilterRow obLanguage("Common","kStudents",strFunctionalityType), "STDNT", Array(0, obLanguage("Reports","kSeparately"), 1, obLanguage("Reports","kAllStudentsInClass",strFunctionalityType)), IIF(bNoSeparate,1,0), False, SelectChangeHandler(strForm)
	DrawSimpleFilterRow obLanguage("Reports","kSMSView"), "SMSView", Array(SmsType_Report, obLanguage("ReportNames","kRNGAReport"), SmsType_Arbitr, obLanguage("Reports","kArbitraryMessage")), IIF(bReportView,SmsType_Report,SmsType_Arbitr), False, SelectChangeHandler(strForm)

	If bReportView Then
		
		ReDim arrDays((kDaysCountMax * 2) - 1)
		For i = 1 to kDaysCountMax
			arrDays((i-1) * 2) = i
			arrDays((i-1) * 2 + 1) = i
		Next

		DrawSimpleFilterRow obLanguage("Reports","kDaysCount"), "DAYSCNT", arrDays, nDaysCount, False, ";"

		OpenFormGroup obLanguage("SchoolSettings","kSMSCoding")
			rw ShowCheckbox("transliterate", 1, bTranslit, obLanguage("Reports","kTranslitOn"), "changeVerify(this);")
		CloseFormGroup
	ElseIf bOK Then
		OpenFormGroup obLanguage("Reports","kMessageText")%>
		<div class="row">
			<div class="col-md-12">
					<%=obLanguage("Reports","kTyped")%>&nbsp;&nbsp;<input type="text" style="width: 50px; border: 0pt none;" disabled="disabled" size="2" value="0" name="msgCneRight"/>&nbsp;
					<%=obLanguage("Reports","kRemain")%>&nbsp;&nbsp;&nbsp;<input type="text" style="width: 50px; border: 0pt none;" disabled="disabled" size="2" value="1400" name="msgCntLeft"/>&nbsp;
					<%=obLanguage("Reports","kPartInSMS")%>&nbsp;&nbsp;&nbsp;<input type="text" style="width: 50px;border: 0pt none;" disabled="disabled" size="2" value="0" name="msgCntSms"/>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
					<textarea id="SMSText" name="SMSText" wrap="soft" rows="10" cols="<%=TextInputSize(50)%>"
						class="form-control"
						onmousemove="this.onkeyup();" onmouseout="this.onkeyup();" onselect="this.onkeyup();"
						onblur="this.onkeyup();" onfocus="this.onkeyup();" onchange="this.onkeyup();"
						onkeypress="return this.onkeyup();" onkeyup="return checkLength(event);"><%=DB2TextArea(strSMSText)%></textarea>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12"><%
				rw ShowCheckbox("transliterate", 1, bTranslit, obLanguage("Reports","kTranslitOn"), "changeVerify(this, msgChangeTrans);")
				rw ShowCheckbox("useMoreParts", 1, bUseMoreParts, obLanguage("Reports","kConfirmSeveralPartSMS"), "changeVerify(this, msgChangeParts);")%>
			</div>
		</div><%
		CloseFormGroup
	End If

	If Not bOK Then
		DrawInfo strEmptyMsg, False
		bExit = True : Exit Sub
	End If
End Sub

Sub DrawReportButtonPanel()
	'в данном отчете производится толькот отправка СМС поэтому стандартная кнопочная панель не нужна
End Sub

Sub specialDraw()
	Dim id, strName, strSIDArray
	Dim objCmdParents, objRsParents, bParents, bSMS
	Dim arrStudents, i, j
	Dim bCurrParent, bCurrSMS, strCurrMobile
	Dim nIndStart, nIndEnd, nInd, strMobiles
	Dim arrMobileInfo, nInfoCode
	Dim strResult, strError
	Dim arrMobiles

	If Not bNoSeparate Then
		Set objCmdParents = objNSNET.GetParentsWithSMS(strClassID, True, False,false)
		arrStudents = rsStudents.GetRows(,,Array("STUDENTID", "NICKNAME"))
	
		ReDim arrMobileInfo(2, UBound(arrStudents, 2))

		strMobiles = ""
		nInd = -1
		For i = 0 To UBound(arrStudents, 2)
			id = arrStudents(0, i) ' rsStudents("STUDENTID")

			Set objRsParents = objNSNET.GetParentsWithSMS_Execute(objCmdParents, id)
			bParents = False
			bSMS = False
			nIndStart = -1
			nIndEnd = -1
			While Not objRsParents.EOF

				bCurrParent = Not IsDull(objRsParents("PARENTID"))
				bCurrSMS = False
				If bCurrParent Then
					strCurrMobile = GetSafeStr(objRsParents("PARAMVALUE"), -1, "")
					bCurrSMS = strCurrMobile <> ""
					If bCurrSMS Then
						strMobiles = strMobiles & strCurrMobile & ";"
						nInd = nInd + 1
						If nIndStart = -1 Then
							nIndStart = nInd
						End If
						nIndEnd = nInd

					End If
				End If

				bParents = bParents Or bCurrParent
				bSMS = bSMS Or bCurrSMS

				objRsParents.MoveNext
			WEnd

			If Not bParents Then
				nInfoCode = NOT_HAVE_PARENTS
			ElseIf Not bSMS Then
				nInfoCode = NOT_HAVE_SMS_CONTACTS
			Else
				nInfoCode = AVAILABLE_SMS_SENDING
			End If

			arrMobileInfo(0, i) = nInfoCode
			arrMobileInfo(1, i) = nIndStart
			arrMobileInfo(2, i) = nIndEnd
		Next

		If nInd > -1 And strMobiles <> "" Then
			strMobiles = Left(strMobiles, Len(strMobiles) - 1)

			If bWebGate Then
				arrMobiles = CheckPhones(strMobiles, nInd)
				strMobiles = Join(arrMobiles, ";")

				For i = 0 To UBound(arrMobileInfo, 2)
					nInfoCode = arrMobileInfo(0, i)
					If nInfoCode = AVAILABLE_SMS_SENDING Then
						nIndStart = arrMobileInfo(1, i)
						nIndEnd = arrMobileInfo(2, i)

						nInfoCode = NOT_SUBSCRIBE_PARENTS
						For j = nIndStart To nIndEnd
							If arrMobiles(j) <> "" Then
								nInfoCode = AVAILABLE_SMS_SENDING
								Exit For
							End If
						Next
						arrMobileInfo(0, i) = nInfoCode
					End If
				Next
			End If

			Call obTokenMgr.SetData(strToken, stParentMobiles, strMobiles)
		End If

		%><table class="table"><%
		strSIDArray = "|"

		For i = 0 To UBound(arrStudents, 2)
			id = arrStudents(0, i) ' rsStudents("STUDENTID")
			strName = arrStudents(1, i) ' rsStudents("NICKNAME")
			strSIDArray = strSIDArray & id & "|"

			nInfoCode = arrMobileInfo(0, i)%>
			<tr>
				<td><%=DB2HTML(strName)%></td><%
				Select Case nInfoCode
					Case NOT_HAVE_PARENTS
						%><td><%=obLanguage("Reports","kNoParents")%></td><%
					Case NOT_HAVE_SMS_CONTACTS
						%><td><%=obLanguage("Reports","kNoSMSContacts")%></td><%
					Case NOT_SUBSCRIBE_PARENTS
						%><td><%=obLanguage("Reports","kNoParentsSubscribe")%></td><%
					Case AVAILABLE_SMS_SENDING
						nIndStart = arrMobileInfo(1, i)
						nIndEnd = arrMobileInfo(2, i)
						IF SendingSchoolSmsAvailable() Then
							IF IsParentHaveMobPhoneForSchoolSms(objCmdParents, id) Then
								Call DrawButtonsScript(id, nIndStart, nIndEnd)
							ELSE
								%><td><%=obLanguage("MySettings","kParentNotHasSchoolNumber")%></td><%
							END IF
						Else
							Call DrawButtonsScript(id, nIndStart, nIndEnd)
						End If
					Case Else
						GenerateError "nInfoCode invalid"
				End Select
			%></tr><%
		Next
		%></table><%
		Call objNSNET.DisposeCommand(objCmdParents)
		Call obTokenMgr.SetData(strToken, stAvailableSID, strSIDArray)
	Else
		If Not bOk Then Exit Sub
		Call DrawButtonsScript(0, -1, -1)
	End If
End Sub

Function IsParentHaveMobPhoneForSchoolSms(objCmdParents,studentID)
	IF IsEmpty(objCmdParents) or IsNull(objCmdParents) THEN GenerateError "objCmdParents invalid"
	Dim bParentHaveMobPhoneForSchoolSms,objParents
	Set objParents = objNSNET.GetParentsWithSMS_Execute(objCmdParents, studentID)
	bParentHaveMobPhoneForSchoolSms = FALSE
	While Not objParents.EOF
		Dim parentID, parentMobPhoneForSchoolSms
		parentID = GetSafeLng(objParents("PARENTID"), Null)
		parentMobPhoneForSchoolSms = objSmsComponent.GetParentMobPhoneForSchoolSms(parentID)
		IF NOT IsDull(parentMobPhoneForSchoolSms) THEN bParentHaveMobPhoneForSchoolSms = TRUE
		objParents.MoveNext
	WEND
	IsParentHaveMobPhoneForSchoolSms = bParentHaveMobPhoneForSchoolSms
End Function

Function CheckPhones(strMobiles, nIndex)
	Dim strResult, strError
	Dim arrMobiles, i

	arrMobiles = Split(strMobiles, ";")
	'при доступности функционала отправки школьных смс не проверяем подписку на рассылку
	IF NOT SendingSchoolSmsAvailable() THEN 
		'Проверка на подписку
		strResult = SendSMS_CheckPhone(strMobiles, strError)
		If strError <> "" Then
			GenerateHTMLError strError, "/asp/Reports/Reports.asp", strToken
		End If
		If Len(strResult) <> (nIndex + 1) Then
			GenerateHTMLError obLanguage("Reports","kCantGetSubscribeInfo"), "/asp/Reports/Reports.asp", strToken
		End If
			arrMobiles = GetMobPhonesNotSignedOnSms(nIndex, strResult,arrMobiles)
	END IF
	CheckPhones = arrMobiles
End Function

Function GetMobPhonesNotSignedOnSms(index, result, mobPhones)
	Dim i
	For i = 0 To index
		If Mid(result, i + 1, 1) <> "1" Then
			mobPhones(i) = ""
		End If
	Next
	GetMobPhonesNotSignedOnSms = mobPhones
End Function

Sub DrawButtonsScript( strStudentID, nStart, nEnd )
	%><td><%
		SimpleButton "SendSMS('" & strStudentID & "','" & nStart & "','" & nEnd & "')", obLanguage("Reports","kSendReportBySMS")
	%></td><%
End Sub

Function GetSchoolEmail()
	Dim i

	strSchoolEmail = objNSNET.GetSchoolInfoParamValue(strSchoolId, "T00email") 

	If IsDull(strSchoolEmail) Then
		strSchoolEmail = kShoolEmailDefault
		GetSchoolEmail = False
	Else
		GetSchoolEmail = True
	End If
End Function
%>
