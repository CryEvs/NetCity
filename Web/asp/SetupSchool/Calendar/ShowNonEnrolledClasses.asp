<!-- #INCLUDE FILE=../../header1.asp -->
<!-- #INCLUDE FILE=../../scripts/FiltersCommon.asp -->
<!-- #INCLUDE FILE=../../scripts/FilterClasses.asp -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/MoveDoc_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim objNonClassesStudents, bNonClassesStudentsExists
Dim bAddSchool, objNAList

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCurriculumPlan
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbYear
 End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Movement","OldYearStudentsList",strFunctionalityType)
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCreateCloseEditYear)
End Function

Sub Main()
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	bNonClassesStudentsExists = False
	If Not bAddSchool Then
		bNonClassesStudentsExists = IsExistsNotEnrolledNotYearMoved()
	End If

	' ВНИМАНИЕ!!!
	' В данном случае strSchoolYearID - это год, который закрывается, в который залогинились,
	' а strCurrYearID - это будущий год, котрый формируют
	Set objClassesRs = objNSNET.GetNotEnrolledClasses(strSchoolYearID, -1, -1, strFunctionalityType, strCurrYearID)

	If objClassesRs.EOF And Not bNonClassesStudentsExists Then
		strClassID = "0" ' Все переведены или выпущены
	Else
		strClassID = GetSafeID(Request("PCLID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrClass), "0"))
		If Not bNonClassesStudentsExists And (strClassID = "-1") Then strClassID = "0"
		If strClassID <> "-1" Then
			strClassID = GetSafeIDForRs(strClassID, objClassesRs, "CLASSID")
			strClassID = CStr(strClassID)
			If strClassID = "0" Then
				If bNonClassesStudentsExists Then
					strClassID = "-1"
				Else
					strClassID = GetSafeID(objClassesRs("CLASSID"), Null)
				End If
			End If
		End If
	End If

	If strClassID <> "0" Then
		If strClassID = "-1" Then
			Set objNAList = objNSNET.GetNonAdvancedNotEnrolledStudentList(strSchoolYearID)
		Else
			Set objNAList = objNSNET.GetNonAdvancedClassStudentList(strClassID, strSchoolYearID)
		End If
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stCurrClass, strClassID)
End Sub

Sub onSpecialHead()%>
	<script>
		function Back() {
			goBack(document.MainForm, 'Years.asp');
		}
	</script><%
End Sub

Function GetFIrstSelectOptionString(bAll)
	GetFIrstSelectOptionString = IIF(bAll, obLanguage("Filter","kNotEnrolled"), null)
End Function

Sub DrawFilters(strForm)
	If strClassID = "0" Then
		Call DrawInfo(obLanguage("Movement","AllStudentsTransferred",strFunctionalityType), False)
		Exit Sub
	End If

	If objClassesRs.EOF And bNonClassesStudentsExists Then
		Call DrawReadonlyRow(obLanguage("Common","kClass",strFunctionalityType), obLanguage("Filter","kNotEnrolled"))

		Exit Sub
	End If

	Call DrawFilterRow(strForm, obLanguage("Common","kClass",strFunctionalityType), "PCLID", objClassesRs, "CLASSID", "CLASSNAME", strClassID, bNonClassesStudentsExists)
End Sub

Sub onDrawPage()%>
	<FORM NAME="MainForm" ACTION="ShowNonEnrolledClasses.asp" METHOD="POST" class="form-horizontal">
		<%=WriteObligatoryTags()%><%

		If strClassID <> "0" Then%>
			<div class="row">
				<div class="col-md-7 col-lg-5"><%
					Call DrawMessage(obLanguage("Movement","kCantOpenFutureYear") & " " & obLanguage("Movement","OldYearStudentsExists",strFunctionalityType), "danger", False)%>
				</div>
			</div><%
		End If

		Call DrawButtonsFilters(False, "MainForm")
		Call DrawStudents()%>
	</FORM><%
End Sub

Sub DrawStudents()
	If objNAList.EOF Then Exit Sub%>

	<div class="row">
		<div class="col-md-7 col-lg-5">
			<table class="table table-bordered table-xs table-bright-striped table-bright-hover table-thin">
				<tr>
					<th><%=obLanguage("Common","kDisplayName")%></th>
				</tr><%
				While Not objNAList.EOF%>
					<tr>
						<td><%=DB2HTML(objNAList("NICKNAME"))%></td>
					</tr><%
					objNAList.MoveNext
				WEnd%>
			</table>
		</div>
	</div><%
End Sub%>