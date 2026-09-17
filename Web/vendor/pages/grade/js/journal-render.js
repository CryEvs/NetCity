(function() {
	const JournalRender = function() {
		const getAvgMarks = require("./avgMarks.js");

		const getStudentRowClass = function (journalData, student) {
			let rowClass = "";
			if (journalData.studentsOnIndividualEducForm[student.id]) {
				rowClass += " individual-educ";
			}
			if (student.free) {
				rowClass += " free-student disabled";
			}
			return rowClass;
		}

		this.RenderJournal = function(journalData) {
			const self = this;
			self.prepareModel(journalData);

			const students = _.map(journalData.students, (student) => {
				student.rowClass = getStudentRowClass(journalData, student);
				return student;
			});
			const classMeetings = journalData.classMeeting;
			const monthsDays = self.GetMonthsDays(classMeetings);
			const studentsMarks = self.GetStudentsMarks(journalData);
			const studentsAvgWithTotalsMarks = self.GetStudentAvgWithTotalMarks(journalData);
			journalData.avgMarks = studentsAvgWithTotalsMarks;

			const context = {
				language: window.language,
				students: students,
				classMeetings: classMeetings,
				monthsDays: monthsDays,
				studentsMarks: studentsMarks,
				studentsAvgWithTotalsMarks: studentsAvgWithTotalsMarks,
				editLimit: journalData.editLimit
			};

			const template = Handlebars.compile(journalTemplate);
			const html = template(context);
			return html;
		};

		this.RenderJournalLegend = function(tkr) {
			const context = {
				language: window.language,
				isNotTkr: !tkr
			};

			const template = Handlebars.compile(journalLegendTemplate);
			const html = template(context);
			return html;
		};

		this.RenderAttendanceLegend = function() {
			const context = {
				language: window.language,
				preSchool: appContext.funcType === 1
			};

			const template = Handlebars.compile(attendanceLegendTemplate);
			const html = template(context);
			return html;
		};

		//todo. локализовать
		this.monthNames = [];
		this.monthNames[0] = "Январь";
		this.monthNames[1] = "Февраль";
		this.monthNames[2] = "Март";
		this.monthNames[3] = "Апрель";
		this.monthNames[4] = "Май";
		this.monthNames[5] = "Июнь";
		this.monthNames[6] = "Июль";
		this.monthNames[7] = "Август";
		this.monthNames[8] = "Сентябрь";
		this.monthNames[9] = "Октябрь";
		this.monthNames[10] = "Ноябрь";
		this.monthNames[11] = "Декабрь";

		this.prepareModel = function(journalData) {
			journalData.classMeeting = journalData.classMeeting || [];
			journalData.attendance = journalData.attendance || [];
			journalData.marks = journalData.marks || [];
			journalData.students = journalData.students || [];

			journalData.studentsOnIndividualEducForm = _.chain(journalData.students)
				.filter((st) => {return st.individualEduc;})
				.indexBy("id")
				.value();

			var sliceWorkTypeIds = [4, 14, 8, 16, 15];
			var now = moment(new Date());

			//маппинг данных по занятиям
			_.each(journalData.classMeeting,
				function(cm) {
					cm.date = new Date(cm.date);

					if (journalData.editLimit.limitPastEdit) {
						const daysInPast = now.diff(cm.date, "days");
						if (daysInPast > journalData.editLimit.limitPastDays) {
							cm.limitEdit = true;
						}
					}

					if (journalData.editLimit.limitCmAccess && journalData.editLimit.limitCmAccess.length > 0) {
						cm.readOnly = journalData.editLimit.limitCmAccess.indexOf(cm.id) === -1;
					}

					cm.strDate = dateUtils.date2str(cm.date);
					if (cm.id === journalData.lastEditCmId) {
						cm.lastEditing = true;
					}

					cm.sliceWorks = _.some(cm.assignments,
						function(assign) {
							return _.contains(sliceWorkTypeIds, assign.typeId);
						});

					if (!cm.readOnly) {
						cm.readOnly = journalData.editLimit.readOnly || cm.limitEdit;
					}

					cm.active = cm.assignments.length;
				});
		};

		this.GetMonthsDays = function(classMeetings) {
			var self = this;

			const monthsDays = _.chain(classMeetings || [])
				.groupBy(function(cm) {
					const monthStart = new Date(cm.date.getFullYear(), cm.date.getMonth(), 1);
					return monthStart.getTime();
				})
				.map(function(classMeetings, monthStart) {
					const montNum = new Date(parseInt(monthStart)).getMonth();
					const monthName = self.monthNames[montNum];
					const days = _.map(classMeetings,
						function(cm) {
							return cm.date.getDate();
						});
					return { month: monthName, days: days };
				})
				.value();

			return monthsDays;
		};

		this.GetStudentsMarks = function(journalData) {
			var self = this;
			const students = journalData.students || [];
			const classMeetings = journalData.classMeeting || [];
			const attendance = journalData.attendance || [];
			const marks = journalData.marks || [];

			const studentMarks = [];

			for (let student of students) {
				const studentCmMarks = [];
				const rowClass = getStudentRowClass(journalData, student);

				for (let j = 0; j < classMeetings.length; j++) {
					var classMeeting = classMeetings[j];
					var assignments = _.map(classMeeting.assignments, function(assignment) { return assignment.id; });

					const studentMarks = _.chain(marks)
						.filter((mark) => {
							if (mark.studentId != student.id) {
								return false;
							}
							return _.contains(assignments, mark.assignmentId);
						})
						.each((cmMark) => {
							if (!cmMark) {
								return;
							}
							cmMark.spanClass = self.GetMarkSpanClass(cmMark.mark);
						})
						.value() || [];
	
					let cssClass = "";
					if (classMeeting.sliceWorks) {
						cssClass += " slice";
					}
					if (classMeeting.isTkr) {
						cssClass += " tkr";
					}
					if (classMeeting.lastEditing) {
						cssClass += " current";
					}
					if (classMeeting.readOnly) {
						cssClass += " disabled";
					}

					const studentCmAttendance = _.find(attendance, (att) => { return att.classmeetingId === classMeeting.id && att.studentId == student.id; }) || {};

					studentCmMarks.push({
						marks: studentMarks,
						attendance: studentCmAttendance.reason,
						cssClass: cssClass,
						noPerformance: studentMarks.length === 0 && !studentCmAttendance.reason
					});
				}
				studentMarks.push({
					rowClass: rowClass,
					cmMarks: studentCmMarks
				});
			}

			return studentMarks;
		};

		//обозначение уровня оценки css классом
		this.GetMarkSpanClass = function(mark) {
			mark = str2floatVal(mark);

			if (mark >= 5) {
				return "excelent";
			} else if (mark >= 4 && mark < 5) {
				return "good";
			} else if (mark >= 3 && mark < 4) {
				return "enough";
			} else if (mark) {
				return "poor";
			}
			return null;
		};

		this.GetStudentAvgWithTotalMarks = function(journalData) {
			const avgMarks = _.indexBy(getAvgMarks(journalData.marks,
					journalData.markSettings.useWeight,
					journalData.markSettings.minMark,
					journalData.classMeeting,
					appContext.isTkr,
					journalData.studentId),
				"studentId");
			var totalMarks = {};
			if (journalData.totals && journalData.totals[0]) {
				totalMarks = _.indexBy(journalData.totals[0].marks, "studentId");
			}
			const students = journalData.students || [];

			const studentsAvgMarks = [];

			for (let i = 0; i < students.length; i++) {
				const student = students[i];
				const avgMark = avgMarks[student.id] || {};
				const totalMark = totalMarks[student.id] || {};

				const rowClass = getStudentRowClass(journalData, student);

				studentsAvgMarks.push({
					rowClass: rowClass,
					avgMark: {
						mark: avgMark.mark,
						spanClass: this.GetMarkSpanClass(avgMark.mark),
						studentId: avgMark.studentId
					},
					totalMark: {
						mark: totalMark.mark,
						spanClass: this.GetMarkSpanClass(totalMark.mark)
					}
				});
			}

			return studentsAvgMarks;
		};

	};

	//для поддержки js модульности
	(function(exp, name) {
		var exported = false;
		if (typeof module !== "undefined" && module.exports) {
			module.exports = exp;
			exported = true;
		}
		if (typeof exports !== "undefined") {
			exports = exp;
			exported = true;
		}
		if (!exported && (typeof window !== "undefined" && typeof (name) !== "undefined")) {
			window[name] = exp;
		}
		if (typeof root !== "undefined" && typeof (name) !== "undefined") {
			root[name] = exp;
		}
	})(JournalRender, "JournalRender");

})();