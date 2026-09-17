<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->
<!-- #INCLUDE FILE="em_inc.asp" -->

<% ' © 2007-2010 IRTech. All rights reserved.

Dim nAccessMonth

If Not HasUserRight(arEMDouPayNormEdit) Then GenerateError obLanguage("Common","kErrPageAccess")

nAccessMonth = GetSafeLng(Request("AccessMonth"), Null)

On Error Resume Next
Call objNSNET.SaveParentPayAccessMonth(strEMID, nAccessMonth)
TestError obLanguage("EM","kCantSaveParentPayAccess")

Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("EM","kSaveParentPayAccessWasSaved")))
RedirectTo "DOUPay.asp?", Null
%>
