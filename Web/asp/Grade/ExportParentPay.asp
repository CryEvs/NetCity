<!-- #INCLUDE VIRTUAL="/asp/headerexcel.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub	onDrawPage()
	Dim strPayTable
	Dim strClassName

	strClassName = GetClassName()
	Response.Write GetPageTitleExcel(obLanguage("Grade","kParentPay"), Array(obLanguage("Common","kClass",strFunctionalityType), strClassName))

	strPayTable = GetSafeStr(obTokenMgr.GetData(strToken, stParentPayTable), -1, Null)
	Response.Write strPayTable

	Response.Write GetPageVerExcel()
End	Sub

Function GetClassName()
	Dim strClassID
	
	strClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrClass), Null)
	If strClassID = "-1" Then
		GetClassName = obLanguage("Grade","kOutDebt")
	Else
		GetClassName = objNSNET.GetClassName(strClassID)
	End If
End Function
%>
