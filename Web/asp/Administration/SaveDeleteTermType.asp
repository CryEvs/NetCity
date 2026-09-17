<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim cntDel, arrData, j
Dim strTermTypeName, nTermsCount, bOk, strAction

If Not objNSNET.IsAdminOfServer(strUserID) Then GenerateError obLanguage("Common","kErrPageAccess")

strAction = GetSafeStr(Request("ACT"),-1,"") 

Select Case strAction
Case "delete"
	cntDel = Request("delItem").Count
	If cntDel > 0 Then
		ReDim arrData(cntDel-1)
		For j=1 To cntDel
			arrData(j-1) = GetSafeID(Request("delItem")(j), NULL)
		Next
		Call objNSNET.RemoveTermTypes(arrData)
		TestError obLanguage("SetupSchoolCalendar","kErrDeleteTermType")
	End If
Case "save"
	cntDel = Request("kYesNo").Count
	If cntDel > 0 Then
		ReDim arrData(1,cntDel-1)
		For j=1 To cntDel
			arrData(0,j-1) = GetSafeID(Request("TERMTYPEID")(j), NULL)
			arrData(1,j-1) = GetSafeStr(Request("kYesNo")(j),1, NULL)
		Next
		Call objNSNET.UpdateTermTypes(arrData)
		TestError obLanguage("SetupSchoolCalendar","kErrDeleteTermType")
	End If
Case Else
		' create new
		strTermTypeName = Trim(GetSafeStr(Request("TermTypeName"), 30, Null))
		nTermsCount = GetSafeLng(Request("TermsCount"), Null)

		bOk = objNSNET.CreateTermType(strTermTypeName, nTermsCount)
		TestError obLanguage("SetupSchoolCalendar","kErrCreateTermType")
		If Not bOk Then GenerateError obLanguage("SetupSchoolCalendar","kErrExistTermTypes")
End Select

RedirectTo "Refs.asp",  Array("ParamID", kTemTypeID)
%>
