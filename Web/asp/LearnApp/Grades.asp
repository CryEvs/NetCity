<!-- #INCLUDE FILE="../header1.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const NameLen = 50

Dim strGSID, strGSName, arrScales

Function GetPageTitle()
	If Request("ACT") = "create" Then
		GetPageTitle = obLanguage("LearnApp","kTitleCreateGradingScale")
	Else
		If Not ReadOnly Then
			GetPageTitle = obLanguage("LearnApp","kTitleEditGradingScale")
		Else
			GetPageTitle = obLanguage("LearnApp","kTitleViewGradingScale")
		End If
        GetPageTitle = GetPageTitle &" "& GreenText( DB2HTML(strGSName) )
	End If
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningApplications
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbGrScales
 End Function

Sub DrawGradingStyles( arrGrading )
	Dim bDrawLines
	Dim i
	Dim nLevelIndex
%><style type="text/css">
  #root {position: relative; width:120; height: 100; left: 0; top: 0; visibility: visible; z-index: 0;}
<%
	nLevelIndex = Ubound( arrGrading, 2 ) + 1
	bDrawLines = CBool ( nLevelIndex <= 20 )
	For i = 0 To nLevelIndex
%>  #mark<%=i%>  {position: absolute; left: 0; top: 0; visibility: visible; z-index: <%
	If i < nLevelIndex Then
		Response.Write arrGrading( 1, i )
	Else
		Response.Write "0"
	End If
%>; background-color: rgb(<%
	If i = nLevelIndex Then
		Response.Write "255"
	Else
		If arrGrading( 1, i ) >= 50 Then
			Response.Write Round( 255 - 255 * ( arrGrading( 1, i ) - 50 ) / 50 )
		Else
			Response.Write "255"
		End If
	End If
%>,<%
	If i = nLevelIndex Then
		Response.Write "0"
	Else
		If arrGrading( 1, i ) < 50 Then
			Response.Write Round( 255 - 255 * ( 50 - arrGrading( 1, i ) ) / 50 )
		Else
			Response.Write "255"
		End If
	End If
%>,0); height:<%
	If i < nLevelIndex Then
		Response.Write 100 - arrGrading( 1, i )
	Else
		Response.Write "100"
	End If
%>px; width:100px;}
<%
	If bDrawLines Then
%>  #line<%=i%>  {position: absolute; left: 0; top: <%
	If i < nLevelIndex Then
		Response.Write 100 - arrGrading( 1, i )
	Else
		Response.Write "99"
	End If
%>; visibility: visible; z-index: 1000; background-color: olive; height:1px; width:100px;}
<%
	End If
  Next
%>
  #grd  {position: absolute; left: 0; top: 0; visibility: visible; z-index: 1000; width:120px;}
</style><%
End Sub

Sub DrawGradingScales( nMaxIndex )
	Dim bDrawLines
	Dim i
	bDrawLines = CBool ( nMaxIndex <= 20 )
%>	<div id="root" style="width: 120px;">
		<div id="grd"><img src="<%=strCommonImgFolder%>/ns_grade.gif" width="120" height="100"></div><%
		For i = 0 To nMaxIndex
	%>	<div id="mark<%=i%>"><img src="<%=strCommonImgFolder%>/transp.gif"></div><%
		If bDrawLines Then
	%>	<div id="line<%=i%>"><img src="<%=strCommonImgFolder%>/transp.gif"></div><%
			End If
		Next
	%></div><%
End Sub

Sub onHead()
%><script><!--
function Back() {
	goBack(document.Grades,'GradeScales.asp');
}
<% If Not ReadOnly Then %>
function saveGrade() {
	if( isDBBusy() ) return false;
	var form = document.Grades;

	if(trimStr(form.GSName.value) == '') {
		alert(language.Generic.LearnApp.kEnterGradingScaleName);
		form.GSName.focus(); return;
	}
	var berr = false, i = 0, elems = form.elements, val, prev=0;
	while ( !berr ) {
		var elem = elems['mark'+i];
		if(!elem)
			break;
		val = parseInt( elem.value);
		if ( val == NaN || val < 0 || val > 100 ) {
			elem.focus();
			alert(language.Generic.LearnApp.kEnterNumber0_100);
			berr = true;
		}
		else {
			if ( prev > 0 && val > prev ) {
				elem.focus();
				alert(language.Generic.LearnApp.kEnterNumberLessThan + ' ' + prev );
				berr = true;
			}
			i++;
			prev = val;
		}
	}
	if (!berr) {
		setDBBusy();
		ok('Grades', 'GradeSave.asp');
	}
}
<% End If %>
//--></script>
<%	Call DrawGradingStyles( arrScales )
End Sub

Sub Main
	Dim i
	Dim nMaxMark, nMinMark, nDelta
	Dim objRs, strAct
	Dim gradeComponent
	Set gradeComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGradingComponent")

	If Not HasUserRight(arLACreateGradingScales) Then GenerateError obLanguage("Common","kErrPageAccess")
	strAct = GetSafeStr( Request("ACT"), 10, Null )
	If strAct="create" Then
		strGSID = gradeComponent.GenLinearScaleSystem(strCurrYearID)
		strAct="edit"
	ElseIf strAct="edit" Then
		strGSID = GetSafeID( Request("GSID"), Null )
	Else
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
	strGSName = gradeComponent.GetGradingSystemName(strGSID )
	Set objRs = gradeComponent.GetGradingScaleList(strGSID )
	arrScales = objRs.GetRows( ,,Array("NAME","THRESHOLD") )
	objRs.Close
	Set objRs = Nothing
End Sub

Sub DrawButtons()
	If Not ReadOnly Then
		ButtonSave "saveGrade()", obLanguage("Common","kSave")
	End If
End Sub

Sub onDrawPage()
	Dim i%>

	<form name="Grades" method="post" action="GradeSave.asp" class="form-horizontal from-edit">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("ACT", "save", "GSID", strGSID) )%>
		<%Call DrawButtonPanel%>
		
		<div class="row">
			<div class="col-md-0">
				<%'Call DrawGradingScales( Ubound( arrScales, 2 ) + 1 )%>
			</div>
			<div class="col-md-6 col-lg-4"><%
				If not readonly Then%>
					<input type="text" name="GSName" size="<%=TextInputSize(30)%>" maxlength="<%=NameLen%>" value="<%=DB_2_HTML( strGSName )%>" OnChange="dataChanged()" class="form-control"><%
				Else
					rw "<h4>" & DB_2_HTML( strGSName ) & "</h4>"
				End If%>
				<br><%
				Call DrawScalesTable%>
			</div>
		</div>
	</form><%
End Sub

Sub DrawScalesTable()
	Dim i%>

	<div class="row">
		<div class="col-md-4">
			<table class="table table-bordered"><%
				For i = 0 To Ubound( arrScales, 2 )%>
					<tr>
						<td><%
							If Not ReadOnly Then%>
								<input type="hidden" name="absmark<%=i%>" value="<%=arrScales(0,i)%>"><%=arrScales(0,i)%> - <%
							Else%>
								<%=arrScales(0,i)%> - <%
							End If%>
						</td>
						<td><%
							If Not ReadOnly Then%>
								<input type="text" name="mark<%=i%>" value="<%=arrScales(1,i)%>" size="<%=TextInputSize(3)%>" maxlength="3">%<%
							Else
								rw arrScales(1,i) & "%"
							End If%>
						</td>
					</tr><%
				Next%>
			</table>
		</div>
	</div><%
End Sub
%>
