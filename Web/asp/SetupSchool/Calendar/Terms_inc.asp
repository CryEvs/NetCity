<!-- #INCLUDE VIRTUAL=/asp/scripts/dateInput.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objTerms, dtYearStart, dtYearEnd
Dim bIsWizard

Sub Main()
	Dim objRS

	Set objTerms = objNSNET.GetTermList(strCurrYearID)
	Set objRs = objNSNET.GetYearInfo(strCurrYearID)
	dtYearStart = objRs("STARTDATE")
	dtYearEnd = objRs("ENDDATE")
	objRs.Close
End Sub

Sub onSpecialHead()%>
	<script><!--
		var dtYStartDate =  <%=Date2Js(dtYearStart) %>;
		var dtYEndDate = <%=Date2Js(dtYearEnd) %>;
		var dtLastEnd = null;

		$(document).ready(function() {
			dateInput.onChange(function(e) {
				var form = document.MainForm;
				var el = e.target;
				var dt = e.date;

				var fieldName;
				var arrField = el.name.split("_");
				if( arrField[0].indexOf("EDT")>=0 ) {
					fieldName='SDT_'+arrField[1]+'_'+(arrField[2]-(-1));
					dt = dateUtils.getUTCDate(dt.getFullYear(), dt.getMonth(), dt.getDate() + 1);
				}
				else if( (arrField[0].indexOf("SDT")>=0) && (arrField[2]>1)) {
					fieldName='EDT_'+arrField[1]+'_'+(arrField[2]-1);
					dt = dateUtils.getUTCDate(dt.getFullYear(), dt.getMonth(), dt.getDate() - 1);
				}
				var element = form.elements[fieldName];
				if( element ) {
					element.value = date2str(dt);
				}

				dataChanged();
			});
		});

		function isTermDatesValid(nTermType, nCount) {
			var form = document.MainForm;
			var sTermTypeIndex_C = '_' + nTermType + '_';
			var lastEndDate;
			for(var i = 1; i <= nCount; i++) {
				var sTermTypeIndex = sTermTypeIndex_C + i;

				var startDate = str2date( form.elements['SDT' + sTermTypeIndex].value );
				if( startDate == null ) {
					focusAlert(form.elements['SDT' + sTermTypeIndex], language.Generic.Common.kErrInvalidStartDate );
					return false;
				}
				if(i == 1) {
					if( startDate < dtYStartDate ) {
						focusAlert(form.elements['SDT' + sTermTypeIndex], language.Generic.SetupSchoolCalendar.kStartDateCanntAfter );
						return false;
					}
				}
				else {
					if( startDate <= lastEndDate ) {
						focusAlert(form.elements['SDT' + sTermTypeIndex], language.Generic.SetupSchoolCalendar.kErrorTermsOverlapped );
						return false;
					}
				}
				var endDate = str2date( form.elements['EDT' + sTermTypeIndex].value );
				if( endDate == null ) {
					focusAlert(form.elements['EDT' + sTermTypeIndex], language.Generic.Common.kErrInvalidEndDate );
					return false;
				}
				if( startDate > endDate ) {
					focusAlert(form.elements['SDT' + sTermTypeIndex], language.Generic.Common.kMsgStartBeforeEnd );
					return false;
				}
				if(i == nCount) {
					if( endDate > dtYEndDate ) {
						focusAlert(form.elements['EDT' + sTermTypeIndex], language.Generic.SetupSchoolCalendar.kYEndDateCanntBefore );
						return false;
					}
				}
				lastEndDate = endDate;
			}
			dtLastEnd = lastEndDate;
			return true;
		}

		function saveTerms() {
			if( isDBBusy() ) return false;
			extDeferred.when(canSaveTerms).then(function() {
				setDBBusy();
				ok('MainForm', 'SaveTerms.asp');
			});
		}

		function canSaveTerms() {
			var form = document.MainForm;
			var elTermType=form.elements['TERM_TYPE'];
			if (elTermType) {
				var confirms =  new Array();
				var arrTermTypeInfo;
				if (elTermType.length) {
					var nTTLen = elTermType.length;
					var arrLastEnds = new Array(nTTLen);
					for (var j=0;j<nTTLen;j++) {
						arrTermTypeInfo = elTermType[j].value.split(',');
						if(!isTermDatesValid(arrTermTypeInfo[0], arrTermTypeInfo[1]))
							return false;
						arrLastEnds[j] = dtLastEnd;
					}
					var dtLastEndCurr = arrLastEnds[0];
					for (var j=1;j<nTTLen;j++) {
						if(dtLastEndCurr.getTime() != arrLastEnds[j].getTime())
							confirms.push($.show.getConfirmation(language.Generic.SetupSchoolCalendar.kDifferentLastTermEnds + '. ' + language.Generic.Common.kContinue));
					}
				}
				else {
					arrTermTypeInfo = elTermType.value.split(',');
					if(!isTermDatesValid(arrTermTypeInfo[0], arrTermTypeInfo[1]))
						return false;
				}return extDeferred.when(confirms);
			}return false;
		}
	//-->
	</script>
	<%
	Call scriptCalendar( "MainForm", dtYearStart, dtYearEnd)
End Sub

Sub DrawFilters( strForm )
	DrawTitleRow "", FormatDateTime(dtYearStart, vbLongDate) & " - " & FormatDateTime(dtYearEnd, vbLongDate)
End Sub

Sub DrawSpecialButtons()
	ButtonSave "saveTerms();", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MainForm');", obLanguage("Common","kReset")
End Sub

Sub onDrawPage()%>
	<form name="MainForm" method="post" action="Terms.asp">
		<%=WriteObligatoryTags()%>
		<%Call DrawButtonsFilters( True , "MainForm" )%>
		<div class="row">
			<div class="col-md-<%=IIF(bIsWizard, 8, 6)%> col-lg-6">
				<%Call DrawTable%>
			</div>
		</div>
	</form><%
End Sub

Sub DrawTable()
	Dim strTermTypeIndex, nType, nTypeOld, nIndex

	If objTerms.EOF Then 
		DrawInfo GetNoTermsInYearDefineTermsTypes("MainForm", bIsWizard), False
		Exit Sub
	End If%>

	<table class="table table-stripped">
		<tr>
			<th><%=obLanguage("Common","kName")%></th>
			<th><%=obLanguage("Filter","kInterval")%></th>
		</tr><%
		nIndex = 0
		nType = CLng(objTerms("TERMTYPEID"))
		nTypeOld = nType
		While Not objTerms.EOF
			' make unique index first: SDT_type_index (SDT_1_1 means start of first quarter)
			nType = CLng(objTerms("TERMTYPEID"))
			If nType = nTypeOld Then
				nIndex = nIndex + 1
			Else%>
				<tr><th colspan="3">&nbsp;<input type="hidden" name="TERM_TYPE" value="<%=nTypeOld%>,<%=nIndex%>"></th></tr><%
				nTypeOld = nType
				nIndex = 1
			End If
			strTermTypeIndex = "_" & nType & "_" & nIndex%>
			<tr><td class="text-nowrap text-center"><%=DB2HTML(objTerms("TERMNAME"))%><input type="hidden" name="TERM" value="<%=strTermTypeIndex%>,<%=objTerms("TERMID")%>"></td>
				<td><%Call DrawDateInterval("SDT" & strTermTypeIndex, objTerms("STARTDATE"), "EDT" & strTermTypeIndex, objTerms("ENDDATE"))%></td>
			</tr><%
			objTerms.MoveNext
		WEnd%>
	</table>
	<input type="hidden" name="TERM_TYPE" value="<%=nType%>,<%=nIndex%>"><%
End Sub
%>
