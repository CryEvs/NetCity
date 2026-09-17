<% ' © 2007-2015 IRTech. All rights reserved.

Function GetEONAME(strEOName, nEOLegalFormID, nEOLegalForm83ID, nEOTypeID, nEOFormID, bFull)
	If Not bFull Then GetEONAME = strEOName : Exit Function
	Dim strTmp

	select case nEOLegalFormID
	case 3: strTmp = obLanguage("Populate","kLetterM")
	case 4: strTmp = obLanguage("Populate","kLetterN")
	case 5: strTmp = obLanguage("Populate","kLetterN")
	case Else
		strTmp = obLanguage("Populate","kLetterG")
	end select

	select case nEOLegalForm83ID
		case 1: strTmp =strTmp&"А"
		case 2: strTmp = strTmp&"Б"
		case 3: strTmp = strTmp&"К"
	end select

	select case nEOTypeID
	case 1: strTmp=strTmp&obLanguage("Populate","kDOO")
	case 3: strTmp=strTmp&obLanguage("Populate","kODO")
		select case nEOFormID
		case 10: strTmp=strTmp & " " & obLanguage("Populate","kCenter")
		case 11: strTmp=strTmp & " " & obLanguage("Populate","kPalace")
		case 12: strTmp=strTmp & " " & obLanguage("Populate","kHouse")
		case 13: strTmp=strTmp & " " & obLanguage("Populate","kClub")
		case 14: strTmp=strTmp & " " & obLanguage("Populate","kStation")
		case 15: strTmp=strTmp & " " & obLanguage("Populate","kSchool")
		case 16: strTmp=strTmp & " " & obLanguage("Populate","kDOOL")

		end select
	case 4: strTmp=strTmp & obLanguage("Populate","kMUK")
	case 6: strTmp=strTmp & obLanguage("Populate","kOO")
		select case nEOFormID
		case 25: strTmp=strTmp & " " & obLanguage("Populate","kGymnasium")
		case 26: strTmp=strTmp & " " & obLanguage("Populate","kLyceum")
		case else
			strTmp=strTmp & " " & obLanguage("Populate","kSchool")
		end select
		strTmp=strTmp & obLanguage("Populate","kInternat")
	case 8:
		select case nEOFormID
		case 30: strTmp=strTmp & obLanguage("Populate","kVSSH")
		case 31: strTmp=strTmp & obLanguage("Populate","kOSSH")
		case 32: strTmp=strTmp & obLanguage("Populate","kCO")
		case 33: strTmp=strTmp & obLanguage("Populate","kVSHITUVTK")
		end select
	case 9: strTmp=strTmp & obLanguage("Populate","kLetterC")
	case 10: strTmp=strTmp & obLanguage("Populate","kSUVU")
	case 11: strTmp=strTmp & obLanguage("Populate","kSKOO")
	case 12: strTmp=strTmp & obLanguage("Populate","kUDS")
	case 13: strTmp=strTmp & obLanguage("Populate","kOOOSan")
	case 14, 15: strTmp=strTmp & obLanguage("Populate","kUNPO")
	case 16: strTmp=strTmp & obLanguage("Populate","kUSPO")
	case 17,18: strTmp=strTmp & obLanguage("Populate","kUVUZ")
	case 19: strTmp=strTmp & obLanguage("Populate","kUPK")
	case else
		strTmp=strTmp & obLanguage("Populate","kOO")
		select case nEOFormID
		case 7,8: strTmp=strTmp & " " & obLanguage("Populate","kNSHDS")
		case 9: strTmp=strTmp & " " & obLanguage("Populate","kProGymnasium")
		case 18: strTmp=strTmp & " " & obLanguage("Populate","kNOSH")
		case 19: strTmp=strTmp &" " & obLanguage("Populate","kOSSH")
		case 20, 21: strTmp=strTmp & " " & obLanguage("Populate","kSOSH")
		case 22: strTmp=strTmp & " " & obLanguage("Populate","kGymnasium")
		case 23: strTmp=strTmp & " " & obLanguage("Populate","kLyceum")
		end select
	end select

	GetEONAME = strTmp & ": " & strEOName
End Function

Function GetEONAMEValue(strEOName, nEOLegalFormID, nEOLegalForm83ID, nEOTypeID, nEOFormID, bFull)
	GetEONAMEValue = DB2Value(GetEONAME(strEOName, nEOLegalFormID, nEOLegalForm83ID, nEOTypeID, nEOFormID, bFull))
End Function

Function GetEONAMEJava(strEOName, nEOLegalFormID, nEOLegalForm83ID, nEOTypeID, nEOFormID, bFull)
	GetEONAMEJava = DB2Java(GetEONAME(strEOName, nEOLegalFormID, nEOLegalForm83ID, nEOTypeID, nEOFormID, bFull))
End Function

Function GetEONAMEByID( nEOID, bFull )
	Dim ojTempInfo
	Dim strEOName, nEOLegalFormID, nEOTypeID, nEOFormID, nEOLegalForm83ID

	Set ojTempInfo = objNSNET.GetEOInfo(nEOID)
	strEOName				= ojTempInfo("EOFULLNAME")
	nEOLegalFormID			= CInt(ojTempInfo("EOLEGALFORMID"))
	nEOLegalForm83ID		= CInt(GetSafeLng(ojTempInfo("EOLEGALFORM83ID"), -1))
	nEOTypeID				= CInt(ojTempInfo("EOTYPEID"))
	nEOFormID				= CInt(ojTempInfo("EOFORMID"))

	GetEONAMEByID = GetEONAMEValue(strEOName, nEOLegalFormID, nEOLegalForm83ID, nEOTypeID, nEOFormID, bFull)
End Function

Sub PopulateSelectArrayEOs(theArr, strCurID)
	Dim strID, strCCurID, i, bFull

	bFull = True

	If IsNull(strCurID) Then
		strCurID = theArr(0, 0)
	End If

	strCCurID = DB2Value(strCurID)
	For i = 0 To UBound(theArr, 2)
		strID = DB2Value(theArr(0, i))

		Response.Write "<option value=""" & strID & """ " & IIF(strID = strCCurID, "selected", "") & ">" & GetEONAMEValue(theArr(1, i), theArr(2, i), theArr(3, i), theArr(4, i), theArr(5, i), bFull) & "</option>"
	Next
End Sub
%>
