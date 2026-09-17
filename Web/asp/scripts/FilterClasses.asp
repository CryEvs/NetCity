<% ' © 2007-2015 IRTech. All rights reserved.
Dim strClassID, objClassesRs, strMDClassName

Sub InitTeacherClasses(ByVal bAllowAll)
	strClassID = GetSafeID( Request("PCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrClass),"0"))
	If Not bAllowAll And (strClassID = "-1") Then strClassID = "0"
	If strTeacherID = "-1" Then
		Set objClassesRs = objNSNET.GetYearClasses(strCurrYearID)
	Else
		Set objClassesRs = objNSNET.GetClassListForTeacherAndChief(strTeacherID, strCurrYearID)
	End If
	If Not objClassesRs.EOF Then
		If strClassID <> "-1" Then
			If strClassID <> "0" Then
				If strTeacherID = "-1" Then
					if not objClassesRs.ExistsByField("CLASSID", strClassID) Then strClassID = 0
				Else
					strClassID = GetSafeClassIDOnTeacherChange( objClassesRs, strClassID )
					If Not bAllowAll And (strClassID = "-1") Then strClassID = "0"
				End If
			End If
			If strClassID = "0" Then strClassID = GetSafeID( objClassesRs("CLASSID"), NULL )
		End If
	Else
		strClassID = "0"
	End If
End Sub

Sub InitYearClasses( )
	strClassID = GetSafeID( Request("PCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrClass),"0"))
	Set objClassesRs = objNSNET.GetYearClasses(strCurrYearID)
	If objClassesRs.EOF Then strClassID = "0" :Exit Sub
	If not objClassesRs.ExistsByField("CLASSID", strClassID) Then
		strClassID = GetSafeID( objClassesRs("CLASSID"), NULL )
	End If
End Sub

Sub InitYearClassesAll( )
	strClassID = GetSafeID( Request("PCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrClass),"0"))
	Set objClassesRs = objNSNET.GetYearClasses(strCurrYearID)
	If objClassesRs.EOF Then strClassID = "0" :Exit Sub
	If strClassID = "-1" Then Exit Sub
	If not objClassesRs.ExistsByField("CLASSID", strClassID) Then 
		strClassID = GetSafeID( objClassesRs("CLASSID"), NULL )
	End If
End Sub

Sub InitYearGradeClassesAll(nGradeID)
	strClassID = GetSafeID( Request("PCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrClass),"0"))
	Set objClassesRs = objNSNET.GetClassesForGrade(nGradeID, strCurrYearID)
	If objClassesRs.EOF Then strClassID = "0" :Exit Sub
	If strClassID = "-1" Then Exit Sub
	strClassID = CStr(GetSafeIDForRs(strClassID, objClassesRs, "CLASSID"))
	'If strClassID = "0" Then strClassID = GetSafeID(objClassesRs("CLASSID"), NULL)
	If strClassID = "0" Then strClassID = "-1"
End Sub

Sub InitMoveDocClassesAll(nYearID, nDocType, nDocSubType, bAddSch)
	'InitMoveDocClassesAll ни разу не вызывается 
	strMDClassName = GetSafeStr( Request("CurrClassName"), -1, GetSafeStr(obTokenMgr.GetData( strToken, "CurrClassName"),-1,"-1"))
	strClassID = GetSafeID( Request("PCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrClass),"0"))
	Set objClassesRs = objNSNET.GetAvailableClassesForMoveDoc(strSchoolYearID,nYearID, nDocType, nDocSubType, True, bAddSch)
	If objClassesRs.EOF Then strClassID = "0" :Exit Sub
	If strClassID="-1" Then Exit Sub
	If not objClassesRs.ExistsByField("CLASSID",strClassID) Then 
		strClassID = GetSafeID( objClassesRs("CLASSID"), NULL )
		strMDClassName = GetSafeStr( objClassesRs("CLASSNAME"), -1, "-1")
	End If
End Sub

Sub InitMoveDocClasses(nYearID, nDocType, nDocSubType, bAddSch)
	strClassID = GetSafeID( Request("PCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrClass),"0"))
	If Not IsDull(nDocSubType) Then
		nDocSubType = CLng(nDocSubType) ' Иногда был тип Integer, и при этом следующая ф-я из длл выдавала ошибку.
	End If
	Set objClassesRs = objNSNET.GetAvailableClassesForMoveDoc(strSchoolYearID,nYearID, nDocType, nDocSubType, False, bAddSch)
	If objClassesRs.EOF Then strClassID = "0" :Exit Sub
	If not objClassesRs.ExistsByField("CLASSID", strClassID) Then 
		strClassID = GetSafeID( objClassesRs("CLASSID"), NULL )
	End If
End Sub

Sub InitYearClassesAll_Future(strFutureYearID)
	Dim strTmpYearID

	strTmpYearID = strCurrYearID
	strCurrYearID = strFutureYearID

	Call InitYearClassesAll()
	strCurrYearID = strTmpYearID
End Sub


Sub InitYearStudentClasses( theStudentID )
	strClassID = GetSafeID( Request("PCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrClass),"0"))
	Set objClassesRs = objNSNET.GetClassListForYearStudent(strCurrYearID, theStudentID, False)
	If objClassesRs.EOF Then strClassID = "0" :Exit Sub
	If not objClassesRs.ExistsByField("CLASSID", strClassID) Then 
		strClassID = GetSafeID( objClassesRs("CLASSID"), NULL )
	End If
End Sub

'по сравнению с InitYearStudentClasses остается только класс, в котором ученик учится в наст. момент
Sub InitYearStudentClassesEx( theStudentID )
	strClassID = GetSafeID( Request("PCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrClass),"0"))
	Set objClassesRs = objNSNET.GetClassListForYearStudent(strCurrYearID, theStudentID, True)
	If objClassesRs.EOF Then strClassID = "0" :Exit Sub
	If not objClassesRs.ExistsByField("CLASSID", strClassID) Then 
		strClassID = GetSafeID( objClassesRs("CLASSID"), NULL )
	End If
End Sub

' Получаются классы, где theTeacherID - классный руководитель!
Sub InitYearTeacherClasses( theTeacherID )
	strClassID = GetSafeID( Request("PCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrClass),"0"))
	Set objClassesRs = objNSNET.GetYearTeacherClasses(strCurrYearID, theTeacherID)
	If objClassesRs.EOF Then strClassID = "0" :Exit Sub
	If strClassID = "-1" Then Exit Sub	
	If not objClassesRs.ExistsByField("CLASSID", strClassID) Then 
		strClassID = GetSafeID( objClassesRs("CLASSID"), NULL )
	End If
End Sub

Sub InitMovDocClasses(strYearID, nDocType, nDocSubType)
	strMDClassName = GetSafeStr( Request("CurrClassName"), -1, GetSafeStr(obTokenMgr.GetData( strToken, "CurrClassName"),-1,"-1"))
	Set objClassesRs = objNSNET.GetMoveBookClasses(strYearID, nDocType, nDocSubType)
	If objClassesRs.EOF Then strMDClassName = "-1" :Exit Sub
	If strMDClassName = "-1" Then Exit Sub
End Sub

Sub DrawYearClasses( theStrForm, bAll, strEmptyMsg )
	If  strClassID = "0" Then
		DrawInfo strEmptyMsg, False
		bExit = True : Exit Sub
	End If
	DrawFilterRow theStrForm, obLanguage("Common","kClass",strFunctionalityType), "PCLID", objClassesRs, "CLASSID", "CLASSNAME", strClassID, bAll
End Sub

Sub DrawMovDocClasses( theStrForm, nYearID, bAll, strEmptyMsg )
	DrawFilterRow theStrForm, obLanguage("Common","kClass",strFunctionalityType), "CurrClassName", objClassesRs, "CLASSNAME", "CLASSNAME", strMDClassName, bAll
	%><div class="hide"><input name="PCLID" value="<%=objNSNET.GetClassID(Empty,nYearID,strMDClassName) %>" type="hidden"/></div><%
End Sub

Sub DrawYearClassesTable( theStrForm, bAll )
	DrawFilterRowTable theStrForm, obLanguage("Filter","kClassGB",strFunctionalityType), "PCLID", objClassesRs, "CLASSID", "CLASSNAME", strClassID, bAll
End Sub

Sub WriteClass
	Call obTokenMgr.SetData(strToken, stCurrClass, strClassID)
	Call obTokenMgr.SetData(strToken, "CurrClassName", GetSafeStr( strMDClassName,-1,"-1"))
End Sub

Sub InitTeacherSubjectClasses( bAll, strTeacherID, strSubjectID, dtStart, dtEnd )
	Dim strMainTeacherID

	If bAll Then
		strMainTeacherID = "-1"
	Else
		strMainTeacherID = strUserID
	End If

	strClassID = GetSafeID( Request("PCLID"), GetSafeID(obTokenMgr.GetData( strToken, stCurrClass),"-1"))
	Set objClassesRs = objNSNET.GetTeacherSubjectClassList(strMainTeacherID, strTeacherID, strSubjectID, strCurrYearID, dtStart, dtEnd)
	If objClassesRs.EOF Then
		strClassID = "0"
	Else
		strClassID = GetSafeClassIDOnTeacherChange( objClassesRs, strClassID )
	End If
End Sub

Function GetSafeClassIDOnTeacherChange(objClassesRs, strClassID)
	GetSafeClassIDOnTeacherChange = GetSafeClassIDOnTeacherChange_Common(objClassesRs, strClassID, "CLASSID")
End Function

Function GetSafeClassIDOnTeacherChange_Common(objClassesRs, strClassID, strFieldName)
	If Not objClassesRs.EOF Then
		While Not objClassesRs.EOF
			If CStr(objClassesRs(strFieldName))=strClassID Then
				GetSafeClassIDOnTeacherChange_Common = strClassID
				objClassesRs.MoveFirst
				Exit Function
			End If
			objClassesRs.MoveNext
		Wend
		objClassesRs.MoveFirst
	End If
	GetSafeClassIDOnTeacherChange_Common = "-1"
End Function
%>
