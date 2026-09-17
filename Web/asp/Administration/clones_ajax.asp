<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<% ' © 2007-2015 IRTech. All rights reserved.
'<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
'<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
On Error Resume Next

const isPassSer = "isPassSer"
const isBirthSer = "isBirthSer"
const isMiddleName = "isMiddleName"
const isLastname = "isLastname"

Dim title, objGlobalYears, globalYearID, objMovePeriods, dr, json
Dim viewType, enrollType, userRole, userId
Dim recordsCount, pageCount

	SetScriptTimeOut 900
	Set objGlobalYears = objNSNET.GetGlobalYears(0)
	Dim fiops, isMiddle, isOU, isBD, isOUDOD, isHidden
	Dim movementComponent
	Set movementComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IUserClonesComponent")
	TestError obLanguage("Common","kUnexpErr")
	'stop

	globalYearID = GetSafeLng(objGlobalYears("GLOBALYEARID"), Null)
	'viewType =  GetSafeID(Request("ViewType"), "1")
	'Set objMovePeriods = objNSNET.GetMovePeriodsInfo(strGlobalYearID)
	
	fiops = GetSafeStr(Request("FIOPS"), -1, "")
	userRole = IIF(GetSafe("kRoles","kChildren") = "kChildren", role_Student, IIF(GetSafe("kRoles","kChildren") = "kParents", role_Parent, role_Teacher))
	' If fiops="P" Then
		' isMiddle = CBool(GetSafeLng(Request(isPassSer), 0) =1)
		' If CBool(GetSafeLng(Request(isLastname ), 0) =1) Then fiops = "PF"
	' ElseIf fiops="S" Then
		' isMiddle = CBool(GetSafeLng(Request(isBirthSer), 0) =1)
		' If CBool(GetSafeLng(Request(isLastname & "2"), 0) =1) Then fiops = "SF"
	' ElseIf fiops="POOL" Then
		' isMiddle = CBool(GetSafeLng(Request(isMiddleName & "2"), 0) =1)
	' Else
		' isMiddle = CBool(GetSafeLng(Request(isMiddleName), 0) =1)
	' End If

	' isOU = CBool(GetSafeStr(Request("OU"), -1, "") ="2")
	' isBD = CBool(GetSafeStr(Request("CBY"), -1, "BD") = "BD")
	' isOUDOD = CBool(GetSafeStr(Request("isOUDOD"), -1, "") = "isOUDOD")
	' isHidden = CBool(GetSafeStr(Request("isHidden"), -1, "") = "isHidden")
	' If isOUDOD Then isOU=False
	
	pageCount=-1
	Dim PASS_NUM, PASS_SER
	PASS_NUM = GetSafeStr(Request("PASS_NUM"), -1, "")
	PASS_SER = GetSafeStr(Request("PASS_SER"), -1, "")
	If fiops="P_ERR" Then
		If PASS_NUM = "" And PASS_SER="" Then
			Set dr=movementComponent.GetClonesByPassport(userRole, fiops, Request("jtStartIndex"), Request("jtPageSize"), pageCount, recordsCount)
		Else
			Set dr=movementComponent.GetClonesForPassportSerNum(userRole, PASS_NUM, PASS_SER)
			recordsCount = dr.RecordCount
		End If
	ElseIf fiops="S_ERR" Then
		If PASS_NUM = "" And PASS_SER="" Then
			Set dr=movementComponent.GetClonesBySertif(userRole, fiops, Request("jtStartIndex"), Request("jtPageSize"), pageCount, recordsCount)
		Else
			Set dr=movementComponent.GetClonesForSertifSerNum(userRole, PASS_NUM, PASS_SER)
			recordsCount = dr.RecordCount
		End If
	ElseIf fiops="FI_ERR" Then
		If PASS_NUM = "" And PASS_SER="" Then
			Set dr=movementComponent.GetClonesByFi(userRole, fiops, Request("jtStartIndex"), Request("jtPageSize"), pageCount, recordsCount)
		Else
			Set dr=movementComponent.GetClonesForFi(userRole, PASS_NUM, PASS_SER)
			recordsCount = dr.RecordCount
		End If
	ElseIf fiops="FIO_ERR" Then
		If PASS_NUM = "" And PASS_SER="" Then
			Set dr=movementComponent.GetClonesByFio(userRole, fiops, Request("jtStartIndex"), Request("jtPageSize"), pageCount, recordsCount)
		Else
			Set dr=movementComponent.GetClonesForFio(userRole, PASS_NUM, PASS_SER)
			recordsCount = dr.RecordCount
		End If
	ElseIf fiops="FIOD_ERR" Then
		If PASS_NUM = "" And PASS_SER="" Then
			Set dr=movementComponent.GetClonesByFioBirth(userRole, fiops, Request("jtStartIndex"), Request("jtPageSize"), pageCount, recordsCount)
		Else
			Set dr=movementComponent.GetClonesForFioBirth(userRole, PASS_NUM, PASS_SER)
			recordsCount = dr.RecordCount
		End If
	ElseIf fiops="FID_ERR" Then
		If PASS_NUM = "" And PASS_SER="" Then
			Set dr=movementComponent.GetClonesByFiBirth(userRole, fiops, Request("jtStartIndex"), Request("jtPageSize"), pageCount, recordsCount)
		Else
			Set dr=movementComponent.GetClonesForFiBirth(userRole, PASS_NUM, PASS_SER)
			recordsCount = dr.RecordCount
		End If
	Else
		userId = GetSafeID(Request("UserId"), 0)
		If userId > 0 Then
			Set dr=movementComponent.GetClonesInfo(userRole, userId)
		Else
			userId = GetSafeID(Request("StudentId"), 0)
			Set dr=objNSNET.GetStudentMovmentInfo(userId)
		End If
		recordsCount = dr.RecordCount
	End If
	'Set dr=movementComponent.GetUserClones(globalYearID, fiops, isBD, isMiddle, isOU, isOUDOD, isHidden)
	' If viewType = "1" Then
		' Set dr = movementComponent.GetNegativeRanges(strGlobalYearID)
	' ElseIf viewType = "2" Then
		' Set dr = movementComponent.GetIntersectRanges(strGlobalYearID)
	' Else
		' enrollType = GetSafeLng(Request("EnrollType"),0)
		' Set dr = movementComponent.GetDifferenceRanges(strGlobalYearID, enrollType)
	' End If

Function GetData(rs)
	Dim properties, columns
	properties = Null 'Array("PASS_NUM")
	columns =Null 'Array("PASS_NUM") 'Array("PASS_SER","PASS_num","PASS_DATE","PASS_INFO","STUDENTID","NickName","BIRTHDATE","bser","bnum","bdt","borg")
	GetData = comHelper.DataSetAdapterHelper.ToJSON(rs, properties, columns, Null)
End Function
'If Not HasUserRight(arJournalEditAll) And Not HasUserRight(arJournalEditSelf) Then GenerateError obLanguage("Common","kErrPageAccess")
' Function hasUserRightsOnPage()
	' hasUserRightsOnPage = objNSNET.IsAdminOfServer(strUserID) 
' End Function

'Call objNSNET.HideSchool(Request("sch"), act)
If Err.number = 0 Then
	json = "{""Result"" : ""OK"", ""Records"": "&  GetData(dr) & ", ""TotalRecordCount"": "&recordsCount&"}"
End If

If Err.number <> 0 Then
	json = "{""Result"" : ""ERROR"", ""Message"": """ & Err.Description & """ }"
End If

'Call result.AddData("act", act)
Response.Write json
%>
