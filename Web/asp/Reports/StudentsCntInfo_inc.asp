<!-- #INCLUDE VIRTUAL="/asp/Reports/StudentsCntInfoCmn_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim strSchoolNum, strCurrYearName
Dim strSchoolPrincipal
Dim strSchoolFullName

Sub specialRead()
	Call InitEmFilters()
	SetScriptTimeOut 900

	ReadSingleDate
	strCurrYearName = obTokenMgr.GetData(strToken, "CurrYearName")
End Sub

Sub specialMain()
	Dim objSchoolInfo
	Dim i, j

	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	If objSchoolInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
	strSchoolNum = GetSafeStr(objSchoolInfo("SCHOOLNUMBER"), -1, "")
	strSchoolFullName = GetSafeStr(objSchoolInfo("FULLSCHOOLNAME"), -1, "")

	nSchoolsCnt = 1
	ReDim arrStudCnt(35, 0)
	For i = 0 To UBound(arrStudCnt, 1)
		arrStudCnt(i, 0) = 0
	Next

	ReDim arrStudCntTotals(35)
	For i = 0 To UBound(arrStudCntTotals)
		arrStudCntTotals(i) = 0
	Next

	ReDim arrSchoolNums(0)
	arrSchoolNums(0) = strSchoolNum

	Call GetParamsInfo()
	Call GetReportData(strCurrYearID, 0)
	Call CalcTotals()

	strSchoolPrincipal = objNSNET.GetSchoolInfoParamValue(strSchoolId, "T00fio1") 
End Sub

Function GetBottom()
	GetBottom = "<div class=""normaltext""><br>" & obLanguage("SetupSchoolUI","kOUDirector",strFunctionalityType) & "&nbsp;&nbsp;<b>" & strSchoolPrincipal & "</b><br><br>Главный бухгалтер</div><br>"
End Function
%>
