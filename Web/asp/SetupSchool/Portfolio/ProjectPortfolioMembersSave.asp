<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strPortfolioID, strGroupID
Dim bCanEditProjectlPortfolio

Dim arrChanges
Dim i, strGrantedUserID, bIsMember
Dim transaction

If Not bIsDebug Then On Error Resume Next

strPortfolioID = GetSafeID( Request("PFID"), "0" )
strGroupID = GetSafeID( Request("PGRID"), "0" )
arrChanges = Split( GetSafeStr( Request.Form("CHNGARR"), -1, "" ), ":" )

bCanEditProjectlPortfolio = objNSNET.CanEditProjectlPortfolio(strUserID, strPortfolioID )
TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

If bCanEditProjectlPortfolio Then

'	objCon.BeginTrans
	transaction = objNSNET.GetTransaction()

	For i = 0 To UBound( arrChanges ) - 1 Step 2
		strGrantedUserID = arrChanges(i)
		If Not IsDull( strGrantedUserID ) Then
			bIsMember = ( GetSafeLng( arrChanges(i+1), 0 ) = 1 )
			Call objNSNET.SetProjectPortfolioMemberRight(transaction, strPortfolioID, strGroupID, strGrantedUserID, bIsMember )
		End If
	Next

'	objCon.CommitTrans
	objNSNET.CommitTransaction(transaction)
Else
	GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
End If
RedirectTo "ProjectPortfolioMembers.asp", Array("PFID", strPortfolioID,"SV","Y")
%>
