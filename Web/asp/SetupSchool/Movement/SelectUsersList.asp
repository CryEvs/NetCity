<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersUsers.asp" -->
<!-- #INCLUDE FILE="MoveBook_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

'	GoalPage=<page for redirect with result>
' Page work with array getting from recordset.
' The fields of array: ID, NAME, GENDER, BIRTHDATE.
' The result is Dictionary placed to obTokenMgr with key stSelectedUsers.
' For first entry to this page the resulting Dictionary is created (becomes empty!)

Dim nFutureClassID
Dim lngUserCnt,arrRs

Dim bSelf, i, dctSelectedUsers, strUID
Dim strBackPage, strGoalPage
Dim bNeedGrades
Dim strFilterFuncTypeID
Dim nDocsubType, nDocType
Dim objForm

Sub ReadState()
	ReadState_Before
	Call ReadCommonUsersFilter(RoleGroup_Students)

	lngSortOrder = 0
	bNeedGrades = True
	strFilterFuncTypeID = strFunctionalityType

	strBackPage = GetSafeStr(Request("BackPage"), -1, Null)
	strGoalPage = GetSafeStr(Request("GoalPage"), -1, Null)'???TODO: Null or no
	nDocsubType = CINT(Request("DOCSUBTYPE"))
	nDocType = GetSafeLng(Request("DOCTYPE"), kDocType_YEAR)
	nFutureClassID = Request("FUTUREGRADE")

	bSelf = Not IsDull(Request("Self_SelectUsersList"))
	If bSelf Then
		If IsObject(obTokenMgr.GetData(strToken, stSelectedUsers)) Then
			Set dctSelectedUsers = obTokenMgr.GetData(strToken, stSelectedUsers)
			' remove old selection
			For i = 1 To Request("oldUsers").Count
				strUID = Request("oldUsers")(i)
				If dctSelectedUsers.Exists(strUID) Then dctSelectedUsers.Remove(strUID)
			Next
		Else
			Set dctSelectedUsers = CreateObject("NetCity.Storage")
		End If
		' set real selection
		For i = 1 To Request("Students").Count
			strUID = Request("Students")(i)
			dctSelectedUsers.Item(strUID) = Array(GetMoveEOID(strUID), "-1", GetSafeID(Request("Grade_"&strUID), "0")) ' "-1" ' EOID - undefined
		Next

		IF nDocSubType = kYearDocSubType_NotEnrolled And nDocType = kDocType_YEAR Then Set objForm = obTokenMgr.GetData(strToken,"Y_dct") End If
	Else
		If Not(IsObject(obTokenMgr.GetData(strToken, "Y_dct")) and (CLng(strFunctionalityType) = kFuncType_Add)) Then
			IF nDocSubType = kYearDocSubType_NotEnrolled And nDocType = kDocType_YEAR Then
				Set objForm = Server.CreateObject( "NetCity.Storage" )
				objForm.Add "DOCID", GetSafeID(Request("DOCID"), "0")
				objForm.Add "DOCDATE", GetSafeDate(Request("DOCDATE"), NSNow())
				objForm.Add "DOCTYPE", nDocType
				objForm.Add "DOCNUMBER", CStr(Request("DOCNUMBER"))
				objForm.Add "DOCSUBTYPE", nDocsubType
				objForm.Add "BACK", strBackPage
				Call obTokenMgr.SetData(strToken, "Y_dct", objForm)
				strLetter="kNotEnrolledNotYearMoved"
			End If
		Else
			Set objForm = obTokenMgr.GetData(strToken, "Y_dct")
		End if
		Set dctSelectedUsers = CreateObject("NetCity.Storage")
	End If

	If Not IsDull(Request("Finish")) Then
		If dctSelectedUsers.Count = 0 Then
			Call obTokenMgr.SetData(strToken, stSelectedUsers, Null)
			RedirectTo strBackPage & "?", Array("RestoreParams", "1")
		End If

		Call obTokenMgr.SetData(strToken, stSelectedUsers, dctSelectedUsers)
		RedirectTo strGoalPage & "?", Array("RestoreParams", "1")
	End If

	If Not IsDull(Request("GoBack")) Then
		Call obTokenMgr.SetData(strToken, stSelectedUsers, Null)
		RedirectTo strBackPage & "?", Array("RestoreParams", "1")
	End If

	ReadState_Special
End Sub

Function GetMoveEOID(strUID)
	GetMoveEOID = "-1"
End Function

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stUsersStudentsFirstLetter, strFirstLetter)
	Call obTokenMgr.SetData(strToken, stUsersStudentsLastLetter, strLastLetter)
	Call obTokenMgr.SetData(strToken, stUsersStudentsGender, strGender)
	Call obTokenMgr.SetData(strToken, stUsersStudentsGrades, lngGrade)
	Call obTokenMgr.SetData(strToken, stCurrPage, nCurrPage)
	Call obTokenMgr.SetData(strToken, stPageSize, nPageSize)
	Call obTokenMgr.SetData(strToken, stSelectedUsers, dctSelectedUsers)

	WriteState_Special
End Sub

Sub Main
	Main_Before
	If IsArray(arrRs) Then lngUserCnt = UBound(arrRs, 2) + 1 Else lngUserCnt = 0
	Set dctMoveDoc = Nothing
	If IsObject(obTokenMgr.GetData(strToken, stMoveDoc)) Then Set dctMoveDoc = obTokenMgr.GetData(strToken, stMoveDoc)
End Sub

Sub onHead()%>
	<SCRIPT><!--
		function Back() {
		<%IF nDocSubType = kYearDocSubType_NotEnrolled And nDocType = kDocType_YEAR Then%>
				var form = document.MainForm;
				DoSubmit( form, "<%=strBackPage%>?RestoreParams='1'");
			}
		<%Else %>
				var form = document.MainForm;
				form.Finish.value = "";
				form.GoBack.value = "1";
				ok( "MainForm", "" );
			}<%
		End IF

		If lngUserCnt <> 0 Then%>
			function gotoPage(nPage) {
				var form = document.MainForm;
				form.cp.value = nPage;
				form.Finish.value = "";
				form.GoBack.value = "";
				ok( "MainForm", "" );
			}

			function canSubmit() {
				return true;
			}

			function AddUsers() {
				var form = document.MainForm;

				form.Finish.value = "1";
				form.GoBack.value = "";

				ok("MainForm", "");
			}
		<%End If%>
	//--></SCRIPT><%

	Call DrawUsersFiltersHeader()
	Call DrawUsersSearchHeader()
	Call onHead_Add()
End Sub

Sub onHead_Add()
End Sub

Sub DrawLinkButtons
	ButtonAdd "AddUsers();", obLanguage("Movement","kAddStudentsToDoc",strFunctionalityType)
End Sub

Sub DrawFilters(strFormName)
	Call DrawTopFilters(strFormName)
	If Not bExit Then Call DrawUsersFiltersBody(bNeedGrades, CLng(strFunctionalityType) = kFuncType_Add)
End Sub

Sub onDrawPage()
	Dim i, bExists
	
	bExit = False%>

	<FORM NAME="MainForm" METHOD="post" ACTION="<%=strScriptName%>" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%response.write _
			WriteHiddenTags( Array("cp", "", "Self_SelectUsersList", "1", "BackPage", strBackPage, "GoalPage", strGoalPage, "Finish", "", "GoBack", "", _
				"FT", "","FutureMode", Request("FutureMode"),"DOCSUBTYPE",nDocsubType,"DOCTYPE",nDocType, "FUTUREGRADE", nFutureClassID))

		If nDocSubType = kYearDocSubType_NotEnrolled And nDocType = kDocType_YEAR Then
			response.write WriteHiddenTags(Array("DOCNUMBER",objForm("DOCNUMBER"), "DOCID",objForm("DOCID"), "DOCDATE",objForm("DOCDATE")))
		End If

		Call DrawButtonsFilters(lngUserCnt <> 0, "MainForm")

		If Not bExit Then%>
			<div class="row">
				<div class="col-md-10"><%
					If lngUserCnt = 0 Then
						Call DrawInfo(GetEmptyStudentsMsg(), False)
					Else%>
						<table class="table table-bordered table-condensed">
							<tr>
								<th>&nbsp;</th>
								<th><%=obLanguage("Common","kDisplayName")%></th>
								<th><%=obLanguage("Common","kGender")%></th>
								<th><%=obLanguage("Common","kBDate")%></th>
								<%If nfindType = 2 Then%>
									<th><%=obLanguage("UsersExport_1C","kBirthCertificate")%></th>
									<th><%=obLanguage("Common","kPassport")%></th>
									<th><%=obLanguage("Reports","kNameEducInst")%></th>
									<th><%=obLanguage("PoolStudents","kCategory")%></th>
								<%End If%>
							</tr><%
							For i = 0 To lngUserCnt-1
								strUID = arrRs(0, i)%>
								<tr>
									<%DrawStudentsCheckBox strUID, i, True, ""%>
									<td><%=DB2HTML(arrRs(1, i))%> </td>
									<td align="center"><%=DB2HTML(arrRs(2, i))%></td>
									<td align="center"><%=Date2Str(arrRs(3, i))%></td>
									<%If nfindType = 2 Then%>
										<td><%=DB2HTML(arrRs(4, i))%></td>
										<td><%=DB2HTML(arrRs(5, i))%></td>
										<td><%=DB2HTML(arrRs(6, i))%></td>
										<td><%=DB2HTML(arrRs(7, i))%></td>
									<%End If%>
								</tr><%
							Next%>
						</table><%
						If pageCount > 1 Then Call ShowPageList(pageCount,nCurrPage)
					End If%>
				</div>
			</div><%
		End If%>
	</FORM><%
End Sub

Sub DrawTopFilters(strForm)
End Sub%>