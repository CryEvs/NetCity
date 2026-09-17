<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strPortfolioID
Dim bIsPortfolioExists

Dim arrChanges
Dim i, strGrantedUserID, strUserRight
Dim strFilter, sAction, sClassID
Dim strPortfSchoolID
Dim transaction

If Not bIsDebug Then On Error Resume Next

arrChanges = Split( GetSafeStr( Request.Form("CHNGARR"), -1, "" ), ":" )

sAction = ""
sClassID = ""
strFilter = GetSafeStr(obTokenMgr.GetData(strToken, "PORTFOLIO_AUTH_FILTER"), 10, "")
If strFilter = "H" OR strFilter = "C" Then
	sAction = "C"
	sClassID = CStr(Request("CLASSES"))
End If
strPortfSchoolID = GetSafeID(Request("SCHOOL"), "0")

bIsPortfolioExists = objNSNET.IsPersonalPortfolioExists(strUserID, strPortfolioID )
TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

If bIsPortfolioExists Then

'	objCon.BeginTrans
	transaction = objNSNET.GetTransaction()
	For i = 0 To UBound( arrChanges ) - 1 Step 2
		strGrantedUserID = arrChanges(i)
		If Not IsDull( strGrantedUserID ) Then
			strUserRight = GetSafeLng( arrChanges(i+1), 0 )
			Call objNSNET.SetPersonalPortfolioRight_WT(transaction, strPortfolioID, strGrantedUserID, strUserRight )
		End If
	Next
'	objCon.CommitTrans
    objNSNET.CommitTransaction(transaction)
Else
	GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
End If
RedirectTo "PersonalPortfolioRights.asp", Array("SV","Y", "A",sAction, "CLASSES",sClassID, "SCHOOL",strPortfSchoolID, "FL",strFilter)
%>
