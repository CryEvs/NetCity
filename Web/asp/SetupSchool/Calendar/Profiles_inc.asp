
<% ' © 2007-2011 IRTech. All rights reserved.
Dim arrProfileGrade, i
Dim arrGrades
Dim nSchoolMaxGrade
Dim bPreSchool, arrPreSchoolGrades

Sub ReadState()
	Call obTokenMgr.SetData(strToken, stBackPage, strScriptName)
End Sub

Sub Main
	Dim nAppLastGrade

	nSchoolMaxGrade = objNSNET.GetMaxCuriculumGrade(strCurrYearID)
	nAppLastGrade = Application("LASTGRADE")(strFunctionalityType)' - 1
	nSchoolMaxGrade = IIf(nAppLastGrade >= nSchoolMaxGrade, nAppLastGrade, nSchoolMaxGrade)

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	If bPreSchool Then
		arrPreSchoolGrades = Array(obLanguage("Common","kGr0"), obLanguage("Common","kGr1"), obLanguage("Common","kGr2"), obLanguage("Common","kGr3"), obLanguage("Common","kGr4"), obLanguage("Common","kGr5"), obLanguage("Common","kGr6"), obLanguage("Common","kGr7"), obLanguage("Common","kGr8"))
	End If

	arrProfileGrade = objNSNET.GetGradeProfileList(-1, strSchoolID)
	If Not IsArray(arrProfileGrade) Then GenerateError obLanguage("SetupSchoolCalendar","kErrEmptyProfileList")
	specialMain
End Sub

Sub onSpecialHead()%>
<!-- #INCLUDE VIRTUAL="/asp/scripts/firstLetter.asp" -->
<SCRIPT><!--
function doSave(){
	if( isDBBusy() ) return false;
	var form = document.MainForm;
	var chkdCnt = 0;
	var el = form.PRID, elProfName = form.PROFILENAME, errMsg='';
	if (el)
	{
		if (el.length)
		{
			for (var i=0;i<el.length;i++) {
				if ((form.DEL[i].type != 'hidden') && form.DEL[i].checked)
					chkdCnt++;
				else
				{
					if( badFirstLetter( elProfName[i] ), false ) return false;
					if( trimStr( elProfName[i].value )=='' )
						errMsg = '<%=obLanguage("SetupSchoolCalendar","kAlertCreateName")%>';
					else
					{
						var el2 = form.elements['GRADE'+el[i].value];
						if ( (form.elements['GRADESET'][i].value = getGradeSet(el2) )== 0 )
							errMsg = '<%=obLanguage("SetupSchoolCalendar","kAlertGradeset",strFunctionalityType)%>'+ elProfName[i].value;
					}
					if( errMsg )
					{
						alert(errMsg);
						elProfName[i].focus();
						return false;
					}
				}
			}
			if (chkdCnt==el.length)
			{
				alert(language.Generic.SetupSchoolCalendar.kAlertDeleteAll);
				return false;
			}
		}
		else
		{
			if ((form.DEL.type != 'hidden') && form.DEL.checked)
			{
				alert(language.Generic.SetupSchoolCalendar.kAlertDeleteAll);
				return false;
			}
			if( badFirstLetter( elProfName ), false ) return false;
			if( trimStr( elProfName.value ) =='' )
				errMsg = '<%=obLanguage("SetupSchoolCalendar","kAlertCreateName")%>';
			else
			{
				var el2 = form.elements['GRADE'+el.value];
				if ( (form.elements['GRADESET'].value = getGradeSet(el2) )== 0 )
					errMsg = '<%=obLanguage("SetupSchoolCalendar","kAlertGradeset",strFunctionalityType)%>'+ elProfName.value;
			}
			if( errMsg )
			{
				alert(errMsg);
				elProfName.focus();
				return false;
	}	}	}

	el = form.GRNEW;
	elProfName = form.PRNEW;

	if( badFirstLetter( elProfName ), false ) return false;
	if( (elProfName.value = trimStr(elProfName.value)) =='' )
	{
		if( (form.NEWGRADESET.value = getGradeSet(el))>0 )
			errMsg = '<%=obLanguage("SetupSchoolCalendar","kAlertCreateName")%>';
	}
	else
	{
		if( ( form.NEWGRADESET.value =getGradeSet(el) )==0 )
			errMsg = '<%=obLanguage("SetupSchoolCalendar","kAlertGradeset",strFunctionalityType)%>' + elProfName.value;
	}
	if( errMsg )
	{
		alert(errMsg);
		elProfName.focus();
		return false;
	}
	setDBBusy();
	DoSubmit(form, '');
}

function getGradeSet( chBoxArray )
{
	var chkdCnt = 0;
	if (chBoxArray)
		for (var i=0;i<chBoxArray.length;i++)
			if (chBoxArray[i].type == 'hidden')
				chkdCnt += parseInt(chBoxArray[i].value);
			else
				if (chBoxArray[i].checked )
					chkdCnt += parseInt(chBoxArray[i].value);
	return chkdCnt;
}
//--></SCRIPT>
<%
End Sub

Sub DrawSpecialButtons()
	ButtonSave "doSave();", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MainForm');", obLanguage("Common","kReset")
End Sub

Sub onDrawPage()%>
<FORM NAME="MainForm" METHOD="post" ACTION="../Calendar/CuriculumProfilesSave.asp">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags( Array("BackPage", strScriptName) ) %>
	<%Call DrawButtonsFilters( True, "MainForm" )%>
</FORM><%
End Sub

Sub DrawTable()
	Dim nGradeSet, nFactor, nProfileID, k
	Dim objCmdCheckClass, bGradeInUse, bClassExists, bProfileInUse

' ЗАМЕЧАНИЕ!!!
' Вроде если kMinGrade <> 0, то весь этот алгоритм со степенью 2 - не работает.
	ReDim arrGrades(nSchoolMaxGrade)
	nFactor = 1
	For i = kMinGrade To nSchoolMaxGrade
		arrGrades(i) = nFactor
		nFactor = nFactor*2
	Next
	%>
	<table border=0 cellspacing=0 cellpadding=3><tr><td valign="top" width="20%"></td></tr>
		<tr><td>
			<table class="ThinTable" border="1" cellspacing="0"><tr><th rowspan=2 width=180><%=obLanguage("Common","kProfile", strFunctionalityType)%></th><th colspan=<%=(nSchoolMaxGrade - kMinGrade + 1)%>><%=obLanguage("SetupSchoolCalendar","kGradeset",strFunctionalityType)%></th><%If Not readonly Then%><TD rowspan=2><%=obLanguage("Common","kDeletingMark")%></TD><%End If%></tr>
				<tr><%
				For i = kMinGrade To nSchoolMaxGrade%><TH><%
					If bPreSchool And i >= 0 And i <= 8 Then
						Response.Write DB2HTML(arrPreSchoolGrades(i))
					Else
						Response.Write CStr(i)
					End If%></TH><%
				Next%></tr><%
					If readonly Then
						For k = 0 To Ubound(arrProfileGrade, 2)
							nProfileID =arrProfileGrade(0,k)
							nGradeSet = GetSafeLng( arrProfileGrade(2,k), 0 )%>
				<tr><td><%=DB2HTML(arrProfileGrade(1,k))%></td><%
							For Each nFactor In arrGrades%><td align="center"><%If nGradeSet Mod 2 <>0 Then%><b>X</b><%Else%>&nbsp;<%End If%></td><%
								nGradeSet = nGradeSet \ 2
							Next%></tr><%
						Next
					Else
						Set objCmdCheckClass = objNSNET.IsClassOfProfileGradeExists_Prepare()
						For k = 0 To Ubound(arrProfileGrade, 2)
							nProfileID =arrProfileGrade(0,k)
							nGradeSet = GetSafeLng( arrProfileGrade(2,k), 0 )%>
				<tr><%WriteHiddenTags( Array("PRID", nProfileID, "GRADESET", nGradeSet) )%>
						<td><input type="text" name="PROFILENAME" value="<%=DB2Value(arrProfileGrade(1,k))%>" size="<%=TextInputSize(35)%>" maxlength="50"></td><%
							bProfileInUse = False
							i = kMinGrade ' i - curr grade here
							For Each nFactor In arrGrades%>
						<td align="center"><%
								bGradeInUse = (nGradeSet Mod 2 <> 0)
								bClassExists = False
								If bGradeInUse Then
									bClassExists = objNSNET.IsClassOfProfileGradeExists_Execute(objCmdCheckClass, nProfileID, i)
									If bClassExists Then bProfileInUse = True
								End If
								If bClassExists Then%><b>X</b><input type="hidden" name="GRADE<%=nProfileID%>" value="<%=nFactor%>"><%
								Else%>
									<input type="checkbox" name="GRADE<%=nProfileID%>" value="<%=nFactor%>"<%
									If bGradeInUse Then Response.Write " checked"%> OnChange="dataChanged()"><%
								End If
								nGradeSet = nGradeSet \ 2
								i = i + 1%>
						</td><%
							Next%>
						<td align="center"><%
							If bProfileInUse Then%><%=obLanguage("SetupSchoolCalendar","kProfileUse")%><input type="hidden" name="DEL" value="0"><%
							Else%><input type="checkbox" name="DEL" value="<%=nProfileID%>" OnChange="dataChanged()"><%
							End If%>
						</td>
				</tr><%
						Next
						Call objNSNET.DisposeCommand(objCmdCheckClass)
					End If%>
			</table>
	</td></tr></table><%
	If Not readonly Then%><br>
		<h3><%=obLanguage("Common","kAdd")& " "&LCase(obLanguage("Common","kProfile", strFunctionalityType))%>:</h3>
		<table class="ThinTable" border="1" cellspacing="0">
			<tr><th rowspan=2 width=180><%=obLanguage("Common","kProfile", strFunctionalityType)%></th><th colspan=13><%=obLanguage("SetupSchoolCalendar","kGradeset",strFunctionalityType)%></th></tr>
			<tr><%
			For i = kMinGrade To nSchoolMaxGrade%><th><%
				If bPreSchool And i >= 0 And i <= 8 Then
					Response.Write DB2HTML(arrPreSchoolGrades(i))
				Else
					Response.Write CStr(i)
				End If%></th><%
			Next%>
			</tr>
			<tr><td><input type="text" name="PRNEW" value="" size="<%=TextInputSize(35)%>" maxlength="50"><input type="hidden" name="NEWGRADESET" value="0"></td><%
			For Each nFactor In arrGrades%>
				<td align="center"><input type="checkbox" name="GRNEW" value="<%=nFactor%>" OnChange="dataChanged()"></td><%
			Next%></tr>
		</table><%
	End If
End Sub
%>
