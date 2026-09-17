<!-- #INCLUDE FILE=../headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim nQueryObjID, nPropID

Sub Readstate()
	nQueryObjID = Request("QUERYOBJID")
	nPropID = Request( "OBJPROP" )
End Sub

Function onLoad()
	onLoad = "load();"
End Function

Sub onHead()
%><script><!--
function load()
{
	if( window.opener && !window.opener.closed )
		window.opener.onReload(); //reload opener window
	window.forceClosing = true;
	window.close();
}
//--></script><%
End Sub

Sub Main()
	Call objNSNETWork.AddObjectParam4Props(nQueryObjID, nPropID )
End Sub

%>
