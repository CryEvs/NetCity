<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.
On Error Resume Next

Dim result
Dim arrStudentList
Dim dtStartDate, dtDueDate, strAssignmentId, strAssignmentType, nSgId

nSgId				= GetSafeLng(Request("SGID"), GetSafeLng(obTokenMgr.GetData(strToken, stCurrSubjClass), 0))
strAssignmentId		= GetSafeLng(Request("ASSIGNMENTID"), 0)
dtStartDate			= GetSafeDate(Request("STARTDATE"), Null)
dtDueDate			= GetSafeDate(Request("ENDDATE"), Null)
strAssignmentType	= GetSafeLng(Request("ATYPE"), Null)

Set arrStudentList = objNSNET.GetStudentListForAssignment(nSgId, strAssignmentType, strAssignmentId, dtStartDate, dtDueDate)

TestError Err.Description

Set result = new JSONResult

Call result.AddData("studentList", arrStudentList)

Response.Write result%>