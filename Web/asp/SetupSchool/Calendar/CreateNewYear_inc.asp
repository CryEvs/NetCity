<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/Year_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strYearName, nWeekEndSet
Dim tmp, arrItems, strOldYearName

Function CanBack()
	CanBack = False
End Function

Sub CalcYearInfo( )
	Dim rsYear, dtNow,nYear
	Dim i, objItems

	dtNow = NSDate()
	If Month( dtNow ) > 8 Then nYear = Year(dtNow) Else nYear = Year(dtNow) - 1
	strOldYearName = nYear &"/"&nYear+1
	If Month( dtNow ) > 4 Then nYear = Year(dtNow) Else nYear = Year(dtNow) - 1
	strYearName = nYear &"/"&nYear+1

	Set rsYear = objNSNET.GetYearInfo( strSchoolYearId)
	If Not rsYear.EOF Then
		If IsDull(strNext) Then
			' Эта переменная используется как некий флаг, логика не очень очевидная.
			' Здесь главное - если переменная уже имела значение, то менять его не надо, это важно для Мастера.
			strNext = "StaffW.asp"
		End If
		nWeekEndSet = CLng(rsYear("WEEKENDSET"))
		strSchoolYearName = CStr(rsYear("SCHOOLYEARNAME"))
	Else
		nWeekEndSet = 1
		tmp=null
		Set objItems = objNSNET.GetGlobalYears(0)
		If Not objItems.EOF Then
			tmp = ""
			arrItems = objItems.GetRows(,,Array("GLOBALYEARID", "SCHOOLYEARNAME"))
			For i = 0 To Ubound(arrItems,2)
				If arrItems(1,i)=strYearName Then strYearName=null : tmp=arrItems(0,i) :Exit For
			Next
		Else
			Redim arrItems(1,0)
			arrItems(1,0)=strYearName
			arrItems(0,0)=-1
			If strYearName<> strOldYearName And Month( dtNow ) < 6 Then
				Redim preserve arrItems(1,1)
				arrItems(1,1)=strOldYearName
				arrItems(0,1)=-2
			End If
			strYearName=null
		End If
	End If
	rsYear.Close
End Sub

Sub Main()
	Dim nYear, dtNow

	If Not HasUserRight(arCreateCloseEditYear) Then GenerateError obLanguage("Common","kErrPageAccess")
	If IsDull(strSchoolYearId) Then strSchoolYearId=0
	CalcYearInfo
	nFirstDOW = GetFirstDayOfWeek()
End Sub

Sub onSpecialHead()%>
	<script><!--
		function canSubmit() {
			var defArgs = new Array();
			var form=document.MainForm;
			var breturn=false;
			var el = form.elements.Year;
			if (el)
			{
				if( el.length )
				{
					if( el[el.selectedIndex].text !="<%=strOldYearName%>")
						defArgs.push($.show.getConfirmation(language.Generic.SetupSchoolCalendar.kNonStandartYear + "<%=" "&strOldYearName%>.\n<%=obLanguage("Common","kMsgAreYouSure")%>"));
				}
			}
			el = form.elements.WeekEndDays;
			var chkdCnt = 0;
			if (el) {
				if (el.length) {
					for (var i=0;i<el.length;i++)
						if (el[i].checked)
							chkdCnt++;
				}
				else
					alert(language.Generic.Common.kUnexpErr);
				if (!( (chkdCnt>0) && (chkdCnt<3) ))
					defArgs.push($.show.getConfirmation(language.Generic.SetupSchoolCalendar.kNonStandartHolidays + "\n" + language.Generic.Common.kContinue));
			}
			return extDeferred.when(defArgs);
		}
	//-->
	</script><%
End Sub

Function onUnload()
End Function

Sub DrawCreateYearForm()
	If GetSafeLng(strSchoolYearId, 0) = 0 Then
		OpenFormGroup obLanguage("Common","kSchoolYear")
			Call DrawSelectArr( arrItems, "Year", tmp, strYearName, "" )
		CloseFormGroup
	End If
	Call DrawCommonYearInfo()
End Sub

Sub OnDrawPage()%>
	<form name="MainForm" method="post" action="SaveNewYearW.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%><%
		
		DrawButtonPanel%>

		<div class="row">
			<div class="col-md-12"><%
				DrawCreateYearForm%>
			</div>
		</div>
	</form><%
End Sub%>