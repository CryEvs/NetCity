<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

'--------- Page Parameters -------
'	AT=<Access Token>

Dim strPortfolioID
Dim bCanEditProjectlPortfolio

Dim arrChanges
Dim i, strGrantedUserID, bIsLeader
Dim objRS, bListSet, bSelfLook, bSelfClearLeaderRight
Dim transaction

If Not bIsDebug Then On Error Resume Next

strPortfolioID = GetSafeID( Request("PFID"), "0" )
arrChanges = Split( GetSafeStr( Request.Form("CHNGARR"), -1, "" ), ":" )

bCanEditProjectlPortfolio = objNSNET.CanEditProjectlPortfolio(strUserID, strPortfolioID )
TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

bSelfLook = False
bSelfClearLeaderRight = False
If bCanEditProjectlPortfolio Then

'	objCon.BeginTrans
	transaction = objNSNET.GetTransaction()

	For i = 0 To UBound( arrChanges ) - 1 Step 2
		strGrantedUserID = arrChanges(i)
		If Not IsDull( strGrantedUserID ) Then
			bIsLeader = ( GetSafeLng( arrChanges(i+1), 0 ) = 1 )
			Call objNSNET.SetProjectPortfolioLeaderRight_WT(transaction, strPortfolioID, strGrantedUserID, bIsLeader )

			If Not bSelfLook Then
				If strGrantedUserID = strUserID Then
					bSelfLook = True
					bSelfClearLeaderRight = Not bIsLeader
				End If
			End If
		End If
	Next

	Set objRS = objNSNET.GetProjectPortfolioLeadersList_WT(transaction, "G", strPortfolioID, strSchoolYearID)
	bListSet = Not objRS Is Nothing
	If bListSet Then bListSet = Not objRS.EOF
	If Not bListSet Then GenerateErrorWithTransaction transaction,obLanguage("SetupSchoolPortfolio","kErrorProjectCanHasLeader")

'	objCon.CommitTrans
	objNSNET.CommitTransaction(transaction)

Else
	GenerateError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")
End If

If bSelfClearLeaderRight Then
	RedirectTo "ProjectPortfolios.asp", Array("PFID",0,"PGRID",0)
Else
	RedirectTo "ProjectPortfolioLeaders.asp", Array("PFID",strPortfolioID, "SV","Y")
End If
%>
