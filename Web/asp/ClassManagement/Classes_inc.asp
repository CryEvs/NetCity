<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterTeachers.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterGrades.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const strSaveScript = "/asp/ClassManagement/SaveClass.asp"

Dim bAll, strEditSubjectTeachersScriptName, bDrawProfiles, arrTeachers, arrAllProfiles
Dim i,strLetter, rsHang
Dim strClassesRelaysScriptName
Dim bWizard, bPreSchool, bAddSchool, bCommonSchool

Dim objProfileEducs, objTempTeachersRs, strConcatTeachers, objEducPrograms, objDOUGroupTypes, objDOUGroupAgeCategories, objDOUGroupAges, objStayRegimes, objClassesRooms, objNoAssocClassesRooms, objVacations

Dim nGradeOld, arrProfiles, arrVacations, arrVacations2
Dim objClassesForms, objClassForms, arrClassForms
Dim strPlannedOccupancyMessage
Dim objAddSpecialization
Dim bIsAnyGradeEmptyTermTypes, bReadonly
Dim objNoContingentInfo, bHasSomeNoContingentGroups

Sub SpecialReadState()
End Sub

Sub ReadState()
	If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
		strPlannedOccupancyMessage = Replace(Replace(obLanguage("ClassManagement", "kPlannedOccupancy"), "students_r", obLanguage("Common", "kStudents_r", strFunctionalityType)), "year", left(obTokenMgr.GetData(strToken, "CurrYearName"), 4))
	End If
	bWizard = False

	bCommonSchool = (CLng(strFunctionalityType) = kFuncType_Common)
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)

	Call SpecialReadState()
	Call InitTeachersEx( true, true, false )
	Set objClassesRs = objNSNET.GetYearClassesInfo(strCurrYearID)

	If bPreSchool Then
		InitNoContingentInfo
	End If

	If bAddSchool Then
		Call InitClassLetters_AddSchool()
	Else
		Call InitClassLetters(False)
	End If
End Sub

Sub Main
	bIsAnyGradeEmptyTermTypes = objNSNET.IsAnyGrade_Empty_TermTypes(strCurrYearID)
	bReadonly = readonly or bIsAnyGradeEmptyTermTypes
	Set objGrades = objNSNET.GetGrades(strCurrYearID)
	Set rsHang = objNSNET.GetHangingSubjects(strCurrYearID, kForClasses )

	' помещения
	Set objClassesRooms = objNSNET.GetClassesRooms(strSchoolID, strCurrYearID)

	' Группы с невыставленой привязкой с помещением
	Set objNoAssocClassesRooms = objNSNET.GetNoAssociateClassesRooms(strCurrYearID)

	If bAddSchool Then
		Set objProfileEducs = objNSNET.GetAddPrograms(strSchoolID, -1, strCurrYearID, -1, True)
	Else
		Set objProfileEducs = objNSNET.GetClassesTypes(strFunctionalityType)
		If bPreSchool  Then
			Set objEducPrograms = objNSNET.GetEducPrograms()
			Set objDOUGroupTypes = objNSNET.GetDOUGroupTypes()
			Set objDOUGroupAgeCategories = objNSNET.GetDOUGroupAgeCategories()
			Set objDOUGroupAges = objNSNET.GetDOUGroupAges()
			Set objStayRegimes = objNSNET.GetStayRegimes()
			Set objAddSpecialization = objNSNET.GetAddSpecialization()
		End If
	End If

	Set objVacations = objNSNET.GetVacations(strCurrYearID)
	arrVacations2 = objVacations.GetRows(,,Array("VACATIONID"))
	arrVacations = Array()
	ReDim arrVacations(Ubound(arrVacations2, 2))
	Dim i
	Do While i <= Ubound(arrVacations2, 2)
		arrVacations(i) = arrVacations2(0, i)
		i = i + 1
	Loop

	If bCommonSchool Then
		' Вид класса
		' значения справочника
		Set objClassForms = objNSNET.GetClassForms()
		arrClassForms = Array(1)
	End If

	SpecialMain
End Sub

Sub InitNoContingentInfo()
	If objClassesRs.EOF Then Exit Sub

	Dim arrClassesIdx()
	Dim obNoContingentInfoComponent

	Set obNoContingentInfoComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.INoContingentInfoComponent")

	ReDim arrClassesIdx(objClassesRs.RecordCount - 1)
	While Not objClassesRs.EOF
		arrClassesIdx(objClassesRs.CurrentPos - 1) = CLng(objClassesRs("CLASSID"))
		objClassesRs.MoveNext
	Wend
	objClassesRs.MoveFirst

	Set objNoContingentInfo = obNoContingentInfoComponent.GetNoContingentInfo(arrClassesIdx)
	bHasSomeNoContingentGroups = objNoContingentInfo.Count > 0
End Sub

Function CheckNoContingent(strClassId)
	CheckNoContingent = objNoContingentInfo.Exists(CLng(strClassId))
End Function

Function GetWithoutStudentsStyle(strClassId)
	If bPreSchool Then
		If CheckNoContingent(strClassId) Then
			GetWithoutStudentsStyle = "class='without-students'"
			Exit Function
		End If
	End If
	GetWithoutStudentsStyle = ""
End Function

Function GetZeroElementArray(arr2D)
	Dim arr1D
	Dim i

	arr1D = Array()
	ReDim arr1D(Ubound(arr2D, 2))

	Do While i <= Ubound(arr2D, 2)
		arr1D(i) = arr2D(0, i)
		i = i + 1
	Loop

	GetZeroElementArray = arr1D
End Function

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stBackPage, strScriptName)
End Sub

Sub onSpecialHead()
	arrAllProfiles = objNSNET.GetGradeProfileList(-1, strSchoolID )
	bDrawProfiles = ( UBound(arrAllProfiles, 2) > 0 )%>

	<script src="<%=GetVersionedJsLink("libs/jquery.validate/jquery.validate.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("libs/jquery.validate/localization/messages_ru.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedJsLink("uikit.validate.js")%>" type="text/javascript"></script>

	<style>
		.without-students {
			background-color: #FEE6C5;
		}
		.table-bright-striped tr.without-students:nth-child(even) td {
			background-color: #FEE6C5;
		}
		.table-bright-striped tr.without-students:nth-child(odd) td {
			background-color: #FEE6C5;
		}
		.table-bright-hover tr.without-students:hover td {
			background-color: #eee6fa;
		}
	</style>

	<script type="text/javascript">
		var addClassValidator;
		var addClassForm;
		var validationParams;

		function SetRelays() {
			if( isDBBusy() ) return false;
			setDBBusy();
			postTo("<%=strClassesRelaysScriptName%>");
		}

		$(function () {
			jsSubmit({ action: "/webapi/curriculum/profiles/withTermTypeNotDefined", method: "GET" })
				.then(function (data) {
					if (data.length != 0) {
						$('button:contains("Добавить")').hide();
					}
				})
		})

		function chooseStayRegimeId(changeFlag)
		{
			$('select[name="StayRegimeId"]').val() == "4" 
				? $('input[name="SeatsForShort"]').closest('.form-group').hide()
				: $('input[name="SeatsForShort"]').closest('.form-group').show();
			if (changeFlag)
				dataChanged();
		}

		function chooseGroupType(changeFlag) {
			var groupType = parseInt($('select[name="NEWGROUPTYPEID"]').val()) || 0;
			var formGroup = $('select[name="ADDSPECID"]').closest('.form-group');
			(groupType == 3 || groupType == 4) ? formGroup.show() : formGroup.hide();

			// авто выбор программы обучения
			autoChooseEducPrograms(groupType);

			if (changeFlag)
				dataChanged();
		}

		// Тип группы
		var GroupTypes = {
			// общеразвивающая
			General: 1,

			// оздоровительная
			Wellness: 2,

			// комбинированная
			Combined: 3,

			// компенсирующая
			Compensating: 4,

			// для детей раннего возраста
			ForYoungChildren: 5,

			// по присмотру и уходу
			CareAndMaintenance: 6,

			// семейная дошкольная
			FamilyPreschool: 7
		};

		// Образовательные программы
		var EducPrograms = {
			// Общеразвивающая программа
			General: 1,

			// Адаптированная программа
			Adapted: 2
		}

		function EducProgramChooser(groupType, generalEducProgDOMEl, adaptedEducProgDOMEl) {
			var reset = function() {
				generalEducProgDOMEl.disabled = false;
				adaptedEducProgDOMEl.disabled = false;
				// цвет текста
				generalEducProgDOMEl.parentElement.style.color = "";
				adaptedEducProgDOMEl.parentElement.style.color = "";
			};

			var choose = function() {
				if (groupType == GroupTypes.Compensating || groupType == GroupTypes.ForYoungChildren || groupType == GroupTypes.CareAndMaintenance) {
					generalEducProgDOMEl.disabled = true;
					generalEducProgDOMEl.checked = false;
					generalEducProgDOMEl.parentElement.style.color = "grey";
				}

				if (groupType == GroupTypes.General || groupType == GroupTypes.Wellness) {
					generalEducProgDOMEl.disabled = true;
					generalEducProgDOMEl.checked = true;
					generalEducProgDOMEl.parentElement.style.color = "grey";
				}

				if (groupType == GroupTypes.ForYoungChildren || groupType == GroupTypes.CareAndMaintenance) {
					adaptedEducProgDOMEl.disabled = true;
					adaptedEducProgDOMEl.checked = false;
					adaptedEducProgDOMEl.parentElement.style.color = "grey";
				}

				if (groupType == GroupTypes.Compensating) {
					adaptedEducProgDOMEl.disabled = true;
					adaptedEducProgDOMEl.checked = true;
					adaptedEducProgDOMEl.parentElement.style.color = "grey";
				}
			};

			var chooseWhereCombined = function() {
				if (groupType == GroupTypes.Combined) {

					if (generalEducProgDOMEl.checked && adaptedEducProgDOMEl.checked) {
						return;
					}

					if (generalEducProgDOMEl.checked) {
						generalEducProgDOMEl.disabled = true;
						generalEducProgDOMEl.parentElement.style.color = "grey";
					}

					if (adaptedEducProgDOMEl.checked) {
						adaptedEducProgDOMEl.disabled = true;
						adaptedEducProgDOMEl.parentElement.style.color = "grey";
					}
				}
			};

			return {
				groupType: groupType,
				generalEducProgDOMEl: generalEducProgDOMEl,
				adaptedEducProgDOMEl: adaptedEducProgDOMEl,
				reset: reset,
				choose: choose,
				chooseWhereCombined: chooseWhereCombined
			};
		}

		function autoChooseEducPrograms(groupType) {
			var chooser = GetEducProgramChooser();

			if (chooser.groupType == GroupTypes.Combined) {
				chooser.generalEducProgDOMEl.checked = true;
			}

			chooser.reset();
			chooser.chooseWhereCombined();
			chooser.choose();
		}

		function chooseEducProgram() {
			var chooser = GetEducProgramChooser();

			dataChanged(); // зафиксировать изменения, если включен или выключен чекбокс

			if (chooser.groupType != GroupTypes.Combined) {
				return;
			}

			chooser.reset();
			chooser.chooseWhereCombined();
		}

		function getEducProgramDOMElement(educProgram) {
			var query = 'input[name="EDUCPROGRAMS"]';

			return $(query)
				.toArray()
				.find(function(x) { return x.value == educProgram; });
		}

		function GetEducProgramChooser() {
			// Тип группы
			var groupType = parseInt($('select[name="NEWGROUPTYPEID"]').val()) || 0;
			// чекбокс - общеразвивающая программа
			var generalEducProgDOMEl = getEducProgramDOMElement(EducPrograms.General);
			// чекбокс - адаптированная программа
			var adaptedEducProgDOMEl = getEducProgramDOMElement(EducPrograms.Adapted);

			return EducProgramChooser(groupType, generalEducProgDOMEl, adaptedEducProgDOMEl);
		}

		function editRooms() {
			postTo('/angular/school/classmanagement/rooms/');
		}

		function onChangeTransferSeats(){
			var seats = parseInt($("input[name='SeatsForTransfer']").val()) || 0
			if(seats > 0){
				$("#SeatsForTransferWarning").removeClass("hide");
			}
			else{
				$("#SeatsForTransferWarning").addClass("hide");
			}
		}

		$(function() {
			$(".copyfrom").on("click", "li",function() {
				console.log( $( this ).text().trim() );

				$("input[name=Letter2]")
				.val($( this ).text().trim());
			});

			validationParams = (function() {
				var validRules = {};
				var validMessages = {};

				return {
					//todo здесь будет ошибка, когда несколько правил добавляется для поля
					addRule: function (field, rules, messages) {
						validRules[field] = rules;

						if(messages) {
							validMessages[field] = messages;
						}
					},
					getRules: function() {
						return validRules;
					},
					getMessages: function() {
						return validMessages;
					}
				}
			})();
				
			validationParams.addRule('PLANNEDOCCUPANCY', { 
				digits: true, 
				min: 0,
				max: 999,
			});

			<%If bDrawProfiles Then%>
				validationParams.addRule('NEWPROFILEID', { selectRequired: true }, language.ClassManagement.kMsgClassProfile);
			<%End If

			If bPreSchool Then%>

				function checkRoomForClass(element) {
					var roomId = +$('[name="ROOMID"]').val();
					var roomInfo = roomsInfo[roomId];

					var stayRegimeId = +$('[name="StayRegimeId"]').val();

					// возможность сохранения с пустым помещением
					if (isEmptyRoom()) {
						return true;
					}

					// если в помещении/кабинете занимаются ГКП группы и выбран режим ГКП у группы
					if (roomInfo.gkp && stayRegimeId == 4) {
						return true;
					}

					// если помещение/кабинет не используется группами
					if (!roomInfo.used) {
						return true;
					}

					return false;
				};

				function checkAddSpecialization(element) {
					var groupTypeId = +$('[name="NEWGROUPTYPEID"]').val();
					if (groupTypeId != 3 && groupTypeId != 4) {
						return true;
					}
					var specId = +$('[name="NEWPROFILEEDUCID"]').val();
					var addSpecId = +$('[name="ADDSPECID"]').val();

					return specId != addSpecId;
				}

			// получение соответствия идентификатор комнаты - идентификатор режима пребывания
				var roomsInfo = {};

				var classesRoomsJson = <%=objClassesRooms.ToJSON(Array("roomId", "roomname", "gkp", "used", "seats"))%>;
				for (var i = 0; i < classesRoomsJson.length; i++) {
					var classRoomJson = classesRoomsJson[i];
					roomsInfo[classRoomJson["roomId"]] = { gkp: classRoomJson["gkp"], used: classRoomJson["used"], seats: classRoomJson["seats"] };
				}

				validationParams.addRule('NEWGROUPAGECATEGORYID', { selectRequired: true }, language.Generic.ClassManagement.kMsgDOUGroupAgeCategory);
				validationParams.addRule('NEWGROUPAGEID', { selectRequired: true }, language.Generic.ClassManagement.kMsgDOUGroupAge);
				
				<%' Если детсад и не обрабатываем сведения о здоровье, то не показываем специализацию группы
				If Not (bDisableHealthData) Then%>
					validationParams.addRule('NEWPROFILEEDUCID', { 
							selectRequired: true,
							dependLists: {
								matchesDictionary: {
									//все остальные
									1: [101],
									5: [101],
									6: [101],
									7: [101],

									//оздоровительная
									2: [ 106, 107, 126, 116, 114, 127, 128, 129, 130],

									//комбинированная
									3: [ 120, 113, 121, 103, 102, 105, 109, 122, 108, 123, 124, 125 ],

									//компенсирующая
									4: [ 120, 113, 121, 103, 102, 105, 109, 122, 108, 123, 124, 125 ]
								},
								dependsField: {
									fieldName: language.Generic.ClassManagement.kDOUGroupType,
									selector: '[name="NEWGROUPTYPEID"]'
								}
							}
						}, 
						{
							selectRequired: language.Generic.ClassManagement.kMsgGroupSpecialization
						}
					);

					validationParams.addRule('ADDSPECID', { 
							selectRequired: false,
							dependElements : {
								dependFunc: checkAddSpecialization,
								message: language.Generic.ClassManagement.kErrAddSpecialization
							}

						}
					);

				<%End If

				If Not bWizard Then%>
					validationParams.addRule('NEWGROUPTYPEID', { selectRequired: true }, language.Generic.ClassManagement.kMsgDOUGroupType);
					validationParams.addRule('STAYREGIMEID', { selectRequired: true }, language.Generic.ClassManagement.kMsgStayRegime);
				<%End If%>

				validationParams.addRule('CapacityNoLimits', { 
					digits: true, 
					min: 1,
					max: 999,
					required : {
						depends : function(element) {
							var groupTypeId = +$('[name="NEWGROUPTYPEID"]').val();
							return _.contains([1, 2, 3, 5, 6, 7], groupTypeId);
						}
					}
				});

				validationParams.addRule('CapacityWithOVZ', { 
					digits: true, 
					min: 1,
					max: 999,
					required : {
						depends : function(element) {
							var groupTypeId = +$('[name="NEWGROUPTYPEID"]').val();
							return _.contains([3, 4], groupTypeId);
						}
					}
				});

				validationParams.addRule('SeatsForTransfer', { 
					digits: true, 
					min: 0,
					max: 999,
				});

				validationParams.addRule('SubGroupsCount', { 
					digits: true, 
					min: 1,
					max: 10,
				});

				validationParams.addRule('ROOMID', {
					dependElements : {
						dependFunc : checkRoomForClass,
						message: language.Generic.ClassManagement.kRoomGroupWarn1
					}
				});

				validationParams.addRule('StayRegimeId', {
					selectRequired: true,
					dependElements : {
						dependFunc : checkRoomForClass,
						message: language.Generic.ClassManagement.kRoomGroupWarn2
					}
				});

				validationParams.addRule('SeatsForShort', { 
					digits: true, 
					min: 0,
					max: function(element) {
						var roomId = parseInt($('[name="ROOMID"]').val());

						if (!roomId || roomId == -1) {
							return 999;
						}

						return parseInt(roomsInfo[roomId].seats);
					},
					required : {
						depends : function(element) {
							var stayRegimeId = +$('[name="StayRegimeId"]').val();
							return stayRegimeId != 4;
						}
					}
				});

			<%Else%>
				<%If bAddSchool Then%>
					validationParams.addRule('NEWPROGID', { selectRequired: true }, language.Generic.ClassManagement.kMsgClassEducProgram);
				<%Else%>
					validationParams.addRule('NEWPROFILEEDUCID', { selectRequired: true }, language.Generic.ClassManagement.kMsgClassType);
				<%End IF%>
			<%End If%>

			validationParams.addRule('NEWTEACHERID', { selectRequired: true }, language.ClassManagement.kMsgClassChief);
		});

	<% If Not bReadonly Then%>
		function showAddClass() {
			<%If bAddSchool And objProfileEducs.EOF Then%>
				alert(language.Generic.ClassManagement.kDefineAddSchoolEducProgramsW);
				return
			<%End If%>

			$.show.dialog({
				title: language.ClassManagement.kAddClass,
				<%If bPreSchool Then%>
				size: BootstrapDialog.SIZE_WIDE,
				<%End If%>
				message: $("#addClass"),
				buttons: [{ label: language.Generic.Buttons.kSave, icon: "glyphicon glyphicon-floppy-save", action: AddNewClass }], 
				onshown: function() {
					<%If bAddSchool Then%>
					var profileEducs = <%=objProfileEducs.ToJSON(Array("id", "fullname"), Array("PROGRAMID", "PROGRAMNAME"))%>;
					<%End If%>
					$('select[name="NEWGROUPTYPEID"]').on('change', function() {
						var groupTypeId = +this.value;

						var $noLimits = $('[name="CapacityNoLimits"]').prop('disabled', false);
						var $withOVZ = $('[name="CapacityWithOVZ"]').prop('disabled', false);
						
						if(_.contains([1, 2, 5, 6, 7], groupTypeId)) {
							$withOVZ.val('');
							$withOVZ.prop('disabled', true);
						}
						else if(groupTypeId === 4) {
							$noLimits.val('');
							$noLimits.prop('disabled', true);
						}

						addClassValidator.resetForm();
					});
					<%If bAddSchool Then%>
					$('select[name="NEWPROGID"]').on('change', function() {
						var selectedId = parseInt($('select[name="NEWPROGID"]').find(':selected').val());
						var item = _.findWhere(profileEducs, {id: selectedId});
						$('textarea[name="PROGRAMMFULLNAME"]').val(item.fullname);
					});
					<%End If%>
					<%If bPreSchool Then%>
					$('input[name="SeatsForTransfer"]').on('keyup', onChangeTransferSeats);
					<%End If%>
					addClassForm = $(document.addClass);

					addClassValidator = addClassForm.validate({
						rules: validationParams.getRules(),
						messages: validationParams.getMessages()
					});

					$('select[name="NEWGROUPTYPEID"]').trigger('change');

					chooseStayRegimeId(false);
					<%If bPreSchool Then%>
						chooseGroupType(false);
					<%End If%>
				}
			});
		}

		function AddNewClass(dialog) {
			if(isDBBusy()) return false;

			checkForChanges().then(function() {
				if(!addClassForm.valid()) {
					return;
				}

				if (appContext.funcType == 1) {
					var bNoInformika = $('input[name="NOINFORMIKA"]').prop('checked');

					if (!bNoInformika && isEmptyRoom()) {
						return alert(language.Generic.ClassManagement.kErrGroupSave);
					}
				}

				<%If bCommonSchool Then%>
					var selected = $("input[name='CLASSFORMS']:checked").length;
					if (!selected) {
						return alert(language.Generic.Common.kSelectClassForms);
					}
				<%End If%>

				var letter = $('input[name="Letter2"]').val();

				$.when(!(/[А-Я]/.test(letter)) || $.show.confirmation(language.ClassManagement.kstrCASE))
					.then(function() {
						setDBBusy();
						$(document).trigger('showProcessing');
						var paramArr = $("select, input", dialog.$modalContent).serializeArray();

						if (appContext.funcType === 1) {
							// образовательные программы
							let educprograms = $('input[name="EDUCPROGRAMS"]:checked').toArray().map(function(x) { return x.value; }).join(", ");

							if (educprograms) {
								paramArr.push({ name: "EDUCPROGRAMID", value: educprograms });
							}
						}

						postTo("<%=strSaveScript%>", paramArr);
					});
			});
		};

		function isEmptyRoom() {
			var roomId = $('[name="ROOMID"]').val();

			if (roomId == '' || roomId == '-1') {
				return true;
			}
			return false;
		}

		function DeleteClass() {
			if(isDBBusy()) return false;

			if($("input:checkbox:checked[name=delClass]").length == 0) {
				alert(language.Generic.ClassManagement.kMsgNoSelectedClasses + language.Common.kClass_es);
				return;
			}

			$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function() {
				setDBBusy();
				postTo("<%=strSaveScript%>", "ACT=delete&" + $("input:checkbox:checked[name=delClass]").serialize());
			});
		}

$(function(){
	$(document).on("click", "ul.copyfrom li",function() {
	  console.log( $( this ).text().trim() );
		$("input[name=Letter2]")
		.val($( this ).text().trim());
});});

		function addTeachers( subjid ) {
			if( isDBBusy() ) return false;
			setDBBusy();
			postTo('<%=strEditSubjectTeachersScriptName%>', {SBJID: subjid, FLAG: 'NEWTEACHERS'});
		}

		function editClassSubjects( classId ) {
			if( isDBBusy() ) return false;
			setDBBusy();
			postTo("/angular/school/classmanagement/subjectgroups/?classId=" + classId)
		}

		function editClassProfile( classId ) {
			if( isDBBusy() ) return false;
			setDBBusy();
			postTo('/asp/ClassManagement/ClassProfile.asp', { PCLID: classId });
		}

	<% End If %>

	function editTermTypes() {
		postTo('/angular/school/calendar/termtypes/grades/');
	}
	</script><%
End Sub

Sub DrawSpecialButtons()
	If Not bReadonly Then
		If Not rsHang.EOF Then Exit Sub
		If bAll Then
			ButtonAdd "showAddClass()", obLanguage("ClassManagement", "kAddClass", strFunctionalityType)
		End If
		If objClassesRs.EOF Then Exit Sub
		If bAll Then
			ButtonDel "DeleteClass()", obLanguage("ClassManagement","kDelClass") & obLanguage("Common","kClass_v",strFunctionalityType)
		End If
	End If
End Sub

Sub DrawLinkButtons
	Dim hint

	If bWizard Then Exit Sub

	If Not bPreSchool Then
		If HasUserRight(arEditSchoolTermTypes) Then
			Call obTokenMgr.SetData(strToken, "backPg", strScriptName)
			hint = obLanguage("SetupSchoolCalendar","kTermTypes")
			Call Button("editTermTypes()", hint, hint, "")
		End If
		If Not bReadonly and Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then Call SimpleButton("SetRelays()", obLanguage("Buttons","kRelays"))
	Else
		If HasUserRight(arCalendarCreateCalendar) Then
			hint = obLanguage("Calendar", "kTitleRooms", strFunctionalityType)
			Call Button("editRooms()", hint, hint, "")
		End If
	End If

	Call ButtonPrint(ButtonPrintHandler())
	Call ButtonExport(ButtonExportHandler())
End Sub

Sub onDrawPage()
	DrawButtonPanel
	Call DrawTable
	If bReadonly Then Exit Sub
End Sub

Sub DrawLegend()
	If bPreSchool Then
		If bHasSomeNoContingentGroups Then%>
			<div class="legend print-block">
				<div>
					<p>
						<span class="legend-label without-students"></span>
						<span class="legend-description"> — <%=DB2Html(obLanguage("ClassManagement", "kGroupNoContingent"))%></span>
					</p>
				</div>
			</div><%
		End If
    End If
End Sub

Sub DrawClassTypes()
	Call DrawSelectInfoRow(obLanguage("ClassManagement","kClassType",strFunctionalityType), "", "NEWPROFILEEDUCID", objProfileEducs, "TYPEID","TYPENAME", "", "")
End Sub

Sub DrawPreClassesRooms()
	If Not objClassesRooms.EOF Then
		OpenFormGroup obLanguage("Common","kRoom",strFunctionalityType)%>
			<select name="ROOMID" class="form-control">
				<option value="-1"><%="<" & obLanguage("Movement", "kNotSelected") & ">"%></option>
				<%
				While Not objClassesRooms.EOF%>
					<option value="<%=objClassesRooms("ROOMID")%>" <%=IIF(CLng(objClassesRooms("USED")) = 1 And CLng(objClassesRooms("GKP")) = 0, "style="""&"color:grey;""", "")%> onchange="dataChanged();"><%=DB2HTML(objClassesRooms("ROOMNAME"))%></option><%
					objClassesRooms.MoveNext
				Wend%>
			</select><%
		CloseFormGroup
	Else
		OpenFormGroup obLanguage("Common","kRoom",strFunctionalityType)%>
			<input class="form-control" placeholder="<нет элементов для выбора>" title="<нет элементов для выбора>" disabled>
			<input type="hidden" name="ROOMID" value=""><%
		CloseFormGroup
	End If
End Sub

Sub DrawAddClass()
	If Not rsHang.BOF Then Exit Sub

	SetFiltersWidth "", "col-md-4", "col-md-8"%>
	<script id="addClass" type="text/html">
		<div>
		<form class="form-horizontal form-xs" name="addClass"><%
			OpenFormGroup obLanguage("Common","kClass",strFunctionalityType)
				%><div class="row"><%
					If Not bPreSchool Then
						%><div class="col-md-6"><%
						DrawSelectRs objGrades, "GRADEID", "GRADEID", "GRADEID", Null, Null, ""
						%></div><%
					End If

					%><div class="col-md-6"><%
						DrawSmartLetterInput strLetter
					%></div><%

					If bPreSchool Then
						%><div class="col-md-6"><%
						DrawSelectArr GetArrGrades(strFunctionalityType,1,0,0), "GRADEID", 3, Null, ""
						%></div><%
					End If
				%></div><%

			CloseFormGroup
			If bDrawProfiles Then
				Call DrawSelectInfoRow(obLanguage("Common","kProfile",strFunctionalityType), "", "NEWPROFILEID", arrAllProfiles, "", "", " ", "")
			Else
				%><input type="hidden" name="NEWPROFILEID" value="<%=arrAllProfiles(0, 0)%>"><%
			End If

			If bPreSchool Then
				Call DrawSelectInfoRow(obLanguage("ClassManagement","kDOUGroupAgeCategory"), "", "NEWGROUPAGECATEGORYID", objDOUGroupAgeCategories, "CATEGORYID","NAME", "", " ")
				Call DrawSelectInfoRow(obLanguage("ClassManagement","kDOUGroupAge"), "", "NEWGROUPAGEID", objDOUGroupAges, "AGEID","AGENAME", "", " ")

				If Not bWizard Then
					Call DrawSelectInfoRow(obLanguage("ClassManagement","kDOUGroupType"), "", "NEWGROUPTYPEID", objDOUGroupTypes, "PRETYPEID","PRETYPENAME", "", "chooseGroupType(true);")

					' Образовательные программы
					OpenFormGroup obLanguage("ClassManagement", "kEducPrograms")
						Call DrawCheckBoxesEx(objEducPrograms, "EDUCPROGRAMS", "PROGRAMID", "PROGRAMNAME", Array(), "", "", False, "chooseEducProgram();")
					CloseFormGroup

					' Если детсад и не обрабатываем сведения о здоровье, то не показываем специализацию группы
					If Not bDisableHealthData Then
						Call DrawClassTypes()
						Call DrawSelectInfoRow(obLanguage("ClassManagement","kAddSpecialization"), "", "ADDSPECID", objAddSpecialization, "TYPEID","TYPENAME", "<" & obLanguage("Movement", "kNotSelected") & ">", "")
					End If
				End If

				If Not bWizard Then
					OpenFormGroup obLanguage("ClassManagement","kStayRegime")
						DrawSelectRs objStayRegimes, "StayRegimeId", "STAYID", "STAYNAME", "", null, "chooseStayRegimeId(true);"
					CloseFormGroup

					' помещения ДОО
					DrawPreClassesRooms

					'Call DrawSelectInfoRow(obLanguage("ClassManagement","kStayRegime"), "", "STAYREGIMEID", objStayRegimes, "STAYID","STAYNAME", "", "")
					If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
						Call DrawInputTextRow(strPlannedOccupancyMessage, "", "PLANNEDOCCUPANCY", 4, 3, "dataChanged();", "")
					End If

					'OpenFormGroup obLanguage("ClassManagement","kGroupCapacity")
						%><!--<div class="row">
							<div class="col-md-6">
							<%=obLanguage("ClassManagement","kNoLimits")%><%DrawInputEx Null, "CapacityNoLimits", "text", "", 4, 15, "FilterWhiteSpace", " "%>
							</div>

							<div class="col-md-6">
							<%=obLanguage("ClassManagement","kWithOVZ")%><%DrawInputEx Null, "CapacityWithOVZ", "text", "", 4, 15, "FilterWhiteSpace", " "%>
							</div>

						</div>--><%
					'CloseFormGroup
					OpenFormGroup obLanguage("ClassManagement","kSeatsForTransfer")
						Call DrawInputEx("0", "SeatsForTransfer", "text", "", 4, 3, "", "onChangeTransferSeats()")
						%>
							<p class="bg-danger hide" id="SeatsForTransferWarning" style="padding: 8px;">
								<%=obLanguage("ClassManagement","kSeatsForTransferWarning") %>
							</p>
						<%
					CloseFormGroup
					'OpenFormGroup obLanguage("ClassManagement","kSubGroupsCount")%>
						<!--<div class="input-group"><%
							Call DrawInput("1", "SubGroupsCount", "text", "", 4, 15, "")%>

							<span class="input-group-addon" title="<%=obLanguage("ClassManagement","kSubGroupsInfo")%>" style="padding: 4px 8px;">
								<span class="glyphicon glyphicon-info-sign"></span>
							</span>
						</div>--><%
					'CloseFormGroup

					Call DrawInputTextRow(obLanguage("ClassManagement","kSeatsForShort"), 0, "SeatsForShort", 4, 3, "dataChanged();", "")

				End If

			ElseIf Not bAddSchool Then
				Call DrawClassTypes()
				
				Dim arrIup(1,1)
				arrIup(0,0) = 0: arrIup(1,0) = obLanguage("Curriculum","kClassicCP")
				arrIup(0,1) = 1: arrIup(1,1) = obLanguage("Curriculum","kIndividualCP")

				Call DrawSelectInfoRow(obLanguage("SetupSchoolCurPlan","kTitleCurriculumPlan"), 0, "IS_IUP", arrIup, "", "", "", "")
			Else
				Call DrawSelectInfoRow(obLanguage("ClassManagement","kProgDirection"), "", "NEWPROGID", objProfileEducs, "PROGRAMID","NAME_ATTR", "", "")
				%><input type="hidden" name="IS_IUP" value="0"><%

				OpenFormGroup obLanguage("Reports","kProgramFullName")%>
					<textarea name="PROGRAMMFULLNAME" class="form-control" rows="2" cols="50" wrap="soft" maxlength="255" readonly><%=objProfileEducs("PROGRAMNAME")%></textarea>
				<%CloseFormGroup
			End If

			Call DrawSelectInfoRow(obLanguage("Common","kClassChief", strFunctionalityType), "", "NEWTEACHERID", objTeachersRs, "TEACHERID","NICKNAME", "", "")
			
			' помещения ОО и ОДО
			If Not bPreSchool Then
				
				If Not bWizard Then
					OpenFormGroup obLanguage("Common","kRoom",strFunctionalityType)
						DrawSelectRs objClassesRooms, "ROOMID", "ROOMID", "ROOMNAME", "", " ", "dataChanged();"
					CloseFormGroup
				End If

				If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
					Call DrawInputTextRow(strPlannedOccupancyMessage, "", "PLANNEDOCCUPANCY", 4, 3, "dataChanged();", "")
				End If
			End If

			If bPreSchool Then
				Call DrawCheckBox(obLanguage("ClassManagement", "kDOUNoInformika"), "NOINFORMIKA", "Y", False, "dataChanged();")
			End If

			If (Not bPreSchool) And (Not bAddSchool) Then
				If Not objVacations.Eof Then
					OpenFormGroup obLanguage("Common","kVacationHeader")
						Call DrawCheckBoxes(objVacations, "VACATIONS", "VACATIONID", "VACATIONNAME", arrVacations, "", "", False)
					CloseFormGroup
				End If
			End If

			If bCommonSchool Then
				OpenFormGroup obLanguage("ClassManagement", "kClassView")
					Call DrawCheckBoxes(objClassForms, "CLASSFORMS", "CLASSFORMID", "CLASSFORMNAME", arrClassForms, "", "", False)
				CloseFormGroup
			End If
			%>
			<input type="hidden" name="ACT" value="addnew">
		</form>
		</div>
	</script><%
	RestoreDefFiltersWidth
End Sub

Sub DrawTable()



	Dim strClassName,  strTypeName
	Dim strCurId, strIupId, nGrade, bIup
	Dim strHangWarning
	Dim nRowCount, nColCount
	Dim nStayRegimeId

	If Not rsHang.EOF Then
		strHangWarning = obLanguage("ClassManagement","kNotAssignedTeachers")
		If bReadonly Then
			While Not rsHang.EOF
				strHangWarning = strHangWarning & "<br />" & DB2HTML(rsHang("SUBJECTNAME"))
				rsHang.MoveNext
			Wend
		Else
			While Not rsHang.EOF
				strHangWarning = strHangWarning & "<br />" & ShowAnchor("addTeachers('" & rsHang("SUBJECTID") & "')", obLanguage("ClassManagement","kAssignTeacher",strFunctionalityType), DB2HTML(rsHang("SUBJECTNAME")), "")
				rsHang.MoveNext
			Wend
			strHangWarning = strHangWarning & "<br />" & obLanguage("ClassManagement","kToDo")
		End If
		DrawWarning strHangWarning
		If Not bReadonly Then Exit Sub
	End IF

	If bFutureMode Then 
		If objNSNET.HasMultipleSameTerms(strCurrYearID) Then
			DrawWarning DB2HTML_BR(obLanguage("SetupSchoolCalendar","kWarnFutureTerms"))
			Exit Sub
		End If
		DrawWarning DB2HTML_BR(WarnFutureClasses())
	End If

	nRowCount = IIf(Not bWizard, 2, 1)
	nColCount = 3
	If Not objClassesRs.EOF Then
		Set objTempTeachersRs = objClassesRs.Fields()("rsClassTeachers").Value%>
		<table class="table table-xs table-bright-striped table-bright-hover print-block">
			<tr><%
				DrawHeaderCell_Row obLanguage("Common","kClass",strFunctionalityType), nRowCount
				If bDrawProfiles Then
					DrawHeaderCell_Row obLanguage("Common","kProfile", strFunctionalityType), nRowCount
				End If
				If bAddSchool Then
					DrawHeaderCell_Row obLanguage("ClassManagement","kProgDirection"), nRowCount
				ElseIf bPreSchool Then
					DrawHeaderCell_Row obLanguage("ClassManagement","kDOUGroupAgeCategory"), nRowCount
					DrawHeaderCell_Row obLanguage("ClassManagement","kDOUGroupAge"), nRowCount
					DrawHeaderCell_Row obLanguage("ClassManagement","kEducPrograms"), nRowCount
					If Not bWizard Then
						DrawHeaderCell_Row obLanguage("ClassManagement","kDOUGroupType"), nRowCount
					End If
					' Если детсад и не обрабатываем сведения о здоровье, то не показываем специализацию группы
					If Not (bDisableHealthData) Then
						DrawHeaderCell_Row obLanguage("ClassManagement","kClassType",strFunctionalityType), nRowCount
						If Not bWizard Then
							DrawHeaderCell_Row obLanguage("ClassManagement","kAddSpecialization"), nRowCount
						End If
					End If
					If Not bWizard Then
						DrawHeaderCell_Row obLanguage("ClassManagement","kStayRegime"), nRowCount
						DrawHeaderCell_Col obLanguage("Common","kRoom",strFunctionalityType), nColCount
						'DrawHeaderCell_Row obLanguage("ClassManagement","kGroupArea"), nRowCount
						'DrawHeaderCell_Col obLanguage("ClassManagement","kGroupCapacity"), 2
						If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
							DrawHeaderCell_Row strPlannedOccupancyMessage, nRowCount
						End If
						DrawHeaderCell_Row obLanguage("ClassManagement","kSeatsForTransfer"), nRowCount
						DrawHeaderCell_Row obLanguage("ClassManagement","kSeatsForShort"), nRowCount
						'DrawHeaderCell_Row obLanguage("ClassManagement","kSubGroupsCount"), nRowCount
					End If
				Else
					DrawHeaderCell_Row obLanguage("ClassManagement","kClassType",strFunctionalityType), nRowCount
					DrawHeaderCell_Row obLanguage("SetupSchoolCurPlan","kTitleCurriculumPlan"), nRowCount
				End If
				If Not bPreSchool Then
					DrawHeaderCell_Col obLanguage("Common","kRoom",strFunctionalityType), nColCount
					If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
						DrawHeaderCell_Row strPlannedOccupancyMessage, nRowCount
					End If
				End  If
				DrawHeaderCell_Row obLanguage("Common","kClassChief", strFunctionalityType), nRowCount
				If bPreSchool Then 
					DrawHeaderCell_Row obLanguage("ClassManagement","kDOUNoInformika"), nRowCount
				End If
				If bAll and not bIsAnyGradeEmptyTermTypes Then Response.Write ShowDelCellHeader(nRowCount)%>
			</tr><%
			If bPreSchool And Not bWizard Then%>
				<!--<tr><%
					'DrawHeaderCell obLanguage("ClassManagement","kNoLimits")
					'DrawHeaderCell obLanguage("ClassManagement","kWithOVZ")%>
				</tr>--><%
			End If

			If Not bWizard Then%>
				<tr><%
					DrawHeaderCell obLanguage("Common","kName")
					DrawHeaderCell_Seats
					DrawHeaderCell obLanguage("ClassManagement","kCorpus")%>
				</tr><%
			End If

			nGradeOld = -1
			While Not objClassesRs.EOF
				strClassName = DB2HTML( objClassesRs("CLASSNAME") )
				strConcatTeachers = GetClassTeachersString(objTempTeachersRs)
				nGrade = CInt(objClassesRs("GRADE"))
				strCurId = CStr(objClassesRs("CLASSID"))
				bIup = (objClassesRs("IUP") > 0)
				If bIup Then
					strIupId = objClassesRs("GRADE") & "_1"
				Else
					strIupId = strCurId & "_0"
				End If
			%><tr <%=GetWithoutStudentsStyle(strCurId)%>><%
				If bWizard Or bReadonly Then
					Call DrawCell(strClassName)
				Else
					Call DrawCell(ShowAnchor( "editClassSubjects('" & strIupId & "')", obLanguage("Common","kSubjects"), strClassName, "" ))
				End If

				If bDrawProfiles Then Call DrawProfiles(nGrade, strCurId)

				strTypeName = DB2HTML( objClassesRs(IIf(bAddSchool,12,7)) )

				If bPreSchool Then
					If bWizard Or bReadonly Or Not HasUserRight(arClassMgmCreateClass) Then
						DrawCell(DB2HTML(objClassesRs("CATEGORYNAME")))
					Else
						Call DrawCell( ShowAnchor( "editClassProfile('" & strCurId & "')", obLanguage("Common","kChange"),  objClassesRs("CATEGORYNAME"), "" ))
					End If

					Call DrawCell(DB2HTML( objClassesRs("AGENAME") ))
					' Образовательные программы в дошкольной группе
					Call DrawCell(DB2HTML( GetPreClassEducPrograms(GetSafeLng(objClassesRs("CLASSID"), 0)) ))

					If Not bWizard Then
						Call DrawCell(DB2HTML( objClassesRs("PRETYPENAME") ))
					End If

					' Если детсад и не обрабатываем сведения о здоровье, то не показываем специализацию группы
					If Not (bDisableHealthData) Then
						Call DrawCell(strTypeName)
						If Not bWizard Then
							Call DrawCell(DB2HTML( objClassesRs("ADDSPECIAL") ))
						End If
					End If

					If Not bWizard Then
						Call DrawCell(DB2HTML( objClassesRs("STAYNAME") ))
						Call DrawCell(DB2HTML( objClassesRs("ROOMNAME") ))
						Call DrawCell(DB2HTML( objClassesRs("SEATS") ))
						' Здесь должен заполняться корпус помещения
						Call DrawCell(DB2HTML( objClassesRs("CORPUS") ))
						If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
							Call DrawCell(DB2HTML(objClassesRs("PLANNEDOCCUPANCY")))
						End If
						Call DrawCell(DB2HTML( objClassesRs("SEATSFORTRANSFER") ))

						nStayRegimeId = GetSafeLng(objClassesRs("STAYID"), 0)
						Call DrawCell(DB2HTML(IIf(nStayRegimeId = 4, "", objClassesRs("SEATSFORSHORT"))))
						'Call DrawCell(DB2HTML( objClassesRs("SUBGROUPSCOUNT") ))
					End If
				Else
					If bWizard Or bDrawProfiles Or bReadonly Or Not HasUserRight(arClassMgmCreateClass) Then
						Call DrawCell(strTypeName)
					Else
						Call DrawCell( ShowAnchor( "editClassProfile('" & strCurId & "')", obLanguage("Common","kChange"), strTypeName, "" ))
					End If
					If Not (bAddSchool) Then
						Call DrawCell( IIF(bIup, obLanguage("Curriculum","kIndividualCP"), obLanguage("Curriculum","kClassicCP")))
					End If
				End If

				If Not bPreSchool Then
					Call DrawCell(DB2HTML( objClassesRs("ROOMNAME") ))
					Call DrawCell(DB2HTML( objClassesRs("SEATS") ))
					' Здесь должен заполняться корпус помещения
					Call DrawCell(DB2HTML( objClassesRs("CORPUS") ))
					If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
						Call DrawCell(DB2HTML( objClassesRs("PLANNEDOCCUPANCY") ))
					End If
				End If
				If HasUserRight(arClassMgmCreateClass) And Not bWizard And Not bReadonly Then
					Call DrawCell( ShowAnchor( "editClassProfile('" & strCurId & "')", obLanguage("Common","kChange"), strConcatTeachers, "" ) )
				Else
					Call DrawCell( strConcatTeachers )
				End If
				If bPreSchool Then
					DrawNoInformika(objClassesRs("NOINFORMIKA"))
				End If
				If bAll And Not bReadonly Then Call DrawDelCheckBox(strCurId)
				%></tr><%
				objClassesRs.MoveNext
			Wend
		%></table><%
		DrawLegend
	End If

	%><form name="MainForm" method="post" action="Classes.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("ViewType", "", "PCLID_IUP", "", "SBJID", "", "BackPage", strScriptName, "DOCTYPE", "") )%>
	</form><%

	If Not bReadonly And bAll Then
		Call DrawAddClass()
	End If
End Sub

Function GetPreClassEducPrograms(classId)
	Dim objPreClassEducPrograms

	GetPreClassEducPrograms = ""

	If classId = 0 Then Exit Function

	Set objPreClassEducPrograms = objNSNET.GetPreClassesEducPrograms(classId)

	While Not objPreClassEducPrograms.EOF
		GetPreClassEducPrograms = GetPreClassEducPrograms & "<br />" & DB2HTML(objPreClassEducPrograms("PROGRAMNAME"))
		objPreClassEducPrograms.MoveNext
	Wend
End Function

Sub DrawNoInformika(id)
	If id = "Y" Then 
		%><td class="text-center">не выгружать</td><%
	Else
		%><td></td><%
	End If
End Sub

Sub DrawDelCheckBox(id)
	%><td class="text-center"><%
		If Not IsDull(objClassesRs("USED_IN_MOV_DOC")) Then
			%><span style="cursor:help;" onclick="alert(language.Generic.ClassManagement.kNotAvailableToDelete);"><b>X</b></span><%
		Else
			%><input TYPE="checkbox" NAME="delClass" VALUE="<%=id%>"><%
		End If%>
	</td><%
End Sub

Sub DrawProfiles(nGrade, strCurId)

	Dim strTmp, j
	If nGradeOld < nGrade Then
		nGradeOld = nGrade
		arrProfiles = objNSNET.GetGradeProfileList(nGrade, strSchoolID )
	End If
	j = 0
	Do While objClassesRs("PROFILEID") <> arrProfiles( 0, j )
		j = j + 1 : If j > Ubound(arrProfiles,2) Then Exit Do
	Loop
	If j <= Ubound(arrProfiles,2) Then strTmp = DB2HTML( arrProfiles( 1, j ) ) Else strTmp="-------"

	If bWizard Or bReadonly Or Not HasUserRight(arClassMgmCreateClass) Then
		Call DrawCell(strTmp)
	Else
		Call DrawCell(ShowAnchor( "editClassProfile('" & strCurId & "')", obLanguage("Common","kChange"), strTmp, "" ))
	End If
End Sub

Sub DrawHeaderCell(strText)
	Call DrawHeaderCell_Ex(strText, 0, 0)
End Sub

Sub DrawHeaderCell_Col(strText, nColSpan)
	Call DrawHeaderCell_Ex(strText, nColSpan, 0)
End Sub

Sub DrawHeaderCell_Row(strText, nRowSpan)
	Call DrawHeaderCell_Ex(strText, 0, nRowSpan)
End Sub

Sub DrawHeaderCell_Ex(strText, nColSpan, nRowSpan)
	Dim strColSpan, strRowSpan
	
	strColSpan = IIf(nColSpan > 1, " colspan=" & nColSpan, "")
	strRowSpan = IIf(nRowSpan > 1, " rowspan=" & nRowSpan, "")
	%><th <%=strColSpan%> <%=strRowSpan%>><%=strText%></th><%
End Sub

Sub DrawCell(strText)
	%><td><%=strText%></td><%
End Sub

Sub DrawHeaderCell_Seats()%>
	<th>
		<span class="glyphicon glyphicon-user visible-sm visible-xs" title="<%=obLanguage("Calendar","kSeats", strFunctionalityType)%>"></span>
		<span class="hidden-sm hidden-xs"><%=obLanguage("Calendar","kSeats", strFunctionalityType)%></span>
	</th><%
End Sub

Function GetClassTeachersString(objTeachersRs)
	Dim str
	str = ""
	If Not objTeachersRs.EOF Then
		While Not objTeachersRs.EOF
			str = str & DB2HTML(objTeachersRs("NICKNAME")) & "<br>"
			objTeachersRs.MoveNext
		Wend
		str = Left(str, Len(str)-4)
	End If
	GetClassTeachersString = str
End Function

Function WarnFutureClasses()
	WarnFutureClasses = obLanguage("SetupSchoolCalendar","kWarnFutureClasses").Format(Array(obLanguage("Common","kClass_es", strFunctionalityType), obLanguage("Common","kClassChief_es", strFunctionalityType), LCase(obLanguage("SchoolSettings","kGrade_Bounds", strFunctionalityType)), IIF(bPreSchool, "\n" & obLanguage("SetupSchoolCalendar","kAddWarnFutureClassesPreSchool"), "")))
End Function
%>
