<% ' © 2007-2011 IRTech. All rights reserved.
'Screen Type constants
Const stNormal	= 1
Const stSimple	= 2
Const stPrint	 = 3

Function GetScreenType()
	GetScreenType = stPrint
End Function

Function GreenText(strData)
	GreenText = strData
End Function

Function GetTitle()
	GetTitle = NETSCHOOL_PRODUCT_NAME
End Function

Sub onHead()
End Sub

Sub onDrawHead()
	Call onHead()
End Sub

Sub ReadState()
End Sub

Sub Main()
End Sub

Function GetPageTitle()
End Function
Function GetPageTitleFor( strPageName, arrPageParams )
	GetPageTitleFor = GetPageTitleExcel(strPageName, arrPageParams)
End Function
Function GetWarning(strMsg)
	GetWarning = GetWarningExcel(strMsg)
End Function
Function GetPageVer()
	GetPageVer = GetPageVerExcel()
End Function

Sub onCurrentDate()
	Response.Write FormatDateTime(NSNow,vbLongDate)
End Sub

Sub onDrawPageBody()
	Call onDrawPage()
End Sub

Sub onDrawPage()
End Sub

Function hasUserRightsOnPage()
	hasUserRightsOnPage = True
	Call InitDict()
End Function

Function DB_2_HTML(strValue)
	DB_2_HTML = DB2HTML_BR(strValue)
End Function

Function GetXlsFileName()
	Dim sPath, nSlPos, strScriptName
	strScriptName = Request.ServerVariables("SCRIPT_NAME")
	nSlPos = InStrRev(strScriptName,"/") + 1
	GetXlsFileName = Mid( strScriptName, nSlPos, InStrRev(strScriptName,".")-nSlPos ) & ".xls"
End Function

Function ReadYearConnectionState()
	Dim bArchived
	Dim objRs
	strCurrYearID = obTokenMgr.GetData(strToken,stCurrYear)
	bArchived = obTokenMgr.GetData(strToken,"IsArchived")
	If bArchived Then SetArchConnection
End Function

If Not hasUserRightsOnPage() Then RedirectTo "/ASP/errorAccess.asp?", null

Call ReadYearConnectionState()
Call StartTimeLog("ReadState")
Call ReadState()
Call EndTimeLog("ReadState")
Call TestError( obLanguage("Common","kUnexpErr") )
Call StartTimeLog("Main")
Call Main()
Call EndTimeLog("Main")
Call TestError( obLanguage("Common","kUnexpErr") )
%><html>
<head><meta HTTP-EQUIV="Content-type" CONTENT="text/html; charset=utf-8">
<style>
	<!-- #INCLUDE FILE="../../static/dist/pages/common/css/export-tables.min.css" -->
</style>
</head>
<body>
<%
Call StartTimeLog("onDrawPageBody")
Call onDrawPageBody()
Call EndTimeLog("onDrawPageBody")
Call TestError( obLanguage("Common","kUnexpErr") )
%>
</body>
</html>
