<!-- #INCLUDE FILE="../SetupSchool/Photo_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
'страница необходима для отрисовки заголовков формата для печати и экспорта

Const smallTextStyle	= "style=""font-size:8.0pt; font-family:Verdana,Arial,Helvetica; text-align:left;"""

Function GetPageTitlePrint( strPageName, arrPageParams )
	GetPageTitlePrint = GetPageTitlePrintWithUserPhoto(strPageName, null, arrPageParams)
End Function

Function GetCustomPageTitleHeader(strScName, strPageName)
End Function

Function DrawSchoolNameForPageTitlePrint(strScName)
	DrawSchoolNameForPageTitlePrint = "<h5 class=""report-title-school"">" & DB2HTML(strScName) & "</h5><br />"
End Function

Function GetSchoolNameForPageTitlePrint()
	Dim strScName, strPhotoImg
	If Not IsDull(strSchoolName) Then
		strScName = strSchoolName
	ElseIf Not IsDull(strSchoolID) Then 
		strScName = objNSNET.GetSchoolName(strSchoolID)
	Else
		strScName=""
	End If
	If Not IsDull(strScName) Then strScName = DrawSchoolNameForPageTitlePrint(strScName)
	GetSchoolNameForPageTitlePrint = strScName
End Function

Function GetPageTitlePrintWithUserPhoto( strPageName, strUserID, arrPageParams )
	Dim strScName, strPhotoImg

	strScName = GetSchoolNameForPageTitlePrint()
	GetPageTitlePrintWithUserPhoto = GetCustomPageTitleHeader(strScName, strPageName)
	If IsDull(GetPageTitlePrintWithUserPhoto) Then
		GetPageTitlePrintWithUserPhoto = strScName & "<h2 align=""center"" >" & DB2HTML_BR(strPageName) & "</h2><br>"
	End If
	If Not IsArray(arrPageParams) Then Exit Function
	If Not IsDull(strUserID) And PERSON_DATA Then
		Call comHelper.AspHelper.SetIntArrayDataToSession(stValidIDs, Array(strUserID))
		strPhotoImg = GetWrappedPhotoImg(strUserID)
		GetPageTitlePrintWithUserPhoto = GetPageTitlePrintWithUserPhoto & "<table cellspacing='10px'><tr><td>" & strPhotoImg & "</td><td>"
	End If
	GetPageTitlePrintWithUserPhoto = GetPageTitlePrintWithUserPhoto & GetPageParamsStr(arrPageParams)
	If Not IsDull(strUserID) And PERSON_DATA Then GetPageTitlePrintWithUserPhoto = GetPageTitlePrintWithUserPhoto & "</td></tr></table>"
	GetPageTitlePrintWithUserPhoto = GetPageTitlePrintWithUserPhoto & "<br>"
End Function

Function GetPageParamsStr(arrPageParams)
	Dim i, n
	n = UBound(arrPageParams)
	While i <= n
		If Not IsEmpty(arrPageParams(i)) Then GetPageParamsStr = GetPageParamsStr & GetPageParamStr(arrPageParams(i), arrPageParams(i+1))
		i = i + 2
	Wend
End Function

Function GetPageParamStr(strParamName, straPramValue)
	GetPageParamStr = "<span class=""select""><b>" & DB2HTML_BR(strParamName) & ":</b>&nbsp;" & DB2HTML_BR(straPramValue) & "</span><br />"
End Function

' Function GetPageTitlePrint_T( strPageName, arrPageParams )
' Dim n, i
	' GetPageTitlePrint_T = GetSchoolNameForPageTitlePrint()
	' GetPageTitlePrint_T = GetPageTitlePrint_T & _
		' "<h2 align=""center"">" & DB2HTML_BR(strPageName) & "</h2><br>"

	' If Not IsArray(arrPageParams) Then Exit Function
	' n = UBound(arrPageParams)
	' i = 0
	' GetPageTitlePrint_T = GetPageTitlePrint_T & "<table border=""0"">"
	' While i <= n
		' If Not IsEmpty(arrPageParams(i)) Then GetPageTitlePrint_T = GetPageTitlePrint_T &_
			' "<tr><td valign=""top"" class=""body"">" & DB2HTML_BR(arrPageParams(i)) & ":</td><td class=""select"">" & DB2HTML_BR(arrPageParams(i+1)) & "</td></tr>"
		' i = i + 2
	' Wend
	' GetPageTitlePrint_T = GetPageTitlePrint_T & "</table><br>"
' End Function

Function GetPageVerPrint()
	GetPageVerPrint = "<br><span class=""smalltext""><i>"&obLanguage("Common","kStateOn")&" " & NSNow & "</i></span><br />" & _
		"<span class=""smalltext"">© <i>" & NETSCHOOL_PRODUCT_NAME & "</i> " & NETSCHOOL_VERSION & "." & NETSCHOOL_REVISION &"</span><br />"
End Function

Function GetSchoolNameForPageTitleExcel()
	Dim strScName
	If IsDull(strSchoolID) Then strScName="" Else strScName="<tr><td " & smallTextStyle &">" & DB2HTML(objNSNET.GetSchoolName(strSchoolID)) & "</td></tr>"
	GetSchoolNameForPageTitleExcel = strScName
End Function

Function GetPageTitleExcel( strPageName, arrPageParams )
	Dim n, i, strScName
	strScName = GetSchoolNameForPageTitleExcel()
	GetPageTitleExcel = GetCustomPageTitleHeader(strScName, strPageName)
	If IsDull(GetPageTitleExcel) Then
		GetPageTitleExcel = strScName & "<h2 align=""center"" >" & DB2HTML_BR(strPageName) & "</h2><br>"
	End If
	GetPageTitleExcel = GetPageTitleExcel & "<table>"
	If Not IsArray(arrPageParams) Then Exit Function
	n = UBound(arrPageParams)
	i = 0
	While i <= n
		If Not IsEmpty(arrPageParams(i)) Then GetPageTitleExcel = GetPageTitleExcel &_
			"<tr><td style=""text-align:left; font-family:Verdana,Arial,Helvetica; border:none; white-space:nowrap;""><b>" & DB2HTML_BR(arrPageParams(i)) & ":</b>&nbsp;" & DB2HTML_BR(arrPageParams(i+1)) & "</td></tr>"
		i = i + 2
	Wend
	GetPageTitleExcel = GetPageTitleExcel & "<tr><td>&nbsp;</td></tr></table>"
End Function

Function GetPageVerExcel()
	GetPageVerExcel = "<br><span " & smallTextStyle &"><i>"&obLanguage("Common","kStateOn")&" " & NSNow & "</i></span><br />" & _
		"<span " & smallTextStyle &">© <i>" & NETSCHOOL_PRODUCT_NAME & "</i> " & NETSCHOOL_VERSION & "." & NETSCHOOL_REVISION & "</span><br />"
End Function

Function GetWarningExcel( strMsg )
	GetWarningExcel = "<table><tr><td class=""xtl12bwr"">" & DB2HTML_BR(strMsg) & "</td></tr></table>"
End Function

Function GetWarningPrint( strMsg )
	GetWarningPrint = "<h2 align=""center"">" & DB2HTML_BR(strMsg) & "</h2>"
End Function
%>
