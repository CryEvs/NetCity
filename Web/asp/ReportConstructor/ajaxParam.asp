<!-- #INCLUDE FILE="../headerajax.asp" -->
<!-- #INCLUDE FILE="ReportsGetRecordSet_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.
On Error Resume Next

Dim result, strQuery, rsValues, jsonValues, repType, name
Dim properties, columns
Dim strFilterEMID, strAlias

Set result = new JSONResult

strQuery = GetSafeStr(Request("query"), -1, "")
strQuery = NSReplace( strQuery, "*", "%" )
strQuery = NSReplace( strQuery, "?", "_" )

If NSReplace( NSReplace( strQuery, "_", "" ), "%", "" )<>"" Then

name = GetSafeStr(Request("name"), -1, Null)
repType = GetSafeStr(Request("repType"), -1, "")
SetScriptTimeOut 900

Dim nQueryId, i, strfilter
nQueryId = GetSafeId(Request("nQueryId"), Null)
strParam = "select '*' from dual"
arrQueryParams = GetQueryParams(nQueryId)

If IsDull(strFilterEMID) Then strFilterEMID=strEMID
If bParams Then
	For i=0 To nParamsCnt
		If name="PARAMVAL"&i Then Exit For
	Next
	If Not IsDull(arrQueryParams(kArrParamSqlExpr,i)) Then
		strParam = arrQueryParams(kArrParamSqlExpr,i)
		If InStr(Ucase(strParam), " SCHOOLS ")>0 Then
			strParam = AddFilterParam( repType, strSchoolId, strFilterEMID, strParam )
		End If
		strAlias = arrQueryParams(kArrItemName,i)
	Else
		strParam = arrQueryParams(kArrParamSqlExprGen,i)
		strParam = FilterParam( repType, strSchoolId, strFilterEMID, strParam )
		strAlias = Replace( Replace(arrQueryParams(kArrAlias,i),"}",""),"{","")
	End If
	If repType = "S" And InStr(Ucase(strParam), " SCHOOLS S ")>0 Then
		strParam = ReplaceSchoolsParam( strParam )
	End If
	strParam = NSReplace( strParam, " distinct", " distinct top " & kDefaultMax*5)
	strfilter="where "

	If Instr(Lcase(strParam), "where")>0 Then strfilter="and "

	strfilter = strfilter & strAlias & " like '" & strQuery &"%'"
	strParam = NSReplace( strParam, "ORDER BY", strfilter & " ORDER BY" )
End If

Set rsValues = objNSNET.ExecuteSql( strParam )
TestError Err.Description

properties = Array("id")
columns = Array(rsValues.Fields()(0).Name)

jsonValues = comHelper.DataSetAdapterHelper.ToJSON(rsValues, properties, columns, Array("ignoreNullValues"))
'"[{id:'"& Db2Java(strParam) &"'}]"'
Call result.AddJsonData("values", jsonValues)
End If
Response.Write result

%>