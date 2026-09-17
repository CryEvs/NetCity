<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kSplitter		= "|"

Dim nQueryId, nReportId
Dim strRedir, strInfArray, strCheckArray, strStepDir
Dim arrInfArray, arrCheckArray
Dim transaction

Sub ReadState()
	strStepDir		= GetSafeID( Request("STEPDIR"), 0 )
	nQueryId		= GetSafeLng( obTokenMgr.GetData( strToken, stQueryID ), Null )
	nReportId		= GetSafeLng( obTokenMgr.GetData( strToken, stReportID ), Null )
	strRedir		= GetSafeStr( Request("REDIR"), -1, "" )
	strInfArray		= GetSafeStr( Request("INFARRAY"), -1, "" )
	strInfArray = Left(strInfArray, Len(strInfArray) -1)
	strCheckArray	= GetSafeStr( Request("IDSARRAY"), -1, "" )
	strCheckArray = Left(strCheckArray, Len(strCheckArray) -1)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData( strToken, stPublishError, 0 )
End Sub

Sub Main()
	Dim arrIDs, i
	arrIDs = Split( strInfArray, kSplitter, -1, 0 )

	Redim arrInfArray(1, (Ubound(arrIDs) + 1) / 2 - 1 )
	For i = 0 To Ubound(arrInfArray, 2)
		arrInfArray(0, i) = arrIDs(i * 2)
		arrInfArray(1, i) = arrIDs(i * 2 + 1)
	Next

	arrCheckArray = Split( strCheckArray, kSplitter, -1, 0 )
End Sub

Sub MakeRedirect()
	RedirectTo strRedir, Array( "STEPDIR", strStepDir )
End Sub

Call ReadState()
Call Main()

'objCon.BeginTrans
transaction = objNSNETWork.GetTransaction()

Call objNSNETWork.UpdateQueryParams_WT(transaction, nQueryId, arrInfArray, arrCheckArray )
TestError obLanguage("Common","kUnexpErr")
Call objNSNETWork.UpdateReportSetInEdit_WT(transaction, Clng( strUserId ), nReportId, nQueryId )
TestError obLanguage("Common","kUnexpErr")

'objCon.CommitTrans
objNSNETWork.CommitTransaction(transaction)

Call WriteState()
Call MakeRedirect()
%>
