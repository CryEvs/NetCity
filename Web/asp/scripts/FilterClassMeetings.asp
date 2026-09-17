<% ' © 2007-2015 IRTech. All rights reserved.

Const kCMDay_LessonName_Delim = " - "
Dim nCMAssCount

Sub ProcessCmName(objRsCMs, bShowLessonName)
	Call comHelper.DataSetAdapterHelper.Numerate(objRsCMs, "DAY", "{0,8:dd.MM.yyyy} ({1})", "{0,8:dd.MM.yyyy}", "DAY_NUMERATED")

	If bShowLessonName Then
		Call comHelper.DataSetAdapterHelper.AddTemplatedColumn(objRsCMs, "CM_NAME", Array("DAY_NUMERATED", "LN"), "{0}" & kCMDay_LessonName_Delim & "{1}")
	Else
		Call comHelper.DataSetAdapterHelper.AddTemplatedColumn(objRsCMs, "CM_NAME", Array("DAY_NUMERATED"), "{0}")
	End If
End Sub

Function GetMeetingName(strDate, strPrevDate, strLessonName)
	GetMeetingName = strDate
	If strDate = strPrevDate Then
		nCMAssCount = nCMAssCount + 1
		GetMeetingName = GetMeetingName & "(" & nCMAssCount & ")"
	Else
		nCMAssCount = 1
	End If

	If Not IsDull(strLessonName) Then
		GetMeetingName = GetMeetingName & kCMDay_LessonName_Delim & DB2HTML(strLessonName)
	End If

	GetMeetingName = GetMeetingName & " "
End Function%>