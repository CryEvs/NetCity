<!-- #INCLUDE FILE=headersimple.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>
'	WarnType=<Access Warning Type>
'	WP=<Work Page>
'	ATLIST=<List of Co-Working Access Tokens>

Dim nWarningType, arrCWTokenList, nCWTokens, strWorkPage, objUserInfoRs
Dim bHealsDataViol, bHealsDataWarn, bIsServAdmin
Dim arrPageList

Function GetPageTitle()
	GetPageTitle = obLanguage("Login","kTitleSecurityWarning" & IIF(bHealsDataViol Or bHealsDataWarn,"FZ152",""))
End Function

Function isHelpAvailable()
	isHelpAvailable = False
End Function

' WarnType
' 1, 2 - старые типы, которые были раньше
' 3 - появился новый тип: предупреждение, что в системе есть данные о здоровье, в то время как в системе эти данные запрещены
' WarnType = 1 и WarnType = 3 - могут появлятся одновременно, при этом остаётся WarnType = 1, но дополнительно выставляется флаг HealsDataViol
' HealsDataViol может выставлятся для WarnType = 3 - практически всегда, за исключением случая, когда заходит админ сервера
' и в системе разрешены данные о здоровье, в этом случае выставляется флаг HealsDataWarn
Sub ReadState()
	nWarningType = GetSafeLng(Request("WarnType"), 0)
	Call MarkEntryPage(strScriptName)
	strWorkPage = IdentifyNextPage()

	bHealsDataViol = (GetSafeLng(Request("HealsDataViol"), 0) = 1)
	bHealsDataWarn = (GetSafeLng(Request("HealsDataWarn"), 0) = 1)
End Sub

Sub Main()
	Dim strCowrkMessage
	On Error Resume Next
	If nWarningType<>1 And nWarningType<>2 And nWarningType<>3 Then GenerateError obLanguage("Login","kErrAccessDenied")
	arrCWTokenList = Split("", Chr(1))

	If nWarningType = 1 Then
		arrCWTokenList = Split(GetSafeStr(obTokenMgr.GetData(strToken, "ATLIST"), -1, ""), ",")
		Call obTokenMgr.RemoveData(strToken, "ATLIST")
		nCWTokens = UBound(arrCWTokenList) + 1
	ElseIf nWarningType = 2 Then 
		strCowrkMessage = GetSafeStr(obTokenMgr.GetData(strToken, "COWRK"), 2000, "")
		Call obTokenMgr.RemoveData(strToken, "COWRK")
		If strCowrkMessage<>"" Then
			arrCWTokenList = Split(strCowrkMessage, Chr(1))
			nCWTokens = UBound(arrCWTokenList) + 1
		End If
	End If

	Set objUserInfoRs = objNSNET.GetUserInfo(strUserID)
	TestError obLanguage("Login","kErrCantGetLoginName")
	If objUserInfoRs.EOF Then GenerateError obLanguage("Login","kErrCantGetLoginName")
	bIsServAdmin = False
	If bHealsDataViol Then
		bIsServAdmin = objNSNET.IsAdminOfServer(strUserID)
	End If
End Sub

Sub onHead()%>
<script>
<!--
function doContinue() {
	var form = document.forms[0];
	DoSubmit(form,'');
}

function Back() {
	doContinue();
}
<%If bHealsDataViol And bIsServAdmin Then%>
function deleteHealthData()
{
	$.show.confirmation(language.Generic.Login.kConfirmDeleteHealthData).then(function(){
		var form = document.forms[0];
		DoSubmit(form, 'DelHealthData.asp');
	});
}
<%End If%>
//-->
</script><%
End Sub

Sub onDrawPage()
	Dim strCurToken, nItem
	Dim strWarning%>
<div class="row">
	<div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2"><%
	Select Case nWarningType
		Case 1, 3:%>
			<form NAME="Proceed" METHOD="post" ACTION="<%=strWorkPage%>">
				<%=WriteObligatoryTags()%>
				<%If bHealsDataViol And bIsServAdmin Then%>
					<%=WriteHiddenTags(Array("WorkPage", strWorkPage))%><%
				End If%>
			</form><%
		Case 2:
			Dim strSavedRequestId
			strSavedRequestId = Request("requestId")
			If Not IsDull(strSavedRequestId) Then
				Call DrawRedirectForm(strSavedRequestId)
			End If
		Case Else ' do nothing
	End Select

	If bHealsDataViol Or bHealsDataWarn Then
		Call DrawHealtDataWarn
	End If

	Select Case nWarningType
		Case 1:
		%>
		<div class="row">
			<div class="col-md-12">
				<%
				strWarning = "<b>" & obLanguage("Common","kAttention") & "</b><br />" & obLanguage("Login","kNowInTheSchool") & " <B>" & strSchoolName & "</B> " &_
					obLanguage("Login","kAlreadyWorking") & " <B>" & nCWTokens & "</B> " & AddEnding(nCWTokens) & " "
					
				If Not bIsEMForSchool Then
					strWarning = strWarning & obLanguage("Login","kWithName") & " <B>"&DB2HTML(objUserInfoRs("LOGINNAME"))&"</B> " &_
								"(" & obLanguage("Login","kDisplayName_") & ": <B>" &DB2HTML(objUserInfoRs("NICKNAME"))&"</B>)"
				Else
					strWarning = strWarning & "<B><nobr>" & DB2HTML(objUserInfoRs("NICKNAME")) & "</nobr></B>."
				End If

				DrawWarning strWarning
				%>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<%DrawCoworkers%>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<%DrawWarning obLanguage("Login","kProbablyYouDidNotLogOutCorrectly")%>
			</div>
		</div><%
		Case 2:
		%>
		<div class="row">
			<div class="col-md-12">
				<%
				strWarning = "<b>" & obLanguage("Common","kAttention") & "</b><br />" &_
					obLanguage("Login","kToTheSchool") & " <B>" & strSchoolName & "</B> " & obLanguage("Login","kOneMoreUserLoggedIn") & " "
				If Not bIsEMForSchool Then
					strWarning = strWarning & obLanguage("Login","kWithName") & " <B>"&DB2HTML(objUserInfoRs("LOGINNAME"))&"</B> " &_
								"(" & obLanguage("Login","kDisplayName_") & ": <B>" &DB2HTML(objUserInfoRs("NICKNAME"))&"</B>)."
				Else
					strWarning = strWarning & "<B><nobr>" & DB2HTML(objUserInfoRs("NICKNAME")) & "</nobr></B>."
				End If
				DrawWarning strWarning
				%>
			</div>
		</div>
				
		<div class="row">
			<div class="col-md-12">
				<table class="table table-bordered">
					<tr>
						<td class="text-left">
							<b><%=obLanguage("Login","kLoginTimeInto")%> <i><%=NETSCHOOL_PRODUCT_NAME%></i>:</b>
						</td>
						<td class="text-left"><%=CStr(arrCWTokenList(1))%></td>
					</tr><%
				If nCWTokens > 3 Then%>
					<tr>
						<td class="text-left">
							<b><%=obLanguage("Login","kLogoutTimeFrom")%> <i><%=NETSCHOOL_PRODUCT_NAME%></i>:</b>
						</td>
						<td class="text-left"><%=CStr(arrCWTokenList(3))%></td>
					</tr><%
				End If%>
					<tr>
						<td class="text-left">
							<b><%=obLanguage("Login","kIPAddress")%>:</b>
						</td>
						<td class="text-left"><%=CStr(arrCWTokenList(2))%></td>
					</tr>
				</table>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<%
					DrawWarning obLanguage("Login","kUsersCantUseOneLogin1") & " <i>" & NETSCHOOL_PRODUCT_NAME & "</i> " & obLanguage("Login","kUsersCantUseOneLogin2") &_
						"<br /><br />" & obLanguage("Login","kSomeoneUsedYourLogin") 
				%>
			</div>
		</div><%
	End Select
			
	%><div class="row">
		<div class="col-md-12 text-center">
			<%
			OpenBtnGroup
			If bHealsDataViol And bIsServAdmin Then
				ButtonDelEx "deleteHealthData();", obLanguage("Buttons","kRemove"), obLanguage("Login","kDeleteHealthData")
			End If
			If nWarningType = 1 Then
				ButtonExit "Logout(true);", obLanguage("Common","kExit")
			End If
			ButtonContinue "doContinue();", obLanguage("Login","kBtnContinue")
			CloseBtnGroup
			%>
		</div>
	</div>
	</div>
</div><%
End Sub

Sub DrawCoworkers
	Dim strCurToken, nItem

	%><table class="table table-bordered">
		<tr>
			<th class="text-left"><b>№</b></th>
			<th class="text-left"><b><%=obLanguage("Login","kLoginTimeInto")%> <i><%=NETSCHOOL_PRODUCT_NAME%></i></b></th>
			<th class="text-left"><b><%=obLanguage("Login","kIPAddress")%></b></th>
		</tr><%
		nItem = 1
		For Each strCurToken in arrCWTokenList
			%><tr>
				<td><%=nItem%></td>
				<td><%=CStr(obTokenMgr.GetData(strCurToken,"LOGINTIME",0 ))%></td>
				<td><%=CStr(obTokenMgr.GetData(strCurToken,"USERADDR",0 ))%></td>
			</tr><%
			nItem = nItem + 1
		Next%>
	</table><%
End Sub

Sub DrawHealtDataWarn
	Dim strWarning
	strWarning = "<b>" & obLanguage("Common","kAttention") & "</b> <br />"

	If bHealsDataViol Then
		strWarning = strWarning & obLanguage("Login","kWarnHealthDataViolation") & "<br /><br />" & IIF(bIsServAdmin,obLanguage("Login","kAskDeleteHealthDataAdmin"),obLanguage("Common","kContactSysAdmin") & ".")
	Else
		strWarning = strWarning & obLanguage("Login","kWarnHealthDataAdmin")
	End If

	%>
	<div class="row">
		<div class="col-md-12">
		<%DrawWarning strWarning%>
		</div>
	</div>
	<%
End Sub

Function AddEnding( nNum )
	' сформировать склонение слова "пользователь"
	Dim strResult
	strResult = "пользовател"
	If (nNum Mod 100 >= 11) And (nNum Mod 100 <= 14) Then
		strResult = strResult & "ей"
	Else
		Select Case (nNum Mod 10)
		Case 1:		strResult = strResult & "ь"
		Case 2,3,4:	strResult = strResult & "я"
		Case Else 	strResult = strResult & "ей"
		End Select
	End If
	AddEnding = strResult
End Function
%>
