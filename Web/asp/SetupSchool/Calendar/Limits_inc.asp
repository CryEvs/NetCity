
<% ' © 2007-2011 IRTech. All rights reserved.

Dim objComponentList, objCuriculumLimits
Dim i, nGrades
Dim strCompID, strOldCompID, strGradeID, strValue
Dim nSchoolMaxGrade
Dim bPreSchool, arrPreSchoolGrades

Sub ReadState()
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

	Set objComponentList = objNSNET.GetUnusedComponentList(strSchoolID, strCurrYearID)
	Set objCuriculumLimits = objNSNET.GetLimitList(strCurrYearID)
	nGrades = nSchoolMaxGrade-kMinGrade+1
	Call obTokenMgr.SetData(strToken, stBackPage, strScriptName)
	SpecialMain
End Sub

Sub onSpecialHead()%>
<!-- #INCLUDE FILE=Float_js_inc.asp -->
<SCRIPT><!--
var valEps = 0.000001;
	function doSave()
	{
		if( isDBBusy() ) return false;
		var form = document.forms["MainForm"];
		var list = form.elements['COMPID'];
<%If objCuriculumLimits.EOF Then%>
		if( list.options[list.selectedIndex].value != 0 )
		{
			alert(language.Generic.SetupSchoolCalendar.kEnterLimitFirst ); list.focus(); return false;
		}
<%End If%>

		var el = form.elements['Hours'];
		var errCnt = -1;
		for( var i=0; i < el.length; i++ )
		{
			var valParse = str2floatEx(el[i]);
			if( valParse != '' ){
				if( isNaN(valParse) || (valParse < valEps) ) { errCnt=i; break; }
			}
		}
		if( errCnt != -1 )
		{
			alert(language.Generic.SetupSchoolCurPlan.kEnterNumberGreater_0); el[errCnt].focus(); return false;
		}
		var lim = new Array(<%=nGrades%>);
		var n0, n1, n0summ
		n0summ = 0;
		for( i=0; i < <%=nGrades%>; i++ )
		{
			lim[i] = 0;
			for( var k=1; k*<%=nGrades%> < el.length; k++ )
			{
				n0 = str2floatEx(el[i]);
				n0summ = n0summ + n0;
				n1 = str2floatEx(el[i+k*<%=nGrades%>]);
				if( !isNaN(n1) && (n1 != '') )
				{
					if( isNaN(n0) || (n0 == '') )
					{
						alert(language.Generic.SetupSchoolCalendar.kUndefinedLimit + " "+i%<%=nGrades%>+" <%=obLanguage("SetupSchoolCalendar","kForLimit",strFunctionalityType)%>");
						el[i].focus();
						return false;
		} } } }
		if (n0summ == 0){
			alert(language.Generic.SetupSchoolCalendar.kLimitMustBe);
			return false;
		}
		
		for( i=<%=nGrades%>; i < el.length; i++ )
		{
			n0 = str2floatEx(el[i%<%=nGrades%>]);
			n1 = str2floatEx(el[i]);
			if( !isNaN(n1) && (n1 != '') )
			{
				if( n1 > (n0 + valEps) )
				{
					alert(language.Generic.SetupSchoolCalendar.kOverflowLimit);
					el[i].focus();
					return false;
				}
				lim[i%<%=nGrades%>] = lim[i%<%=nGrades%>] + n1;
		} }
		for( i=0; i < <%=nGrades%>; i++ )
		{
			if( (lim[i] > valEps) && (lim[i] > (str2floatEx(el[i]) + valEps)) )
			{
				alert(language.Generic.SetupSchoolCalendar.kSumLimit1 + " "+i+" <%=obLanguage("SetupSchoolCalendar","kSumLimit2",strFunctionalityType)%>");
				el[i].focus(); return false;
			}
		}
		setDBBusy();
		DoSubmit(form, '');
	}
//--></SCRIPT>
<%
End Sub

Sub DrawFilters( strForm )%>
	<tr><td colspan="2"><%Call DrawTable%></td></tr><%
End Sub
Sub DrawSpecialButtons()
	ButtonSave "doSave();", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MainForm');", obLanguage("Common","kReset")
End Sub

Sub onDrawPage()%>
	<FORM NAME="MainForm" METHOD="post" ACTION="/asp/SetupSchool/Calendar/CuriculumLimitsSave.asp">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("MAX_GRADE", nSchoolMaxGrade))%>
	<%Call DrawButtonsFilters( True, "MainForm" )%>
	</FORM>
<%End Sub

Sub DrawTable()
	If objCuriculumLimits.EOF Then%><h3 align="center"><%=obLanguage("SetupSchoolCalendar","kNoLimits")%>.</h3><%
	Else%>
	<table class="ThinTable" border="1" cellspacing="0">
		<tr><th rowspan=2><%=obLanguage("SetupSchoolCalendar","kComponent")%></th><th colspan=<%=nGrades%>><%=obLanguage("SetupSchoolCalendar","kGradesHours",strFunctionalityType)%></th></tr>
		<tr><%
		For i = kMinGrade To nSchoolMaxGrade
			Response.Write "<th>"
			If bPreSchool And i >= 0 And i <= 8 Then
				Response.Write DB2HTML(arrPreSchoolGrades(i))
			Else
				Response.Write CStr(i)
			End If
			Response.Write "</th>"
		Next
		strOldCompID = -1
		i=nSchoolMaxGrade+1
		While Not objCuriculumLimits.EOF
			strCompID = CLng(objCuriculumLimits("COMPONENTID"))
			strGradeID = CLng(objCuriculumLimits("GRADEID"))
			strValue = CDbl(objCuriculumLimits("HOURS") )
			If strCompID <> strOldCompID Then
				If readonly Then Call fillEnd_NBSP Else Call fillEndInputs
				strOldCompID = strCompID
				%><TR><TD><input type=hidden name="COMPID" value="<%=strCompID%>"><%=DB2HTML(objCuriculumLimits("COMPONENTNAME"))%></TD><%
				i = kMinGrade
			End If
			For i = i To strGradeID-1 : Call PrintHours("") : Next
			Call PrintHours(strValue)
			i=i+1
			objCuriculumLimits.MoveNext
		Wend
		If readonly Then Call fillEnd_NBSP Else Call fillEndInputs
		Call Total()
		objCuriculumLimits.MoveFirst%>
	</table><%
	End If%><br><%
	If (Not readonly) And (Not objComponentList.EOF) Then%>
	<h3><%=obLanguage("SetupSchoolCalendar","kAddComponentLimit")%>:</h3>
	<table class="ThinTable" border="1" cellspacing="0">
		<tr><th rowspan=2><%=obLanguage("SetupSchoolCalendar","kComponent")%></th><th colspan=<%=nGrades%>><%=obLanguage("SetupSchoolCalendar","kGradesHours",strFunctionalityType)%></th></tr>
		<tr><%
		For i = kMinGrade To nSchoolMaxGrade
			Response.Write "<th>"
			If bPreSchool And i >= 0 And i <= 8 Then
				Response.Write DB2HTML(arrPreSchoolGrades(i))
			Else
				Response.Write CStr(i)
			End If
			Response.Write "</th>"
		Next%>
		</tr>
		<tr><td class="select">
			<select name="COMPID"><%PopulateSelect objComponentList, "COMPONENTID", "COMPONENTNAME", NULL%></select>
		</td><%For i = kMinGrade To nSchoolMaxGrade : Call PrintHours("") : Next %>
		</tr>
	</table><br><%
	End If
End Sub

Sub fillEndInputs
	If i<=nSchoolMaxGrade Then
		For i = i To nSchoolMaxGrade : Call PrintHours("") : Next
	End If
	Response.Write "</tr>"
End Sub
Sub fillEnd_NBSP
	If i<=nSchoolMaxGrade Then
		For i = i To nSchoolMaxGrade : Response.Write "<td>&nbsp;</td>" : Next
	End If
	Response.Write "</tr>"
End Sub

Sub Total( )
	Dim objRs
	%><tr bgcolor=#EEEEEE align="center" class="body"><td><%=obLanguage("SetupSchoolCalendar","kTotalHours")%>:</td>
	<%i = kMinGrade
	Set objRs = objNSNET.GetGradeLimitList(strCurrYearID)
	While Not objRs.EOF
		For i = i To CLng(objRs("GRADEID"))-1 : Response.Write "<td>&nbsp;</td>" : Next
		Response.Write "<td>"& objRs("HOURS") &"</td>"
		i=i+1
		objRs.MoveNext
	Wend
	objRs.Close
	Call fillEnd_NBSP
End sub

Sub PrintHours( strVal )
	If readonly Then Response.Write "<td>"&IIF(strVal="","&nbsp;",strVal)&"</td>" : Exit Sub%>
	<td align="center"><input name="Hours" type=text value="<%=strVal%>" maxlength="4" size="<%=TextInputSize(3)%>" OnChange="dataChanged()"></td><%
End Sub
%>
