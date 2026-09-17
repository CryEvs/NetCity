var maxMsgLength = 160;
var msgChangeParts = "Текст превышает размер 1 смс, и он будет усечен. Продолжить?";
var msgChangeTrans = "После транслитерации текст сообщения превышает размер 1 смс, и он будет усечен. Продолжить?";

function isTransliterate() {
	return $('input[name="transliterate"]').prop("checked");
}

function useMoreParts() {
	return $('input[name="useMoreParts"]').prop("checked");
}

function changeVerify(check, msg) {
	$.when(!sendConfirm() || $.show.confirmation(msg)).then(function() {
		var value = "0";
		if (check.checked) value = "1";
		$('[name=' + check.name + 'Value]').val(value);
		return checkLength(undefined);
	}, function() {
		check.checked = !check.checked;
	});
}

function sendConfirm() {
	var text = document.getElementById('SMSText').value;
	if (calcLength(text, isTransliterate()) > getMax_one(useMoreParts())) {
		return true;
	}
	return false;
}

function getMax_one(bUseMoreParts) {
	var max, maxOne;
	var tr = isTransliterate();
	if (!tr) {
		maxOne = 67;
		max = 335; //5 parts
	}
	else {
		maxOne = 160;
		max = 800; //5 parts
	}

	if (bUseMoreParts) {
		return max;
	}
	return maxOne;
}

function checkLength(e) {
	var text = document.getElementById('SMSText').value;

	var tr = isTransliterate();
	var bUseMoreParts = useMoreParts();
	var messMaxLength = getMax_one(bUseMoreParts);
	var length = messMaxLength + 1;
	var truncated = false;

	while (length > messMaxLength) {
		length = calcLength(text, tr);
		if (length > messMaxLength) {
			text = text.substr(0, text.length - 1);
			truncated = true;
			lensms = 1;
		}
	}

	lensms = calcCountPartsSMS(length);

	if (truncated)
		document.getElementById('SMSText').value = text;

	var lenLeft = lensms * getMax_one(false) - length;
	if (lenLeft < 0)
		lenLeft = 0;

	document.Reports.msgCntLeft.value = lenLeft;
	document.Reports.msgCntSms.value = lensms;
	document.Reports.msgCneRight.value = length;

	if (length >= messMaxLength)
		return checkSymbol(e);
	return true;
}

function calcLength(text, bTransliterate) {
	var length = text.length;
	if (bTransliterate) {
		var find = text.match(/[ёжчшюяЁЖЧШЮЯ]/g);
		if (find != null) {
			length += find.length;
		}
		find = text.match(/[щЩ]/g);
		if (find != null)
			length += find.length * 2;
	}
	return length;
}

function checkSymbol(e) {
	if (e) {
		if (window.event) // IE
		{
			keynum = e.keyCode;
		}
		else if (e.which) // Firefox/Opera
		{
			keynum = e.which;
		}

		if ((keynum >= 32 && keynum <= 126) || (keynum >= 1040 && keynum <= 1103) || keynum == 1025 || keynum == 1105) {
			return false;
		}
	}
	return true;
}

function calcCountPartsSMS(length) {
	var lensms = Math.ceil(length / getMax_one(false));
	if (lensms == 0) {
		lensms = 1;
	}
	return lensms;
}

function preparemessage() {
	var text = document.getElementById('SMSText').value;
	var tr = isTransliterate();
	var count = calcCountPartsSMS(calcLength(text, tr));

	if (count > 5) {
		alert("СМС превышает максимально допустимый размер");
		return false;
	}
	if (count > 1) {
		return $.show.getConfirmation("Отправляемое смс состоит из " + count + " частей. Продолжить?");
	}
	return true;
}
