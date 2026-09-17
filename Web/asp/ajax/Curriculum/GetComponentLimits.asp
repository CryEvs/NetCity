<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim objComponentLimits
Dim properties, columns

Set objComponentLimits = objNSNET.GetLimitByComponent(GetSafeLng(Request("CMIN"), 0), strCurrYearID)

TestError Err.Description

properties = Array("gradeid", "componentid", "schoolyearid", "hours", "componentname", "schoolid")
columns = Array("GRADEID", "COMPONENTID", "SCHOOLYEARID", "HOURS", "COMPONENTNAME", "SCHOOLID")
rw comHelper.DataSetAdapterHelper.ToJSON(objComponentLimits, properties, columns, Array("ignoreNullValues"))
%>