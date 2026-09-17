(function() {
	function browseSchoolInfoAccessJournalCtrl(params) {
		this.schoolId = params.schoolId;
	}

	var getTemplate = function(url) {
		return jsSubmit({
			method: 'GET',
			action: url,
			auth: false,
			dataType: 'html',
			contentType: 'text/plain',
			showProcessing: true
		});
	};

	browseSchoolInfoAccessJournalCtrl.prototype.showAccessJournalEntries = function (accessJournalEntries) {
		if (!accessJournalEntries.length) {
			alert(language.Generic.Common.kNoChangesData);
			return;
		}

		_.map(accessJournalEntries, function (obj) {
			var date = dateUtils.castServerDateTimeToClient(obj.date);
			obj.date = dateUtils.date2str(date) + ' ' + dateUtils.time2Str_ss(date);
		});


		function somHasReason() {

			for (var i = 0; i < accessJournalEntries.length; i++) {
				if (accessJournalEntries[i].reason)
					return true;
			}
			return false;
		}

		var model = {
			accessJournalEntries: accessJournalEntries,
			language: language,
			hasReason: somHasReason()
		}

		var self = this;
		
		getTemplate('/vendor/pages/templates/browseAccessJournal/schoolInfoAccessJournal.html')
			.then(function (template) {


				

				var source = Handlebars.compile(template.replace(/(?:\r\n|\r|\n)/g, ''));
				var html = source(model);

				$.show.dialog({
					title: language.Generic.Common.kChangeHistory,
					message: html,
					size: BootstrapDialog.SIZE_WIDE,
					onshown: function (dialog) {

						dialog.$modalBody.find('.showDetale').on('click', function () {

							var id = $(this).attr('access-journal-id');

							self.browseAccessJournalDetails(id);
						});
					}
				});
			});
	};

	browseSchoolInfoAccessJournalCtrl.prototype.showAccessJournalEntryDetails = function (accessJournalEntryDetails) {


		if (!accessJournalEntryDetails.length) {
			alert(language.Generic.Common.kNoDetails);
			return;
		}



		//проверяем указана хоть одна причина внесения изменений в ОО
		function hasReason() {
			for (var i = 0; i < accessJournalEntryDetails.length; i++) {
				if (accessJournalEntryDetails[i].reason)
					return true;
			}

			return false;
		}

		function getReason() {
			accessJournalEntryDetails[0]
		}

			
		
		var reason = _.first(accessJournalEntryDetails).reason;
		var reasonDocId = _.first(accessJournalEntryDetails).reasonDocId;
		

		var model = {
			accessJournalEntryDetails: accessJournalEntryDetails,
			language: language,
			hasReason: hasReason(),
			reason: reason,
			reasonDocId: reasonDocId
		};

		getTemplate('/vendor/pages/templates/browseAccessJournal/schoolInfoAccessJournalDetails.html')
			.then(function (template) {

				var source = Handlebars.compile(template.replace(/(?:\r\n|\r|\n)/g, ''));
				var html = source(model);

				$.show.dialog({
					title: language.Generic.Common.kDetails,
					message: html,
					size: BootstrapDialog.SIZE_WIDE
				});
			});
	};

	browseSchoolInfoAccessJournalCtrl.prototype.browseAccessJournal = function () {
		var self = this;

		jsSubmit({
			action: '/webapi/schools/' + self.schoolId + '/info/accessjournal',
			showProcessing: true,
			method: 'GET',
			onSuccess: function(accessJournalEntries) {
				self.showAccessJournalEntries(accessJournalEntries);
			}
		});
	};

	browseSchoolInfoAccessJournalCtrl.prototype.browseAccessJournalDetails = function (accessJournalId) {
		var self = this;

		jsSubmit({
			action: '/webapi/schools/' + self.schoolId + '/info/accessjournal/' + accessJournalId + '/details',
			showProcessing: true,
			method: 'GET',
			onSuccess: function(response) {
				self.showAccessJournalEntryDetails(response);
			}
		});
	};

	//для поддержки js модульности
	(function (exp, name) {
		var exported = false;
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = exp;
			exported = true;
		}
		if (typeof exports !== 'undefined') {
			exports = exp;
			exported = true;
		}
		if (!exported && (typeof window !== 'undefined' && typeof (name) !== "undefined")) {
			window[name] = exp;
		}
		if (typeof root !== 'undefined' && typeof (name) !== "undefined") {
			root[name] = exp;
		}
	})(browseSchoolInfoAccessJournalCtrl, "BrowseSchoolInfoAccessJournalCtrl");
})();