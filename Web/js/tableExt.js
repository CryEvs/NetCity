(function ($) {
	jQuery.fn.addCheckAllRow = function (options) {
		var selected = this;
		options = $.extend({
			checkAllsRowNum: 2, // - from 1
			hint: language.Generic.Common.kCheckUncheckAll
		}, options);

		var addCheckAll = function (tableIndex) {
			var elTable = selected[tableIndex];
			if (elTable == undefined)
				return;

			var sellCount = elTable.rows[0].cells.length;
			var arrHeaderChecks = new Array(sellCount);
			$.each(arrHeaderChecks, function (index, value) {
				var checkBoxesState = 0;
				var elTDsWithChkBx = $("td:nth-child(" + (index + 1) + "):has(input:checkbox)", elTable);
				if (elTDsWithChkBx.length > 0) {
					var elTDsWithChkBxChecked = $("td:nth-child(" + (index + 1) + "):has(input:checkbox:checked)", elTable);
					if (elTDsWithChkBx.length == elTDsWithChkBxChecked.length)
						checkBoxesState = 2;
					else
						checkBoxesState = 1;
				}
				arrHeaderChecks[index] = checkBoxesState;
			});
			var isAnyCheckBox = 0;
			$.each(arrHeaderChecks, function (index, value) {
				isAnyCheckBox += value;
			});

			if (isAnyCheckBox > 0) {
				// add common check/uncheck row
				var row = $("<tr></tr>");
				$.each(arrHeaderChecks, function (index, value) {
					var cell = $("<th></th>");
					if (value == 0)
						cell.html("&nbsp;");
					else {
						var chkBox = $("<input />").attr("type", "checkbox").attr("name", "chkBox" + index).attr("title", options.hint);
						if (value == 2)
							chkBox.prop("checked", true);

						chkBox.change(function () {
							$("td:nth-child(" + (index + 1) + ") input:checkbox", elTable).prop("checked", $(this).is(":checked"));
						});

						cell.append(chkBox);
					}
					row.append(cell);
				});

				if (options.checkAllsRowNum > elTable.rows.length)
					$("tbody", elTable).append(row);
				else
					$(elTable.rows[options.checkAllsRowNum - 1]).before(row);
			}
		};

		return selected.each(addCheckAll);
	};


	$(document).ready(function() {
		$("table.with-check-all").addCheckAllRow();
	});


	$.fn.navigateInputs = function (options, dataChangedFunc) {
		var selector = this;
		options = $.extend({
			specKeys: [],
			//specKeysHandler должен возвращать true (для перехода на следующий инпут) или false
			specKeysHandler: function (elem, key) { },
			getCellInputOptions: function (elem) {
				return {
					maxMark: 5,
					minMark: 2,
					maxLength: 1
				};
			},
			defaultVertical: true,
			//timeOut: 100,
			getNextInput: function (elem, elemSelector, step, x) {
				var row = $(elem).closest("tr");
				if (x) {
					var allElements = $(elemSelector, row.parentNode);
					var elemIndex = allElements.index(elem);
					var nextElemIndex = elemIndex + step;
					if (allElements.length > 0 && allElements[nextElemIndex]) {
						return allElements[nextElemIndex];
					}
				} else {
					var elemIndex = $(elemSelector, row).index(elem);
					var tableRows = $("tr", row.parentNode);

					var nextRowIndex = row.index() + step;

					while(nextRowIndex < tableRows.length){
						var nextRow = tableRows[nextRowIndex];
						var nextRowElements = $(elemSelector, nextRow);
						if (nextRowElements.length > 0 && nextRowElements[elemIndex]) {
							return nextRowElements[elemIndex];
						}
						nextRowIndex = nextRowIndex + step;
					}
				}
			}
		}, options);

		var doAction = function (action) {
			if (options.timeOut) {
				setTimeout(action, options.timeOut);
			} else {
				action();
			}
		};

		var GetIntWhich = function (value) {
			if (value >= 0 && value < 10) {
				return value + 48;
			}
			return 57;
		};

		var move = function (obj, step, x) {
			if (!obj) {
				return;
			}
			step = step || 1;
			var nextInput = options.getNextInput(obj, selector, step, x);
			if (nextInput) {
				nextInput.focus();
				return nextInput;
			}
			return obj;
		};

		var keyUpHandler = function (e) {
			e = e || window.event;
			var keyCode = e.keyCode || e.which;
			var markInput = e.target;

			switch (keyCode) {
				case 89:
				case 121:
				case 1053:
				case 1085: if (options.specKeysHandler(markInput)) {
						moveNext(markInput, !options.defaultVertical)
					};
					break;
				//case 38: moveBack(markInput); break;
				case 13: moveNext(markInput, !options.defaultVertical); break;
				//case 40: moveNext(markInput); break;
				case 37:
					if (e.ctrlKey) {
						moveBack(markInput, true);
					}
					break;
				case 39:
					if (e.ctrlKey) {
						moveNext(markInput, true);
					}
					break;
				default: return false;
			};
		};

		var keyDownHandler = function (e) {
			e = e || window.event;
			var keyCode = e.keyCode || e.which;
			var markInput = e.target;

			if(keyCode === 38 || keyCode === 40){
				switch (keyCode) {
					case 38: moveBack(markInput); break;
					case 40: moveNext(markInput); break;
				}
				return false;
			}
			
			if (e.ctrlKey) {
				switch (keyCode) {
					case 86:
						return false;
				}
			}
		};

		//проверка на возможность продолжения ввода.
		var mayContinueInput = function (testValue, cellInputOptions) {
			if (testValue.toString().length >= cellInputOptions.maxLength) {
				return false;
			}
			return testValue <= parseInt(cellInputOptions.maxMark.toString().substr(0, cellInputOptions.maxLength - 1));
		};

		var setVal = function (input, value) {
			input.value = value;
			$(input).trigger("change");
			if (dataChangedFunc) {
				dataChangedFunc();
			} else {
				dataChanged();
			}
			
		};

		var setValAndMoveNext = function (input, value) {
			setVal(input, value);
			moveNext(input, !options.defaultVertical);
		};
		
		var moveBack = function (input, x) {
			doAction(function () {
				var prev = move(input, -1, x);
				var endInput = prev.value.length;
				setInputSelection(prev, 0, endInput);
			});
		};

		var moveNext = function (input, x) {
			doAction(function () {
				var next = move(input, 1, x);
				var endInput = next.value.length;
				setInputSelection(next, 0, endInput);
			});
		};

		var getInputSelection = function (inputBox) {
			if ("selectionStart" in inputBox) { //gecko  
				return {
					start: inputBox.selectionStart,
					end: inputBox.selectionEnd
				};
			}

			//and now, the blinkered IE way  
			var bookmark = document.selection.createRange().getBookmark();
			var selection = inputBox.createTextRange();

			selection.moveToBookmark(bookmark);

			var before = inputBox.createTextRange();
			before.collapse(true);
			before.setEndPoint("EndToStart", selection);

			var beforeLength = before.text.length;
			var selLength = selection.text.length;
			return {
				start: beforeLength,
				end: beforeLength + selLength
			};
		};

		var setInputSelection = function(inputBox, start, end) {
			if (start > end) {
				start = end;
			}
			if ("selectionStart" in inputBox) { //gecko  
				inputBox.setSelectionRange(start, end);
				return true;
			} else {
				r = inputBox.createTextRange();
				r.collapse(true);
				r.moveStart('character', start);
				r.moveEnd('character', end - start);
				r.select();
				return true;
			}
		};

		var valueInMarkRange = function (testValue, cellInputOptions) {
			return (testValue >= cellInputOptions.minMark || cellInputOptions.minMark > 0) && testValue <= cellInputOptions.maxMark;
		};

		var baseNavKeys = [37, 39];
		var baseEditKeys = [8, 46];

		var keyPressHandler = function (e) {
			//обработка стрелок не выполняется
			var oMark = e.target;
			var keyCode = e.keyCode || e.which;
			var cellInputOptions = options.getCellInputOptions(oMark);
			var unprintable = e.charCode === 0;

			//обработчики спец. клавиш
			if ((oMark.value.length == cellInputOptions.maxLength || oMark.value.length == 0)) {
				if (options.specKeys && options.specKeys.length > 0) {
					if ($.inArray(keyCode, options.specKeys) > -1) {
						if (options.specKeysHandler(oMark)) {
							moveNext(oMark);
							return false;
						}
					}
				}
			}
			//case с одной цифрой
			if (cellInputOptions.maxLength == 1) {
				if (keyCode >= GetIntWhich(cellInputOptions.minMark) && keyCode <= GetIntWhich(cellInputOptions.maxMark)) {
					setValAndMoveNext(oMark, String.fromCharCode(keyCode));
				} else {
					//необходимо только для FF. в остальных браузерах нажатие на данные кнопки обрабатывается только в keyup
					//отбираются только непечатаемые символы
					if (unprintable) {
						if ($.inArray(keyCode, baseNavKeys) > -1) {
							return true;
						} else if ($.inArray(keyCode, baseEditKeys) > -1) {
							if (dataChangedFunc) {
								dataChangedFunc();
							} else {
								dataChanged();
							}
							return true;
						}
					}
				}
				return false;
			} else if (keyCode >= 48 & keyCode <= 57 & cellInputOptions.maxLength > 1) {
				//сложные случаи с несколькими цифрами
				if (dataChangedFunc) {
					dataChangedFunc();
				} else {
					dataChanged();
				}
				//текущее значение без учета вводимого символа
				var currVal = oMark.value;
				var selInfo = getInputSelection(oMark);
				var rightCursor = (selInfo.start != 0);
				//склеивание нового значения. Если было что-то выделено - замена выделенного
				//символ вставляется после курсора, т.е. можно вставить как в начало так и в конец.
				var testValue = currVal.substring(0, selInfo.start) + String.fromCharCode(keyCode) + currVal.substring(selInfo.end, currVal.length);
				testValue = parseInt(testValue);
				if (testValue == 0) {
					if (cellInputOptions.minMark == 0) {
						//если 0 разрешен то вставляем.
						setValAndMoveNext(oMark, 0);
					}
					return false;
				} else if (!valueInMarkRange(testValue, cellInputOptions)) {
					//если тестируемая цифра не удовлетворяет границам - отменяем ввод
					return false;
				}

				if (oMark.value == "0" && rightCursor) {
					//если текущее число 0 и курсор справа то очищаем 0
					setVal(oMark, '');
				}

				setVal(oMark, testValue);
				if (!mayContinueInput(testValue, cellInputOptions)) {
					moveNext(oMark, !options.defaultVertical);
				}
				else if (selInfo.start != selInfo.end) {
					var endIndex = testValue.toString().length;
					setInputSelection(oMark, endIndex, endIndex);
				}
				return false;
			} else if (keyCode == 8 || keyCode == 0) {
				//backspace и delete
				if (dataChangedFunc) {
					dataChangedFunc();
				} else {
					dataChanged();
				}
				return true;
			} else {
				//остальные
				return false;
			}
		};

		this.on("keyup", keyUpHandler);
		this.on("keypress", keyPressHandler);
		this.on("keydown", keyDownHandler);
		this.on("onpaste", function (e) {
			e.preventDefault();
		});
	};

	$.fn.calcTotalTable = function() {
		var table = this;

		table.find('input[type=text]').on('change', function() {
			if (table.find('.sum-col').length > 0 && !$(this).hasClass('not-sum') && !$(this).parents().hasClass('not-sum')) {
				var columnInd = $(this).closest('td').index() + 1;

				var columns = table.find('tr:not([class*="not-sum"]) > td:nth-child(' + columnInd + '):not([class*="not-sum"]) > input[type="text"]:not([class*="not-sum"])');

				var columnsRes = 0;
				$.each(columns, function(index, input) {
					var $input = $(input);
					var val = str2floatVal($input.val());
					if (!isNaN(val)) {
						columnsRes += val;
					}
				});

				var cRes;
				cRes = columnsRes == 0 ? "" : float2str(columnsRes);

				table.find('td[class*="sum-col"]:nth-child(' + columnInd + ')').text(cRes);
			};

			if (table.find('.sum-row').length > 0 && !$(this).hasClass('not-sum')) {
				var rowId = $(this).closest('tr').index() + 1;
				var row = table.find('tr:nth-child(' + rowId + ')');

				var rowRes = 0;

				$.each(row.find('td:not([class*="not-sum"]) > input[type="text"]:not([class*="not-sum"])'), function (index, input) {
					var $input = $(input);
					var val = str2floatVal($input.val());
					if (!isNaN(val)) {
						rowRes += val;
					}
				});

				var rRes;
				rRes = rowRes == 0 ? "" : float2str(rowRes);

				table.find('\\td[class="sum-row"]:nth-child(' + rowId + ')').text(rRes);
			};
		});
	};
})(jQuery);