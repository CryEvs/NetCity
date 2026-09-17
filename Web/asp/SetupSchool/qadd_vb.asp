<!-- #INCLUDE VIRTUAL="/asp/scripts/dateinput.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
' QuickAdd initilization
Dim qadd_listbox_form, qadd_listbox_name, qadd_form_name,qadd_checkbox_name
Dim qadd_edit_name
Dim bStudent

Dim strBackPage, strPagePostTo
Dim strListTitle, strQRole
Dim bIsBDateObligatory
Dim nFututeYearID
Dim serverSettings

Function onLoad()
	onLoad = "JavaScript:SetWarningTimer();"
End Function

Function onUnload()
	onUnload = "JavaScript:ClearWarningTimer();" & specialUnload()
End Function

Sub InitServerSettings
	Dim obComponent, getSettingsRes

	Set obComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IServerSettingsComponent")

	Set getSettingsRes = obComponent.GetServerSettings()
	If Not getSettingsRes.IsSuccess Then
		GenerateError getSettingsRes.Message
	End If

	Set serverSettings = getSettingsRes.Data
End Sub

Sub QuickAddInit()
	qadd_listbox_form = "UserInfo"
	qadd_listbox_name = "UserList"
	qadd_form_name = "UserInfo"
	qadd_checkbox_name = "InFutureYear"

	Call InitServerSettings()
	Call InitRegExpAlphabet()
End Sub

Sub CreateHiddenInputs()
	dim i

	for each i in qadd_edit_name%> <input type="hidden" name="submit_<%=i%>" value=""><%next
End Sub

Sub CreateListBox()
	' Quick Input. Listbox%>

	<select size="10" name="<%=qadd_listbox_name%>" onclick="qadd_on_list_click();" onchange="qadd_on_list_click();" style="width: 300px;">
		<option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	</select>
	<br/><br/><%=obLanguage("SetupSchoolUI","kTotalRecords")%>: <input type="text" name="qadd_total" size="<%=TextInputSize(3)%>" value="0" disabled><%
End Sub

Sub GetEditValue(index)
%>document.<%=qadd_form_name%>.<%=qadd_edit_name(index)%>.value<%
End Sub

Sub CreateControlPanel()%>
	<nav>
		<ul class="pagination">
			<li>
				<a href="javascript:qadd_prev()">
					<span><%=obLanguage("SetupSchoolUI", "kStrPrev_")%></span>
				</a>
			</li>
			<li>
				<a href="javascript:qadd_next()">
					<span><%=obLanguage("SetupSchoolUI", "kStrNext_")%></span>
				</a>
			</li>
			<li>
				<a href="javascript:qadd_del()">
					<span><%=obLanguage("SetupSchoolUI", "kStrDelete_")%></span>
				</a>
			</li>
		</ul>
	</nav><%
End Sub

Sub DrawSpecificRows()
End Sub

Sub DrawFilters(strFormName)
End Sub

Sub DrawButtons()
	Call DrawSpecialButtons()

	ButtonSave "saveChanges()", obLanguage("Common","kSave")
End Sub

Sub DrawSpecialButtons()
End Sub

Sub DrawLinkButtons
	Call SimpleButton("qadd_add_new()", obLanguage("SetupSchoolUI", "kStrAddSave_"))
	Call SimpleButton("qadd_reset_edits(false)", obLanguage("SetupSchoolUI", "kStrRestore_"))
End Sub

Sub onDrawPage()
	Dim bStaff, bStudent, bEmUser

	bStaff = (InStrRev(Request.ServerVariables("SCRIPT_NAME"),"Staff") > 0)
	bStudent = (InStrRev(Request.ServerVariables("SCRIPT_NAME"),"Student") > 0)
	bEmUser = (InStrRev(Request.ServerVariables("SCRIPT_NAME"),"EMUser") > 0)%>

	<FORM NAME="UserInfo" METHOD="POST" ACTION="<%=strPagePostTo%>" onreset="qadd_reset_edits(false);" class="form-horizontal form-xs form-edit">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("FutureMode",IIF(bFutureMode=true,"1","0")))%>
		<%CreateHiddenInputs()%>

		<%Call DrawButtonsFilters(True, "UserInfo")%>
		
		<div class="row">
			<div class="col-md-7 col-lg-5 col-md-push-4 col-lg-push-3"><%
				Call SetFiltersWidth("", "col-md-4 col-lg-4 col-sm-4", "col-md-8 col-lg-8 col-sm-6")
				If bStudent Then 
					DrawTitleRow obLanguage("SetupSchoolUI","kSelectDOCstr"), dicDocInfo("DOCNUMBER")
					%><br /><%
				End If

				Call DrawInputTextRow( "*** " & obLanguage("Common","kLastName"), "", "LN", 30, kMaxLastname, "qadd_on_data_change()", "")
				Call DrawInputTextRow( "*** " & obLanguage("Common","kFirstName"), "", "FN", 30, kMaxLastname, "qadd_on_data_change()", "")
				Call DrawInputTextRow( obLanguage("Common","kMiddleName"), "", "MN", 30, kMaxLastname, "qadd_on_data_change()", "")
				
				If Not bEmUser Then
					Call DrawDateInfoRow( IIf(bIsBDateObligatory, "*** ", "") & obLanguage("Common","kBDate"), Null, "BDT", obLanguage("SetupSchoolUI","kChooseBirthDate"))
					OpenFormGroup obLanguage("Common","kGender")
					DrawRadioListInline "", IIF(bStaff, obLanguage("Common","kFemaleLet"), obLanguage("Common","kMaleLet")), "GN", Array(obLanguage("Common","kMaleLet"), obLanguage("Common","kMale"), obLanguage("Common","kFemaleLet"), obLanguage("Common","kFemale")), "", "", "qadd_on_data_change()", False
					CloseFormGroup
				End If

				If CLng(strFunctionalityType) <> kFuncType_PreSchool Or (CLng(strFunctionalityType) = kFuncType_PreSchool And Not bStudent) Then
					
					Call DrawInputTextRow("*** " & obLanguage("Common","kLogin"), "", "LON", 15, kMaxLogin, "qadd_on_data_change()", "")

					OpenFormGroup "*** " & obLanguage("Common","kPassword")
						Call DrawInputEx("", "PW", "password", "", TextInputSize(30), kMaxPassword, "", "qadd_on_data_change()")
					CloseFormGroup

					OpenFormGroup "*** " & obLanguage("SetupSchoolUI","kConfirm")
						Call DrawInputEx("", "PW2", "password", "", TextInputSize(30), kMaxPassword, "", "qadd_on_data_change()")
					CloseFormGroup

					OpenFormGroup ""
						rw ShowCheckbox("ChangePW", "1", True, obLanguage("SetupSchoolUI","kPasswordPrompt"), "qadd_on_data_change()")
					CloseFormGroup

					OpenFormGroup DB2HTML_BR(obLanguage("SetupSchoolUI","kMailManner"))%>
						<div class="radio">
							<label>
								<input TYPE="radio" NAME="PCM" VALUE="C" checked OnClick="qadd_on_data_change()">
								<%=obLanguage("SetupSchoolUI","kNSSchoolAnnoun")%><%=NETSCHOOL_PRODUCT_NAME%>
							</label>
						</div>
						<div class="radio">
							<label>
								<input TYPE="radio" NAME="PCM" VALUE="E" OnClick="qadd_on_data_change()">E-Mail
							</label>
						</div>
						<div class="radio">
							<label>
								<input TYPE="radio" NAME="PCM" VALUE="P" OnClick="qadd_on_data_change()"><%=obLanguage("SetupSchoolUI","kPaperMail")%>
							</label>
						</div><%
					CloseFormGroup

					Call DrawInputTextRow("E-Mail", "", "EM", TextInputSize(15), 80, "qadd_on_data_change()", "")
				End If

				Call DrawSpecificRows()
				
				Call RestoreDefFiltersWidth()%>
			</div>
			<div class="col-md-4 col-lg-3 col-md-pull-7 col-lg-pull-5">
				<%=strListTitle%>
				<br />
				<%CreateListBox()%>
				<%CreateControlPanel()%>
			</div>
		</div>
	</FORM><%
End Sub%>