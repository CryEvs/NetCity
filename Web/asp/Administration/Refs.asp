<!-- #INCLUDE FILE=sa_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/populate.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objParams, strParamID, objItems
Dim bStaffPos, strParamID_Pos
Dim bParamStudentHealth
Dim bRO

Function IsTopPage()
	IsTopPage = True
End Function

Function GetPageTitle()
	GetPageTitle = IIF(Not bRO, obLanguage("ServAdmin","kTitleRefs"), "")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_RefBooks
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_RefBooks
 End Function

Sub ReadState()
	strParamID = GetSafeID(Request("ParamID"), kExamTypeParID)
	bRO = obContext.ServerSettings.SystemSettings.IsRegionEMForSchool
End Sub

Sub Main()
	Dim strParamID_Health
	Dim strExcludeParamNames
	
	strParamID_Pos = CStr(objNSNET.GetAttribParamIDViaName(kRoleType_Staff, "POSITION"))
	bStaffPos = (strParamID = strParamID_Pos)
	strExcludeParamNames = "'POSITION', 'POSITION2'"

	If bDisableHealthData Then
		strExcludeParamNames = strExcludeParamNames & ", 'ILLNESS'"
	End If

	Set objParams = objNSNET.GetUserEditableParams(0, strExcludeParamNames)

	Select Case strParamID
	Case kExamTypeParID : Set objItems = objNSNET.GetExamTypeList()
	Case kNationParID : Set objItems = objNSNET.GetNationList(True)
	Case kTemTypeID : Set objItems = objNSNET.GetYearTermTypes(-1)
	Case kYearParID : Set objItems = objNSNET.GetGlobalYears(0)
	Case kSubjectsParID : Set objItems = objNSNET.GetGlobalSubjects(0)
	Case kForeignLangsParID : Set objItems = objNSNET.GetForeignLanguages(True)
	Case kAssignmentTypesID : Set objItems = objNSNET.GetAssignmentTypes(True, True, False)
	Case Else
		If Not objParams.EOF Or bStaffPos Then ' ParamType = 'L' or 'M' assume here
			Set objItems = objNSNET.GetUserEditableParamItems(Null, strParamID, 0)
		End If
	End Select

	strParamID_Health = CStr(objNSNET.GetAttribParamIDViaName(kRoleType_Student, "HEALTH"))
	bParamStudentHealth = (strParamID = strParamID_Health)
End Sub

Sub onHeadSpecial()
	If (strParamID <> "0") Then%>
		<script><!--
		function editItem(sItemID)
		{
			var form=document.forms['View'];
			form.ItemID.value = sItemID;
			form.ParamName.value = getListText(form.ParamID);
			form.ACT.value = 'edit';
			ok( 'View', 'UserParamItemEdit.asp' );
		}

		function editYear(sItemID)
		{
			var form=document.forms['View'];
			form.ItemID.value = sItemID;
			form.ParamName.value = getListText(form.ParamID);
			form.ACT.value = 'edit';
			ok( 'View', 'EditYear.asp' );
		}

		function editSubject(sItemID)
		{
			var form=document.forms['View'];
			form.ItemID.value = sItemID;
			form.ParamName.value = getListText(form.ParamID);
			form.ACT.value = 'edit';
			ok( 'View', 'EditSubject.asp' );
		}

		function editForeignLanguage(sItemID)
		{
			var form=document.forms['View'];
			form.ItemID.value = sItemID;
			form.ACT.value = 'edit';
			ok( 'View', 'EditForeignLanguage.asp' );
		}

		function editAssignmentTypes(sItemID)
		{
			var form=document.forms['View'];
			form.ItemID.value = sItemID;
			form.ACT.value = 'edit';
			ok( 'View', 'EditAssigmentTypes.asp' );
		}

		function SaveTermTypes() {
			var form = document.View;
			form.ACT.value = 'save';
			
			DoSubmit(form, "SaveDeleteTermType.asp");
			$.show.processing();
		}

		function createTermType() {
			
			var cancelBtn = function(dialog) { dialog.close(); };
			var addBtn = function(dialog) {
				var form = document.forms['SaveForm'];
				var name = form.elements['TermTypeName'].value;

				if(name == '') {
					alert(language.Generic.SetupSchoolCalendar.kTermTypeNameCantBeEmpty);
					form.elements['TermTypeName'].focus();
					return false;
				}

				var nCount = str2lngEx(form.elements['TermsCount']);

				if(isNaN(nCount) || (nCount < 1) || (nCount > <%=kMinSchoolYearDays%>)) {
					alert(language.Generic.Common.kEnterIntegerFrom1To + '<%=( " " & kMinSchoolYearDays)%>');
					form.elements['TermsCount'].focus();
					return false;
				}

				DoSubmit(form, "SaveDeleteTermType.asp");
				$.show.processing();
			};

			checkForChanges().then(function() {
				$.show.dialog({
					title: language.Generic.SetupSchoolCalendar.kTitleCreateTermType,
					message: $('#createTermTypeTmpl'),
					buttons: [{
						label: language.Generic.Buttons.kAdd,
						hotkey: 13,
						action: addBtn
					}]
				});
			});
		}
		/*function editTemType(sItemID)
		{
			var form=document.forms['View'];
			form.ItemID.value = sItemID;
			form.ACT.value = 'edit';
			ok( 'View', 'SaveDeleteTermType.asp' );
		}*/

		<%If Not objItems.EOF Then%>
			function deleteItems(asp)
			{
				if(isDBBusy()) return false;
				var form=document.forms['View'];
				var chkBox = form.elements.delItem, chkItems = 0;
				if (chkBox) {
					if (chkBox.length) {
						for (var j=0;j<chkBox.length;j++)
							if (chkBox[j].checked==true) {chkItems=1; break;}
					}
					else if (chkBox.checked==true)
						chkItems = 1;
				}
				if (chkItems > 0) {
					$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function(){
						form.ACT.value = 'delete';
						setDBBusy();
						ok( 'View', asp);
						$.show.processing();
					});
				}
				else {
					alert(language.Generic.Common.kErrMsgNoChecks); 
					return
				}
			}
		<%End If%>
		//--></script>
	<%End If
End Sub

Sub DrawFilters( strForm )
	OpenFormGroup obLanguage("ServAdmin","kRef")%>
		<select class="form-control" name="ParamID" onchange="ok('<%=strForm%>','')">
			<option value="<%=kYearParID%>" <%If strParamID = kYearParID Then Response.Write "selected"%>><%=obLanguage("Common","kSchoolYear")%></option>
			<option value="<%=kTemTypeID%>" <%If strParamID = kTemTypeID Then Response.Write "selected"%>><%=obLanguage("SetupSchoolCalendar","kTermTypes")%></option>
			<option value="<%=kExamTypeParID%>" <%If strParamID = kExamTypeParID Then Response.Write "selected"%>><%=obLanguage("ServAdmin","kExamTypes")%></option>
			<option value="<%=kNationParID%>" <%If strParamID = kNationParID Then Response.Write "selected"%>><%=obLanguage("Common","kNation")%></option>
			<option value="<%=kSubjectsParID%>" <%If strParamID = kSubjectsParID Then Response.Write "selected"%>><%=obLanguage("ServAdmin","kGlobalSubjects")%></option>
			<option value="<%=kForeignLangsParID%>" <%If strParamID = kForeignLangsParID Then Response.Write "selected"%>><%=obLanguage("ServAdmin","kLanguages")%></option>
			<option value="<%=kAssignmentTypesID%>" <%If strParamID = kAssignmentTypesID Then Response.Write "selected"%>><%=obLanguage("Assignment","kATAssignmentType")%></option><%
			If strParamID_Pos <> "0" Then%><option value="<%=strParamID_Pos%>" <%If bStaffPos Then Response.Write "selected"%>><%=obLanguage("ServAdmin","kPosition")%></option><%End If%><%
			If Not objParams.EOF Then Call PopulateSelect( objParams, "PARAMETERID", "TITLE", strParamID )%>
		</select><%
	CloseFormGroup
End Sub

Sub DrawButtons()
	Dim strDelAsp

	Select Case strParamID
	Case kYearParID, "0"
	Case kTemTypeID
		ButtonAdd "createTermType();", obLanguage("ServAdmin","kAddItem")
		ButtonSave "SaveTermTypes();", obLanguage("Common","kSave")
		strDelAsp = "SaveDeleteTermType.asp"
	Case kSubjectsParID
		ButtonAdd "editSubject('0');", obLanguage("ServAdmin","kAddItem")
		strDelAsp = "ChangeSubject.asp"
	Case kForeignLangsParID
		ButtonAdd "editForeignLanguage('0');", obLanguage("ServAdmin","kAddItem")
		strDelAsp = "ChangeForeignLanguage.asp"
	Case kAssignmentTypesID
		ButtonAdd "editAssignmentTypes('0');", obLanguage("ServAdmin","kAddItem")
		strDelAsp = "ChangeAssigmentTypes.asp"
	Case Else
		ButtonAdd "editItem('0');", obLanguage("ServAdmin","kAddItem")
		strDelAsp = "UserParamItemSave.asp"
	End Select

	If Not objItems.EOF Then ButtonDel "deleteItems('" & strDelAsp & "');", obLanguage("Common","kRemove")
End Sub

Function DrawDeleteInput(value)%>
	<input type="checkbox" name="delItem" value="<%=value%>"><%
End Function

Sub onDrawPage()
	Dim theArr, aval, arr, i
	Dim bInUse, strItemID
	Dim bMayEdit
	Dim bExamTypePredef%>
	<form name="View" action="Refs.asp" class="form-horizontal" method="post">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("ACT", "", "ItemID", "", "ParamName", "", "StaffPos", IIf(bStaffPos, 1, 0)) )%><%

		If strParamID = "0" Then
			DrawInfo obLanguage("ServAdmin","kParamsEmpty"), False%>
			</form><%
			Exit Sub
		End If

		Call DrawButtonsFilters( Not bRO, "View" )

		If objItems.EOF Then
			DrawInfo obLanguage("ServAdmin","kRefItemsEmpty"), False
		Else%>
			<table class="table table-bordered table-condensed table-thin"><tr><%
			Select Case strParamID
			Case kExamTypeParID%>
				<th><%=obLanguage("Common","kName")%></th><th><%=obLanguage("ServAdmin","kAbbrNameS")%></th>
				<%If Not bRO Then rw ShowDelCellHeader(1)%></tr><%
				While Not objItems.EOF
					strItemID = GetSafeID(objItems("PERIODTYPEID"), Null)
					bExamTypePredef = CLng(strItemID) < kExamTypePredefMax%>
					<tr><td><%=ShowAnchor_Refs("editItem('" & strItemID & "')", obLanguage("ServAdmin","kEditItem"), DB2HTML(objItems("TITLE")), "")%></td>
						<td class="text-center"><%=DB2HTML(objItems("ABBR"))%></td><%
					If Not bRO Then
						bInUse = Not IsNull(objItems("USETYPEID"))%>
						<td class="text-center"><%
						If bExamTypePredef Then%>&nbsp;<%
						ElseIf bInUse Then%><%=obLanguage("Common","kEmploy")%><%
						Else Call DrawDeleteInput(objItems("PERIODTYPEID"))
						End If%></td><%
					End If%>
					</tr><%
					objItems.MoveNext
				WEnd
			Case kNationParID%>
				<th><%=obLanguage("Common","kName")%></th>
				<%If Not bRO Then rw ShowDelCellHeader(1)%></tr><%
				While Not objItems.EOF%>
					<tr><td><%
					If CLng(objItems("NATIONID")) < kNationMin Then
						Response.Write DB2HTML(objItems("ITEMNAME"))
					Else
						Response.Write ShowAnchor_Refs("editItem('" & objItems("NATIONID") & "')", obLanguage("ServAdmin","kEditItem"), DB2HTML(objItems("ITEMNAME")), "")
					End If%>
						</td><%
					If Not bRO Then
						bInUse = CLng(objItems("USENATIONID"))%>
						<td class="text-center"><%
							If bInUse > 0 Then%><%=bInUse%><%
							ElseIf CLng(objItems("NATIONID")) < kNationMin Then Response.Write "0"
							Else Call DrawDeleteInput(objItems("NATIONID"))
							End If%>
						</td><%
					End If%>
					</tr><%
					objItems.MoveNext
				WEnd
			Case kTemTypeID%>
				<th><%=obLanguage("Common","kName")%></th>
				<th><%rw obLanguage("SchoolSettings","kAccessYes")
				%></th>
				<%If Not bRO Then rw ShowDelCellHeader(1)%></tr><%
				Do While Not objItems.EOF%>
					<tr><td><%
						Response.Write DB2HTML(objItems("TERMTYPENAME")) &"("& objItems("TERMSCOUNT")&")"
					%>
						</td><%
					If Not bRO Then
						bInUse = Not IsDull(objItems("BOUNDED"))
						strItemID = CLng(objItems("TERMTYPEID"))
						%>
						<td class="text-center"><%
							If strItemID<5 Then
								rw "&nbsp;"
							Else
								arr = Array("kYes", "kNo")
								ReDim theArr(1, 1)
								For i = 0 To Ubound(arr)
									theArr(0, i) = IIF(arr(i)="kYes","Y", "N")
									theArr(1, i) = obLanguage("Common", arr(i))
								Next
								aval= objItems("ENABLED")
								aval=GetSafeStr( aval, 1, Null)
								rw WriteHiddenTags( Array("TERMTYPEID", strItemID) )
								Call DrawSelectArr( theArr, "kYesNo", aval, Null, "_" )
							End If
							%>
						</td><%
						%>
						<td class="text-center"><%
							If strItemID <5 Then
								rw "&nbsp;"
							ElseIf bInUse Then
								rw obLanguage("Common","kEmploy")
							Else
								Call DrawDeleteInput(strItemID)
							End If
							%>
						</td><%
					End If%>
					</tr><%
					objItems.MoveNext
				Loop
			Case kYearParID%>
				<th><%=obLanguage("Common","kSchoolYearName")%></th>
				<th><%=obLanguage("Common","kYearStart")%></th>
				<th><%=obLanguage("Common","kYearEnd")%></th></tr><%
				While Not objItems.EOF%>
					<tr>
						<td class="text-center"><%=ShowAnchor_Refs("editYear('" & objItems("GLOBALYEARID") & "')", obLanguage("ServAdmin","kEditItem"), DB2HTML(objItems("SCHOOLYEARNAME")), "")%></td>
						<td class="text-center"><%=Date2Str(objItems("STARTDATE"))%></td>
						<td class="text-center"><%=Date2Str(objItems("ENDDATE"))%></td>
					</tr><%
					objItems.MoveNext
				WEnd
			Case kSubjectsParID%>
				<th><%=obLanguage("ServAdmin","kFullName")%></th>
				<th><%=obLanguage("ServAdmin","kAbbrNameS")%></th><%If Not bRO Then rw ShowDelCellHeader(1)%></tr><%
				While Not objItems.EOF
					strItemID = CStr(objItems("GLOBALSUBJID"))%>
					<tr>
						<td><%=ShowAnchor_Refs("editSubject('" & objItems("GLOBALSUBJID") & "')", obLanguage("ServAdmin","kEditItem"), DB2HTML(objItems("SUBJNAME")), "")%></td>
						<td><%=objItems("SUBJABBR")%></td><%
					If Not bRO Then
						bInUSe = (objItems("INUSE") = 1)%>
						<td class="text-center"><%
							If bInUse Then%><%=obLanguage("Common","kEmploy")%><%
							Else Call DrawDeleteInput(strItemID)
							End If%>
						</td><%
					End If%>
					</tr><%
					objItems.MoveNext
				WEnd
			Case kForeignLangsParID%>
				<th><%=obLanguage("ServAdmin","kFullName")%></th><%If Not bRO Then rw ShowDelCellHeader(1)%></tr><%
				While Not objItems.EOF
					strItemID = CLng(objItems("FOREIGNLANGID"))%>
					<tr><td><%=ShowAnchor_Refs("editForeignLanguage('" & objItems("FOREIGNLANGID") & "')", obLanguage("ServAdmin","kEditItem"), DB2HTML(objItems("NAME")), "")%></td><%
					If Not bRO Then
						bInUSe = (objItems("INUSE") = 1)%>
					<td class="text-center"><%
					If strItemID <=3 Then%>X<%
						ElseIf bInUse Then%><%=obLanguage("Common","kEmploy")%><%
						Else Call DrawDeleteInput(strItemID)
						End If%>
					</td><%
					End If%></tr><%
					objItems.MoveNext
				WEnd
			Case kAssignmentTypesID%>
				<th><%=obLanguage("ServAdmin","kFullName")%></th><th><%=obLanguage("ServAdmin","kAbbrNameS")%></th><%If Not bRO Then rw ShowDelCellHeader(1)%></tr><%
				While Not objItems.EOF
					strItemID = CLng(objItems("TYPEID"))%>
					<tr><td>
					<%If objItems("EDITABLE")="N" Then
						rw DB2HTML(objItems("NAME"))
					Else
						rw ShowAnchor_Refs("editAssignmentTypes('" & objItems("TYPEID") & "')", obLanguage("ServAdmin","kEditItem"), DB2HTML(objItems("NAME")), "")
					End If%></td>
					<td><%=DB2HTML(objItems("ABBR"))%></td><%
					If Not bRO Then
						bInUSe = (objItems("INUSE") = 1)%>
					<td class="text-center"><%
						If objItems("EDITABLE")="N" Then
							rw "X"
						ElseIf bInUse Then
							rw obLanguage("Common","kEmploy")
						Else
							Call DrawDeleteInput(strItemID)
						End If%>
					</td><%
					End If%></tr><%
					objItems.MoveNext
				WEnd
			Case Else
				If strParamID <> kDepartReasonParID Then%><th><%=obLanguage("ServAdmin","kFullName")%></th><th><%=obLanguage("ServAdmin","kAbbrNameS")%></th><%
				Else%>
					<th><%=obLanguage("ServAdmin","kAbbrNameS")%></th>
					<th><%=obLanguage("ServAdmin","kFullName")%></th><%
				End If
				If bStaffPos Then%>
					<th><%=obLanguage("ServAdmin","kStatus")%></th><%
				End If%>
				<%If Not bRO Then rw ShowDelCellHeader(1)%></tr><%
				While Not objItems.EOF
					strItemID = CStr(objItems("ITEMID"))
					bMayEdit = True
					If bParamStudentHealth Then
						If objItems("ITEMNAME") = obLanguage("Common","kStudentHealthGroup_Home") Then bMayEdit = False
					ElseIf CStr(strParamID) <> CStr(UserParams_jobTitle) Then
						bMayEdit = IsNull(objItems("ITEMORDERNO"))
					End If
					%>
					<tr>
						<td><%If bMayEdit Then%><%=ShowAnchor_Refs("editItem('" & strItemID & "')", obLanguage("ServAdmin","kEditItem"), DB2HTML(objItems("ITEMNAME")), "")%><%Else%><%=DB2HTML(objItems("ITEMNAME"))%><%End If%></td>
						<td><%=DB2HTML(objItems("ITEMNAME2"))%></td><%
					If bStaffPos Then
						%><td><%=DB2HTML(objItems("STATUSNAME"))%></td><%
					End If
					If Not bRO Then
						bInUse = Not IsNull(objItems("PARAMVALUE"))%>
					<td class="text-center"><%
						If Not bInUse Then
							If strParamID = kDepartReasonParID Or bStaffPos Then bInUse = Not IsNull(objItems("PARAMVALUE2"))'
						End If
						If Not bMayEdit Then%>&nbsp;<%
						ElseIf bInUse Then%><%=obLanguage("Common","kEmploy")%><%
						Else Call DrawDeleteInput(strItemID)
						End If%>
					</td><%
					End If%></tr><%
					objItems.MoveNext
				WEnd
			End Select%>
			</table><%
		End If%>
	</form>
	<script id="createTermTypeTmpl" type="text/html">
		<form name="SaveForm" action="SaveDeleteTermType.asp" method="POST" class="form-horizontal from-edit">
			<%=WriteObligatoryTags()%><%
			Call SetFiltersWidth("", "col-md-5 col-lg-5 col-sm-3", "col-md-7 col-lg-7 col-sm-9")
			Call DrawInputRowWithClass(obLanguage("SetupSchoolCalendar","kTermTypeName"), "", "TermTypeName", "text", 40, 30, "", "FilterWhiteSpace")
			Call DrawInputRowWithClass(obLanguage("SetupSchoolCalendar","kTermsCount"), "", "TermsCount", "text", 10, 3, "", "FilterWhiteSpace")
			%>
		</form>
	</script>
	<%
End Sub

Function ShowAnchor_Refs( jsCall, sStatus, aBody, Attr )
	If bRO Then
		ShowAnchor_Refs = aBody
	Else
		ShowAnchor_Refs = ShowAnchor( jsCall, sStatus, aBody, Attr )
	End If
End Function
%>
