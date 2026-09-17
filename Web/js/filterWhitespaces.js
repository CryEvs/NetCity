(function ($) {
	jQuery.filterWhitespaceString = function (str) {
		str = str.replace(/\s/g, " ");

		return $.trim(str.replace(/[ ]{2,}/g, " "));
	};

	jQuery.fn.filterWhitespace = function () {
		this.on('change', function() {
			var row = jQuery.filterWhitespaceString($(this).val());
			$(this).val(row);
		});
	};

	jQuery('.FilterWhiteSpace').filterWhitespace();
})(jQuery);