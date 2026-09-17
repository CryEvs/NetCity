<% ' © 2007-2018 IRTech. All rights reserved.%>

<script> 
<!--
function GetParameterName(nSection, nRow, nCol) {
	if (nSection.indexOf('.') > 0) {
		nSection = nSection.replace('.', '\\.');
	}
	else {
		nSection = lpad(nSection, 2);
	}
	if (nCol == null) {
		return 'T' + nSection + lpad(nRow, 2);
	}
	else {
		return 'T' + nSection + lpad(nRow, 2) + lpad(nCol, 2);
	}
}

var statformId = <%=GetFormId()%>;
var yearid = appContext.yearId;
var page = <%=GetFormPageNum()%>;

function autoCalc() {
	$.show.confirmation(language.Generic.SchoolInfo.kWarnAutoCalc).then(function () {
		jsSubmit({
			action: "/webapi/schools/statforms/" + statformId + "/years/" + yearid + "/page/" + page + "/autocalc",
			showProcessing: true,
			method: "GET",
			onSuccess: function(statFormSections) {
				fillSection(statFormSections);
				CalculateOSH();
				dataChanged();
			}
		});
	});
};

function fillSection(statFormSections) {
	for(var i = 0; i < statFormSections.length; i++) {

		var statFormSection = statFormSections[i];
		var statFormCells = statFormSection.statFormCells;

		for (var j = 0; j < statFormCells.length; j++) {
			var statformcell = statFormCells[j];

			var cellName = GetParameterName(statFormSection.name, statformcell.cellRow, statformcell.cellCol);

			var el = $('#' + cellName);
			if (el.length) {
				el.val(statformcell.cellValue);
			}
		}
	}
};

function resetScreen(formName) {
	var form = document.forms[formName];
	var inputs = $(form).find('input[name^="T"]');
	var inputOnchanges = {};

	inputs.each(function () {
		inputOnchanges[this.name] = this.onchange;
		this.onchange = null;
	});

	$(form).resetState();
	this.dataWereChanged = false;

	// сброс классов ячеек
	inputs.each(function() {
		var input = $( this );
		if (input.hasClass("form-cell-disabled")) {
			return input.removeClass().addClass("form-cell-disabled");
		}
		input.removeClass();
	});

	bIsDataValid = true;

	inputs.each(function () {
		this.onchange = inputOnchanges[this.name];
	});

	return alert(language.Generic.Common.kResetChanges);
};
//--></script>