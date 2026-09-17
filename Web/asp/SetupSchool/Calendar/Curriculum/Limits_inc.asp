<!-- #INCLUDE VIRTUAL="/asp/scripts/assignment.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim objComponentList, objCuriculumLimits, objIUPComponentList
Dim i, nGrades
Dim strCompID, strOldCompID, strGradeID, strValue, strComponentName
Dim nSchoolMaxGrade
Dim bPreSchool, arrPreSchoolGrades
Dim objAttendRs

Sub ReadState()
End Sub

Sub Main
	nSchoolMaxGrade = Application("LASTGRADE")(strFunctionalityType)

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	If bPreSchool Then
		arrPreSchoolGrades = Array(CStr(obLanguage("Common","kGr0")), CStr(obLanguage("Common","kGr1")), CStr(obLanguage("Common","kGr2")), CStr(obLanguage("Common","kGr3")), CStr(obLanguage("Common","kGr4")), CStr(obLanguage("Common","kGr5")), CStr(obLanguage("Common","kGr6")), CStr(obLanguage("Common","kGr7")), CStr(obLanguage("Common","kGr8")))
	End If

	Set objComponentList = objNSNET.GetUnusedComponentList(strSchoolID, strCurrYearID)
	Set objIUPComponentList = objNSNET.GetUnusedIUPComponentList(strCurrYearID)
	Set objCuriculumLimits = objNSNET.GetLimitList(strCurrYearID)
	nGrades = nSchoolMaxGrade-kMinGrade+1
	Call obTokenMgr.SetData(strToken, stBackPage, strScriptName)
	SpecialMain
End Sub

Sub onHeadOverrideWizard()
End Sub

Sub onSpecialHead()%>
	<script src="<%=GetVersionedResLink("/vendor/pages/js/limits.js")%>" type="text/javascript"></script>
	<script  type="text/javascript" src="<%=GetVersionedJsLink("tableExt.js")%>"></script>
	<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Calendar/Curriculum/Float_js_inc.asp" -->
	<script><!--
		$(document).ready(function() {
			$('table').inputRules('inputNum');
			$('form[name="MainForm"] table').calcTotalTable();
		});

		var settings = {
			noLimits: <%=Bool2Js(objCuriculumLimits.EOF)%>,
			componentList: <%=objComponentList.ToJSON(Array("id", "name"), Array("COMPONENTID","COMPONENTNAME")) %>,
			iupComponentList: <%=objIUPComponentList.ToJSON(Array("id", "name"), Array("COMPONENTID","COMPONENTNAME")) %>,
			grades: <%=nGrades %>,
			gradeLabels: <%=comHelper.JsonHelper.SerializeObject(arrPreSchoolGrades)%>,
			minGrade:  <%=kMinGrade %>,
			maxGrade: <%=nSchoolMaxGrade %>
		};

		var controller = new limitsController(settings);
		

	//--></script><%
	
	Call onHeadOverrideWizard()
End Sub

Sub DrawSpecialButtons()
	ButtonSave "controller.doSave('MainForm', false);", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MainForm');", obLanguage("Common","kReset")
	ButtonAdd "controller.addLimits('MainForm', false);", obLanguage("Common","kAdd")
End Sub

Sub onDrawPage()%>
	<form name="MainForm" method="post" action="/asp/SetupSchool/Calendar/Curriculum/CuriculumLimitsSave.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("MAX_GRADE", nSchoolMaxGrade))%><%
		DrawButtonPanel
		Call DrawTable(True)%>
	</form><%
End Sub

Sub DrawTable(bShowTotals)%>
	<div class="row">
		<div class="col-md-12"><%
			If objCuriculumLimits.EOF Then
				Call DrawInfo(obLanguage("SetupSchoolCalendar","kNoLimits"), False)
			Else%>
				<table class="table table-bordered table-sm table-condensed">
					<tr>
						<th rowspan="2"><%=obLanguage("SetupSchoolCalendar","kComponent")%></th>
						<th colspan="<%=nGrades%>"><%=obLanguage("SetupSchoolCalendar","kGradesHours",strFunctionalityType)%></th>
					</tr>
					<tr><%
					For i = kMinGrade To nSchoolMaxGrade
						rw "<th>"
						If bPreSchool And i >= 0 And i <= 8 Then
							rw DB2HTML(arrPreSchoolGrades(i))
						Else
							rw CStr(i)
						End If
						rw "</th>"
					Next
					strOldCompID = -1
					i=nSchoolMaxGrade+1
					While Not objCuriculumLimits.EOF
						strCompID = CLng(objCuriculumLimits("COMPONENTID"))
						strGradeID = CLng(objCuriculumLimits("GRADEID"))
						strValue = CDbl(objCuriculumLimits("HOURS"))
						strComponentName = DB2HTML(objCuriculumLimits("COMPONENTNAME"))
						If strCompID <> strOldCompID Then
							If readonly Then Call fillEnd_NBSP Else Call fillEndInputs
							strOldCompID = strCompID
							%><tr <%=IIF(strComponentName = obLanguage("SetupSchoolCalendar","kLimit"), "class=""not-sum""", "") %>><td><input type=hidden name="COMPID" value="<%=strCompID%>" class="ton-sum"><%=strComponentName%></td><%
							i = kMinGrade
						End If
						For i = i To strGradeID-1 : Call PrintHours("") : Next
						Call PrintHours(strValue)
						i=i+1
						objCuriculumLimits.MoveNext
					Wend
					If readonly Then Call fillEnd_NBSP Else Call fillEndInputs
					If bShowTotals Then Call Total()
					objCuriculumLimits.MoveFirst%>
				</table><%
			End If%>
		</div>
	</div><%
End Sub

Sub fillEndInputs
	If i<=nSchoolMaxGrade Then
		For i = i To nSchoolMaxGrade : Call PrintHours("") : Next
	End If
	rw "</tr>"
End Sub

Sub fillEnd_NBSP
	If i<=nSchoolMaxGrade Then
		For i = i To nSchoolMaxGrade : Response.Write "<td>&nbsp;</td>" : Next
	End If
	rw "</tr>"
End Sub

Sub Total( )
	Dim objRs
	%><tr class="text-center warning"><td><%=obLanguage("SetupSchoolCalendar","kTotalHours")%>:</td><%
	i = kMinGrade
	Set objRs = objNSNET.GetGradeLimitList(strCurrYearID)
	While Not objRs.EOF
		For i = i To CLng(objRs("GRADEID"))-1 : Response.Write "<td class=""sum-col text-data"">&nbsp;</td>" : Next
		rw "<td class=""sum-col text-data"">"& objRs("HOURS") &"</td>"
		i=i+1
		objRs.MoveNext
	Wend
	objRs.Close
	If i<=nSchoolMaxGrade Then
		For i = i To nSchoolMaxGrade : Response.Write "<td class=""sum-col text-data"">&nbsp;</td>" : Next
	End If
	rw "</tr>"
End sub


Sub PrintHours( strVal )
	If strVal = "0" Then strVal = ""
	If readonly Then rw "<td>" & IIF(strVal="","&nbsp;",strVal) & "</td>" : Exit Sub
	%><td class="input-cell"><input name="Hours" type=text value="<%=strVal%>" maxlength="5" size="<%=TextInputSize(2)%>" OnChange="dataChanged()"></td><%
End Sub
%>
