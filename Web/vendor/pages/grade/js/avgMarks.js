(function() {
	var getAvgMarks = function (marks, useWeight, minMark, classMeetings, isTkr) {
		var assignmentsIdx =
			_.chain(classMeetings)
				.each(function(classMeeting) {
					_.each(classMeeting.assignments, function(assignment) { if (!assignment.date) { assignment.date = classMeeting.date } });
				})
				.pluck('assignments')
				.flatten()
				.unique()
				.indexBy('id')
				.value();

		var today = Date.now();

		minMark = parseInt(minMark);

		var aggregateFunc;
		if (useWeight) {
			aggregateFunc = function (studentId, marks) {
				var sumWeightMark = _.reduce(marks, function (memo, markInfo) { return memo + (parseInt(markInfo.mark == null ? minMark : markInfo.mark) - minMark) * markInfo.weight; }, 0);
				var sumWeight = _.reduce(marks, function(memo, markInfo) { return memo + markInfo.weight; }, 0);

				return +(minMark + ((sumWeight) ? sumWeightMark / sumWeight : 0)).toFixed(2);
			};
		} else {
			aggregateFunc = function (studentId, marks) {
				var sumMarks = _.reduce(marks, function (memo, markInfo) { return memo + (markInfo.mark == null ? minMark : parseInt(markInfo.mark)); }, 0);
				var marksCount = marks.length;

				return +(sumMarks / marksCount).toFixed(2);
			};
		}

		return _.chain(marks)
			.map(function(markInfo) { 
				var assignment = assignmentsIdx[markInfo.assignmentId];
				if (assignment) {
					if (assignment.weight) {
						markInfo.weight = +assignment.weight;
					}
					markInfo.activityId = assignment.activityId;
					if (assignment.activityId && assignment.dueDate) {
						markInfo.date = assignment.dueDate;
					} else {
						markInfo.date = assignment.date;
					}
					markInfo.tkr = assignment.typeId === 15;
				}
				if (typeof markInfo.mark === "string" && markInfo.mark) {
					markInfo.mark = +markInfo.mark;
				}
				return markInfo;
			})
			.filter(function(markInfo) {
				if (isTkr && !markInfo.tkr) {
					return false;
				}
				var typeMark = typeof markInfo.mark;
				if ((markInfo.mark == null || typeMark === "undefined") && ((markInfo.date && markInfo.date > today) || !markInfo.date)) {
					//фильтруем точки в будущем или без даты
					return false;
				}
				if (useWeight && !(markInfo.weight)) {
					return false;
				}
				if (typeMark === "string") {
					//фильтр точек
					return markInfo.mark.match(/^\d+$/);
				}
				return true;
			})
			.groupBy(function(mark) { return mark.studentId; })
			.map(function(studentMarks, studentId) {
				return { studentId: studentId, mark: aggregateFunc(studentId, studentMarks) }
			})
			.value();
	};

	//для поддержки js модульности
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) { 
			exports = module.exports = getAvgMarks;
		}
		exports = getAvgMarks;
	} else if (typeof window !== 'undefined') {
		window['getAvgMarks'] = getAvgMarks;
	} else if (typeof exports !== 'undefined') {
		root['getAvgMarks'] = getAvgMarks;
	}
})();