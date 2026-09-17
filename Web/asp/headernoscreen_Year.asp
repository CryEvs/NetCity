<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Session.CodePage = 65001
Response.Charset = "utf-8"
Response.ContentType = "text/html"

' INCLUDE PopupNo and Auth
%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<!-- #INCLUDE FILE=scripts/PopupNo.asp -->
<!-- #INCLUDE FILE=scripts/Auth.asp -->
<!-- #INCLUDE FILE=scripts/stdhead.asp -->
<!-- #INCLUDE FILE=scripts/SecurityRoles.asp -->
<!-- #INCLUDE FILE=scripts/PageStates.asp -->
<%CheckYear

Sub CheckYear()
	'Pages requires strCurrYearID
	If IsDull( Request("CURRYEAR") ) Then
		strCurrYearID = GetSafeLng( obTokenMgr.GetData(strToken,stCurrYear), strSchoolYearId )
	Else
		strCurrYearID = GetSafeLng( Request("CURRYEAR"), strSchoolYearId )
	End If
	Call InitGlobalYearID()
End Sub
%>
