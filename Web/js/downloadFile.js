var tryReadBlobAsJson = function (blob) {
	return new Promise(function (resolve, reject) {
		try{
			var reader = new FileReader();
			reader.onloadend = function () {
				var responseText = reader.result;
				if(!responseText){
					resolve(null);
					return;
				}
				try{
					var responseJson = JSON.parse(responseText);
					if(!responseJson){
						resolve(null)
					}
					resolve(responseJson);
				}
				catch(e){
					resolve(null);
				}
			};
			reader.readAsText(blob);
		}
		catch(e){
			return resolve(null);
		}
	});
}

export var downloadFile = function (url, options) {
	"use strict";

	if (!options) {
		options = {}
	}

	var data = null;

	if (options.data && options.method === "post") {
		options.contentype = "application/json";
		data = JSON.stringify(options.data);
	}
	 
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open(options.method || "GET", url, true);

		xhr.setRequestHeader("AT", window.appContext.at);
		xhr.setRequestHeader("responseType", "arraybuffer");
		xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
		
		xhr.responseType = "blob";

		if (options.contentype) {
			xhr.setRequestHeader("Content-type", options.contentype);
		}

		xhr.onload = function (e) {
			if (xhr.status && xhr.status >= 200 && xhr.status < 300) {
				var responseData = xhr.response;
				var filename = (options && options.filename) || decodeURIComponent(xhr.getResponseHeader("filename"));
				var mimeType = xhr.getResponseHeader("content-type");
				var blob = new Blob([responseData], { type: mimeType });

				saveAs(blob, filename);

				resolve(xhr);
			}  else if (xhr.status && xhr.status >= 500 && xhr.status < 600) {
				$.show.error("В данный момент файловое хранилище, на котором расположен файл, недоступно. Пожалуйста, повторите попытку позднее. (" + xhr.status + ")");
				reject(xhr);
			}
			else {
				tryReadBlobAsJson(xhr.response).then(function(response){
					if (response && !response.message && response.status == 404) {
						$.show.error(language.Generic.Common.kAttachmentFileNotFound);	
					} else {
						$.show.error(response && response.message || language.Generic.Common.kUnexpErr);
					}
				})
				reject(xhr);
			}
		};

		xhr.onerror = function () {
			var errorMessageText = this.status === 0 ? "Нет доступа для получения файла" : 'Ошибка ' + this.status + ' при получении файла'
			$.show.error(errorMessageText);
			reject(xhr);
		}

		xhr.send(data);
	});
}