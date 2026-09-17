(function ($) {
	/*===============================================Plugin params=====================================*/
	var methods = {
		// инициализация плагина
		init: function (params) {
			var _currCtx;
			var defaultOptions = {
				isDrawOption: function(item, currID) {
					return true;
				},
				decorateOption: function(item, option) {

					return option;
				},
				decorateSelect: function (selectEl, ctx) {
					return selectEl;
				},
				onChange: function(rowId, newVal) {
				},
				items: []
			};

			// при многократном вызове функции настройки будут сохранятся, и замещаться при необходимости
			var options = $.extend(defaultOptions, params);

			var _onChangeBaseHandler = function (ctx) {
				dataWereChanged = true;
				ctx.linkElem = _buildLink(ctx);
				ctx.inputElem.val(ctx.selectElem.val());//ИЗМЕНЯЕМ VALUE НА ЗНАЧЕНИЕ ВЫБРАННОГО УРОКА
				ctx.container.append(ctx.linkElem);
				ctx.selectElem.remove();
				ctx.linkElem.focus();
				_currCtx = null;
				options.onChange($(ctx.inputElem).data("id"), ctx.selectElem.val());
			};

			var _onClickBaseHandler = function (ctx) {
				dataWereChanged = true;
				if (_currCtx) {
					_onChangeBaseHandler(_currCtx);
				}
				_currCtx = ctx;

				ctx.selectElem = _buildSelect(ctx.inputElem.attr("name"), ctx.inputElem.val(), ctx);
				ctx.selectElem.change(function () {
					_onChangeBaseHandler(ctx); //Навешиваем событие на созданный html элемент
				});
				ctx.container.append(ctx.selectElem);

				ctx.container.append($(this).children());//Добавляем hidden поля к селекту

				ctx.linkElem.remove();
				ctx.selectElem.focus();
			};

			//Отрисовывает SELECT
			var _buildSelect = function (name, currId, ctx) {
				var selectElem = $("<select class=\"form-control\"></select>")
					//.attr("name", name)
					.attr("id", "noUsages");

				for (var i = 0; i < options.items.length; i++) {
					var item = options.items[i];
					if (options.isDrawOption(item, currId)) {
						var option = _baseBuildOption(item, currId);
						selectElem.append(option);
					}
				}
				options.decorateSelect(selectElem, ctx);
				return selectElem;
			};

			var _baseBuildOption = function (item, currId) {
				var option;
				if (item.Id == currId) {
					option = $("<option selected=\"selected\"></option>").val(item.Id).text(item.Name);
				} else {
					option = $("<option></option>").val(item.Id).text(item.Name);
				}
				option = options.decorateOption(item, option);
				return option;
			};

			var _buildLink = function (ctx) {
				var resultLink = $("<a></a>")
					.attr("href", "javascript:void(0)")
					.attr("name", "chosen");
				
				resultLink.append(ctx.selectElem.find("option:selected").html());
				resultLink.click(function () {
					_onClickBaseHandler(ctx);
				});
				return resultLink;
			};

			for (var i = 0; i < this.length; i++) {
				var currInputElem = $(this[i]);
				var currContainer = currInputElem.parent();
				var defLink = $("<a></a>")
					.attr("href", "javascript:void(0)")
					.attr("id", "chose");
				var currInputVal = currInputElem.val();
				var j=0;
				if (currInputVal>0){
				for (var j = options.items.length-1; j >0 ; j--) {
					if (options.items[j].Id == currInputVal)
						break;
				}}
				defLink.append(options.items[j].Name);
				currContainer.append(defLink);
				(function () {
					var ctx = { container: currContainer, linkElem: defLink, inputElem: currInputElem };

					defLink.click(function () {
						_onClickBaseHandler(ctx);
					});
				})();
			}

			return this;
		}
	};
	/*===============================================End Plugin Params=====================================*/

	/*===============================================Start JQUERY Plugin=====================================*/

	$.fn.DynamicCombo = function (method) {
		// немного магии
		if (methods[method]) {
			// если запрашиваемый метод существует, мы его вызываем
			// все параметры, кроме имени метода прийдут в метод
			// this так же перекочует в метод
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			// если первым параметром идет объект, либо совсем пусто
			// выполняем метод init
			return methods.init.apply(this, arguments);
		} else {
			// если ничего не получилось
			$.error('Метод "' + method + '" не найден в плагине jQuery.initLessonsPlugin');
		}
	};
	/*===============================================End JQUERY Plugin=====================================*/
})(jQuery);