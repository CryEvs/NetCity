var arrneweo = new Array();
var arraddeo = new Array();
var control;

var arrEOTypeReasons = new Array();

var arr8EOTypeFormReasons = new Array();
arr8EOTypeFormReasons[33] = [11];

//темповый массив связей с причинами для документов о выбытии
//сделан для удобства и понятности формирования общего массива связей для всех типов документов.
var arrTempEOTypeReasons = new Array();
// Key - eoTypeID (т.е. индекс - eoTypeID)
// Value - array of itemorders for each functionality type (0 - дошкольный, 1 - школьный, 2 - ОДО, 3 - НПО)

// 2011_06_16. Для eoTypeID = [2, 6, 12] сделал причину выбытия = 25 (Другие причины)
// -1 элемент - связь причин с местом выбытия в другом городе или стране
// 0 элемент - связь причин с "пустым" местом выбытия

// 2013_09_18. Для eoTypeID = [2] для детсадов и школ сделал причину выбытия = 2 (в другие ОО) 
// (2 - это ITEMORDERNO из таблицы USERINFOLISTITEMS, где PARAMETERID=1027 - это для причин выбытия)
arrTempEOTypeReasons[-1] = [[2,10,3],[-3],[-3],[-3]];
arrTempEOTypeReasons[0] = [[10,15,-4,19,25],[8,9,10,12,13,14,15,16,18,19,25,-4],[-3],[8,9,10,12,13,14,15,16,18,19,25,-4]];
arrTempEOTypeReasons[1] = [[2],[null],[-3],[null]];
arrTempEOTypeReasons[2] = [[2], [2], [-3], [null]];
arrTempEOTypeReasons[3] = [[null], [null], [-3], [null]];
arrTempEOTypeReasons[4] = [[null],[null],[-3],[null]];
arrTempEOTypeReasons[5] = [[2], [2], [-3], [2]];
arrTempEOTypeReasons[6] = [[25], [25], [-3], [25]];
arrTempEOTypeReasons[7] = [[null],[2],[-3],[-3]];
arrTempEOTypeReasons[8] = [[null],[4, arr8EOTypeFormReasons ],[-3],[4, arr8EOTypeFormReasons ]];
arrTempEOTypeReasons[9] = [[null],[[-2,25]],[-3],[-2,25]];
arrTempEOTypeReasons[10] = [[null],[11],[-3],[11]];
arrTempEOTypeReasons[11] = [[3],[3],[-3],[3]];
arrTempEOTypeReasons[12] = [[25], [25], [-3], [25]];
arrTempEOTypeReasons[13] = [[10],[10],[-3],[10]];
arrTempEOTypeReasons[14] = [[null],[2],[-3],[-3]];
arrTempEOTypeReasons[15] = [[null],[7, 6],[-3],[7, 6]];
arrTempEOTypeReasons[16] = [[null],[5],[-3],[5]];
arrTempEOTypeReasons[17] = [[null],[null],[-3],[-3]];
arrTempEOTypeReasons[18] = [[null],[null],[-3],[-3]];
arrTempEOTypeReasons[19] = [[null],[null],[-3],[-3]];

// 1 - kDocType_OUT
arrEOTypeReasons[1] = arrTempEOTypeReasons;

//аналогичный темповый массив связей с причинами для документов о выпуске
var arrTempEOTypeReasons = new Array();
arrTempEOTypeReasons[-1] = [[2,3],[5,33],[null],[33]];
arrTempEOTypeReasons[0] = [[2,3],[12,13,16,33],[null],[12,13,16,33]];
arrTempEOTypeReasons[1] = [[null],[null],[null],[null]];
arrTempEOTypeReasons[2] = [[2],[null],[null],[null]];
arrTempEOTypeReasons[3] = [[null],[null],[null],[null]];
arrTempEOTypeReasons[4] = [[null],[null],[null],[null]];
arrTempEOTypeReasons[5] = [[2],[null],[null],[null]];
arrTempEOTypeReasons[6] = [[2],[null],[null],[null]];
arrTempEOTypeReasons[7] = [[2],[null],[null],[null]];
arrTempEOTypeReasons[8] = [[null],[4],[null],[4]];
arrTempEOTypeReasons[9] = [[null],[null],[null],[null]];
arrTempEOTypeReasons[10] = [[11],[6,7,11],[null],[11]];
arrTempEOTypeReasons[11] = [[3],[3],[null],[null]];
arrTempEOTypeReasons[12] = [[[2,11]],[2],[null],[null]];
arrTempEOTypeReasons[13] = [[[2,3,11]],[null],[null],[null]];
arrTempEOTypeReasons[14] = [[null],[6,7],[null],[null]];
arrTempEOTypeReasons[15] = [[null],[6,7],[null],[null]];
arrTempEOTypeReasons[16] = [[null],[5],[null],[5]];
arrTempEOTypeReasons[17] = [[null],[33],[null],[33]];
arrTempEOTypeReasons[18] = [[null],[33],[null],[33]];
arrTempEOTypeReasons[19] = [[null],[null],[null],[null]];

// 1 - kDocType_GRADUATE
arrEOTypeReasons[6] = arrTempEOTypeReasons;

// Как было по-старому, для выпуска из 11 класса
arrTempEOTypeReasons_11_min1_1 = [5, 33];
arrTempEOTypeReasons_11_0_1 = [12, 13, 16, 33];
arrTempEOTypeReasons_11_5_1 = [null];
arrTempEOTypeReasons_11_6_1 = [null];
arrTempEOTypeReasons_11_7_1 = [null];

// Для выпуска из 9 класса - добавляем 2 (В другие ОО)
arrTempEOTypeReasons_9_min1_1 = [2, 5, 33];
arrTempEOTypeReasons_9_0_1 = [2, 12, 13, 16, 33];
arrTempEOTypeReasons_9_5_1 = [2];
arrTempEOTypeReasons_9_6_1 = [2];
arrTempEOTypeReasons_9_7_1 = [2];

function correctArrEOTypeReasons(nStep) {
	if (nStep == 2) {
		arrEOTypeReasons[6][-1][1] = arrTempEOTypeReasons_9_min1_1;
		arrEOTypeReasons[6][0][1] = arrTempEOTypeReasons_9_0_1;
		arrEOTypeReasons[6][5][1] = arrTempEOTypeReasons_9_5_1;
		arrEOTypeReasons[6][6][1] = arrTempEOTypeReasons_9_6_1;
		arrEOTypeReasons[6][7][1] = arrTempEOTypeReasons_9_7_1;
	}
	else {
		arrEOTypeReasons[6][-1][1] = arrTempEOTypeReasons_11_min1_1;
		arrEOTypeReasons[6][0][1] = arrTempEOTypeReasons_11_0_1;
		arrEOTypeReasons[6][5][1] = arrTempEOTypeReasons_11_5_1;
		arrEOTypeReasons[6][6][1] = arrTempEOTypeReasons_11_6_1;
		arrEOTypeReasons[6][7][1] = arrTempEOTypeReasons_11_7_1;
	}
}

//расшифровка itemorder`ов
//  >0 - явно указанный itemorder
//	-1 - все не связанные itemorder с EOType
//  -2 - все без itemorder + причина 'В другие ОО'
//  -3 - все причины
//  -4 - все без itemorder


function editStudentMoveInfo(studentid, button, bwithadding)
{
	if( nDocType == 2 )
	{
		$('button[onclick*="setEOEqualDepartEO"]').hide();
		$('button[onclick*="setEOEqualDepartEO"]', button.parentNode.parentNode.parentNode).show();
	}
	$('tr[id=NS_MOVDOC_EDITING_ROW]').css('background-color', '');
	$('tr[id=NS_MOVDOC_EDITING_ROW]').removeAttr('id');
	$(button.parentNode.parentNode.parentNode).css('background-color', '#FCFFD2');
	button.parentNode.parentNode.parentNode.id = 'NS_MOVDOC_EDITING_ROW';

	if (control) {
		if (control.studentid() == studentid) return;
		control.asSpan();
	}
	// ниже значение true - разрешает добавлять новый MOV_EOS при создании документа о движении,
	// зачение false - запрещает нужно для Тольятти для остальных true!
	control = ctrl_constructor(studentid, bwithadding);
}

function setHiddenInputValue( select )
{
	if( (nDocType == 1 || nDocType == 6) && select.id.indexOf('REASON') != -1 )
	{
		var hiddenInput = $('input[type=hidden][id=' + select.id.replace('_SELECT','') + ']')[0];
		hiddenInput.value = select.value;
	}
	else
	{
		var hiddenInput = $('input[type=hidden][id^=EOS_]',select.parentNode)[0];
		hiddenInput.value = (select.value == -2) ? -1 : select.value;
		var elem = select.options[ (select.value == -2) ? 0 : select.selectedIndex];
		if( elem.getAttribute('IsOtherState') != null )
			$(hiddenInput).attr('IsOtherState', '').removeAttr('IsOtherCityInState').removeAttr('IsInCity');
		else if( elem.getAttribute('IsOtherCityInState') != null )
			$(hiddenInput).attr('IsOtherCityInState', '').removeAttr('IsOtherState').removeAttr('IsInCity');
		else
			$(hiddenInput).attr('IsInCity', '').removeAttr('IsOtherState').removeAttr('IsOtherCityInState');
	}
}

function isAddMovEos( EOSSelect )
{
	if( EOSSelect.value == -2 )
		AddEO();
}

var Wnd = null;
function AddEO(){
	//setDBBusy();
	//remove links
	arrneweo = new Array();
	arraddeo = new Array();
	var form = document.MainForm;
	var winOptions = { url: "/asp/blank.htm", name: "add_eo", specs: "status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no", winChild: Wnd };
	windowOpen( winOptions );
	Wnd = winOptions.winChild;
	form.target = "add_eo";
	DoSubmit(form, "/asp/Administration/CreateOU.asp");
	form.target = "_self";
}

var reasonValidator = (function(){
	var _itemOrderSet;
	var _validate = function( reasonIO )
	{
		if ($.inArray(reasonIO, _itemOrderSet) != -1)
			return true;
		if( $.inArray( -1 , _itemOrderSet) != -1 )
		{
			var ret = true;
			//если причина не связана с типами ОО
			$(arrEOTypeReasons[nDocType]).each(function(index, itemData) {
				if( $.inArray( reasonIO, itemData[index][nFuncTypeArrayIndex]) != -1 )
					ret = false;
			});
		}
		else if( $.inArray( -2 , _itemOrderSet) != -1 ) 
			//если причина без itemorder`а либо причина 'другая ОО'
			return ( !reasonIO || reasonIO == 2 );
		else if( $.inArray( -3 , _itemOrderSet) != -1 ) 
			//любая причина
			return true;
		else if( $.inArray( -4 , _itemOrderSet) != -1 ) 
			//любая причина без itemorder
			return !reasonIO;
		else
			return false;
	}
	
	return {
		validateByOrderSet : function( reasonIO )
		{
			return _validate( reasonIO );
		},
		validateByEOId : function ( reasonIO, EOId )
		{
			var moveoarr = $.grep(arrMOVEOSes, function (a) { return a[0] == EOId; });
			var eotypeid = moveoarr[0][3];
			var itemorders = arrEOTypeReasons[nDocType][eotypeid][nFuncTypeArrayIndex];
			this.setItemOrderSet(itemorders);
			return this.validateByOrderSet( reasonIO );
		},
		setItemOrderSet : function ( ios )
		{
			_itemOrderSet = ios;
		}
	}
})();

var ctrl_constructor = function(studentIdArg, bwithadding){
	var _conrolRow = $('#NS_MOVDOC_EDITING_ROW');
	var _studentId = studentIdArg;
	var _eoHiddenInput = $('#EOS_' + _studentId, _conrolRow);
	var _reasonHiddenInput = $('#REASON_' + _studentId, _conrolRow);
	var _eoid = _eoHiddenInput.val();
	var _reasonid = _reasonHiddenInput.val();
	
	///////////////////////////////////Place Selector
	var _place = (function(eolist){
		var __comboBox = $('<select>').addClass('form-control input-sm');
		var __EOList = eolist;
		var __currPlaceEOList;
		
		var __init = function()
		{
			__currPlaceEOList = __EOList;
		}
		
		__init();
		
		return {
			placeEOList : function()
			{
				return __currPlaceEOList;
			},
			remove : function()
			{
				__comboBox.remove();
			}
		}
		
	})(arrMOVEOSes);
	
	///////////////////////////////////MoveEO Selector
	var _eo = (function () {
		// флаг для избежания рекурсии при обработке события change у селекта, true - значит ОУ выбрано пользователем с помощью селекта
		var __selectEOByManual = false;

		var __comboOnPage = false;
		var __span = $('#EOS_SPAN_' + _studentId, _conrolRow);
		var __spanOnPage = (__span.length > 0);
		var __input = $('#EOS_' + _studentId, _conrolRow);
		var __value = __input.val();

		var __comboBox = $('<select>').addClass('form-control');

		//оборачивание элемента в блок для удобного удаления из DOM-а
		var __wrapper = $('<div id="search-eo" />');
		__wrapper.append(__comboBox);
		__wrapper.hide();
		__wrapper.insertBefore(__input);

		var __sourceList = _place.placeEOList();
		var __selectedOption;

		//view mode:
		//0 - select
		//1 - span
		var __vmode;

		var __getComboText = function () {
			if (__selectedOption)
				return __selectedOption.text();
			else
				return __comboBox.find('option:selected').text();
		}

		var __fillData = function(data) {
			var __eoList = _.map(data, function(_arr) {
				return { id: _arr[0], text: _arr[1].replace(/&quot;/g, '"') };
			});

			if (bwithadding) {
				__eoList.push({ id: -2, text: language.Generic.ServAdmin.kAddOU });
			}

			__comboBox.select2({
				data: __eoList,
				width: '100%',
				language: "ru",
				matcher: function (search, text) {
					if (text.text === language.Generic.ServAdmin.kAddOU) {
						return text;
					}

					return $.fn.select2.defaults.defaults.matcher.apply(null, arguments);
				}
			});

			__select(__value);
			if (__selectedOption.length == 0) {
				var __first = __comboBox.children().first().val();
				__select(__first);
				__input.val(__first);
			}
		};

		var __initEO = function() {
			if (__comboBox.length == 0) {
				__comboBox = $('<select>').addClass('form-control');

				var __wrapper = $('<div id="search-eo"/>');
				__wrapper.append(__comboBox);
				__wrapper.hide();
				__wrapper.insertBefore(__input);
			}
			if (__span.length == 0) __span = $('<span>');

			__fillData(__sourceList);

			__comboBox.on('change', __onchange);

			__vmode = (__comboBox.children().size() < 2) ? 1 : 0;
		};

		var __onchange = function() {
			if (__comboBox.val() == -2) {
				AddEO();
			} else {
				__selectEOByManual = true;
				__selectedOption = __comboBox.find('option:selected');
				_eo.value(__comboBox.val());
			}
			
			dataChanged();
			bEOOrReasonChanged = (typeof (bEOOrReasonChanged) != 'undefined');
		};

		var __drawEOAsSpan = function() {
			var text = __getComboText();
			__span.text(text.length > 0 ? text : ' ');

			if (__comboOnPage) $('#search-eo').remove();
			if (!__spanOnPage) __span.insertBefore(__input);

			__spanOnPage = true;
			__comboOnPage = false;
		};

		var __drawEO = function() {
			if (__vmode == 0) {
				if (__spanOnPage) __span.remove();
				if (!__comboOnPage) $('#search-eo').show();

				__spanOnPage = false;
				__comboOnPage = true;
			} else if (__vmode == 1)
				__drawEOAsSpan();
		};

		var __select = function(val) {
			__comboBox.select2('val', val);
			__selectedOption = __comboBox.find('option:selected');
		};

		var __getEO = function (id) {
			var res = _.find(__sourceList, function(value) { return value[0] == id });

			if (typeof res != 'undefined') {
				var __eo = {
					id: res[0],
					text: res[1],
					eotypeid: res[3],
					eoformid: res[4],
					eoOSType: res[5]
				};

				return __eo;
			} else {
				return null;
			}
		};

		var __getSelectedEO = function () {
			if (__selectedOption) {
				var __id = __selectedOption.val();
				var __eo = __getEO(__id);

				if (__eo != null) return __eo;
			}

			return -1;
		};

		__initEO();
		__drawEO();

		return {
			value: function() {
				if (arguments.length == 1) {
					__value = arguments[0];
					if (!__selectEOByManual) {
						__select(__value);
					}
					__input.val(__value);

					if (nDocType == 1 || nDocType == 6) _reason.syncWithEO();
					_ostype.syncWithEO();

					__selectEOByManual = false;
				} else
					return __value;
			},
			eotypeid: function () {
				var __eo = __getSelectedEO();

				if (typeof __eo == 'object') {
					return __eo.eotypeid;
				}

				return null;
			},
			eoformid: function () {
				var __eo = __getSelectedEO();

				if (typeof __eo == 'object') {
					return __eo.eoformid;
				}

				return null;
			},
			eoOSType: function () {
				var __eo = __getSelectedEO();

				if (typeof __eo == 'object') {
					return __eo.eoOSType;
				}

				return -1;
			},
			text: function() {
				return __getComboText();
			},
			asSpan: function() {
				__drawEOAsSpan();
			},
			setSource: function(source) {
				__sourceList = source;
			},
			syncWithPlace: function() {
				__initEO();
				__drawEO();

				this.value(__comboBox.val());
				if (nDocType == 1 || nDocType == 6) {
					if (__sourceList.length > 0)
						_reason.syncWithEO();
					else
						_reason.asSpan();
				}
			},
			addeo: function(eo) {
				__sourceList.push(eo);
				__comboBox.append($('<option>').attr('value', eo[0]).append(eo[1]));
				__comboBox.find('option[value="-2"]').remove();
				this.value(eo[0]);
			},
			reset: function () {
				//TODO выбрать пустой option
				this.value(__sourceList[0][0]);

				if (nDocType == 1 || nDocType == 6) _reason.syncWithEO();

				_ostype.syncWithEO();
			}
		}
	})();
	
	///////////////////////////////////OutSide Type Selector
	var _ostype = (function( typeList ){
		var __comboBox = $('<select>').change(__onchange).addClass('form-control input-sm');
		var __comboOnPage = false;
		var __span = $('#OST_SPAN_' + _studentId, _conrolRow);
		var __spanOnPage = (__span.length > 0);
		var __input = $('#OST_' + _studentId, _conrolRow);
		var __value = __input.val();
		var __sourceList = typeList;
		var __filteredList;
		var __vmode;
		var __selectedOption;
		
		var __onchange = function()	{
			_ostype.value( __comboBox.val() );
			dataChanged();
			if ( typeof(bEOOrReasonChanged) != 'undefined' )
				bEOOrReasonChanged = true;
		}
		
		var __getComboText = function()
		{
			if( __selectedOption )
				return __selectedOption.text();
			else
				return __comboBox.find('option:selected').text();
		}
		
		var __initTypesList = function()
		{
			var eoOSType = _eo.eoOSType();
			if( eoOSType == -1 )
				__filteredList = __sourceList;
			else if( eoOSType >= 4 )
				__filteredList = $.grep(__sourceList, function (elem) { return elem[0] >= 4; });
			else
				__filteredList = $.grep(__sourceList, function (elem) { return elem[0] == eoOSType; });
		}
		
		var __fillTypes = function( data )
		{
			__comboBox[0].options.length = 0;
			$(data).each(function(index, itemData) { 
				__comboBox[0].options.add( new Option(itemData[1],itemData[0]) );
			});
			__selectedOption = __comboBox.find('option[value=' + __value + ']').prop('selected', true);
			if ( __selectedOption.length == 0 )
			{
				__selectedOption = __comboBox.children(':first').prop('selected', true);
				if( __selectedOption.length == 0 )
					__comboBox.append(__selectedOption = $('<option>').attr('value',-1).append('нет типов'));
				__value = __selectedOption.val();	
				__comboBox.val(__value);
				__input.val(__value);
			}
		};
		
		var __initOST = function() {
			__comboBox = $('<select>').change(__onchange).addClass('form-control input-sm');
			if( __span.length == 0 )
				__span = $('<span>');
			__initTypesList();
			__fillTypes( __filteredList );
			__vmode = (__comboBox.children().size() < 2) ? 1 : 0;
		};
		
		var __drawOSTAsSpan = function()
		{
			__span.text( __getComboText() );
			if( __comboOnPage )
				__comboBox.remove();
			if( !__spanOnPage )
				__span.insertBefore( __input );
			__spanOnPage = true;
			__comboOnPage = false;
		};
		
		var __drawOST = function()
		{
			if ( __vmode == 0 )
			{
				if( __spanOnPage )
					__span.remove();
				if( !__comboOnPage )
					__comboBox.insertBefore( __input );
				__spanOnPage = false;
				__comboOnPage = true;
			}
			else if ( __vmode == 1 )
				__drawOSTAsSpan();
		};
		
		__initOST();
		__drawOST();
					
		return {
			value : function() {
				if ( arguments.length == 1 )
				{
					__value = arguments[0];
					__comboBox.val(__value);
					__selectedOption = __comboBox.find('option:selected');
					__input.val(__value);
				}
				else
					return __value;
			},
			syncWithEO : function() {
				if (__span.length == 0) __span = $('<span>');

				__comboBox.change(__onchange); 	
				__initTypesList();
				__fillTypes(__filteredList);
				__vmode = (__comboBox.children().size() < 2) ? 1 : 0;
				__drawOST();
			},
			asSpan : function() {
				__drawOSTAsSpan();
			}
		}
	})( arrOSTypes );
	
	
	///////////////////////////////////Reason Selector
	if( nDocType == 1 || nDocType == 6 )
	var _reason = (function( reasonlist ){
		var __comboBox = $('<select>').change(__onchange).addClass('form-control input-sm');
		var __comboOnPage = false;
		var __span = $('#REASON_SPAN_' + _studentId, _conrolRow);
		var __spanOnPage = (__span.length > 0);
		var __input = $('#REASON_' + _studentId, _conrolRow);
		var __value = __input.val();
		var __defaultValue = $('#defreason', _conrolRow).val();
		var __defaultIO = $('#defreason', _conrolRow).attr('io') > 0 ? parseInt($('#defreason', _conrolRow).attr('io')) : null;
		var __sourceList = reasonlist;
		var __vmode;
		var __selectedOption;
		
		var __onchange = function()	{
			_reason.value( __comboBox.val() );
			dataChanged();
			if ( typeof(bEOOrReasonChanged) != 'undefined' )
				bEOOrReasonChanged = true;
		}
		
		var __getComboText = function()
		{
			if( __selectedOption )
				return __selectedOption.text();
			else
				return __comboBox.find('option:selected').text();
		}
		
		var __initItemOrderSet = function()	{
			var itemOrderSet; 
			if ( arrEOTypeReasons[nDocType][_eo.eotypeid()] && arrEOTypeReasons[nDocType][_eo.eotypeid()][nFuncTypeArrayIndex] )
				if( !$.isArray( arrEOTypeReasons[nDocType][_eo.eotypeid()][nFuncTypeArrayIndex] ) )
					itemOrderSet = $.makeArray(arrEOTypeReasons[nDocType][_eo.eotypeid()][nFuncTypeArrayIndex]);	
				else
					itemOrderSet = arrEOTypeReasons[nDocType][_eo.eotypeid()][nFuncTypeArrayIndex];	
			else
				itemOrderSet = $.makeArray();
			reasonValidator.setItemOrderSet(itemOrderSet);
		}
		
		var __fillReasons = function( data )
		{
			__comboBox[0].options.length = 0;
			$(data).each(function(index, itemData) { 
				if( typeof(itemData) != 'undefined' && reasonValidator.validateByOrderSet(itemData[2]) )
					__comboBox[0].options.add( new Option(itemData[1],itemData[0]) );
			});
			__selectedOption = __comboBox.find('option[value=' + __value + ']').prop('selected', true);
			if ( __selectedOption.length == 0 )
			{
				if( reasonValidator.validateByOrderSet(__defaultIO) )
					__selectedOption = __comboBox.find('option[value=' + __defaultValue + ']').prop('selected', true);
				else
					__selectedOption = __comboBox.children(':first').prop('selected', true);
				if( __selectedOption.length == 0 )
					__comboBox.append(__selectedOption = $('<option>').attr('value',-1).append('нет причин'));
				__value = __selectedOption.val();	
				__comboBox.val(__value);
				__input.val(__value);
			}			
		};
		
		var __initReasons = function() {
			__comboBox = $('<select>').change(__onchange).addClass('form-control input-sm');
			if( __span.length == 0 )
				__span = $('<span>');
			__initItemOrderSet();
			__fillReasons( __sourceList );
			__vmode = (__comboBox.children().size() < 2) ? 1 : 0;
		};
		
		var __drawReasonAsSpan = function()
		{
			__span.text( __getComboText() );
			if( __comboOnPage )
				__comboBox.remove();
			if( !__spanOnPage )
				__span.insertBefore( __input );
			__spanOnPage = true;
			__comboOnPage = false;
		};
		
		var __drawReasons = function()
		{
			if ( __vmode == 0 )
			{
				if( __spanOnPage )
					__span.remove();
				if( !__comboOnPage )
					__comboBox.insertBefore( __input );
				__spanOnPage = false;
				__comboOnPage = true;
			}
			else if ( __vmode == 1 )
				__drawReasonAsSpan();
		};
		
		__initReasons();
		__drawReasons();
					
		return {
			value : function() {
				if ( arguments.length == 1 )
				{
					__value = arguments[0];
					__comboBox.val(__value);
					__selectedOption = __comboBox.find('option:selected');
					__input.val(__value);
				}
				else
					return __value;
			},
			syncWithEO : function() {
				if( __span.length == 0 )
					__span = $('<span>');
				__comboBox.change(__onchange); 	
				__initItemOrderSet();
				__fillReasons( __sourceList );
				__vmode = (__comboBox.children().size() < 2) ? 1 : 0;
				__drawReasons();
			},
			asSpan : function() {
				__drawReasonAsSpan();
			}
		}
	})(arrReasonOptions);
	//////////////////////////////
	
	return {
		asSpan : function()
		{
			_place.remove();
			_eo.asSpan();
			_ostype.asSpan();
			if( nDocType == 1 || nDocType == 6)
				_reason.asSpan();
		},
		studentid : function()
		{
			return _studentId;
		},
		eoid : function()
		{
			if (arguments.length == 1)
				_eo.value(arguments[0]);
			else
				return _eo.value();
		},
		reasonid : function()
		{
			if ( arguments.length == 1 )
				_reason.value(arguments[0]);
			else
				return _reason.value();
		},
		addeo : function( eo )
		{
			_eo.addeo( eo );
		},
		reseteo : function()
		{
			_eo.reset();
		}
	}
}