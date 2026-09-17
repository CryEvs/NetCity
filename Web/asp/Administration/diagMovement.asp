<!-- #INCLUDE FILE=sa_inc.asp -->
<% ' © 2007-2012 IRTech. All rights reserved.
Dim title, objGlobalYears, strGlobalYearID, objMovePeriods, dr
Dim viewType, enrollType

Function GetPageTitle()
	title = obLanguage("MenuFolders","kMovement")
	GetPageTitle = title & " <i>" & NETSCHOOL_PRODUCT_NAME & "</i><br><br>"
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Diagnos
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Diagnos
 End Function

Sub Main()
	SetScriptTimeOut 900
	Set objGlobalYears = objNSNET.GetGlobalYears(0)
	Dim movementComponent
	Set movementComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IMovementComponent")
	TestError obLanguage("Common","kUnexpErr")

	strGlobalYearID = GetSafeGlobalYearID()
	viewType =  GetSafeID(Request("ViewType"), "1")
	'Set objMovePeriods = objNSNET.GetMovePeriodsInfo(strGlobalYearID)
	If viewType = "1" Then
		Set dr = movementComponent.GetNegativeRanges(strGlobalYearID)
	ElseIf viewType = "2" Then
		Set dr = movementComponent.GetIntersectRanges(strGlobalYearID)
	Else
		enrollType = GetSafeLng(Request("EnrollType"),0)
		Set dr = movementComponent.GetDifferenceRanges(strGlobalYearID, enrollType)
	End If
	' student = parent
	' select u.NICKNAME, u.BIRTHDATE, u1.NICKNAME, u1.BIRTHDATE, ur.* from STUDENTS s
' join USERS u on u.USERID=s.STUDENTID
' join STUDENTSPARENTS sp on sp.STUDENTID=s.STUDENTID
' join PARENTS p on sp.PARENTID=p.PARENTID
' join USERSROLES ur on ur.USERID=p.PARENTID
' join students s1 on s1.STUDENTID=p.PARENTID
' join USERS u1 on u1.USERID=s1.STUDENTID
End Sub


Sub OnHead()%>
<script>

function editUser( uId, schId, obj )
{
	var form = GetForm('MainForm', obj);
	form.UID.value = uId;
	$(form).append("<input name='SCH', value='"+schId+"' type='hidden'>");
	
	ShowInDialog( form, '/asp/SetupSchool/Movement/StudentMovementInfo.asp',
		function()
		{
			jsSubmit({
				action: "/asp/scripts/ajaxmethods.asp",
				data: {method: "UpdatePoolStudentsLine", UID: uId},
				showProcessing: true,
				onSuccess: function(response){
					if (response.data.archReason == 0)
					{
						if (response.data.school == "")
						{
							response.data.school = "&nbsp";
						}
						$(".uid"+uId).parent().siblings()
							.eq(3).html(returnTableCell(response.data.reason)).end()
							.eq(4).html(returnTableCell(response.data.school)).end();
					}
					else
					{
						if ($("*[name=ViewType]").val() != -1)
						{
							$(".uid"+uId).parent().parent().addClass('deleted');
						}
						else
						{
							$(".uid"+uId).parent().siblings()
								.eq(3).html(returnTableCell(response.data.reason)).end()
								.eq(4).html(returnTableCell(response.data.school)).end()
								.eq(5).html(returnTableCell(response.data.archReason)).end();
						}
					}
				}
			});
		}
	);
	
}

function Back() {
		goBack( document.MenuForm, '/angular/admin/support/');
}

</script>
<%
End Sub

Function GetSafeGlobalYearID()
	Dim strID
	strID = GetSafeID(Request("CMNYEAR"), "0")
	If strID = "0" Then
		GetSafeGlobalYearID = GetSafeID(objGlobalYears("GLOBALYEARID"), Null)
		Exit Function
	End If

	While Not objGlobalYears.EOF
		If strID = GetSafeID(objGlobalYears("GLOBALYEARID"), Null) Then
			GetSafeGlobalYearID = strID
			objGlobalYears.MoveFirst
			Exit Function
		End If
		objGlobalYears.MoveNext
	WEnd
	objGlobalYears.MoveFirst
	GetSafeGlobalYearID = GetSafeID(objGlobalYears("GLOBALYEARID"), Null)
End Function

Sub onDrawPage()
	%>
	<form name="MainForm" class="form-horizontal" action="<%=strScriptName%>" method="post">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("UID",-1))%>
	<div style="margin-top:5px;">
		<select name="ViewType" OnChange="OnChangeSelect('MainForm', '<%=strScriptName%>');">
			<option value="1"<%If viewType = "1" Then rw "selected"%>><%=obLanguage("Movement","negative")%></option>
			<option value="2"<%If viewType = "2" Then rw "selected"%>><%=obLanguage("Movement","intersect")%></option>
			<option value="3"<%If viewType = "3" Then rw "selected"%>><%=obLanguage("Movement","difference")%></option>
		</select>
		<%If viewType = "3" Then%>
			<select name="EnrollType" OnChange="OnChangeSelect('MainForm', '<%=strScriptName%>');">
				<option value="1"<%If enrollType = "1" Then rw "selected"%>><%=obLanguage("Movement","kmdstTitleAllGradesEnroll")%></option>
				<option value="0"<%If enrollType = "0" Then rw "selected"%>><%=obLanguage("Movement","kmdstTitleNoClassEnroll")%></option>
			</select>
		<%End If%>
		<select name="CMNYEAR" OnChange="OnChangeSelect('MainForm', '<%=strScriptName%>');"><%
			PopulateSelect objGlobalYears, "GLOBALYEARID", "SCHOOLYEARNAME", strGlobalYearID %>
		</select>
	</div>
	</form>
<%
	' <select name="PERIOD" OnChange="OnChangeSelect('MainForm', '<-%=strScriptName%->');"><-%
		' PopulateSelect objMainForm, "PERIODID", "STARTDATE", Null %->
	' </select>
	DrawTable dr
	'	If viewType <> "3" Then Call DrawTable1(dr) Else  DrawTable1 dr', "rangesRel"
End Sub

Sub DrawTable(dr)
	If dr Is Nothing Then Exit Sub
	If  dr.EOF Then Exit Sub
	Dim i, n,fieldName, id, idName', arr, row
	'arr = dr.GetRows()
		rw "<br />"
	rw "<table class=""table table-bordered table-condensed""><tr>"
	n = dr.Fields.Count-1'Ubound(arr,1)'
	id=-1
	For i=0 To n
		rw "<th>"
		fieldName = dr.Fields()(i).Name
		if  fieldName = "STUDENTID" Then id=i
		rw  fieldName&" "
		rw "&nbsp;" &" "
		rw "</th>"
	Next
	rw "</tr>"
	'dr.MoveFirst
	While Not dr.EOF
	'For each row in arr
		rw "<tr>"
		For i=0 To n
			rw "<td>"
			If i=id Then
				rw ShowAnchor( "editUser('"&dr(i)&"',null,this);", obLanguage("PoolStudents","kEditStudent",strFunctionalityType), dr(i), "class=""uid"&(dr(i))&"""" )
			Else
				rw dr(i) &" "
			End If
			'rw row()(i)' &" "
			'rw row
			rw "</td>"
		Next
		rw "</tr>" & vbcrlf
		dr.MoveNext
		Response.Flush
	WEnd
	'Next
	rw "</table>"
End Sub
Sub DrawTable2(dr, relation)
	If dr Is Nothing Then Exit Sub
	If  dr.EOF Then Exit Sub
	Dim i, n', arr, row
	'arr = dr.GetRows()
		rw "<br />"
	rw "<table class=""table table-bordered table-condensed""><tr>"
	n = dr.Fields.Count-1'Ubound(arr,1)'
	For i=0 To n
		rw "<th>"
		rw dr.Fields()(i).Name &" "
		rw "&nbsp;" &" "
		rw "</th>"
	Next
		rw "<th>"
		rw relation &" "
		rw "&nbsp;" &" "
		rw "</th>"
	rw "</tr>"
	'dr.MoveFirst
	While Not dr.EOF
	'For each row in arr
		rw "<tr>"
		For i=0 To n
			rw "<td>"
			rw dr(i) &" "
			'rw row()(i)' &" "
			'rw row
			rw "</td>"
		Next
			rw "<td>"
			DrawTable2(dr(relation))
			'rw row()(i)' &" "
			'rw row
			rw "</td>"
		rw "</tr>"
		dr.MoveNext
	WEnd
	'Next
	rw "</table>"
End Sub
%>
