<!-- #INCLUDE FILE   ="sa_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kMovePeriods_Max = 4

Dim dtYearStart, dtYearEnd
Dim strSYName
Dim bGlobalYear
Dim objMovePeriods
Dim nBaseYear, nDeltaYears
Dim strGlobalYearID

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleEditMovePeriods")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Settings
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Settings
 End Function

Sub ReadState()
	strGlobalYearID = GetSafeID(Request("CMNYEAR"), Null)
End Sub

Sub Main()
	Dim objRs
	Set objRs = objNSNET.GetGlobalYears(strGlobalYearID)
	bGlobalYear = False
	strSYName = ""
	If Not objRs.EOF Then
		strSYName = objRs("SCHOOLYEARNAME")
		dtYearStart = objRs("STARTDATE")
		dtYearEnd = objRs("ENDDATE")
		nBaseYear = Year(dtYearStart)
		bGlobalYear = True
	End If

	Set objMovePeriods = objNSNET.GetMovePeriodsInfo(strGlobalYearID)
	If objMovePeriods.EOF Then
		GenerateError obLanguage("ServAdmin","kCantGetMovePeriodsInfo")
	End If
	If Not bGlobalYear Then
		nBaseYear = Year(objMovePeriods("STARTDATE"))
	End If
	nDeltaYears = nBaseYear - Year(objMovePeriods("STARTDATE"))

	dtMinDate = DateSerial(nBaseYear, 1, 1)
	dtMaxDate = DateSerial(nBaseYear + 1, 12, 31)
	
End Sub

Sub onHead
	bIsCheckDates = False
	Call scriptCalendar( "MovePeriods", dtMinDate, dtMaxDate)%>

	<script type="text/javascript">
		var nPeriodCount = <%=kMovePeriods_Max%>;

		var dtMaxMoveDate = <%=Date2Js(dtMaxDate)%>;
		var dtMinMoveDate = <%=Date2Js(dtMinDate)%>;

		var sMinMoveDate = '<%=Date2Str(dtMinDate)%>';
		var sMaxMoveDate = '<%=Date2Str(dtMaxDate)%>';

		function Back() {
			goBack(document.MovePeriods, 'options.asp');
		}

		function isPeriodDatesValid() {
			var form = document.forms["MovePeriods"];
			var lastEndDate = null;
			var dtTmp = null;

			for(var i = 1; i <= nPeriodCount; i++) {
				elStart  = form.elements['SDT_' + i];

				var startDate = str2date(elStart.value);
				if( startDate == null ) {
					focusAlert(elStart, language.Generic.Common.kErrInvalidStartDate );
					return false;
				}

				if(i == 1) {
					if( startDate < dtMinMoveDate  ){
						focusAlert(elStart, language.Generic.ServAdmin.kStartDateCanntBefore + sMinMoveDate );
						return false;
					}
				}
				else {
					if( startDate <= lastEndDate ) {
						focusAlert(elStart, language.Generic.ServAdmin.kErrorPeriodOverlapped );
						return false;
					}
				}

				if((startDate.getMonth() + 1) == 2 && startDate.getDate() == 29) {
					focusAlert(elStart, language.Generic.ServAdmin.kErrorDateCannt_29_2 );
					return false;
				}

				if(lastEndDate) {
					dtTmp = dateUtils.getUTCDate(lastEndDate.getFullYear(), lastEndDate.getMonth(), lastEndDate.getDate() + 1);

					if(dtTmp.getFullYear() != startDate.getFullYear() ||
						dtTmp.getMonth() != startDate.getMonth() ||
						dtTmp.getDate() != startDate.getDate()) {
							focusAlert(elStart, language.Generic.ServAdmin.kErrorPeriodContin);
							return false;
					}
				}

				elEnd  = form.elements['EDT_' + i];
				var endDate = str2date( elEnd.value );
				if( endDate == null ) {
					focusAlert(elEnd, language.Generic.Common.kErrInvalidEndDate );
					return false;
				}

				if( startDate > endDate ) {
					focusAlert(elEnd, language.Generic.Common.kMsgStartBeforeEnd );
					return false;
				}

				if(i == nPeriodCount) {
					if( endDate > dtMaxMoveDate ) {
						focusAlert(elEnd, language.Generic.ServAdmin.kEndDateCanntAfter + sMaxMoveDate );
						return false;
					}
				}

				if((endDate.getMonth() + 1) == 2 && endDate.getDate() == 29) {
					focusAlert(elEnd, language.Generic.ServAdmin.kErrorDateCannt_29_2 );
					return false;
				}

				lastEndDate = endDate;
			}

			return true;
		}

		function savePeriods() {
			if(isPeriodDatesValid()) {
				jsSaveForm(document.forms['MovePeriods']);
			}
		}
	</script><%
End Sub

Sub DrawButtons()
	ButtonSave "savePeriods();", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MovePeriods');", obLanguage("Common","kReset")
End Sub

Sub DrawFilters(strForm)
	If Not IsDull(strSYName) Then
		DrawReadonlyRow obLanguage("Common","kSchoolYear"), strSYName
	End If
End Sub

Sub onDrawPage()
	Dim nCurStatus
	Dim dtStart, dtEnd
	Dim nPeriodID, strPeriodName
	Dim strSelectedClass

	Call DrawButtonsFilters( True, "MovePeriods" )%>

	<form name="MovePeriods" method="post" class="form-horizontal" action="saveMovePeriods.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("CMNYEAR", strGlobalYearID) )%>
		<div class="row">
			<div class="col-md-6 col-lg-6"><%
				While Not objMovePeriods.EOF
					nPeriodID = GetSafeLng(objMovePeriods("PERIODID"), Null)
					nCurStatus = GetSafeLng(objMovePeriods("STATUS"), Null)
					dtStart = DateAdd("yyyy", nDeltaYears, objMovePeriods("STARTDATE"))
					dtEnd = DateAdd("yyyy", nDeltaYears, objMovePeriods("ENDDATE"))
					strSelectedClass = IIf(nCurStatus = 1, "class=""relay2""", "")

					strPeriodName = CStr(nPeriodID) & " " & obLanguage("Common","kPeriod")
					If nPeriodID = 1 Then
						strPeriodName = strPeriodName & " (" & obLanguage("ServAdmin","kPeriod_Summer") & ")"
					End If
					DrawDateIntervalRowEx strPeriodName, "SDT_" & nPeriodID, dtStart, "EDT_" & nPeriodID, dtEnd
					objMovePeriods.MoveNext
				WEnd%>
			</div>
		</div>
	</form><%
End Sub
%>
