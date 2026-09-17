<!-- #INCLUDE VIRTUAL="/asp/headerUpload.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strSubjectID, strGradeID, certificationType
Dim nPlanID
Dim blobData
Dim objKTPComponent, importResult
	
strSubjectID = GetSafeLng(requestData("SJID").Value, -1)
strGradeID = GetSafeLng(requestData("GRADEID").Value, -1)

nPlanID = GetSafeLng(requestData("PlanID").Value, Null)
blobData = requestData("file").Param.Bytes

Call DisposeUpload()

Set objKTPComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IKTPComponent")
TestError obLanguage("Curriculum", "kCantCreateObj")

Set importResult = objKTPComponent.ImportKTP(nPlanID, blobData, strGradeID)
TestResult importResult, obLanguage("Curriculum", "kCantImportVariant")

Set objKTPComponent = Nothing
Set importResult = Nothing

Call obTokenMgr.SetData(strToken, stCrMngmXMLTree, Null)
Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("Curriculum", "kImportVariantSuccess")))
RedirectTo "Planner.asp?", Array("SJID", strSubjectID, "GRADEID", strGradeID)%>