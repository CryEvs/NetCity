<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Const kRedirect = "ReportBuildWizardStep9.asp"
Const kSplitter = "|"

Const kArrObjParamID = 0

Dim nQueryId
Dim strResultSql, nReportID, strParamsNotPresent
Dim dtCurrDate

Sub ReadState
	nQueryId = GetSafeLng( obTokenMgr.GetData( strToken, stQueryID ), Null )
	nReportID = GetSafeLng( obTokenMgr.GetData( strToken, stReportID ), Null )
End Sub

Sub TestQuery()
	Dim i
	Dim strParam, strTest, strMakeDate
	Dim objTest, objReportInfo, objParams', objParam
	Dim arrParams
	On Error Resume Next

	strResultSql = objNSNETWork.Republisher.BuildSQL(nQueryId)
	TestError "Build"
	strTest = strResultSql
	Set objReportInfo = objNSNETWork.GetReportInfo(nReportID )
	TestError "Info"
	If objReportInfo("REPTYPE") = "S" Then
		If bIsEducManager Then
			Dim rsSchools
			Set rsSchools = objNSNETWork.GetSchoolList(-strEMID, 0)
			TestError "List"
			If rsSchools.EOF Then GenerateError obLanguage("Constructor","kErrNoSchools")
			strSchoolId = rsSchools("SCHOOLID")
		End If
		strParam = strSchoolId
	Else
		strParam = strEMID
	End If
	strTest = Replace( strTest, "?", strParam, 1, 1 )
	strParamsNotPresent = Null
	strMakeDate = "'1.1."&(Year(NSDate)-1)&"'"
	Set objParams = objNSNETWork.GetParamsList(nQueryId )
	TestError "Params"
	SetScriptTimeOut 900

	If Not objParams.EOF Then
		arrParams = objParams.GetRows(,,Array("PARAMID", "PARAMSQLEXPR", "SQLPARAMEXPR", "PARAMDISPTYPE", "ISDEPEND", "NAME"))

		For i = 0 To Ubound ( arrParams, 2 )
			Select Case GetSafeStr(arrParams(3,i), 1, Null)
			Case "DD"
				strTest = Replace(strTest,"?",strMakeDate,1,2)
				strTest = Replace(strTest,"?","1",1,1)
			Case "B"
				strTest = Replace(strTest,"?",strMakeDate,1,2)
			Case "D"
				strTest = Replace(strTest,"?",strMakeDate,1,1)
			Case "R"
				dtCurrDate = NSNow()
				strTest = Replace(strTest,"?",strMakeDate,1,1)
				strTest = Replace(strTest,"?","1",1,1)
				strTest = Replace(strTest,"?",strMakeDate,1,1)
				strTest = Replace(strTest,"?","1",1,1)
			Case "T"
				dtCurrDate = NSNow()
				strTest = Replace(strTest,"?",strMakeDate,1,2)
			Case Else
				strParam = "0"
				'  отключена проверка правильности построения списка для параметров

				Select Case GetSafeStr(arrParams(3,i), 1, Null)
				Case "I"
					strTest = Replace(strTest,"?",strParam,1,1)
				Case "S", "M", "C", "L"
					strTest = Replace(strTest,"?","'" & strParam & "'",1,1)
				End Select
			End Select
		Next
	End If
	
	Set objTest = objNSNETWork.ExecuteSql ( strTest )'  проверка правильности выполнения основного запроса
	If bIsDebug Then TestError "!"'strTest

	If Err <> 0 Then
		Call obTokenMgr.SetData ( strToken, stPublishError, -Err )
	Else
		Call objNSNETWork.PublishReport(nReportId, nQueryId, strResultSql )
	End If
End Sub

Sub MakeRedirect
	RedirectTo kRedirect, null
End Sub

Call ReadState()
Call TestQuery()
Call MakeRedirect()
%>
