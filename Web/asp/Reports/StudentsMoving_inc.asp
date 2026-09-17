<!-- #INCLUDE FILE="DrawReports_inc.asp" -->
<!-- #INCLUDE FILE="../SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Const indTermTypeId		= 0
Const indTermName		= 1
Const indStartDate		= 2
Const indEndDate		= 3
Const indTermsCount		= 4

Const indDoctype	= 0
Const indClassid1	= 1
Const indClassid2	= 2
Const indDocDate	= 3
Const indStudentId	= 4
Const indStudentInClass1 = 5
Const indStudentInClass2 = 6
Const indStudentName = 7
Const indSmrStudentName = 5

Dim bEmptyTable, bNoMovedStuds, bNoDefStuds
Dim nTermTypes, nMinGrades, nMaxGrades
Dim objTerms, objStudOnYearStart, objGrades, objMovedStuds
Dim arrTerms, arrStudOnYearStart, arrStudCount, arrMovedStuds, arrGrades, arrMovedStudsRs, arrGradesIndex
Dim	dtStartDate, dtEndDate, strStartDate, strEndDate
Dim dtMoveYearStart, dtMoveYearEnd
Dim bNamesShow, arrMovedStudsNames
Dim bFirstSummer, dtPrevTermsEnd
Dim objMovedStudsSmr, arrMovedStudsSmr, bNoMovedStudsSmr
Dim arrSmrStudsRs, arrSmrStudsNames
Dim bByClasses, objStudOnYearStartByClasses, arrStudOnYearStartByClasses
Dim bDrawByClasses, nClassesUB, arrStudCountByCls
Dim arrSmrStudsRsByCls
Dim bPreSchool, arrPreSchoolGrades

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNStudentsMovement",strFunctionalityType)
End Function
Function GetPageParams()
	GetPageParams = _
		Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Common","kStartDate"), strStartDate, _
		obLanguage("Common","kEndDate"), strEndDate)
End Function

Sub specialRead()
	bNamesShow = (GetSafe("kStudentNames", "kStudentNamesShow") = "kStudentNamesShow")
	bByClasses = (GetSafe("kTypeReport", "kByClasses") = "kByClasses")

	ReadDateRange

	If IsDull(obTokenMgr.GetData(strToken, stPrevTermsEnd)) Then
		bFirstSummer = False
	Else
		dtPrevTermsEnd = obTokenMgr.GetData(strToken, stPrevTermsEnd)
		bFirstSummer = True
	End If

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	If bPreSchool Then
		arrPreSchoolGrades = Array(obLanguage("Common","kGr0_s"), obLanguage("Common","kGr1_s"), obLanguage("Common","kGr2_s"), obLanguage("Common","kGr3_s"), obLanguage("Common","kGr4_s"), obLanguage("Common","kGr5_s"), obLanguage("Common","kGr6_s"), obLanguage("Common","kGr7_s"), obLanguage("Common","kGr8_s"))
	End If
End Sub

Function GetTermTypesCount()
	Dim i, k, nCurrType

	nCurrType = arrterms(indTermTypeId,0)
	k = 1
	For i=1 to Ubound(arrTerms,2)
		If nCurrType <> arrterms(indTermTypeId,i) Then
			k = k + 1
			nCurrType = arrterms(indTermTypeId,i)
		End If
	Next
	GetTermTypesCount = k
End Function

Sub GetStudentsOnYearStartCount()
	Dim i, nCurrId, nCurrGrade, j
	Dim bMarkInClassIn, bMarkInClassOut
	Dim m, p

	Redim arrStudCount( nMaxGrades )
	For i = 0 To Ubound( arrStudCount, 1 )
		arrStudCount( i ) = 0
	Next
	If Not bNoDefStuds Then
		For i = 0 To Ubound( arrStudOnYearStart, 2 )
'			arrStudCount( arrStudOnYearStart( 0, i ) - 1 ) = arrStudOnYearStart( 1, i )
			arrStudCount( arrStudOnYearStart( 0, i ) ) = arrStudOnYearStart( 1, i )
		Next
	End If

	If bDrawByClasses Then
		Redim arrStudCountByCls( nClassesUB )
		j = 0
		For i = 0 To nClassesUB
			arrStudCountByCls( i ) = 0
			If j <= UBound(arrStudOnYearStartByClasses, 2) Then
				If arrGrades(0, i) = arrStudOnYearStartByClasses(1, j) Then
					arrStudCountByCls( i ) = arrStudOnYearStartByClasses(3, j)
					j = j + 1
				End If
			End If
		Next
	End If

'******************************************************************************************************************************************
' 29.11.06. Теперь данные из GetStudentsMovingsList, помеченные флагами SC_STUDENTID1=0, SC_STUDENTID2=0,
' учитываем в "статических" данных на начало года (arrStudCount, arrStudCountByCls), а не в периоде "лето" (arrSmrStudsRs, arrSmrStudsRsByCls)
	If Not bNoMovedStuds Then

		For p = 0 To Ubound(arrMovedStuds,2)
			bMarkInClassIn = (GetSafeLng(arrMovedStuds(indStudentInClass2,p), Null) = 1)
			bMarkInClassOut = (GetSafeLng(arrMovedStuds(indStudentInClass1,p), Null) = 1)

			If Not bMarkInClassIn Or Not bMarkInClassOut Then

				If arrMovedStuds(indDoctype,p)= 2 Then ' Зачисление
					If Not bMarkInClassIn Then
'						m = GetClassGrade(arrMovedStuds(indClassid2,p))-1
						m = GetClassGrade(arrMovedStuds(indClassid2,p))
						arrStudCount(m) = CLng(arrStudCount(m)) - 1

						If bDrawByClasses Then
							m = GetClassIndex(arrMovedStuds(indClassid2,p))
							arrStudCountByCls(m) = CLng(arrStudCountByCls(m)) - 1
						End If
					End If
				ElseIf arrMovedStuds(indDoctype,p)= 1 Then ' Выбытие
					If Not bMarkInClassOut Then ' иначе игнорируем ...
'						m = GetClassGrade(arrMovedStuds(indClassid1,p))-1
						m = GetClassGrade(arrMovedStuds(indClassid1,p))
						arrStudCount(m) = CLng(arrStudCount(m)) + 1

						If bDrawByClasses Then
							m = GetClassIndex(arrMovedStuds(indClassid1,p))
							arrStudCountByCls(m) = CLng(arrStudCountByCls(m)) + 1
						End If
					End If
				Else  ' Перевод из кл. в кл.
					If Not bMarkInClassIn Then ' иначе игнорируем ...
'						m = GetClassGrade(arrMovedStuds(indClassid2,p))-1
						m = GetClassGrade(arrMovedStuds(indClassid2,p))
						arrStudCount(m) = CLng(arrStudCount(m)) - 1

						If bDrawByClasses Then
							m = GetClassIndex(arrMovedStuds(indClassid2,p))
							arrStudCountByCls(m) = CLng(arrStudCountByCls(m)) - 1
						End If
					End If
					If Not bMarkInClassOut Then ' иначе игнорируем ...
'						m = GetClassGrade(arrMovedStuds(indClassid1,p))-1
						m = GetClassGrade(arrMovedStuds(indClassid1,p))
						arrStudCount(m) = CLng(arrStudCount(m)) + 1

						If bDrawByClasses Then
							m = GetClassIndex(arrMovedStuds(indClassid1,p))
							arrStudCountByCls(m) = CLng(arrStudCountByCls(m)) + 1
						End If
					End If
				End If

			End If
		Next
	End If
End Sub


Function GetClassGrade( nClassId )
	Dim i
	i = 0

'    If nClassId < 0 Then
''        GetClassGrade = -nClassId так короче
'	    While (arrGrades(0,i) <> 0) And (arrGrades(1,i) <> -nClassID)
'		    i = i + 1
'	    WEnd
'	    GetClassGrade = arrGrades(1,i)
'        Exit Function
'    End If

	While nClassID <> arrGrades(0,i)
		i = i + 1
	WEnd
	GetClassGrade = arrGrades(1,i)
End Function

Function GetClassIndex( nClassId )
	Dim i
	i = 0

'    If nClassId < 0 Then
'	    While (arrGrades(0,i) <> 0) And (arrGrades(1,i) <> -nClassID)
'		    i = i + 1
'	    WEnd
'	    GetClassIndex = i
'        Exit Function
'    End If

	While nClassID <> arrGrades(0,i)
		i = i + 1
	WEnd
	GetClassIndex = i
End Function

Sub specialMain()
	Dim i
	Dim objGrades
	Dim dtFirstSummerStart, dtFirstSummerEnd
	Dim m, p
	Dim bMarkInClassIn, bMarkInClassOut

	Call InitSchoolSettings( objNSNET )
	Call CalcMoveCurrYearLimits(dtMoveYearStart, dtMoveYearEnd, False)

	If bFirstSummer Then
		' Для первого лета, также как для обычного периода далее, смотрим, охватывают ли введённые даты его начало и конец;
		' если охватывают, то показываем.
		dtFirstSummerStart = dtPrevTermsEnd
		dtFirstSummerEnd = DateAdd("d", -1, dtMoveYearStart)
		bFirstSummer = Datediff("D",dtStartDate,dtFirstSummerStart)>=0 And Datediff("D",dtFirstSummerEnd,dtEndDate)>=0
	End If

	bOK = True

	Set objTerms = objNSNET.GetTermAndTermTypesList(strCurrYearID, dtMoveYearEnd, obLanguage("Reports","kSummer"))
	If objTerms.EOF Then
		strErrMsg = obLanguage("Reports","kNoTerms")
		bOK = False
		strReport = GetReport()
		Exit Sub
	End If
	arrTerms = objTerms.GetRows(,,Array("TERMTYPEID", "TERMNAME", "STARTDATE", "ENDDATE", "TERMSCOUNT"))
	nTermTypes = GetTermTypesCount()

	Set objGrades = objNSNET.GetGradesAndClasses(strCurrYearID)
	If objGrades.EOF Then
'		strErrMsg = obLanguage("Reports","kNoClasses",strFunctionalityType) & obLanguage("SchoolSettings","kClasses",strFunctionalityType)
		strErrMsg = obLanguage("Reports","kNoClasses",strFunctionalityType)
		bOk = False
		strReport = GetReport()
		Exit Sub
	End If
	arrGrades = objGrades.GetRows(,,Array("CLASSID", "GRADE", "CLASSNAME"))

	Redim arrGradesIndex (arrGrades(1,Ubound(arrGrades,2)))
	For i = 0 To Ubound(arrGradesIndex,1)
		arrGradesIndex(i) = 0
	Next
	For i = 0 To Ubound(arrGrades,2)
'		arrGradesIndex(arrGrades(1,i)-1) = arrGradesIndex(arrGrades(1,i)-1) + 1
		arrGradesIndex(arrGrades(1,i)) = arrGradesIndex(arrGrades(1,i)) + 1
	Next
	nClassesUB = Ubound(arrGrades,2)

	Set objStudOnYearStart = objNSNET.GetStudentsListOnYearStart(strCurrYearID, dtMoveYearStart )

	bDrawByClasses = False
	If objStudOnYearStart.EOF Then
		bNoDefStuds = True
	Else
		arrStudOnYearStart = objStudOnYearStart.GetRows(,,Array("GRADE","COUNT"))
		bNoDefStuds = False

		If bByClasses Then
			Set objStudOnYearStartByClasses = objNSNET.GetStudentsListOnYearStartByClasses(strCurrYearID, dtMoveYearStart )

			If objStudOnYearStartByClasses.EOF Then
				bNoDefStuds = True
			Else
				arrStudOnYearStartByClasses = objStudOnYearStartByClasses.GetRows(,,Array("GRADE", "CLASSID", "CLASSNAME", "CNT"))
				bDrawByClasses = True
			End If
		End If
	End If

'    If bByClasses And Not bDrawByClasses Then ' В принципе, это вроде верно. Но для минимизации изменений - пока закомментировал.
'        bByClasses = False
'    End If

	Set objGrades = objNSNET.GetSchoolYearsGrades(strCurrYearID )
	nMinGrades = CLng(objGrades("GRADE"))
	objGrades.MoveLast
	nMaxGrades = CLng(objGrades("GRADE"))

	Set objMovedStuds = objNSNET.GetStudentsMovingsList(strCurrYearID, dtMoveYearStart)
	If Not objMovedStuds.EOF Then
		If Not bNamesShow Then
			arrMovedStuds = objMovedStuds.GetRows(,,Array("DOCTYPE", "CLASSID1", "CLASSID2", "DOCDATE", "STUDENTID", "SC_STUDENTID1", "SC_STUDENTID2"))
		Else
			arrMovedStuds = objMovedStuds.GetRows(,,Array("DOCTYPE", "CLASSID1", "CLASSID2", "DOCDATE", "STUDENTID", "SC_STUDENTID1", "SC_STUDENTID2", "LASTNAME"))
		End If
		bNoMovedStuds = False
	Else
		bNoMovedStuds = True
	End If

	bNoMovedStudsSmr = True
	If bFirstSummer Then
		Set objMovedStudsSmr = objNSNET.GetSummerMovingList(strCurrYearID, dtMoveYearStart)
		If Not objMovedStudsSmr.EOF Then
			If Not bNamesShow Then
				arrMovedStudsSmr = objMovedStudsSmr.GetRows(,,Array("DOCTYPE", "CLASSID1", "CLASSID2", "DOCDATE", "STUDENTID"))
			Else
				arrMovedStudsSmr = objMovedStudsSmr.GetRows(,,Array("DOCTYPE", "CLASSID1", "CLASSID2", "DOCDATE", "STUDENTID", "LASTNAME"))
			End If
			bNoMovedStudsSmr = False
		End If

		Redim arrSmrStudsRs( 1, nMaxGrades )
'		For m = nMinGrades - 1 To nMaxGrades - 1
		For m = nMinGrades To nMaxGrades
			arrSmrStudsRs(0, m) = 0
			arrSmrStudsRs(1, m) = 0
		Next

'		If bByClasses Then
		If bDrawByClasses Then ' Так вроде точнее. Был баг, где индексы "поплыли".
			Redim arrSmrStudsRsByCls( 1, nClassesUB )
			For m = 0 To nClassesUB
				arrSmrStudsRsByCls(0, m) = 0
				arrSmrStudsRsByCls(1, m) = 0
			Next
			Redim arrSmrStudsNames( 1, nClassesUB )
		Else
			Redim arrSmrStudsNames( 1, nMaxGrades )
		End If

		If Not bNoMovedStudsSmr Then
			' Структурируем данные, вернувшиеся от GetSummerMovingList ...
			For p = 0 To Ubound(arrMovedStudsSmr,2)
				If arrMovedStudsSmr(indDoctype,p)= 2 Then ' Зачисление
'					m = GetClassGrade(arrMovedStudsSmr(indClassid2,p))-1
					m = GetClassGrade(arrMovedStudsSmr(indClassid2,p))
					arrSmrStudsRs(0,m) = arrSmrStudsRs(0,m) + 1

					If bDrawByClasses Then
						m = GetClassIndex(arrMovedStudsSmr(indClassid2,p))
						arrSmrStudsRsByCls(0,m) = arrSmrStudsRsByCls(0,m) + 1
					End If

					If bNamesShow Then
						arrSmrStudsNames(0,m) = arrSmrStudsNames(0,m) & arrMovedStudsSmr(indSmrStudentName,p) & "," & vbCrLf
					End If
				ElseIf arrMovedStudsSmr(indDoctype,p)= 1 Then ' Выбытие
'					m = GetClassGrade(arrMovedStudsSmr(indClassid1,p))-1
					m = GetClassGrade(arrMovedStudsSmr(indClassid1,p))
					arrSmrStudsRs(1,m) = arrSmrStudsRs(1,m) + 1

					If bDrawByClasses Then
						m = GetClassIndex(arrMovedStudsSmr(indClassid1,p))
						arrSmrStudsRsByCls(1,m) = arrSmrStudsRsByCls(1,m) + 1
					End If

					If bNamesShow Then
						arrSmrStudsNames(1,m) = arrSmrStudsNames(1,m) & arrMovedStudsSmr(indSmrStudentName,p) & "," & vbCrLf
					End If
				Else  ' Перевод из кл. в кл.
'					m = GetClassGrade(arrMovedStudsSmr(indClassid2,p))-1
					m = GetClassGrade(arrMovedStudsSmr(indClassid2,p))
					arrSmrStudsRs(0,m) = arrSmrStudsRs(0,m) + 1

					If bDrawByClasses Then
						m = GetClassIndex(arrMovedStudsSmr(indClassid2,p))
						arrSmrStudsRsByCls(0,m) = arrSmrStudsRsByCls(0,m) + 1
					End If

					If bNamesShow Then
						arrSmrStudsNames(0,m) = arrSmrStudsNames(0,m) & arrMovedStudsSmr(indSmrStudentName,p) & "," & vbCrLf
					End If
'					m = GetClassGrade(arrMovedStudsSmr(indClassid1,p))-1
					m = GetClassGrade(arrMovedStudsSmr(indClassid1,p))
					arrSmrStudsRs(1,m) = arrSmrStudsRs(1,m) + 1

					If bDrawByClasses Then
						m = GetClassIndex(arrMovedStudsSmr(indClassid1,p))
						arrSmrStudsRsByCls(1,m) = arrSmrStudsRsByCls(1,m) + 1
					End If

					If bNamesShow Then
						arrSmrStudsNames(1,m) = arrSmrStudsNames(1,m) & arrMovedStudsSmr(indSmrStudentName,p) & "," & vbCrLf
					End If
				End If
			Next
		End If


'******************************************************************************************************************************************
' 29.11.06. Теперь данные из GetStudentsMovingsList, помеченные флагами SC_STUDENTID1=0, SC_STUDENTID2=0,
' учитываем в данных на начало года, а не в периоде "лето", см. выше...
'		If Not bNoMovedStuds Then
'			' ... и добавляем к ним данные из GetStudentsMovingsList, которые ниже игнорируются при подсчёте
'			...
'		End If
	End If

	Call GetStudentsOnYearStartCount()

End Sub

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print-num""><tr><th rowspan=""2"">"& obLanguage("Filter","kClassGB",strFunctionalityType) &"</th>" &_
			IIf(bFirstSummer, "<th colspan=""3"">" & obLanguage("Reports","kSummer"), "<th rowspan=""2"">" & obLanguage("Reports","kOnYearStart")) & "</th>"
End Function

Function GetTableString()
End Function

Function GetBr()
End Function

Function GetReportTable()
	Dim bDateIn
	Dim i,j,k,p,m,n
	Dim strReport, strGrades, strTemp
	Dim nCurrTerm, nResCols, nStartTerm, nSubLen, nSubRs
	Dim strStudentNames, bMarkInClassIn, bMarkInClassOut
	Dim q, nCurGrade, nClassIndex
	Dim arrMovedStudsRsByCls
	Dim tmp
	Dim bCheckHidden, arrHiddensByGrade, arrHiddensByClass
    Dim bShowYearEnd

	strReport = ""
	nCurrTerm = 0

	bEmptyTable = True
	For i=0 to nTermTypes-1

		nResCols = 0 : nStartTerm = 0 : strTemp = ""
        bShowYearEnd = False
		For j = nCurrTerm To nCurrTerm + arrterms(indTermsCount,nCurrTerm)-1
			bDateIn = Datediff("D",dtStartDate,arrterms(indStartDate,j))>=0 And Datediff("D",arrterms(indEndDate,j),dtEndDate)>=0
			If bDateIn Then
				strTemp = strTemp & "<th colspan=""3"">" & DB_2_HTML(arrterms(indTermName,j)) & "</th>"
				nResCols = nResCols + 1
                If j = nCurrTerm + arrterms(indTermsCount,nCurrTerm)-1 Then
                    bShowYearEnd = True
                End If
			Else
				If nResCols = 0 Then
					nStartTerm = nStartTerm + 1
				End If
			End If
		Next
		If (nResCols > 0) Or (Not bNoMovedStudsSmr) Then
			bEmptyTable = False
			strReport = strReport & GetTableHeader() & strTemp & "</tr><tr>"

			Redim arrMovedStudsRs( arrterms(indTermsCount,nCurrTerm)*3, nMaxGrades )
			Redim arrHiddensByGrade(nMaxGrades)

			If bDrawByClasses Then
				Redim arrMovedStudsRsByCls( arrterms(indTermsCount,nCurrTerm)*3, nClassesUB )
				Redim arrMovedStudsNames( arrterms(indTermsCount,nCurrTerm)*3, nClassesUB )
				Redim arrHiddensByClass(nClassesUB)
			Else
				Redim arrMovedStudsNames( arrterms(indTermsCount,nCurrTerm)*3, nMaxGrades )
			End If

'			For m = nMinGrades - 1 To nMaxGrades - 1
			For m = nMinGrades To nMaxGrades
				For k = 0 To arrterms( indTermsCount, nCurrTerm ) * 3 - 1
					arrMovedStudsRs( k, m ) = 0
				Next
				arrMovedStudsRs( 2, m ) = CLng(arrStudCount( m ))
				arrHiddensByGrade(m) = 0
			Next
			arrHiddensByGrade(nMaxGrades) = 0

			If bDrawByClasses Then
				For m = 0 To nClassesUB
					For k = 0 To arrterms( indTermsCount, nCurrTerm ) * 3 - 1
						arrMovedStudsRsByCls( k, m ) = 0
					Next
					arrMovedStudsRsByCls( 2, m ) = CLng(arrStudCountByCls( m ))
					arrHiddensByClass(m) = 0
				Next
			End If

			If bNoMovedStuds = False Then
				For k = 0 To arrterms(indTermsCount,nCurrTerm)-1
					For p = 0 To Ubound(arrMovedStuds,2)
'						If k = 0 Then
'							bDateIn = Datediff("D",dtStartDate,arrMovedStuds(indDocDate,p))>=0 And Datediff("D",arrMovedStuds(indDocDate,p),arrterms(indEndDate,nCurrTerm))>0
'						ElseIf k = arrterms(indTermsCount,nCurrTerm)-1 Then
'							bDateIn = Datediff("D",arrterms(indEndDate,k+nCurrTerm - 1),arrMovedStuds(indDocDate,p))>=0 And Datediff("D",arrMovedStuds(indDocDate,p),dtEndDate)>=0
'						Else
'							bDateIn = Datediff("D",arrterms(indEndDate,k+nCurrTerm - 1),arrMovedStuds(indDocDate,p))>=0 And Datediff("D",arrMovedStuds(indDocDate,p),arrterms(indEndDate,k+nCurrTerm))>0
'						End If
                        ' Не вижу необходимости в таком разнообразии... Это осталось вроде со времён, когда между периодами могли быть дырки... Возможно это не совсем корректно, т.к. крайние периоды зависят от dtStartDate, dtEndDate, а остальные нет?
                        ' Ещё одно допущение! Здесь предполагается, что периоды одного типа не содержат разрывов между собой. Особенно это важно для периода Лето, он формируется искусственно, но тоже соблюдает это правило. В противном случае сведения
                        ' о движении могут провалиться в этот разрыв и не попасть в отчёт!
                        ' Собственно по-этому можно определять bDateId - по границам периодов, иначе надо как выше закомментировано...
                        bDateIn = False
                        If k >= nStartTerm Then
    						bDateIn = Datediff("D",arrterms(indStartDate,k+nCurrTerm),arrMovedStuds(indDocDate,p))>=0 And Datediff("D",arrMovedStuds(indDocDate,p),arrterms(indEndDate,k+nCurrTerm))>=0
                        End If

						If bDateIn Then
' 29.11.06. Теперь учитываем все записи, т.к. bMarkInClassIn, bMarkInClassOut - были учтены в данных на начало года.
'							bMarkInClassIn = (GetSafeLng(arrMovedStuds(indStudentInClass2,p), Null) = 1)
'							bMarkInClassOut = (GetSafeLng(arrMovedStuds(indStudentInClass1,p), Null) = 1)
							If arrMovedStuds(indDoctype,p)= 2 Then ' Зачисление
'								If bMarkInClassIn Then ' иначе игнорируем ...
'									m = GetClassGrade(arrMovedStuds(indClassid2,p))-1
									m = GetClassGrade(arrMovedStuds(indClassid2,p))
									arrMovedStudsRs(k*3,m) = arrMovedStudsRs(k*3,m) + 1

									If bDrawByClasses Then
										m = GetClassIndex(arrMovedStuds(indClassid2,p))
										arrMovedStudsRsByCls(k*3,m) = arrMovedStudsRsByCls(k*3,m) + 1
									End If

									If bNamesShow Then
										arrMovedStudsNames(k*3,m) = arrMovedStudsNames(k*3,m) & arrMovedStuds(indStudentName,p) & "," & vbCrLf
									End If
'								End If
							ElseIf arrMovedStuds(indDoctype,p)= 1 Then ' Выбытие
'								If bMarkInClassOut Then ' иначе игнорируем выбытие ученика из класса, если он выбыл из него "полностью", т.е. нет пометки о нахождении
'									m = GetClassGrade(arrMovedStuds(indClassid1,p))-1
									m = GetClassGrade(arrMovedStuds(indClassid1,p))
									arrMovedStudsRs(k*3+1,m) = arrMovedStudsRs(k*3+1,m) + 1

									If bDrawByClasses Then
										m = GetClassIndex(arrMovedStuds(indClassid1,p))
										arrMovedStudsRsByCls(k*3+1,m) = arrMovedStudsRsByCls(k*3+1,m) + 1
									End If

									If bNamesShow Then
										arrMovedStudsNames(k*3+1,m) = arrMovedStudsNames(k*3+1,m) & arrMovedStuds(indStudentName,p) & "," & vbCrLf
									End If
'								End If
							Else  ' Перевод из кл. в кл.
'								If bMarkInClassIn Then ' иначе игнорируем ...
'									m = GetClassGrade(arrMovedStuds(indClassid2,p))-1
									m = GetClassGrade(arrMovedStuds(indClassid2,p))
									arrMovedStudsRs(k*3,m) = arrMovedStudsRs(k*3,m) + 1

									If bDrawByClasses Then
										m = GetClassIndex(arrMovedStuds(indClassid2,p))
										arrMovedStudsRsByCls(k*3,m) = arrMovedStudsRsByCls(k*3,m) + 1
									End If

									If bNamesShow Then
										arrMovedStudsNames(k*3,m) = arrMovedStudsNames(k*3,m) & arrMovedStuds(indStudentName,p) & "," & vbCrLf
									End If
'								End If
'								If bMarkInClassOut Then ' иначе игнорируем ...
'									m = GetClassGrade(arrMovedStuds(indClassid1,p))-1
									m = GetClassGrade(arrMovedStuds(indClassid1,p))
									arrMovedStudsRs(k*3+1,m) = arrMovedStudsRs(k*3+1,m) + 1

									If bDrawByClasses Then
										m = GetClassIndex(arrMovedStuds(indClassid1,p))
										arrMovedStudsRsByCls(k*3+1,m) = arrMovedStudsRsByCls(k*3+1,m) + 1
									End If

									If bNamesShow Then
										arrMovedStudsNames(k*3+1,m) = arrMovedStudsNames(k*3+1,m) & arrMovedStuds(indStudentName,p) & "," & vbCrLf
									End If
'								End If
							End If

						Else
							If k = nStartTerm Then
								' Здесь учитываем "скрытое движение", т.е. движение от начала уч. года по движению до первого показываемого здесь периода (с учётом типов уч. периодов)
								bCheckHidden = Datediff("D",arrterms(indStartDate,k+nCurrTerm),arrMovedStuds(indDocDate,p))<0

								If bCheckHidden Then
									If arrMovedStuds(indDoctype,p)= 2 Then ' Зачисление
'										m = GetClassGrade(arrMovedStuds(indClassid2,p))-1
										m = GetClassGrade(arrMovedStuds(indClassid2,p))
										arrHiddensByGrade(m) = arrHiddensByGrade(m) + 1

										If bDrawByClasses Then
											m = GetClassIndex(arrMovedStuds(indClassid2,p))
											arrHiddensByClass(m) = arrHiddensByClass(m) + 1
										End If
									ElseIf arrMovedStuds(indDoctype,p)= 1 Then ' Выбытие
'										m = GetClassGrade(arrMovedStuds(indClassid1,p))-1
										m = GetClassGrade(arrMovedStuds(indClassid1,p))
										arrHiddensByGrade(m) = arrHiddensByGrade(m) - 1

										If bDrawByClasses Then
											m = GetClassIndex(arrMovedStuds(indClassid1,p))
											arrHiddensByClass(m) = arrHiddensByClass(m) - 1
										End If
									Else  ' Перевод из кл. в кл.
'										m = GetClassGrade(arrMovedStuds(indClassid2,p))-1
										m = GetClassGrade(arrMovedStuds(indClassid2,p))
										arrHiddensByGrade(m) = arrHiddensByGrade(m) + 1

										If bDrawByClasses Then
											m = GetClassIndex(arrMovedStuds(indClassid2,p))
											arrHiddensByClass(m) = arrHiddensByClass(m) + 1
										End If

'										m = GetClassGrade(arrMovedStuds(indClassid1,p))-1
										m = GetClassGrade(arrMovedStuds(indClassid1,p))
										arrHiddensByGrade(m) = arrHiddensByGrade(m) - 1

										If bDrawByClasses Then
											m = GetClassIndex(arrMovedStuds(indClassid1,p))
											arrHiddensByClass(m) = arrHiddensByClass(m) - 1
										End If
									End If

								End If
							End If
						End If ' If bDateIn Then

					Next
				Next
			End If

'			For m = nMinGrades - 1 To nMaxGrades - 1
			For m = nMinGrades To nMaxGrades
				arrMovedStudsRs( 2, m ) = CLng(arrStudCount(m)) + arrMovedStudsRs( 0, m ) - arrMovedStudsRs( 1, m )
				If nStartTerm = 0 Then
					arrMovedStudsRs( 2, m ) = arrMovedStudsRs( 2, m ) + arrHiddensByGrade(m)
				End If
				For k = 1 To arrterms(indTermsCount,nCurrTerm)-1
					arrMovedStudsRs( k*3+2, m ) = arrMovedStudsRs( (k-1)*3+2, m ) + arrMovedStudsRs( k*3, m ) - arrMovedStudsRs( k*3+1, m )
					If nStartTerm = k Then
						arrMovedStudsRs( k*3+2, m ) = arrMovedStudsRs( k*3+2, m ) + arrHiddensByGrade(m)
					End If
				Next
			Next

			If bDrawByClasses Then
				For m = 0 To nClassesUB
					arrMovedStudsRsByCls( 2, m ) = CLng(arrStudCountByCls(m)) + arrMovedStudsRsByCls( 0, m ) - arrMovedStudsRsByCls( 1, m )
					If nStartTerm = 0 Then
						arrMovedStudsRsByCls( 2, m ) = arrMovedStudsRsByCls( 2, m ) + arrHiddensByClass(m)
					End If
					For k = 1 To arrterms(indTermsCount,nCurrTerm)-1
						arrMovedStudsRsByCls( k*3+2, m ) = arrMovedStudsRsByCls( (k-1)*3+2, m ) + arrMovedStudsRsByCls( k*3, m ) - arrMovedStudsRsByCls( k*3+1, m )
						If nStartTerm = k Then
							arrMovedStudsRsByCls( k*3+2, m ) = arrMovedStudsRsByCls( k*3+2, m ) + arrHiddensByClass(m)
						End If
					Next
				Next
			End If

			If bFirstSummer Then
				strReport = strReport & "<th>"&obLanguage("Reports","kInto")&"</th><th>"&obLanguage("Reports","kOut")&"</th><th>"&obLanguage("Reports","kOnYearStart")&"</th>"
			End If
			For k = 1 To nResCols
				strReport = strReport & "<th>"&obLanguage("Reports","kInto")&"</th><th>"&obLanguage("Reports","kOut")&"</th>"
				If k < nResCols Then
					strReport = strReport & "<th>" & obLanguage("Reports","kEndTerm") & "</th>"
				Else
    				If bShowYearEnd Then
					    strReport = strReport & "<th>" & obLanguage("Reports","kEndYear") & "</th>"
                    Else
    					strReport = strReport & "<th>" & obLanguage("Reports","kEndTerm") & "</th>"
                    End If
				End If
			Next
			strReport = strReport & "</tr>"
			nClassIndex = 0
			' <tr> grades cycle
'			For m = nMinGrades - 1 To nMaxGrades-1
			For m = nMinGrades To nMaxGrades
				If arrGradesIndex(m)>0 Then

'					nCurGrade = m+1
					nCurGrade = m
					If bDrawByClasses Then
						For q = 0 To nClassesUB
							If arrGrades(1, q) = nCurGrade Then
								strReport = strReport & "<tr><td class=""cell-text"">" & DB2HTML_BR(arrGrades(2, q)) & "</td>"

								If bFirstSummer Then
									strReport = strReport & DrawInOut(arrSmrStudsRsByCls(0,q), arrSmrStudsNames(0,q), arrSmrStudsRsByCls(1,q), arrSmrStudsNames(1,q))
								End If
								strReport = strReport & "<td>" & CLng(arrStudCountByCls(q)) & "</td>"

								For k = nStartTerm To nResCols + nStartTerm - 1
									strReport = strReport & DrawInOut(arrMovedStudsRsByCls(k*3,q), arrMovedStudsNames(k*3,q), arrMovedStudsRsByCls(k*3+1,q), arrMovedStudsNames(k*3+1,q))
									strReport = strReport & "<td>" & arrMovedStudsRsByCls(k*3+2,q) & "</td>"
								Next
								strReport = strReport & "</tr>"
							End If

						Next
					End If
	
					If bDrawByClasses Then
						strReport = strReport & "<tr class=""subtotals2"">"
					Else
						strReport = strReport & "<tr>"
					End If
'					strReport = strReport & "<td>" & m+1 & "</td>"
					If bPreSchool Then
						strReport = strReport & "<td class=""cell-text"">" & arrPreSchoolGrades(m) & "</td>"
					Else
						strReport = strReport & "<td class=""cell-text"">" & m & "</td>"
					End If

					If bFirstSummer Then
						strReport = strReport & "<td> " & arrSmrStudsRs(0,m)
						If Not bDrawByClasses Then
							If Not IsEmpty(arrSmrStudsNames(0,m)) Then
								strStudentNames = arrSmrStudsNames(0,m)
										strReport = strReport & DrawStudents(strStudentNames)
							End If
						End If
						strReport = strReport & "</td>" &_
						"<td>" & arrSmrStudsRs(1,m)
						If Not bDrawByClasses Then
							If Not IsEmpty(arrSmrStudsNames(1,m)) Then
								strStudentNames = arrSmrStudsNames(1,m)
										strReport = strReport & DrawStudents(strStudentNames)
							End If
						End If
						strReport = strReport & "</td>"
					End If
					strReport = strReport & "<td>" & CLng(arrStudCount(m)) & "</td>"

					For k = nStartTerm To nResCols + nStartTerm - 1
						strReport = strReport & "<td> " & arrMovedStudsRs(k*3,m)
						If Not bDrawByClasses Then
							If Not IsEmpty(arrMovedStudsNames(k*3,m)) Then
								strStudentNames = arrMovedStudsNames(k*3,m)
										strReport = strReport & DrawStudents(strStudentNames)
							End If
						End If
						strReport = strReport & "</td>" &_
						"<td>" & arrMovedStudsRs(k*3+1,m)
						If Not bDrawByClasses Then
							If Not IsEmpty(arrMovedStudsNames(k*3+1,m)) Then
								strStudentNames = arrMovedStudsNames(k*3+1,m)
										strReport = strReport & DrawStudents(strStudentNames)
							End If
						End If
						strReport = strReport & "</td>" &_
						"<td>" & arrMovedStudsRs(k*3+2,m) & "</td>"
					Next
					strReport = strReport & "</tr>"
				End If

'				If m = arrSchoolSettings(1,kSSIndex_GradeJunior_Max) - 1 Or m = arrSchoolSettings(1,kSSIndex_GradeMiddle_Max) - 1 or m = nMaxGrades - 1 Then
				If m = CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Max)) Or m = CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Max)) or m = nMaxGrades Then
'					If m <= arrSchoolSettings(1,kSSIndex_GradeJunior_Max) - 1 Then ' Здесь на строгое равенство (=) проверять не совсем правильно, правильно - на <=, т.к. мы сюда можем зайти не только при условии совпадения текущей параллели (m) с граничными паралл-ми для ступеней,
					If m <= CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Max)) Then ' Здесь на строгое равенство (=) проверять не совсем правильно, правильно - на <=, т.к. мы сюда можем зайти не только при условии совпадения текущей параллели (m) с граничными паралл-ми для ступеней,
						' но и когда эта m - последняя параллель, и в этом случае проверка на строгое рав-во может завести нас в последнюю ветку (Else) - ветку для старшей ступени, хотя последняя параллель может не обязательно относиться к этой старшей ступени.
						nSubLen = m - CLng(arrSchoolSettings(1,kSSIndex_GradeJunior_Min)) + 1 : strGrades = CSTR(arrSchoolSettings(1,kSSIndex_GradeJunior_Min)) & "-" & CSTR(arrSchoolSettings(1,kSSIndex_GradeJunior_Max))
'					ElseIf m <= arrSchoolSettings(1,kSSIndex_GradeMiddle_Max) - 1 Then
					ElseIf m <= CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Max)) Then
						nSubLen = m - CLng(arrSchoolSettings(1,kSSIndex_GradeMiddle_Min)) + 1 : strGrades = CSTR(arrSchoolSettings(1,kSSIndex_GradeMiddle_Min)) & "-" & CSTR(arrSchoolSettings(1,kSSIndex_GradeMiddle_Max))
					Else
						nSubLen = m - CLng(arrSchoolSettings(1,kSSIndex_GradeSenior_Min)) + 1 : strGrades = CSTR(arrSchoolSettings(1,kSSIndex_GradeSenior_Min)) & "-" & CSTR(arrSchoolSettings(1,kSSIndex_GradeSenior_Max))
					End If

					If Not bPreSchool Then
	
						strReport = strReport & "<tr class=""subtotals""><td class=""cell-text"">" & strGrades & "</td>"

						If bFirstSummer Then
							' Определяем и выводим суммарные значения по ступеням. В принципе они от типа периода не зависят и могут быть подсчитаны один раз вверху,
							' но здесь есть сведения о границах ступеней, текущей параллели, поэтому считаем здесь.
							For p = 0 to 1
								nSubRs = 0
								For n = m - nSubLen + 1 to  m
									nSubRs = nSubRs + arrSmrStudsRs(p,n)
								Next
								strReport = strReport & "<td>" & nSubRs & "</td>"
							Next
						End If

						nSubRs = 0
						For n = m - nSubLen + 1 to  m
							nSubRs = nSubRs + CLng(arrStudCount(n))
						Next
						strReport = strReport & "<td>" & nSubRs & "</td>"
						For k = nStartTerm To nResCols + nStartTerm - 1
							For p = 0 to 2
								nSubRs = 0
								For n = m - nSubLen + 1 to  m
									nSubRs = nSubRs + arrMovedStudsRs(k*3+p,n)
								Next
								strReport = strReport & "<td> " & nSubRs & "</td>"
							Next
						Next
						strReport = strReport & "</tr>"

					End If
				End If
			Next

			strReport = strReport & "<tr class=""totals""><td class=""cell-text"">" & obLanguage("Reports","kOnSchool",strFunctionalityType) & "</td>"

			If bFirstSummer Then
				For p = 0 to 1
					nSubRs = 0
'					For n = nMinGrades - 1 To nMaxGrades-1
					For n = nMinGrades To nMaxGrades
						nSubRs = nSubRs + arrSmrStudsRs(p,n)
					Next
					strReport = strReport & "<td>" & nSubRs & "</td>"
				Next
			End If

			nSubRs = 0
'			For m = nMinGrades - 1 To nMaxGrades-1
			For m = nMinGrades To nMaxGrades
				nSubRs = nSubRs + CLng(arrStudCount(m))
			Next
			strReport = strReport & "<td>" & nSubRs & "</td>"

			For k = nStartTerm To nResCols + nStartTerm - 1
				For p = 0 to 2
					nSubRs = 0
'					For n = nMinGrades - 1 to nMaxGrades - 1
					For n = nMinGrades to nMaxGrades
						nSubRs = nSubRs + arrMovedStudsRs(k*3+p,n)
					Next
					strReport = strReport & "<td> " & nSubRs & "</td>"
				Next
			Next
			strReport = strReport & "</tr></table>" & GetBr()
		End If
		nCurrTerm = j
	Next
	If bEmptyTable = True Then
		GetReportTable = GetWarning(obLanguage("Reports","kNoTables"))
	Else
		GetReportTable = strReport
	End If
End Function
Function DrawInOut(inCnt, inStuds, outCnt, outStuds)
	Dim strReport, strStudentNames
	strReport = "<td> " & inCnt
	If Not IsEmpty(inStuds) Then
		strStudentNames = inStuds
		strReport = strReport & DrawStudents(strStudentNames)
	End If
	strReport = strReport & "</td>" &_
	"<td>" & outCnt
	If Not IsEmpty(outStuds) Then
		strStudentNames = outStuds
		strReport = strReport & DrawStudents(strStudentNames)
	End If
	DrawInOut  = strReport & "</td>"
End Function
Function DrawStudents(strStudentNames)
	strStudentNames = Left(strStudentNames, Len(strStudentNames) - 3)
	strStudentNames = "(" & strStudentNames & ")"
	DrawStudents = "<div class='cell-text'>"& DB2HTML_BR(strStudentNames)& "</div>"
End Function
%>
