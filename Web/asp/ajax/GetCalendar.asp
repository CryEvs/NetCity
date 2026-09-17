<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Function InitDays(theType, dtStartDate, dtEndDate)
	Set InitDays = objNSNET.GetSchoolEventList(theType, strCurrYearID, dtStartDate, dtEndDate)
End Function

Dim objRs
Dim result
Dim nClassId, nSgId
Dim dtStartDate, dtEndDate
Dim arrProperties, arrColumns

strCurrYearID = obTokenMgr.GetData(strToken, stCurrYear)
dtStartDate = GetSafeNullDate(Request("STARTDATE"))
dtEndDate = GetSafeNullDate(Request("ENDDATE"))

nClassId = GetSafeLng(Request("PCLID"), 0)
strClassID_IUP = GetSafeStr(Request("PCLID_IUP"), -1, "")
nSgId = GetSafeLng(Request("SGID"), 0)

If Not IsDull(strClassID_IUP) And strClassID_IUP <> "-1" And InStr(strClassID_IUP, "_")>0 Then
	ParseIupClassId strClassID_IUP, nClassId, strIupGrade, bIsIupGrade
End If

arrProperties = Array("startDate", "endDate")
arrColumns = Array("STARTTIME", "ENDTIME")

Set result = new JSONResult
Set objRs = InitDays( kHoliday, dtStartDate, dtEndDate)
Call result.AddJsonData("holidays", comHelper.DataSetAdapterHelper.ToJSON(objRs, arrProperties, arrColumns))
TestError "ошибка получения праздников"
	
If nSgId > 0 Then
	Set objRs = objNSNET.GetSubjectGroupVacations(strCurrYearID, nSgId, dtStartDate, dtEndDate)
ElseIf nClassId > 0 Then
	Set objRs = objNSNET.GetClassVacations(nClassId, strCurrYearID, dtStartDate, dtEndDate)
Else
	Set objRs = InitDays( kVacation, dtStartDate, dtEndDate)
End If
Call result.AddJsonData("vacations", comHelper.DataSetAdapterHelper.ToJSON(objRs, arrProperties, arrColumns))

TestError "ошибка получения каникул"
rw result
%>
