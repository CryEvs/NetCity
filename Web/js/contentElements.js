(function ($) {
	$.fn.contentElementsTree = function (options) {
		var selected = this;

		var defaultDynaTreeOptions = {
			onDeactivate: function (node) {
				$("#echoActive").text("-");
			},
			onPostInit: function (isReloading, isError) {
				var treeElements = this.$tree.contents().children();
				
				if (treeElements.length == 1) {
					this.$tree.append(language.Generic.Curriculum.kSubjectNotHaveContentElementsInCurrYear);
				}
			},
			onRender: function (node, nodeSpan) {
				var anchor = $(nodeSpan).find("a.dynatree-title");
				var text = anchor.text();
				if (text.length > 80) {
					anchor.text(text.substr(0, 80) + '...');
				}
			},
			autoCollapse: true,
			checkbox: true,
			selectMode: 3,
			strings: {
				loading: language.Generic.Common.kLoad,
				loadError: language.Generic.Common.kLoadError
			}
		};

		var invokeDynaTree = function (index) {
			var elem = selected[index];
			$(elem).dynatree($.extend(defaultDynaTreeOptions, options));
		};

		return selected.each(invokeDynaTree);
	};

	$.fn.reloadElementsTree = function (childs) {
		var selected = this;
		selected.dynatree({ children: childs });
		selected.dynatree("getTree").reload();
	};
})(jQuery);