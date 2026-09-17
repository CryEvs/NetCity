<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/filterYears.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kMaxLenHours = 8
Const MaxProgramNameSize = 255
Const MaxDescriptionSize = 255
Const MaxArtTypeSize = 200
Const MaxFederalRequirementsSize = 4000
Const kEpsilon = 0.00001

Dim strSchoolCode
Dim strProgID, bNew
Dim strDirectionID, strDirectionName, strProgName, strProgDescr, bIsOldDirection
Dim objDirections
Dim strProgAttr
Dim objProgInfo
Dim objAddProgramTypes
Dim bCanReplace, objPrograms, bSelectDirection
Dim strArtType, strFederalRequirements, strUseDistanceTech, strAdaptation, strAddProgramTypeId

Function hasUserRightsOnPage()
	hasUserRightsOnPage = CLng(strFunctionalityType) = kFuncType_Add
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kTitleAddProgram")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningGroups
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbCrtClass
 End Function

Sub ReadState()
	strProgID = GetSafeID(Request("PROGID"), GetSafeID(obTokenMgr.GetData(strToken, stAddProgramID), "0"))
	bNew = (strProgID = "0")
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stAddProgramID, strProgID)
End Sub

Sub Main()
	If Not bNew Then
		Set objProgInfo = objNSNET.GetAddProgram(strProgID, strCurrYearID, -1)
		If objProgInfo.EOF Then GenerateError obLanguage("SetupSchool","kCantGetAddProgramInfo")

		strDirectionID = GetSafeID(objProgInfo("DIRECTIONID"), Null)
		strDirectionName = GetSafeStr(objProgInfo("DIRECTIONNAME"), -1, Null)
		strProgName = GetSafeStr(objProgInfo("PROGRAMNAME"), -1, Null)
		strProgAttr = GetSafeStr(objProgInfo("PROG_ATTR"), -1, Null)
		strArtType = GetSafeStr(objProgInfo("ARTTYPE"), -1, "")
		strFederalRequirements = GetSafeStr(objProgInfo("FEDERALREQUIREMENTS"), -1, "")
		strUseDistanceTech = GetSafeStr(objProgInfo("USEDISTANCETECH"), -1, "N")
		strAdaptation = GetSafeStr(objProgInfo("ADAPTATION"), -1, "N")
		strAddProgramTypeID = GetSafeID(objProgInfo("ADDPROGRAMTYPEID"), Null)

		strProgDescr = GetSafeStr(objProgInfo("DESCRIPTION"), -1, "")
		bIsOldDirection = CBool(objProgInfo("OLDDIR"))
	Else
		strDirectionID = GetSafeID(Request("DIRID"), GetSafeID(obTokenMgr.GetData(strToken, stProgDir), "-1"))
		If strDirectionID = "-1" Then
			strDirectionID = "0"
		End If
		strProgName = ""
		strProgAttr = ""
		strProgDescr = ""
		strArtType = ""
		strFederalRequirements = ""
		strUseDistanceTech = "N"
		strAdaptation = "N"
		bIsOldDirection = False
		strAddProgramTypeId = "1"
	End If

	Set objDirections = objNSNET.GetProgDirections(strSchoolID, IIf(bNew, -1, strDirectionID))
	Set objAddProgramTypes = objNSNET.GetProgramTypes()
	If objDirections.EOF Then GenerateError obLanguage("SetupSchool","kErrNoProgramDirections")
	bCanReplace = False
	If Not bNew Then
		Set objPrograms = objNSNET.GetAddPrograms(strSchoolID, strDirectionID, strCurrYearID, strProgID, False)
		bCanReplace = Not objPrograms.EOF
	End If
End Sub

Sub onHead()
	Dim i, bIsCheckOldDirection
	bIsCheckOldDirection = bIsOldDirection And UDOD_MAY_EDIT_PROGRAMM_DIRECTION%>

	<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Calendar/Curriculum/Float_js_inc.asp" -->
	<SCRIPT><!--
		var valEps = 0.000001;
		function Back() {
			goBack(document.forms.main,'AddPrograms.asp');
		}

		function saveProgram() {
			var form = document.forms.main;
			var confirms = new Array();

			<%If bIsCheckOldDirection Then%>
				if (getListValue(form.DIRID) == '<%=strDirectionID%>') {
					confirms.push(extDeferred.wrapPromise($.show.getConfirmation(language.Generic.SetupSchool.kProgramDirectionIsOld)
						, function(){}
						, function(){form.DIRID.focus();}
					));
				}
			<%End If%>

			extDeferred.when(confirms).then(function() {
				if(!dataWereChanged) return;

				<%If bNew Then%>
					if (getListValue(form.DIRID) == '-1') {
						alert(language.Generic.SetupSchool.kSelectProgramDirection)
						form.DIRID.focus();

						return;
					}
				<%End If%>

				if(trimStr(form.PROGNAME.value) == '') {
					alert(language.Generic.SetupSchool.kErrEmptyProgramName);
					form.PROGNAME.focus();

					return;
				}

				if(trimStr(form.PROG_ATTR.value) == '') {
					alert(language.Generic.SetupSchool.kErrEmptyProgramAttr);
					form.PROG_ATTR.focus();

					return;
				}

				if(!(checkAreaLength(form.PROGNAME, <%=MaxProgramNameSize%>, '<%=obLanguage("SetupSchool","kProgramName")%>'))) return;

				if(!(checkAreaLength(form.FEDERALREQUIREMENTS, <%=MaxFederalRequirementsSize%>, '<%=obLanguage("SetupSchool","kFederalRequirements")%>'))) return;

				if(!(checkAreaLength(form.DESCR, <%=MaxDescriptionSize%>, '<%=obLanguage("SetupSchool","kProgramDescr")%>'))) return;

				var valParseYear = 0;
				var valParseWeek = 0;
				<%For i = kMinGrade To kMaxGrade%>
					valParseYear = str2floatEx(form.YEARHOURS_<%=i%>);
					if( valParseYear != '' ){
						if( isNaN(valParseYear) || (valParseYear < (0 - valEps)) ) {
							alert(language.Generic.SetupSchool.kEnterNumberNonNegativeOrEmpty);
							form.YEARHOURS_<%=i%>.focus();
							return;
						}
					}
					valParseWeek = str2floatEx(form.WEEKHOURS_<%=i%>);
					if( valParseWeek != '' ){
						if( isNaN(valParseWeek) || (valParseWeek < (0 - valEps)) ) {
							alert(language.Generic.SetupSchool.kEnterNumberNonNegativeOrEmpty);
							form.WEEKHOURS_<%=i%>.focus();
							return;
						}
					}
					if( valParseYear != '' && valParseWeek != '' ){
						if( valParseYear < valParseWeek ) {
							alert(language.Generic.SetupSchool.kErrWeekHoursGraterThanYear);
							form.YEARHOURS_<%=i%>.focus();
							return;
						}
					}
					if( valParseYear != '' && valParseWeek == '' ){
						alert(language.Generic.SetupSchool.kErrWeekHoursEmptyButYear_Not);
						form.WEEKHOURS_<%=i%>.focus();
						return;
					}
				<%Next%>

				form.ACT.value = 'edit';
				$(document).trigger('showProcessing');
				DoSubmit( form, "" );
			});
		}

		<%If bCanReplace Then%>
			function replaceProgram() {
				var replaceBtn = function(dialog) {
					var form = document.forms.replaceProgram;

					if (getListValue(form.ReplaceProgID) == '-1') {
						alert(language.Generic.SetupSchool.kSelectProgramForReplace)
						form.ReplaceProgID.focus();

						return;
					}
					
					$.show.confirmation(language.Generic.SetupSchool.kReplaceProgram).then(function() {
						form.ACT.value = 'replace';

						$(document).trigger('showProcessing');
						ok('replaceProgram', 'AddProgramSave.asp');
					});
				};

				$.show.dialog({
					title: language.Generic.SetupSchool.kReplaceTo,
					message: $('#replaceProgramTmpl'),
					buttons: [{label: language.Generic.SetupSchool.kReplace, action: replaceBtn, cssClass: 'btn-primary'}]
				});
			}
		<%End If%>
	//--></SCRIPT><%
End Sub

Sub DrawButtons()
	Call ButtonSave("saveProgram()", obLanguage("Common","kSave"))
	Call ButtonReset("resetScreen('main');", obLanguage("Common","kReset"))

	If bCanReplace Then rw ShowButton("replace", "replace", "JavaScript:replaceProgram()", obLanguage("SetupSchool","kReplace"), obLanguage("SetupSchool","kReplace"))
End Sub

Sub DrawFilters(strFormName)
	If bSelectDirection Then
		Call DrawSelectInfoRow(obLanguage("SetupSchool","kProgramDirection") & ":", strDirectionID, "DIRID", objDirections, "DIRECTIONID", "DIRECTIONNAME", IIf(bNew, "", Null), "")
	Else
		Call DrawReadonlyRow(obLanguage("SetupSchool","kProgramDirection") & ":", strDirectionName)
	End If

	Call DrawInputRow(obLanguage("SetupSchool","kProgramName") & ":", strProgName, "PROGNAME", "area", 50, 2, "" )
	Call DrawInputRow(obLanguage("SetupSchool","kProgramAttr") & ":", strProgAttr, "PROG_ATTR", "text", 50, 50, "")

	Call DrawSelectInfoRow(obLanguage("SetupSchool","kProgramType") & ":", strAddProgramTypeId, "ADDPROGRAMTYPEID", objAddProgramTypes, "ADDPROGRAMTYPEID", "ADDPROGRAMTYPENAME", IIf(bNew, "", Null), "")
	Call DrawCheckBox(obLanguage("SetupSchool", "kAdaptation"), "ADAPTATION", "Y", strAdaptation = "Y", "dataChanged();")
	Call DrawCheckBox(obLanguage("SetupSchool", "kUseDistanceTech"), "USEDISTANCETECH", "Y", strUseDistanceTech = "Y", "dataChanged();")
	Call DrawInputRow(obLanguage("SetupSchool","kFederalRequirements") & ":", strFederalRequirements, "FEDERALREQUIREMENTS", "area", MaxFederalRequirementsSize, MaxFederalRequirementsSize, "")

	Call DrawInputRow(obLanguage("SetupSchool","kProgramDescr") & ":", strProgDescr, "DESCR", "area", 50, 3, "" )
End Sub

Sub onDrawPage()
	Dim dYearHours, dWeekHours, strYearHours, strWeekHours
	Dim i, nGrade

	bSelectDirection = (bNew Or UDOD_MAY_EDIT_PROGRAMM_DIRECTION)%>

	<form NAME="main" METHOD="post" ACTION="AddProgramSave.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("PROGID", strProgID, "ACT", "edit"))%>

		<%If Not bSelectDirection Then%>
			<%=WriteHiddenTags(Array("DIRID", strDirectionID))%>
		<%End If
		
		Call SetFiltersWidth("col-md-9 col-lg-7", "col-md-5 col-lg-4", "col-md-7 col-lg-5")
		Call DrawButtonsFilters(True, "main")
		Call RestoreDefFiltersWidth()%>
		
		<div class="row">
			<div class="col-md-10 col-lg-6">
				<hr />
				<% OpenPanelEx obLanguage("SetupSchool","kProgramHours"), "hours", "", False, "panel-warning inline-block"%>
				<table class="table table-bordered table-xs table-thin">
					<tr>
						<th align="center"><%=obLanguage("SetupSchool","kLearningYear")%></th>
						<th align="center"><%=obLanguage("SetupSchool","kForYear")%></th>
						<th align="center"><%=obLanguage("SetupSchool","kForWeek")%></th>
					</tr><%

					For i = kMinGrade To kMaxGrade
						dYearHours = 0.0
						dWeekHours = 0.0
						If Not bNew Then
							If Not objProgInfo.EOF Then
								nGrade = GetSafeLng(objProgInfo("GRADE"), -1)
								If i = nGrade Then
									dYearHours = CDbl(objProgInfo("YEARHOURS"))
									dWeekHours = CDbl(objProgInfo("WEEKHOURS"))
									objProgInfo.MoveNext
								End If
							End If
						End If
						strYearHours = IIf(dYearHours < kEpsilon, "", CStr(dYearHours))
						strWeekHours = IIf(dWeekHours < kEpsilon, "", CStr(dWeekHours))%>

						<tr>
							<th class="text-center"><%=i%></th>
							<td>
								<input type="text" class="form-control" name="YEARHOURS_<%=i%>" size="<%=TextInputSize(10)%>" maxlength="<%=kMaxLenHours%>" value="<%=strYearHours%>" OnChange="dataChanged()">
							</td>
							<td>
								<input type="text" class="form-control" name="WEEKHOURS_<%=i%>" size="<%=TextInputSize(10)%>" maxlength="<%=kMaxLenHours%>" value="<%=strWeekHours%>" OnChange="dataChanged()">
							</td>
						</tr><%
					Next%>
				</table>
				<%ClosePanel %>
			</div>
		</div>
	</form>
	
	<%If bCanReplace Then%>
		<script id="replaceProgramTmpl" type="text/html">
			<form class="form-horizontal" id="replaceProgram" name="replaceProgram" method="post">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags(Array("PROGID", strProgID, "ACT", ""))%><%

				SetFiltersWidth "", "col-md-4", "col-md-8"

				OpenFormGroup obLanguage("SetupSchool", "kReplaceTo")
					DrawSelectRs objPrograms, "ReplaceProgID", "PROGRAMID", "PROGRAMNAME", -1, " ", " "
				CloseFormGroup
			
				RestoreDefFiltersWidth%>
			</form>
		</script><%
	End If
End Sub%>