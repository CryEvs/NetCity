$(document).ready(function() {
	$("input[name$='_MASK']").each(function() {
		var maskedInput = $(this);
		var hiddenName = this.name.substr(0, this.name.length - 5);
		var hiddenInput = $("input[type='hidden'][name='" + hiddenName + "']");
		maskedInput.inputmask();
		maskedInput.change(function() { hiddenInput.val(maskedInput.inputmask("unmaskedvalue")); });
	});
});