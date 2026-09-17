<!-- #INCLUDE VIRTUAL="/asp/Reports/DrawReports_inc.asp" -->
<!-- #INCLUDE VIRTUAL = "/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim objInfoRS,nCounter
Dim objLangListRS, nLngCount, arrLangList
Dim arrClassList
Dim arrGrades, nGradeCount, arrGradeSumm
Dim objGradeListRS
Dim objDeviantList, objDeviantUsersList, nDevCount, arrDevList
Dim objFizGroupsList,objFizGroupsUsersList, nFizGrCount, arrFizGroupsList
Dim objFamStatsList,objFamStats, nFmStCount, arrFamStatsList
Dim bNoClasses, bNoGradesForTerm
Dim arrProfileGrades, nProfilesCount
Dim bPreSchool, arrPreSchoolGrades

Dim strRepType, strTermID
Dim strTermName, strClassID, strClassName

Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNTotalStudentsInfo",strFunctionalityType)
End Function
Function GetPageParams()
	If strRepType = "1" then
		GetPageParams = _
			Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
			obLanguage("Reports","kTypeReport"),obLanguage("Reports","kTotalSchoolStudentsInfo",strFunctionalityType), _
			obLanguage("Common","kSchoolPeriod"),strTermName )
	Else
		GetPageParams = _
			Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
			obLanguage("Reports","kTypeReport"),obLanguage("Reports","kTotalClassStudentsInfo",strFunctionalityType), _
			obLanguage("Common","kClass",strFunctionalityType), strClassName, _
			obLanguage("Common","kSchoolPeriod"),strTermName )
	End If
End Function

Function GetReportTable()
	If strRepType = "1" then
		GetReportTable = GetYearTotalInfoTable(strTermID)
	Else
		GetReportTable = GetClassTotalInfoTable(strClassID,strTermID)
	End If
End Function

Sub specialRead()
	strRepType = GetSafeStrParam(Request("ReportType"),GetSafeStrParam(obTokenMgr.GetData(strToken, "stRepType"),"1"))
	If strRepType = "2" Then 
		strClassID = GetSafeID( Request("PCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrClass),"0"))
	End If

	strTermID = GetSafeID(GetSafeParam("TERMID", stCurrTerm, Null), "0")
	strTermName = objNSNET.GetTermName(strTermID)

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	If bPreSchool Then
		arrPreSchoolGrades = Array(obLanguage("Common","kGr0"), obLanguage("Common","kGr1"), obLanguage("Common","kGr2"), obLanguage("Common","kGr3"), obLanguage("Common","kGr4"), obLanguage("Common","kGr5"), obLanguage("Common","kGr6"), obLanguage("Common","kGr7"), obLanguage("Common","kGr8"))
	End If
End Sub

Sub specialMain()
	If strRepType = "2" Then strClassName = objNSNET.GetClassName(strClassID)
End Sub


Sub GetLanguagesList()
	Set objLangListRS = objNSNET.GetForeignLanguages(False)
	nLngCount = objLangListRS.RecordCount
	ReDim arrLangList(nlngCount, 1)
	nCounter=0
	While not objLangListRS.EOF
		arrLangList(nCounter,0)=objLangListRS("FOREIGNLANGID")
		arrLangList(nCounter,1)=objLangListRS("NAME")
		nCounter=nCounter+1
	objLangListRS.MoveNext
	Wend
End Sub

Sub GetDeviantList(bAllClasses)
	Set objDeviantList = objNSNET.GetUserInfoListItems(1029)
	nDevCount = objDeviantList.RecordCount
	If Not bAllClasses Then	Set objDeviantUsersList = objNSNET.GetUserParameterValues(strCurrYearID, strClassID, 1029, strTermID, 0)
	ReDim arrDevList(nDevCount, 1)
	nCounter=0
	While not objDeviantList.EOF
		arrDevList(nCounter,0)=CLng(objDeviantList("ITEMID"))
		arrDevList(nCounter,1)=objDeviantList("ITEMNAME2")
		nCounter=nCounter+1
		objDeviantList.MoveNext
	Wend
End Sub

Sub GetFizGroupsList(bAllClasses)
	Set objFizGroupsList = objNSNET.GetUserInfoListItems(1031)
	nFizGrCount = objFizGroupsList.RecordCount
	If Not bAllClasses Then	Set objFizGroupsUsersList = objNSNET.GetUserParameterValues(strCurrYearID,strClassID,1031,strTermID,0)
	ReDim arrFizGroupsList(nFizGrCount, 1)
	nCounter=0
	While not objFizGroupsList.EOF
		arrFizGroupsList(nCounter,0)=CLng(objFizGroupsList("ITEMID"))
		arrFizGroupsList(nCounter,1)=objFizGroupsList("ITEMNAME2")
		nCounter=nCounter+1
		objFizGroupsList.MoveNext
	Wend
End Sub

Sub GetFamilyStatsList(bAllClasses)
	Set objFamStatsList = objNSNET.GetUserInfoListItems(1032)
	nFmStCount = objFamStatsList.RecordCount
	If Not bAllClasses Then	Set objFamStats = objNSNET.GetUserParameterValues(strCurrYearID,strClassID,1032,strTermID,0)
	ReDim arrFamStatsList(nFmStCount, 1)
	nCounter=0
	While not objFamStatsList.EOF
		arrFamStatsList(nCounter,0)=CLng(objFamStatsList("ITEMID"))
		arrFamStatsList(nCounter,1)=objFamStatsList("ITEMNAME2")
		nCounter=nCounter+1
		objFamStatsList.MoveNext
	Wend
End Sub

'arrClassList(n,0) = "GRADEID"
'arrClassList(n,1) = "AllCount"
'arrClassList(n,2) = "MaleCount"
'arrClassList(n,3) = "FeMaleCount"
'arrClassList(n,4+nLngCount) = Languages
'arrClassList(n,4+nLngCount+nHlGr) = FizGroupsCounts
'arrClassList(n,4+nLngCount+nHlGr+nDevCount) = DeviantsUsersCount
Sub GetGradeList(bAllClasses)
	Dim objTermTypesRs
	Dim nGradeSet, nGrade
	Dim bReadOnlyGrade
	Dim nGradeSetAssigned
	Dim i,j,k,z
	Const ind_TERMTYPEID	= 0
	Const ind_TERMTYPENAME	= 1
	Const ind_GRADESET		= 3
	Const kTermTypeID_LastDefault = 20
	Dim arrTermTypes, bTermTypesIsEmpty
	Dim dctTermTypes, arrTermTypesKeys
	bTermTypesIsEmpty = True

	If bAllClasses Then
		Set objTermTypesRs = objNSNET.GetGradeSetForTermID(strCurrYearID, strTermID)
		bTermTypesIsEmpty = objTermTypesRs.EOF
		If Not bTermTypesIsEmpty Then
			arrTermTypes = objTermTypesRs.GetRows(,,Array("TERMTYPEID", "TERMTYPENAME", "TERMSCOUNT", "GRADESET", "BOUNDED", "PROFILEID"))
			nProfilesCount = Ubound(arrTermTypes, 2)
			Redim arrProfileGrades(nProfilesCount,12)
			For j=0 To nProfilesCount
				Set dctTermTypes = CreateObject("NetCity.Storage")
				nGradeSetAssigned = 0
				nGrade = 0
				nGradeSet = GetSafeLng(arrTermTypes(ind_GRADESET, j), 0)
				While nGradeSet <> 0
					If (nGradeSet Mod 2) <> 0 Then
						dctTermTypes.Item(nGrade) = Array(GetSafeLng(arrTermTypes(ind_TERMTYPEID, j), Null), bReadOnlyGrade)
						nGradeSetAssigned = nGradeSetAssigned Or (2^nGrade)
					End If
					nGradeSet = nGradeSet \ 2
					nGrade = nGrade + 1
				WEnd
				If dctTermTypes.Count > 0 Then ' sort Grades
					bNoGradesForTerm=False
					nGradeCount=dctTermTypes.Count-1
					ReDim arrClassList(dctTermTypes.Count - 1,3+nLngCount+nFizGrCount+nDevCount+nFmStCount)
					nGrade = 0 : i = 0
					While nGradeSetAssigned <> 0
						If (nGradeSetAssigned Mod 2) <> 0 Then
							arrClassList(i,0) = nGrade
							i = i + 1
						End If
						nGradeSetAssigned = nGradeSetAssigned \ 2
						nGrade = nGrade + 1
					WEnd
				Else
					ReDim arrClassList(0,3+nLngCount+nFizGrCount+nDevCount+nFmStCount)
					bNoGradesForTerm = True
				End If
				arrProfileGrades(j,0)=arrTermTypes(5, j)
				For z=1 to i
					arrProfileGrades(j,z)=arrClassList(z-1,0)
				Next
			Next
		End If
	Else
		bNoGradesForTerm=False
		ReDim arrClassList(0, 3+nLngCount+nFizGrCount+nDevCount+nFmStCount)
		arrClassList(0,0)=objNSNET.GetClassName(strClassID)
	End If
End Sub

Function GetTableHeaders()
	Dim i
	GetTableHeaders = GetTableHeader()
	GetTableHeaders = GetTableHeaders & "<th rowspan=2>" & obLanguage("Common","kClass",strFunctionalityType) & "</th><th rowspan=2>" & obLanguage("Reports","kStudentCount") & "</th><th rowspan=2>" & obLanguage("Reports","kSOfBoys") & "</th><th rowspan=2>" & obLanguage("Reports","kSOfGirls") & "</th>" & IIF(nLngCount>0,"<th colspan=" &  nLngCount & ">" & obLanguage("Reports","kLearnLanguage") & "</th>","") & IIF(nFizGrCount>0,"<th colspan=" & nFizGrCount & ">" & obLanguage("Reports","kFizGroup") & "</th>","") & IIF(nDevCount>0,"<th colspan=" & nDevCount&">" & obLanguage("Reports","kDeviant") & "</th>","") & IIF(nFmStCount>0,"<th colspan=" & nFmStCount&">" & obLanguage("Reports","kFamilyStat") & "</th>","") & "</tr>" & "<tr>"
	For i = 0 To nLngCount-1
		GetTableHeaders = GetTableHeaders & "<th>" & GetSafeStr(arrLangList(i,1),-1,"&nbsp") & "</th>" 
	Next
	For i = 0 to nFizGrCount-1
		GetTableHeaders = GetTableHeaders & "<th>" & GetSafeStr(arrFizGroupsList(i,1),-1,"&nbsp") & "</th>" 
	Next
	For i = 0 to nDevCount-1
		GetTableHeaders = GetTableHeaders & "<th>" & GetSafeStr(arrDevList(i,1),-1,"&nbsp") & "</th>" 
	Next
	For i = 0 to nFmStCount-1
		GetTableHeaders = GetTableHeaders & "<th>"& GetSafeStr(arrFamStatsList(i,1),-1,"&nbsp") & "</th>" 
	Next
	GetTableHeaders = GetTableHeaders & "</tr>"
End Function

Sub GetGradeSum()
	Dim i,j,k,z
	Call InitSchoolSettings( objNSNET )
	Redim arrGradeSumm(3,4+nLngCount+nFizGrCount+nDevCount+nFmStCount)
	arrGradeSumm(0,1)=CInt(arrSchoolSettings(1, kSSIndex_GradeJunior_Max))
	arrGradeSumm(1,1)=CInt(arrSchoolSettings(1, kSSIndex_GradeMiddle_Max))
	arrGradeSumm(2,1)=CInt(arrSchoolSettings(1, kSSIndex_GradeSenior_Max))
	arrGradeSumm(0,0)=CInt(arrSchoolSettings(1, kSSIndex_GradeJunior_Min))
	arrGradeSumm(1,0)=CInt(arrSchoolSettings(1, kSSIndex_GradeMiddle_Min))
	arrGradeSumm(2,0)=CInt(arrSchoolSettings(1, kSSIndex_GradeSenior_Min))
	arrGradeSumm(3,0)=obLanguage("Reports","kTotal2")
	For i=0 to nGradeCount
		For j=2 to 4+nLngCount+nFizGrCount+nDevCount+nFmStCount
			arrGradeSumm(3,j)=arrGradeSumm(3,j)+arrClassList(i,j-1)
		Next
		If (arrClassList(i,0)>=arrGradeSumm(0,0)) And (arrClassList(i,0))<=arrGradeSumm(0,1) Then 
			For j=2 to 4+nLngCount+nFizGrCount+nDevCount+nFmStCount
				arrGradeSumm(0,j)=arrGradeSumm(0,j)+arrClassList(i,j-1)
			Next
		ElseIf (arrClassList(i,0)>=arrGradeSumm(1,0)) And (arrClassList(i,0)<=arrGradeSumm(1,1)) Then 
				For j=2 to 4+nLngCount+nFizGrCount+nDevCount+nFmStCount
					arrGradeSumm(1,j)=arrGradeSumm(1,j)+arrClassList(i,j-1)
				Next	
		ElseIf (arrClassList(i,0)>=arrGradeSumm(2,0)) And (arrClassList(i,0)<=arrGradeSumm(2,1)) Then 
				For j=2 to 4+nLngCount+nFizGrCount+nDevCount+nFmStCount
					arrGradeSumm(2,j)=arrGradeSumm(2,j)+arrClassList(i,j-1)
				Next
		End If
	Next
End Sub

Sub GetInfoArrayForAll(strTermID,strYearID)
	Dim arrTempInfo, nOldGrade, arrTempClassList, nTempGradeCount
	Dim bTempNoClasses
	Dim i,j,k,z,ind
	Dim kolvo

	Call GetLanguagesList()
	Call GetDeviantList(True)
	Call GetFizGroupsList(True)
	Call GetFamilyStatsList(True)
	Call GetGradeList(True)

	If bNoGradesForTerm Then Exit Sub

	nGradeCount=0
	For j=0 to nProfilesCount 
		For k=1 to 12
			If arrProfileGrades(j,k)<>"" Then 
				nGradeCount = nGradeCount + 1
			Else
				Exit For
			End IF
		Next
	Next

	ReDim arrClassList(nGradeCount,3+nLngCount+nFizGrCount+nDevCount+nFmStCount)

	ind=0
	bNoClasses = True
	For j = 0 to nProfilesCount
		Set objDeviantUsersList = objNSNET.GetUserParameterValues(strCurrYearID,0,1029,strTermID,arrProfileGrades(j,0))
		Set objFamStats = objNSNET.GetUserParameterValues(strCurrYearID,0,1032,strTermID,arrProfileGrades(j,0))
		Set objFizGroupsUsersList = objNSNET.GetUserParameterValues(strCurrYearID,0,1031,strTermID,arrProfileGrades(j,0))
		ReDim arrTempInfo(12, 3+nLngCount) 
		Set objInfoRS = objNSNET.GetTotalStudentsInfo("-1",strTermID,strYearID,True,arrProfileGrades(j,0))
		nCounter=0
		If Not objInfoRS.eof Then 
			nOldGrade=objInfoRS("GRADE")
			arrTempInfo(ncounter,0)=objInfoRS("GRADE")
		End If
		While not objInfoRS.eof
			kolvo = kolvo + 1
			If objInfoRS("GRADE").value<>nOldGrade Then
				nCounter=nCounter+1
				arrTempInfo(ncounter,0)=objInfoRS("GRADE")
				nOldGrade=objInfoRS("GRADE")
			End If
			arrTempInfo(nCounter,1)=arrTempInfo(nCounter,1)+1
			If objInfoRS("GENDER").value=obLanguage("Common","kMaleLet") Then 
				arrTempInfo(nCounter,2)=arrTempInfo(nCounter,2)+1
			Else 
				arrTempInfo(nCounter,3)=arrTempInfo(nCounter,3)+1
			End If
			For i=0 to nLngCount
				If objInfoRS("LANG_ID").value=arrLangList(i,0) Or objInfoRS("LANG_ID2").value=arrLangList(i,0) Then arrTempInfo(nCounter,4+i)=arrTempInfo(nCounter,4+i)+1
			Next
			objInfoRS.MoveNext
		Wend
	
		nTempGradeCount=0
		For k=1 to 12
			If arrProfileGrades(j,k)<>"" Then 
				nTempGradeCount = nTempGradeCount + 1
			Else
				Exit For
			End IF
		Next
		nTempGradeCount = nTempGradeCount - 1
		ReDim arrTempClassList(nTempGradeCount,3+nLngCount+nFizGrCount+nDevCount+nFmStCount)
		For k=0 to nTempGradeCount
			arrTempClassList(k,0)=arrProfileGrades(j,k+1)
		Next

		For k=0 to nTempGradeCount
			For z=1 to 3+nLngCount+nFizGrCount+nDevCount+nFmStCount
				arrTempClassList(k,z)=0
			Next
		Next

		bTempNoClasses=True
		For k=0 to nTempGradeCount
			For z=0 to 12
				' #12690. В данном случае не должны пониматься как одинаковые значения Empty и 0, иначе портится обработка 0-ой параллели! Здесь вроде arrTempInfo может быть Empty.
				If (Not IsEmpty(arrTempInfo(z,0))) And (arrTempClassList(k,0)=arrTempInfo(z,0)) then
					bTempNoClasses=False
					bNoClasses = False
					For i=1 to 3+nLngCount
						arrTempClassList(k,i)=GetSafeLng(arrTempInfo(z,i),0)
					Next
				End If
			Next
		Next

		If Not bTempNoClasses Then 
			If Not objFizGroupsUsersList.EOF Or Not objDeviantUsersList.EOF Or Not objFamStats.EOF Then
				For k=0 to nTempGradeCount
					If Not objFizGroupsUsersList.EOF Then 
						If arrTempClassList(k,0)>objFizGroupsUsersList("GRADE") Then
							Do Until arrTempClassList(k,0)=objFizGroupsUsersList("GRADE")
								objFizGroupsUsersList.MoveNext	
								If objFizGroupsUsersList.EOF Then Exit Do
							Loop
						End IF
					End IF
					If Not objFizGroupsUsersList.EOF Then 
						Do While arrTempClassList(k,0)=objFizGroupsUsersList("GRADE")
							For z=0 to nFizGrCount
								If arrFizGroupsList(z,0)=CLng(objFizGroupsUsersList("PARAMVALUE_ID")) Then arrTempClassList(k,4+nLngCount+z)=arrTempClassList(k,4+nLngCount+z)+1: Exit For
							Next
							objFizGroupsUsersList.MoveNext
							IF objFizGroupsUsersList.EOF Then Exit Do
						Loop 
					End IF

					If Not objDeviantUsersList.EOF Then  
						If arrTempClassList(k,0)>objDeviantUsersList("GRADE") Then
							Do Until arrTempClassList(k,0)=objDeviantUsersList("GRADE")
								objDeviantUsersList.MoveNext	
								If objDeviantUsersList.EOF Then Exit Do
							Loop
						End IF
					End IF
					If Not objDeviantUsersList.EOF Then  
						Do While arrTempClassList(k,0)=objDeviantUsersList("GRADE") 
							For z=0 to nDevCount-1
								If arrDevList(z,0)=CLng(objDeviantUsersList("PARAMVALUE_ID")) Then arrTempClassList(k,4+nLngCount+nFizGrCount+z)=arrTempClassList(k,4+nLngCount+nFizGrCount+z)+1: Exit For
							Next
							objDeviantUsersList.MoveNext
							IF objDeviantUsersList.EOF Then Exit Do
						Loop 
					End IF

					If Not objFamStats.EOF Then 
						If arrTempClassList(k,0)>objFamStats("GRADE") Then
							Do Until arrTempClassList(k,0)=objFamStats("GRADE")
								objFamStats.MoveNext	
								If objFamStats.EOF Then Exit Do
							Loop
						End IF
					End IF
					If Not objFamStats.EOF Then 
						Do While arrTempClassList(k,0)=objFamStats("GRADE")
							For z=0 to nFmStCount
								If arrFamStatsList(z,0)=CLng(objFamStats("PARAMVALUE_ID")) Then arrTempClassList(k,4+nLngCount+nFizGrCount+nDevCount+z)=arrTempClassList(k,4+nLngCount+nFizGrCount+nDevCount+z)+1: Exit For
							Next
							objFamStats.MoveNext
							IF objFamStats.EOF Then Exit Do
						Loop 
					End IF
				Next
			End IF

			For k=0 to nTempGradeCount
				For i=0 to ind
					' #12690. В данном случае значение Empty в arrClassList(i,0) - не должно сравниваться со значекнием 0 в arrTempClassList(k,0),
					' т.е. результат такого сравнения должен быть False, иначе портится обработака 0-ой параллели!
					If (Not IsEmpty(arrClassList(i,0))) And (arrClassList(i,0) = arrTempClassList(k,0)) Then
						For z=1 to 3+nLngCount+nFizGrCount+nDevCount+nFmStCount
							arrClassList(i,z)=arrClassList(i,z) + arrTempClassList(k,z)
						Next
						Exit For
					End IF
					If i=ind Then
						For z=0 to 3+nLngCount+nFizGrCount+nDevCount+nFmStCount
							arrClassList(i,z)=arrTempClassList(k,z)
						Next
						ind=ind+1
					End IF
				Next
			Next
		End iF
	Next

	nTempGradeCount=0
	For j=0 to nGradeCount
		If arrClassList(j,0)<>"" Then nTempGradeCount = nTempGradeCount + 1
	Next
	nGradeCount=nTempGradeCount-1

	ind=1
	While ind>0
		ind=0
		For j=0 to nGradeCount-1
			' #12690
			IF (Not IsEmpty(arrClassList(j,0))) And (arrClassList(j,0) > arrClassList(j+1,0)) Then
				For z=0 to 3+nLngCount+nFizGrCount+nDevCount+nFmStCount
					arrTempClassList(0,z)=arrClassList(j,z)
					arrClassList(j,z)=arrClassList(j+1,z)
					arrClassList(j+1,z)=arrTempClassList(0,z)
				Next 
				ind=ind+1
			End IF
		Next
	Wend

	Call GetGradeSum()
End Sub

Sub GetInfoArrayForClass(strTermID, strClassID, strYearID)
	Dim arrTempInfo
	Dim i,j,k
	Set objInfoRS = objNSNET.GetTotalStudentsInfo(strClassID,strTermID,strYearID,True,0)
	Call GetLanguagesList()
	Call GetDeviantList(False)
	Call GetFizGroupsList(False)
	Call GetFamilyStatsList(False)
	Call GetGradeList(False)
	nGradeCount=0
	ReDim arrTempInfo(nGradeCount, 3+nLngCount) 
	nCounter=0
	While not objInfoRS.eof
		arrTempInfo(nCounter,1)=arrTempInfo(nCounter,1)+1
		If objInfoRS("GENDER").value=obLanguage("Common","kMaleLet") Then 
			arrTempInfo(nCounter,2)=arrTempInfo(nCounter,2)+1
		Else 
			arrTempInfo(nCounter,3)=arrTempInfo(nCounter,3)+1
		End if
		For i=0 to nLngCount
			If objInfoRS("LANG_ID").value=arrLangList(i,0) Or objInfoRS("LANG_ID2").value=arrLangList(i,0) Then arrTempInfo(nCounter,4+i)=arrTempInfo(nCounter,4+i)+1
		Next
		objInfoRS.MoveNext
	Wend
		
	For i=1 to 3+nLngCount
		arrClassList(0,i)=GetSafeLng(arrTempInfo(0,i),0)
	Next

	For j=4+nLngCount to 3+nLngCount+nFizGrCount+nDevCount+nFmStCount
		arrClassList(0,j)=0
	Next

	While Not objDeviantUsersList.EOF
		For j=0 to nDevCount-1
			If arrDevList(j,0)=CLng(objDeviantUsersList("PARAMVALUE_ID")) Then arrClassList(0,4+nLngCount+nFizGrCount+j)=arrClassList(0,4+nLngCount+nFizGrCount+j)+1: Exit For
		Next
	objDeviantUsersList.MoveNext
	Wend 

	While Not objFizGroupsUsersList.EOF
		For j=0 to nFizGrCount
			If arrFizGroupsList(j,0)=CLng(objFizGroupsUsersList("PARAMVALUE_ID")) Then arrClassList(k,4+nLngCount+j)=arrClassList(k,4+nLngCount+j)+1: Exit For
		Next
	objFizGroupsUsersList.MoveNext
	Wend 
	
	While Not objFamStats.EOF
		For j=0 to nFmStCount
		If arrFamStatsList(j,0)=CLng(objFamStats("PARAMVALUE_ID")) Then arrClassList(k,4+nLngCount+nFizGrCount+nDevCount+j)=arrClassList(k,4+nLngCount+nFizGrCount+nDevCount+j)+1: Exit For
		Next
	objFamStats.MoveNext
	Wend 
End Sub

Function GetYearTotalInfoTable(strTermID)
	Dim i,j,k
	
	Call GetInfoArrayForAll(strTermId,strCurrYearID)
	If Not bNoClasses And Not bNoGradesForTerm Then
		GetYearTotalInfoTable = GetTableHeaders()
		nCounter=0
		If arrClassList(nCounter,0) <= arrGradeSumm(0,1) Then
			j=0
		ElseIf arrClassList(nCounter,0) <= arrGradeSumm(1,1) Then
			j=1
		ElseIf arrClassList(nCounter,0) <= arrGradeSumm(2,1) Then
			j=2
		Else
			j=3
		End IF
		k=-1
		While nCounter<=nGradeCount
			If j<3 Then
				If arrClassList(nCounter,0) > arrGradeSumm(j,1) And k<j Then 
					GetYearTotalInfoTable = GetYearTotalInfoTable & "<tr class=""subtotals"">" & "<td><b>" & GetGradeName(arrGradeSumm(j,0)) & " -- " & GetGradeName(arrGradeSumm(j,1)) & "</b></td>"
					For i=2 to 4+nLngCount+nFizGrCount+nDevCount+nFmStCount
						GetYearTotalInfoTable = GetYearTotalInfoTable & "<td><b>" & arrGradeSumm(j,i) & "</b></td>"
					Next
					GetYearTotalInfoTable = GetYearTotalInfoTable & "</tr>"
					k=j
					If j<2 Then	j=j+1
				End If
			End If
		
			GetYearTotalInfoTable = GetYearTotalInfoTable & "<tr>"
			GetYearTotalInfoTable = GetYearTotalInfoTable & "<td class=""cell-num"">" & GetGradeName(arrClassList(nCounter,0)) & "</td>"
			For i=1 to 3+nLngCount+nFizGrCount+nDevCount+nFmStCount
				GetYearTotalInfoTable = GetYearTotalInfoTable & "<td class=""cell-num"">" & arrClassList(nCounter,i) & "</td>"
			Next
			GetYearTotalInfoTable = GetYearTotalInfoTable & "</tr>"

			If arrClassList(nCounter,0) <= arrGradeSumm(j,1) And (nCounter=nGradeCount) Then 
				GetYearTotalInfoTable = GetYearTotalInfoTable & "<tr class=""subtotals"">" & _
						"<td><b>" & GetGradeName(arrGradeSumm(j,0)) & " -- " & GetGradeName(arrGradeSumm(j,1)) & "</b></td>"
				For i=2 to 4+nLngCount+nFizGrCount+nDevCount+nFmStCount
					GetYearTotalInfoTable = GetYearTotalInfoTable & "<td><b>" & arrGradeSumm(j,i) & "</b></td>"
				Next
				GetYearTotalInfoTable = GetYearTotalInfoTable & "</tr>"
				k=j
				If j<2 then	j=j+1
			End If
			nCounter=nCounter+1
		Wend

		GetYearTotalInfoTable = GetYearTotalInfoTable & "<tr class=""totals"">" & "<td><b>" & arrGradeSumm(3,0) & "</b></td>"
		For i=2 to 4+nLngCount+nFizGrCount+nDevCount+nFmStCount
			GetYearTotalInfoTable = GetYearTotalInfoTable & "<td><b>" & arrGradeSumm(3,i) & "</b></td>"
		Next
		GetYearTotalInfoTable = GetYearTotalInfoTable & "</tr></table>"
	Else
		If bNoGradesForTerm Then 
			GetYearTotalInfoTable = GetYearTotalInfoTable & "<div class=""message"">" &  obLanguage("Reports","kNoGradesForTerm",strFunctionalityType) & "</div>"
		ElseIf bNoClasses Then 
			GetYearTotalInfoTable = GetYearTotalInfoTable & "<div class=""message"">" & obLanguage("Reports","kNoClassesOrNoStudentsForTerm",strFunctionalityType) & "</div>"
		End IF
	End IF
End Function

Function GetClassTotalInfoTable(strClassID,strTermID)
	Dim i
	Call GetInfoArrayForClass(strTermId,strClassID,strCurrYearID)	
	GetClassTotalInfoTable = GetTableHeaders()
	nCounter=0
	While nCounter<=nGradeCount
		GetClassTotalInfoTable = GetClassTotalInfoTable & "<tr>" 
		For i=0 to 3+nLngCount+nFizGrCount+nDevCount+nFmStCount
			GetClassTotalInfoTable = GetClassTotalInfoTable & "<td class=""cell-num"">" & arrClassList(nCounter,i) & "</td>"
		Next
		GetClassTotalInfoTable = GetClassTotalInfoTable & "</tr>"
		nCounter=nCounter+1
	Wend
	GetClassTotalInfoTable = GetClassTotalInfoTable & "</tr></table>"
End Function

Function GetTableHeader()
	GetTableHeader = "<table class=""table-print"">" & _
		"<tr>"
End Function

Function GetGradeName(nGrade)
	nGrade = CLng(nGrade)

	If bPreSchool And nGrade >= 0 And nGrade <= 8 Then
		GetGradeName = arrPreSchoolGrades(nGrade)
	Else
		GetGradeName = CStr(nGrade)
	End If
End Function
%>
