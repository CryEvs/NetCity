<% ' © 2007-2013 IRTech. All rights reserved.
Dim bNoLetters, arrClassLetters, objGrades, arrGrades, strGradeID, objStages, arrStages, strStageID
Dim bEmptyGrades

Sub InitStages()
	Set objStages = objNSNET.GetStageList(strCurrYearID )
	strStageID = GetSafeLng(Request("NStage"),GetSafeLng(obTokenMgr.GetData(strToken,stCurrStage),0))
	If Not objStages.EOF Then 
		If strStageID = 0 Then strStageID = objStages("STAGE")
		arrStages = objStages.GetRows()
		objStages.MoveFirst
	End If
End Sub

Sub InitGrades_2()
	Set objGrades = objNSNET.GetSchoolYearsGrades(strCurrYearID)
	bEmptyGrades = objGrades.EOF
	If bEmptyGrades Then Exit Sub

	strGradeID = GetSafeLng(Request("GRADE"), GetSafeLng(obTokenMgr.GetData(strToken, stCurrGrade), -1))
	If strGradeID <> -1 Then
		strGradeID = GetSafeIDForRs_Ex(strGradeID, objGrades, "GRADE", -2)
		If strGradeID = -2 Then
			strGradeID = GetSafeLng(objGrades("GRADE"), Null)
		End If
	End If
	
	arrGrades = objGrades.GetRows()
	objGrades.MoveFirst
End Sub

Sub WriteGrade()
	Call obTokenMgr.SetData(strToken, stCurrGrade, strGradeID)
End Sub

Sub InitStagesForSubjectAndTerm( strSubjectID, strTermID )
	Set objStages = objNSNET.GetStagesForTermWithSubjectTotalMarks(strTermID, strSubjectID, strCurrYearID )
	strStageID = GetSafeLng(Request("NStage"),GetSafeLng(obTokenMgr.GetData(strToken,stCurrStage),0))
	If strStageID > 0 Then 
		strStageID = objNSNET.GetSafeStageForTermWithSubjectTotalMarks(strStageID, strTermID, strSubjectID, strCurrYearID)
	End If
	If Not objStages.EOF Then 
		If strStageID = 0 Then strStageID = objStages("STAGE")
		arrStages = objStages.GetRows()
		objStages.MoveFirst
	End If
End Sub


Function GetPreSchoolGradeName(theGrade)
	Select Case theGrade
		Case 0: GetPreSchoolGradeName = obLanguage("Common","kGr0")
		Case 1: GetPreSchoolGradeName = obLanguage("Common","kGr1")
		Case 2: GetPreSchoolGradeName = obLanguage("Common","kGr2")
		Case 3: GetPreSchoolGradeName = obLanguage("Common","kGr3")
		Case 4: GetPreSchoolGradeName = obLanguage("Common","kGr4")
		Case 5: GetPreSchoolGradeName = obLanguage("Common","kGr5")
		Case 6: GetPreSchoolGradeName = obLanguage("Common","kGr6")
		Case 7: GetPreSchoolGradeName = obLanguage("Common","kGr7")
		Case 8: GetPreSchoolGradeName = obLanguage("Common","kGr8")
		Case Else: GetPreSchoolGradeName = theGrade
	End Select
End Function

Sub InitStageGrades( theStage )
	strGradeID = GetSafeLng(Request("GRADE"), GetSafeLng(obTokenMgr.GetData(strToken,stCurrGrade), 0))
	Set objGrades = objNSNET.GetStageGradeList(strCurrYearID, theStage, FuncType_School, True)
	If objGrades.EOF Then GenerateError( "В учебном плане не заданы часы" )
	arrGrades = objGrades.GetRows()
	objGrades.MoveFirst
	If strGradeID > 0 Then strGradeID = objNSNET.GetSafeStageGradeID(strGradeID,strCurrYearID, theStage )
	If strGradeID = 0 Then 
		If Not objGrades.EOF Then strGradeID=objGrades("GRADE") Else strGradeID = -2
	End If
End Sub

Sub InitStageWithSubjectTotalMarksGrades( theStage, strSubjectID, strTermID )
	strGradeID = GetSafeLng(Request("GRADE"), GetSafeLng(obTokenMgr.GetData(strToken,stCurrGrade), 0))
	Set objGrades = objNSNET.GetGradesWithSubjectTotalMarks(strCurrYearID, theStage, strSubjectID, strTermID )
	If Not objGrades.EOF Then 
		arrGrades = objGrades.GetRows()
		objGrades.MoveFirst
	End IF
	If strGradeID > 0 Then
		strGradeID = objNSNET.GetSafeGradeIDWithSubjectTotalMarks(strGradeID,strCurrYearID, strSubjectID, strTermID )
		strGradeID = objNSNET.GetSafeStageGradeID(strGradeID,strCurrYearID, theStage )
	End If
	If strGradeID = 0 Then 
		If Not objGrades.EOF Then strGradeID=objGrades("GRADE") Else strGradeID = -2
	End If
End Sub

Sub DrawStagesWithTotal()%>
	<%=PopulateSelect(objStages,"STAGE","NAME",strStageID)
	%><option <%If strStageID = -1 Then rw " selected"%> value="-1"><%=obLanguage("Reports","kTotalForSchool",strFunctionalityType)%></option><%
End Sub

Sub DrawGrades( theGrade )
	Dim i%>
	<select name="Grade" class="form-control"><%
		For i = 0 To UBound(arrGrades, 2) %>
			<option value="<%=arrGrades(0, i)%>" <%If CLng(arrGrades(0, i)) = theGrade Then Response.Write "selected"%>><%=GetGradeByNum( arrGrades(0, i) )%></option><%
		Next%>
	</select><%
End Sub

Sub DrawStagesAndTotal( theStrForm )
	If strStageID = "0" Then
		DrawInfo obLanguage("Common","kNo"), False
		bExit = True
	Else
		OpenFormGroup obLanguage("Common","kStage")
		%>
				<select NAME="NStage" class="form-control" onChange="OnChangeSelect('<%=theStrForm%>','<%=strScriptName%>')">
					<%Call DrawStagesWithTotal() %>
				</select>
		<%
		CloseFormGroup
	End If
End Sub

Sub DrawFilterGradesAndAll( theStrForm )
	Dim strChange, i, bPreSchool
	bPreSchool = CLng(strFunctionalityType) = kFuncType_PreSchool
	If bEmptyGrades Then%><tr><td colspan="2" class="SmallHeader"><%=obLanguage("Filter","kNoYearClasses",strFunctionalityType)%></td></tr><% bExit = True
	Else
		strChange = IIF( theStrForm="","", "OnChangeSelect('"&theStrForm&"','"&Request.ServerVariables("SCRIPT_NAME")&"');")
		OpenFormGroup obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType)

		%>
				<select NAME="GRADE" class="form-control" onChange="<%=strChange%>">
					<option <%If Clng(strGradeID) = -1 Then rw " selected "%> value="-1"><%=obLanguage("Common","kAll")%></option><%
					For i = 0 To UBound(arrGrades, 2) %>
						<option value="<%=arrGrades(0, i)%>" <%If CLng(arrGrades(0, i)) = Clng(strGradeID) Then rw "selected"%>><%=IIF(bPreSchool,GetPreSchoolGradeName(arrGrades(0, i)),arrGrades(0, i))%></option><%
					Next%> 
				</select>
		<%
		CloseFormGroup
	End If
End Sub

Sub InitClassLetters(withAddProg)
	If strFunctionalityType = 1 Then bNoLetters=True : Exit Sub
	Call InitClassLetters_Ex(strCurrYearID, withAddProg)
End Sub

Sub InitClassLetters_Ex( strInYearID, withAddProg )
	On Error Resume Next
	If IsEmpty( strInYearID ) Then bNoLetters=True : Exit Sub
	Dim objClassLetters

	Set objClassLetters = objNSNET.GetClassLetters(strInYearID, withAddProg)
	TestError obLanguage("Common","kCantGetLitClasses",strFunctionalityType)
	bNoLetters = objClassLetters.EOF
	If bNoLetters Then Exit Sub
	arrClassLetters = objClassLetters.GetRows()
End Sub

' Внимание! В этой ф-ции должны быть в запросе возвращ. поля - одинаковые с InitClassLetters_Ex!
Sub InitClassLetters_AddSchool()
	On Error Resume Next
	Dim objClassLetters
	If IsEmpty( strCurrYearID ) Then bNoLetters=True : Exit Sub

	Set objClassLetters = objNSNET.GetClassLetters_AddSchool(strCurrYearID)
	TestError obLanguage("Common","kCantGetLitClasses",strFunctionalityType)
	bNoLetters = objClassLetters.EOF
	If bNoLetters Then Exit Sub
	arrClassLetters = objClassLetters.GetRows()
End Sub

' arrClassLetters(0, i) - для ОДО может содержать кавычки. Поэтому используем Server.HTMLEncode, DB2Value - не подходит, т.к. вызывает Trim().
Sub DrawClassLetters( strLetter, strJS )
	Dim i%>
	<select name="Letter" OnChange="<%If Not IsDull(strJS) Then%><%=strJS%><%End If%>" class="form-control form-control-inline">
		<option value=" "> </option><%
		For i = 0 To UBound(arrClassLetters, 2) %>
			<option value="<%=Server.HTMLEncode(arrClassLetters(0, i))%>"<%If CStr(arrClassLetters(0, i)) = strLetter Then Response.Write " selected"%>><%=arrClassLetters(0, i)%></option><%
		Next%>
	</select><%
End Sub

Sub DrawSmartLetterInput( strLetter )
	If bNoLetters Then
		DrawInputEx strLetter, "Letter2", "text", "", 4, 15, "FilterWhiteSpace", " "
	Else
		%><div class="input-group"><%
			DrawInputEx strLetter, "Letter2", "text", "", 4, 15, "FilterWhiteSpace", " "
			%><div class="input-group-btn">
				<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="caret"></span></button>
				<ul class="dropdown-menu dropdown-menu-right copyfrom" role="menu">
					<%
					For i = 0 To UBound(arrClassLetters, 2)
						%><li><%=DB2Html(arrClassLetters(0, i))%></li><%
					Next
					%>
				</ul>
			</div>
		</div><%
	End If
End Sub
%>
