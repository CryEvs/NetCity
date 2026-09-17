var Pagination = (function() {
	/**
	 * @param {} options 
	 *	url					- url для загрузки данных
	 *	container			- объект-контейнер в рамках которго будут размещены следующие блоки: а) верхняя страничная лента, б) блок контента, в) нижняя страничная лента
	 *	context				- объект с данными запроса для загрузки данных
	 *	render				- функция рендеринга блока контента из объекта ответа
	 *	postRender			- функция обратного вызова по завершению рендеринга
	 *	requestFieldName	- наименование поля объекта запроса, в которое будет помещаться информация о постраничном листании (опциональное, по умолчанию "PageData")
	 *	responseFieldName	- наименование поля объекта ответа сервера, из которого будет считываться нформация о постраничном листании (опциональное, по умолчанию "PageData")
	 *	preloadPage			- дополнительный набор действий, который необходимо выполнить при смене страницы
	 * @returns {} 
	 */
	function constructor(options) {
		this.url = options.url;
		this.container = options.container;
		this.context = options.context;
		this.render = options.render;
		this.postRender = options.postRender;
		this.requestFieldName = options.requestFieldName || 'pageData';
		this.responseFieldName = options.responseFieldName || 'pageData';
		this.preloadPage = options.preloadPage;
	}

	function checkJson(response) {
		var htmlResponse = response.responseText;

		if ((htmlResponse && htmlResponse[0] === "{") || response[0] === "{") {
			if (!htmlResponse) {
				htmlResponse = response;
			}

			var jsonResponse = JSON.parse(htmlResponse);

			if (jsonResponse.message) {
				$.show.error(jsonResponse.message);
			}

			return true;
		}

		return false;
	}

	constructor.prototype.showPreloader = function () {
		var container = arguments[0] || this.container;
		
		container.html('<div style="position: relative;">' +
							'<span class="content-page-preloader" id="preloader" ng-hide="ready"><span>Пожалуйста, подождите...</span></span>' +
						'</div>');
	};

	constructor.prototype.addBlocks = function() {
		this.container.html('<div class="page-selection-top"></div>');
		this.container.append('<div class="page-content"></div>');
		this.container.append('<div class="page-selection-bottom"></div>');
	};

	/**
	 * Первичная загрузка данных
	 * @returns {} 
	 */
	constructor.prototype.init = function () {
		var pageContent;

		var self = this;

		this.showPreloader();

		var changePage = function(event, pageNum) {
			if (self.preloadPage) {
				self.preloadPage();
			}
			if (self.page === pageNum) {
				return;
			}
			self.page = pageNum;
			$('.page-selection-top, .page-selection-bottom').hide();
			self.showPreloader(pageContent);

			self.loadPage(pageNum - 1).then(function(response) {
				var html = self.render(response);
				pageContent.html(html);

				if (typeof (self.postRender) == 'function') {
					self.postRender();
				}

				$('.page-selection-top, .page-selection-bottom').show();
			});
		};

		this.loadPage(0).then(function(response) {
			self.addBlocks();
			self.pagesCount = response[self.responseFieldName].totalPages;
			self.page = 1;

			pageContent = $(".page-content");

			if (self.pagesCount > 1) {
				var paginationOptions = {
					total: self.pagesCount,
					page: self.page,
					maxVisible: 20
				};

				$('.page-selection-top, .page-selection-bottom').bootpag(paginationOptions)
					.on("page", changePage);
			}

			pageContent.html(self.render(response));

			if (typeof (self.postRender) == 'function') {
				self.postRender();
			}
		});
	};

	/**
	 * Загрузка страницы
	 * @param {} pageNum 
	 * @returns {} 
	 */
	constructor.prototype.loadPage = function (pageNum) {
		var self = this;

		this.context[this.requestFieldName] = {
			page: pageNum,
			pageSize: this.recordsCount
		};

		return jsSubmit({
			action: self.url,
			dataType: 'json',
			contentType: 'application/json',
			data: self.context,
			showProcessing: false,
			method: 'POST',
			defaultErrorHandling: false,
			onError: function(response) {
				self.container.html('');

				if (!checkJson(response)) {
					$.show.error(language.Generic.Common.kUnexpErr);
				}
			}
		});
	};

	constructor.prototype.getPagesCount = function() {
		return this.pagesCount;
	};

	constructor.prototype.setRecordsOnPage = function (recordsCount) {
		if (!arguments.length && !arguments[0]) {
			return this.recordsCount;
		}
		
		this.recordsCount = recordsCount;
	};

	return constructor;
})();