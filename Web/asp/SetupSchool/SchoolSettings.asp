<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE FILE   ="SchoolSettings_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim blnWasSaved
Dim strErrDocID
Dim nAppLastGrade
Dim bPreSchool, arrPreSchoolGrades
Dim bAddSchool

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight( arEditSchoolSettings )
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SchoolSettings","kTitleSettings") & obLanguage("Common","kOfSchool",strFunctionalityType)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementSchoolInfo
End Function
Function GetPageTabItem()
	GetPageTabItem = TabItem_tbSchoolSettings
 End Function

Sub Main()
	blnWasSaved = GetSafeStr( Request("SV"), 1, "N" ) = "Y"
	strErrDocID = GetSafeID(Request("ErrDocID"), "0")
	Call InitSchoolSettings( objNSNET )

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	If bPreSchool Then
		arrPreSchoolGrades = Array(obLanguage("Common","kGr0_s"), obLanguage("Common","kGr1_s"), obLanguage("Common","kGr2_s"), obLanguage("Common","kGr3_s"), obLanguage("Common","kGr4_s"), obLanguage("Common","kGr5_s"), obLanguage("Common","kGr6_s"), obLanguage("Common","kGr7_s"), obLanguage("Common","kGr8_s"))
	End If
	nAppLastGrade = Application("LASTGRADE")(strFunctionalityType)
End Sub

Function onLoad()
	Dim objDocInfo, dtDocDate, strDocNumber
	Dim strErr

	If strErrDocID <> "0" Then
		Set objDocInfo = objNSNET.GetMoveDocInfo(strErrDocID)
		strErr = obLanguage("SchoolSettings","kErrCantMoveDocDate1") & vbCrLf & obLanguage("SchoolSettings","kErrCantMoveDocDate2")
		If Not objDocInfo.EOF Then
			dtDocDate = GetSafeDate(objDocInfo("DOCDATE"), Null)
			strDocNumber = GetSafeStr(objDocInfo("DOCNUMBER"), 20, Null)
			strErr = strErr & ": " & vbCrLf & "'" & strDocNumber & "', " & Date2Str(dtDocDate)
		End If
		onLoad = "JavaScript:WasSaved('" & DB2Value(DB2Java(strErr)) & "');"
	Else
		onLoad = ""
	End If

End Function

Sub onHead()
%><SCRIPT><!--
function getGradeValue(elGrade){
	var nGradeVal = str2lngEx(elGrade);
	if(isNaN(nGradeVal) || (nGradeVal < <%=kMinSchoolGrade%>) || (nGradeVal > <%=kMaxSchoolGrade%>)){
		alert(language.Generic.SchoolSettings.kInputIntegerInRange + ' [<%=kMinSchoolGrade%> ; <%=kMaxSchoolGrade%>]');
		elGrade.focus();
		return Number.NaN;
	}
	return nGradeVal;
}

function IsValidData(){
	var form = document.forms['Main'];
	var elems = form.elements;
	var nMaxMark = <%If CLng(strFunctionalityType)=kFuncType_PreSchool Then%>parseInt(elems['OLDMAX'].value);<%Else%>parseInt(elems['MaxMark'].value);<%End If%>
	if ( (nMaxMark < <%=kMinSchoolMark+1%>) || (nMaxMark > <%=kMaxSchoolMark%>) || isNaN(nMaxMark) ){
		alert(language.Generic.SchoolSettings.kInputIntegerInRange + ': [<%=kMinSchoolMark+1%>;<%=kMaxSchoolMark%>] в поле ' + language.Generic.SchoolSettings.kMaxMark);
		elems['MaxMark'].focus();
		return false;
	}
	var nMinMark = <%If CLng(strFunctionalityType)=kFuncType_PreSchool Then%>parseInt(elems['OLDMIN'].value);<%Else%>parseInt(elems['MinMark'].value);<%End If%>
	if ( (nMinMark < <%=kMinSchoolMark%>) || (nMinMark >= nMaxMark) || isNaN(nMinMark)){
		alert(language.Generic.SchoolSettings.kInputIntegerInRange + ': [<%=kMinSchoolMark%>;' + ( nMaxMark - 1 ) + '] в поле ' + language.Generic.SchoolSettings.kMinMark);
		elems['MinMark'].focus();
		return false;
	}

	<%If Not bAddSchool Then%>
	var nGradeMin = parseInt(getListValue(elems['GradeJunior_Min']));
	var nGradeMax = parseInt(getListValue(elems['GradeJunior_Max']));
	if (nGradeMin > nGradeMax){
		alert(language.SchoolSettings.kInvalidGradeBounds);
		elems['GradeJunior_Min'].focus();
		return false;
	}

	var nGradeMin = parseInt(getListValue(elems['GradeMiddle_Min']));
	if (nGradeMin <= nGradeMax){
		alert(language.SchoolSettings.kErrGradesIntersect);
		elems['GradeMiddle_Min'].focus();
		return false;
	}
	var nGradeMax = parseInt(getListValue(elems['GradeMiddle_Max']));
	if (nGradeMin > nGradeMax){
		alert(language.SchoolSettings.kInvalidGradeBounds);
		elems['GradeMiddle_Min'].focus();
		return false;
	}

	var nGradeMin = parseInt(getListValue(elems['GradeSenior_Min']));
	if (nGradeMin <= nGradeMax){
		alert(language.SchoolSettings.kErrGradesIntersect);
		elems['GradeSenior_Min'].focus();
		return false;
	}
	var nGradeMax = parseInt(getListValue(elems['GradeSenior_Max']));
	if (nGradeMin > nGradeMax){
		alert(language.SchoolSettings.kInvalidGradeBounds);
		elems['GradeSenior_Min'].focus();
		return false;
	}
	<%End If%>
	return true;
}

function SaveSchoolSettings(){
	if(!dataWereChanged){
		return;
	}
		
	if( IsValidData() ){
		var elems = document.forms.Main.elements;
		<%If CLng(strFunctionalityType)<>kFuncType_PreSchool Then%>
		if ( (elems.MaxMark.value != elems.OLDMAX.value) || (elems.MinMark.value != elems.OLDMIN.value) ) {
			$.show.confirmation(language.Generic.SchoolSettings.kConChangeMarkRange).then(function() {
				elems.UPDATESC.value = 1;
				jsSaveForm(document.forms.Main);
			});
		}
		else{
		<%End If%>
			jsSaveForm(document.forms.Main);
		<%If CLng(strFunctionalityType)<>kFuncType_PreSchool Then%>}<%End If%>
	}
}
//--></SCRIPT><%
End Sub

Sub DrawButtons()
	If Not readonly Then
		ButtonSave "SaveSchoolSettings()", obLanguage("Common","kSave")
		ButtonReset "resetScreen('Main')", obLanguage("Common","kReset")
	End If
End Sub

Sub onDrawPage()
	Dim i
	'	отключенные параметры
	'	nMoveYearDay = CLng(arrSchoolSettings(1, kSSIndex_MoveYear))
	'	strSMSEmail = arrSchoolSettings(1, kSSIndex_SMSEmail)

	%><form name="Main" method="post" action="SchoolSettingsSave.asp">
		<%=WriteObligatoryTags()%>
		<%Call DrawButtonPanel
		Call DrawSettingPanels
		If Not readonly Then
		%><%=WriteHiddenTags( Array( "OLDMIN", arrSchoolSettings(1, kSSIndex_MinMark), "OLDMAX", arrSchoolSettings(1, kSSIndex_MaxMark), "UPDATESC", "0" ) )%><%
			If bAddSchool Then
				Response.Write WriteHiddenTags( Array( "GradeJunior_Min", arrSchoolSettings(1, kSSIndex_GradeJunior_Min), _
					"GradeJunior_Max", arrSchoolSettings(1, kSSIndex_GradeJunior_Max), _
					"GradeMiddle_Min", arrSchoolSettings(1, kSSIndex_GradeMiddle_Min), _
					"GradeMiddle_Max", arrSchoolSettings(1, kSSIndex_GradeMiddle_Max), _
					"GradeSenior_Min", arrSchoolSettings(1, kSSIndex_GradeSenior_Min), _
					"GradeSenior_Max", arrSchoolSettings(1, kSSIndex_GradeSenior_Max) ) )
			End If
		End If
	%></form><%
End Sub

Sub DrawSettingPanels()
	Dim strSMSGate
	Dim strMarksAveraging

	strSMSGate = arrSchoolSettings(1, kSSIndex_SMSGate)
	strMarksAveraging = arrSchoolSettings(1, kSSIndex_MarksAveraging)

	SetFiltersWidth "", "", ""%>
	<div class="row">
		<div class="col-md-6 col-lg-4"><%
			If CLng(strFunctionalityType) <> kFuncType_PreSchool Then
				OpenPanelEx "Шкала оценок", "grade_scale", "", False, "panel-danger"
					If readonly Then
						DrawReadonlyRow obLanguage("SchoolSettings","kMaxMark"), arrSchoolSettings(1, kSSIndex_MaxMark)
					Else
						Call DrawInputRow(obLanguage("SchoolSettings","kMaxMark"), arrSchoolSettings(1, kSSIndex_MaxMark), "MaxMark", "text", 5, 4, "")
					End If

					If readonly Then
						DrawReadonlyRow obLanguage("SchoolSettings","kMinMark"), arrSchoolSettings(1, kSSIndex_MinMark)
					Else
						Call DrawInputRow(obLanguage("SchoolSettings","kMinMark"), arrSchoolSettings(1, kSSIndex_MinMark), "MinMark", "text", 5, 4, "")
					End If

					If readonly Then
						DrawReadonlyRow obLanguage("SchoolSettings","kMarksAveraging"), IIf(strMarksAveraging = "0", obLanguage("SchoolSettings","kMarksAveragingNormal"), obLanguage("SchoolSettings","kMarksAveragingWeight"))
					Else
						OpenFormGroup obLanguage("SchoolSettings","kMarksAveraging")%>
							<select name="MarksAveraging" onChange="dataChanged();" class="form-control">
								<option value="0" <%If strMarksAveraging = "0" Then%>selected<%End If%>><%=obLanguage("SchoolSettings","kMarksAveragingNormal")%></option>
								<option value="1" <%If strMarksAveraging = "1" Then%>selected<%End If%>><%=obLanguage("SchoolSettings","kMarksAveragingWeight")%></option>
							</select>
						<%CloseFormGroup
					End If
				ClosePanel
			End If

			OpenPanelEx obLanguage("SchoolSettings","kSMSSettings"), "sms_settings", "", False, "panel-success"
				If readonly Then
					DrawReadonlyRow obLanguage("SchoolSettings","kSMSGate"), IIf(strSMSGate = "1", obLanguage("SchoolSettings","kSMSGateEmail"), obLanguage("SchoolSettings","kSMSGateWeb"))
				Else
					OpenFormGroup obLanguage("SchoolSettings","kSMSGate")%>
						<select name="SMSGate" onChange="dataChanged();" class="form-control">
							<option value="1" <%If strSMSGate = "1" Then%>selected<%End If%>><%=obLanguage("SchoolSettings","kSMSGateEmail")%></option>
							<option value="0" <%If strSMSGate = "0" Then%>selected<%End If%>><%=obLanguage("SchoolSettings","kSMSGateWeb")%></option>
						</select><%
					CloseFormGroup
				End If
			ClosePanel

			If CLng(strFunctionalityType) = kFuncType_PreSchool Then
				DrawPanelOthers()
			End If%>
		</div>

		<div class="col-md-6 col-lg-4"><%
			If Not bAddSchool Then
				OpenPanelEx obLanguage("SchoolSettings","kGrade_Bounds",strFunctionalityType), "grade_bounds", "", False, "panel-info"
					If readonly Then
						Call DrawReadonlyRow( obLanguage("SchoolSettings","kGrade_Junior",strFunctionalityType), GetGradeName(arrSchoolSettings(1, kSSIndex_GradeJunior_Min)) & " - " & GetGradeName(arrSchoolSettings(1, kSSIndex_GradeJunior_Max)) & " " & obLanguage("SchoolSettings","kClasses",strFunctionalityType) )
						Call DrawReadonlyRow( obLanguage("SchoolSettings","kGrade_Middle",strFunctionalityType), GetGradeName(arrSchoolSettings(1, kSSIndex_GradeMiddle_Min)) & " - " & GetGradeName(arrSchoolSettings(1, kSSIndex_GradeMiddle_Max)) & " " & obLanguage("SchoolSettings","kClasses",strFunctionalityType) )
						Call DrawReadonlyRow( obLanguage("SchoolSettings","kGrade_Senior",strFunctionalityType), GetGradeName(arrSchoolSettings(1, kSSIndex_GradeSenior_Min)) & " - " & GetGradeName(arrSchoolSettings(1, kSSIndex_GradeSenior_Max)) & " " & obLanguage("SchoolSettings","kClasses",strFunctionalityType) )
					Else
						OpenFormGroup obLanguage("SchoolSettings","kGrade_Junior",strFunctionalityType)
							Call DrawSelect(arrSchoolSettings(1, kSSIndex_GradeJunior_Min), "GradeJunior_Min")
							%>&nbsp;-&nbsp;<%
							Call DrawSelect(arrSchoolSettings(1, kSSIndex_GradeJunior_Max), "GradeJunior_Max")
							%>&nbsp;<%=obLanguage("SchoolSettings","kClasses",strFunctionalityType)%><%
						CloseFormGroup
				
						OpenFormGroup obLanguage("SchoolSettings","kGrade_Middle",strFunctionalityType)
							Call DrawSelect(arrSchoolSettings(1, kSSIndex_GradeMiddle_Min), "GradeMiddle_Min")
							%>&nbsp;-&nbsp;<%
							Call DrawSelect(arrSchoolSettings(1, kSSIndex_GradeMiddle_Max), "GradeMiddle_Max")
							%>&nbsp;<%=obLanguage("SchoolSettings","kClasses",strFunctionalityType)%><%
						CloseFormGroup

						OpenFormGroup obLanguage("SchoolSettings","kGrade_Senior",strFunctionalityType)
							Call DrawSelect(arrSchoolSettings(1, kSSIndex_GradeSenior_Min), "GradeSenior_Min")
							%>&nbsp;-&nbsp;<%
							Call DrawSelect(arrSchoolSettings(1, kSSIndex_GradeSenior_Max), "GradeSenior_Max")
							%>&nbsp;<%=obLanguage("SchoolSettings","kClasses",strFunctionalityType)%><%
						CloseFormGroup
					End If
				ClosePanel
			End If

			If CLng(strFunctionalityType) <> kFuncType_PreSchool Then
				DrawPanelOthers()
			End If%>
		</div>
	</div><%
End Sub

Sub DrawPanelOthers()
	Dim strAdminEdit, strWinAuth

	strAdminEdit = arrSchoolSettings(1, kSSIndex_AdminEdit)
	strWinAuth = arrSchoolSettings(1, kSSIndex_WinAuth)

	OpenPanel "Другие", "others", False
		If readonly Then
			DrawReadonlyRow obLanguage("SchoolSettings","kAdminEdit"), IIf(strAdminEdit = "1", obLanguage("SchoolSettings","kAccessYes"), obLanguage("SchoolSettings","kAccessNo"))
		Else
			OpenFormGroup obLanguage("SchoolSettings","kAdminEdit")%>
				<select name="AdminEdit" onChange="dataChanged();" class="form-control">
					<option value="1" <%If strAdminEdit = "1" Then%>selected<%End If%>><%=obLanguage("SchoolSettings","kAccessYes")%></option>
					<option value="0" <%If strAdminEdit = "0" Then%>selected<%End If%>><%=obLanguage("SchoolSettings","kAccessNo")%></option>
				</select><%
			CloseFormGroup
		End If


		If obContext.ServerSettings.UserAuthorizationSettings.WindowsAuth Then
			If readonly Then
				DrawReadonlyRow obLanguage("SchoolSettings","kWinAuth"), IIf(strWinAuth = "1", obLanguage("SchoolSettings","kWinAuthYes"), obLanguage("SchoolSettings","kWinAuthNo"))
			Else
				OpenFormGroup obLanguage("SchoolSettings","kWinAuth")%>
					<select name="WinAuth" onChange="dataChanged();" class="form-control">
						<option value="1" <%If strWinAuth = "1" Then%>selected<%End If%>><%=obLanguage("SchoolSettings","kWinAuthYes")%></option>
						<option value="0" <%If strWinAuth = "0" Then%>selected<%End If%>><%=obLanguage("SchoolSettings","kWinAuthNo")%></option>
					</select><%
				CloseFormGroup
			End If
		End If
	ClosePanel
End Sub

Sub DrawInputText( strInfo, inputName, size, length )%>
	<input type="text" name="<%=inputName%>" size="<%=TextInputSize(size)%>" maxlength="<%=length%>" value="<%=DB2Value(strInfo) %>" OnChange="dataChanged()"><%
End Sub

Sub DrawSelect(selectValue, selectName)
	Dim i%>
	<select name="<%=selectName%>" onChange="dataChanged();" class="form-control form-control-inline"><%
	If bPreSchool Then
		For i=0 To nAppLastGrade%>
			<option <%If i=CLng(selectValue) Then%> SELECTED <%End If%> VALUE="<%=i%>"><%=arrPreSchoolGrades(i)%></option><%
		Next
	Else
		For i=0 To nAppLastGrade%>
			<option <%If i=CLng(selectValue) Then%> SELECTED <%End If%> VALUE="<%=i%>"><%=i%></option><%
		Next
	End If%>
	</select><%
End Sub

Function GetGradeName(strGrade)
	GetGradeName = strGrade
	If bPreSchool Then
		GetGradeName = arrPreSchoolGrades(CLng(strGrade))
	End If
End Function
%>
