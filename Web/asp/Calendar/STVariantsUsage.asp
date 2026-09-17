<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE FILE="STVariants_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Dim bPreSchool, arrPreSchoolGrades
Dim objAllVariants, nAllVariantsCount, bError, strErrorMsg
Dim objData, nDataCount

Dim nUsageLevel
Dim strSchoolVariantID, strSchoolVariantName

Function GetPageTitle()
	GetPageTitle = obLanguage("Calendar","kTitleLessonTimeVariantsAssignments")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbTimes
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCalendarCreateCalendar)
End Function

Sub ReadState()
	nUsageLevel = GetSafeLng(Request("UsageLevel"), GetSafeLng(obTokenMgr.GetData(strToken, stSTVarsUsageLevel), kVarUsageLevel_School))
End Sub

Sub Main
	Dim objCMComponent, objResult
	Dim objSchoolVariant
	Dim i

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	If bPreSchool Then
		arrPreSchoolGrades = Array(obLanguage("Common","kGr0"), obLanguage("Common","kGr1"), obLanguage("Common","kGr2"), obLanguage("Common","kGr3"), obLanguage("Common","kGr4"), obLanguage("Common","kGr5"), obLanguage("Common","kGr6"), obLanguage("Common","kGr7"), obLanguage("Common","kGr8"))
	End If

	bError = False
	strErrorMsg = ""
	Set objAllVariants = Nothing

	Set objCMComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IClassMeetingComponent")
	TestError obLanguage("ServAdmin", "kCantCreateObj")

	Set objResult = objCMComponent.GetScheduleTimeVariants(strCurrYearID)
	Call TestResult (objResult, obLanguage("Calendar","kErrGetInfoForSTVariants"))

	Set objAllVariants = objResult.Data
	nAllVariantsCount = objAllVariants.Count

	If nAllVariantsCount = 0 Then
		strErrorMsg = obLanguage("Calendar","kEmptyLessonTimeVariants")
		bError = True
		Exit Sub
	End If

	Set objSchoolVariant = MakeArraySTVariantsLevels(objCMComponent)

	Select Case nUsageLevel
	Case kVarUsageLevel_School
		If Not readonly Then
			Set objResult = objCMComponent.CanChangeYearVariant(strCurrYearID)
		End If
	Case kVarUsageLevel_Grade
		Set objResult = objCMComponent.GetGradesForScheduleTimeVariants(strCurrYearID, readonly)
	Case kVarUsageLevel_Class
		If readonly Then
			Set objResult = objCMComponent.GetClassesForScheduleTimeVariantsRo(strCurrYearID)
		Else
			Set objResult = objCMComponent.GetClassesForScheduleTimeVariants(strCurrYearID)
		End If
	Case kVarUsageLevel_IupGrade
		Set objResult = objCMComponent.GetIupGradesForScheduleTimeVariants(strCurrYearID, readonly)
	Case Else
		GenerateError obLanguage("Common","kInvalidParameter")
	End Select

	If Not (nUsageLevel = kVarUsageLevel_School And Not readonly) Then ' т.е. выше вызывалась ф-ция из компоненты
		Call TestResult (objResult, obLanguage("Calendar","kErrGetInfoForSTVariants"))
	End If

	If nUsageLevel = kVarUsageLevel_School Then
		If objSchoolVariant is Nothing Then
			strSchoolVariantID = "0"
			strSchoolVariantName = ""
		Else
			strSchoolVariantID = CStr(objSchoolVariant.Id)
			strSchoolVariantName = objSchoolVariant.VariantName
		End If

		If Not readonly Then
			If objResult.Data = CanChangeStVariant_ReadOnly Then
				readonly = True
			End If
		End If

		Exit Sub
	End If

	Set objData = objResult.Data
	nDataCount = objData.Count

	If nDataCount = 0 Then
		strErrorMsg = obLanguage("Calendar", "kErrNoObjectsOfThisLevel")
		bError = True

		Exit Sub
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stSTVarsUsageLevel, nUsageLevel)
End Sub

Sub onHead()%>
	<SCRIPT><!--
		<%If Not readonly Then%>
			function doSave() {
				var saveForm = document.forms['UsageForm'];
				jsSaveForm(saveForm);
			}
		<%End If%>

		function Back(){
			if(isDBBusy()) return false;

			checkForChanges().then(function() {
				setDBBusy();
				ok('MainForm', 'STVariants.asp');
			});
		}
	//--></SCRIPT>
<%End Sub

Sub DrawFilters(strForm)
	Dim nLevel, i

	If bError Then Exit Sub
	
	OpenFormGroup obLanguage("Curriculum","kIupLevel")%>
		<select NAME="UsageLevel" onChange="OnChangeSelect('MainForm', '/asp/Calendar/STVariantsUsage.asp');" class="form-control"><%
			For i = 0 To UBound(arrSTVariantsLevels, 2)
				nLevel = GetSafeLng(arrSTVariantsLevels(0, i), kVarUsageLevel_Undef)
				If nLevel <> kVarUsageLevel_Undef Then%>
					<option value="<%=nLevel%>" <%If nUsageLevel = nLevel Then%>selected<%End If%>><%=arrSTVariantsLevels(1, i)%></option><%
				End If
			Next%>
		</select><%

	CloseFormGroup

	If nUsageLevel <> kVarUsageLevel_School Then
		Call DrawInfo(obLanguage("Calendar", "kAssignmentSTVariantInfo", strFunctionalityType), True)
	End If
End Sub

Sub DrawButtons()
	ButtonSave "doSave();", obLanguage("Common","kSave")
	ButtonReset "resetScreen('UsageForm');", obLanguage("Common","kReset")
End Sub

Sub onDrawPage()%>
	<form name="MainForm" method="post" ACTION="STVariantsUsage.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%><%

		If bError Then
			Call DrawMessage(strErrorMsg, "warning", True)
		End If

		Call DrawButtonsFilters(Not readonly And Not bError, "MainForm")%>
	</form><%

	If bError Then Exit Sub%>

	<form name="UsageForm" method="post" ACTION="STVariantsUsageSave.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("UsageLevel", nUsageLevel))%>
		
		<div class="row">
			<div class="col-md-6"><%
				Select Case nUsageLevel
				Case kVarUsageLevel_School
					Call DrawTable_School()
				Case kVarUsageLevel_Grade
					Call DrawTable_Grade()
				Case kVarUsageLevel_Class
					Call DrawTable_Class()
				Case kVarUsageLevel_IupGrade
					Call DrawTable_Grade()
				End Select%>
			</div>
		</div>
	</form><%
End Sub

Sub DrawTable_School()
	Dim objVariant, bIsVariantUsed
	Dim strVariantUsage
	Dim objGrades, objClasses, objClass, objIupGrades
	Dim strICPPostfix, strTemp
	Dim hint, k%>

	<hr /><%

	If Not readonly Then
		OpenFormGroup obLanguage("Curriculum","kVariant")%>
			<select name="VariantID" OnChange="dataChanged();" class="form-control">
				<%If strSchoolVariantID = "0" Then%>
					<option value="0"></option>
				<%End If%>
				<%PopulateSelectNamedEntities objAllVariants, strSchoolVariantID%>
			</select><%
		CloseFormGroup
	Else
		Call DrawReadonlyRow(obLanguage("Curriculum","kVariant"), strSchoolVariantName)
	End If
End Sub

Sub DrawTable_Grade()
	Dim nGrade, objVariant, strVariantID, strVariantName
	Dim objVariantCanChange%>

	<table class="table table-bordered table-condensed">
		<tr>
			<th><%=obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType)%></th>
			<th><%=obLanguage("Curriculum","kVariant")%></th>
		</tr><%
		If readonly Then
			For Each nGrade in objData
				If IsEmpty(objData(nGrade)) Then
					strVariantName = ""
				Else
					Set objVariant = objData(nGrade)
					strVariantName = objVariant.VariantName
				End If%>

				<tr>
					<td><%=DB2HTML(GetGradeName(nGrade))%></td>
					<td><%=DB2HTML(strVariantName)%></td>
				</tr><%
			Next
		Else
			For Each nGrade in objData
				Set objVariantCanChange = objData(nGrade)%>
				<tr>
					<td>
						<%=DB2HTML(GetGradeName(nGrade))%>
						<%=WriteHiddenTags(Array("ObjID", nGrade) )%>
					</td><%
					Call DrawCanChangeVariant(objVariantCanChange)%>
				</tr><%
			Next
		End If%>
	</table><%
End Sub

Function GetGradeName(nGrade)
	nGrade = CLng(nGrade)

	If bPreSchool And nGrade >= 0 And nGrade <= 8 Then
		GetGradeName = arrPreSchoolGrades(nGrade)
	Else
		GetGradeName = CStr(nGrade)
	End If
End Function

Sub DrawCanChangeVariant(objVariantCanChange)
	Dim objVariant, strVariantID%>

	<td>
		<%If objVariantCanChange.CanChangeVariant = CanChangeStVariant_ReadOnly Then
			Set objVariant = objVariantCanChange.CurrentVariant%>
			<%=WriteHiddenTags( Array("VariantID", objVariant.Id) )%>
			<%=DB2HTML(objVariant.VariantName)%><%
		Else%>
			<select name="VariantID" OnChange="dataChanged();" class="form-control">
				<option value="0"></option><%

				Select Case objVariantCanChange.CanChangeVariant
				Case CanChangeStVariant_ResetVariant
					Set objVariant = objVariantCanChange.CurrentVariant%>
					<option value="<%=objVariant.Id%>" selected><%=DB2HTML(objVariant.VariantName)%></option><%
				Case CanChangeStVariant_ToOnlyOneVariant
					Set objVariant = objVariantCanChange.ChangeToVariant%>
					<option value="<%=objVariant.Id%>"><%=DB2HTML(objVariant.VariantName)%></option><%
				Case CanChangeStVariant_AnyVariant
					If IsEmpty(objVariantCanChange.CurrentVariant) Then
						strVariantID = "0"
					Else
						Set objVariant = objVariantCanChange.CurrentVariant
						strVariantID = CStr(objVariant.Id)
					End If
					PopulateSelectNamedEntities objAllVariants, strVariantID
				End Select%>
			</select><%
		End If%>
	</td><%
End Sub

Sub DrawTable_Class()
	Dim objClass, objClassVariants, objVariant, strVariantID, strVariantName
	Dim objVariantCanChange%>

	<table class="table table-bordered table-condensed">
		<tr>
			<th><%=obLanguage("MenuFolders","kFNClasses",strFunctionalityType)%></th>
			<th><%=obLanguage("Curriculum","kVariant")%></th>
		</tr><%
		If readonly Then
			For Each objClass in objData
				Set objVariant = objClass.GetScheduleTimeVariant()
				If objVariant Is Nothing Then
					strVariantID = "0"
					strVariantName = ""
				Else
					strVariantID = CStr(objVariant.Id)
					strVariantName = objVariant.VariantName
				End If%>
				<tr>
					<td><%=DB2HTML(objClass.Classname)%></td>
					<td><%=DB2HTML(strVariantName)%></td>
				</tr><%
			Next
		Else
			For Each objClass in objData
				Set objVariantCanChange = objData(objClass)%>
				<tr>
					<td><%=DB2HTML(objClass.Classname)%><%=WriteHiddenTags( Array("ObjID", objClass.Id) )%></td><%
					Call DrawCanChangeVariant(objVariantCanChange)%>
				</tr><%
			Next
		End If%>
	</table><%
End Sub%>