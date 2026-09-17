<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim result, strQuery, rsGlobalSubjects, globalSubjects
Dim properties, columns

Call InitializeComponents()
strQuery = GetSafeStr(Request("query"), -1, Null)

Set rsGlobalSubjects = objNSNET.GetGlobalSubjectsByName(strQuery)

TestError Err.Description

properties = Array("id", "name", "abbr")
columns = Array("GLOBALSUBJID", "SUBJNAME", "SUBJABBR")

globalSubjects = comHelper.DataSetAdapterHelper.ToJSON(rsGlobalSubjects, properties, columns, Array("ignoreNullValues"))

Set result = new JSONResult
Call result.AddJsonData("values", globalSubjects)
Response.Write result

Sub InitializeComponents()
End Sub%>