<!-- #INCLUDE VIRTUAL="/asp/headerUpload.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim blobData, strSchoolNotImportedList, bSchoolsAlreadyCreated, schoolList
Dim objSchoolComponent, readResult, cityId, districtId, readResultData
Dim i, strSchoolList, jsResult

blobData = requestData("file").Param.Bytes
cityId = GetSafeID(requestData("cityId").Value, -1)
districtId = GetSafeID(requestData("districtId").Value, -1)

Set objSchoolComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISchoolComponent")
TestError obLanguage("ServAdmin", "kCantCreateObj")

Set readResult = objSchoolComponent.ExtractSchoolsFromExcelFile(blobData, cityId, districtId)
TestError obLanguage("ServAdmin", "kCantCreateObj")

If Not readResult.IsSuccess Then
	Call WriteJsonResult(readResult.Message, True, -1)
End If

Set readResultData = readResult.Data
Call obTokenMgr.SetData(strToken, "readResultData", readResultData)
schoolList = readResultData.SchoolList.ToArray()

Set jsResult = new JSONResult
Call jsResult.AddData("schoolList", readResultData.SchoolList)
Call jsResult.AddData("alreadyCreated", readResultData.AlreadyCreated)

Response.Write jsResult
Response.End
%>
