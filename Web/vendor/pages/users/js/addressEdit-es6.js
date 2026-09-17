"use strict";

var addressInfo;

function extractContext(selector) {
	return selector && selector.data && selector.data.context || null;
}

function getDataFromController(selectorName) {
	return extractContext(controller.selectors[selectorName]);
}

function getTextFromController(selectorName) {
	const selector = controller.selectors[selectorName];
	return selector && selector.data && selector.data.text || null;
}

function RemoveAddress() {
	var confirms = [];

	var forAll = false;

	var addressTitle = window.strAddressType === "H" ? language.Generic.SetupSchoolUI.kLiving : language.Generic.SetupSchoolUI.kRegistered;

	var confirmText = language.Generic.SetupSchoolUI.kForAllConfirm_1 + addressTitle + language.Generic.SetupSchoolUI.kForAllConfirm_2;
	confirmText += language.Generic.Common.kRemove.toLowerCase() + language.Generic.SetupSchoolUI.kForAllConfirm_3;
	confirmText += language.Generic.Common.kRemove.toLowerCase() + language.Generic.SetupSchoolUI.kForAllConfirm_4;

	var checkFiasAddressNeighbours = addressInfo && addressInfo.neighbours && addressInfo.neighbours.length;
	if (window.neighbours || checkFiasAddressNeighbours) {
		confirms.push(extDeferred.wrapAlwaysPromise(extDeferred.wrapPromise($.show.getConfirmation(confirmText), function() { forAll = true; })));
	}

	confirms.push($.show.getConfirmation(language.Generic.SetupSchoolUI.kDelConfirm));

	extDeferred.when(confirms).then(function() {

		var params = { status: window.strAddressType, forAll: forAll };
		jsSubmit({
			action: `/webapi/addresses/users/${window.strEditUserID}`,
			queryData: params,
			method: "delete"
		}).then(function(){
			Back();
		});

	});
}

function checkAddress(addressEditRequest) {
	var region = addressEditRequest.region;
	if (!region) {
		alert("Заполните поле 'Регион'");
		return false;
	}

	var city = addressEditRequest.city;
	if (!city && region.type != "Город") {
		alert("Заполните поле 'Населенный пункт'");
		return false;
	}

	var building = addressEditRequest.building;
	if (!building || !building.name || !building.name.trim()) {
		alert(language.Generic.SetupSchoolUI.kEnterHouse);
		return false;
	}

	return true;
}

function canSubmit(data){
	var form = document.UserInfo;

	if (window.mode === "fias") {
		if (!checkAddress(data)) {
			return false;
		}
	} else {
		if(form.House.value === "") {
			alert(language.Generic.SetupSchoolUI.kEnterHouse);
			form.House.focus();
			return false;
		}
	}

	var confirms = [];

	if (window.mode !== "fias" && window.bAvailabilityOfStreet) {
		if(!form.LocationID || form.LocationID.value < 1) {
			var question = language.Generic.SetupSchoolUI.kIsNoLocation; //'Адрес без улицы? ' //
			var recommend = language.Generic.SetupSchoolUI.kNeedLocation; //'Если улица есть - нажмите "Нет", затем ' //
			recommend += language.Generic.SetupSchoolUI.kChooseLocation.toLowerCase() + '.';
			confirms.push($.show.getConfirmation(question+language.Generic.Common.kMsgAreYouSure + ' \n' +recommend ));
		}
	}

	var hZipCode = $("input[name=hZipCode]").val();

	var zipCode;
	var withNeighbours;
	if (window.mode === "fias") {
		zipCode = controller.zipElement.val();
		withNeighbours = addressInfo && addressInfo.neighbours && addressInfo.neighbours.length > 0;
	} else {
		zipCode = form.ZipCode.value;
		withNeighbours = window.neighbours;
	}

	if (withNeighbours) {
		window.forAll = false;
		var addressTitle = window.strAddressType === "H" ? language.Generic.SetupSchoolUI.kLiving : language.Generic.SetupSchoolUI.kRegistered;

		var confirmText = language.Generic.SetupSchoolUI.kForAllConfirm_1 + addressTitle + language.Generic.SetupSchoolUI.kForAllConfirm_2;
		confirmText += language.Generic.Common.kChange.toLowerCase() + language.Generic.SetupSchoolUI.kForAllConfirm_3;
		confirmText += language.Generic.Common.kChange.toLowerCase() + language.Generic.SetupSchoolUI.kForAllConfirm_4;

		confirms.push(extDeferred.wrapAlwaysPromise(extDeferred.wrapPromise($.show.getConfirmation(confirmText), () => { window.forAll = true })));
	}

	if(zipCode === "") {
		confirms.push(extDeferred.wrapPromise($.show.getConfirmation(language.Generic.SetupSchoolUI.kEnterZipCode), () => {}, () => { form.ZipCode.focus(); }));
	}

	if (zipCode.length > 10) {
		Info(language.Generic.SetupSchoolUI.kErrZipCodeLength, () => form.ZipCode.focus());
		return false;
	}

	if (hZipCode !== "") {
		if (hZipCode !== zipCode){
			confirms.push(extDeferred.wrapPromise($.show.getConfirmation(language.Generic.SetupSchoolUI.kChangeZipCode), () => {}, () => { form.ZipCode.focus(); }));
		}
	}

	let isTmpAddress = $('#isTmpAddres').is(":checked");
	if (isTmpAddress) {
		let dataElement = $('[name="expireDateTempAddress"]');
		let expireDateTempAddress = str2date(dataElement.val());
		if(!expireDateTempAddress){
			Info(language.Generic.Constructor.kInvalidDate, () => dataElement.focus());
			return false;
		}
	}

	return confirms;
}

/*
function Confirmation(message, okHandler, cancelHandler){
	let dialog = $.show.getConfirmation(message);
	return extDeferred.wrapPromise(dialog, okHandler, cancelHandler);
}
*/
function Info(message, okHandler){
	let infoMessage = $.show.alert(message);
	return infoMessage.then(okHandler);
}

function SaveAddress() {
	var data;
	if (window.mode === "fias") {
		data = {
			region: getDataFromController("region"),
			district: getDataFromController("district"),
			city: getDataFromController("city"),
			street: getDataFromController("street"),
			building: getDataFromController("building"),

			flat: controller.flatElement.val(),
			corp: controller.corpElement.val(),
			index: controller.zipElement.val(),

			addressType: window.strAddressType
		}

		if (data.street && !data.street.id) {
			//если улица заполнена не из фиас
			data.street.name = getTextFromController("street");
		}
		if (data.building && !data.building.id) {
			//если дом заполнен не из фиас
			data.building.name = getTextFromController("building");
		}

		if (!checkAddress(data)) {
			return;
		}

	} else {
		const form = document.forms.UserInfo;

		var regionId = $("[name='Country']", form).val();
		var districtId = $("[name='Province']", form).val();
		var cityId = $("[name='City']", form).val();
		var locationId = $("[name='LocationID']", form).val() || "-1";
		var locationName = "";

		if(locationId === "-1"){
			locationId = null;
			locationName = "нет";
		}

		var house = $("input[name='House']", form).val();
		var flat = $("input[name='Room']", form).val();
		var corp = $("input[name='Corp']", form).val();
		var index = $("input[name='ZipCode']", form).val();

		data = {
			street: { internalId: locationId, name: locationName },
			city: { internalId: cityId },
			district: { internalId: districtId },
			region: { internalId: regionId },
			building: { name: house},
			flat: flat,
			corp: corp,
			index: index,
			addressType: window.strAddressType
		}
	}

	if (window.strAddressType !== "H") {
		let isTmpAddress = $('#isTmpAddres').is(":checked");
		data.isTempAddress = isTmpAddress;
		if (isTmpAddress) {
			data.expireDateTempAddress = str2date($('[name="expireDateTempAddress"]').val());
		}
	}

	extDeferred.when(canSubmit(data)).then(() => {

		var queryData = {};

		if (window.forAll) {
			queryData.forAll = true;
		}

		var processing = $.show.processing();

		jsSubmit({
				action: `/webapi/addresses/users/${window.strEditUserID}`,
				queryData: queryData,
				data: data,
				contentType: "application/json"
			})
			.then(
				() => { window.dataWereChanged = false; Back() },
				() => processing.close()
			);
	});
}

var controller;

// Контроллер внутри которого решаются взаимные зависимости полей
class AddressSelectorController{
	constructor(zipcodeElement, flatElement, corpElement){
		this.zipElement = zipcodeElement;
		this.flatElement = flatElement;
		this.corpElement = corpElement;

		this.rangs = ["region", "district", "city", "street", "building"];
		this.selectors = {};
	}

	// Обработчик изменения элмента формы
	change(selector, data){
		var type = selector.settings.contentType;
		var rang = this.getRang(selector);

		_.chain(this.selectors)
			.filter((s) => s.rang > rang)
			.map((s) => s.selector.element)
			.value()
			.forEach((e) => e.val(null).trigger("change").trigger("select2:select"));

		this.selectors[type] = {
			selector: selector,
			data: data,
			rang: rang
		}

		if (data) {
			this.zipElement.val(data.context.zip);
		} else {
			this.zipElement.val(null);
		}
	}

	// Получить самый нижний уровень адреса из доступных (регион -- самый высокий уровень)
	getLowerData(currentElement) {
		var rang = this.getRang(currentElement);
		return _.chain(this.selectors)
			.filter((s) => s.rang < rang)
			.filter((s) => s.data)
			.sortBy((s) => s.rang)
			.map((s) => s.data)
			.last().value();
	}

	// Метод получения уровня адреса чем больше число,- тем точнее адрес
	getRang(selector){
		var type = selector.settings.contentType;
		return this.rangs.indexOf(type);
	}

	getDeltaRang(selector) {
		var rang = this.getRang(selector);
		var oldRang = _.chain(this.selectors)
			.filter((s) => s.rang < rang)
			.filter((s) => s.data)
			.sortBy((s) => s.rang)
			.map((s) => s.rang)
			.last().value();
		return rang - oldRang;
	}
}

const processReferences = (list) => {
	let dictionary = {}
	const refElement = (element) => {
		if(!element) return;
		if(element.$ref) {
			return dictionary[element.$ref];
		}
		if(element.$id)
			dictionary[element.$id] = element;
		element.parents = references(element.parents);
		return element;
	}

	const references = (elements) => {
		if(!elements) return;
		let result = [];
		for(let index in elements){
			let element = elements[index];
			result.push(refElement(element));
		}

		return result;
	}

	return references(list);
}

class AddressSelector{
	constructor(element, settings) {
		if (!settings) {
			throw "must have settings";
		}
		if (!settings.controller) {
			throw "must have controller (class AddressSelectorController)";
		}
		if (!settings.ajax.url) {
			throw "service url not set";
		}

		var ctx = this;
		this.controller = settings.controller;
		this.element = element;
		element.link = this;

		// Получаем наименование поля и готовим его для использования в placholder
		var id = element.attr("id");
		this.label = $(`label[for="${id}"]`)
			.text().toLowerCase()
			.replace(/а$/, "у"); // фикс окончания слова "Улица"

		// Слияние настроек переданных в конструктор и настроек по умолчанию
		this.defaultSettings = this.getDefaultSettings();
		this.settings = Object.assign({}, settings, this.defaultSettings);
		this.settings.ajax = Object.assign({}, settings.ajax, this.settings.ajax, this.defaultSettings.ajax);
		element.select2(this.settings); //Инициализируем элемент в качестве select2

		var changeFunction = function(event){
			var data = event.params && event.params.data;
			if (data && data.unknown) {
				$("#unknown-fias").removeClass("hide");
			} else {
				$("#unknown-fias").addClass("hide");
			}
			ctx.controller.change(ctx, data);
		}

		// Добавляем обработчик события выбора элмента select2
		element.on("select2:select", changeFunction);
		element.on("select2:unselecting", changeFunction);
	}

	// Настройки по умолчанию
	getDefaultSettings () {
		var ctx = this;

		let contentType = $(ctx.element).attr("data-kladr-type");

		const wrapTemplate = (data) => {
			if(!(data.parents && data.parents.length)) return data.text;

			let parent = data.parents[data.parents.length - 1];
			let result = parent.contentType == data.contentType
				? `${parent.fullName}, ${parent.name}`
				: parent.fullName;
			return `<div>${data.text}</div><small><i>${result}</i></small>`;
		}

		const format = (state, a, b, c) => {
			if (state.unknown) {
				return $(`<span>${state.text} <i>неизвестный ФИАС элемент</i> </span>` );
			}

			return state.parents && state.parents.length
				? $(wrapTemplate(state))
				: state.text;
		}

		var defaultSettings = {
			limit: 20,
			contentType: contentType,
			minimumInputLength: 1,
			language: "ru",
			allowClear: true,
			placeholder: `Введите ${ctx.label}`,
			templateResult: format,
			ajax: {
				delay: 250,
				cache: true,
				type: "GET",
				dataType: "json",
				escapeMarkup: (markup) => markup,
				params: {
					contentType: "application/json"
				},

				// Метод формирования запроса
				data: function (params) {
					ctx.delta = ctx.controller.getDeltaRang(ctx);

					var query = {
						"limit": ctx.settings.limit * bounds(ctx.delta, 1, 3),
						"contentType": ctx.settings.contentType,
						"query": params.term,
						"actual": true,
						"withParent": true,
						"byRef": true
					};

					var lastChoise = ctx.controller.getLowerData(ctx);
					if(lastChoise){
						if (lastChoise.unknown) {
							query.contentType = "unknown";
						} else {
							query.parentType = lastChoise.contentType;
							query.parentId = lastChoise.id;
							query[lastChoise.contentType+"Id"] = lastChoise.id;
						}
					}
					return query;
				},

				// Метод обработки ответа
				processResults: (data, query) => {
					var preresult = processReferences(data.result);
					if (ctx.delta > 1) {
						var rang = ctx.controller.getRang(ctx);
						var contentFilterType = ctx.controller.rangs[rang - 1];

						var filter = (o) => {
							if (!o.parents) {
								return true;
							}
							var result = o.parents
								.filter((p) => p.currentStatus === 0 && p.contentType === contentFilterType)
								.length === 0;
							return result;
						};
						preresult = preresult.filter(filter);
					}

					var mappedResults = preresult.map(prepeareData);

					if (mappedResults.length === 0 && contentType === "building") {
						mappedResults.push({id: query.term, text: query.term, context: {}, unknown: true });
					}

					const count = (x) => x.parents && x.parents.length || 0;
					return {
						results: mappedResults.sort((a, b) => count(a) - count(b))
					}
				}
			}
		}
		return defaultSettings;
	}
}

function bounds(value, min, max) {
	value = Math.min(value, min);
	return Math.max(value, max);
}

/*Показать полное наименование для представления*/
function showFullName(o){
	o.text = o.context.fullName;
	return o;
}

function prepeareData(o) {
	var text;
	if (o.contentType === "region") {
		text = `${o.code.substr(0, 2)} ${o.name} ${o.typeShort}`;
	} else {
		text = o.type + " " + o.name;
	}
	if (o.currentStatus > 0) {
		//todo. уточнить неактуальный статус
		//todo. вместо текста стилизовать option
		text += " (адрес неактуальный)";
	}

	return { // Представление пунктов выбора
		id: o.id,
		text: text, // + ' (' + o.fullName + ')',
		context: o,
		contentType: o.contentType,
		parents: o.parents
	}
}

function DrawExpiryDate(draw) {
	DrawElement(draw, $('#expireDateTempAddressBox'));
}

function DrawElement(draw, element) {
	if (draw) {
		element.show();
	} else {
		element.hide();
	}
}

// Инициализация элементов на странице
var initAddressService = function (addressServiceUrl) {
	var $zip = $("#zipcode"),
		$region = $("#region"),
		$district = $("#district"),
		$city = $("#city"),
		$street = $("#street"),
		$building = $("#building"),
		$flat = $("#flat"),
		$corp = $("#corp");

	controller = new AddressSelectorController($zip, $flat, $corp);

	var settings = {
		ajax: {
			url: addressServiceUrl
		},
		controller: controller
	}

	// Инициализация select2
	var	region = new AddressSelector($region, settings),
		district = new AddressSelector($district, settings),
		city = new AddressSelector($city, settings),
		street = new AddressSelector($street, settings),
		building = new AddressSelector($building, settings);

	let address = {
		zip: $zip,
		region: $region,
		district: $district,
		city: $city,
		street: $street,
		building: $building,
		flat: $flat,
		corp: $corp,

		settings: {
			url: settings.ajax.url
		}
	}

	return  jsSubmit({ action: `/webapi/addresses/users/${window.strEditUserID}`, method: "get", data: { addressType: window.strAddressType } })
		.then(function(userAddress)
		{
			if (!userAddress) {
				DrawExpiryDate(false);
				return null;
			}

			if (userAddress.addressId) {
				$("#edit-btns-block").removeClass("hide");
			}

			DrawExpiryDate(userAddress.isTempAddress);

			addressInfo = userAddress;
			if (addressInfo.neighbours && addressInfo.neighbours.length) {
				let addressTitle = window.strAddressType === "H"
					? language.Generic.SetupSchoolUI.kLiving
					: language.Generic.SetupSchoolUI.kRegistered;

				let message = language.Generic.SetupSchoolUI.kSameAddress + " " + addressTitle + ":";
				_.each(addressInfo.neighbours, function(neighbour) { message += `<br /> - ${neighbour.name}`; });
				message = `<div class="alert alert-warning" role="alert">${message}</div>`;

				$("#addressFormBlock").prepend($(message));
			}

			if(userAddress.fiasId && userAddress.fiasId != '00000000-0000-0000-0000-000000000000'){
				return InitAddressByAOGuid(userAddress.fiasId, address)
				.then((result) => SetBuilding($building, result, settings.ajax.url, userAddress.building, userAddress.kladrCode))
				.then(() => {
					$corp.val(userAddress.corp);
					$flat.val(userAddress.flat);
					if (addressInfo.unknown) {
						$("#unknown-fias").removeClass("hide");
					}
				});
			}else{
				// Старая логика на случай когда ФИАС id не указан

				// Пытаемся заполнить адрес
				return jsSubmit({ action: `/webapi/addresses/users/${window.strEditUserID}`, method: "get", data: { addressType: window.strAddressType } })
				.then(function(userAddress) {
					if (!userAddress) {
						DrawExpiryDate(false);
						return null;
					}

					if (userAddress.addressId) {
						$("#edit-btns-block").removeClass("hide");
					}

					DrawExpiryDate(userAddress.isTempAddress);

					var exceptions = ['Москва', 'Санкт-Петербург'];
					if(exceptions.indexOf(userAddress.city) >= 0){
						userAddress.city = null;
					}

					addressInfo = userAddress;

					if (addressInfo.neighbours && addressInfo.neighbours.length) {
						let addressTitle = window.strAddressType === "H" ? language.Generic.SetupSchoolUI.kLiving : language.Generic.SetupSchoolUI.kRegistered;
						let message = language.Generic.SetupSchoolUI.kSameAddress + " " + addressTitle + ":";
						_.each(addressInfo.neighbours, function(neighbour) { message += `<br /> - ${neighbour.name}`; });
						message = `<div class="alert alert-warning" role="alert">${message}</div>`;
						$("#addressFormBlock").prepend($(message));
					}

					var triggerData; // переменная для хранения последнего успешного выбора
					var regionName = PrepareRegion(userAddress.region);

					//Функция возвращает функцию, которая принимает в качестве параметра результат выполнения SetAddress и сохраняет его в элементе element
					// В предыдущих ревизиях использовались длинные строки с вызовов SetAddress с повторяющимися параметрами
					var processResult = function(element, value, altMinusProc) {
						return function(result) {
							return SetAddress(triggerData = result || triggerData, element, settings.ajax.url, value, userAddress.kladrCode, true, altMinusProc || false);
						}
					}

					var regionKladr = userAddress.kladrCode.substr(0, 2);

					// По очереди заполняем поля
					return SetAddress(null, $region, settings.ajax.url, regionName, regionKladr, true, false)
						.then(processResult($district, userAddress.district))
						.then(processResult($city, userAddress.city))
						.then(processResult($street, userAddress.street))
						.then(processResult($building, userAddress.building, true))
						.then(function() {
							$corp.val(userAddress.corp);
							$flat.val(userAddress.flat);
							if (addressInfo.unknown) {
								$("#unknown-fias").removeClass("hide");
							}
						});
				});
			}
		});
}

$(document).ready(function() {
	if (window.mode === "fias") {
		var processing = $.show.processing();

		$.get("/webapi/settings/externalAddressServiceUrl")
			.then((serviceUrl) => initAddressService(serviceUrl), function() { console.error("Не удалось получить URI сервиса адресов") })
			.always(function() { processing.close(); });

		// блокирует индекс на редактирование, если задан дом, иначе разрешает
		$("#building").on("select2:select", function(e) {
			// индекс
			var zipElem = $("#zipcode");

			var data = e.params && e.params.data;
			if (!data || data.unknown) {
				zipElem.prop("disabled", false);
			} else {
				zipElem.prop("disabled", true);
			}
		});
	}else{
		DrawExpiryDate($('#isTmpAddres').is(":checked"));
	}
});

function resolve(sourceKladr, candidates, value) {
	var source = sourceKladr.replace(/0*$/, "");
	var compare = function(kladr) { return kladr.substr(0, source.length) === source; };
	var results = candidates.filter(function(c) { return c.code && compare(c.code) });
	if (results.length > 0) return results[0];
	return candidates.filter(function(c) { return (value === c.name) })[0];
}

function SetOption(select2Element, data) {
	// Формируем пункт выбора для select
	var option = new Option(data.text, data.id, true, true);
	// Добавляем его в select и вызываем обработчик изменений
	select2Element.append(option).trigger("change");

	// Вызываем обработчик выбора select2
	select2Element.trigger({
		type: "select2:select",
		params: {
			data: data
		}
	});
}

function SetBuilding(element, location, url, value, kladr) {
	if (!value) return null;

	// Метод исправления бага с не цифрами в запросе
	let minusHandler = (str) => /(\d*)/.exec(str)[0]

	var query = {
		"limit": 20, // Баг Тольятти Улица Офицерская дом 2 в списке 20й
		"contentType": "building",
		"query": minusHandler(value), // Фикс бага при поиске строки со знаком '-'
		"actual": true
	};

	query.parentType = location.contentType;
	query.parentId = location.id;
	query[location.contentType + "Id"] = location.id;

	return AddressRequest(url,query)
		.then(function(result){
			result = result && result.result;

			result = result.length === 1
				? result[0]
				: resolve(kladr, result, value);

			// Данные для select2
			var optionData;
			if (result) {
				optionData = prepeareData(result);
				addressInfo.unknown = false
			} else {
				if (value.toLowerCase() === "нет") {
					return null;
				}
				optionData = { id: value, text: value, unknown: true, context: {} };
				addressInfo.unknown = true;
			}

			SetOption(element, optionData);
			return optionData;
		});
}

// Задать значение element по fiasAddressElement (значение родитель)
function SetAddressByFiasId(element, fiasAddressElement){
	let optionData = prepeareData(fiasAddressElement)
	SetOption(element, optionData)
}

// Инициализировать адреса по AOGuid
function InitAddressByAOGuid(aoGuid, address){
	let query = {
		"fiasaoguid": aoGuid,
		"withParent": true,
		"actual": false,
		"byRef": true
	};
	const url = address.settings.url;
	return AddressRequest(url, query)
		.then((response) => {
			let result = (response && processReferences(response.result))[0];
			if(!result){
				console.error('Сервис ФИАС вернул пустой ответ');
				return;
			}
			let parents = result.parents;
			parents
				.filter((p) => p.currentStatus === 0)
				.forEach(parent => SetAddressByFiasId(address[parent.contentType], parent));
			SetAddressByFiasId(address[result.contentType], result);
			return result;
		});
}

// Выполнить запрос адреса по url с параметрами query
function AddressRequest(url, query){
	return $.ajax({
		type: "GET",
		params: {
			contentType: "application/json"
		},
		url: url,
		data: query,
		error: function (jqXhr, textStatus, errorThrown) {
			if (jqXhr.status === 0) {
				console.info("Сервер адресов вернул пустой ответ");
			}
			alert("Произошла ошибка связи с сервисом адресов ФИАС. Попробуйте зайти на эту страницу позже или воспользуйтесь обычным режимом ввода.");
		}
	});
}

// Старая логика на случай отсутствия ФИАС id

function PrepareRegion(regionName) {
	if (!regionName) return null;
	// Приведение название региона к значению, по которому можно что-нибудь найти
	var patterns = [
		/\s?а?обл\.?$/i,
		/\s?АО\s?/i,
		/^Г\.?\s/,
		/^респ\.?\s/i,
		/\sкрай\.?$/i,
		/\sАвтономный округ.*$/i,
		/\sреспублика.*$/i
	];

	let result = regionName;
	patterns.forEach(function(pattern) { return result = result.replace(pattern, "") });
	return result;
}

function SetAddress(lastChoise, element, url, value, kladr, all, altMinusProc) {
	if (!value) return null;

	const contentType = $(element).attr("data-kladr-type");
	// Метод исправления бага с "-"
	let minusHandler = altMinusProc
		? (str) => {
			let index = str.indexOf("-");
			if(index < 0)
				return str;
			else
				return str.substr(0, index);
		}
		: (str) => str.replace("-", " ")
	var query = {
		"limit": 20, // Баг Тольятти Улица Офицерская дом 2 в списке 20й
		"contentType": contentType,
		"query": minusHandler(value) // Фикс бага при поиске строки со знаком '-'
		//"withParent": element.link.isParent
	};

	if (!all) {
		query.actual = true;
	}

	if (lastChoise) {
		if (lastChoise.unknown) {
			query.contentType = "unknown";
		} else {
			query.parentType = lastChoise.contentType;
			query.parentId = lastChoise.id;
			query[lastChoise.contentType + "Id"] = lastChoise.id;
		}
	}

	return $.ajax({
		type: "GET",
		params: {
			contentType: "application/json"
		},
		url: url,
		data: query,
		error: function (jqXhr, textStatus, errorThrown) {
			if (jqXhr.status === 0) {
				console.info("Сервер адресов вернул пустой ответ");
			}
			alert("Произошла ошибка связи с сервисом адресов ФИАС. Попробуйте зайти на эту страницу позже или воспользуйтесь обычным режимом ввода.");
		}
	}).then(function(result){
		result = result && result.result;

		result = result.length === 1
			? result[0]
			: resolve(kladr, result, value);

		// Данные для select2
		var optionData;
		if (result) {
			optionData = prepeareData(result);
			if (contentType === "building") {
				addressInfo.unknown = false;
			}
		} else {
			if (value.toLowerCase() === "нет") {
				return null;
			}
			optionData = { id: value, text: value, unknown: true, context: {} };
			addressInfo.unknown = true;
		}

		SetOption(element, optionData);
		return optionData;
	});
}