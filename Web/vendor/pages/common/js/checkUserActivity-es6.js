let CheckUserActivityPlug = (function () {
	// пользователь активен
	var userIsActive = false;
	// последнее время активности сессии на клиенте
	let clientLastAccessTime;
	// время неактивности сессии пользователя, мс
	let tokenTimeOut = appContext.tokenTimeOut;

	// идентификаторы задач
	let task1Id, task2Id;

	let opts = {
		activityInterval: 300000, // мс
		checkEndOfSessionInterval: 60000 // мс
	};

	let setUserIsActivity = function () {
		if (!userIsActive) {
			userIsActive = true;
		}
	};

	// инициализирует время последней активности сессии
	let initLastAccessTime = function () {
		let now = new Date();

		clientLastAccessTime = now;
	};

	// продлевает сессию
	let extendSession = function () {
		return jsSubmit({
			action: "/webapi/context/keepAlive?token=" + appContext.at,
			auth: false,
			method: "GET",
			defaultErrorHandling: false
		})
		.then(function (time) {
			initLastAccessTime();
		});
	};

	let detectUserActivity = function () {
		// если пользователь активен - отправить запрос на сервер и продлить сессию
		if (userIsActive) {
			let queries = [extendSession];

			extDeferred.when(queries)
				.then(function () {
					userIsActive = false;
				});
		}
	};

	// останавливает задачу setInterval
	let stopTask = function (intervalId) {
		if (intervalId) {
			clearInterval(intervalId);
		}
	};

	// останавливает выполнение задач
	let stopTasks = function () {
		stopTask(task1Id);
		stopTask(task2Id);
	};

	class TimeOutError extends Error { }

	let handleError = function (error) {
		stopTasks();

		if (error instanceof TimeOutError) {
			$.show.message(error.message, language.Generic.Common.kAttention).then(() => window.postTo({ path: "/", method: "GET" }));
		}
		else {
			$.show.error(error.message);
		}
	}

	let getIdleMs = function (lastAccessTimeDt) {
		// срез времени
		let now = new Date();
		// время простоя в мс
		let ms = now - lastAccessTimeDt; // мс

		return ms;
	};

	// проверяет попадание оставшегося времени жизни сессии в двухминутный интервал
	let checkAnxietyInterval = function (lifetime) {
		let twoMinutsMs = (2 * 60) * 1000;

		return lifetime > 0 && lifetime < twoMinutsMs;
	};

	// вычисляет оставшееся время жизни сессии
	let getLifetime = function (lastAccessTime) {
		let ms = getIdleMs(lastAccessTime);
		let lifetime = tokenTimeOut - ms;

		return lifetime;
	};

	let checkTime = function (time) {
		if (time === 0) {// для мс
			return;
		}

		if (time) {
			return;
		}

		throw new TimeOutError(language.Generic.Common.kTimeOutSessionWarn);
	};

	let showMessage = function () {

		if ($("#timeOutInfoId").is(":visible")) {
			return;
		}

		alert(language.Generic.SetupSchoolUI.kStrExpireWarning, { id: "timeOutInfoId" });
	};

	let checkServerSessionLifetime = function () {
		// убедиться, что на сервере сессия скоро подойдет к концу
		jsSubmit({
			action: "/webapi/context/lifetime?token=" + appContext.at,
			auth: false,
			method: "GET",
			defaultErrorHandling: false
		})
		.then(function (serverSessionLifetime) {
			try {
				checkTime(serverSessionLifetime);

				if (checkAnxietyInterval(serverSessionLifetime)) {
					if (userIsActive) {
						extendSession()
							.then(function () {
								userIsActive = false;
							});
					}
					else {
						showMessage();
					}
				}
			} catch (ex) {
				handleError(ex);
			}
		});
	};

	let checkSessionLifetime = function () {
		try {
			checkTime(clientLastAccessTime);

			let clientSessionLifetime = getLifetime(clientLastAccessTime);

			if (checkAnxietyInterval(clientSessionLifetime)) {
				// убедиться, что на сервере сессия скоро подойдет к концу
				checkServerSessionLifetime();
			}
		} catch (ex) {
			handleError(ex);
		}
	};

	// проверяет истечение времени жизни сессии
	let sessionExpired = function () {
		if (!clientLastAccessTime) {
			return true;
		}

		let clientIdleMs = getIdleMs(clientLastAccessTime);
		return clientIdleMs > tokenTimeOut;
	};

	let sessionExpiredWhen = function () {
		let deferred = $.Deferred();

		let isExpired = sessionExpired();
		if (isExpired) {
			// убедиться, что на сервере сессия тоже истекла
			jsSubmit({
				action: "/webapi/context/expired?token=" + appContext.at,
				auth: false,
				method: "GET",
				defaultErrorHandling: false
			})
			.then(function (expired) {
				deferred.resolve(expired);
			});
		} else {
			deferred.resolve(isExpired);
		}

		return deferred.promise();
	};

	let handleEndSession = function() {
		stopTasks();

		if ($("#timeOutInfoId").is(":visible")) {
			$("#timeOutInfoId").modal("hide");
		}

		$.show.message(language.Generic.Common.kTimeOutSessionWarn, language.Generic.Common.kAttention).then(() => window.postTo({ path: "/", method: "GET" }));
	}

	let checkEndOfSession = function () {
		sessionExpiredWhen()
			.then(function (isExpired) {
				if (isExpired) { // сессия истекла
					handleEndSession();
				} else {
					checkSessionLifetime();
				}
			});
	};

	// инициализирует выполнение задач
	let initTasks = function () {
		// задачи
		let task1 = detectUserActivity;
		let task2 = checkEndOfSession;

		initLastAccessTime();

		// запуск задач
		task1Id = setInterval(task1, opts.activityInterval);
		task2Id = setInterval(task2, opts.checkEndOfSessionInterval);

		// подписаться на события движения мыши и нажатия клавиатуры
		$(document).on("mousemove", setUserIsActivity);
		$(document).on("keypress", setUserIsActivity);
	};

	initTasks();
})();

(function(exp, name) {
	let exports;
	let exported = false;

	if (typeof module !== "undefined" && module !== null) {
		module.exports = exp;
		exported = true;
	}

	if (!(exports === undefined)) {
		exports = exp;
		exported = true;
	}

	if (!exported && typeof window !== 'undefined' && typeof name !== "undefined") {
		window[name] = exp;
	}

	if (typeof root !== 'undefined' && typeof name !== "undefined") {
		return root[name] = exp;
	}
  })(CheckUserActivityPlug);