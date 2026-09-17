<!-- #INCLUDE FILE="../Calendar/Curriculum/Float_js_inc.asp" -->
<% ' © 2007-2012 IRTech. All rights reserved.
%>
<script><!--
	var bIsDataValid = true;
	var wndPrintVersion = null;

	function canSubmit(){
			<% If NOT readonly Then %>
				var isvalid = isInfoFormValid();

				<%If bIsEducManager Then%>
					if(!isvalid)
					{
						return $.show.confirmation("<%=obLanguage("Common", "kInconsistentData")%>");
					}
				<%Else%>
					if (!isvalid) {
						alert("<%=obLanguage("Common", "kIncorrectData")%>");
					}
				<%End If%>

				return isvalid;
			<% End If %>
				return true;
	}
	function closeForm(message, message2, nFormId) {
		extDeferred.when($.show.getConfirmation(message), $.show.getConfirmation(message2)).then(function() {
			var form = document.forms['SchoolEdit'];
			var onSucc = function(response)
			{
				if (response.message != null)
					alert(response.message);
				$('button:contains("Закрыть форму")').hide();
			};
			jsSubmit({form: form, action: '/asp/SetupSchool/SchoolForms/SchoolInfoClose.asp?FORMID=' + nFormId, showProcessing: true, onSuccess: onSucc});
		});
	}

	function exportForm(formId) {
		postTo({
			path: "/webapi/schools/statforms/"+formId+"/export",
			formParams: { method: "GET" }
		});
	}

	function autoCalc() {
		$.show.confirmation(language.Generic.SchoolInfo.kWarnAutoCalc).then(function(){
			var onSucc = function(response)
			{
				var calcvalues = response.data.calcvalues;
				$.each(calcvalues, function(key, value) {
					var item = $('[id="' + value[0] + '"]');
					if (value[1] == null)
						if (item.hasClass("form-cell-disabled"))
							item.val(0);
						else
							item.val("");
					else
						item.val(value[1]);
				});
				CalculateOSH();
			};
			
			jsSubmit({form: document.forms['SchoolEdit'], action: '<%=strScriptName%>?AC=Y', showProcessing : true, onSuccess: onSucc});
			
		});
	}

	function CalculateOSH() { return true; }

	function isInfoFormValid() {
		CalculateOSH();
		return bIsDataValid;
	}
	function OSHdataChanged(theObject, theType) {
		dataChanged();
		var isValid = true;
		bIsDataValid = true;
		$('.form-cell-invalid').removeClass('form-cell-invalid');
		$('.form-cell-dependent-invalid').removeClass('form-cell-dependent-invalid');
		if (theObject && (theType == "NUMBER" || theType == "FLOAT") && trimStr(theObject.value) != "") {
			var value;
			if (theType == "FLOAT") {
				value = str2floatEx(theObject);
			}
			else {
				value = str2lngEx(theObject);
			}
			if (!isNaN(value) && value >= 0) {
				isValid = true;
			}
			else {
				isValid = false;
			}
		}
		if (!isValid) {
			alert('<%=obLanguage("SchoolInfo","kPositiveNumOrZeroRequired")%>');
			theObject.value = "";
			theObject.focus();
			bIsDataValid = false;
		}
		CalculateOSH();
		return isValid;
	}

	function GetValue(jQueryObject) {
		var value = jQueryObject.val();
		if(value != null) {
			var value = value.replace(',', '.');
		}
		var value = parseFloat(value);
		if (!isNaN(value))
			return value;
		else
			return 0;
	}

	function GetValueInt(theObject) {
		if (theObject && trimStr(theObject.value) != "") {
			var value = str2lngEx(theObject);
			if (!isNaN(value))
				return value;
			else
				return 0;
		}
		return 0;
	}

	function GetParameterName(nSection, nRow, nCol) {
		if(nCol==null)
			return 'T' + lpad(nSection, 2) + lpad(nRow, 2);
		else
			return 'T' + lpad(nSection, 2) + lpad(nRow, 2) + lpad(nCol, 2);
	}
	
	function SaveForm(nFormId, nPage, savingMessage) {
		savingMessage = savingMessage || '<%=obLanguage("SetupSchoolCalendar", "kMsgSave")%>';
		extDeferred.when(canSubmit).then(function() {
			var saveForm = document.forms['SchoolEdit'];
			saveForm.action = '/asp/EDUC_MANAGER/Reports/StatForms/Form_Save.asp?FORMID=' + nFormId + '&PAGE=' + nPage;
			jsSaveForm (saveForm, {message: savingMessage});
		});
	}
	
	function SaveSchoolForm(nFormId, nPage) {
		extDeferred.when(canSubmit).then(function() {
			var saveForm = document.forms['SchoolEdit'];
			saveForm.action = '/asp/SetupSchool/SchoolForms/SchoolInfoSave.asp?FORMID=' + nFormId + '&PAGE=' + nPage;
			jsSaveForm (saveForm);
		});
	}


	function GetParameter(nSection, nRow, nCol) {
		return	$('#' + GetParameterName(nSection, nRow, nCol));
	}

	var lpad = function (padString, length) {
		var str = padString.toString();
		while (str.length < length)
			str = "0" + str;
		return str;
	}

	function GetParamaterValue(section, row, col) {
		var param = GetParameter(section, row, col);
		return GetValue(param);
	}

	function LaunchTrigger(section, col, row, dependRows) {
		var paramName = GetParameterName(section, row, col);
		var elem = $('select[name="' + paramName + '"]');
		var disabled = (elem.val() != 1);
		for (var rowIndex in dependRows) {
			var dependRow = dependRows[rowIndex];
			var dependElem = GetParameter(section, dependRow, col);
			dependElem.prop('disabled', disabled);
			if (disabled) {
				dependElem.addClass('form-cell-disabled');
				if (dependElem.val() != '') {
					elem.addClass('form-cell-invalid');
					dependElem.addClass('form-cell-dependent-invalid');
					bIsDataValid = false;
				}
			}
			else {
				dependElem.removeClass('form-cell-disabled');
				elem.removeClass('form-cell-invalid');
			}
		}
	}

	function BindChangeTrigger(section, col, row, dependRows) {
		var paramName = GetParameterName(section, row, col);
		var elem = $('select[name="' + paramName + '"]');
		elem.on("change", function (e) {
			var disabled = (elem.val() != 1);
			for (var rowIndex in dependRows) {
				var dependRow = dependRows[rowIndex];
				var dependElem = GetParameter(section, dependRow, col);
				dependElem.prop('disabled', disabled);
				if (disabled) {
					dependElem.addClass('form-cell-disabled');
					if (dependElem.val() != '') {
						elem.addClass('form-cell-invalid');
						dependElem.addClass('form-cell-dependent-invalid');
						bIsDataValid = false;
					}
				}
				else {
					dependElem.removeClass('form-cell-disabled');
					elem.removeClass('form-cell-invalid');
				}
			}
		});
	}

	function ValidateTrigger(section, col, row, dependRows) {
		var paramName = GetParameterName(section, row, col);
		var elem = $('select[name="' + paramName + '"]');
		if(elem.val() == '0' || elem.val() == '2') {
			for (var rowIndex in dependRows) {
				var dependRow = dependRows[rowIndex];
				var dependElem = GetParameter(section, dependRow, col);
				if (!(dependElem.val() == '' || dependElem.val() == '0' || dependElem.val() == '2')) {
					elem.addClass('form-cell-invalid');
					dependElem.addClass('form-cell-dependent-invalid');
					bIsDataValid = false;
				}
			}
		}
	}

	function ValidateTrigger2(section, col, row, dependRows) {
		var paramName = GetParameterName(section, row, col);
		var elem = $('select[name="' + paramName + '"]');
		if(elem.val() == '1') {
			for (var rowIndex in dependRows) {
				var dependRow = dependRows[rowIndex];
				var dependElem = GetParameter(section, dependRow, col);
				if (!(dependElem.val() == '0' || dependElem.val() == '2')) {
					elem.addClass('form-cell-invalid');
					dependElem.addClass('form-cell-dependent-invalid');
					bIsDataValid = false;
				}
			}
		}
	}

	function ValidateTrigger_Value_Is_One_Then_Any(section, col, row, dependRows) {
		var paramName = GetParameterName(section, row, col);
		var elem = $('select[name="' + paramName + '"]');

		if(elem.val() == '1') {
			bIsDataValid = false;
			for (var rowIndex in dependRows) {
				var dependRow = dependRows[rowIndex];
				var dependElem = GetParameter(section, dependRow, col);
				if (!(dependElem.val() == '' || dependElem.val() == '0' || dependElem.val() == '2')) {
					bIsDataValid = true;
					return;
				}
			}
			elem.addClass('form-cell-invalid');
		}
	}

	function ValidateIncludedCols(section, totalCol, includeCols, rowStart, rowEnd) {
		for (var i = rowStart; i <= rowEnd; i++) {
			var includedSum = 0;
			var totalColValue = GetParamaterValue(section, i, totalCol);
			for (var colIndex in includeCols) {
				var col = includeCols[colIndex];
				var paramValue = GetParamaterValue(section, i, col);
				includedSum += paramValue;
			}
			if (includedSum > totalColValue) {
				var elem = GetParameter(section, i, totalCol);
				elem.addClass('form-cell-invalid');
				for (var colIndex in includeCols) {
					var col = includeCols[colIndex];
					var dependElem = GetParameter(section, i, col);
					dependElem.addClass('form-cell-dependent-invalid');
				}
				bIsDataValid = false;
			}
		}
	}

	function ValidateEqIncludedCols(section, totalCol, includeCols, rowStart, rowEnd) {
		for (var i = rowStart; i <= rowEnd; i++) {
			var includedSum = 0;
			var totalColValue = GetParamaterValue(section, i, totalCol);
			for (var colIndex in includeCols) {
				var col = includeCols[colIndex];
				var paramValue = GetParamaterValue(section, i, col);
				includedSum += paramValue;
			}
			if (includedSum != totalColValue) {
				var elem = GetParameter(section, i, totalCol);
				elem.addClass('form-cell-invalid');
				for (var colIndex in includeCols) {
					var col = includeCols[colIndex];
					var dependElem = GetParameter(section, i, col);
					dependElem.addClass('form-cell-dependent-invalid');
				}
				bIsDataValid = false;
			}
		}
	}

	//функция для валидации суммы значений из нескольких строк одного столбца с суммой значений из нескольких строк одного столбца
	function ValidateIncludedRowsWithIncludedRows(section, totalRows, includeRows, colStart, colEnd)
	{
		for (var i = colStart; i <= colEnd; i++) {
			var includedSum = 0;
			var totalRowSum = 0;

			for (var rowIndex in totalRows) {
				var row = totalRows[rowIndex];
				var paramValue = GetParamaterValue(section, row, i);
				totalRowSum += paramValue;
			}

			for (var rowIndex in includeRows) {
				var row = includeRows[rowIndex];
				var paramValue = GetParamaterValue(section, row, i);
				includedSum += paramValue;
			}

			if (includedSum > totalRowSum) 
			{
				for (var rowIndex in totalRows) {
					var row = totalRows[rowIndex];
					var dependElem = GetParameter(section, row, i);
					dependElem.addClass('form-cell-invalid');
				}

				for (var rowIndex in includeRows) {
					var row = includeRows[rowIndex];
					var dependElem = GetParameter(section, row, i);
					dependElem.addClass('form-cell-dependent-invalid');
				}
				bIsDataValid = false;
			}
		}
	}

	function ValidateEqIncludedRowsWithIncludedRows(section, totalRows, includeRows, colStart, colEnd)
	{
		for (var i = colStart; i <= colEnd; i++) {
			var includedSum = 0;
			var totalRowSum = 0;

			for (var rowIndex in totalRows) {
				var row = totalRows[rowIndex];
				var paramValue = GetParamaterValue(section, row, i);
				totalRowSum += paramValue;
			}

			for (var rowIndex in includeRows) {
				var row = includeRows[rowIndex];
				var paramValue = GetParamaterValue(section, row, i);
				includedSum += paramValue;
			}

			if (includedSum != totalRowSum) 
			{
				for (var rowIndex in totalRows) {
					var row = totalRows[rowIndex];
					var dependElem = GetParameter(section, row, i);
					dependElem.addClass('form-cell-dependent-invalid');
				}

				for (var rowIndex in includeRows) {
					var row = includeRows[rowIndex];
					var dependElem = GetParameter(section, row, i);
					dependElem.addClass('form-cell-dependent-invalid');
				}
				bIsDataValid = false;
			}
		}
	}

	function ValidateIncludedRows(section, totalRow, includeRows, colStart, colEnd) {
		for (var i = colStart; i <= colEnd; i++) {
			var includedSum = 0;
			var totalRowValue = GetParamaterValue(section, totalRow, i);
			for (var rowIndex in includeRows) {
				var row = includeRows[rowIndex];
				var paramValue = GetParamaterValue(section, row, i);
				includedSum += paramValue;
			}
			if (includedSum > totalRowValue) {
				var elem = GetParameter(section, totalRow, i);
				elem.addClass('form-cell-invalid');
				for (var rowIndex in includeRows) {
					var row = includeRows[rowIndex];
					var dependElem = GetParameter(section, row, i);
					dependElem.addClass('form-cell-dependent-invalid');
				}
				bIsDataValid = false;
			}
		}
	}

	function ValidateIncludedRowsWithPrecision(section, totalRow, includeRows, colStart, colEnd, precision) {
		var base = 10;
		var pow = Math.pow(base, precision);

		for (var i = colStart; i <= colEnd; i++) {
			var includedSum = 0;
			var totalRowValue = GetParamaterValue(section, totalRow, i);
			for (var rowIndex in includeRows) {
				var row = includeRows[rowIndex];
				var paramValue = GetParamaterValue(section, row, i);
				includedSum += paramValue * pow;
			}
			includedSum = includedSum / pow;
			if (includedSum > totalRowValue) {
				var elem = GetParameter(section, totalRow, i);
				elem.addClass('form-cell-invalid');
				for (var rowIndex in includeRows) {
					var row = includeRows[rowIndex];
					var dependElem = GetParameter(section, row, i);
					dependElem.addClass('form-cell-dependent-invalid');
				}
				bIsDataValid = false;
			}
		}
	}

	function ValidateDividedRows(section, totalRow, includeRows, colStart, colEnd) {
		for (var i = colStart; i <= colEnd; i++) {
			var elem = GetParameter(section, totalRow, i);
			var totalRowValue = GetValue(elem);
			for (var rowIndex in includeRows) {
				var row = includeRows[rowIndex];
				var dependElem = GetParameter(section, row, i);
				var paramValue = GetValue(dependElem);
				if (paramValue > totalRowValue) {
					dependElem.addClass('form-cell-dependent-invalid');
					elem.addClass('form-cell-invalid');
					bIsDataValid = false;
				}
			}
		}
	}

	function ValidateDividedCols(section, totalCol, includeCols, rowStart, rowEnd) {
		for (var i = rowStart; i <= rowEnd; i++) {
			var elem = GetParameter(section, i, totalCol);
			var totalColValue = GetValue(elem);
			for (var colIndex in includeCols) {
				var col = includeCols[colIndex];
				var dependElem = GetParameter(section, i, col);
				var paramValue = GetValue(dependElem);
				if (paramValue > totalColValue) {
					dependElem.addClass('form-cell-dependent-invalid');
					elem.addClass('form-cell-invalid');
					bIsDataValid = false;
				}
			}
		}
	}

	function ValidateCell(section, cellRow, cellCol, rows, col) {
		var elem = GetParameter(section, cellRow, cellCol);
		var cellValue = GetValue(elem);
		for (var rowIndex in rows) {
			var row = rows[rowIndex];
			var dependElem = GetParameter(section, row, col);
			var paramValue = GetValue(dependElem);
			if (paramValue > cellValue) {
				elem.addClass('form-cell-invalid');
				dependElem.addClass('form-cell-dependent-invalid');
				bIsDataValid = false;
			}
		}
	}

	function ValidateEqCell(section, cellRow, cellCol, rows, col) {
		var elem = GetParameter(section, cellRow, cellCol);
		var cellValue = GetValue(elem);
		bIsDataValid = false;
		for (var rowIndex in rows) {
			var row = rows[rowIndex];
			var dependElem = GetParameter(section, row, col);
			var paramValue = GetValue(dependElem);
			if (paramValue == cellValue) {
				bIsDataValid = true;
				return;
			}
		}
		elem.addClass('form-cell-invalid');
	}

	//cellCol - может быть null
	function ValidateIncludedCells(section, cellRow, cellCol, rows, col) {
		var elem = GetParameter(section, cellRow, cellCol);
		var cellValue = GetValue(elem);
		var includedSum = 0;

		for (var rowIndex in rows) {
			var row = rows[rowIndex];
			var dependElem = GetParameter(section, row, col);
			var paramValue = GetValue(dependElem);
			includedSum += paramValue;
			if (includedSum > cellValue) {
				elem.addClass('form-cell-invalid');
				dependElem.addClass('form-cell-dependent-invalid');
				bIsDataValid = false;
			}
		}
	}

	function SumRow(section, sumRowIndex, sumCols, rowStart, rowEnd) {
		for (var colIndex in sumCols) {
			var col = sumCols[colIndex];
			var sum = 0;
			var elem = GetParameter(section, sumRowIndex, col);
			for (var i = rowStart; i <= rowEnd; i++) {
				var paramValue = GetParamaterValue(section, i, col);
				sum += paramValue;
			}
			var value = roundPlus(sum, 3).toString().replace('.',',');
			elem.val(value);
		}
	}

	function SumRowByIndex(section, sumRowIndex, sumCols, sumRows) {
		for (var colIndex in sumCols) {
			var col = sumCols[colIndex];
			var sum = 0;
			var elem = GetParameter(section, sumRowIndex, col);
			for (var rowIndex in sumRows) {
				var row = sumRows[rowIndex];
				var paramValue = GetParamaterValue(section, row, col);
				sum += paramValue;
			}
			var value = roundPlus(sum, 3).toString().replace('.',',');
			elem.val(value);
		}
	}

	function SumRowAllCols(section, sumRowIndex, colStart, colEnd, rowStart, rowEnd) {
		var sumCols = new Array();
		for (var j = colStart; j <= colEnd; j++) {
			sumCols[j] = j;
		}
		for (var colindex in sumCols) {
			var col = sumCols[colindex];
			var sum = 0;
			var elem = GetParameter(section, sumRowIndex, col);
			for (var i = rowStart; i <= rowEnd; i++) {
				var paramValue = GetParamaterValue(section, i, col);
				sum += paramValue;
			}
			var value = roundPlus(sum, 3).toString().replace('.',',');
			elem.val(value);
		}
	}

	function SumRowAllColsByIndex(section, sumRowIndex, colStart, colEnd, sumRows) {
		var sumCols = new Array();
		for (var j = colStart; j <= colEnd; j++) {
			sumCols[j] = j;
		}
		for (var colindex in sumCols) {
			var col = sumCols[colindex];
			var sum = 0;
			var elem = GetParameter(section, sumRowIndex, col);
			for (var rowIndex in sumRows) {
				var row = sumRows[rowIndex];
				var paramValue = GetParamaterValue(section, row, col);
				sum += paramValue;
			}
			var value = roundPlus(sum, 3).toString().replace(".",",");
			elem.val(value);
		}
	}

	function SumRowsSpecFor103RicSec1Row30() {
		var section = 1;
		var sumRowIndex = 30;
		var colIndex = 3;
		var sum = 0;
		var elem = GetParameter(section, sumRowIndex, colIndex);
		sum = GetParamaterValue(section, 6, colIndex) - (
			GetParamaterValue(section, 7, colIndex)+
			GetParamaterValue(section, 8, colIndex)+
			GetParamaterValue(section, 9, colIndex)+
			GetParamaterValue(section, 10, colIndex)+
			GetParamaterValue(section, 11, colIndex)+
			GetParamaterValue(section, 13, colIndex)+
			GetParamaterValue(section, 20, colIndex)+
			GetParamaterValue(section, 25, colIndex)+
			GetParamaterValue(section, 26, colIndex)+
			GetParamaterValue(section, 27, colIndex)+
			GetParamaterValue(section, 28, colIndex)+
			GetParamaterValue(section, 29, colIndex));
		var value = roundPlus(sum, 3).toString().replace('.',',');
		elem.val(value);
	}

	function SumRowsSpecFor103RicSec1Row35() {
		var section = 1;
		var sumRowIndex = 35;
		var colIndex = 3;
		var sum = 0;
		var elem = GetParameter(section, sumRowIndex, colIndex);
		sum = GetParamaterValue(section, 32, colIndex)+
			GetParamaterValue(section, 33, colIndex)-
			GetParamaterValue(section, 34, colIndex);
		var value = roundPlus(sum, 3).toString().replace('.',',');
		elem.val(value);
	}

	function SumRowsSpecFor103RicSec1Row31() {
		var section = 1;
		var sumRowIndex = 31;
		var colIndex = 3;
		var sum = 0;
		var elem = GetParameter(section, sumRowIndex, colIndex);
		sum = GetParamaterValue(section, 6, colIndex) - (
			GetParamaterValue(section, 7, colIndex)+
			GetParamaterValue(section, 8, colIndex)+
			GetParamaterValue(section, 9, colIndex)+
			GetParamaterValue(section, 10, colIndex)+
			GetParamaterValue(section, 11, colIndex)+
			GetParamaterValue(section, 13, colIndex)+
			GetParamaterValue(section, 20, colIndex)+
			GetParamaterValue(section, 26, colIndex)+
			GetParamaterValue(section, 27, colIndex)+
			GetParamaterValue(section, 28, colIndex)+
			GetParamaterValue(section, 29, colIndex)+
			GetParamaterValue(section, 30, colIndex));
		var value = roundPlus(sum, 3).toString().replace('.',',');
		elem.val(value);
	}

	function SumRowsSpecFor103RicSec1Row36() {
		var section = 1;
		var sumRowIndex = 36;
		var colIndex = 3;
		var sum = 0;
		var elem = GetParameter(section, sumRowIndex, colIndex);
		sum = GetParamaterValue(section, 33, colIndex)+
			GetParamaterValue(section, 34, colIndex)-
			GetParamaterValue(section, 35, colIndex);
		var value = roundPlus(sum, 3).toString().replace('.',',');
		elem.val(value);
	}

	function SumRowsSpecFor103RicSec2Row24() {
		var section = 2;
		var sumRowIndex = 24;
		for(var i = 3; i<=13; i++) {
			var sum = 0;
			var elem = GetParameter(section, sumRowIndex, i);
			sum = GetParamaterValue(section, 1, i)-
				GetParamaterValue(section, 2, i)+
				GetParamaterValue(section, 3, i)+
				GetParamaterValue(section, 4, i)+
				GetParamaterValue(section, 5, i)-
				GetParamaterValue(section, 6, i)+
				GetParamaterValue(section, 7, i)-
				GetParamaterValue(section, 10, i)-
				GetParamaterValue(section, 23, i);
			var value = roundPlus(sum, 3).toString().replace('.',',');
			elem.val(value);
		}
	}

	function SumRowsSpecFor103RicSec2Row26() {
		var section = 2;
		var sumRowIndex = 26;
		for(var i = 3; i<=14; i++) {
			var sum = 0;
			var elem = GetParameter(section, sumRowIndex, i);
			sum = GetParamaterValue(section, 1, i)-
				GetParamaterValue(section, 2, i)+
				GetParamaterValue(section, 3, i)+
				GetParamaterValue(section, 4, i)+
				GetParamaterValue(section, 5, i)-
				GetParamaterValue(section, 6, i)+
				GetParamaterValue(section, 7, i)-
				GetParamaterValue(section, 10, i)-
				GetParamaterValue(section, 25, i);
			var value = roundPlus(sum, 3).toString().replace('.',',');
			elem.val(value);
		}
	}

	function SumRowsSpecFor103RicSec2Row28() {
		var section = 2;
		var sumRowIndex = 28;
		for(var i = 3; i<=14; i++) {
			var sum = 0;
			var elem = GetParameter(section, sumRowIndex, i);
			sum = GetParamaterValue(section, 1, i)-
				GetParamaterValue(section, 2, i)+
				GetParamaterValue(section, 3, i)+
				GetParamaterValue(section, 4, i)+
				GetParamaterValue(section, 5, i)-
				GetParamaterValue(section, 6, i)+
				GetParamaterValue(section, 7, i)-
				GetParamaterValue(section, 12, i)-
				GetParamaterValue(section, 27, i);
			var value = roundPlus(sum, 3).toString().replace('.',',');
			elem.val(value);
		}
	}

	function SumRowsSpecFor103RicSec2Row39() {
		var section = 2;
		var sumRowIndex = 39;
		for(var i = 3; i<=14; i++) {
			var sum = 0;
			var elem = GetParameter(section, sumRowIndex, i);
			sum = GetParamaterValue(section, 1, i)-
				GetParamaterValue(section, 2, i)+
				GetParamaterValue(section, 3, i)-
				GetParamaterValue(section, 4, i)+
				GetParamaterValue(section, 5, i)+
				GetParamaterValue(section, 6, i)+
				GetParamaterValue(section, 7, i)-
				GetParamaterValue(section, 8, i)+
				GetParamaterValue(section, 9, i)-
				GetParamaterValue(section, 10, i)+
				GetParamaterValue(section, 11, i)-
				GetParamaterValue(section, 16, i)-
				GetParamaterValue(section, 38, i);
			var value = roundPlus(sum, 3).toString().replace('.',',');
			elem.val(value);
		}
	}

	function SumCol(section, sumColIndex, sumRows, colStart, colEnd) {
		for (var rowindex in sumRows) {
			var row = sumRows[rowindex];
			var sum = 0;
			var elem = GetParameter(section, row, sumColIndex);
			for (var i = colStart; i <= colEnd; i++) {
				var paramValue = GetParamaterValue(section, row, i);
				sum += paramValue;
			}
			var value = roundPlus(sum, 3).toString().replace('.',',');
			elem.val(value);
		}
	}

	function SumColCommon(section, sumColIndex, sumRows, sumCols) {
		for (var rowindex in sumRows) {
			var row = sumRows[rowindex];
			var sum = 0;
			var elem = GetParameter(section, row, sumColIndex);
			for (var colindex in sumCols) {
				var col = sumCols[colindex];
				var paramValue = GetParamaterValue(section, row, col);
				sum += paramValue;
			}
			var value = roundPlus(sum, 3).toString().replace('.',',');
			elem.val(value);
		}
	}
	
	function SumColForRowRange(section, sumColIndex, rowStart, rowEnd, sumCols) {
		var sumRows = new Array();
		for (var j = rowStart; j <= rowEnd; j++) {
			sumRows[j] = j;
		}
		SumColCommon(section, sumColIndex, sumRows, sumCols);
	}

	function SumColByIndex(section, sumColIndex, sumRows, sumCols) {
		for (var rowIndex in sumRows) {
			var row = sumRows[rowIndex];
			var sum = 0;
			var elem = GetParameter(section, sumColIndex, row);
			for (var colIndex in sumCols) {
				var col = sumCols[colIndex];
				var paramValue = GetParamaterValue(section, row, col);
				sum += paramValue;
			}
			var value = roundPlus(sum, 3).toString().replace('.',',');
			elem.val(value);
		}
	}


	function SumColAllRows(section, sumColIndex, rowStart, rowEnd, colStart, colEnd) {
		var sumRows = new Array();
		for (var j = rowStart; j <= rowEnd; j++) {
			sumRows[j] = j;
		}
		for (var rowindex in sumRows) {
			var row = sumRows[rowindex];
			var sum = 0;
			var elem = GetParameter(section, row, sumColIndex);
			for (var i = colStart; i <= colEnd; i++) {
				var paramValue = GetParamaterValue(section, row, i);
				sum += paramValue;
			}
			var value = roundPlus(sum, 3).toString().replace('.',',');
			elem.val(value);
		}
	}

	function gotoPageEM(nPageNo) {
		checkForChanges().then(function(){
			DoSubmit(document.forms.SchoolEdit, 'Page' + nPageNo + '.asp');
		});
	}

	function showPrintVersion() {
		$('.print-block').printUtils().toPrint();
	}

	function openExcel(exType, bIsEmForm, statFormId) {
		var form = document.forms['SchoolEdit'];
		var formExport = document.forms['SchoolEdit'];
		var filterEmId = GetLocalEmId(<%=strEMID %>);
		var yearId = $('select[name=CMNYEARID]').val() || $('input[name=CMNYEARID]').val();
		var mns = 0;
		var formSpec = $('input[name="FS"]').val();
		//$(document).trigger('showProcessing');
		if(isMnsForm()) mns = 1;
		if(formSpec == 'undefined') formSpec = 0;
		postTo("/asp/EDUC_MANAGER/Reports/OSHExport.asp", {CMNYEAR : yearId, STATFORM: statFormId, expType: exType, bIsEmForm: bIsEmForm, FilterEMID: filterEmId, MNS: mns, FS: formSpec});
	}

	function isMnsForm()
	{
		return $('input[name="MNS"]').val() == '1';
	}

	function roundPlus(x, n) {
		if(isNaN(x) || isNaN(n)) return;
		var m = Math.pow(10, n);
		return Math.round(x * m)/m;
	}
//--> </script>
