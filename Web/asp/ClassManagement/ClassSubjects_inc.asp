<% ' © 2007-2015 IRTech. All rights reserved.
Dim rsClassSubjects, bAll
Dim nTypeOfView
Dim arrGradingSystems
Dim bExistsIupGroups

Const clrSelected = "#FEE6C5"  

Const kViewType_ByClasses = 1
Const kViewType_ByTeachers = 0
Dim bNoSubjectGroups

Sub ReadState()
	If IsDull(Request("ViewType")) Then
		If Not IsDull(Request("PCLID_IUP")) Then
			nTypeOfView = kViewType_ByClasses
		Else
			nTypeOfView = GetSafeLng(obTokenMgr.GetData(strToken, "ViewType"), kViewType_ByClasses)
		End If
	Else
		nTypeOfView = GetSafeLng(Request("ViewType"), kViewType_ByClasses)
	End If

	If nTypeOfView <> kViewType_ByClasses And nTypeOfView <> kViewType_ByTeachers Then 
		nTypeOfView = kViewType_ByClasses
	End If

	If nTypeOfView = kViewType_ByClasses Then
		Call InitYearClasses_IUP_Ex(True)
		If bIsIupGrade Then	Call InitSubjectsForIupGrade( True, strIupGrade)
	End If

	specialReadState

	Redim arrGradingSystems(1,2)
	arrGradingSystems(0,0) = 0
	arrGradingSystems(0,1) = 1
	arrGradingSystems(0,2) = 2
	arrGradingSystems(1,0) = obLanguage("ClassManagement","kGradingSystem_Mark")
	arrGradingSystems(1,1) = obLanguage("ClassManagement","kGradingSystem_Pass")
	arrGradingSystems(1,2) = obLanguage("ClassManagement","kGradingSystem_NotRated")
End Sub

Sub Main
	If nTypeOfView = kViewType_ByClasses Then
		If bIsIupGrade Then
			Set rsClassSubjects = objNSNET.GetClassSubjectListWithTeacherListForClass( strClassID, strSubjectId, strIupGrade, strCurrYearID, -1)
		Else
			Set rsClassSubjects = objNSNET.GetClassSubjectListWithTeacherListForClass( strClassID, -1, -1, strCurrYearID, -1)
		End If
	Else
		Set rsClassSubjects = objNSNET.GetClassSubjectListForTeacher(strTeacherID, strCurrYearID)
	End If
	bNoSubjectGroups = rsClassSubjects.EOF
	bExistsIupGroups = rsClassSubjects.ExistsByField("IS_CSG","0")
	Call specialMain()
End Sub

Sub specialMain()
End Sub

Sub DrawTable()
	Dim oRS, sumHours, nSubjectGroupId
	Dim nSubjGroupRowSpan, nTermRowSpan
	Dim rsClasses, rsTeachers, rsTerms
	Dim dctTermsHours, dctTermsSgHours
	Dim bExistsStuds, strBgColor
	Dim bIsSGsWithoutStudents

	Dim nCurrGradingSystem, bDrawSelect
	
	Set dctTermsHours = CreateObject("NetCity.DictionaryStorage")
	Set dctTermsSgHours = CreateObject("NetCity.DictionaryStorage")
	%>

	<table class="table table-condensed table-middle-cells table-bright table-xs table-thin print-block">
		<tr>
			<th><%=obLanguage("Common","kName")%></th>
			<th><%=obLanguage("Common","kTeacher",strFunctionalityType)%></th>
			<%If nTypeOfView = kViewType_ByTeachers Then %>
			<th><%=filterClasses %></th>
			<%End If
			If bIsIupGrade Then
			%><th><%=obLanguage("ClassManagement","kLevelName") %></th><%
			End If%>
			<th class="hidden-xs hidden-sm"><%=obLanguage("ClassManagement","kHoursInWeek")%></th>
			<th><%=obLanguage("ClassManagement","kGradingSystem")%></th>
			<%If Not readonly Then Response.Write ShowDelCellHeader(1)%>
		</tr><%sumHours = 0
		Set rsClasses = rsClassSubjects("classes").Value
		bIsSGsWithoutStudents = False
		Set rsTerms = rsClasses("terms").Value
		If nTypeOfView = kViewType_ByClasses Then
			Set rsTeachers = rsClassSubjects("chapteachers").Value
		Else
			Set rsTeachers = rsTerms("hours").Value()("chapteachers").Value
		End If
		While Not rsClassSubjects.EOF
			nSubjectGroupId = rsClassSubjects("ID")
			nCurrGradingSystem = GetSafeLng(rsClassSubjects("GRADINGSYS"), kGradingSystem_Mark)
			bExistsStuds = (GetSafeLng(rsClassSubjects("EXISTSSTUDS"), 0) = 1)
			bIsSGsWithoutStudents = bIsSGsWithoutStudents Or Not bExistsStuds
			strBgColor = IIf(bExistsStuds, "", "style=""background-color: " & clrSelected & """")
			nSubjGroupRowSpan = rsClasses.RecordCount%>
			<tr <%=strBgColor%>>
				<td rowspan="<%=nSubjGroupRowSpan%>"><%
				If readonly Then
					rw DB2HTML(rsClassSubjects("NAME"))
				Else
					rw ShowAnchor("editClass('" & nSubjectGroupId & "')", obLanguage("ClassManagement","kEditClassSubject"), DB2HTML(rsClassSubjects("NAME")), "")
				End If%></td><%

				If readonly Then 
					%><td class="text-left" rowspan="<%=nSubjGroupRowSpan%>"><%=DB2HTML(rsClassSubjects("NICKNAME"))%></td><%
				Else
					%><td class="text-right" rowspan="<%=nSubjGroupRowSpan%>">
						<div class="col">
							<%
								If nTypeOfView = kViewType_ByTeachers Then
									rw DB2HTML(rsClassSubjects("NICKNAME"))
								Else
									DrawSelectRs rsTeachers, "TEACHERID", "TEACHERID", "NICKNAME", rsClassSubjects("TEACHERID"), Null, ""
								End If
							%>
						</div>
					</td><%
				End If

				If nTypeOfView = kViewType_ByTeachers Then 
					%><td class="text-center" ><%
						rw ShowAnchor("editClassSubjects('" & rsClasses("CLASSID") & "')", obLanguage("Common","kSubjects"), DB2HTML(rsClasses("CLASSNAME")), "")
					%></td><%
				End If
				If bIsIupGrade Then
					%><td width="1px" rowspan="<%=nSubjGroupRowSpan%>"><%=DB2HTML(rsClassSubjects("LEVELNAME"))%></td><%
				End If

				Call DrawTerms(rsTerms, dctTermsHours, dctTermsSgHours, strBgColor)

				bDrawSelect = False
				If Not readonly And nTypeOfView = kViewType_ByClasses Then
					If GetSafeLng(rsClassSubjects("EXISTSTOTALMARKS"), 1) = 0 Then
						bDrawSelect = True
					End If
				End If

				If bDrawSelect Then%>
					<td class="text-center" rowspan="<%=nSubjGroupRowSpan%>">
						<input type="hidden" name="GredingSys" value="<%=nSubjectGroupId%>"><%
						Call DrawSelectArr(arrGradingSystems, "GredingSys_" & nSubjectGroupId, nCurrGradingSystem, null, null)%>
					</td><%
				Else
					%><td class="text-left" rowspan="<%=nSubjGroupRowSpan%>"><%=GetGradingSystemName(nCurrGradingSystem)%>
					<%If Not readonly Then%><input TYPE="hidden" NAME="GredingSys_<%=nSubjectGroupId%>" VALUE="<%=nCurrGradingSystem%>"><%End If%>
					</td><%
				End If
				If Not readonly Then%>
				<td class="text-center" rowspan="<%=nSubjGroupRowSpan%>">
					<input type="hidden" name="id" value="<%=nSubjectGroupId%>"><%
					If objNSNET.CanClassSubjectGroupBeDeleted(nSubjectGroupId) Then
						%><input type="checkbox" name="delClass" value="<%=nSubjectGroupId%>"><%
					Else 
						rw obLanguage("Common","kEmploy")
					End If%>
				</td><%
				End If
				
				rsClasses.MoveNext
				If Not rsClasses.EOF Then
					While Not rsClasses.EOF
						%></tr>
						<tr <%=strBgColor%>>
							<td class="text-center">
								<%=ShowAnchor("editClassSubjects('" & rsClasses("CLASSID") & "')", obLanguage("Common","kSubjects"), DB2HTML(rsClasses("CLASSNAME")), "")%>
							</td><%
						Call DrawTerms(rsTerms, dctTermsHours, dctTermsSgHours, strBgColor)
						rsClasses.MoveNext
					Wend
				End If
				%>
			</tr><%
			rsClassSubjects.MoveNext
		Wend
	%></table><%

	Call DrawTotalTermsHours(dctTermsHours)

	If bIsSGsWithoutStudents Then
		Call DrawLegend()
	End If
		
	If Not readonly Then
		If HasUserRight(arClassMgmEditSubjects) And (strFunctionalityType = kFuncType_Common Or strFunctionalityType = kFuncType_Profession) And HasUserRole(rlAdmin) Then Call DrawMergeClassSubjects()
	End If
End Sub

Sub DrawTotalTermsHours(ByRef dctTermsHours)
	Dim strTermName
	%><div class="smalltext print-block"><%
	For Each strTermName in dctTermsHours
		%><p><%=DB2Html(strTermName & ". " & obLanguage("ClassManagement","kSumm"))%> <span class="badge"><%=dctTermsHours(strTermName)%></span> <%=obLanguage("ClassManagement","kHours")%> </p><%
	Next
	%></div><%
End Sub

Sub DrawLegend()
%><div class="legend print-block">
	<div>
		<p><span class="legend-label" style="background-color: <%=clrSelected%>"></span><span class="legend-description"> — <%=obLanguage("ClassManagement","kNoStudentsInSubjectGroup",strFunctionalityType)%></span></p>
	</div>
</div><%
End Sub

Sub DrawTerms(rsTerms, ByRef dctTermsHours, ByRef dctTermsSgHours, strBgColor)
	If Not rsTerms.EOF Then%>
		<td class="hidden-xs hidden-sm text-center">
			<ul class="list-unstyled"><%
				While Not rsTerms.EOF
					Call DrawTermHours(rsTerms, dctTermsHours, dctTermsSgHours)
					rsTerms.MoveNext
				Wend
				%>
			</ul>
		</td><%
	Else%>
		<td class="hidden-xs hidden-sm text-center"><%=obLanguage("Common","kNo")%></td><%
	End If
End Sub

Sub DrawTermHours(rsTerms, ByRef dctTermsHours, ByRef dctTermsSgHours)
	Dim hours, strTermName
	Dim strTermNameSgID, sgMaxHours, strSgID

	strTermName = rsTerms("TERMNAME")
	hours = CDbl(rsTerms("SUMHOURS"))
	strSgID = rsTerms("ID")
	strTermNameSgID = strTermName & strSgID

	If dctTermsHours.Exists(strTermName) Then
		If dctTermsSgHours.Exists(strTermNameSgID) Then
			sgMaxHours = dctTermsSgHours(strTermNameSgID)
			If hours > sgMaxHours Then
				dctTermsHours(strTermName) = dctTermsHours(strTermName) - sgMaxHours + hours
				dctTermsSgHours(strTermNameSgID) = hours
			End If
		Else
			Call dctTermsSgHours.Add(strTermNameSgID, hours)
			dctTermsHours(strTermName) = dctTermsHours(strTermName) + hours
		End If
	Else
		Call dctTermsHours.Add(strTermName, hours)
		Call dctTermsSgHours.Add(strTermNameSgID, hours)
	End If
	%>
	<li>
		<%=strTermName %>
		<span class="badge"><%=hours%></span>
	</li><%
End Sub

Sub DrawMergeClassSubjects()%>
	<script id="NameForMergedSubjectGroup" type="text/html">
		<form class="form-horizontal">
			<%Call DrawInputRow (obLanguage("ClassManagement", "kNewNameSG"), "", "NameSG", "text", 40, 20, "")%>
		</form>
	</script><%
End Sub

Function GetGradingSystemName(nGradingSystem)
	Select Case nGradingSystem
	Case kGradingSystem_Mark
		GetGradingSystemName = obLanguage("ClassManagement","kGradingSystem_Mark")
	Case kGradingSystem_Pass
		GetGradingSystemName = obLanguage("ClassManagement","kGradingSystem_Pass")
	Case kGradingSystem_NotRated
		GetGradingSystemName = obLanguage("ClassManagement","kGradingSystem_NotRated")
	Case Else
		GenerateError obLanguage("Common","kInvalidParameter")
	End Select
End Function
%>
