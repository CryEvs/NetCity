<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub SpecialFilters( strForm )
	FilterGlobalYear

	Dim arr(2,1), i
	arr(0,0) = "-1"
	arr(0,1) = "1"
	arr(1,0) = "Все"
	arr(1,1) = "В указанном диапазоне"
	Call DrawSelectInfoRow("Возраст учащихся", 0, "AGETYPE", arr, "", "", "", "drawFilters()")
	%><div id="DivAgeFilters" class="hidden"><%
	OpenFormGroup "Возрастной диапазон"%>
		<div class="input-group">
			<span class="input-group-addon">с</span>
			<select name="FROMAGE" onChange="" class="form-control">
				<%For i = 3 To 30%>
					<option value="<%=i%>" <%If 5=i Then response.write "SELECTED"%>><%=i%></option>
				<%Next%>
			</select>
			<span class="input-group-addon">до</span>
			<select NAME="TOAGE" onChange="" class="form-control">
				<%For i = 3 To 30%>
					<option value="<%=i%>" <%If 17=i Then response.write "SELECTED"%>><%=i%></option>
				<%Next%>
			</select>
		</div><%
	CloseFormGroup

	Call DrawDateInfoRow("Возраст на дату", dtEndDate, "dtDateForBirthday", "")
	%></div><%
End Sub

Sub SpecialRead()
	bIsCheckDates = False
	'Для того чтобы отрисовывать УЧЕБНЫЕ ГОДА подотчетных УО из фильтров, если их нет берет самое вышестоящее
	InitEM_NotArchivedGlobalYears

	Set objCommonYears = objNSNET.GetEMGlobalYearsForEOType(strFilterEMID, kFuncType_Add)
	If objCommonYears.EOF Then Exit Sub

	nGlobalYearID = GetSafeGlobalYearID(objCommonYears)
	SetDefault_EndDate
End Sub

Sub SpecialHead
	%><script><!--
		function drawFilters() {
			var selected = $('select[name="AGETYPE"]').val()
			var all = "-1"
			if (selected == all){
				$('#DivAgeFilters').addClass("hidden")
			}
			else{
				$('#DivAgeFilters').removeClass("hidden")
			}
		}
	//--></script><%
End Sub
%>
