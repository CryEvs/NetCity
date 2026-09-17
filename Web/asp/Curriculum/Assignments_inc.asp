<!-- #INCLUDE VIRTUAL=/asp/scripts/teacher.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/assignment.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/MarkTKR_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterWeeks.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClasses.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClasses_IUP.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterStudents.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strSubjClassID
Dim lngTestsCnt, bHaveLate, bHaveTKR
Dim dctAssPerDay
Dim strActivityID
Dim bWeight
Dim objRs
Dim nMaxMark
Dim strTermID, strTermName
Dim strTTSURL, strExternalURL
Dim bYaClassIntegration, strYaClassAuthUrl

Sub Main()
	Dim i, j
	Dim tmpArrSortOrders(8), tmpArrSelSortOrders(8)
	If bStudentsIsEmpty Or strClassID_IUP = "0" Then Exit Sub
	Dim objYaClassComponent
	Dim obComponent, getSettingsRes

	Call InitSchoolSettings( objNSNET )
	Call InitAssignmentTypesHelper()

	bWeight = (arrSchoolSettings(1, kSSIndex_MarksAveraging) = "1")

	Set objRs = objNSNET.GetStudentAssignmentList(strStudentID, dtWeekStart, dtWeekEnd, NSDate(), strCurrYearID, strClassId, strIupGrade)
	lngTestsCnt = objRs.RecordCount
	If Not objRs.EOF Then
		Call PageDividing(objRs)
	End If
	If kIsTKR Then
		Call GetMarkTypes_TKR()
	End If
	strYaClassAuthUrl = ""
	bYaClassIntegration = Trim(obContext.ServerSettings.SystemSettings.YaClassUrl) <> ""
	If bYaClassIntegration Then
		Set objYaClassComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IYaClassComponent")
		TestError obLanguage("ServAdmin", "kCantCreateObj")

		strYaClassAuthUrl = objYaClassComponent.GetAuthUrl(strToken, "")
	End If
	Set obComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IServerSettingsComponent")
	Set getSettingsRes = obComponent.GetServerSettings()
	TestResult getSettingsRes, Null
	strExternalURL = getSettingsRes.Data.Address
End Sub

Function GetPageTitle()
	Dim strTitle

	strTitle = obLanguage("Curriculum","kTitleAssignments")
	If Not IsDull(strTermName) Then
		strTitle = strTitle & GreenText(" (" & DB2HTML(strTermName) & ")")
	End If
	GetPageTitle = strTitle
End Function

Sub ReadState()
	Call CalcCurrYearLimits(dtYearStart, dtYearEnd)
	Call InitWeek(dtYearStart, dtYearEnd)
	
	Call InitStudents()
	If bStudentsIsEmpty Then Exit Sub
	
	Call InitYearStudentClasses_IUP( strStudentID, False )
	If strClassID_IUP = "0" Then Exit Sub
	
	Call ParseIupClassId(strClassID_IUP, strClassId, strIupGrade, bIsIupGrade)

	Call GetTermInfoForClassAndDate_IUP(strClassID_IUP, dtWeekStart, strTermID, strTermName)
	If strTermID = "" Then
		Call GetTermInfoForClassAndDate_IUP(strClassID_IUP, dtWeekEnd, strTermID, strTermName)
	End If
	
	nMaxMark = obTokenMgr.GetData(strToken, stMaxMark)

	strTTSURL = GetTTSURL()
End Sub

Sub PageDividing(objRs)
	Dim dtTmp, nNumPrev
	'количество отображаемых заданий может быть больше 7, за счет долгов и ДЗ, 
	'позтому размерность массивов arrAssPerDay единожды определить нельзя
	' find out how many assignments are in each day
	dtTmp = objRs("DUEDATE")
	nNumPrev = 0
	Set dctAssPerDay = Server.CreateObject( "NetCity.Storage" )
	While Not objRs.EOF
		If dtTmp<>objRs("DUEDATE") Then
			Call dctAssPerDay.Add(dtTmp, nNumPrev)
			dtTmp = objRs("DUEDATE")
			nNumPrev = 0
		End If
		nNumPrev = nNumPrev + 1
		objRs.MoveNext
	Wend
	objRs.MoveFirst
	Call dctAssPerDay.Add(dtTmp, nNumPrev)
End Sub
%>