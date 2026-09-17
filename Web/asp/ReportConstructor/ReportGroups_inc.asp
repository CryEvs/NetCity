<% ' © 2007-2011 IRTech. All rights reserved.

Function GetReportGroups()
	Dim strGr_SchoolID, strGr_EMID

	strGr_SchoolID = "0"
	strGr_EMID = "0"
	If bIsEducManager Then strGr_EMID = strEMID Else strGr_SchoolID = strSchoolID
	Set GetReportGroups = objNSNETWork.GetReportGroups(strGr_SchoolID, strGr_EMID)
End Function
%>
