<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFreeQueryObjects( strQueryID, strTable )
	Set GetFreeQueryObjects = objNSNETWork.GetFreeQueryObjects(strQueryID, strTable)
End Function

Function GetObjectProps( strObjectID, arrConditions )
	Dim strSQL, i

	i = 0 : strSQL = ""
	While i <= UBound( arrConditions )
		strSQL = strSQL & " and "& CStr( arrConditions (i) ) & "='" & CStr(arrConditions(i+1)) & "'"
		i = i + 2
	Wend
	Set GetObjectProps = objNSNETWork.GetObjectProps(Clng( strObjectId ), strSql )
End Function

Sub UpdateSortOrders( transaction, nSID )
	on error resume next
	Dim i, arrSIDs, arrProps, arrObjs, arrSDs
	arrSIDs = Split( Request.Form("SORTORDERID"),", ")
	if(Ubound(arrSIDs) < 0) Then Exit Sub
	arrProps = Split( Request.Form("OBJPROPS"),", ")
	arrObjs = Split( Request.Form("QUERYOBJECTS"),", ")
	arrSDs = Split( Request.Form("SD") ,", ")
	Call objNSNETWork.UpdateSortOrders_WT(transaction, nSID, arrSIDs, arrProps, arrObjs, arrSDs)
	TestErrorWithTransaction transaction, Err.description
	If nSID > 0 Then
		For i = 1 To Request.Form("SORTORDERID").Count
			If nSID = CLng(Request.Form("SORTORDERID")(i)) Then
				Call obTokenMgr.SetData ( strToken, "nObjectID", CStr(Request.Form("QUERYOBJECTS")(i)) )
				Exit Sub
			End If
		Next
	End If
End Sub

Sub UpdateQueryFields( transaction, nFID )
	on error resume next
	Dim i, arrFIDs, arrProps, arrObjs, arrFNs, nCnt
	'arrFIDs = Split( Request.Form("FIELDID"),", ")
	nCnt = Request.Form("FN").Count
	if(nCnt < 1) Then Exit Sub
	'stop
	'arrProps = Split( Request.Form("OBJPROPS"),", ")
	'arrObjs = Split( Request.Form("QUERYOBJECTS"),", ")
	Redim arrFNs(nCnt-1)
	Redim arrFIDs(nCnt-1)
	Redim arrProps(nCnt-1)
	Redim arrObjs(nCnt-1)
	For i = 1 To nCnt
		arrFNs(i-1) = Request.Form("FN")(i)
		arrFIDs(i-1) = Request.Form("FIELDID")(i)
		arrProps(i-1) = Request.Form("OBJPROPS")(i)
		arrObjs(i-1) = Request.Form("QUERYOBJECTS")(i)
	Next
	'if(Ubound(arrFNs) < 0) Then arrFNs = Array("")
	Call objNSNETWork.UpdateQueryFields_WT(transaction, nFID, arrFIDs, arrProps, arrObjs, arrFNs)
	TestErrorWithTransaction transaction, Err.description
	If nFID > 0 Then
		For i = 1 To Request.Form("FIELDID").Count
			If nFID = CLng(Request.Form("FIELDID")(i)) Then
				Call obTokenMgr.SetData ( strToken, "nObjectID", CStr(Request.Form("QUERYOBJECTS")(i)) )
				Exit Sub
			End If
		Next
	End If
End Sub

Sub UpdateQueryGroupings( transaction, nGID )
	on error resume next
	Dim i, arrGIDs, arrProps, arrObjs
	arrGIDs = Split( Request.Form("GROUPINGID"),", ")
	if(Ubound(arrGIDs) < 0) Then Exit Sub
	arrProps = Split( Request.Form("OBJPROPS"),", ")
	arrObjs = Split( Request.Form("QUERYOBJECTS"),", ")
	Call objNSNETWork.UpdateGroupings_WT(transaction, nGID, arrGIDs, arrProps, arrObjs)
	TestErrorWithTransaction transaction, Err.description
	If nGID > 0 Then
		For i = 1 To Request.Form("GROUPINGID").Count
			If nGID = CLng(Request.Form("GROUPINGID")(i)) Then
				Call obTokenMgr.SetData ( strToken, "nObjectID", CStr(Request.Form("QUERYOBJECTS")(i)) )
				Exit Sub
			End If
		Next
	End If
End Sub

%>
