<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/filterYears.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kEpsilon = 0.00001

Dim objPrograms, bEmpty
Dim objDirections, strDirectionID

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kTitleAddPrograms")
End	Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = CLng(strFunctionalityType) = kFuncType_Add
End	Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningGroups
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbCrtClass
 End Function

Sub ReadState()
	If Not readonly Then
		readonly = Not HasUserRight(arClassMgmCreateClass)
	End If
	strDirectionID = GetSafeID(Request("DIRID"), GetSafeID(obTokenMgr.GetData(strToken, stProgDir), "-1"))
	If Not bFutureMode Then InitYears
End	Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stProgDir, strDirectionID)
	If Not bFutureMode Then Call obTokenMgr.SetData(strToken, stCurrYear, strCurrYearID)
End Sub

Sub CheckDirection()
	Dim bFind
	If strDirectionID = "-1" Then
		Exit Sub
	End If
	bFind = False
	Do While Not objDirections.EOF
		If strDirectionID = GetSafeID(objDirections("DIRECTIONID"), Null) Then
			bFind = True
			Exit Do
		End If
		objDirections.MoveNext
	Loop
	objDirections.MoveFirst
	If Not bFind Then
		strDirectionID = GetSafeID(objDirections("DIRECTIONID"), Null)
	End If
End Sub

Sub	Main
	Set objDirections = objNSNET.GetProgDirections(strSchoolID, -2)
	If objDirections.EOF Then GenerateError obLanguage("SetupSchool","kErrNoProgramDirections")
	Call CheckDirection()
	Set objPrograms = objNSNET.GetAddPrograms(strSchoolID, strDirectionID, strCurrYearID, -1, False)
	bEmpty = objPrograms.EOF
End	Sub

Sub	onHead()%>
	<SCRIPT><!--
		function Back() {
			goBack(document.forms.main,'/asp/ClassManagement/Classes.asp');
		}

		<%If Not readonly Then%>
			function editProgram(sProgID) {
				var form = document.forms['main'];

				form.PROGID.value = sProgID;
				form.ACT.value = 'edit';

				setDBBusy();
				DoSubmit(form, 'AddProgramEdit.asp');
			}

			function deletePrograms() {
				if(isDBBusy()) return false;

				var form = document.forms['main'];
				var chkProg = 0;
				var chkBox=form.elements.delProg;

				if (chkBox) {
					if (chkBox.length) {
						for (var j = 0; j < chkBox.length; j++)
							if (chkBox[j].checked == true) {chkProg=1; break;}
					}
					else if (chkBox.checked == true)
						chkProg=1;
				}

				if (chkProg > 0) {
					$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function(){
						setDBBusy();
						form.ACT.value = 'del';
						DoSubmit(form, 'AddProgramSave.asp');
					});
				}
				else {
					alert(language.Generic.SetupSchool.kMsgNoSelectedPrograms); 
					return;
				}
			}
		<%End If%>
	//--></SCRIPT><%
End	Sub

Sub DrawFilters(strForm)
	DrawFilterRow strForm, obLanguage("SetupSchool","kProgramDirection"), "DIRID", objDirections, "DIRECTIONID", "DIRECTIONNAME", strDirectionID, True
	If Not bFutureMode Then Call DrawYears(strForm)
End Sub

Sub DrawButtons()
	ButtonAdd "editProgram('0');", obLanguage("Common","kAdd")
	If Not bEmpty Then
		ButtonDel "deletePrograms();", obLanguage("Common","kRemove")
		ButtonReset "resetScreen('main');", obLanguage("Common","kReset")
	End If
End Sub


Sub onDrawPage()
	Dim strProgramID
	Dim rsLimits, nRowCnt
	Dim dYearHours%>

	<FORM NAME="main" METHOD="post" ACTION="AddProgramSave.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("ACT", "del", "PROGID", ""))%><%

		Call SetFiltersWidth("col-md-7 col-lg-7", "col-md-3", "col-md-5")
		Call DrawButtonsFilters(Not readonly, "main")
		Call RestoreDefFiltersWidth()

		If bEmpty Then%>
			<div class="row">
				<div class="col-md-7 col-lg-7"><%
					Call DrawInfo(obLanguage("SetupSchool","kNoAddPrograms"), False)%>
				</div>
			</div><%
		Else%>
			<div class="row">
				<div class="col-md-12">
					<table class="table table-thin table-bright-striped">
						<tr>
							<th rowspan="2"><%=obLanguage("SetupSchool","kProgramName")%></th>
							<th rowspan="2"><%=obLanguage("SetupSchool","kProgramAttr")%></th>
							<th rowspan="2"><%=obLanguage("SetupSchool","kProgramDirection")%></th>

							<th rowspan="2"><%=obLanguage("SetupSchool","kProgramType")%></th>
							<th rowspan="2"><%=obLanguage("SetupSchool","kAdaptation")%></th>
							<th rowspan="2"><%=obLanguage("SetupSchool","kUseDistanceTech")%></th>
		

							<th rowspan="2"><%=obLanguage("SetupSchool","kProgramDescr")%></th>
							<th colspan="3"><%=obLanguage("SetupSchool","kProgramHours")%></th>
							<%=ShowDelCellHeader(2)%>
						</tr>
						<tr>
							<th><%=obLanguage("SetupSchool","kLearningYear")%></th>
							<th><%=obLanguage("SetupSchool","kForYear")%></th>
							<th><%=obLanguage("SetupSchool","kForWeek")%></th>
						</tr><%

						Set rsLimits = objPrograms("rsLimitsInfo").Value
						If readonly Then
							While Not objPrograms.EOF
								strProgramID = GetSafeID(objPrograms("PROGRAMID"), Null)
								nRowCnt = 1
								If Not rsLimits.EOF Then
									nRowCnt = rsLimits.RecordCount
								End If%>
								<tr>
									<td rowspan="<%=nRowCnt%>"><%=DB2HTML_BR(objPrograms("PROGRAMNAME"))%></td>
									<td rowspan="<%=nRowCnt%>"><%=DB2HTML(objPrograms("PROG_ATTR"))%></td>
									<td rowspan="<%=nRowCnt%>"><%=DB2HTML(objPrograms("DIRECTIONNAME"))%></td>

									<td rowspan="<%=nRowCnt%>"><%=DB2HTML(objPrograms("ADDPROGRAMTYPENAME"))%></td>

									<td rowspan="<%=nRowCnt%>" class="text-center"><%=IIF(objPrograms("ADAPTATION") = "Y", obLanguage("Common","kYes"), "")%></td>
									<td rowspan="<%=nRowCnt%>" class="text-center"><%=IIF(objPrograms("USEDISTANCETECH") = "Y", obLanguage("Common","kYes"), "")%></td>

									<td rowspan="<%=nRowCnt%>"><%=DB2HTML(objPrograms("ARTTYPE"))%></td>

									<td rowspan="<%=nRowCnt%>"><%=DB2HTML_BR(objPrograms("DESCRIPTION"))%></td>

									<%If rsLimits.EOF Then%>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
									<%Else
										dYearHours = CDbl(rsLimits("YEARHOURS"))
										If dYearHours < kEpsilon Then dYearHours = Null%>
										<td class="text-center"><%=DB2HTML(rsLimits("GRADE"))%></td>
										<td class="text-center"><%=DB2HTML(dYearHours)%></td>
										<td class="text-center"><%=DB2HTML(rsLimits("WEEKHOURS"))%></td><%
										rsLimits.MoveNext
									End If%>
								</tr><%
								While Not rsLimits.EOF
									dYearHours = CDbl(rsLimits("YEARHOURS"))
									If dYearHours < kEpsilon Then dYearHours = Null%>
									<tr>
										<td class="text-center"><%=DB2HTML(rsLimits("GRADE"))%></td>
										<td class="text-center"><%=DB2HTML(dYearHours)%></td>
										<td class="text-center"><%=DB2HTML(rsLimits("WEEKHOURS"))%></td>
									</tr><%
									rsLimits.MoveNext
								Wend

								objPrograms.MoveNext
							Wend
						Else
							While Not objPrograms.EOF
								strProgramID = GetSafeID(objPrograms("PROGRAMID"), Null)
								nRowCnt = 1
								If Not rsLimits.EOF Then
									nRowCnt = rsLimits.RecordCount
								End If%>
								<tr>
									<td rowspan="<%=nRowCnt%>"><%=ShowAnchor( "editProgram('" & strProgramID & "')", obLanguage("Common","kChange"), DB2HTML_BR(objPrograms("PROGRAMNAME")), "" )%></td>
									<td rowspan="<%=nRowCnt%>"><%=DB2HTML(objPrograms("PROG_ATTR"))%></td>
									<td rowspan="<%=nRowCnt%>"><%=DB2HTML(objPrograms("DIRECTIONNAME"))%></td>

									<td rowspan="<%=nRowCnt%>"><%=DB2HTML(objPrograms("ADDPROGRAMTYPENAME"))%></td>
									<td rowspan="<%=nRowCnt%>" class="text-center"><%=IIF(objPrograms("ADAPTATION") = "Y", obLanguage("Common","kYes"), "")%></td>
									<td rowspan="<%=nRowCnt%>" class="text-center"><%=IIF(objPrograms("USEDISTANCETECH") = "Y", obLanguage("Common","kYes"), "")%></td>
									<td rowspan="<%=nRowCnt%>"><%=DB2HTML(objPrograms("ARTTYPE"))%></td>

									<td rowspan="<%=nRowCnt%>"><%=DB2HTML_BR(objPrograms("DESCRIPTION"))%></td>

									<%If rsLimits.EOF Then%>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
									<%Else
										dYearHours = CDbl(rsLimits("YEARHOURS"))
										If dYearHours < kEpsilon Then dYearHours = Null%>
										<td class="text-center"><%=DB2HTML(rsLimits("GRADE"))%></td>
										<td class="text-center"><%=DB2HTML(dYearHours)%></td>
										<td class="text-center"><%=DB2HTML(rsLimits("WEEKHOURS"))%></td><%
										rsLimits.MoveNext
									End If%>

									<td rowspan="<%=nRowCnt%>" class="text-center"><%If objPrograms("USED") > 0 Then%><%=obLanguage("Common","kEmploy")%><% Else%><INPUT TYPE="checkbox" NAME="delProg" VALUE="<%=strProgramID%>"><%End If%></td>
								</tr><%
								While Not rsLimits.EOF
									dYearHours = CDbl(rsLimits("YEARHOURS"))
									If dYearHours < kEpsilon Then dYearHours = Null%>
									<tr>
										<td class="text-center"><%=DB2HTML(rsLimits("GRADE"))%></td>
										<td class="text-center"><%=DB2HTML(dYearHours)%></td>
										<td class="text-center"><%=DB2HTML(rsLimits("WEEKHOURS"))%></td>
									</tr><%
									rsLimits.MoveNext
								Wend

								objPrograms.MoveNext
							Wend
						End If%>
					</table>
				</div>
			</div><%
		End If%>
	</FORM><%
End	Sub%>