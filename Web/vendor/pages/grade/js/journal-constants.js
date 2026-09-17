(function() {
	const gradeConstants = {
		activities: {
			manual: "manual"
		},
		maxLengths : {
			assignTitle: 400
		},
		attendanceReasons: {
			released: "ОСВ",
			missed: "ОТ"
		},
		assignmentTypes: {
			homeWork: 3,
			lessonAnswer: 10,
			homework: 4,
			DKR: 16,
			tkrAssignType: 99
		},
		testPlansTypes: [16, 2, 4, 8, 14]
	};

	if (typeof(sys) != 'undefined' && sys.constants != null) {
		sys.constants.grade = gradeConstants;
	}

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
	})(gradeConstants);
})();
