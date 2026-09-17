<% ' © 2007-2015 IRTech. All rights reserved.

Dim objEgeComponent
Dim arrEgeClasses, arrEgeSubjects, arrEgeResults
Dim nEgeClassId, nEgeSubjectId

Const nYearEgeChangeFormat = 14

Sub InitEgeComponent()
	Set objEgeComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGiaComponent")
	TestError obLanguage("ServAdmin", "kCantCreateObj")
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact form-inline"
End Function

Sub DrawEgeResultsTable(arrResultRows)
	Dim i, result

	If Ubound(arrResultRows) = -1 Then%>
		<div class="row">
			<div class="col-md-10 col-lg-8"><%
				Call DrawInfo(obLanguage("EGE","kNoEgeResultsByFilter"), False)%>
			</div>
		</div><%

		Exit Sub
	End If%>

	<div class="row">
		<div class="col-md-12">
			<table class="table table-bordered table-xs table-hover table-striped">
				<tr>
					<th>№</th>
					<th><%=obLanguage("EGE","kAuditory") %></th>
					<th><%=obLanguage("Common","kClass", strFunctionalityType) %></th>
					<th><%=obLanguage("Common","kSubject") %></th>
					<th><%=obLanguage("Reports","kFIOstud") %></th>
					<%If nGlobalYearID >= nYearEgeChangeFormat Then%>
					<th><%=obLanguage("EGE","kAssignmentsWithShortAnswer") %></th>
					<th><%=obLanguage("EGE","kAssignmentsWithDetailedAnswer") %></th>
					<%Else %>
					<th><%=obLanguage("EGE","kAssignmentsType") %> A</th>
					<th><%=obLanguage("EGE","kAssignmentsType") %> B</th>
					<th><%=obLanguage("EGE","kAssignmentsType") %> C</th>
					<th><%=obLanguage("EGE","kAssignmentsType") %> D</th>
					<%End If%>
					<th><%=obLanguage("EGE","kPrimaryScore") %></th>
					<th><%=obLanguage("EGE","kScore") %></th>
					<%If nGlobalYearID >= nYearEgeChangeFormat Then%>
					<th><%=obLanguage("Common","kMark") %></th>
					<%End If %>
				</tr><%
					For i = 0 To Ubound(arrResultRows)
						Set result = arrResultRows(i)%>
						<tr>
							<td><%=i+1%></td>
							<td><%=result.Auditory %></td>
							<td><%=result.ClassName %></td>
							<td><%=result.SubjectName %></td>
							<td><%=result.Fio %></td>
							<td class="monos"><%=result.MaskA %></td>
							<td class="monos"><%=result.MaskB %></td>
							<%If nGlobalYearID < nYearEgeChangeFormat Then%>
							<td><%=result.MaskC %></td>
							<td><%=result.MaskD %></td>
							<%End If%>
							<td><%=result.PrimaryScore %></td>
							<td><%=result.TotalScore %></td>
							<%If nGlobalYearID >= nYearEgeChangeFormat Then%>
							<td><%=DB2Html(result.TotalMarkStr)%></td>
							<%End If %>
						</tr><%
					Next%>
			</table>
		</div>
	</div><%
End Sub%>