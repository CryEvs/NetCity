<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/EoNames_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
On Error Resume Next

Dim result, objMovEOS, arrMovEOS
Dim nDocType, nSchoolId, i, nFuncType, nStep

nDocType = GetSafeLng(Request("docType"), -1)
nStep = GetSafeLng(Request("step"), -1)
nFuncType = GetSafeLng(Request("funcType"), strFunctionalityType)
nSchoolId = GetSafeLng(Request("schoolId"), strSchoolId)


Set result = new JSONResult

If nFuncType = FuncType_AddSchool Then
	Response.Write result
	Response.End
End If

Set	objMovEOS =	objNSNET.GetFilteredMoveEOSWithDestTypes(nFuncType, nSchoolId, nDocType, nStep, EXCLUDE_SOME_UDODS)
TestError Err.Description
arrMovEOS = objMovEOS.GetRows(,,Array("EOID", "EONAME", "EOLEGALFORMID", "EOTYPEID", "EOFORMID", "OUTSIDETYPE", "EOLEGALFORM83ID"))
Do While i <= UBound(arrMovEOS, 2)
	arrMovEOS(1, i) = GetEONAME(arrMovEOS( 1, i ), arrMovEOS( 2, i ), GetSafeLng(arrMovEOS( 6, i ), 0), arrMovEOS( 3, i ), arrMovEOS( 4, i ), True)
	i = i + 1 
Loop
TestError Err.Description


Call result.AddData("list", comHelper.ArrayHelper.ToJagged(arrMovEOS,1))
Response.Write result
%>