<!-- #INCLUDE FILE="../headerajax.asp" -->
<!-- #INCLUDE FILE="../scripts/attachments_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
On Error Resume Next

Dim result
Dim objLessonInfo, objPlanUnitInfo
Dim nLessonId, strUnitID
Dim lessonData, unitData, filesData
Dim oAttachmentsComponent

nLessonId = GetSafeLng(Request("lessonId"), Null)
Set objLessonInfo = objNSNET.GetLessonInfoWithContentElements(nLessonId)
If objLessonInfo.EOF Then GenerateError(obLanguage("Curriculum","kLessonNotExists"))

Set oAttachmentsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IFileAttachmentsComponent")
Set result = oAttachmentsComponent.GetFileAttachmentInfoLesson(nLessonId)
If Not result.IsSuccess Then GenerateError result.Message

filesData = ConvertJsonObject2Str(result)

strUnitID = objLessonInfo("UNITID")
Set objPlanUnitInfo = objNSNET.GetSubjectPlanUnitInfo(strUnitID)

Call GetLessonData()
Call GetUnitData()

TestError Err.Description

Dim responseResult

Set responseResult = new JSONResult
Call responseResult.AddJsonData("lessonData", lessonData)
Call responseResult.AddJsonData("unitData", unitData)

If Not IsDull(filesData) Then
	Call responseResult.AddJsonData("filesData", filesData)
End If

Response.Write responseResult

Sub GetLessonData()
	Dim properties, columns
	
	properties = Array("description", "lessonName", "nLessonInUnit", "homeAssignment", "lessonDetails", "codeContentElements", "contentElements", "bookRef")
	columns = Array("DESCRIPTION", "LESSONNAME", "NLESSONINUNIT", "HOMEASSIGNMENT", "DETAILS", "CODECONTENTELEMENT", "CONTENTELEMENT", "BOOKREF")

	lessonData = comHelper.DataSetAdapterHelper.ToJSON(objLessonInfo, properties, columns, Array("ignoreNullValues"))
End Sub

Sub GetUnitData()
	Dim properties, columns
	
	properties = Array("subjectName", "grade", "variantName", "unitName")
	columns = Array("SUBJECTNAME", "GRADE", "VARIANTNAME", "UNITNAME")

	unitData = comHelper.DataSetAdapterHelper.ToJSON(objPlanUnitInfo, properties, columns, Array("ignoreNullValues"))
End Sub%>