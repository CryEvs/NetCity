<!-- #INCLUDE File="SecretaryAndClassChiefFilter_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim objRs
Dim strClassID, strClassName
Dim strRowSpan
Dim strAccYear
Dim strTermID, strTermName

Function IsPopupPage()
	IsPopupPage = True
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNSecretaryAndClassChief",strFunctionalityType)
End Function

Function GetTitleEx()
	GetTitleEx = ", "& obLanguage("Reports","kSendReportClass",strFunctionalityType) & ": " & strClassName
End Function

Function GetPageParams()
	GetPageParams = Array(_
		obLanguage("Common","kSchoolYear"), strAccYear, _
		obLanguage("Common","kClass",strFunctionalityType), _
		strClassName, obLanguage("Common","kPeriod"), strTermName _
		)
End Function

Function WriteEpilog()
	PrintAgeStat
	PrintLangStat
End Function

Sub specialRead()
	strAccYear = obTokenMgr.GetData(strToken, "CurrYearName")
	strClassID = GetSafeID(obTokenMgr.GetData(strToken,stCurrClass), "0")
	strClassName = objNSNET.GetClassName(strClassID)
	strTermID = GetSafeID(obTokenMgr.GetData(strToken,stCurrTerm), Null)
	strTermName = objNSNET.GetTermName(strTermID)

	Call ReadSecretClassChiefFilter()
	Call WriteSecretClassChiefFilter()
End Sub

Function GetHeader_Table()
	GetHeader_Table = "<table class=""table-print"">"
End Function

Function GetReportTable()
	Dim objRs, objParentRs, i
	Set objRs = objNSNET.GetClassStudentListForPrint(strClassID, strTermID)

	strReport = GetHeader_Table() & "<tr>" & "<th>"& obLanguage("Reports","kOrderNumberS") &"</th>"
	If bPersonalNum Then strReport = strReport & "<th WIDTH=""5%"">"& obLanguage("Reports","kPersonalRecNum") &"</th>"
	strReport = strReport & "<th>"& IIf(bMiddle, obLanguage("Reports","kStudentFIO",strFunctionalityType), obLanguage("Common","kLastName") & ", " & obLanguage("Common","kFirstName")) &"</th>"
	If bGender Then strReport = strReport & "<th>"& obLanguage("Common","kGender") &"</th>"
	If bBirthDate Then strReport = strReport & "<th>"& obLanguage("Reports","kBirthDateS") &"</th>"
	If bPassport Then strReport = strReport & "<th>"& obLanguage("Common","kPassport") &"</th>" & "<th>"& obLanguage("Reports","kBirthSv") &"</th>"

	If bForeign Then strReport = strReport & "<th>"& obLanguage("Reports","kLanguage") &"</th>"
	If bParentsInfo Then strReport = strReport & "<th>"& obLanguage("Reports","kParentsFIO") &"</th>" & "<th>"& obLanguage("Reports","kWorkPlace") &"</th>" & "<th>"& obLanguage("Reports","kPosition") &"</th>" & "<th>"& obLanguage("Common","kWorkPhone_") &"</th>"
	If bHomeAddress Then strReport = strReport & "<th>"& obLanguage("Reports","kLivingPlace") &"</th>" & "<th>"& obLanguage("Reports","kRegistrationPlace") &"</th>" & "<th>"& obLanguage("Common","kHomePhone_") &"</th></tr>"

	If Not objRs.EOF Then
		i = 1
		If bParentsInfo Then Set objParentRs = objRs("chaptParents").Value

		While Not objRs.EOF
			strRowSpan = ""
			If bParentsInfo Then
				If objParentRs.RecordCount > 0 Then strRowSpan = " ROWSPAN=""" & objParentRs.RecordCount & """"
			End If
			strReport = strReport & "<tr><td" & strRowSpan & " class=""cell-num"">" & i & "</td>"
			If bPersonalNum Then
				strReport = strReport & "<td" & strRowSpan & " class=""cell-text"">" & DB2HTML_BR(objRs("NUMREC")) & "</td>"
			End If
			strReport = strReport & "<td" & strRowSpan & " class=""cell-text"">" & _
				DB2HTML_BR(IIf(bMiddle, objRs("NAME") & " "& objRs("MIDDLENAME"), objRs("NAME"))) & _
				objRs("REMOVED") & "</td>"
			If bGender Then strReport = strReport & "<td" & strRowSpan & " class=""cell-text"">" & CStr(objRs("GENDER")) & "</td>"
			If bBirthDate Then strReport = strReport & "<td" & strRowSpan & " class=""cell-date"">" & Date2Str(objRs("BIRTHDATE")) & "</td>"

			If bPassport Then
				strReport = strReport & GetPersonalDoc( objRs("PASS_SER"), objRs("PASS_NUM"), objRs("PASS_DATE"), objRs("PASS_INFO"), obLanguage("Common","kPassportInfo") )
				strReport = strReport & GetPersonalDoc( objRs("BIRTH_SER"), objRs("BIRTH_NUM"), objRs("BIRTH_DATE"), objRs("BIRTH_ORG"), obLanguage("Common","kBirthCertInfo") )
			End If
			If bForeign Then strReport = strReport & "<td" & strRowSpan & " class=""cell-text"">" & GetSafeStr(objRs("LANG"),50,"&nbsp;") & "</td>"

			If bParentsInfo Then
				If objParentRs.RecordCount = 0 Then
					strReport = strReport & "<td class=""cell-text""></td>" & "<td class=""cell-text""></td>" & "<td class=""cell-text""></td>" & "<td class=""cell-text""></td>"
					If bHomeAddress Then strReport = strReport & GetHomeAddressAndPhone(objRs)
				Else
					strReport = strReport & "<td class=""cell-text"">" & DB2HTML_BR(objParentRs("NAME")) & "</td>"
					strReport = strReport & "<td class=""cell-text"">" & DB2HTML_BR(objParentRs("APPOINT")) & "</td>"
					strReport = strReport & "<td class=""cell-text"">" & DB2HTML_BR(objParentRs("POSIT")) & "</td>"
					strReport = strReport & "<td class=""cell-text"">" & DB2HTML_BR(objParentRs("WPHONE")) & "</td>"
					If bHomeAddress Then strReport = strReport & GetHomeAddressAndPhone(objRs)
					objParentRs.MoveNext
					While Not objParentRs.EOF
						strReport = strReport & "<tr><td class=""cell-text"">" & DB2HTML_BR(objParentRs("NAME")) & "</td>"
						strReport = strReport & "<td class=""cell-text"">" & DB2HTML_BR(objParentRs("APPOINT")) & "</td>"
						strReport = strReport & "<td class=""cell-text"">" & DB2HTML_BR(objParentRs("POSIT")) & "</td>"
						strReport = strReport & "<td class=""cell-text"">" & DB2HTML_BR(objParentRs("WPHONE")) & "</td></tr>"
						objParentRs.MoveNext
					Wend
				End If
			Else
				If bHomeAddress Then strReport = strReport & GetHomeAddressAndPhone(objRs)
			End If

			strReport = strReport &Chr(13)&Chr(10)
			objRs.MoveNext
			i = i + 1
		WEnd
	End If
	strReport = strReport & "</table>"
	rw "<br />"
	GetReportTable = strReport
End Function

Function GetHomeAddressAndPhone( oRs )
	GetHomeAddressAndPhone = _
		"<td" & strRowSpan & " class=""cell-text"">" & DB2HTML_BR(GetAddress(objNSNET.GetUserAddress( oRs("SID") , 1)) )& "</td>" & _
		"<td" & strRowSpan & " class=""cell-text"">" & DB2HTML_BR(GetAddress(objNSNET.GetUserAddress( oRs("SID") , 0)) )& "</td>" & _
		"<td" & strRowSpan & " class=""cell-text""><span class=""text-nowrap"">" & Replace(DB2HTML_BR(oRs("HOMEPHONE")), ",", ",</span><span class=""text-nowrap"">") & "</span></td></tr>"
End Function

Function GetAddress( rsAddr )
	If rsAddr.EOF Then GetAddress = "" Else GetAddress = rsAddr("CITYNAME") & ", " & rsAddr("ADDRESS")
End Function

Function GetPersonalDoc( strDocSer, strDocNum, strDocDate, strDocInfo, strDocInfoPrefix )
	Dim strDate, strInfo, strSer, strNum
	strSer = strDocSer
	strNum = strDocNum
	strDate = strDocDate
	strInfo = strDocInfo
	If IsDull(strDate) And IsDull(strInfo) And IsDull(strSer) And IsDull(strNum) Then
		GetPersonalDoc = "<td" & strRowSpan & ">&nbsp;</td>"
	Else
		If IsDull(strDate) Then strDate = "" Else strDate = Date2Str(strDate)
		strInfo=DB2Value(strInfo) ' DB2Value is used to eliminate extra "&nbsp;"
		strSer=DB2Value(strSer)
		strNum=DB2Value(strNum)
		GetPersonalDoc = "<td" & strRowSpan & " class=""cell-text text-nowrap"">" & IIf(strSer <> "", strSer & "&nbsp;&nbsp;", "") & "№&nbsp;" & strNum & _
				IIF((strDate<>"")Or(strInfo<>""), "<br>"&strDocInfoPrefix&" "&strDate&" "&strInfo, "") & "</td>"
	End If
End Function


Sub PrintAgeStat()
	Dim objRs, arrData
	Dim nTotalM, nTotalF, i

	Set objRs = objNSNET.GetClassAgeStat(strClassID, strTermID)
	ReDim arrData(2, objRs.RecordCount - 1)
	nTotalM = 0 : nTotalF = 0
	i = 0 : arrData(0,0) = -1
	While Not objRs.EOF
		If arrData(0,i) <> -1 And arrData(0,i) <> objRs("BDYEAR") Then
			i = i + 1
		End If
		arrData(0,i) = objRs("BDYEAR")
		If objRs("GENDER") = obLanguage("Common","kMaleLet") Then
			arrData(1,i) = objRs("CNT")
			nTotalM = nTotalM + CLng(objRs("CNT") )
		Else
			arrData(2,i) = objRs("CNT")
			nTotalF = nTotalF + CLng(objRs("CNT") )
		End If
		objRs.MoveNext
	WEnd
	objRs.Close

	If arrData(0,0) <> -1 Then
		ReDim Preserve arrData(2, i)

		Response.Write "<br /><h3>"& obLanguage("Reports","kClassStructure",strFunctionalityType) &"</h3>"& _
					   "<table class=""table-print-num""><tr>"& _
					   "<th>"& obLanguage("Reports","kNumberForYears") &"</th>"
		For i = 0 To UBound(arrData,2)
			If arrData(0,i) <> 0 Then Response.Write "<th>" & arrData(0,i) & "</th>"
		Next
		If arrData(0,0) = 0 Then Response.Write "<th>"& obLanguage("Reports","kBirthYearNotSpecified") &"</th>"
		Response.Write "<th>"& obLanguage("Reports","kTotalNumber") &"</th></tr><tr><th>"& obLanguage("Reports","kOfBoys") &"</th>"
		For i = 0 To UBound(arrData,2)
			If arrData(0,i) <> 0 Then Response.Write "<td>" & CLng(arrData(1,i)) & "</td>"
		Next
		If arrData(0,0) = 0 Then Response.Write "<td>" & CLng(arrData(1,0)) & "</td>"
		Response.Write "<td class=""totals"">" & nTotalM & "</td></tr><tr><th>"& obLanguage("Reports","kOfGirls") &"</th>"
		For i = 0 To UBound(arrData,2)
			If arrData(0,i) <> 0 Then Response.Write "<td>" & CLng(arrData(2,i)) & "</td>"
		Next
		If arrData(0,0) = 0 Then Response.Write "<td>" & CLng(arrData(2,0)) & "</td>"
		Response.Write "<td class=""totals"">" & nTotalF & "</td></tr></table>"
	End If
End Sub

Sub PrintLangStat()
	Dim objRs

	Set objRs = objNSNET.GetClassLanguageStat(strClassID, strTermID)
	If Not objRs.EOF Then
		Response.Write "<br /><h3>"& obLanguage("Reports","kStudyOfLanguage") &"</h3>"& _
					   "<table class=""table-print-num"">"
		While Not objRs.EOF
			Response.Write "<tr><th>" & DB2HTML(objRs("LANG")) & "</th><td>" & objRs("CNT") & "</td></tr>"
			objRs.MoveNext
		WEnd
		Response.Write "</table>"
	End If
	objRs.Close
End Sub

%>
