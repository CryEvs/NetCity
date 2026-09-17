function replace(printBlock, copyBlock) {
	$('div.text-left.text-nowrap', copyBlock).each(function () {
		$(this).replaceWith(this.innerHTML);
	});

	$('table', copyBlock).addClass('table table-xs table-thin');
	$('th', copyBlock).addClass('text-left');
	$('td', copyBlock).removeClass().addClass('cell-text');
}

function getSchoolCard() {
	var container = $('<div>');

	var schoolCard = $('div.print-block');
	var schoolCardClone = schoolCard.clone();
	var selects = schoolCard.find('select');

	schoolCardClone.find('select').each(function (index, item) {
		$(item).find('option').eq(selects.eq(index).children(':selected').index()).attr('selected', true);
	});

	schoolCardClone.find('.form-group').appendTo(container);

	return container;
}

var options = { viewHeader: true, processingFunc: [replace] };

function schoolInfoPrint() {
	getSchoolCard().printUtils().toPrint(options);
}

function schoolInfoExport() {
	getSchoolCard().printUtils().toExcel(options);
}