<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClasses.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterClasses_IUP.asp -->

<% ' © 2007-2014 IRTech. All rights reserved.

Dim strAction, dtDelLesson
Dim objClassMeetings
Dim result, arrNames, arrFields
Dim ClassIDList, GradeIDList

Dim i, s

strAction = Request("ACT")
dtDelLesson = Str2Date(Request("dtLesson"))

ClassIDList = "-12321"
GradeIDList = "-12321"

For i = 1 To Request("bxClasses").Count
	s = Request("bxClasses")(i)
	Call ParseIupClassId(s, strClassId, strIupGrade, bIsIupGrade)
	If bIsIupGrade Then
		GradeIDList = GradeIDList & "," & strIupGrade
	Else
		ClassIDList = ClassIDList & "," & strClassId
	End If
Next

TestError obLanguage("Calendar","kMsgErrDelLesson")

Set result = new JSONResult

If strAction = "check" Then

	Set objClassMeetings = objNSNET.CheckForDelLessons(strSchoolID, dtDelLesson, ClassIDList, GradeIDList)
	TestError obLanguage("Calendar","kMsgErrDelLesson")
	
	arrNames = Array("classid", "grade", "class_name", "sg_name", "flg_attendance", "flg_assignments", "flg_results", "flg_link_lesson")
	arrFields = Array("classid", "grade", "class_name", "sg_name", "flg_attendance", "flg_assignments", "flg_results", "flg_link_lesson")

	If objClassMeetings Is Nothing Then
		Call result.AddData("noclassmeetings", True)
	Else
		Call result.AddJsonData("subjectGroups", objClassMeetings.ToJSON(arrNames, arrFields))
	End If

Else 'delete
	Call objNSNET.DeleteLessons(strSchoolID, dtDelLesson, ClassIDList, GradeIDList)
End If

TestError obLanguage("Calendar","kMsgErrDelLesson")

Response.Write result
Response.End
%>