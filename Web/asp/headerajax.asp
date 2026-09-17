<%@ Language=VBScript CODEPAGE=65001%>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Session.CodePage = 65001
Response.Charset = "utf-8"
Response.ContentType = "application/json"

' INCLUDE PopupNo and Auth
%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<!-- #INCLUDE FILE=scripts/PopupNo.asp -->
<!-- #INCLUDE FILE=scripts/Auth.asp -->
<!-- #INCLUDE FILE=scripts/stdhead.asp -->
<%
Function CheckIsAjaxCall
	CheckIsAjaxCall = True
End Function
%>
<!-- #INCLUDE FILE=scripts/SecurityRoles.asp -->
<!-- #INCLUDE FILE=scripts/PageStates.asp -->
<%CheckYear

Sub CheckYear()
	strCurrYearID = GetSafeLng( obTokenMgr.GetData(strToken,stCurrYear), strSchoolYearId )
	If strCurrYearID = 0 Then
		strCurrYearID = Empty
	End If
	Call InitGlobalYearID()
End Sub
%>