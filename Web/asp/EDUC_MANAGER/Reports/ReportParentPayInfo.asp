<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="../../scripts/FilterMonths.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim rsStudents ,strEMSchoolYearID
Dim ArrMonthByGYears,i,j

Sub specialRead()
	Dim tempGY,dtTempYearStart,dtTempYearEnd
	Dim objInfo
	shortReportName = "/asp/Reports/" & GetShortReportName() 'Поскольку файл лежит в другой директории то явно указываем путь
	bIsCheckDates = False
	'Для того чтобы отрисовывать УЧЕБНЫЕ ГОДА подотчетных УО из фильтров, если их нет берет самое вышестоящее
	Set objCommonYears = objNSNET.GetEMGlobalYearsForEOType(strFilterEMID, kFuncType_PreSchool)
	ReDim ArrMonthByGYears(objCommonYears.RecordCount-1,1)

	If Not objCommonYears.EOF Then
		nGlobalYearId = GetSafeGlobalYearID(objCommonYears)

		Call objNSNET.GetRangeOfDateForEM(strEMId, nGlobalYearId, dtYearStart, dtYearEnd)

		ArrMonthByGYears(0,0) = nGlobalYearID
		ArrMonthByGYears(0,1) = GetArrayMonths(dtYearStart,dtYearEnd)
		objCommonYears.MoveNext
		i=1
		While Not objCommonYears.EOF
			tempGY = objCommonYears("GLOBALYEARID")
			Set objInfo = objNSNET.GetGlobalYears(tempGY)
			If objInfo.EOF Then
				GenerateError obLanguage("Common","kInvalidParameter")
			End If
			dtTempYearStart = objInfo("STARTDATE")
			dtTempYearEnd = objInfo("ENDDATE")

			ArrMonthByGYears(i,0) = tempGY
			ArrMonthByGYears(i,1) = GetArrayMonths(dtTempYearStart,dtTempYearEnd)
			i= i + 1
			objCommonYears.MoveNext
		Wend
		objCommonYears.MoveFirst
	Else
		bExit = True
	End If
	Call InitEM_Year_PreSchoolYears(nGlobalYearID)
	Call InitMonths( dtYearStart, dtYearEnd )
End Sub

Sub InitEM_Year_PreSchoolYears(nGlobalYearID)
	strEMSchoolYearID = GetSafeID(Request("EMSCHOOLYEARID"), "0")
	'Подсовываем strFilterEMID из Report_inc.asp
	'Для того чтобы отрисовывать ТИПЫ ОО подотчетных УО из фильтров, если их нет берет самое вышестоящее
	Set objEMSchools = objNSNET.GetEMSchoolsForEOType(strFilterEMID, kWizardSteps, kFuncType_PreSchool, nGlobalYearID)
	If objEMSchools.EOF Then bExit = True: Exit Sub
	If strEMSchoolYearID <> "-1" Then
		strEMSchoolYearID = CStr(GetSafeIDForRs(strEMSchoolYearID, objEMSchools, "SCHOOLYEARID"))
		If strEMSchoolYearID = "0" Then
			If Not objEMSchools.EOF Then
				strEMSchoolYearID = GetSafeID(objEMSchools("SCHOOLYEARID"), Null)
			Else
				strEMSchoolYearID = "-1"
			End If
		End If
	End If
End Sub


Sub specialWrite()
	WriteMonth
End Sub

Sub Main()
End Sub

Sub specialHead()
%>
<script>
<!--
var nOldGYID;
$(document).ready(function(){
	report.setOptions({reportUrl: "<%=GetSchoolReportUrl()%>" });
});
$(document).ready(function(){
	nOldGYID =  $('select[name=CMNYEAR]').val();
	$('<img />').attr('id','SCLID_li').attr('src','<%=strCommonImgFolder%>/loadfilter.gif').css('display','none').insertAfter($('select[name=SCLID]'));
});

function gotoMonth() {
	var element = $("[name='MonthYear']")[0];
	var date = eval("Array(" + element[element.selectedIndex].value + ")" );
	$("[name='Month']").val(date[0]);
	$("[name='Year']").val(date[1]);
}

function changeSchools() {
	$('input[name=sSCHOOLNAME]').val($('select[name=EMSCHOOLYEARID] option:selected').text());
}

//**********************************

function setSelectOptions( selectElement, selectOptions ) {
	selectElement.options.length = 0;
	var curOption;
	curOption = new Option('Все','-1', false, true );  
	selectElement.options.add(curOption);
	for (var i=0; i<selectOptions[0].length; i++)
	{
		var bselected = false;
		curOption = new Option(selectOptions[1][i],selectOptions[0][i], false, bselected );
		selectElement.options.add(curOption);
	}
}

function hidebuttons() {
	$('a[href*=ViewReport]').hide();
	$('a[href*=openExcel]').hide();
}
function showbuttons() {
	$('a[href*=ViewReport]').show();
	$('a[href*=openExcel]').show();
}

function showwarning(text) {
	$('<tr id="err_message">').html('<td colspan="2"><h3>' + text + '</h3></td>').insertAfter($('.FilterRow:has(select[name=CMNYEAR])'));
}
function removewarning() {
	$('#err_message').remove();
}

//-->
</script><%
End Sub
	
Sub specialFilters( strForm )
	If Not bExit Then
		FilterGlobalYear
		DrawSelectInfoRow obLanguage("EMReports","kEMSchool"), -1, "EMSCHOOLYEARID", objEMSchools, "SCHOOLYEARID", "SCHOOLNAME", obLanguage("Common","kAll"), "changeSchools()"
		DrawMonths strForm
	Else
		DrawInfo obLanguage("Filter","kNoDOU"), False
		Exit Sub
	End if
End Sub

Sub WriteMoreHiddenTags()
	WriteHiddenTags Array("sSCHOOLNAME", "")
End Sub

Function GetArrayMonths(byval dtMinMonth,byval dtMaxMonth)
	Dim lngTmpYear, lngTmpMonth, str, Arr,i
	ReDim Arr(DateDiff( "m", dtMinMonth, dtMaxMonth, 0, 0 ),1)
	i=0
	Do
		lngTmpMonth = Month( dtMinMonth )
		lngTmpYear =  Year( dtMinMonth )
		dtMinMonth = DateSerial( lngTmpYear, lngTmpMonth, 1 )
		Arr(i,0)= lngTmpMonth & ","& lngTmpYear
		Arr(i,1)= obLanguage.GetMonthName( lngTmpMonth,FALSE  )&" "& lngTmpYear
		dtMinMonth = DateAdd("m", 1, dtMinMonth )
		i=i+1
	Loop While DateDiff( "m", dtMinMonth, dtMaxMonth, 0, 0 ) >=0
	GetArrayMonths = Arr
End Function
%>
