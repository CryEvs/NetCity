<!-- #INCLUDE FILE="SaveStepsInfo_inc.asp" -->
<!-- #INCLUDE FILE="SaveStep3_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim bDoNothing
Dim arrObjects
Dim transaction 

Sub ReadState()
	Dim nObjIndex, strObjArray

	nReportId = GetSafeLng( obTokenMgr.GetData(strToken, stReportID), Null )
	nQueryId = GetSafeLng( obTokenMgr.GetData(strToken, stQueryID), Null )
	strStepDir = GetSafeID( Request("STEPDIR"), Null )

	nObjIndex = GetSafeLng( Request("ObjIndex"), -1 )
	If nObjIndex = -1 Then
		bDoNothing = True
		Exit Sub
	End If
	bDoNothing = False
	If IsDull(Request("ObjArray")) Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
	If nObjIndex < 1 Or nObjIndex > Request("ObjArray").Count Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If

	strObjArray = GetSafeStr( Request("ObjArray")(nObjIndex), -1, Null ) ' ,ID1,ID2,...,IDN,
	strObjArray = Mid(strObjArray, 2)
	If IsDull(strObjArray) Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
	strObjArray = Left(strObjArray, Len(strObjArray) - 1)
	arrObjects = Split(strObjArray, ",")
End Sub

Sub Main()
	Dim nObjectID
	Dim nMasterID, i
	On Error Resume Next
	transaction = objNSNETWork.GetTransaction()
	If Not bDoNothing Then
		nObjectId = GetSafeID(arrObjects(0), Null)
		nMasterID = objNSNETWork.SaveMasterObject_WT(transaction, nReportId, nQueryId, nObjectId )
		TestErrorWithTransaction transaction, obLanguage("Common","kUnexpErr")
		For i = 1 To UBound(arrObjects)
			nObjectId = GetSafeID(arrObjects(i), Null)
			nMasterID = objNSNETWork.InsertQueryObject_WT(transaction, nQueryId, nObjectID, nMasterID )
			TestErrorWithTransaction transaction, obLanguage("Common","kUnexpErr")
		Next
		Call SetDefaultParameters_WT(transaction)
	End If
	Call UpdateBuildStatus(transaction)

	objNSNETWork.CommitTransaction(transaction)
End Sub

Sub MakeRedirect()
	RedirectTo "ReportBuildWizardStep" & strStepDir & ".asp", Null
End Sub

Call ReadState()
Call Main()
Call MakeRedirect()
%>
