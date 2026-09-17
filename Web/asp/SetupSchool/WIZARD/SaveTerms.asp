<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim arrTerms, nCount, i, j
Dim strTerm, arrTermInfo
Dim strTermTypeIndex, strTermID

If Not HasUserRight(arCreateEditTerm) Then GenerateError obLanguage("Common","kErrPageAccess")

nCount = Request.Form("TERM").Count
If nCount > 0 Then
	ReDim arrTerms(2, nCount - 1)
	' (0, j) - TermID, (1, j) - StartDate, (2, j) - EndDate
	For i = 1 To nCount
		strTerm = Request.Form("TERM")(i)
		arrTermInfo = Split(strTerm, ",", 2)
		If Ubound(arrTermInfo) <> 1 Then GenerateError obLanguage("SetupSchoolCalendar","kErrEditTerms")
		strTermTypeIndex = arrTermInfo(0)
		strTermID = GetSafeID(arrTermInfo(1), Null)
		j = i - 1
		arrTerms(0, j) = strTermID
		arrTerms(1, j) = GetSafeDate(Request("SDT" & strTermTypeIndex), NULL)
		arrTerms(2, j) = GetSafeDate(Request("EDT" & strTermTypeIndex), NULL)
	Next
	Call objNSNET.SaveTermsInfo(arrTerms)
End If

RedirectTo "Terms.asp?", Null
%>
