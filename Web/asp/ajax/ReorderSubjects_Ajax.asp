<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim result

Call objNSNET.ReorderSubjects(Request("ids"))
TestError err.description
Set result = new JSONResult

Response.Write result%>