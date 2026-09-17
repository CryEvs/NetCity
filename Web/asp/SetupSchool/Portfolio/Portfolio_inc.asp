
<% ' © 2007-2008 IRTech. All rights reserved.
Const kFolderName_Portfolio = "Portfolio"

Const kMaxLen_PortfolioName	= 200
Const kMaxLen_GroupName		= 100
Const kMaxLen_Name			= 200
Const kMaxLen_FileName		= 200
Const kMaxLen_FileName_Orig	= 200
Const kMaxLen_Descr			= 2000

Const kResourceTypeLink 	= 1
Const kResourceTypeDocument = 2

Const kAccessTypeNone 		= 0
Const kAccessTypeRead 		= 1
Const kAccessTypeWrite 		= 2

Const kAction_NewDoc		= "newdoc"

Function GetImgForKnownExt(strFileName)
	Dim strImg, nPos
	strImg = ""
	
	nPos = InStrRev(strFileName, ".")
	If nPos > 0 Then
		Select Case LCase(Mid(strFileName, nPos))
			Case ".doc"		:		strImg = "doc.gif"
			Case ".htm", ".html"	 :	strImg = "htm.gif"
			Case ".ppt", ".pps"	:	strImg = "ppt.gif"
			Case ".txt"		:		strImg = "txt.gif"
			Case ".xls"		:		strImg = "xls.gif"
			Case ".zip"		:		strImg = "zip.gif"
			Case ".rar"		:		strImg = "rar.gif"
			Case ".pdf"		:		strImg = "pdf.gif"
			Case ".rtf"		:		strImg = "rtf.gif"
			Case ".hlp"		:		strImg = "hlp.gif"
			Case ".chm"	:		strImg = "chm.gif"
		End Select
	End If
	GetImgForKnownExt = strImg
End Function
%>
