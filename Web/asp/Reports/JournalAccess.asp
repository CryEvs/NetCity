<!-- #INCLUDE FILE="../headerPrint_s.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nViewType, bLastAccess
Dim strClassName, strTeacherName, strSgName, strDateRange
Dim arrAccessLog
Dim nTeacherId, nSgId, dtStart, dtEnd

Const kViewType_ByClasses = 1
Const kViewType_ByTeachers = 2

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames", "kRNJournalAccess", strFunctionalityType)
End Function

Function GetPageParams()
	If Not IsEmpty(dtStart) Then
		strDateRange = Date2Str(dtStart) & " - " & Date2Str(dtEnd)
	End If
	If nViewType = kViewType_ByClasses then
		GetPageParams = _
			Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
			obLanguage("Reports","kTypeReport"), obLanguage("Reports","kByClasses", strFunctionalityType), _
			obLanguage("Reports","kOnlyLastChanges"), IIF(bLastAccess, obLanguage("Common","kYes"), obLanguage("Common","kNo")))

		If Not bLastAccess Then
			If Not IsDull(strDateRange) Then
				Call comHelper.ArrayHelper.AppendArray(GetPageParams, Array(obLanguage("Common","kPeriod"), strDateRange))
			End If
		End If

		Call comHelper.ArrayHelper.AppendArray(GetPageParams, Array(filterClasses, strClassName))

		If nSgId > -1 Then
			Call comHelper.ArrayHelper.AppendArray(GetPageParams, Array(obLanguage("Common","kSubject"), strSgName))
		End If
	Else
		GetPageParams = _
			Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
			obLanguage("Reports","kTypeReport"), obLanguage("ClassManagement","kByTeachers", strFunctionalityType), _
			obLanguage("Filter","kTeacherGB", strFunctionalityType), strTeacherName, _
			obLanguage("Common","kPeriod"), strDateRange, _
			filterClasses, strClassName)
	End If
End Function

Sub specialRead()
	nViewType = GetSafeLng(Request("ViewType"), 1)
	bLastAccess = GetSafeLng(Request("LastAccess"), 0) = 1
	strClassID_IUP = GetSafeParam("PCLID_IUP", stCurrClass_IUP, "-1")

	If strClassID_IUP <> "-1" Then
		InitIUPClassID(strClassID_IUP)
	Else
		strClassID = -1
		strIupGrade = -1
	End If

	If HasUserRole(rlStudent) Or HasUserRole(rlParent) Then
		bLastAccess = True
	End If

	nSgId = GetSafeLng(Request("SGID"), -1)
	nTeacherId = GetSafeLng(Request("TID"), -1)
	dtStart = GetSafeNullDate(Request("DATE_START"))
	dtEnd = GetSafeNullDate(Request("DATE_END"))
End Sub

Sub specialMain()
	Dim component
	Dim objTempRs

	Set component = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IReportsComponent")
	Set arrAccessLog = component.GetJournalAccess(strCurrYearId, strClassID, strIupGrade, nSgId, nTeacherId, dtStart, dtEnd, bLastAccess)

	If strClassID_IUP = "-1" Then
		strClassName = obLanguage("Common","kAll")
	Else
		If Not bIsIupGrade Then
			Set objTempRs = objNSNET.GetClassInfo(strClassID)
			strClassName = objTempRs("CLASSNAME")
		Else
			strClassName = strIupGrade & " *"
		End If
	End If

	strTeacherName = ""
	If nTeacherId > -1 Then
		strTeacherName = objNSNET.GetUserNickName(nTeacherId)
	End If

	If nSgId > -1 Then
		Set objTempRs = objNSNET.GetSubjectGroupInfo(nSgId)
		strSgName = objTempRs("NAME")
	End If
End Sub

Function GetHeader_Table()
	GetHeader_Table = "<table class=""table-print"">"
End Function

Function GetReportTable()
	Dim accessInfo, bEmptyRecord, strBuilder
	Set strBuilder = new StringBuilder

	strBuilder.Append GetHeader_Table() & "<tr>"
	strBuilder.Append 		"<th>" & filterClasses & "</th>" 
	strBuilder.Append 		"<th>" & obLanguage("Common","kSubject") & "</th>"
	strBuilder.Append 		"<th>" & obLanguage("Reports","kDateTimeOfChanges") & "</th>"
	strBuilder.Append 		"<th>" & obLanguage("Common","kUser") & "</th>"
	strBuilder.Append 		"<th>" & obLanguage("Curriculum", "kClassMeetingInSchedule") & "</th>" 
	strBuilder.Append 		"<th>" & obLanguage("Common","kSchoolPeriod") & "</th>" 
	strBuilder.Append 		"<th>" & obLanguage("Reports","kAction") & "</th>" 
	strBuilder.Append 		"</tr>"

	For Each accessInfo in arrAccessLog
		bEmptyRecord = IsDull(accessInfo.Author)
		strClassID_IUP = accessInfo.ClassId
		strBuilder.Append	"<tr>"
		strBuilder.Append	"<td class=""cell-text"">" & accessInfo.ClassName & "</td>"
		strBuilder.Append	"<td class=""cell-text"">" & accessInfo.SubjectName & "</td>"
		strBuilder.Append	"<td class=""cell-date-time"">" & IIF(bEmptyRecord, "-", Date2Str(accessInfo.Date) & " " & Time2Str(accessInfo.Date)) & "</td>"
		strBuilder.Append	"<td class=""cell-text"">" & accessInfo.Author & "</td>"
		strBuilder.Append	"<td class=""cell-text-center"">" & accessInfo.Meetings & "</td>"
		strBuilder.Append	"<td class=""cell-text-center"">" & accessInfo.TermName & "</td>"
		strBuilder.Append	"<td class=""cell-text-center"">" & accessInfo.Action & "</td>"
		strBuilder.Append	"</tr>"
	Next
	
	strBuilder.Append "</table>"


	GetReportTable = strBuilder.ToString() & "<hr />" & GetAccessLegend()
End Function

Function GetAccessLegend()
	Dim arrAccessTypes, enumAccessType
	Set arrAccessTypes = comHelper.AspHelper.GetEnums(comHelper.AspHelper.Enums.JournalAccessType)

	GetAccessLegend = "<table class=""table-print"">" & "<tr>" & _
		"<th>" & obLanguage("SetupSchool","kAbbrName") & "</th>" & _ 
		"<th>" & obLanguage("Reports","kAction") & "</th>" & _ 
		"</tr>"

	For Each enumAccessType in arrAccessTypes
		GetAccessLegend = GetAccessLegend & "<tr>" & _
			"<td class=""cell-text"">" & enumAccessType.ShortName & "</td>" & _
			"<td class=""cell-text"">" & enumAccessType.Name & "</td>" & _
			"</tr>"
	Next

	GetAccessLegend = GetAccessLegend & "</table>"
End Function
%>
