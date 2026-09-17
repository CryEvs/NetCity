<!-- #INCLUDE FILE=../headerprint.asp -->

<% ' © 2007-2012 IRTech. All rights reserved.
Const kStrElemCount		= 6

Const indLParenth		= 0
Const indFunctionId		= 1
Const indObjectName		= 2
Const indPropOrConst	= 3
Const indRParenth		= 4
Const indOperation		= 5
Const indQueryObj		= 6

Const kYesSign	= "Y"
Const kNoSign	= "N"
Const kSplitter = "|"

Dim nQueryId, nExpressionId, nExpLines, nFieldOrder
Dim strExpName, strSelArr, strLParenth, strRParenth, strFunctionId, strOperationId, strPropertyId, strConstant, strQueryObjID
Dim objExpressionId
Dim arrInfo

Sub Readstate()
	nExpressionId	= GetSafeID(Request("EXPID"), Null)
	nQueryId		= GetSafeID(obTokenMgr.GetData(strToken, stQueryId), Null)
	nExplines		= GetSafeLng ( Request("NSTR"), 0 )
	nFieldOrder		= GetSafeLng ( obTokenMgr.GetData(strToken, stFieldOrder), 0 )
	strExpName		= GetSafeStr( Request("NAME"), -1, "" )
	strSelArr		= GetSafeStr( Request("ARR"), -1, "" )
End Sub

Sub Main()
	arrInfo = Split( strSelArr, kSplitter, -1, 0 )
	Call objNSNETWork.UpdateExplines(nExpressionId, nQueryId, nExplines, nFieldOrder, strExpName, arrInfo )
End Sub

Sub WriteState()
	Call obTokenMgr.SetData ( strToken, stExpressionId, nExpressionId )
End Sub

Function onLoad()
	onLoad = "load();"
End Function

Sub onHead()
%><script><!--
function load()
{
	if ( window.opener && !window.opener.closed )
		window.opener.onReload(); //reload opener window
	window.forceClosing = true;
	window.close();
}
//--></script><%
End Sub
%>
