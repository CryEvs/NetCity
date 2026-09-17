<%@ Language=VBScript%>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Session.CodePage = 65001
Response.Charset = "utf-8"
Response.ContentType = "text/html"
Dim yearIsClosed
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
	'Pages requires strCurrYearID and Year should not be closed
	If IsDull( Request("CURRYEAR") ) Then
		strCurrYearID = GetSafeLng( obTokenMgr.GetData(strToken,stCurrYear), strSchoolYearId )
	Else
		strCurrYearID = GetSafeLng( Request("CURRYEAR"), strSchoolYearId )
	End If

	yearIsClosed = objNSNET.IsYearClosed(strCurrYearID)
	If yearIsClosed Then GenerateError obLanguage("Common","kErrYearIsClosed")

	Call InitGlobalYearID()
End Sub
%>
