<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<% ' © 2007-2015 IRTech. All rights reserved.
Dim objSchoolComponent, importSchoolsResult, readResultData, arrData, cnt, i, result
	
Set objSchoolComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISchoolComponent")
TestError obLanguage("ServAdmin", "kCantCreateObj")

Set readResultData = obTokenMgr.GetData(strToken, "readResultData")

cnt = Request("incEO").Count - 1
ReDim arrData(cnt)

For i = 0 To cnt
	arrData(i) = GetSafeID(Request("incEO")(i+1), NULL)
Next

Call obTokenMgr.SetData(strToken, "readResultData", Empty)

Set importSchoolsResult = objSchoolComponent.ImportSchools(readResultData, arrData)
TestError Err.Description

Set result = new JSONResult
Call result.AddData("result", importSchoolsResult)
Response.Write result%>