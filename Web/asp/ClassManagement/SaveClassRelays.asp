<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim nTermsCount, nClassCount
Dim strClassID, strTermID, strRelay
Dim arrData, i, j, k
Dim nTermTypeID, nWizard

If Not HasUserRight(arClassMgmCreateClass) Then GenerateError obLanguage("Common","kErrPageAccess")

nTermTypeID = GetSafeID(Request("TTID"), Null)
nWizard = GetSafeLng(Request("NWizard"), Null)
nTermsCount = GetSafeLng(Request("TermsCount"), Null)
nClassCount = GetSafeLng(Request("ClassCount"), Null)

ReDim arrData(2, nTermsCount * nClassCount - 1)

k = 1
For i = 1 To nClassCount
	strClassID = GetSafeID(Request("CLASSID")(i), Null)
	For j = 1 To nTermsCount
		strTermID = GetSafeID(Request("TERMID")(j), Null)
		strRelay = GetSafeID(Request("Relay")(k), Null)
		arrData(0, k - 1) = strClassID
		arrData(1, k - 1) = strTermID
		arrData(2, k - 1) = strRelay
		k = k + 1
	Next
Next

On Error Resume Next
Call objNSNET.UpdateClassRelays(arrData)
TestError obLanguage("ClassManagement","kErrUpdateClassRelays") & obLanguage("Common","kClass_es",strFunctionalityType)

Call WriteJsonResult(obLanguage("Common","kDataSaved"), False, 0)
%>
