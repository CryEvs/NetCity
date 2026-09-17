<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<% ' © 2007-2011 IRTech. All rights reserved.
	If objNSNET.IsWorkinginSchool(GetSafeLng(Request("EditSchoolID"), Null)) Then rw obLanguage("ServAdmin","kCantRemoveSchool_InUse")
%>