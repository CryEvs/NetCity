<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE FILE="MoveBook_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Const kTitle_ClassChief_Displ = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

Dim objStudentList
Dim nClassID, strClassName, nEnrollFrom
Dim bEmpty
Dim nDocType
Dim bIsAvailable
Dim bCheckArch, bTransferFromPrevYearInArch, dctTransfered
Dim strMoveToClassID
Dim bAddSchool, strClassChief, strClassChief_MoveTo
Dim bNonClass
Dim nDocSubType, bCommonSchool

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arMoveBookEdit)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Movement","kTitleAddStudentsToDoc")

	If bAddSchool And nDocType = kDocType_MOVE Then
		GetPageTitle = GetPageTitle & kTitle_ClassChief_Displ & GreenText(DB2HTML(strClassChief_MoveTo))
	End If
End Function

Sub ReadState()
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	bCommonSchool = (CLng(strFunctionalityType) = kFuncType_Common)
	nEnrollFrom = GetSafeLng(Request("ENROLLFROM"), 0)
	nDocType = GetSafeLng(Request("DOCTYPE"), Null)
	nDocSubType = GetSafeLng(Request("DOCSUBTYPE"), kDocSubType_Simple)

	If nEnrollFrom <> kEnrollFrom_WithoutClass Then
		nClassID = GetSafeLng(obTokenMgr.GetData(strToken, stCurrClass), -1)
		If nClassID >0 Then
			strClassName = objNSNET.GetClassName(nClassID)
			If bAddSchool Then strClassChief = GetClassAndChief(nClassID)
		Else
			strClassName = obLanguage("Common","kNo")
		End If
	Else
		nClassID = -1
	End If

	strMoveToClassID = "0"
	If nDocType = kDocType_MOVE Then
		strMoveToClassID = GetSafeID(obTokenMgr.GetData(strToken, stMoveToClass), Null)
		If bAddSchool Then strClassChief_MoveTo = GetClassAndChief(strMoveToClassID)
	End If
End Sub

Sub Main
	Dim objRs, strPrevSYID, strStudentID, strErr

	bNonClass = False
	bCheckArch = False

	If nDocType <> kDocType_ENROLL Then
		'выбытие
		Set objRs = objNSNET.GetSchoolYearList(strSchoolID, True)
		If objRs.EOF Then GenerateError obLanguage("Common","kUnexpErr")
		objRs.MoveNext

		If Not objRs.EOF Then ' наверное ARCHIVESTATUS нужен только в FB
			strPrevSYID = GetSafeID(objRs("SCHOOLYEARID"), Null)
			Set objRs = objNSNET.GetYearInfo(strPrevSYID)
			If objRs.EOF Then GenerateError obLanguage("Common","kUnexpErr")
			If GetSafeLng(objRs("ARCHIVESTATUS"), Null) = kArchiveStatusCleared Then bCheckArch = True
		End If
	End If

	If nDocType = kDocType_ENROLL Then ' зачисление возможно только безприказников по другому сюда не попасть
		Set objStudentList = objNSNET.GetCurrClassStudentsWithoutOrder(strCurrYearID, nClassID, 0)
	Else
		If nDocType = kDocType_MOVE And bCommonSchool Then
			Set objStudentList = objNSNET.GetClassStudentListForTransferMoveDoc(nClassID, nDocSubType)
		Else
			Set objStudentList = objNSNET.GetCurrClassStudentList(nClassID, strMoveToClassID)
		End If
	End If
	bEmpty = objStudentList.EOF

	Set dctMoveDoc = Nothing
	bIsAvailable = True ' неопределённое значение принято за True - чтобы далее в основном использовать значение bEmpty и при этом различить ситуацию,
						' когда bEmpty приняло значение True в результате того, что все ученики уже попали в тек. приказ (это будет bEmpty=True и bIsAvailable=False),
						' bEmpty=True и bIsAvailable=True - говорит о том, что главный запрос выдал "пусто" - это всё надо просто для вывода правильного сообщения.
	If Not bEmpty Then
		bIsAvailable = True
		If IsObject(obTokenMgr.GetData(strToken, stMoveDoc)) Then
			Set dctMoveDoc = obTokenMgr.GetData(strToken, stMoveDoc)
			bIsAvailable = GoToFirstAvailableStudent()
			bEmpty = Not bIsAvailable ' recalc
		End If
	End If

	bTransferFromPrevYearInArch = False
	If Not bEmpty And bCheckArch Then
		' use ArchCon here
'FedorovSY		If Not OpenConnection( objArchCon ) Then GenerateError obLanguage("Common","kErrNoAccessDB_Arch") & ": " & err.description
		If Not objNSNETArch.IsCanConnect(FALSE, strErr) Then GenerateError obLanguage("Common","kErrNoAccessDB_Arch") & ": " & strErr

		Set objRs = objNSNETArch.GetTransferedFromPrevYear(nClassID)
		If Not objRs.EOF Then
			bTransferFromPrevYearInArch = True
			Set dctTransfered = Server.CreateObject("NetCity.Storage")
			While Not objRs.EOF
				strStudentID = GetSafeID(objRs("STUDENTID"), Null)
				dctTransfered(strStudentID) = ""
				objRs.MoveNext
			WEnd
		End If
	End If
End Sub

Function GoToFirstAvailableStudent()
	Dim strCurStudentID, bGoNext

	While Not objStudentList.EOF
		strCurStudentID = GetSafeID(objStudentList("STUDENTID"), Null)
		bGoNext = False
		strClassesKey = IsAvailableStudent(strCurStudentID)
		If IsDull(strClassesKey) Then
			GoToFirstAvailableStudent = True
			Exit Function ' objStudentList - остановлен на первом подходящем (т.е. пока ещё не внесённом в тек. приказ) ученике
		End If
		objStudentList.MoveNext
	Wend
	GoToFirstAvailableStudent = False ' Все эти ученики уже включены в текущий приказ
End Function

Sub onHead()%>
<SCRIPT><!--
	function Back() {
		var form = document.MainForm;

		form.GoBack.value = "1";
		<%If nDocType = kDocType_MOVE Then%>
			goBack(form, "ClassesMoveBookEdit.asp");
		<%Else%>
			goBack(form, "MoveBookEdit.asp");
		<%End If%>
	}

	<%If Not bEmpty Then%>
		function isStudentsChecked() {
			var i, form = document.forms['MainForm'];

			if (!form.elements['Students'])
				return false;

			var elStudents = form.elements['Students'];
			var bChecked = false;

			if(elStudents.length) {
				for(i = 0; i < elStudents.length; i++) {
					if(elStudents[i].checked) {
						bChecked = true;
						break;
					}
			}	}
			else {
				if(elStudents.checked)
					bChecked = true;
			}

			if(!bChecked) {
				return false;
			}

			return true;
		}

		function AddStudents() {
			var form = document.MainForm;

			form.GoBack.value = "";

			if(isStudentsChecked())
				<%If nDocType = kDocType_MOVE Then%>
					ok_check_db( "MainForm", "ClassesMoveBookEdit.asp" );
				<%Else%>
					ok_check_db( "MainForm", "SaveMoveBook.asp" );
				<%End If%>
			else
				alert(language.Movement.kSelectStudentsForDoc);
		}

		function CheckAll() {
			var form = document.forms['MainForm'];

			if (form) {
				if (form.elements['Students']) {
					if (!form.elements['Students'].length) {
						form.elements['Students'].checked = true;
					}
					else {
						var i;
						for (i=0; i<form.elements['Students'].length; ++i)
							form.elements['Students'][i].checked = true;
					}
				}
			}
		}
		function UncheckAll() {
			var form = document.forms['MainForm'];
			if (form) {
				if (form.elements['Students']) {
					if (!form.elements['Students'].length) {
						form.elements['Students'].checked = false;
					}
					else {
						var i;
						for (i=0;i<form.elements['Students'].length;++i)
							form.elements['Students'][i].checked = false;
					}
				}
			}
		}
	<%End If%>
//--></SCRIPT><%
End Sub

Sub DrawButtons()
	ButtonAdd "AddStudents();", obLanguage("Movement","kAddStudentsToDoc",strFunctionalityType)
	Response.Write(ShowButton("CheckAll" ,"markall", "JavaScript:CheckAll()", obLanguage("Common","kCheckAllStudents",strFunctionalityType), obLanguage("Common","kCheckAll")))
	Response.Write(ShowButton("UncheckAll" ,"clearall", "JavaScript:UncheckAll()", obLanguage("Common","kUncheckAllStudents",strFunctionalityType), obLanguage("Common","kUnCheckAll")))
End Sub

Sub DrawFilters(strForm)
End Sub

Sub onDrawPage()
	Dim rsClass, strGR

	Set rsClass = objNSNET.GetClassInfo(GetSafeLng(obTokenMgr.GetData(strToken, stCurrClass), -1))
	If rsClass.EOF Then strGR = "" Else strGR = rsClass("GRADE")%>

	<FORM NAME="MainForm" METHOD="post" ACTION="MoveBookEdit.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("RestoreParams", "1", "GoBack", "", "DOCSUBTYPE", Request("DOCSUBTYPE"), "GR", strGR))%><%
		
		Call DrawButtonsFilters(Not bEmpty, "MainForm")%>

		<div class="row">
			<div class="col-md-8"><%
				Call DrawStudents()%>
			</div>
		</div>
	</FORM><%
End Sub

Sub DrawStudents()
	Dim strTitle, strCurStudentID, bMaySelect, strWithoutOrder
	Dim bGoNext

	strWithoutOrder = obLanguage("Movement","kWithoutOrder")
	strTitle = obLanguage("Common","kStudents",strFunctionalityType) & " " & GreenText(DB2HTML(IIf(bAddSchool, strClassChief, strClassName))) & " " & obLanguage("Movement","kOfClass",strFunctionalityType)

	If nDocType = kDocType_ENROLL Then strTitle = strTitle & strWithoutOrder%>

	<h2><%=strTitle%></h2><%
	If bEmpty Then
		Dim strText
		
		If bIsAvailable Then
			strText = obLanguage("Movement","kNoStudentsInClassForMoveDoc",strFunctionalityType)
		Else
			strText = obLanguage("Movement","kAllStudentsInOrder_1",strFunctionalityType)
			strWithoutOrder = strWithoutOrder & obLanguage("Movement","kAllStudentsInOrder_2")
		End If

		If nDocType = kDocType_ENROLL Then 
			strText = strText & strWithoutOrder
		End If

		Call DrawInfo(strText, False)
	Else%>
		<TABLE class="table table-bordered table-bright-striped table-hover table-xs table-thin">
			<tr>
				<th width="1px">&nbsp;</th>
				<th><%=obLanguage("Common","kDisplayName")%></th>
				<th><%=obLanguage("Common","kGender")%></th>
				<th><%=obLanguage("Common","kBDate")%></th>
			</tr><%
			While Not objStudentList.EOF
				strCurStudentID = GetSafeID(objStudentList("STUDENTID"), Null)
				strClassesKey = IsAvailableStudent(strCurStudentID)

				If nDocType = kDocType_ENROLL Then
					' WithoutOrder
					bMaySelect = True
				Else
					' чтобы выбирать ученика в приказ о выбытии и переводе, он должен быть зачислен в текущий класс по приказу
					bMaySelect = (GetSafeLng(objStudentList("BOOK_CNT"), 0) <> 0)

					If Not bMaySelect And bTransferFromPrevYearInArch Then
						' смотрим также в арх. базе
						bMaySelect = dctTransfered.Exists(strCurStudentID)
					End If
				End If

				If IsDull(strClassesKey) Then%>
					<TR>
						<TD align="center"><%
							If bMaySelect Then
								If nDocType <> kDocType_ENROLL Then
									If objStudentList("NOT_AVAILABLE_TO_MOVE") = 0 Then
										%><INPUT TYPE="CHECKBOX" NAME="Students" VALUE="<%=strCurStudentID%>"><%
									Else
										%><span style="cursor:help;" onclick="alert(language.Generic.Movement.kNotAvailableToMove);"><b>X</b></span><%
									End If
								Else
									%><INPUT TYPE="CHECKBOX" NAME="Students" VALUE="<%=strCurStudentID%>"><%
								End If
							Else
								Response.Write obLanguage("Movement","kWithoutOrder2")
							End If%>
						</TD>
						<TD>
							<%If bNonClass Then RW objStudentList("GRADE") & " - "
							RW DB2HTML(objStudentList("NICKNAME"))%>
						</TD>
						<TD align="CENTER"><%=DB2HTML(objStudentList("GENDER"))%></TD>
						<TD align="CENTER"><%=Date2Str(objStudentList("BIRTHDATE"))%></TD>
					</TR><%
				End If

				objStudentList.MoveNext
			Wend%>
		</TABLE><%
	End If
End Sub

Function GetClassAndChief(strClsID)
	Dim objClassInfo, strClsName
	Dim strClsChiefs, objClsTeachers

	Set objClassInfo = objNSNET.GetClassInfo(strClsID)
	If Not objClassInfo.EOF Then
		strClsName = GetSafeStr(objClassInfo("CLASSNAME"), -1, "")
	End If

	Set objClsTeachers = objNSNET.GetClassChiefs(strClsId)
	strClsChiefs = ""
	While Not objClsTeachers.EOF
		strClsChiefs = strClsChiefs & DB2HTML(objClsTeachers("NICKNAME")) & ", "
		objClsTeachers.MoveNext
	Wend
	strClsChiefs = Left(strClsChiefs, Len(strClsChiefs) - 2)

	GetClassAndChief = strClsName
	If Not IsDull(strClsChiefs) Then
		GetClassAndChief = GetClassAndChief & " (" & strClsChiefs & ")"
	End If
End Function%>