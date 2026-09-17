<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PoolStudents_inc.asp" -->
<!-- #INCLUDE FILE="MoveBook_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim dctSelectedUsers
Dim bSelf, i, strUID
Dim strBackPage, strGoalPage

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arMoveBookEdit)
End Function

Function GetPageTitle()
	If bByDirecting Then
		GetPageTitle = obLanguage("PoolStudents","kTitleDistributedStudentsSelect")
	ElseIf bPseudoPool Then
		GetPageTitle = obLanguage("FilterUsers","kStudentsOutOfSystem")
	Else
		GetPageTitle = obLanguage("PoolStudents","kTitlePoolStudentsSelect",strFunctionalityType)
	End If
End Function

Sub ReadStateSpecial()
	Dim strEOID, strDepartEOID
	Dim objYearInfo

	nPageType = kPageType_SELECT

	bAddSchool = False
	If CLng(strFunctionalityType) = kFuncType_Add Then
		bAddSchool = True
		' Выбор для зачисления в ОДО из Пула
		strFunctionalityType = kFuncType_Common
	End If

	bByDirecting = (CStr(Request("ViewType")) = "0")

	If Not bByDirecting Then
		Set objYearInfo = objNSNET.GetYearInfo(strCurrYearID)
		If Not objYearInfo.EOF Then
			nGYMaxID = GetSafeLng(objYearInfo("GLOBALYEARID"), -1)
		End If
	End If

	' navigation and selection
	strBackPage = GetSafeStr(Request("BackPage"), -1, Null)
	strGoalPage = GetSafeStr(Request("GoalPage"), -1, Null)

	bSelf = Not IsDull(Request("Self_PoolStudentSelect"))
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
			strEOID = Request("EOID_" & strUID)
			strDepartEOID = Request("DEPARTEOID_" & strUID)
			dctSelectedUsers.Item(strUID) = Array(strEOID, IIF(bByDirecting, kEnrollFrom_ESPool, kEnrollFrom_Pool), Empty)
		Next
	Else
		Set dctSelectedUsers = CreateObject("NetCity.Storage")
	End If

	If Not IsDull(Request("Finish")) Then
		Call obTokenMgr.SetData(strToken, stSelectedUsers, dctSelectedUsers)
		RedirectTo strGoalPage & "?", Array("RestoreParams", "1", "ByDirecting", IIF(bByDirecting, "1", ""))
	End If

	If Not IsDull(Request("GoBack")) Then
		Call obTokenMgr.SetData(strToken, stSelectedUsers, Null)
		RedirectTo strBackPage & "?", Array("RestoreParams", "1")
	End If

	Set dctMoveDoc = Nothing
	If IsObject(obTokenMgr.GetData(strToken, stMoveDoc)) Then
		Set dctMoveDoc = obTokenMgr.GetData(strToken, stMoveDoc)
	End If
End Sub

Sub WriteStateSpecial()
	Call obTokenMgr.SetData(strToken, stSelectedUsers, dctSelectedUsers)
End Sub

Sub onHeadSpecial()%>
	<SCRIPT><!--
		var bPageBusy = false;
		function IsPageBusy() {
			return bPageBusy;
		}

		function SetPageBusy() {
			bPageBusy = true;
		}

		function SetPageFree() {
			bPageBusy = false;
		}

		function Back(){
			if(IsPageBusy()) return;

			var form = document.MainForm;
			form.Finish.value = "";
			form.GoBack.value = "1";

			SetPageBusy();
			ok( "MainForm", "" );
		}

		<%If lngStudentCnt <> 0 Then%>
			function gotoPage(nPage) {
				if(IsPageBusy()) return;

				var form = document.MainForm;
				form.cp.value = nPage;
				form.Finish.value = "";
				form.GoBack.value = "";

				SetPageBusy();
				ok("MainForm", "");
			}

			function canSubmit() {
				return true;
			}

			function AddUsers() {
				if($('input[name=Students][type=checkbox]:checked').length < 1) {
					alert(language.Movement.kSelectStudentsForDoc);
					return;
				}

				if(IsPageBusy()) return;

				var form = document.MainForm;
				form.Finish.value = "1";
				form.GoBack.value = "";

				SetPageBusy();
				ok("MainForm", "");
			}

			function changeUnsuitable(obj) {
				if(obj.checked)
					$.show.confirmation(language.PoolStudents.kConfirmEnrollUnsuitable).fail(function(){obj.checked = false;});
			}
		<%End If%>
	//--></SCRIPT><%
End Sub

Sub DrawButtons()
	If lngStudentCnt <> 0 Then ButtonAdd "AddUsers();", obLanguage("Movement", "kAddStudentsToDoc", strFunctionalityType)
End Sub

Function WriteSpecialTags()
	WriteHiddenTags(Array("Self_PoolStudentSelect", "1", "GoalPage", strGoalPage, "Finish", "", "GoBack", ""))
End Function

Sub DrawFiltersSpecial(strForm)
	If Not bPseudoPool Then
		OpenFormGroup obLanguage("PoolStudents","kAccessCategory")%>
			<select NAME="ViewType" onChange="ok('MainForm','')" class="form-control">
				<%If MODULE_ESERVICES And Not bAddSchool Then%><option value="0"<%=IIF(nViewType = 0, " selected", "")%>><%=obLanguage("PoolStudents","kDistribution")%></option><%End If%>
				<option value="1"<%=IIF(nViewType = 1, " selected", "")%>><%=obLanguage("PoolStudents","kOut")%></option>
				<option value="6"<%=IIF(nViewType = 6, " selected", "")%>><%=obLanguage("PoolStudents","kGraduation")%></option>
			</select><%
		CloseFormGroup
	Else
		OpenFormGroup obLanguage("PoolStudents","kCategory")%>
			<select NAME="PoolCategory" onChange="ok('MainForm','')" class="form-control">
				<%Call PopulateSelect(objPoolCategories, "CATEGORYID", "CATEGORYNAME", nPoolCategoryID)%>
			</select>
			<input type="hidden" name="ViewType" value="1" /><%
		CloseFormGroup
	End If
End Sub

Sub DrawPoolFilter(strForm)
End Sub

Sub InitFunctionTypes
	Dim objSchoolInfo

	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	If objSchoolInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")

	strFuncTypeID = GetSafeID(objSchoolInfo("FUNCTIONALITYTYPEID"), Null)
	If strFuncTypeID = CStr(kFuncType_PreSchool) Then
		Set rsFuncTypes = objNSNET.GetFuctionalityType(kFuncType_PreSchool)
		If rsFuncTypes.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
		strFuncTypeID = GetSafeID(rsFuncTypes("FUNCTIONALITYTYPEID"), Null)
	Else
		InitFunctionTypesCommon
	End If
End Sub

Sub DrawLegend()%>
	<div class="summary-information">
		<div><%=obLanguage("Common","kLegend")%>
			<div class="legend print-block">
				<div><%
					If bByDirecting Then%>
						<p><span class="legend-label" style="background-color: <%=kByDirectingSuitableColor%>"></span><span class="legend-description"> — <%=obLanguage("PoolStudents","kChildSuitableForEnrollToClass",strFunctionalityType)%>&nbsp;<b><%=DB2HTML(strClassName)%></b></span></p>
						<p><span class="legend-label" style="background-color:<%=kByDirectingStudInSchoolColor%>"></span><span class="legend-description"> — <%=obLanguage("PoolStudents","kChildInOldSchool")%></span></p><%
					Else%>
						<p><span class="legend-label" style="background-color:<%=kStudentInESPoolColor%>"></span><span class="legend-description"> — <%=obLanguage("PoolStudents","kChildInESPool")%></span></p><%
					End If%>
				</div>
			</div>
		</div>
	</div><%

	If bByDirecting Then
		Call DrawWarning(Replace(obLanguage("PoolStudents", "kDistinctionWarn"), "%", NETSCHOOL_PRODUCT_NAME))
	End If
End Sub%>