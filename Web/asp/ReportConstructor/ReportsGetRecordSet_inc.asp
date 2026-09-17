<% ' © 2007-2017 IRTech. All rights reserved.
Const kDefaultMax		= 200
Const kDefaultMin		= 50
Const adVarChar	= 200
Const adInteger	= 3
Const adDate	= 7

Const kArrParamID		= 0
Const kArrDispName		= 1
Const kArrItemName		= 2
Const kArrName			= 3
Const kArrParamDispType	= 4
Const kArrParamSqlExpr	= 5
Const kArrParamSqlExprGen	= 6
Const kArrAlias	= 7

Dim arrQueryParams, strParam, nParamsCnt, bParams

Function GetQueryParams(nQueryId)
	Dim objQueryParams
	Set objQueryParams = objNSNETWork.GetParamsList(nQueryId )
	If Not objQueryParams.EOF Then
		GetQueryParams = objQueryParams.GetRows(,,Array("PARAMID","DISPLAYNAME","ITEMNAME", "NAME", "PARAMDISPTYPE", "PARAMSQLEXPR", "SQLPARAMEXPR", "ALIAS"))
		bParams = True
		nParamsCnt = Ubound( GetQueryParams, 2 )
	Else
		bParams = False
	End If
End Function

Function AddFilterParam( repType, strSchoolId, strFilterEMID, strParam )
	Dim filter
	If Instr(Ucase(strParam), "WHERE")>0 Then
		filter = " AND "
	Else
		filter = " WHERE "
	End If
	If repType = "S" Then
		filter = filter &"S.SCHOOLID=" & strSchoolId
	Else
		If filter = " WHERE " Then
			filter = "join EM_SCHOOLS_ALL EMS on EMS.SCHOOLID=S.SCHOOLID WHERE "
		Else
			strParam = NSReplace( strParam, "WHERE", "join EM_SCHOOLS_ALL EMS on EMS.SCHOOLID=S.SCHOOLID WHERE" )
		End If
		filter = filter &"EMS.EMID=" & strFilterEMID
	End If
	AddFilterParam = NSReplace( strParam, "ORDER BY", filter & " ORDER BY" )

End Function

Function FilterParam( repType, strSchoolId, strFilterEMID, strParam )
	If IsDull(strParam) Then
		FilterParam = "select '*'"
	ElseIf repType = "S" Then
		FilterParam = NSReplace( strParam, "SCHOOLID=?", "SCHOOLID=" & strSchoolId )
	Else
		FilterParam = NSReplace( strParam, "EMID=?", "EMID=" & strFilterEMID )
	End If
End Function

Function ReplaceSchoolsParam( strParam )
'		strParam = comHelper.StringHelper.NSReplace( strParam, "EM_SCHOOLS_ALL E join SCHOOLS S on S.SCHOOLID=E.SCHOOLID( and (S.)?FUNCTYPEID=\d)?", " SCHOOLS S ", true )
	strParam = NSReplace( strParam, "EM_SCHOOLS_ALL E join SCHOOLS S on S.SCHOOLID=E.SCHOOLID and FUNCTYPEID=1", " SCHOOLS S " )
	strParam = NSReplace( strParam, "EM_SCHOOLS_ALL E join SCHOOLS S on S.SCHOOLID=E.SCHOOLID and FUNCTYPEID=2", " SCHOOLS S " )
	strParam = NSReplace( strParam, "EM_SCHOOLS_ALL E join SCHOOLS S on S.SCHOOLID=E.SCHOOLID and FUNCTYPEID=3", " SCHOOLS S " )
	strParam = NSReplace( strParam, "EM_SCHOOLS_ALL E join SCHOOLS S on S.SCHOOLID=E.SCHOOLID", " SCHOOLS S " )
	ReplaceSchoolsParam = strParam
End Function

'Количество элементов в массивах arrParamValueID и arrParamTypes должно совпадать
Function GetReportRecordSet( strQueryId, arrParamValueID, arrParamTypes )
	Dim objCmd, i, n, nType, objCon
	Dim arrRsParams

	If IsArray(arrParamValueID) Then n = UBound(arrParamValueID) Else n = -1
	ReDim arrRsParams(n + 1)
	arrRsParams(0) = CLng(IIF(objReportInfo("REPTYPE")="S",strSchoolId,strFilterEMID))

	If IsArray(arrParamValueID) And IsArray(arrParamTypes) Then
		n = UBound(arrParamValueID)
		For i = 0 To n
			Select Case GetSafeStr(arrParamTypes(i), -1, "")
				Case kParamString
					nType = adVarChar
					arrParamValueID(i) = Trim(arrParamValueID(i))
				Case kParamInteger
					nType = adInteger
					arrParamValueID(i) = GetSafeLng(arrParamValueID(i), 0)
				Case kParamDate
					nType = adDate
					arrParamValueID(i) =Str2Date(arrParamValueID(i))
				Case Else
					nType = adVarChar
			End Select
			arrRsParams(i + 1) = arrParamValueID(i)
'			arrRsParams(1, i + 1) = nType
		Next
	End If

	If bUseArc Then SetArchConnection
	Set GetReportRecordSet = objNSNET.ExecuteQuerySql(strQueryId, arrRsParams)

	SetWorkConnection ' ???
End Function
%>
