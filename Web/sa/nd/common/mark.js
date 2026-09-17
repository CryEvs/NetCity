function getMask(pageId) {
	var n1 = pageId.indexOf(".bdf;");
	if (n1 <= 0) return null;

	var n2 = pageId.indexOf(";", n1 + 6);
	if (n2 <= 0) return null;

	return pageId.substring(n1, n2 + 1);
}

function isCheckbox(element) {
	return element.type == 'checkbox';
}

function isMasked(element, sMask) {
	return element.value.indexOf(sMask) > 0;
}

function isMaskedCheckbox(element, sMask) {
	return isCheckbox(element) && isMasked(element, sMask);
}

function checkNames(element, names) {
	for (var i = 0; i < names.length; i++) {
		if (checkName(element, names[i])) {
			return true;
		}
	}
	return false;
}

function checkName(element, name) {
	return element.name == name;
}

function pageAllElementChecker(exludeIndex, sMask) {
	var form = document.forms[0];
	var elements = form.elements;

	var aAllChecked = true;
	var aPgAllElement;

	for (var j = exludeIndex - 1; j >= 0; j--) {
		if (isMaskedCheckbox(elements[j], sMask)) {
			if (checkName(elements[j], 'PG_AS_ALL')) {
				aPgAllElement = elements[j];
				break;
			} else if (!elements[j].checked) {
				aAllChecked = false;
				break;
			}
		}
	}

	for (var j = exludeIndex + 1; j < elements.length; j++) {
		if (isMaskedCheckbox(elements[j], sMask)) {
			if (checkNames(elements[j], ['AS', 'PG_AS', 'PG_AS_M', 'TheoreticalChapter'])) {
				if (!elements[j].checked) {
					aAllChecked = false;
					break;
				}
			} else break;
		}
	}
	if (aAllChecked && aPgAllElement) aPgAllElement.checked = true;
}

function markTheoretical(chaptherId) {
	var form = document.forms[0];
	var elements = from.elements;
	var sMask = getMask(chaptherId);
	if (sMask == null) return;

	for (var i = 0; i < elements.length; i++) {
		if (isCheckbox(elements[i]) && elements[i].value == chaptherId) {
			if (!elements[i].checked) {
				var aPgAsMWasFound = false;
				for (var j = i - 1; j >= 0; j--)
					if (isMaskedCheckbox(elements[j], sMask)) {
						if (checkName(elements[j], 'TheoreticalChapter') && !aPgAsMWasFound) {
							elements[j].checked = false;
							aPgAsMWasFound = true;
						}
						if (checkName(elements[j], 'TheoreticalChapter_ALL')) {
							elements[j].checked = false; break;
						}
					}
			}else
			{
				pageAllElementChecker(i, sMask);
			}
		}
	}
}

function markAss(thePageID)
{
	var form = document.forms[0];

	for (var i=0; i<form.elements.length; i++)
		if (form.elements[i].type=='checkbox')
			if (form.elements[i].value==thePageID) {
				var sMask = getMask(thePageID);
				if (sMask == null) return;
				if (!form.elements[i].checked){
					var aPgAsMWasFound = false;
					for(var j=i-1; j>=0; j--) 
						if ((form.elements[j].type=='checkbox') && (form.elements[j].value.indexOf(sMask)>0)) {
							if ((form.elements[j].name=='PG_AS_M') && !aPgAsMWasFound) {
								form.elements[j].checked = false;
								aPgAsMWasFound = true;
							}
							if (form.elements[j].name=='PG_AS_ALL') {
								form.elements[j].checked = false; break;
							}
						}
				}
				else {
					var aAllMChecked = true;
					var aPgMElement;

					for(var j=i-1; j>=0; j--) 
						if ((form.elements[j].type=='checkbox') && (form.elements[j].value.indexOf(sMask)>0)) {
							if (form.elements[j].name=='PG_AS_M') {
								aPgMElement = form.elements[j]; break;
							}
							else
								if (!form.elements[j].checked) { aAllMChecked = false; }
						}
					for(var j=i+1; j<form.elements.length; j++) 
						if ((form.elements[j].type=='checkbox') && (form.elements[j].value.indexOf(sMask)>0)) {
							if (form.elements[j].name=='AS') 
								if (!form.elements[j].checked) {
									aAllMChecked = false; break;
								}
								else;
							else break;
						}
					if (aAllMChecked && aPgMElement) aPgMElement.checked = true;

					pageAllElementChecker(i, sMask);
				}
				return;
			}
}
function markPageAss(thePageID)
{
	var form = document.forms[0];

	for (var i=0; i<form.elements.length; i++)
		if (form.elements[i].type=='checkbox')
			if (form.elements[i].value==thePageID) {
				var sMask = getMask(thePageID);
				if (sMask == null) return;
				if (!form.elements[i].checked){
					for(var j=i-1; j>=0; j--) 
						if ((form.elements[j].type=='checkbox') && (form.elements[j].value.indexOf(sMask)>0))
							if (form.elements[j].name=='PG_AS_ALL') {
								form.elements[j].checked = false; break;
							}
				}
				else {
					pageAllElementChecker(i, sMask);
				}
				return;
			}
}
function markMPageAss(thePageID)
{
	var form = document.forms[0];

	for (var i=0; i<form.elements.length; i++)
		if (form.elements[i].type=='checkbox')
			if (form.elements[i].value==thePageID) {
				var sMask = getMask(thePageID);
				if (sMask == null) return;
				for(var j=i+1; j<form.elements.length; j++)
					if (isMaskedCheckbox(form.elements[j], sMask))
						if (form.elements[j].name=='AS') form.elements[j].checked = form.elements[i].checked;
						else break;
				if (!form.elements[i].checked){
					for(var j=i-1; j>=0; j--) 
						if (isMaskedCheckbox(form.elements[j], sMask))
							if (form.elements[j].name=='PG_AS_ALL') {
								form.elements[j].checked = false; break;
							}
				}
				else {
					pageAllElementChecker(i, sMask);
				}
				return;
			}
}
function markAllPageAss(thePageID)
{
	var form = document.forms[0];

	for (var i=0; i<form.elements.length; i++)
		if (form.elements[i].type=='checkbox')
			if (form.elements[i].value==thePageID) {
				var sMask = getMask(thePageID);
				if (sMask == null) return;
				for(var j=i+1; j<form.elements.length; j++) 
					if ((form.elements[j].type=='checkbox') && (form.elements[j].value.indexOf(sMask)>0))
						if ((form.elements[j].name=='PG_AS_M') || (form.elements[j].name=='AS') || (form.elements[j].name=='PG_AS')){
							form.elements[j].checked = form.elements[i].checked;
						}
						else return;
				return;
			}
}