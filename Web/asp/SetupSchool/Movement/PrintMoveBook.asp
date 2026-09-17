<!-- #INCLUDE VIRTUAL=/asp/headerprint.asp -->
<!-- #INCLUDE FILE="MoveBook_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim nDocType, objDocs, nFutureYearId, strClassName', strClassID
Dim nDocSubType, nGrade

Sub ReadState()
	nDocType = GetSafeLng(obTokenMgr.GetData(strToken, stMoveDocType), Null)
	nDocSubType = GetSafeLng(obTokenMgr.GetData(strToken, stMoveDocSubType), -1)
	nGrade = GetSafeLng(obTokenMgr.GetData(strToken, stCurrGrade), 1)
	nFutureYearId = GetSafeLng(Request("FutureYearId"), 0)
	If nFutureYearId > 0 Then 
		strClassName = "-1"	
	Else
		strClassName = obTokenMgr.GetData( strToken, "CurrClassName")
	End If
End Sub

Sub Main()
	Dim currYearID
	currYearID = IIF( nFutureYearId>0,nFutureYearId,strCurrYearID)
	If Not(nDocType=kDocType_OUT or nDocType=kDocType_Year or nDocType=kDocType_ENROLL) Then 
		Set objDocs = objNSNET.GetMoveBookDocs(currYearID, nDocType, Nothing, strClassName)
	Else
		Set objDocs = objNSNET.GetMoveBookDocs(currYearID, nDocType, nDocSubType, IIF(nDocSubType=0,-nGrade,strClassName))
	End if
End Sub

Sub onDrawPage()
	Dim bSubType, bGrade
	Dim arrForTitle, nClassIndex
	Dim strGrade

	If strClassName = "-1" Then strClassName=obLanguage("Common","kAll")

	bSubType = False
	bGrade = False
	' Здесь структура сохранена, как в MoveBook.asp. Просьба к И... - НЕ ОПТИМИЗИРОВАТЬ!!!
	If nDocType=kDocType_OUT or nDocType = kDocType_ENROLL or nDocType = kDocType_Year Then
		If nDocType = kDocType_Year Then
			If CLng(strFunctionalityType)=kFuncType_Add Then
			Else
				bSubType = True
			End If
		Else
			If CLng(strFunctionalityType)=kFuncType_Add Then
			Else
				bSubType = True
			End if
		End if
		If nDocSubType=0 Then 
'			Call DrawExGrade(nGrade,"ok('View','');",true)
			bGrade = True
'		Else 
		End if
'	Else 
	End if

	If bSubType Then
		ReDim arrForTitle(7)
	Else
		ReDim arrForTitle(5)
	End If

	arrForTitle(0) = obLanguage("Common","kSchoolYear")
	arrForTitle(1) = obTokenMgr.GetData(strToken, "CurrYearName")
	arrForTitle(2) = obLanguage("Movement","kDocType")
	arrForTitle(3) = GetDocTypeName(nDocType)
	If bSubType Then
		arrForTitle(4) = obLanguage("Movement","kDocSubType")
		If nDocSubType>=0 Then
			If nDocType = kDocType_Year Then
				arrForTitle(5) = GetTitleDocSubTypeYear(nDocSubType)
			Else 
				arrForTitle(5) = GetTitleDocSubType(nDocSubType) 
			End if
		Else 
			arrForTitle(5) = obLanguage("Common","kAll")
		End If			
		nClassIndex = 6
	Else
		nClassIndex = 4
	End If

	If bGrade Then
		If nGrade = 1 Then
			strGrade = obLanguage("Common","kAll")
		ElseIf nGrade = 0 Then
			strGrade = obLanguage("Common","kNo")
		Else
			strGrade = -nGrade
		End If
		arrForTitle(nClassIndex) = obLanguage("Movement","kExGrade")
		arrForTitle(nClassIndex + 1) = strGrade
	Else ' Class
		arrForTitle(nClassIndex) = obLanguage("Common","kClass",strFunctionalityType)
		arrForTitle(nClassIndex + 1) = strClassName
	End If

'	Response.Write GetPageTitlePrint(obLanguage("Movement","kTitle_MoveBook",strFunctionalityType), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), obLanguage("Movement","kDocType"), GetDocTypeName(nDocType), obLanguage("Common","kClass",strFunctionalityType), strClassName))
	Response.Write GetPageTitlePrint(obLanguage("Movement","kTitle_MoveBook",strFunctionalityType), arrForTitle)
	If objDocs.EOF Then
		Response.Write GetWarningPrint(obLanguage("Movement","kDocsEmpty",strFunctionalityType))
	Else
		Call DrawMoveBookTable(objDocs, False)
	End If
	Response.Write GetPageVerPrint()
End Sub
%>
