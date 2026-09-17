<!-- #INCLUDE VIRTUAL="/asp/scripts/firstLetter.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Dim arrProfileGrade, i
Dim arrGrades
Dim nSchoolMaxGrade
Dim bPreSchool, arrPreSchoolGrades

Sub ReadState()
	Call obTokenMgr.SetData(strToken, stBackPage, strScriptName)
End Sub

Sub Main
	nSchoolMaxGrade = Application("LASTGRADE")(strFunctionalityType)

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	If bPreSchool Then
		arrPreSchoolGrades = Array(CStr(obLanguage("Common","kGr0")), CStr(obLanguage("Common","kGr1")), Cstr(obLanguage("Common","kGr2")), CStr(obLanguage("Common","kGr3")), CStr(obLanguage("Common","kGr4")), CStr(obLanguage("Common","kGr5")), CStr(obLanguage("Common","kGr6")), CStr(obLanguage("Common","kGr7")), CStr(obLanguage("Common","kGr8")))
	End If

	arrProfileGrade = objNSNET.GetGradeProfileList(-1, strSchoolID)
	If Not IsArray(arrProfileGrade) Then GenerateError obLanguage("SetupSchoolCalendar","kErrEmptyProfileList")

	specialMain
End Sub

Sub onSpecialHead()
	Call BadFirstLetter()%>
	<script><!--
		function deleteCuriculumProfiles() {

			var chkdCnt = $('*[name="DEL"]:visible:checked').length;
			if (!chkdCnt) {
				$.show.alert(language.Generic.SetupSchoolCalendar.kMsgNoSelectedProfiles);
				return;
			}

			var el = $('*[name="DEL"]');
			if (el.length > 1)
			{
				$.each(el, function() {
					if(this.checked) {
						$(this).parents('tr').hide();
					}
				});
			}
			else {
				if (el[0].checked) {
					$.show.alert(language.Generic.SetupSchoolCalendar.kAlertDeleteAll);
				}
			}
		}

		function doSave() {
			if(isDBBusy()) return false;


			var form = document.MainForm;
			var chkdCnt = 0;
			var el = form.PRID, elProfName = form.PROFILENAME, errMsg = '';

			if(el) {
				if(el.length) {
					for (var i=0;i<el.length;i++) {
						if ((form.DEL[i].type != 'hidden') && form.DEL[i].checked)
							chkdCnt++;
						else {
							if(badFirstLetter(elProfName[i]), false) return false;
							if(trimStr(elProfName[i].value ) == '')
								errMsg = '<%=obLanguage("SetupSchoolCalendar","kAlertCreateName")%>';
							else {
								var el2 = form.elements['GRADE'+el[i].value];
								if((form.elements['GRADESET'][i].value = getGradeSet(el2))== 0)
									errMsg = '<%=obLanguage("SetupSchoolCalendar","kAlertGradeset",strFunctionalityType)%>'+ elProfName[i].value;
							}
							if(errMsg) {
								alert(errMsg);
								elProfName[i].focus();

								return false;
							}
						}
					}

					if (chkdCnt == el.length) {
						alert(language.Generic.SetupSchoolCalendar.kAlertDeleteAll);

						return false;
					}
				}
				else {
					if((form.DEL.type != 'hidden') && form.DEL.checked) {
						alert(language.Generic.SetupSchoolCalendar.kAlertDeleteAll);
						return false;
					}

					if(badFirstLetter(elProfName), false) return false;

					if(trimStr(elProfName.value) == '')
						errMsg = '<%=obLanguage("SetupSchoolCalendar","kAlertCreateName")%>';
					else {
						var el2 = form.elements['GRADE' + el.value];
						if((form.elements['GRADESET'].value = getGradeSet(el2)) == 0)
							errMsg = '<%=obLanguage("SetupSchoolCalendar","kAlertGradeset",strFunctionalityType)%>'+ elProfName.value;
					}
					if(errMsg) {
						alert(errMsg);
						elProfName.focus();

						return false;
					}
				}
			}

			setDBBusy();
			DoSubmit(form, '');
		}

		function getGradeSet(chBoxArray) {
			var chkdCnt = 0;

			if (chBoxArray)
				for (var i=0;i<chBoxArray.length;i++)
					if (chBoxArray[i].type == 'hidden')
						chkdCnt += parseInt(chBoxArray[i].value);
					else
						if (chBoxArray[i].checked )
							chkdCnt += parseInt(chBoxArray[i].value);
			return chkdCnt;
		}

		function addNew() {
			title = "<%=obLanguage("Common","kAdd")& " "&LCase(obLanguage("Common","kProfile", strFunctionalityType))%>";

			source = '	\
				<div class="row">	\
					<div class="col-md-12">	\
						<div class="form-group">	\
							<label class="control-label col-md-3"><%=obLanguage("Common","kProfile", strFunctionalityType)%></label>	\
							<div class="col-md-9">	\
								<input type="text" name="PRNEW" class="form-control FilterWhiteSpace" value="" size="<%=TextInputSize(35)%>" maxlength="50">	\
								<input type="hidden" name="NEWGRADESET" value="0">	\
							</div>	\
						</div>	\
					</div>	\
				</div>	\
				<div class="row" style="padding-top: 15px">	\
					<div class="col-md-12">	\
						<table class="table table-bordered table-sm table-condensed scrollable">	\
							<tr>	\
								<th colspan=13><%=obLanguage("SetupSchoolCalendar","kGradeset",strFunctionalityType)%></th>	\
							</tr>	\
							<tr>{{#each Grades}}	\
								<th>{{this.Label}}</th>	\
							{{/each}}</tr>	\
							<tr>	\
								{{#each Grades}}	\
									<td class="text-center"><input type="checkbox" name="GRNEW" value="{{this.nFactor}}" OnChange="dataChanged()"></td>	\
								{{/each}}	\
							</tr>	\
						</table>	\
					</div>	\
				</div>'

			model = {};
			model.Grades = function (){
				var MinGrade=<%=kMinGrade %>;
				var SchoolMaxGrade = <%=nSchoolMaxGrade %>;
				var arrLabelsGrades = <%=comHelper.JsonHelper.SerializeObject(arrPreSchoolGrades) %>;
				arrLabelsGrades = arrLabelsGrades == null ? [] : arrLabelsGrades;
				nFactors = 1;
				results = [];
				for (i = MinGrade; i <= SchoolMaxGrade; i++) {
					if (arrLabelsGrades == null || arrLabelsGrades[i] == null) {
						arrLabelsGrades[i] = i;
					}
					results[i] = {
						Label: arrLabelsGrades[i],
						nFactor: nFactors
					};
					nFactors *= 2;
				}
				return results;
			}

			$.show.modelDialog({
				title: title,
				model: model,
				template: source,
				size: BootstrapDialog.SIZE_WIDE})
			.then(createNew);
		}

		function createNew(dialog) {
			if(isDBBusy()) return false;

			//var form = document.MainForm;
			var chkdCnt = 0;
			var el = $('[Name=GRNEW]'), elProfName = $('[Name=PRNEW]'), errMsg = '';
			
			if(badFirstLetter(elProfName), false) return false;
			
			var newGradeset = $('[Name=NEWGRADESET]').val(getGradeSet(el));
			newGradeset = newGradeset.val();

			elProfName.val( trimStr( elProfName.val() ) );
			if( elProfName.val() == '' ) {
				errMsg = '<%=obLanguage("SetupSchoolCalendar","kAlertCreateName")%>';
			}
			else if(newGradeset == 0) {
				errMsg = '<%=obLanguage("SetupSchoolCalendar","kAlertGradeset",strFunctionalityType)%>' + elProfName.val().escapeHTML();
			}

			if(errMsg) {
				alert(errMsg);
				elProfName.focus();

				return false;
			}

			setDBBusy();

			postTo("/asp/SetupSchool/Calendar/Curriculum/CuriculumProfilesSave.asp", $("input", dialog.$modalContent).serializeArray());
		}
	//--></script>
<%End Sub

Sub DrawSpecialButtons()
	ButtonSave "doSave();", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MainForm')", obLanguage("Common","kReset")
	ButtonAdd "addNew()", obLanguage("Common","kAdd")
	ButtonDel "deleteCuriculumProfiles()", obLanguage("Common","kRemove")
End Sub

Sub onDrawPage()%>
	<form name="MainForm" method="post" action="/asp/SetupSchool/Calendar/Curriculum/CuriculumProfilesSave.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("BackPage", strScriptName) ) %><%

		DrawButtonPanel
		DrawTable%>
	</form><%
End Sub

Sub DrawTable()
	Dim nGradeSet, nFactor, nProfileID, k
	Dim objCmdCheckClass, bGradeInUse, bClassExists, bProfileInUse

' ЗАМЕЧАНИЕ!!!
' Вроде если kMinGrade <> 0, то весь этот алгоритм со степенью 2 - не работает.
	ReDim arrGrades(nSchoolMaxGrade)
	nFactor = 1
	For i = kMinGrade To nSchoolMaxGrade
		arrGrades(i) = nFactor
		nFactor = nFactor*2
	Next
	%>
	<div class="row">
		<div class="col-md-12">
			<table class="table table-bordered table-striped table-hover">
				<tr><th rowspan=2 class="col-md-2"><%=obLanguage("Common","kProfile", strFunctionalityType)%></th><th colspan=<%=(nSchoolMaxGrade - kMinGrade + 1)%>><%=obLanguage("SetupSchoolCalendar","kGradeset",strFunctionalityType)%></th><%If Not readonly Then%><th rowspan=2><%=obLanguage("Common","kDeletingMark")%></th><%End If%></tr>
				<tr><%
				For i = kMinGrade To nSchoolMaxGrade%><th><%
					If bPreSchool And i >= 0 And i <= 8 Then
						rw DB2HTML(arrPreSchoolGrades(i))
					Else
						rw CStr(i)
					End If%></th><%
				Next%></tr><%
					If readonly Then
						For k = 0 To Ubound(arrProfileGrade, 2)
							nProfileID =arrProfileGrade(0,k)
							nGradeSet = GetSafeLng( arrProfileGrade(2,k), 0 )%>
				<tr><td><%=DB2HTML(arrProfileGrade(1,k))%></td><%
							For Each nFactor In arrGrades%><td class="text-center"><%If nGradeSet Mod 2 <>0 Then%><b>X</b><%Else%>&nbsp;<%End If%></td><%
								nGradeSet = nGradeSet \ 2
							Next%></tr><%
						Next
					Else
						Set objCmdCheckClass = CmdCheckClass()
						For k = 0 To Ubound(arrProfileGrade, 2)
							nProfileID =arrProfileGrade(0,k)
							nGradeSet = GetSafeLng( arrProfileGrade(2,k), 0 )%>
				<tr><%WriteHiddenTags( Array("PRID", nProfileID, "GRADESET", nGradeSet) )%>
						<td><input type="text" name="PROFILENAME" value="<%=DB2Value(arrProfileGrade(1,k))%>" size="<%=TextInputSize(35)%>" maxlength="50"></td><%
							bProfileInUse = False
							i = kMinGrade ' i - curr grade here
							For Each nFactor In arrGrades%>
						<td class="text-center"><%
								bGradeInUse = (nGradeSet Mod 2 <> 0)
								bClassExists = False
								If bGradeInUse Then
									bClassExists = objNSNET.IsClassOfProfileGradeExists_Execute(objCmdCheckClass, nProfileID, i)
									If bClassExists Then bProfileInUse = True
								End If
								If bClassExists Then%><b>X</b><input type="hidden" name="GRADE<%=nProfileID%>" value="<%=nFactor%>"><%
								Else%>
									<input type="checkbox" name="GRADE<%=nProfileID%>" value="<%=nFactor%>"<%
									If bGradeInUse Then Response.Write " checked"%> OnChange="dataChanged()"><%
								End If
								nGradeSet = nGradeSet \ 2
								i = i + 1%>
						</td><%
							Next%>
						<td class="text-center"><%
							If bProfileInUse Then%><%=obLanguage("SetupSchoolCalendar","kProfileUse")%><input type="hidden" name="DEL" value="0"><%
							Else%><input type="checkbox" name="DEL" value="<%=nProfileID%>" OnChange="dataChanged()"><%
							End If%>
						</td>
				</tr><%
						Next
						Call objNSNET.DisposeCommand(objCmdCheckClass)
					End If%>
			</table>
		</div>
	</div><%
End Sub
Function CmdCheckClass()
	Set CmdCheckClass = objNSNET.IsClassOfProfileGradeExists_Prepare()
End Function

%>
