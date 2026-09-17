<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strPortfolioID, strGroupID
Dim bCanEditProjectlPortfolio
Dim bIsResursive

Dim arrChanges
Dim i, strGrantedUserID, strUserRight
Dim strFilter, sAction, sClassID
Dim strPortfSchoolID
Dim transaction

If Not bIsDebug Then On Error Resume Next

strPortfolioID = GetSafeID( Request("PFID"), "0" )
strGroupID = GetSafeID( Request("PGRID"), "0" )
arrChanges = Split( GetSafeStr( Request.Form("CHNGARR"), -1, "" ), ":" )
bIsResursive = ( GetSafeLng( Request("RECS"), 0 ) = 1 )

sAction = ""
sClassID = ""
strFilter = GetSafeStr(obTokenMgr.GetData(strToken, "PORTFOLIO_AUTH_FILTER"), 10, "")
If strFilter = "H" OR strFilter = "C" Then
	sAction = "C"
	sClassID = CStr(Request("CLASSES"))
End If
strPortfSchoolID = GetSafeID(Request("SCHOOL"), "0")

bCanEditProjectlPortfolio = objNSNET.CanEditProjectlPortfolio(strUserID, strPortfolioID )
TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

If bCanEditProjectlPortfolio Then

'	objCon.BeginTrans
	transaction = objNSNET.GetTransaction()

	For i = 0 To UBound( arrChanges ) - 1 Step 2
		strGrantedUserID = arrChanges(i)
		If Not IsDull( strGrantedUserID ) Then
			strUserRight = GetSafeLng( arrChanges(i+1), 0 )
			Call objNSNET.SetProjectPortfolioRight_WT(transaction, strPortfolioID, strGroupID, strGrantedUserID, strUserRight, bIsResursive )
		End If
	Next

'	objCon.CommitTrans
	objNSNET.CommitTransaction(transaction)

Else
	GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
End If
RedirectTo "ProjectPortfolioRights.asp", Array("PFID",strPortfolioID, "PGRID",strGroupID, "SV","Y", "A",sAction, "CLASSES",sClassID, "SCHOOL",strPortfSchoolID, "FL",strFilter)
%>
