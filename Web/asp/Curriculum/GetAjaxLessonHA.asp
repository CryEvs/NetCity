<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Administration/JSON_2.0.2.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim nLessonID
Dim objLHomeAssignments, arrLHomeAssignments

nLessonID = GetSafeLng(Request("LESSONID"),Null)

Set objLHomeAssignments = objNSNET.GetLessonHomeAssignment(nLessonID)
If Not IsDull(objLHomeAssignments("HOMEASSIGNMENT")) Then
	arrLHomeAssignments = objLHomeAssignments.GetRows(,,Array("HOMEASSIGNMENT", "HA_ATTACHMENTID", "DESCRIPTION", "AFILENAME", "CLSRELATED", "LESSONNAME"))
	Response.Write toJSON(arrLHomeAssignments)
Else
	Response.Write "null"
End If
%>
