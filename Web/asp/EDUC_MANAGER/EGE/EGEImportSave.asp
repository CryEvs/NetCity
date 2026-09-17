<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/EGE/EGE_inc.asp" -->
<% ' © 2007-2015 IRTech. All rights reserved.

Dim importEGEResult, readResultData, result
Dim strGlobalYearID, strExamType

Call InitEgeComponent()
strGlobalYearID = GetSafeLng(Request("CMNYEAR"), Null)

strExamType = GetSafeLng(Request("EXAMTYPE"), Null)

Set readResultData = obTokenMgr.GetData(strToken, stReadEGEResults)

Set importEGEResult = objEGEComponent.ImportEGEResults(readResultData, strGlobalYearID, strExamType)
TestError obLanguage("Common","kUnexpErr")
Call obTokenMgr.SetData(strToken, Empty)

Call WriteJsonResult(importEGEResult.Message, False, 0)
%>
