<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterTeachers.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterClasses.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Dim lngProfile, lngGrade, arrProfiles, nIupFlag, strLetter
Dim bProfileEducForm, objProfileEducs, objEducPrograms, lngProfileEducID
Dim objTeachers, lngTeacherID, arrClassTeachers
Dim bAddSchool, bPreSchool, bCommonSchool, objAddProgramInfo, objClassTeachers
Dim objDOUGroupTypes, objDOUGroupAgeCategories, objDOUGroupAges, nGroupTypeID, nGroupAgeID, nGroupAgeCategoryID, strNoInformika
Dim objStayRegimes, nStayID, fArea, nSeatsForTransfer, nSubGroupsCount, nPlannedOccupancy
Dim rsClassSubjects
Dim objClassesRooms, nRoomID
Dim bAll
Dim arrIup 
Dim bCanChangeProfile
Dim strPlannedOccupancyMessage
Dim objClassVacations, objVacations, arrClassVacations
Dim objClassesForms, objClassForms, arrClassForms
Dim nSeatsForShort
Dim objAddSpecialization, nAddSpecialID
Dim objPreClassEducPrograms, arrPreClassEducPrograms
Dim bNoContingent, dtNoContingentDate

Function GetPageTitle()
	GetPageTitle = obLanguage("ClassManagement","kEditingClass", strFunctionalityType)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningGroups
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbCrtClass
 	bTabInternalPage = True
End Function

Function hasUserRightsOnPage()
	If HasUserRight( arClassMgmCreateClass ) Then bAll=True :  hasUserRightsOnPage = True: Exit Function
	If HasUserRight( arClassMgmViewClassSubjAll ) Then
		bAll = bIsEMForSchool
		hasUserRightsOnPage = True
		Exit Function
	End If
	hasUserRightsOnPage = False
End Function

Function GetFiltersLabelWidth
	GetFiltersLabelWidth = "col-md-4"
End Function

Function GetFiltersWidth
	GetFiltersWidth = "col-md-8"
End Function

Sub ReadState()
	Dim objClassInfo, objPreClassInfo, objGradesWithMarksRs, arrClassVacations2

	If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
		strPlannedOccupancyMessage = Replace(Replace(obLanguage("ClassManagement", "kPlannedOccupancy"), "students_r", obLanguage("Common", "kStudents_r", strFunctionalityType)), "year", left(obTokenMgr.GetData(strToken, "CurrYearName"), 4))
	End If
	Call InitYearClasses()

	bCommonSchool = (CLng(strFunctionalityType) = kFuncType_Common)
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)

	If Not bAll Then readonly = True
	Set objClassInfo = objNSNET.GetClassInfo(strClassID)
	Set objVacations = objNSNET.GetVacations(strCurrYearID)
	Set objClassVacations = objNSNET.GetVacationsByClassId(strClassID)

	arrClassVacations2 = objClassVacations.GetRows(,,Array("VACATIONID"))
	arrClassVacations = Array()
	ReDim arrClassVacations(Ubound(arrClassVacations2, 2))
	Dim i
	Do While i <= Ubound(arrClassVacations2, 2)
		arrClassVacations(i) = arrClassVacations2(0, i)
		i = i + 1
	Loop

	If bCommonSchool Then
		' Вид класса
		' значения справочника
		Set objClassForms = objNSNET.GetClassForms()
		Set objClassesForms = objNSNET.GetClassesFormsByClassId(strClassID)
		arrClassForms = GetZeroElementArray(objClassesForms.GetRows(,,Array("CLASSFORMID")))
	End If

	If bPreSchool Then
		Set objPreClassInfo = objNSNET.GetPreClassInfo(strClassID)
	End If

	nIupFlag = IIF(objClassInfo("IUP") > 0, 1, 0)
	strLetter = objClassInfo("LETTER")
	lngProfile = GetSafeLng( objClassInfo("PROFILEID"), Null )
	lngGrade = GetSafeLng( objClassInfo("GRADE"), Null )
	lngTeacherID = GetSafeLng( objClassInfo("TEACHERID"), Null )
	If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
		nPlannedOccupancy = objClassInfo("PLANNEDOCCUPANCY")
	End If
	
	arrProfiles = objNSNET.GetGradeProfileList(lngGrade, strSchoolID)
	bCanChangeProfile = (UBound( arrProfiles, 2 ) > 0)
	bProfileEducForm = False

	Set objClassesRooms = objNSNET.GetClassesRooms(strSchoolID, strCurrYearID)
	' текущее помещение занимаемое классом/группой
	nRoomID =  objNSNET.GetSafeClassRoom(strCurrYearID, strClassID)

	If bAddSchool Then
		lngProfileEducID = GetSafeLng( objClassInfo("PROGID"), -1 )
		Set objAddProgramInfo = objNSNET.GetAddProgram(lngProfileEducID, strCurrYearID, -1)
	Else
		lngProfileEducID = GetSafeLng( objClassInfo("TYPEID"), Null )
		Set objProfileEducs = objNSNET.GetClassesTypes(strFunctionalityType)

		If bPreSchool Then
			Set objEducPrograms = objNSNET.GetEducPrograms()
			Set objPreClassEducPrograms = objNSNET.GetPreClassesEducPrograms(strClassID)
			arrPreClassEducPrograms = GetZeroElementArray(objPreClassEducPrograms.GetRows(,,Array("PROGRAMID")))

			Set objDOUGroupTypes = objNSNET.GetDOUGroupTypes()
			Set objDOUGroupAgeCategories = objNSNET.GetDOUGroupAgeCategories()
			Set objDOUGroupAges = objNSNET.GetDOUGroupAges()
			Set objStayRegimes = objNSNET.GetStayRegimes()
			Set objAddSpecialization = objNSNET.GetAddSpecialization()
			nAddSpecialID = GetSafeLng(objClassInfo("ADDSPECIALID"), -1)
			dtNoContingentDate = GetNoContingentDate()
			bNoContingent = Not IsDull(dtNoContingentDate)

			If objPreClassInfo.EOF Then
				nGroupTypeID = 1
				nGroupAgeCategoryID = 1
				nGroupAgeID = 1
				nStayID = 1
				strNoInformika = "N"
				nSeatsForTransfer = 0
				nSeatsForShort = 0
				nSubGroupsCount = 1
			Else
				nGroupTypeID = GetSafeLng( objPreClassInfo("PRETYPEID").Value, -1 )
				nGroupAgeCategoryID = GetSafeLng( objPreClassInfo("AGECATEGORYID").Value, -1 )
				nGroupAgeID = GetSafeLng( objPreClassInfo("AGEID").Value, -1 )
				nStayID = GetSafeLng( objPreClassInfo("STAYID").Value, -1 )
				strNoInformika = GetSafeStr( objPreClassInfo("NOINFORMIKA").Value, -1, "N" )
				nSeatsForTransfer = GetSafeLng( objPreClassInfo("SEATSFORTRANSFER").Value, 0 )
				nSeatsForShort = GetSafeLng( objPreClassInfo("SEATSFORSHORT").Value, 0 )
				nSubGroupsCount = GetSafeLng( objPreClassInfo("SUBGROUPSCOUNT").Value, 1 )
			End If
		End If
	End If
End Sub

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


Sub Main()
	Set rsClassSubjects = objNSNET.GetClassSubjectList(strClassID)

	Set objTeachers = objNSNET.GetTeacherListAndClassChiefs(strCurrYearID, strClassID)
	If objTeachers.EOF Then GenerateError obLanguage("Filter","kNoTeachersGB",strFunctionalityType)

	ReDim arrIup(1,1)
	arrIup(0,0) = 0: arrIup(1,0) = obLanguage("Curriculum","kClassicCP")
	arrIup(0,1) = 1: arrIup(1,1) = obLanguage("Curriculum","kIndividualCP")
End Sub

Function GetNoContingentDate
	Dim obNoContingentInfoComponent

	Set obNoContingentInfoComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.INoContingentInfoComponent")
	GetNoContingentDate = obNoContingentInfoComponent.GetNoContingentDate(CLng(strClassID))
End Function

Sub WriteState()
	WriteClass
End Sub

Sub onHead()%>

<script src="<%=GetVersionedJsLink("libs/jquery.validate/jquery.validate.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("libs/jquery.validate/localization/messages_ru.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("uikit.validate.js")%>" type="text/javascript"></script>

<script type="text/javascript">
	var profileEducValidator;

	function groupTypeChange(id) {
		var groupTypeId = +$('[name="GROUPTYPEID"]').val();

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

		if(profileEducValidator) {
			profileEducValidator.resetForm();
		}
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



$(document).ready(function() {
	$('input[name="SeatsForTransfer"]').on('keyup', onChangeTransferSeats);
	$('select[name="GROUPTYPEID"]').on('change', groupTypeChange);

	groupTypeChange();

	<%If bPreSchool Then%>

		onChangeTransferSeats();

		function checkEducProgramForGroupType(element) {
			var groupTypeId = +$('[name="GROUPTYPEID"]').val();
			var educProgramId = +$('[name="EDUCPROGRAMID"]').val();
			if ((groupTypeId == 4 && educProgramId == 4) || educProgramId != 4) {
				return true;
			}
			return false;
		}

		function checkAddSpecialization(element) {
			var groupTypeId = +$('[name="GROUPTYPEID"]').val();
			if (groupTypeId != 3 && groupTypeId != 4) {
				return true;
			}
			var specId = +$('[name="PROFILEEDUCID"]').val();
			var addSpecId = +$('[name="ADDSPECID"]').val();

			return specId != addSpecId;
		}

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

			// если помещение/кабинет не поменялся
			if (roomId == preClassRoomId && (!roomInfo.gkp || !roomInfo.used)) {
				return true;
			}

			if (!roomInfo.used) {
				return true;
			}

			return false;
		};

		// получение соответствия идентификатор комнаты - идентификатор режима пребывания
		var roomsInfo = {};

		var classesRoomsJson = <%=objClassesRooms.ToJSON(Array("roomId", "roomname", "gkp", "used", "seats"))%>;
		for (var i = 0; i < classesRoomsJson.length; i++) {
			var classRoomJson = classesRoomsJson[i];
			roomsInfo[classRoomJson["roomId"]] = { gkp: classRoomJson["gkp"], used: classRoomJson["used"], seats: classRoomJson["seats"] };
		}

		// идентификатор помещения/кабинета
		var preClassRoomId = <%=nRoomID%>;

		chooseStayRegimeId(false);
		chooseGroupType(false, false);
		profileEducValidator = $(document.ProfileEduc).validate({
			rules: {
				CapacityNoLimits: {
					digits: true, 
					min: 1,
					max: 999,
					required : {
						depends : function(element) {
							var groupTypeId = +$('[name="GROUPTYPEID"]').val();

							return _.contains([1, 2, 3, 5, 6, 7], groupTypeId);
						}
					}
				},
				CapacityWithOVZ: {
					digits: true, 
					min: 1,
					max: 999,
					required : {
						depends : function(element) {
							var groupTypeId = +$('[name="GROUPTYPEID"]').val();

							return _.contains([3, 4], groupTypeId);
						}
					}
				},
				SeatsForTransfer: {
					digits: true, 
					min: 0,
					max: 999
				},

				SubGroupsCount: {
					digits: true, 
					min: 1,
					max: 10
				},
				PROFILEEDUCID: {
					dependLists: {
						matchesDictionary: {
							//все остальные
							1: [101],
							5: [101],
							6: [101],
							7: [101],

							//оздоровительная
							2: [ 106, 107, 126, 116, 114, 127, 128, 129, 130 ],

							//комбинированная
							3: [ 120, 113, 121, 103, 102, 105, 109, 122, 108, 123, 124, 125 ],

							//компенсирующая
							4: [ 120, 113, 121, 103, 102, 105, 109, 122, 108, 123, 124, 125 ]
						},
						dependsField: {
							fieldName: language.Generic.ClassManagement.kDOUGroupType,
							selector: '[name="GROUPTYPEID"]'
						}
					}
				},

				ADDSPECID: {
					dependElements : {
						dependFunc : checkAddSpecialization,
						message: language.Generic.ClassManagement.kErrAddSpecialization
					}
				},

				ROOMID: {
					dependElements : {
						dependFunc : checkRoomForClass,
						message: language.Generic.ClassManagement.kRoomGroupWarn1
					}
				},

				EDUCPROGRAMID: {
					dependElements: {
						dependFunc: checkEducProgramForGroupType,
						message: language.Generic.ClassManagement.kErrEducProgramForGroupType
					}
				},

				StayRegimeId: {
					dependElements : {
						dependFunc : checkRoomForClass,
						message: language.Generic.ClassManagement.kRoomGroupWarn2
					}
				},

				PLANNEDOCCUPANCY: {
					digits: true, 
					min: 1,
					max: 999
				},

				SeatsForShort: {
					digits: true, 
					min: 0,
					max: function(element) {
						var roomId = +$('[name="ROOMID"]').val();
						return roomId == -1 ? 999 : +roomsInfo[roomId].seats;
					},
					required : {
						depends : function(element) {
							var stayRegimeId = +$('[name="StayRegimeId"]').val();
							return stayRegimeId != 4;
						}
					}
				}

			}
		});
	<%Else
	If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then%>
			profileEducValidator = $(document.ProfileEduc).validate({
				rules: {
					PLANNEDOCCUPANCY: {
						digits: true, 
						min: 1,
						max: 999
					}
				}
			});
		<%End If%>
	<%End If%>
});

function Back() {
	goBack( document.ClassList, "Classes.asp" );
}
function editChiefs( id ){
	var form = document.forms["ClassList"];
	form.elements["CLID"].value = id;
	DoSubmit( form, "ClassChiefsEdit.asp" )
}
function editClass( id ){
	var form = document.forms["ClassList"];
	form.elements["CLID"].value = id;
	DoSubmit( form, "ClassSubjectEdit.asp" );
}

function saveChanges(){
	var form = document.ClassList;
	form.elements["ACT"].value = "editprofile";

	if (form.PROFID != undefined){
		if ( getListValue( form.PROFID) != <%=lngProfile%>)
				ok_check_db('ClassList', '');
	}
}

function chooseStayRegimeId(changeFlag)
{
	$('select[name="StayRegimeId"]').val() == "4" 
		? $('input[name="SeatsForShort"]').closest('.form-group').hide()
		: $('input[name="SeatsForShort"]').closest('.form-group').show();

	if (changeFlag) 
		dataChanged(); 
}

function chooseGroupType(changeFlag, selectFlag) {
	var groupType = parseInt($('select[name="GROUPTYPEID"]').val()) || 0;
	var formGroup = $('select[name="ADDSPECID"]').closest('.form-group');
	(groupType == 3 || groupType == 4) ? formGroup.show() : formGroup.hide();

	// авто выбор программы обучения
	autoChooseEducPrograms(groupType, selectFlag);

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

function autoChooseEducPrograms(groupType, checkCombined) {
	var chooser = GetEducProgramChooser();

	// не участвует в первоначальной инициализации образовательных программ
	// если пользователь выбрал тип группы комбинированная
	if (checkCombined) {
		if (chooser.groupType == GroupTypes.Combined) {
			chooser.generalEducProgDOMEl.checked = true;
		}
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
	var groupType = parseInt($('select[name="GROUPTYPEID"]').val()) || 0;
	// чекбокс - общеразвивающая программа
	var generalEducProgDOMEl = getEducProgramDOMElement(EducPrograms.General);
	// чекбокс - адаптированная программа
	var adaptedEducProgDOMEl = getEducProgramDOMElement(EducPrograms.Adapted);

	return EducProgramChooser(groupType, generalEducProgDOMEl, adaptedEducProgDOMEl);
}


function saveProfileEduc() {

	var confirms = new Array();

	if (appContext.funcType == 1) {
		var bNoInformika = $('input[name="NOINFORMIKA"]').prop('checked');

		if (!bNoInformika && isEmptyRoom()) {
			return alert(language.Generic.ClassManagement.kErrGroupSave);
		}
	}

	var form = document.ProfileEduc;
	form.elements["ACT"].value = "editprofileeduc";<%

	If Not bAddSchool Then%>
		if ((form.PROFILEEDUCID != undefined && getListValue(form.PROFILEEDUCID) != <%=lngProfileEducID%>) <%If Not bPreSchool Then %>|| $(form.TID).val() != <%=lngTeacherID%><%Else%> || dataWereChanged <%End If%>)
	<%End If%>

	var bConflicts;
	bConflicts = false;

	$('select[type=select-multiple]').each(function(el) {
		var select = $('select[type="select-multiple"]')[el];

		if(!$(select).val()) {
			select.trigger("focus");
			bConflicts = true;
			alert(language.ClassManagement.kMsgClassChief);
		}
	});

	<%If Not (bPreSchool Or bAddSchool) And nIupFlag = 0 Then %>
		if($('select[name="IS_IUP"]', form).val() == 1) {
			<%If IsWorkYear() And GetSafeBool(obTokenMgr.GetData(strToken, stFutureYearExists), False) Then %>
				alert(language.ClassManagement.kWarnChangeCurrPlanNotAvailableWhenFutureYearExists);
				return;
			<%Else%>
				confirms.push($.show.getConfirmation(language.ClassManagement.kConfirmChangeCurrPlanForClass1));
				confirms.push($.show.getConfirmation(language.Generic.ClassManagement.kConfirmChangeCurrPlanForClass2));
			<%End If %>
		}
	<%End If %>

	<%If bCommonSchool Then%>
		var selected = $("input[name='CLASSFORMS']:checked").length;
		if (!selected) {
			return alert(language.Generic.Common.kSelectClassForms);
		}
	<%End If%>
		
	if(!$(document.ProfileEduc).valid()) {
		return;
	}

	let data = null;
	if (appContext.funcType === 1) {
		// образовательные программы
		let educprograms = $('input[name="EDUCPROGRAMS"]:checked').toArray().map(function(x) { return x.value; }).join(", ");

		if (educprograms) {
			data = { "EDUCPROGRAMID": educprograms };
		}
	}

	extDeferred.when(confirms).then(function() {
		if(bConflicts){
			return;
		}
		var form = document.ProfileEduc;
		jsSaveForm(form, data)
			.done(function () {
				var iup = $('select[name="IS_IUP"]', form).val() == 1;

				var classNameInfo = $('input[name="LETTER"]', form).closest(".classNameInfo");
				if (iup) {
					classNameInfo.hide();
				}
				else {
					classNameInfo.show();
				}
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
</script><%
End Sub

Sub DrawClassEditForm()
	Dim strHeader
	strHeader = IIF(bPreSchool, obLanguage("ClassManagement","kClassType",strFunctionalityType) & ", " & obLanguage("ClassManagement","kProgDirection_") & obLanguage("ClassManagement","kLearning") & " " & obLanguage("ClassManagement","kAnd") & " " & LCase(obLanguage("Common","kClassChief",strFunctionalityType)), IIf(bAddSchool, obLanguage("ClassManagement","kProgDirection"), obLanguage("ClassManagement","kClassType",strFunctionalityType)) & " " & obLanguage("ClassManagement","kAnd") & " " & LCase(obLanguage("Common","kClassChief",strFunctionalityType)))

	OpenPanelEx strHeader, "editclass", "", False, "panel-success"
	Call SetFiltersWidth("", "col-md-4", "col-md-8")
	
	%><div class="classNameInfo" <%=IIF(nIupFlag = 1, "style='display:none'", "")%>><%
		OpenFormGroup obLanguage("Common","kClass", strFunctionalityType)
			%><div class="row">
				<%
				If Not bPreSchool Then
					%>
					<div class="col-md-6">
						<input type="text" class="form-control" name="GRADEID" disabled="disabled" readonly="readonly" maxlength="2" value="<%=Db2Value(lngGrade)%>"/>
					</div>
					<%
				End If
				%>	
				<div class="col-md-6">
					<input type="text" class="form-control" name="LETTER" maxlength="15" value="<%=Db2Value(strLetter)%>" onchange="dataChanged()"/>
				</div>
				<%
				If bPreSchool Then
					%><div class="col-md-6"><%
					DrawSelectArr GetArrGrades(strFunctionalityType,1,0,0), "GRADEID", lngGrade, Null, ""
					%></div><%
				End If
				%>
				</div><%
		CloseFormGroup
	%></div><%

	If bAddSchool Then
		Dim strProgName
		If Not objAddProgramInfo.EOF Then
			strProgName = objAddProgramInfo("PROGRAMNAME")
		End If
		DrawTitleRow obLanguage("ClassManagement","kProgDirection"), strProgName
		
		' помещения ОДО
		OpenFormGroup obLanguage("Common","kRoom",strFunctionalityType)
			DrawSelectRs objClassesRooms, "ROOMID", "ROOMID", "ROOMNAME", nRoomID, " ", "dataChanged();"
		CloseFormGroup
	Else
		If bPreSchool Then
			DrawFilterRow "", obLanguage("ClassManagement","kDOUGroupAgeCategory"), "AGECATEGORYID", objDOUGroupAgeCategories, "CATEGORYID", "NAME", nGroupAgeCategoryID, False
			DrawFilterRow "", obLanguage("ClassManagement","kDOUGroupAge"), "GROUPAGEID", objDOUGroupAges, "AGEID", "AGENAME", nGroupAgeID, False

			'DrawFilterRow "", obLanguage("ClassManagement","kDOUGroupType"), "GROUPTYPEID", objDOUGroupTypes, "PRETYPEID", "PRETYPENAME", nGroupTypeID, False
			OpenFormGroup obLanguage("ClassManagement","kDOUGroupType")
				DrawSelectRs objDOUGroupTypes, "GROUPTYPEID", "PRETYPEID", "PRETYPENAME", nGroupTypeID, null, "chooseGroupType(true, true);"
			CloseFormGroup

			' Образовательные программы
			OpenFormGroup obLanguage("ClassManagement", "kEducPrograms")
				Call DrawCheckBoxesEx(objEducPrograms, "EDUCPROGRAMS", "PROGRAMID", "PROGRAMNAME", arrPreClassEducPrograms, "", "", False, "chooseEducProgram();")
			CloseFormGroup

		End If

		If Not (bPreSchool And bDisableHealthData) Then
			DrawFilterRow "", obLanguage("ClassManagement","kClassType",strFunctionalityType), "PROFILEEDUCID", objProfileEducs, "TYPEID", "TYPENAME", lngProfileEducID, False
		End If

		If bPreSchool Then
			If Not bDisableHealthData Then
				OpenFormGroup obLanguage("ClassManagement","kAddSpecialization")
					DrawSelectRs objAddSpecialization, "ADDSPECID", "TYPEID", "TYPENAME", nAddSpecialID, "<" & obLanguage("Movement", "kNotSelected") & ">", ""
				CloseFormGroup
			End If

			'DrawFilterRow "", obLanguage("ClassManagement","kStayRegime"), "STAYREGIMEID", objStayRegimes, "STAYID","STAYNAME", nStayID, False
			OpenFormGroup obLanguage("ClassManagement","kStayRegime")
				DrawSelectRs objStayRegimes, "StayRegimeId", "STAYID", "STAYNAME", nStayID, null, "chooseStayRegimeId(true);"
			CloseFormGroup

			' помещения ДОО
			DrawPreClassesRooms

			If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
				DrawInputTextRow strPlannedOccupancyMessage, nPlannedOccupancy, "PLANNEDOCCUPANCY", 4, 3, "dataChanged();", ""
			End If

			OpenFormGroup obLanguage("ClassManagement","kSeatsForTransfer")
				Call DrawInputEx(nSeatsForTransfer, "SeatsForTransfer", "text", "", 4, 3, "", "onChangeTransferSeats()")
				%>
					<p class="bg-danger hide" id="SeatsForTransferWarning" style="padding: 8px;">
						<%=obLanguage("ClassManagement","kSeatsForTransferWarning") %>
					</p>
				<%
			CloseFormGroup

			DrawInputTextRow obLanguage("ClassManagement","kSeatsForShort"), nSeatsForShort, "SeatsForShort", 4, 3, "dataChanged();", ""

			Call DrawCheckBox(obLanguage("ClassManagement", "kDOUNoInformika"), "NOINFORMIKA", "Y", strNoInformika="Y", "dataChanged();")

		End If
	End If
	If bAddSchool And obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
		DrawInputTextRow strPlannedOccupancyMessage, nPlannedOccupancy, "PLANNEDOCCUPANCY", 4, 3, "dataChanged();", ""
	End If

	If bPreSchool Then
		OpenFormGroup obLanguage("ClassManagement", "kGroupNoContingent")
			rw ShowParamCheckbox( Null, Null, bNoContingent, " disabled='disabled'", Null, Null )
		CloseFormGroup
		Call DrawReadonlyRow( obLanguage("ClassManagement", "kDateGroupNoContingent"), IIf(IsDull(dtNoContingentDate), Null, Date2Str(dtNoContingentDate)) )
	End If

	If bPreSchool Or bAddSchool Then
		Call DrawTeachers
	Else
		DrawFilterRow "", obLanguage("Common","kClassChief",strFunctionalityType), "TID", objTeachers, "TEACHERID", "NICKNAME", lngTeacherID, False
		If Not (bPreSchool Or bAddSchool) Then
			DrawFilterRow "", obLanguage("SetupSchoolCurPlan", "kTitleCurriculumPlan"), "IS_IUP", arrIup, Null, Null, nIupFlag, False

			' помещения ОО
			OpenFormGroup obLanguage("Common","kRoom",strFunctionalityType)
				DrawSelectRs objClassesRooms, "ROOMID", "ROOMID", "ROOMNAME", nRoomID, " ", "dataChanged();"
			CloseFormGroup
			If obContext.ServerSettings.SystemSettings.EnableStudentsDataQuality Then
				DrawInputTextRow strPlannedOccupancyMessage, nPlannedOccupancy, "PLANNEDOCCUPANCY", 4, 3, "dataChanged();", ""
			End If
		End If
	End If

	If Not objVacations.Eof Then
		OpenFormGroup obLanguage("Common","kVacationHeader")
			Call DrawCheckBoxes(objVacations, "VACATIONS", "VACATIONID", "VACATIONNAME", arrClassVacations, "", "", True)
		CloseFormGroup
	End If

	If bCommonSchool Then
		OpenFormGroup obLanguage("ClassManagement", "kClassView")
			Call DrawCheckBoxesEx(objClassForms, "CLASSFORMS", "CLASSFORMID", "CLASSFORMNAME", arrClassForms, "", "", False, "dataChanged();")
		CloseFormGroup
	End If

	OpenBtnGroup
	ButtonSave "saveProfileEduc();", obLanguage("Common","kSave")
	ButtonReset "resetScreen('ProfileEduc');", obLanguage("Common","kReset")
	CloseBtnGroup

	ClosePanel
End Sub

Sub DrawProfileEditForm()
	OpenPanelEx obLanguage("Common","kProfile", strFunctionalityType), "profile", "", False, "panel-warning"

	DrawTitleRow obLanguage("Common","kClass",strFunctionalityType), objNSNET.GetClassName(strClassID)
	DrawTitleRow obLanguage("Common","kProfile",strFunctionalityType), objNSNET.GetProfileName(lngProfile)

	If strClassID = "0" Then Exit Sub

	Call DrawTable

	If Not readonly And bCanChangeProfile Then
		ButtonSave "saveChanges();", obLanguage("Common","kSave")
	End If

	ClosePanel
End Sub

Sub DrawTeachers
	Set objClassTeachers = objNSNET.GetClassChiefs(strClassID)
	OpenFormGroup obLanguage("Common","kClassChief",strFunctionalityType)
	objClassTeachers.MoveFirst
	%><ul><%
	While Not objClassTeachers.EOF
		%><li><%=DB2HTML(objClassTeachers("NICKNAME"))%></li><%
		objClassTeachers.MoveNext
	Wend
	%></ul><%
	Call ButtonEdit( "editChiefs()", obLanguage("ClassManagement","kAssignTeacher",strFunctionalityType) )
	CloseFormGroup
End Sub

Sub DrawPreClassesRooms()
	If Not objClassesRooms.EOF Then
		OpenFormGroup obLanguage("Common","kRoom",strFunctionalityType)%>
			<select name="ROOMID" class="form-control">
				<option value="-1"><%="<" & obLanguage("Movement", "kNotSelected") & ">"%></option>
				<%
				While Not objClassesRooms.EOF%>
					<option value="<%=objClassesRooms("ROOMID")%>" <%=IIF(CLng(objClassesRooms("USED")) = 1 And CLng(objClassesRooms("GKP")) = 0, "style="""&"color:grey;""", "")%> onchange="dataChanged();" <%=IIF(CLng(objClassesRooms("ROOMID")) = nRoomID, "selected", "")%>><%=DB2HTML(objClassesRooms("ROOMNAME"))%></option><%
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

Sub onDrawPage()
	Dim oRs, strClassSubjectID, strHeader
	bProfileEducForm = False%>

	<div class="row">
		<%If Not readonly Then%>
		<div class="col-md-6">
			<form name="ProfileEduc" method="post" action="SaveClass.asp" class="form-horizontal form-sm">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags( Array("PCLID", strClassID, "CLID", "0", "ACT", "") )%>
				<%Call DrawClassEditForm()%>
			</form>
		</div>
		<%End If%>
		<div class="col-md-6">
			<form NAME="ClassList" METHOD="post" ACTION="SaveClass.asp" class="form-horizontal">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags( Array("PCLID", strClassID, "CLID", "0", "ACT", "") )%>
				<%Call DrawProfileEditForm()%>
			</form>
		</div>
	</div><%
End Sub

Sub DrawTable()
	Dim oRS, sumHours, nSgId
	Dim strHtml
	sumHours = 0
	If Not bCanChangeProfile Then 
		Call DrawInfo(obLanguage("ClassManagement","kOnlyOneGradeProfile",strFunctionalityType), False)
		Exit Sub
	End If

	If Not rsClassSubjects.EOF Then

		%><ul class="list-unstyled"><%
		Do While Not rsClassSubjects.EOF
			nSgId = rsClassSubjects("ID")
			If Not objNSNET.CanChangeProfile(nSgId) Then
				%><li><%=DB2HTML(rsClassSubjects("NAME"))%></li><%
				sumHours = sumHours+1
			End If
			rsClassSubjects.MoveNext
		Loop
		%></ul><%

	End If

	If sumHours > 0 Then
		bCanChangeProfile = False
		DrawInfo obLanguage("ClassManagement","kHaveToClear",strFunctionalityType), False
	Else
		Dim grade, strPageName, strForm
		strForm="ProfileEduc"
		grade = objNSNET.GetEmptyGroupGrade(strCurrYearID)
		strPageName = "/angular/school/classmanagement/subjectgroups/?classId=" & grade & "_1"
		If Clng(grade)>0 Then
			rw obLanguage("ClassManagement","kNoStudentsInSubjectGroup", strFunctionalityType) & ": "&ShowAnchor("ok_check_db('" & strForm & "','" & strPageName & "');", "", grade & " год обучения", "")
			rw "<p>"
			rw obLanguage("ClassManagement","kNoStudentsInSubjectGroup2")
			rw "</p>"
			bCanChangeProfile = False
		Else
			DrawSelectInfoRow obLanguage("ClassManagement","kChangeTo"), lngProfile, "PROFID", arrProfiles, "", "", null, ""
		End If
	End If
End Sub
%>
