function setAttendance(obj) {
	var $Grades = $("input[name=" + obj.name + "]", $("form[name=Gradebook]"));
	var nLen = $Grades.length;
	var $Reasons = $("select[name=Reason]", $("form[name=Gradebook]"));
	var nLenReasons = $Reasons.length;
	var attIndex = obj.parentNode.parentNode.rowIndex - 1;
	if (nLenReasons > 0) {
		if (nLen > 1) {
			$Reasons[attIndex].value = 'ОТ';
		}
		else if (nLen == 1) {
			$Reasons[0].value = 'ОТ';
		}
	}
}

function clickCheckAll(obj) {
	if (obj.checked)
		CheckAll(obj.value);
	else
		UncheckAll(obj.value);
}

function CheckAll(sAID) {
	var $checkM = $("input:checkbox[name=M_" + sAID + "]", $("form[name=Gradebook]"));
	var nLen = $checkM.length;
	for (var i = 0; i < nLen; i++) {
		$checkM[i].checked = true;
	}
	dataChanged();
}

function UncheckAll(sAID) {
	var $checkMs = $("input:checkbox[name=M_" + sAID + "]", $("form[name=Gradebook]"));
	var $Grades = $("input[name=G_" + sAID + "]", $("form[name=Gradebook]"));
	var nLen = $checkMs.length;
	for (var i = 0; i < nLen; i++) {
		if (trimStr($Grades[i].value) == '')
			$checkMs[i].checked = false;
	}
	dataChanged();
}

function restoreCheck(obj) {
	if (!obj.checked) {
		alert(language.Grade.kTickMarkIsNecessary);
		obj.checked = true;
	}
}
function clickCheck(obj, n) {
	var sName = obj.name;
	var sAID = sName.substr(2);
	var $Grades = $("input[name=G_" + sAID + "]", $("form[name=Gradebook]"));
	if (trimStr($Grades[n].value) != '') restoreCheck(obj); else dataChanged();
}

function assignsCtrl(lessonName, minMark, maxMark, ha_exists, maxAssignTitleLen, maxAssignNameLen, isDebug){
	
	var form = $("form[name=Gradebook]");
	var button_apply = $("button[onclick*='assigns.composing().aply();']");
	var button_cancel = $("button[onclick*='assigns.composing().cancel();']");
	var row_lessons_ha = $("#tr_LessonThemes_HA", form);
	var row_lessons = $("#tr_LessonThemes", form);
	var row_type_ha = $("#AssignType_HA", form);
	var row_type = $("#AssignType", form);
	var assign_theme = $("#AssignTheme", form);
	var assign_name = $("input:text[name=AN]", form);
	var lessons = $("select[name=arr_LID]", form);

	var selectCMInitailIndex = $("#selectCM", form)[0].selectedIndex;
	var initailBackPage = $("input:hidden[name=BACK]", form).val();

	var lesson_name = lessonName;

	var compos_assignment = false;
	var _counts = function() {
		return {
			tkr: $("input[name=AID][type=hidden][TKR]").length,
			other: $("input[name=AID][type=hidden]").length - $("input[name=AID][TKR]").length - 1,
			cources: $("input[name=CAID][type=hidden]").length
		};
	}();
	var add_buttons = function(){
		var _add = $("button[onclick*='assigns.add();']");
		var _add_ha = $("button[onclick*='assigns.add({isHA:true});']");
		var _add_tkr = $("button[onclick*='assigns.add({isTKR:true});']");
		return {
			add: _add,
			add_ha: _add_ha,
			add_tkr: _add_tkr,
			hide: function() {
				_add.hide();
				_add_ha.hide();
				_add_tkr.hide();
			},
			show: function() {
				if (TKR_mode) {
					if (_counts.other > 0 || _counts.tkr == 0) {
						if (!ha_exists) _add_ha.show();
						_add.show();
					}
					if ((_counts.other + _counts.cources) == 0)
						_add_tkr.show();
				} else {
					if (!ha_exists) _add_ha.show();
					_add.show();
				}
			}
		};
	}();

	var _add = function (in_params) {
		params = $.extend({}, in_params);

		add_buttons.hide();
		button_apply.show();
		button_cancel.show();

		if (lesson_name.length == 0)
			if (params.isHA)
				row_lessons_ha.show();
			else
				row_lessons.show();
		assign_theme.show();

		if (TKR_mode && params.isTKR)
			_counts.tkr++;
		else {
			_counts.other++;
			if (params.isHA) {
				ha_exists = true;
				row_type_ha.show();
			} else
				row_type.show();
		}

		compos_assignment = function (in_params) {
			params = $.extend({}, in_params);
			document.Gradebook.RegimeAddAssign.value = 1;
			document.Gradebook.HomeAssign.value = (params.isHA) ? 1 : 0;
			document.Gradebook.TKRAssign.value = (params.isTKR) ? 1 : 0;
			var _dataWereChangedBefore;
			var _safeLessonName = "";

			var _aply_success = function(response, textStatus) {
				setDBFree();
				bServerCalled = false;

				var nNewAssignID = response.data.assignmentId;
				var aIdInput = $("#AID_id").clone().attr("id", "").attr("name", "AID").attr("value", "" + nNewAssignID).insertBefore("#AID_id");

				$("input[name=G_0]", $("#new_M")[0]).attr("name", "G_" + nNewAssignID);

				navigateInputs($("input[name^=G_" + nNewAssignID + "]:enabled"));

				$("select[name=MarkType_]", $("#new_M")[0]).attr("name", "MarkType_" + nNewAssignID);
				if (params.isTKR)
					$("<input type='hidden'>").val(nNewAssignID).attr("name", "TKR_" + nNewAssignID).appendTo("#new_M");
				$("input[name=M_0]", $("#new_M")[0]).attr("name", "M_" + nNewAssignID);
				$("input:checkbox[name=M_All_]", $("#new_M")[0]).attr("value", "" + nNewAssignID);
				$("#new_M").attr("id", "td_MarksColumn_" + nNewAssignID);

				$("#new_ANTitle").attr("id", "td_AssignTitle_" + nNewAssignID);

				var newAssignTitle = $("#td_AssignTitle_" + nNewAssignID);

				var imgEdit = $("#new_editAssign", newAssignTitle).attr("id", "editAssign_" + nNewAssignID).children()[0];
				tooltip.l(imgEdit, "mouseover", tooltip.s);
				tooltip.l(imgEdit, "mouseout", tooltip.h);

				var imgDel = $("#new_delAssign", newAssignTitle).attr("id", "delAssign_" + nNewAssignID + "_" + ((params && params.isHA) ? "1" : "0")).children()[0];
				tooltip.l(imgDel, "mouseover", tooltip.s);
				tooltip.l(imgDel, "mouseout", tooltip.h);

				if (moduleQA) {
					var tesPlanIcon = $("#new_testPlanAssign", newAssignTitle);
					if (tesPlanIcon.length > 0) {
						var imgTesplan = tesPlanIcon.attr("id", "testPlanAssign_" + nNewAssignID).children()[0];
						tooltip.l(imgTesplan, "mouseover", tooltip.s);
						tooltip.l(imgTesplan, "mouseout", tooltip.h);
					}
				}

				if (params.isTKR)
					aIdInput.attr("TKR", true);
				else {
					if (lesson_name == "" && _safeLessonName != "") {
						$("#td_LessonThemes_Const", form).text(_safeLessonName);
						$("#tr_LessonThemes_Const", form).show();
						lesson_name = _safeLessonName;
					}
				}
			};

			var _aply_fail = function(XMLHttpRequest) {
				setDBFree();
				bServerCalled = false;
			};

			var _cancel = function() {
				if (isDBBusy()) return false;

				button_apply.hide();
				button_cancel.hide();
				if (params.isHA) {
					ha_exists = false;
					_counts.other--;
				} else if (params.isTKR)
					_counts.tkr--;
				else
					_counts.other--;

				add_buttons.show();

				if (lesson_name == "") {
					row_lessons.hide();
					row_lessons_ha.hide();
				}

				assign_theme.hide();
				row_type.hide();
				row_type_ha.hide();
				compos_assignment = false;
			};

			return {
				aply: function() {
					var defArgs = new Array();
					if (isDBBusy()) return false;

					if (!assigns.checkAssignName())
						return false;

					if (!assigns.checkAllMarks())
						return false;

					if (TKR_mode) {
						if (bEmptyMark)
							defArgs = $.show.confirmation(language.Grade.kConfirmEmptyTKRMarks);
					}

					extDeferred.when(defArgs).then(function() {
						if (TKR_mode) {
							assigns.tkr_marktypes.enableMarks(form);
						}
						button_apply.hide();
						button_cancel.hide();

						row_type_ha.hide();
						row_type.hide();
						assign_theme.hide();

						var sAName = trimStr(assign_name.val());
						var sATypeName = "";
						var nAType = $("select[name=AType]", form).val();

						if (params.isHA)
							sATypeName = language.Generic.Assignment.kATHomeWork;
						else if (params.isTKR)
							sATypeName = language.Generic.Assignment.kATTKRTheme;
						else
							sATypeName = GetTypeName(nAType);

						if (lesson_name == "") {
							if (params.isHA)
								row_lessons_ha.hide();
							else {
								row_lessons.hide();
								if (lessons.length == 1)
									_safeLessonName = lessons.find("option:selected").attr('lsn_name');
							}
						}

						var sAName = assign_name.val();
						var sAName_Show = "";

						if (sAName.length > maxAssignTitleLen)
							sAName_Show = sAName.substr(0, maxAssignTitleLen) + "...";
						else
							sAName_Show = sAName;

						if (params.isHA)
							$("#ANTitle_empty").clone().attr("id", "new_ANTitle").insertAfter("#td_UnderStudents").css("color", "blue");
						else
							$("#ANTitle_empty").clone().attr("id", "new_ANTitle").insertBefore("#ANTitle_empty");

						var newAssignContainer = $("#new_ANTitle");
						$("#nobr_AName_empty", newAssignContainer).attr("id", "").attr("title", sAName).text(sAName_Show);
						$("#nobr_AType_empty", newAssignContainer).attr("id", "").text(sATypeName);
						$("#editAssign_empty", newAssignContainer).attr("id", "new_editAssign");
						$("#delAssign_empty", newAssignContainer).attr("id", "new_delAssign");

						if (moduleQA) {
							if (!createTestPlanAllowed || ((nAType != 2 && nAType != 4 && nAType != 8 && nAType != 14) || params.isHA)) {
								$("#testPlanAssign_empty", newAssignContainer).remove();
							} else {
								$("#testPlanAssign_empty", newAssignContainer).attr("id", "new_testPlanAssign");
							}
						}

						newAssignContainer.show();

						//пустой шаблон ячеек с оценками
						var templateCells = $("#C_empty");
						var newCells = templateCells.clone().attr("id", "new_M");

						if (params.isHA)
							newCells.insertAfter("#td_StudNames");
						else
							newCells.insertBefore("#C_empty");

						if (TKR_mode && params.isTKR) {
							$("select[name=MarkType_]", newCells).css("display", "").prop("disabled", false);
							$("#M_empty", newCells[0]).remove();
						}

						$("input[name=M_]", newCells[0]).attr("name", "M_0");
						$("input[name=G_]", newCells[0]).attr("name", "G_0");

						newCells.show();

						jsSubmit({
							form: document.Gradebook,
							action: "SaveJournal.asp?rnd=" + new Date(),
							onSuccess: _aply_success,
							onError: _aply_fail
						});
						setDBBusy();
						document.Gradebook.RegimeAddAssign.value = 0;
						document.Gradebook.HomeAssign.value = 0;
						document.Gradebook.TKRAssign.value = 0;

						if (TKR_mode) {
							assigns.tkr_marktypes.disableMarks(form);
						}

						bServerCalled = true;
						_dataWereChangedBefore = dataWereChanged;
						dataWereChanged = false;
						compos_assignment = false;
						add_buttons.show();
					});
				},
				cancel: _cancel,
				isHA: (params.isHA == true),
				isTKR: (TKR_mode && params.isTKR == true)
			};
		}(params);
		_setDefaultName();
	};

	var _delete = function(obj) {
		if (isDBBusy()) return false;

		var arrVals = obj.id.split('_');
		if (arrVals.length != 3) {
			alert(language.Generic.Common.kUnexpErr);
			return;
		}

		var delAssign = {
			id: arrVals[1],
			isHA: (arrVals[2] == "1"),
		};

		var $checkM = $("input:checkbox[name=M_" + delAssign.id + "][checked=true]", form);
		var nLenM = $checkM.length;
		var nLenG = 0;
		if (nLenM == 0) {
			var $checkG = $("input:text[name='G_" + delAssign.id + "'][value!=''][value!=' ']", form);
			nLenG = $checkG.length;
		}

		var confirmText = ((nLenM + nLenG) == 0)
			? language.Generic.Assignment.kSureToDeleteAssignment
			: language.Generic.Grade.kDelAssignmentWithMarks;

		var _del_Success = function (response) {
			setDBFree();
			bServerCalled = false;

			var delAssignInput = $("input:hidden[name=AID][value=" + delAssign.id + "]", form);
			if (typeof (delAssignInput.attr("TKR")) != "undefined")
				assigns.counts.tkr--;
			else
				assigns.counts.other--;
			$("#td_AssignTitle_" + delAssign.id).remove();
			$("#td_MarksColumn_" + delAssign.id).remove();
			delAssignInput.remove();

			if (delAssign.isHA)
				ha_exists = false;
			if (!compos_assignment)
				add_buttons.show();

			alert(response.message);
		};

		var _del_Fail = function () {
			setDBFree();
			bServerCalled = false;
		};

		$.show.confirmation(confirmText)
			.then(function () {
				if (isDBBusy()) return false;
				var form = document.EditAssign;

				form.ADEL.value = delAssign.id;
				jsSubmit({
					form: form,
					action: "/asp/Grade/DelJournalAssignment_Ajax.asp?rnd=" + new Date(),
					onSuccess: _del_Success,
					onError: _del_Fail
				});

				setDBBusy();
				bServerCalled = true;
			});
	};

	var _setDefaultName = function() {
		if (assigns.composing().isHA) {
			assign_name.val("");
			return;
		}

		if (lesson_name != "") {
			assign_name.val(lesson_name);
			return;
		}
			
		if (lessons.length == 1) {
			var ind = lessons[0].selectedIndex;
			if (ind == -1) ind = 0;
			assign_name.val(arrThemes[ind]);
		} else
			assign_name.val(language.Generic.Grade.kNoTheme);
	};

	var _parseAndSetAssignId = function(strId) {
		var arrVals = strId.split('_');
		if (arrVals.length < 2 || arrVals.length > 3) {
			alert(language.Generic.Common.kUnexpErr);
			return false;
		}
		var form = document.EditAssign;
		form.AID.value = arrVals[1];
		if (arrVals.length == 3) form.LAJID.value = arrVals[2];
		return true;
	};
	
	return {
		counts: _counts
		, add : _add
		, del :_delete
		, edit : function(obj) {
			if (isDBBusy()) return false;
			checkForChanges().then(function() {
				if (_parseAndSetAssignId(obj.id))
					ok('EditAssign', '/asp/Curriculum/EditAssignment.asp');
			});
		}
		, testPlan: function (obj) {
				if (isDBBusy()) return false;
				checkForChanges().then(function() {
					if (_parseAndSetAssignId(obj.id)) 
						ok('EditAssign', '/asp/Grade/QA/TestPlanResults.asp');
				});
		}
		, lessonName : function(){ return lesson_name; }
		, composing : function() { return compos_assignment; }
		, setDefaultAssName : _setDefaultName
		, checkAllMarks : function(){
			var $Assigns = $("input[name=AID]", form);
			var nLen = $Assigns.length;
			for( var i = 0; i < nLen; i++ ) {
				sAID = $Assigns[i].value;
				if( !assigns.isValidMarks(sAID, '') )
					return false;
			}
			return true; }
		, canSave : function(){
			if( isDBBusy() ) return false;
			var form = document.forms['Gradebook'];

			if( compos_assignment )
			{
				if( !assigns.checkAssignName() )
					return false;
			}

			if( !assigns.checkAllMarks() )
				return false;

			if (TKR_mode) {
				return extDeferred.wrapPromise(function () { return $.when(!bEmptyMark || $.show.confirmation(language.Grade.kConfirmEmptyTKRMarks)); }, function () { assigns.tkr_marktypes.enableMarks(form); });
			}

			return true;
		}

		, save: function () {
			extDeferred.when(this.canSave).then(function () {
				var form = document.forms['Gradebook'];
				setDBBusy();
				$("input:hidden[name=BACK]", form).val(initailBackPage);
				DoSubmit(form, "");
			});
		}

		, doSave: function (sBackPage) {
			var form = document.forms['Gradebook'];
			setDBBusy();
			$("input:hidden[name=BACK]", form).val(sBackPage);
			DoSubmit(form, "");
		}

		, isValidMarks : function(sName, sObligat){
			var nPP = maxMark;
			var bCheckObligat = (sObligat != '');
			bEmptyMark = false;
			var sGName = "G_" + sName;
			var $Grades = $("input[name=" + sGName + "]", form);
			var nLen = $Grades.length;
			if (nLen > 0)
			{
				for( var i = 0; i < nLen; i++ ) {
					var nMarkType = 1;
					if (TKR_mode) nMarkType = parseInt( $("select[name=MarkType_"+sName+"]",$Grades.eq(i).parent()).val() );
					if( nMarkType > 0 ) {
						var grade = trimStr($Grades[i].value);
						if(grade != '') {
							grade = str2lng(grade);
							if( isNaN(grade) || grade < minMark || grade > nPP ) {
								alert(language.Generic.Grade.kInvGrade + minMark + language.Generic.Grade.kInvGrade2 + nPP);
								$Grades[i].focus();
								return false;
							}
						}
						else {
							bEmptyMark = true;
						}
						$Grades[i].value = grade;
					}
				}
				return true;
			}
			return true;
		}
		, checkAssignName : function() {
			var name = assign_name.val();
			if( trimStr(name).length == 0 ) {
				alert(language.Generic.Assignment.kATEnterAssignmentTheme);
				assign_name[0].focus();
				return false;
			}
			if( trimStr(name).length > maxAssignNameLen ){
				alert(language.Generic.Assignment.kATAssignmentThemeNotMayBe);
			assign_name[0].focus();
			return false;
		}
			return true; }
		, initButtons : function() { add_buttons.hide(); add_buttons.show(); }
		, tkr_marktypes : {
			disableMarks: function (form) { $("select[name^=MarkType_]:visible > option[value=-1]:selected", form).parent().parent().find("input").prop("disabled", true); },
			enableMarks: function (form) { $("input[type=text][name^=G_]:visible", form).prop("disabled", false); },
			onChangeHandler: function(markTypeElem){
				var form = document.forms['Gradebook'], nMarkType, elMark;
				nMarkType = $(markTypeElem).val();
				markElem = $('input[name^=G_]:text', $(markTypeElem).parent());
				if( nMarkType > 0 )
					markElem.val('').prop('disabled', false)[0].focus();
				else
					markElem.val(arrMarkTypes[-nMarkType]).prop('disabled', true);
				dataChanged(); }
		}
		
		// ClassMeetings navigation
		, onChangeCM: function (step) {
			if (isDBBusy()) return false;
			if (dataWereChanged || compos_assignment) {
				this.confirmChangeCM(step);
			}
			else {
				this.simpleChangeCM(step);
			}
			return true;
		}
		
		, simpleChangeCM: function (step) {
			var form = document.forms['Gradebook'];
			if (step != 0) {
				$("#selectCM", form)[0].selectedIndex = selectCMInitailIndex + step;
			}
			setDBBusy();
			DoSubmit(form, "EditJournal.asp");
			return true;
		}

		, confirmChangeCM: function (step) {
			var onConfirmChangeCM_Yes = function() {
				var form = document.forms['Gradebook'];
				extDeferred.when(assigns.canSave).then(function() {
						if (step != 0) {
							$("#selectCM", form)[0].selectedIndex = selectCMInitailIndex + step;
						}
						assigns.doSave("EditJournal.asp");
					},
					function() {
						$("#selectCM", form)[0].selectedIndex = selectCMInitailIndex;
					});
			};
			var onConfirmChangeCM_No = function () {
				assigns.simpleChangeCM(step);
			};
			var onConfirmChangeCM_Cancel = function () {
				var form = document.forms['Gradebook'];
				$("#selectCM", form)[0].selectedIndex = selectCMInitailIndex;
			};

			var objButtons = {};
			objButtons[$.show.defaults.yesText] = onConfirmChangeCM_Yes;
			objButtons[$.show.defaults.noText] = onConfirmChangeCM_No;
			objButtons[$.show.defaults.cancelText] = onConfirmChangeCM_Cancel;
			$.show.confirmation(language.Generic.Grade.kConfirmOnChangeCM, language.Generic.SetupSchoolUI.kConfirm, objButtons, true);
			return true;
		}

	};
};

