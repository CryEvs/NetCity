<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim objComponentList, strTermID, nFilterGradeMin, nFilterGradeMax, strProfileID, strDirectionID, objSubjectComponentList, objCurriculumLimitsList
Dim result, objRsProfileGrade, objRsClasses, objRsSubjectList
Dim componentData, subjectComponentData, curriculumLimitsData, subjectData, profileGradesData, gradeClassesData, gradeData, iupLevelData
Dim nComponentId, nGrade
Dim bIsIUP, rsIupLevels

strTermID		= GetSafeLng(Request("TERMID"), 0)
nFilterGradeMin = GetSafeLng(Request("GradeMin"), 0)
nFilterGradeMax = GetSafeLng(Request("GradeMax"), 0)
strProfileID	= GetSafeLng(Request("PROFILEID"), -1)
strDirectionID	= GetSafeLng(Request("DIRECTIONID"), 0)
nComponentId	= -1
nGrade			= -1

bIsIUP = Request("isIUP") = "true"

Set objRsSubjectList = objNSNET.GetSubjectListBySchoolId(strSchoolID)

If Not bIsIUP Then
	Set objComponentList = objNSNET.GetAccessComponentList(strSchoolID, strCurrYearID, strTermID, nFilterGradeMin, nFilterGradeMax, strProfileID, strDirectionID)

	'отношение SubjectId - ComponentId
	Set objSubjectComponentList = objNSNET.GetNotCurriculumSubjectList(strSchoolID, strTermID, nComponentId, nFilterGradeMin, nFilterGradeMax, strProfileID, strDirectionID)

	'Для каких параллелей создана компонента (соотношение параллелей компонентам)
	Set objCurriculumLimitsList		= objNSNET.GetGradesForComponent_WT(Empty, strCurrYearID, nComponentId)

	Set objRsProfileGrade = objNSNET.GetGradeProfileList2(nGrade, strProfileID, strSchoolID)
	Set objRsClasses =  objNSNET.GetGradeProfileClasses(strTermID, strDirectionID, nGrade, strProfileID)

	Call GetProfileGradesData()
	Call GetGradeClasses()
Else
	Set objComponentList = objNSNET.GetAccessComponentListIUP(strSchoolID, strCurrYearID, strTermID, nFilterGradeMin, nFilterGradeMax)
	Set objSubjectComponentList = objNSNET.GetNotCurriculumSubjectListIUP(strSchoolID, strTermID, nFilterGradeMin, nFilterGradeMax)
	Set objCurriculumLimitsList = objNSNET.GetGradesForComponentIUP_WT(Empty, strCurrYearID, nComponentId, strTermID)
	Set rsIupLevels = objNSNET.GetIUPLevelList()

	Call GetIUPLevelData()
End If

Call GetSubjectData()
Call GetComponentData()
Call GetSubjectComponentData()
Call GetCurriculumLimitsData()

TestError Err.Description

Set result = new JSONResult

Call result.AddJsonData("componentData", componentData)
Call result.AddJsonData("subjectData", subjectData)
Call result.AddJsonData("subjectComponentData", subjectComponentData)
Call result.AddJsonData("curriculumLimitsData", curriculumLimitsData)

If bIsIUP Then
	Call result.AddJsonData("iupLevelData", iupLevelData)
Else
	Call result.AddJsonData("profileGradesData", profileGradesData)
	Call result.AddJsonData("gradeClassesData", gradeClassesData)
End If

Response.Write result

Sub GetIUPLevelData()
	Dim properties, columns

	properties = Array("levelId", "shortName", "levelName")
	columns = Array("LEVELID", "SHORTNAME", "LEVELNAME")

	iupLevelData = comHelper.DataSetAdapterHelper.ToJSON(rsIupLevels, properties, columns, Array("ignoreNullValues"))
End Sub

Sub GetSubjectData()
	Dim properties, columns

	properties = Array("id", "name")
	columns = Array("SUBJECTID", "SUBJECTNAME")

	subjectData = comHelper.DataSetAdapterHelper.ToJSON(objRsSubjectList, properties, columns, Array("ignoreNullValues"))
End Sub

Sub GetComponentData()
	Dim properties, columns

	properties = Array("id", "name")
	columns = Array("COMPONENTID", "COMPONENTNAME")

	componentData = comHelper.DataSetAdapterHelper.ToJSON(objComponentList, properties, columns, Array("ignoreNullValues"))
End Sub

Sub GetSubjectComponentData()
	Dim properties, columns

	properties = Array("subjectId", "componentId")
	columns = Array("SUBJECTID", "COMPONENTID")

	subjectComponentData = comHelper.DataSetAdapterHelper.ToJSON(objSubjectComponentList, properties, columns, Array("ignoreNullValues"))
End Sub

Sub GetCurriculumLimitsData()
	Dim properties, columns

	properties = Array("gradeId", "componentId")
	columns = Array("GRADEID", "COMPONENTID")

	curriculumLimitsData = comHelper.DataSetAdapterHelper.ToJSON(objCurriculumLimitsList, properties, columns, Array("ignoreNullValues"))
End Sub

Sub GetProfileGradesData()
	Dim properties, columns

	properties = Array("profileId", "profileName", "gradeSet")
	columns = Array("PROFILEID", "PROFILENAME", "GRADESET")

	profileGradesData = comHelper.DataSetAdapterHelper.ToJSON(objRsProfileGrade, properties, columns, Array("ignoreNullValues"))
End Sub

Sub GetGradeClasses()
	Dim properties, columns

	properties = Array("classId", "className", "grade", "profileId")
	columns = Array("CLASSID", "CLASSNAME", "GRADE", "PROFILEID")

	gradeClassesData = comHelper.DataSetAdapterHelper.ToJSON(objRsClasses, properties, columns, Array("ignoreNullValues"))
End Sub%>