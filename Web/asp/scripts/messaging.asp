<% ' © 2007-2011 IRTech. All rights reserved.

Const kSubjectLength = 150
Const kAttachNameLength = 150
Const kSaveDraftFlag = "DRAFT"

Function GetGlbName_Ex(cName, strFT)
	If Not bIsDebug Then On Error Resume Next
	select case cName
		case "U"		GetGlbName_Ex = obLanguage("Common","kToUsers")
		case "S"		GetGlbName_Ex = obLanguage("Common","kToStaff")
		case "T"		GetGlbName_Ex = obLanguage("Messages","kToTeachers",strFT)
		case "P"		GetGlbName_Ex = obLanguage("Messages","kToPrincipals",strFT)
		case "A"		GetGlbName_Ex = obLanguage("Common","kToAdministration")
		case "D"		GetGlbName_Ex = obLanguage("Messages","kToStudents",strFT)
		case "R"		GetGlbName_Ex = obLanguage("Common","kToParents")
		case "C"		GetGlbName_Ex = obLanguage("Messages","kToClasses",strFT)
		case "H"		GetGlbName_Ex = obLanguage("Messages","kToTeacherClasses",strFT)
		case "B"		GetGlbName_Ex = obLanguage("Common","kToEMAdmin")
		case "F"		GetGlbName_Ex = obLanguage("Common","kToEMHead")
		case "G"		GetGlbName_Ex = obLanguage("Common","kToEMSpecialist")
		case "O"		GetGlbName_Ex = obLanguage("ServAdmin","kToOPREM")
		case "K"		GetGlbName_Ex = obLanguage("ServAdmin","kToCRDOD")
		case else		GetGlbName_Ex = ""
	end select
End Function

Function GetGlbName(cName)
	GetGlbName = GetGlbName_Ex(cName, strFunctionalityType)
End Function

Function ConvertText( strDB )
	If Not bIsDebug Then On Error Resume Next
	Dim strNormStr, i, ch, nSize, nPos, nPos1
	strDB = Server.HTMLEncode(strDB)
	strNormStr = Replace(strDB, CHR(10), "<BR>")
	strNormStr = Replace(strNormStr, "  ", " &nbsp;")
	strNormStr = Replace(strNormStr, "&nbsp; ", "&nbsp;&nbsp;")
	if Len(strNormStr) = 0 then ConvertText = "&nbsp;" else ConvertText = strNormStr
End Function

Function GetHeader(rsMsg)
	If Not bIsDebug Then On Error Resume Next
	Dim sTmp
	sTmp = chr(10) & chr(10) & "-----"&obLanguage("Messages","kOriginalMessageText")&"-----" & chr(10) & _
		obLanguage("Messages","kFromWhom")&": " & MakeStringOfSafeLength(GetSafeStr(rsMsg("FROMname"), -1, ""), kDisplayNameLen) & chr(10) &_
		obLanguage("Messages","kPosted")&": " & Date2Str(rsMsg("SENT") ) &"	"& Time2Str(rsMsg("SENT")) & chr(10) & _
		obLanguage("Messages","kWhom")&": " & rsMsg("SENTTO") & chr(10)
	If not IsNull(rsMsg("SENTCC")) Then sTmp = sTmp & obLanguage("Messages","kCopy")&": " & rsMsg("SENTCC") & chr(10)
	GetHeader = sTmp & chr(10)
End function

Function MakeStringOfSafeLength(strIn, nMaxLen)
	If Len(strIn) > nMaxLen Then
		MakeStringOfSafeLength = Left(strIn, nMaxLen - 3) & "..."
	Else
		MakeStringOfSafeLength = strIn
	End If
End Function
%>
