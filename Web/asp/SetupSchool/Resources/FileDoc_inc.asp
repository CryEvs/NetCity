<% ' © 2007-2015 IRTech. All rights reserved.
Const kFolderFileExtPic = "/vendor/custom/img/files"

Const kFolderName_SchoolDoc = "SchoolDocuments"

Const kMaxLen_DocGroupName	= 100
Const kMaxLen_DocName		= 200
Const kMaxLen_FileName		= 200
Const kMaxLen_FileName_Orig	= 200
Const kMaxLen_Descr			= 2000

Const kFolderName_Portfolio = "Portfolio"

Const kMaxLen_PortfolioName	= 200
Const kMaxLen_GroupName		= 100
Const kMaxLen_Name			= 200

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
			Case ".doc"		:		strImg = "doc.png"
			Case ".docx"	:		strImg = "docx.png"
			Case ".zip"		:		strImg = "zip.png"
			Case ".rar"		:		strImg = "rar.png"
			Case ".pdf"		:		strImg = "pdf.png"
			Case ".ppt"		:		strImg = "ppt.png"
			Case ".pptx"	:		strImg = "pptx.png"
			Case ".jpg", "jpeg"	:	strImg = "jpg.png"
			Case ".png"		:		strImg = "png.png"
			Case ".pps"		:		strImg = "pps.png"
			Case ".xlsx"	:		strImg = "xlsx.png"

			'Пока используются устаревшие иконки
			Case ".htm", ".html"	 :	strImg = "htm.gif"
			Case ".txt"		:		strImg = "txt.gif"
			Case ".xls"		:		strImg = "xls.gif"
			Case ".rtf"		:		strImg = "rtf.gif"
			Case ".hlp"		:		strImg = "hlp.gif"
			Case ".chm"	:		strImg = "chm.gif"
		End Select
	End If

	GetImgForKnownExt = strImg
End Function%>