<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterYears.asp" -->
<!-- #INCLUDE FILE="SchoolEGE_inc.asp" -->
<% ' © 2007-2012 IRTech. All rights reserved.

' Возможность экспорта перс.данных в ОЭД должна работать только для школ г. Москвы.
' Если школа из г. Москвы имеет некорректно заполненные адр.справочники, то константу bForceMskExport нужно установить True
Const UPPER_MSK_CITYNAME = "МОСКВА"
Const bForceMskExport = False

Dim objStateList, objSchoolInfo, objCity
Dim strSchoolDist
Dim bShowEGE, bShowMskExport, strMskWarning
Dim bYearClosed

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arProfileEditSchoolInfo) or HasUserRight(arProfileViewSchoolInfo)
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SchoolInfo","kTitleSchoolInfoCard")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = miSetupSchoolProfile
End Function
Function GetPageTabItem()
	GetPageTabItem = tbSchoolInfo
End Function

Function AdditionArchCondition()
	AdditionArchCondition = True
End Function

Function ConnectionSwitchIsNeeded( bIsYearArchived )
	If CLng(strFunctionalityType) = kFuncType_PreSchool Then
		IsForm85KClosed( strCurrYearID )
	Else
		IsOSHClosed( strCurrYearID )
	End If

	ConnectionSwitchIsNeeded = bIsYearArchived And _
		( blnIsOSHArchived Or blnIsOSH5Archived Or blnIsOSH9Archived )
End Function

Sub ReadState()
	Dim bIsOSH_N_Closed

	Call InitYears()

	If CLng(strFunctionalityType) = kFuncType_PreSchool Then
		bIsOSH_N_Closed = blnIsForm85KClosed
	Else
		bIsOSH_N_Closed = blnIsOSH5Closed Or blnIsOSH9Closed
	End If
	
	bYearClosed = CBool( objNSNET.IsYearClosed(strCurrYearId ) = -1 )
	readonly = bYearClosed Or bIsOSH_N_Closed Or bIsEMForSchool or (HasUserRight(arProfileViewSchoolInfo) And Not HasUserRight(arProfileEditSchoolInfo))
	bShowEGE = False  ' формат экспорта данных ЕГЭ устарел
	bShowMskExport = Not bYearClosed And Not bIsEMForSchool And (CLng(strFunctionalityType)=kFuncType_Common)
	strMskWarning = ""
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,stCurrYear, strCurrYearID)
End Sub

Sub Main()
	Dim objMskSchoolID
	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	Set objCity = objNSNET.GetCityInfo(objSchoolInfo("CITYID") )
	If bShowMskExport Then
		bShowMskExport = (UCase(CStr(objCity("NAME")))=UPPER_MSK_CITYNAME) Or bForceMskExport
		If bShowMskExport Then
			Set objMskSchoolID = objNSNET.GetMskSchoolID(strSchoolID)
			If (GetSafeStr(objMskSchoolID("MSK_SCHOOLID"), 50, "") = "") Then strMskWarning = "В базе данных не задан идентификатор школы для проекта ОЭД.\<br\>Обратитесь к координатору проекта ОЭД в вашем округе"
		End If
	End If
End Sub

Function onLoad()
	Dim blnWasSaved
	blnWasSaved = GetSafeStr( Request("SV"), 1, "N" ) = "Y"
	If blnWasSaved OR Not IsEmpty(Request("Save")) Then onLoad = "JavaScript:WasSaved('" & obLanguage("Common","kSchoolInfoWasSaved",strFunctionalityType) & "');"
End Function

Function onUnLoad()
	onUnload = "closePrintVersion()"
End Function

Sub onHead()
%>

<script><!--
function PrintAttestat( grade )
{
	if (dataWereChanged)
		if (!confirm('<%=obLanguage("Common","kConfirmNoSave2")%>'))
			return;
	postTo('IVAttestat.asp', {gradeType : grade});
}
function openPrintVersion()
{
	closePrintVersion();
	wndPrintVersion=window.open('osh/SchoolInfo_print.asp?AT=<%=strToken%>&Ver=<%=GetVer()%>&WT=1', '_schoolinfo', 'status=no,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=500');
	center(wndPrintVersion, 750,400);
	wndPrintVersion.focus();
}
function gotoLicences()
{
	if (dataWereChanged)
		if (!confirm('<%=obLanguage("Common","kConfirmNoSave2")%>'))
			return;
	ok('SchoolEdit', '/asp/SetupSchool/Licences/SchoolInfo1_Licences.asp');
}
<%If bShowEGE Then%>
function gotoEGE()
{
	if (dataWereChanged && !confirm(kDataWereChanged) )
		return;
	ok_check_db( 'SchoolEdit', 'SchoolEGE.asp' );
}
<%End If
If bShowMskExport Then%>
function gotoMskExport()
{
	if (dataWereChanged && !confirm(kDataWereChanged) )
		return;
<%If strMskWarning="" Then%>
	if (confirm("Будет сформирован файл в формате Microsoft Excel с информацией о классах, сотрудниках школы, учащихся и родителях. \n\nПродолжить?"))
	if (confirm("Образовательное учреждение НЕСЁТ ОТВЕТСТВЕННОСТЬ за передачу ПД в другие организации и обязано известить об этом субъектов ПД.\n\nТакже при передаче ПД третьим лицам НЕОБХОДИМО ПОЛУЧИТЬ СОГЛАСИЯ субъектов ПД.\n\nПродолжить?"))
		ok( 'SchoolEdit', 'ExportMskDnevnik.asp' );
<%Else%>
	alert("<%=strMskWarning%>");
<%End If%>
}
<%End If%>
//--></script>

<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolInfo_js_inc.asp -->
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/Osh/SchoolInfo_js_inc.asp -->
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/Osh5/SchoolInfo_js_inc.asp -->
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/Osh9/SchoolInfo_js_inc.asp -->
<%
If CLng(strFunctionalityType) = kFuncType_PreSchool Then%>

<script> <!--

	function gotoForm85KPage( nPageNo )
	{
		if (dataWereChanged)
			if (!confirm('<%=obLanguage("Common","kConfirmNoSave2")%>')){
				return;}

		ok('SchoolEdit', '/asp/SetupSchool/Form85-K/Form85K_'+nPageNo+'.asp');
	}

	//--> </script>

<%
End If

End Sub

Sub DrawFilters( strForm )
	Call DrawYears( strForm )
End Sub

Sub DrawButtons()
	If Not readonly Then
		ButtonSave "ok_check_db('SchoolEdit','/asp/SetupSchool/SchoolInfoSave.asp?PAGE=0&BACK=SchoolInfo.asp')", obLanguage("Common","kSave")
		ButtonReset "resetScreen('SchoolEdit')", obLanguage("Common","kCancel")
	End If
	Response.Write ShowButton("curmap2l", "curmap2l", "JavaScript:openPrintVersion()", obLanguage("Common","kBtnViewPrintable"), obLanguage("Buttons","kBtnPrint")) & "<br><br>"
	Select Case CLng(strFunctionalityType)
		Case kFuncType_PreSchool
			If blnIsForm85KAvailable Then 
				Response.Write "<br>" & ShowButton("form85K", "form85K", "javascript: gotoForm85KPage(1)", obLanguage("SchoolInfo","kForm85K"), obLanguage("SchoolInfo","kForm85K") )	
			Else
				Response.Write obLanguage("SchoolInfo","kstrForm85KUnavailable")
			End IF
		Case kFuncType_Common
			If blnIsOSHAvailable Then
				Response.Write ShowButton("form", "form", "javascript: gotoPage(1)", obLanguage("SchoolInfo","kFormOSH1"), obLanguage("SchoolInfo","kFormOSH1") )
			Else
				Response.Write obLanguage("SchoolInfo","kstrOSHUnavailable")
			End If
			If blnIsOSH5Available Then
				Response.Write "<br>" & ShowButton("form5", "form5", "javascript: gotoOSH5Page(1)", obLanguage("SchoolInfo","kFormOSH5"), obLanguage("SchoolInfo","kFormOSH5") )
			Else
				Response.Write "<br>" & obLanguage("SchoolInfo","kstrOSH5Unavailable")
			End If
			If blnIsOSH9Available Then
				Response.Write "<br>" & ShowButton("form9", "form9", "javascript: gotoOSH9Page(1)", obLanguage("SchoolInfo","kFormOSH9"), obLanguage("SchoolInfo","kFormOSH9") )
			Else
				Response.Write "<br>" & obLanguage("SchoolInfo","kstrOSH9Unavailable")
			End If
			Response.Write "<br>" & ShowButton("Licence", "Licence", "javascript: gotoLicences()", obLanguage("SchoolInfo","kLicences"), obLanguage("SchoolInfo","kLicences") )
			If (Not bIsEMForSchool) And (Not bYearClosed) Then
				Dim button11, Hint11, nSchoolMaxGrade
				Const button9 = "Печать аттестатов\n(9-е классы)"
				Const Hint9 = "Экспорт в программу печати аттестатов «ИвАттестат» (9-е классы)"
				button11 = "Печать аттестатов\n(12-е классы)"
				Hint11 = "Экспорт в программу печати аттестатов «ИвАттестат» (12-е классы)"
				nSchoolMaxGrade = objNSNET.GetMaxCuriculumGrade(strCurrYearID)
				If nSchoolMaxGrade <> 12 Then
					button11 = Replace(button11, "12", nSchoolMaxGrade)
					Hint11 = Replace(Hint11, "12", nSchoolMaxGrade)
				End If
				'rw ShowButton("morf", "morf1", "JavaScript:openExcel('morf')", button1, button1)
				rw ShowButton("pa9", "pa9", "JavaScript:PrintAttestat(9)", Hint9, Db2HTML_BR(button9))
				If nSchoolMaxGrade > 9 Then
					rw ShowButton("pa11", "pa11", "JavaScript:PrintAttestat("&nSchoolMaxGrade&")", Hint11, Db2HTML_BR(button11))
				End If
			End If
	End Select
End Sub
%>
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/SchoolInfo_inc.asp -->
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/Osh/SchoolInfo_inc.asp -->
<%
Sub onDrawPage()%>
<table cellpadding="3">
	<tr><td>
	<form name="SchoolEdit" method="POST" action="SchoolInfoSave.asp?PAGE=0&GROUP=0" onsubmit="return canSubmit();">
				<%=WriteObligatoryTags()%>
				<%Call DrawButtonsFilters( True, "SchoolEdit" )%>
				<table class="ThickTable" align="center" border="1" cellspacing="0" cellpadding="5">
					<!-- #INCLUDE VIRTUAL=/asp/Setupschool/Osh/SchoolInfo0t_inc.asp -->
					<% LoadShoolInfo( 0 )  %>
					<!-- #INCLUDE VIRTUAL=/asp/Setupschool/Osh/SchoolInfo0b_inc.asp -->
				</table></form></td></tr>
	<%If bShowEGE Then%>
	<tr><td><hr><%If Not readonly Then	
					if strFunctionalityType<>kFuncType_PreSchool  Then
						Response.Write ShowButton("ege", "ege", "javascript: gotoEGE()", obLanguage("Buttons","kEGEData"), obLanguage("Buttons","kEGEData"))
					Else%>
						<a href="javascript:gotoEGE()"><%=kCodeOUshort%></a>
					<%End if
				End if%><br><br></td></tr>
	<%End If
	If bShowMskExport Then%>
	<tr><td><hr><%If (Not bIsEMForSchool) And (Not bYearClosed) Then	
					Response.Write ShowButton("mskexport", "mskexport", "javascript: gotoMskExport()", "Выгрузить персональные данные в Общегородской электронный дневник", "Выгрузить ПД в ОЭД")
				End if%><br><br></td></tr>
	<%End If%>
</table>
<%
End Sub
%>
