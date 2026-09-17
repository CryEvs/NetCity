<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kSplitter		= "|"
Const kYesSign	= "Y"
Const kNoSign	= "N"

Dim nLinesCnt
Dim strInfArray, strRedir
Dim arrInfo
Dim strStepDir
Dim transaction

Sub ReadState()
	strRedir	= GetSafeStr( Request("REDIR"), -1, "" )
	strInfArray = GetSafeStr( Request("INPINFARRAY"), -1, "" )
	nLinesCnt	= GetSafeLng ( obTokenMgr.GetData(strToken, stLinesCnt), 0 )
	strStepDir = GetSafeID ( Request("STEPDIR"), Null )
End Sub

Sub Main()
	arrInfo = Split( strInfArray, kSplitter, -1, 0 )
End Sub

Sub UpdateFilters()
	Dim i
	Dim strLParenth, strRParenth, strPropertyId, strConstant, strOperationId
	Dim objObjectProps
	Dim strQueryObjectID
	On error resume next
	transaction = objNSNETWork.GetTransaction()

	transaction = objNSNETWork.GetTransaction()

	For i = 0 To nLinesCnt - 1
		If arrInfo( i*6 ) = 0 Then strLParenth = kNoSign Else strLParenth = kYesSign

		strQueryObjectID = null
		If arrInfo( i*6 + 1 ) = "-2" Then
			strConstant = arrInfo( i*6 + 2 )
		ElseIf arrInfo( i*6 + 1 ) > 0 Then
			strQueryObjectID = Clng(arrInfo( i*6 + 1 ))
			if arrInfo( i*6 + 2 ) <> 0 Then
				strPropertyId = arrInfo( i*6 + 2 )
			Else
				Set objObjectProps = objNSNETWork.GetObjectProps_WT(transaction, strQueryObjectID, "AND INFILTER='Y'" )
				strPropertyId = objObjectProps("PROPERTYID")
			End If
			strConstant = null
		Else
			strPropertyId = null
			strConstant = arrInfo( i*6 + 2 )
		End If
		If arrInfo( i*6 + 3 ) = 0 Then strRParenth = kNoSign Else strRParenth = kYesSign

		If i < nLinesCnt - 1 Then
			If arrInfo( i*6 + 5 ) <> 0 Then strOperationId = arrInfo( i*6 + 5 ) Else strOperationId = null
		Else
			strOperationId = null
		End If

		Call objNSNETWork.UpdateExpLine_WT(transaction, Clng( arrInfo( i*6 + 4 ) ), i+1, Array( strLParenth, strConstant, strPropertyId, strRParenth, strOperationId, strQueryObjectID ) )
	Next

	objNSNETWork.CommitTransaction(transaction)
End Sub

Sub MakeRedirect()
	RedirectTo strRedir, Array("STEPDIR", strStepDir, "ISLIST", Request("ISLIST"))
End Sub

Call ReadState()
Call Main()
Call UpdateFilters()
Call MakeRedirect()
%>
