<!-- #INCLUDE FILE="SelectUsersList.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim lngGrade
Dim strFutureYearID,nGRtype

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arMoveBookEdit)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Movement","kTitleAddNonEnrolled",strFunctionalityType)
End Function

Sub ReadState_Before()
End Sub

Sub ReadState_Special()
	lngGrade = Request("GR")
	IF nDocSubType = kYearDocSubType_NotEnrolled And nDocType = kDocType_YEAR Then
		strLetter = "kNotEnrolledNotYearMoved"
		If IsObject(obTokenMgr.GetData(strToken, stMoveDoc)) Then Call obTokenMgr.SetData(strToken, stMoveDoc, Null)
	Else
		strLetter="kNotEnrolled"
		IF isDull(lngGrade) Or  lngGrade < 0 Then lngGrade = 0 'для незачисленных запрещаем неопредлённый фильтр
	End If' not assigned classes

	Set objForm = obTokenMgr.GetData(strToken, "QA_dct")
	nGRtype = 0

	IF isDull(lngGrade) Then
		lngGrade = objForm("FUTUREGRADE")
		IF isDull(lngGrade) Then
			lngGrade = CLNG(objNSNET.GetClassInfo(objForm("CLASSID"))("GRADE"))
		Else
			lngGrade = - GetSafeLng(lngGrade,1)
		End if
	Else
		lngGrade = CLnG(lngGrade)
	End If
End Sub

Sub WriteState_Special()
	Call obTokenMgr.SetData(strToken, "ROLEID", rlStudent)
	Call obTokenMgr.SetData(strToken, "lngGrade", lngGrade)
	Call obTokenMgr.SetData(strToken, stSelectedUsers, Null)
End Sub

Sub Main_Before
	Dim objUsersList

	Set objUsersList = objNSNET.GetStudentList(strSchoolID, strCurrYearID, strFirstLetter, strLastLetter, strGender, lngGrade, lngSortOrder, strLetter, False, False, nPageSize, nCurrPage, pageCount, 0, "" )
	If Not objUsersList Is Nothing Then
		If Not objUsersList.EOF Then
			IF nDocSubType=kYearDocSubType_NotEnrolled And nDocType=kDocType_YEAR Then
				arrRs = objUsersList.GetRows(,,Array("STUDENTID", "NICKNAME", "GENDER", "BIRTHDATE"))
			Else
				arrRs = objUsersList.GetRows(,,Array("STUDENTID", "NICKNAME", "GENDER", "BIRTHDATE", "NOT_AVAILABLE_TO_MOVE", "CLASSNAME"))
			End If
		End If
	End If
End Sub

Sub DrawStudentsCheckBox(strStudentID, i, bSuitableForEnroll, strRwSpan)
	Dim bSelected, arrClasses, strClassID, strClassName, strEOID, strDepartEOID, nNAToMoveRSValue

	strClassesKey = IsAvailableStudent(strStudentID)

	If Not IsDull(strClassesKey) Then
		' ученик уже в редактируемом приказе, вместо чекбокса для выбора выводим имя класса в скобках
		arrClasses = Split(strClassesKey, "_", 2)
		strClassID = arrClasses(0)
		strClassName = objNSNET.GetClassName(strClassID)
		%><td <%=strRwSpan%>><b>(<%=DB2HTML(strClassName)%>)</b></td><%
	Else ' common
		strEOID = "-1" : strDepartEOID = "-1"
		bSelected = IsSelectedStudent(strStudentID)%>
		
		<td width="30px" align="center" <%=strRwSpan%>><%
			If UBound(arrRs,1)<4 Then
				nNAToMoveRSValue = 0
			Else
				nNAToMoveRSValue = GetSafeLng(arrRs(4,i),0)
				WriteHiddenTags(Array("Grade_"&strStudentID, arrRs(5,i)))
			End If

			If bSelected Then
				%><input type="checkbox" name="Students" value="<%=strStudentID%>" checked><%
			ElseIf nNAToMoveRSValue=4 Or (nNAToMoveRSValue=2 and nDocType=2) Then
				%><span style="cursor:help;" onclick="alert(language.Generic.Movement.kNotAvailableToMove);"><b>X</b></span><%
			Else
				%><input type="checkbox" name="Students" value="<%=strStudentID%>"><%
			End If

			If bSelected Then WriteHiddenTags(Array("oldUsers",strStudentID))
			WriteHiddenTags(Array("EOID_" & strStudentID, strEOID, "DEPARTEOID_" & strStudentID, strDepartEOID))%>
		</td><%
	End If
End Sub

Function GetEmptyStudentsMsg()
	GetEmptyStudentsMsg = obLanguage("Movement", "kNoUsersForFilter", Clng(strFilterFuncTypeID))
End Function%>