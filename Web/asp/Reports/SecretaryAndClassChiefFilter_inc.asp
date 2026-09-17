<% ' © 2007-2008 IRTech. All rights reserved.

Const kFilterLen = 9

Const kInd_LastFirst	= 1
Const kInd_Middle		= 2
Const kInd_BirthDate	= 3
Const kInd_Gender		= 4
Const kInd_PersonalNum	= 5
Const kInd_Foreign		= 6
Const kInd_HomeAddress	= 7
Const kInd_Passport		= 8
Const kInd_ParentsInfo	= 9

Const kDefaultReportFilter = "111111101"

Dim strReportFilter
Dim bLastFirst, bMiddle, bBirthDate, bGender, bPersonalNum, bForeign, bHomeAddress, bPassport, bParentsInfo

Sub ReadSecretClassChiefFilter()
	If Not IsDull(Request("ShowMiddle")) Then
		bLastFirst = True 'GetSafeStr(Request("ShowLastFirst"), 1, "0") = "1"
		bMiddle = GetSafeStr(Request("ShowMiddle"), 1, "0") = "1"
		bBirthDate = GetSafeStr(Request("ShowBirthDate"), 1, "0") = "1"
		bGender = GetSafeStr(Request("ShowGender"), 1, "0") = "1"
		bPersonalNum = GetSafeStr(Request("ShowPersonalNum"), 1, "0") = "1"
		bForeign = GetSafeStr(Request("ShowForeign"), 1, "0") = "1"
		bHomeAddress = GetSafeStr(Request("ShowHomeAddress"), 1, "0") = "1"
		bPassport = GetSafeStr(Request("ShowPassport"), 1, "0") = "1"
		bParentsInfo = GetSafeStr(Request("ShowParentsInfo"), 1, "0") = "1"
		strReportFilter = IIf(bLastFirst, "1", "0") & IIf(bMiddle, "1", "0") & IIf(bBirthDate, "1", "0") & IIf(bGender, "1", "0") & _
			IIf(bPersonalNum, "1", "0") & IIf(bForeign, "1", "0") & IIf(bHomeAddress, "1", "0") & IIf(bPassport, "1", "0") & IIf(bParentsInfo, "1", "0")
	Else
		strReportFilter = GetSafeStr(Request("REP_FILTER"), kFilterLen, GetSafeStr(obTokenMgr.GetData(strToken, stSecretClassChiefFilter), kFilterLen, kDefaultReportFilter))
		bLastFirst = True 'Mid(strReportFilter, kInd_LastFirst, 1) = "1"
		bMiddle = Mid(strReportFilter, kInd_Middle, 1) = "1"
		bBirthDate = Mid(strReportFilter, kInd_BirthDate, 1) = "1"
		bGender = Mid(strReportFilter, kInd_Gender, 1) = "1"
		bPersonalNum = Mid(strReportFilter, kInd_PersonalNum, 1) = "1"
		bForeign = Mid(strReportFilter, kInd_Foreign, 1) = "1"
		bHomeAddress = Mid(strReportFilter, kInd_HomeAddress, 1) = "1"
		bPassport = Mid(strReportFilter, kInd_Passport, 1) = "1"
		bParentsInfo = Mid(strReportFilter, kInd_ParentsInfo, 1) = "1"
	End If
End Sub

Sub WriteSecretClassChiefFilter()
	Call obTokenMgr.SetData(strToken, stSecretClassChiefFilter, strReportFilter)
End Sub
%>
