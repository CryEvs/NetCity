<!-- #INCLUDE FILE=../headernoscreen_YearNo.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim bNew
Dim strLAId, strName, strDescr

Sub ReadState()
	strLAId = GetSafeStr( Request("LAID"), -1, "" )
	bNew = Cbool( strLaid = "" )
	strName = GetSafeStr( Request("NAME"), -1, null )
	strDescr = GetSafeStr( Request("DESCR"), -1, "" )
End Sub

Sub Main()
	Dim strSql
	Dim objCmdLa, objCmdLaName, objLaName
	Dim uniID

	On Error Resume Next
	uniID = objNSNET.GenerateGUID()
	
	On Error Resume Next
	
	Set objLaName = objLa.GetProductsByNameExcludeId(strLAId, strName)
	If Not objLaName.EOF Then GenerateError( obLanguage("LearnApp","kServErrLaExists") )
	If bNew Then
		Call objLa.AppendProduct(uniID, strName, "1", strDescr)
	Else
		Call objLa.UpdateProduct(strLAId, strName, strDescr)
	End If
	Call objNSNET.CreateLACourse(uniID)
	TestError obLanguage("LearnApp","kServErrCantSave")
End Sub

Sub MakeRedirect()
	Call obTokenMgr.SetData( strToken, stCommonAlert, CStr(obLanguage("LearnApp","kChangesSaved")))
	RedirectTo "LAList.asp", Null
End Sub

Call ReadState()
Call Main()
Call MakeRedirect()
%>
