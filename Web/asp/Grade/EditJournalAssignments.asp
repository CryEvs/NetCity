<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/assignment.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/teacher.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strAlarm, strTable, nNumClMeetings
Dim strAssignmentID, strTeacherID, strVariantName
Dim objClassMeetigsRs, objAssignmentsRs, objHomeAssignmentsRs

Dim arrLessonsRs, objUsedLessonsRs
Dim bAll, bEditSelfViewAll, bLessonsAll, bVariantAssigned
Dim bIsClassChief
Dim bWeight, bWeightedAssigns
Dim bLimitedJournalEditing, nJournalEditingDayLimit
Dim bLimitedHAJournalEditing, moduleQaAvailable

Dim bIsSubjectGroupTeacher

Function GetPageTitle()
	GetPageTitle = obLanguage("Grade","kEditJournalAssignments", strFunctionalityType) & strVariantName
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miJournal
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbJurnal
 	bTabInternalPage = True
End Function

Function hasUserRightsOnPage()
	bAll = True
	If HasUserRight(arJournalEditAll) Then hasUserRightsOnPage = True : Exit Function
	If HasUserRight(arJournalViewAll) Then hasUserRightsOnPage = True : Exit Function

	bAll = False
	If HasUserRight(arJournalEditSelf) Then hasUserRightsOnPage = True : Exit Function
	hasUserRightsOnPage = HasUserRight(arJournalViewSelf)
End Function

Sub GetRightsOnPage()
	bEditSelfViewAll = False

	If readonly Then Exit Sub
	If HasUserRight(arJournalEditAll) Then Exit Sub

	If HasUserRight(arJournalEditSelf) Then
		If HasUserRight(arJournalViewAll) Then bEditSelfViewAll = True
	Else
		readonly = True
	End If
End Sub

Sub ReadState()
	Dim rsTmp
	moduleQaAvailable = Module_QA_Available()
	Call obTokenMgr.SetData(strToken, stJuniorLA, null)
	strTeacherID = strUserID
	strAlarm = ""
	Call GetRightsOnPage()
	bLimitedHAJournalEditing = HasUserRight(arJournalEditHAOnlyOnFuture)
	bLimitedJournalEditing = objNSNETWork.IsLimitedEditingJournalMode(strSchoolID, strUserID)

	If bLimitedJournalEditing Then nJournalEditingDayLimit = objNSNETWork.GetJournalEditTimeLimit(strSchoolID)
	If bAll Then
		Call InitYearClasses_IUP()
		If objClasses_IUP_rs.EOF Then strSubjClassID="0" : Exit Sub
	Else
		Call InitTeacherClasses_IUP(False)
		If objClasses_IUP_rs.EOF Then strSubjClassID="0" : strAlarm=" " : Exit Sub 'У Вас нет классов!
	End If
	Call CheckIsClassChief_IUP()
	If bAll Then
		Call InitSubjectGroupsBySubject_IUP()
	ElseIf bIsClassChief Then
		Call InitClassChiefSubjectGroups_IUP(strUserID)
		'Для классных руководителей ИУП-классов используем режим readonly #7891
		If bIsIupGrade Then
			If objNSNET.GetSubjectGroupTeacher(strSubjClassID) <> Clng(strUserID) Then readonly = True
		End If
	Else
		Call InitTeacherSubjectGroups_Ex_IUP(strUserID)
	End If
	If strSubjClassID = "0" Then Exit Sub

	bIsSubjectGroupTeacher = objNSNET.GetSubjectGroupTeacher(strSubjClassID) = Clng(strUserID)
	If Not (bAll Or bIsClassChief) And Not readonly Then
		' limits editing rights for substitute only
		If Not bIsSubjectGroupTeacher Then readonly = True
	End If

	Set rsTmp = objNSNET.GetSubjClassVariantInfo(strSubjClassID)
	If Not rsTmp.EOF Then
		strVariantName = " ( " & obLanguage("Grade","kVariant") & ": "&GreenText(rsTmp("VariantName"))& " )"
		bVariantAssigned = True
	Else
		strVariantName = ""
		bVariantAssigned = False
	End If

	Call InitTermsForSubjectGroup( False )
	Call TermLimits( strTermID )

	If Not readonly And bEditSelfViewAll And Not bIsClassChief Then
		If Not bIsSubjectGroupTeacher Then readonly = True
	End If
	bLessonsAll = Request("ViewType")="-1"
End Sub

Sub Main()
	Dim i, nAssignCnt

	If Not bIsDebug Then On Error Resume Next
	If strSubjClassID = "0" Then Exit Sub
	Call InitSchoolSettings(objNSNET)
	Call InitAssignmentTypesHelper()
	bWeight = (arrSchoolSettings(1, kSSIndex_MarksAveraging) = "1")
	
	Set objClassMeetigsRs = objNSNET.GetClassMeetingsForCSG(strSubjClassID, dtTermStart, dtTermEnd, "0", Not readonly And bWeight, kIsTKR, True)
	If objClassMeetigsRs.EOF Then strAlarm = obLanguage("Grade","kNoCMs") : Exit Sub
	Set objAssignmentsRs = objClassMeetigsRs.Fields()("rsCMAssignments").Value
	Set objHomeAssignmentsRs = objClassMeetigsRs.Fields()("rsCMHomeAssignments").Value

	nNumClMeetings = objClassMeetigsRs.RecordCount
	bWeightedAssigns = False
	If Not readonly And bWeight Then
		Do While Not objClassMeetigsRs.EOF
			nAssignCnt = GetSafeLng(objClassMeetigsRs("AssignCnt"), Null)
			If nAssignCnt > 0 Then	bWeightedAssigns = True: Exit Do
			objClassMeetigsRs.MoveNext
		Loop
		If Not objClassMeetigsRs.BOF Then objClassMeetigsRs.MoveFirst
	End If
	
	Set arrLessonsRs = objNSNET.GetLessonsForSG(strSubjClassID, bLessonsAll, 0)
	If arrLessonsRs.RecordCount = 0 Then objUsedLessonsRs = Null : Exit Sub

	Set objUsedLessonsRs = objNSNET.GetUsedLessonList(strSubjClassID, strTermID)
	TestError obLanguage("Grade","kErrLessonAndPeriodList")
End Sub

Sub WriteState()
	If Not bIsDebug Then On Error Resume Next
	Call WriteClass_IUP()
	Call obTokenMgr.SetData(strToken, stCurrSubjClass, strSubjClassID)
	Call obTokenMgr.SetData(strToken, stCurrTerm, strTermID)
	Call obTokenMgr.SetData(strToken, stBackPage, "/asp/grade/EditJournalAssignments.asp")
	Call obTokenMgr.SetData(strToken,"QA_dct", null )
	Call obTokenMgr.SetData(strToken, stActName, CStr(obLanguage("Common","kActivityName_Manual")))
	Call obTokenMgr.SetData(strToken, stEditAss_RO, readonly)
End Sub

Sub onHead()
	If strSubjClassID = "0" Then Exit Sub%>
	<script type="text/javascript" src="/js/DynamicCombo.js"></script>
	<script><!--

		<%If bVariantAssigned <> False And Not objClassMeetigsRs.EoF Then%>
			var lessonsInfo = <%=arrLessonsRs.ToJSON(Array("Id", "Name","HOURS"), Array("LID", "LN", "HOURS")) %>;
		
			$(document).ready(function () {
				if($("select[name=ViewType]").val() == -1) {
					var defaultOption={'Name':"<%=  obLanguage("Grade","kNoLesson") %>", 'Id':"-1",'HOURS':"0"};
				}
				else {
					var defaultOption={'Name':"<%= obLanguage("Grade","kChooseLesson",strFunctionalityType) %>", 'Id':"-1",'HOURS':"0"};
				}
				var lessonObjects = lessonsInfo;
				lessonObjects.unshift(defaultOption);

				var customizeDrawOption = function(item, currID) {
					if(item.Id==currID) return true;
					if( item.Id == -1) return true;

					if($("select[name=ViewType]").val() == -1) return true;
					if($("input[value="+item.Id+"]").length==0) {
						//ЕСЛИ НА СТРАНИЦЕ НЕТ УРОКА ТО ДОБАВЛЯЕМ ЕГО В СПИСОК
						return true;
					}
					if(item.HOURS > $("input[name=arr_LID][value="+item.Id+"]").length) {
						//ЕСЛИ НА СТРАНИЦЕ ЕСТЬ УРОКИ И ОСТАЛИСЬ НЕ ИСПОЛЬЗУЕМЫЕ ЧАСЫ, ТО ДОБАВЛЯЕМ УРОК В СПИСОК
						return true;
					}
					return false;
				};

				var customDecorateSelect=function(selectEl, ctx) {
					if (selectEl.val() == -1) {
						selectEl[0].selectedIndex=selectEl[0].selectedIndex+1; //обращаится нужно именно через индекс селекта, иначе NaN
						ctx.inputElem.val(selectEl.val());
					}
					return selectEl;
				}
				//ПЕРЕДАЕМ ЗНАЧЕНИЕ ФИЛЬТРА "ТЕМЫ УРОКОВ"
				$('input[name=arr_LID]').DynamicCombo('init', {items: lessonObjects, isDrawOption: customizeDrawOption, decorateSelect: customDecorateSelect} );
			});
		<%End If %>

		//ОБРАБОТЧИК КНОПКИ ВОССТАНОВИТЬ
		function returnDefaultLinks() {
			postTo("EditJournalAssignments.asp", 
				{
					PCLID: <%=GetSafeID(Request("PCLID"),"0") %>, 
					SCLID: <%=GetSafeID(Request("SCLID"),"0") %>, 
					TERMID: <%=GetSafeID(Request("TERMID"),"0")%>,
					ViewType: <%=GetSafeID(Request("ViewType"),"0")%>
				});
		}
		<%If Not bVariantAssigned Then%>
			function AssignVariant() {
				checkForChanges().then(function() {
					if( isDBBusy() ) return false;
					setDBBusy();
					DoSubmit(document.AssignVariant,'');
				});
			}
		<%End If%>

		function EditAssignment( aid, cmid, typ) {
			checkForChanges().then(function() {
				var form = document.Gradebook;
				form.AID.value = aid;
				form.CMID.value = cmid;
				form.ATYPE.value = typ;
				ok('Gradebook','/asp/Curriculum/EditAssignment.asp');
			});
		}

		function EditTestPlan(aid, sgid) {
			checkForChanges().then(function() {
				var form = document.Gradebook;
				form.AID.value = aid;
				form.SCLID.value = sgid;
				ok('Gradebook','/asp/Grade/QA/TestPlanResults.asp');
			})
		}
	//-->
	</script><%

	If readonly OR strAlarm<>"" Then Exit Sub%>
	<script><!--
		var bIsHomeAssDeleted;
		var bWeight=<%=IIF(bWeight,"true", "false")%>;

		function GradeEdit(cmid, dt, bCreateHAss) {
			var form = document.forms['Gradebook'];
			form.elements['AID'].value = 0;
			form.elements['CMID'].value = cmid;
			form.elements['DATE'].value = dt;
			if( bCreateHAss )
				form.ATYPE.value = <%=PreDefinedAssignmentType_HomeWork%>;

			ok('Gradebook','EditJournal.asp');
		}

		function DelAssignment(nAssignmentID, bIsHome) {
			if ( nAssignmentID == -2 ) {
				alert(language.Generic.Grade.kErrCantDeleteAssign + '.\n' + language.Generic.Grade.kErrExistsMarks4ThisAss );
				return;
			}

			$.show.confirmation(language.Generic.Assignment.kSureToDeleteAssignment).then(function() {
				if( isDBBusy() ) return false;
				var form = document.Gradebook;
				form.ADEL.value = nAssignmentID;
				$('#AID_' + nAssignmentID + ' a').slice(1,2).hide();
				$('<img />').attr('id','DA_pi').attr('width',12).insertAfter($('#AID_' + nAssignmentID + ' a').eq(1));
				bIsHomeAssDeleted = bIsHome;
				jsSubmit({
					form: form,
					action: '/asp/Grade/DelJournalAssignment_Ajax.asp',
					showProcessing: true,
					defaultErrorHandling: false,
					onSuccess: DelAssignment_success,
					onError: DelAssignment_fail
				});
			});
		}

		function DelAssignment_success(response) {
			var form = document.forms['Gradebook'];
			var sAddNewAss = '<%=obLanguage("Grade","kCreateHomeAssignment")%>';
			var AID = form.ADEL.value;

			if( response.isError ) {
				fail_Deleting();
				alert(response.message);
				return;
			}

			if ( bIsHomeAssDeleted ) {
				var oldHref = $('#DA_pi').parent().find('a').eq(0).attr('href');
				//cellIndex = 0 - >1 д.з.
				//cellIndex = 2 - 1 д.з.
				var cellIndex = $('#DA_pi').parent().parent().index();

				if( cellIndex == 2 )
					$('#DA_pi').parent().find('a').eq(0).attr('href', oldHref.replace(AID,'-1')).attr('onclick', oldHref.replace(AID,'-1')).show().find('img').attr('tooltip',sAddNewAss);
				else
					$('#DA_pi').parent().append('&nbsp;');

				$('#DA_pi').parent().find('a').eq(1).remove();

				var delCol = $('#DA_pi').parent().parent().removeAttr('id');
				if ( bWeight ) {
					delCol.next().empty().html('&nbsp');
				}
				$('#DA_pi').parent().siblings().empty().html('&nbsp');
				$('#DA_pi').remove();
			}
			else {
				var delrow = $('#DA_pi').parent().parent().parent()[0];
				var rowindex = delrow.rowIndex;
				var tbody = delrow.parentNode;
				var rows = tbody.rows;
				var bMainTr;
				var bMainTrIndex;
				var subRowCellCnt = bWeight ? 3 : 2;
				var rowspandedCellsInRow = bWeight ? 3 : 2;
				var normalrowCellsCnt = subRowCellCnt + 2 + (bWeight ? 2 : 1);
				var bManyHomeAssOnCM = (rows[rowindex+(rows[rowindex].cells.length == normalrowCellsCnt ? 1 : 0)].cells.length == ((bWeight ? 2 : 0) + 5));
				bMainTr = false;

				if( bManyHomeAssOnCM ) {
					//is main row
					if( $(delrow).find('td').length == normalrowCellsCnt)
						if( bWeight )
							$(delrow).find('td').slice(4,7).removeAttr('id').empty().html("&nbsp;");
						else
							$(delrow).find('td').slice(3,5).removeAttr('id').empty().html("&nbsp;");
					else
						if( bWeight )
							$(delrow).find('td').slice(3,7).empty().html("&nbsp;");
						else
							$(delrow).find('td').slice(2,5).empty().html("&nbsp;");
				}
				//is sub row
				else if ( rows[rowindex].cells.length == subRowCellCnt ) {
					//find main row
					for( var i = rowindex-1; i > 0 & !bMainTr; i--) {
						bMainTr = (rows[i].cells.length > subRowCellCnt);
						bMainTrIndex = i;
					}
					//main row rowspan--
					for( var i = 0; i <= rowspandedCellsInRow; i++)
						rows[bMainTrIndex].cells[i].rowSpan--;
		
					//remove sub row
					$(delrow).remove();
				}
				//is main row
				else {
					var rowSpan = rows[rowindex].cells[0].rowSpan;
					if( rowSpan > 1 ) {
						//moving up sub rows
						if( bWeight ) {
							$(tbody.rows[rowindex].cells[4]).html( $(tbody.rows[rowindex+1].cells[0]).html() ).attr('id',$(tbody.rows[rowindex+1].cells[0]).attr('id') );
							$(tbody.rows[rowindex].cells[5]).html( $(tbody.rows[rowindex+1].cells[1]).html() );
							$(tbody.rows[rowindex].cells[6]).html( $(tbody.rows[rowindex+1].cells[2]).html() );
							for( var i = rowindex + 1; i < rowindex + rowSpan - 1; i++ ) {
								$(tbody.rows[i].cells[0]).html( $(tbody.rows[i+1].cells[0]).html() ).attr('id',$(tbody.rows[i+1].cells[0]).attr('id'));
								$(tbody.rows[i].cells[1]).html( $(tbody.rows[i+1].cells[1]).html() );
								$(tbody.rows[i].cells[2]).html( $(tbody.rows[i+1].cells[2]).html() );
							}
						}
						else {
							$(tbody.rows[rowindex].cells[4]).html( $(tbody.rows[rowindex+1].cells[0]).html() ).attr('id',$(tbody.rows[rowindex+1].cells[0]).attr('id') );
							$(tbody.rows[rowindex].cells[5]).html( $(tbody.rows[rowindex+1].cells[1]).html() );
							for( var i = rowindex + 1; i < rowindex + rowSpan - 1; i++ ) {
								$(tbody.rows[i].cells[0]).html( $(tbody.rows[i+1].cells[0]).html() ).attr('id',$(tbody.rows[i+1].cells[0]).attr('id'));
								$(tbody.rows[i].cells[1]).html( $(tbody.rows[i+1].cells[1]).html() );
							}
						}
						//main row rowspan--
						for( var i = 0; i <= rowspandedCellsInRow; i++)
							tbody.rows[rowindex].cells[i].rowSpan--;
			
						//remove last row
						$(tbody.rows[rowindex + rowSpan - 1]).remove();
					}
					//simply clear one main row
					else {
						if( bWeight )
							$(delrow).find('td').slice(5,9).empty().html("&nbsp;");
						else
							$(delrow).find('td').slice(4,7).empty().html("&nbsp;");
					}
				}
			}
			alert(response.message);
		}

		function DelAssignment_fail(response) {
			fail_Deleting();
			alert(language.Generic.Grade.kErrCantDeleteAssign);
		}

		function fail_Deleting() {
			$('#DA_pi').parent().find('a').show();
			$('#DA_pi').remove();
		}

		function getTermName(nTID) {
			var form = document.Gradebook;
			
			if (form.TERMID.length) {
				for (var i=0; i<form.TERMID.length; i++) {
					if (form.TERMID.options[i].value==nTID) {
						return form.TERMID.options[i].text;
					}
				}
			}
			else if (form.TERMID.value==nTID) {
				return form.TERMID.text;
			}
			return '';
		}

		var arrUsedLessons = [];
		<%If IsObject(objUsedLessonsRs) Then%>
		arrUsedLessons = <%=comHelper.DataSetAdapterHelper.ToJSON(objUsedLessonsRs, Array("lessonId", "termId"))%>;<%
		End If%>

		function saveChanges() {
			var confirms = new Array();

			if(!dataWereChanged) {
				return;
			}

			<%If IsObject(objUsedLessonsRs) Then%>
				var lessonsUseInfos = [];
				$("input[name=arr_LID][value!=-1]").each(function(){
					var lessonId = parseInt($(this).val());
					var useInfo = _.findWhere(arrUsedLessons, {lessonId: lessonId});

					if (!useInfo) {
						return;
					}

					if(_.findWhere(lessonsUseInfos, {lessonId: lessonId})){
						return;
					}

					lessonsUseInfos.push(useInfo);
				});

				$(lessonsUseInfos).each(function(){
					var useInfo = this
					var lesson = _.findWhere(lessonsInfo, {Id: useInfo.lessonId});
					var termName = getTermName(useInfo.termId);
					var confirmText = "<b>" + language.Curriculum.kLesTheme + ": </b>" + lesson.Name + "\r\n" + "<b>" + language.Generic.Common.kSchoolPeriod + ": </b>" + termName + "\r\n\r\n" + language.Grade.kLessonUsedInAnotherTerm
					confirms.push($.show.getConfirmation(confirmText));
				});
			<%End If%>

			<%If bWeightedAssigns Then%>
				if(!isValidWeights()) return;
			<%End If%>

			extDeferred.when(confirms).then(function() {
				var form = document.LessonSubjects;
				form.ACT.value = 'save';
				jsSaveForm(form);
			});
		}

		<%If bWeightedAssigns Then%>
			function isValidWeights() {
				var form = document.LessonSubjects;
				if(!form.Weight) return true;

				var valid = true;
				$(form.Weight).each(function() {
					$weight = $(this);
					var isValid = false;

					var weight = $weight.val();

					if(weight) {
						isValid = !/\D/g.test(weight);

						if(isValid) {
							weight = +weight;

							isValid = !(weight < <%=kMarksWeightMin%> || weight > <%=kMarksWeightMax%>);
						}
					}

					if(!isValid) {
						focusAlert($weight, language.Generic.SchoolSettings.kInputIntegerInRange + ' [<%=kMarksWeightMin%> ; <%=kMarksWeightMax%>]');
						valid = false;

						return false;
					}
				});

				return valid;
			}
		<%End If%>

		function Back() {
			goBack(document.Gradebook, 'Journal.asp');
		}

		function goEditJournal(cmId, strDate) {
			checkForChanges().then(function() {
				postTo('EditJournal.asp', { CMID: cmId, BACK: 'EditJournalAssignments.asp', DATE: strDate });
			});
		}
	//--></script>
<%End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact"
End Function

Sub DrawFilters( strForm )
	Call DrawYearClasses_IUP(strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType))) : If bExit Then Exit Sub
	Call DrawSubjectGroups_IUP(strForm, False, (bAll Or bIsClassChief)) : If bExit Then Exit Sub
	Call DrawTerms(strForm)
	If readonly Or bExit OR strAlarm<>"" Then Exit Sub

	If Not HasUserRight(arCurrMgmCreateAll) Then
		If Not HasUserRight(arCurrMgmCreate) Then Exit Sub
		If Not objNSNET.IsSubjectTeacher(strSubjectID, strUserID) Then
			Exit Sub
		End If
	End If
	
	If Not bVariantAssigned Then
		OpenFormGroup obLanguage("Grade","kLessonNames", strFunctionalityType)
		rw ShowAnchor( "AssignVariant();" , obLanguage("Grade","kAssignVariant"), obLanguage("Grade","kAssignVariant"), "")
		CloseFormGroup
	Else
		DrawSimpleFilterRow obLanguage("Grade","kLessonNames", strFunctionalityType), "ViewType", Array(1, obLanguage("Grade","kUnused"), -1, obLanguage("Common","kAll")), IIF(bLessonsAll, -1, 1), Null, SelectChangeHandler(strForm)
	End If
End Sub

Sub DrawLinkButtons()
	If Not IsDull(strAlarm) Then Exit Sub
	Call DrawPrintButtons()
End Sub

Sub DrawButtons()
	If Not (readonly or strAlarm<>"" or strSubjClassID = "0") Then
		If Not arrLessonsRs.RecordCount = 0 Or bWeightedAssigns Then ButtonSave "saveChanges();", obLanguage("Common", "kSave")
		ButtonReset "returnDefaultLinks();", obLanguage("Common","kReset")
	End If
End Sub

Sub onDrawPage()
	If Not bIsDebug Then On Error Resume Next
	Dim i, strAssign, lngGrade, objClassInfo, strAss2Print
	Dim strLessonName, nLessonID, strDay, nClassMeetingId
	Dim strRowSpan, nRowSpan, nAssignsCnt, sBuilder
	Dim bRightEditTestPlan, rowspan2, strThemeAndWeight
	Dim strDateField
	
	rowspan2 = IIF(bWeight, " rowspan='2'", "")
	strThemeAndWeight = "<th>" & obLanguage("Assignment","kAssTheme") & "</th>" & _
		"<th width='1%'>" & obLanguage("Assignment","kWeight") & "</th>"
	Set sBuilder = New StringBuilder

	If Not bVariantAssigned And (strClassID_IUP<>"0") Then
		If bIsIupGrade Then
			lngGrade = strIupGrade
		Else
			Set objClassInfo = objNSNET.GetClassInfo(strClassID)
			lngGrade = GetSafeLng( objClassInfo("GRADE"), Null )
		End If%>

		<form name="AssignVariant" action="/asp/curriculum/Planner.asp" method="post">
			<%=WriteObligatoryTags()%>
			<%=WriteHiddenTags( Array("SJID", strSubjectID, "GRADEID", lngGrade))%>
		</form><%
	End If%>

	<form name="Gradebook" action="SaveJournalAssignments.asp" method="post">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("ACT","","AID","","LID","","ATYPE","","CMID","","DATE","","LA_Mode","0","ADEL","", "BACK", "/asp/grade/EditJournalAssignments.asp"))%><%

		Call DrawButtonsFilters( True, "Gradebook" )
		If bExit OR strAlarm<>"" Then 
			rw "</form>"
			DrawInfo strAlarm, False
			Exit Sub
		End If
	%></form>

	<form name="LessonSubjects" action="SaveJournalAssignments.asp" method="post">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("PCLID", strClassID, "SCLID", strSubjClassID, "TERMID", strTermID, "ACT",""))%>

		<table class="table table-bordered table-responsive table-sm print-block">
			<tr>
				<th width='1%' <%=rowspan2%>><%=obLanguage("Common","kDate")%></th>
				<th <%=rowspan2%>><%=obLanguage("Curriculum","kLesTheme", strFunctionalityType)%></th>
				<th width='30%' <%=IIF(bWeight And Not kIsTKR," colspan='2'", IIF(kIsTKR And bWeight, " rowspan='2'", ""))%>><%=obLanguage("Assignment","kHomeAssignment")%></th>
				<th width='30%' <%=IIF(bWeight, " colspan='2'", "")%>><%=obLanguage("Assignment","kOtherTypeAssignments")%></th>
				<th width='1%' <%=rowspan2%>><%=obLanguage("Grade","kAssignType")%></th><%
				If bWeight Then
					rw "</tr><tr>" & strThemeAndWeight
					If Not kIsTKR Then
						rw strThemeAndWeight
					End If
				End If%>
			</tr><%

			While Not objClassMeetigsRs.EOF
				strDay = objClassMeetigsRs("DAY")
				nClassMeetingId = CLng(objClassMeetigsRs("CMID"))
				strLessonName = objClassMeetigsRs("LN")
				nLessonID = GetSafeLng(objClassMeetigsRs("LID"), 0)
				nAssignsCnt = objAssignmentsRs.RecordCount
							
				If moduleQaAvailable Then
					bRightEditTestPlan = HasUserRight(arJournalEditAll) Or bIsSubjectGroupTeacher Or CLng(objClassMeetigsRs("TEACHERID")) = CLng(strUserId)
				End If

				If objHomeAssignmentsRs.RecordCount > nAssignsCnt Then nAssignsCnt = objHomeAssignmentsRs.RecordCount
				If nAssignsCnt > 1 Then strRowSpan = " rowspan=""" & nAssignsCnt & """" Else strRowSpan = ""
				strAssign = GetAssignments(nClassMeetingId, strDay, nAssignsCnt, bRightEditTestPlan)

				If Not readonly And (HasUserRight(arJournalEditSelf) Or HasUserRight(arJournalEditAll)) Then
					strDateField = ShowAnchor("goEditJournal(" & nClassMeetingId & ", '" & strDay & "')", obLanguage("Grade","kEditJournal"), Date2Str_NoYear(strDay), "")
				Else
					strDateField = Date2Str_NoYear(strDay)
				End If%>

				<tr>
					<td class="text-right" <%=strRowSpan%>><%=strDateField%></td><%
					rw "<td class=""text-left""" & strRowSpan
						If readonly Or IsLimited(strDay) Or Not (bLessonsAll Or nLessonID = 0) Then
							If nLessonID > 0 Then
								rw ">" & DB2HTML(objClassMeetigsRs("LN"))
								rw WriteHiddenTags(Array("lesson", objClassMeetigsRs("LID")))
							Else
								rw ">&nbsp;"
							End If
						ElseIf arrLessonsRs.RecordCount = 0 Then
							rw ">&nbsp;"
						Else
							Call DrawBox(nLessonID)
							rw WriteHiddenTags(Array("Old_LID", nLessonID, "CLMID_", nClassMeetingId))
						End If%>
					</td>
					<%=strAssign%>
				</tr><%

				objClassMeetigsRs.MoveNext
			Wend%>
		</table><br/><%
		Call ShowTypesLegend(True)%>
	</form><%
End Sub

Sub DrawBox( nLessonID )
	If Not bIsDebug Then On Error Resume Next
	Dim bSelected

	Response.Write " class=""select"">"

	If nLessonID = 0 Then
		Response.Write "<input type='hidden' name='arr_LID' value=-1 />"
		bSelected=True
	End If

	If Not bSelected Then
		 rw "<input type='hidden' name='arr_LID' value="& nLessonID &" />"
	End If
End Sub

Function GetAssignments(aCMID, dt, nAssignsCnt, bRightEditTestPlan)
	If Not bIsDebug Then On Error Resume Next
	Dim strT, aAID, aType, strATypeAbbr, aName, aDescr, nResults, bFirst
	Dim i
	Dim bTKR, aWeight
	Dim strRowSpan
	Dim strWeightNbsp, strRowSpanNbsp, strRowSpanNbsp2, strWeightRowSpanNbsp, emptyTD, emptyTD2
	Dim bDrawRowSpanedHA
	Dim bNewHALink, bHALinkExists
	Dim bIsTestPlanType, bExistsTestPlan

	strRowSpan =  "rowspan=""" & nAssignsCnt & """"
	strT = ""
	emptyTD = "<td>&nbsp;</td>"
	emptyTD2 = IIF(bWeight,"<td colspan=""2"">&nbsp;</td>",emptyTD)
	strWeightNbsp = IIF(bWeight, emptyTD, "")
	strRowSpanNbsp = "<td " & strRowSpan & ">&nbsp;</td>"
	strRowSpanNbsp2 = "<td " & strRowSpan & IIF(bWeight, " colspan=""2""", "") & ">&nbsp;</td>"
	strWeightRowSpanNbsp = IIF(bWeight, strRowSpanNbsp, "")

	If Not readonly And Not IsLimited(dt) And Not IsRestrictedEditPast(dt) Then
		bNewHALink = GetContextButtons(Array("EditAssignment(-1,'" & objClassMeetigsRs("CMID") & "','"& PreDefinedAssignmentType_HomeWork & "')", obLanguage("Grade", "kCreateHomeAssignment"), "primary", "glyphicon glyphicon-pencil"), True, , "ctx-btns-icons-md")
	Else
		bNewHALink ="&nbsp;"
	End If

	bDrawRowSpanedHA = False: bFirst = True

	If nAssignsCnt = 0 Then
		strT = strT & "<td>" & bNewHALink & "</td>" & strWeightNbsp & emptyTD & strWeightNbsp & emptyTD
	End If

	For i = 1 to nAssignsCnt
		If Not bFirst Then
			strT = strT & "<tr>"
		Else
			'Для случая если на урок назначено одно домашнее задание. Иначе без rowspan.
			bDrawRowSpanedHA = objHomeAssignmentsRs.RecordCount <= 1
		End If
		If Not objHomeAssignmentsRs.EOF Then
			aAID = CLng(objHomeAssignmentsRs("AID"))
			nResults = CLng(objHomeAssignmentsRs("C"))
			aName = DB2HTML_BR(objHomeAssignmentsRs("AN"))

			If objHomeAssignmentsRs("DESCRIPTION") <> "" Then
				aDescr = "#WFM#" & DB2HTML_BR(objHomeAssignmentsRs("DESCRIPTION"))
			Else
				aDescr = ""
			End If

			aWeight = GetSafeLng(objHomeAssignmentsRs("WEIGHT"), 0)
			Call MakeAssCell( aAID, aName, PreDefinedAssignmentType_HomeWork, "", aCMID, dt, aWeight, nResults, IIF(bDrawRowSpanedHA,strRowSpan,""), aDescr, strT, False, False, False)
			objHomeAssignmentsRs.MoveNext
			bHALinkExists = True
		ElseIf Not bDrawRowSpanedHA Then
			strT = strT & "<td class=""text-left"">" & IIF(bHALinkExists,"&nbsp;",bNewHALink) & "</td>" & emptyTD & strWeightNbsp
		ElseIf bFirst Then
			strT = strT & "<td " & strRowSpan & " width='1%' class=""text-left"">" & IIF(bHALinkExists,"&nbsp;",bNewHALink) & "</td>" & strWeightRowSpanNbsp
		End If
		If Not objAssignmentsRs.EOF Then
			bIsTestPlanType = CBool(objAssignmentsRs("TESTPLANTYPE") = 1)
			bExistsTestPlan = CLng(objAssignmentsRs("EXISTSTESTPLAN"))
			aType = objAssignmentsRs("ATYPEID")
			strATypeAbbr = objAssignmentsRs("TYPE")
			nResults = IIF(aType <> PreDefinedAssignmentType_DKR, CLng(objAssignmentsRs("C")), CLng(objAssignmentsRs("CM")))
			aAID = CLng(objAssignmentsRs("AID"))
			aName = DB2HTML_BR(objAssignmentsRs("AN"))
			bTKR = (aType = PreDefinedAssignmentType_TKR)
			aWeight = GetSafeLng(objAssignmentsRs("WEIGHT"), 0)

			Call MakeAssCell(aAID, aName, aType, strATypeAbbr, aCMID, dt, aWeight, nResults, "", null, strT, bIsTestPlanType, bExistsTestPlan, bRightEditTestPlan)
			objAssignmentsRs.MoveNext
		Else
			strT = strT & emptyTD & strWeightNbsp & emptyTD
		End If
		bFirst = False
		strT = strT & "</tr>"
	Next
	GetAssignments = strT
End Function

Sub MakeAssCell(nAssID, strAssName, nAssType, strAssTypeName, nCMID, dtCMDate, nWeight, strResults, strRowspan, strDescription, ByRef strTable, bIsTestPlanType, bExistsTestPlan, bRightEditTestPlan)
	Dim strRowSpanNbsp
	strRowSpanNbsp = "<td " & strRowSpan & ">&nbsp;</td>"
	Dim bTKR, bHomeAss
	bTKR = (nAssType=PreDefinedAssignmentType_TKR)
	bHomeAss = (nAssType=PreDefinedAssignmentType_HomeWork)
	strTable = strTable & "<td id='AID_" & nAssID & "' " & strRowspan & " class=""text-left"">"
	If bHomeAss Then
		strTable = strTable & GetHomeAssLink(nAssID, strAssName, nCMID, strDescription, dtCMDate, strResults, strRowspan)
	Else
		strTable = strTable & GetAssLink(nAssID, strAssName, nCMID, nAssType, dtCMDate, strResults, bIsTestPlanType, bExistsTestPlan, bRightEditTestPlan)
	End If

	strTable = strTable & "</td>"
	
	If bWeight Then
		If kIsTKR And Not bTKR Then
			strTable = strTable & strRowSpanNbsp
		Else
			strTable = strTable & "<td align=""center"" " & strRowspan & ">" & GetWeight(nAssID, dtCMDate, nWeight) & "</td>"
		End If
	End If

	If Not bHomeAss Then
		strTable = strTable & "<td align=""center"" " & strRowspan & ">" & GetAssTypeWord( strAssTypeName ) & "</td>"
	End If
End Sub

Function GetAssLink(aAID, aName, aCMID, aType, dt, nResults, bIsTestPlanType, bExistsTestPlan, bRightEditTestPlan)
	Dim ctxBtns
	ctxBtns = Array()

	If bIsTestPlanType And moduleQaAvailable Then
		If bRightEditTestPlan Or (Not bRightEditTestPlan And bExistsTestPlan) Then
			ReDim Preserve ctxBtns(Ubound(ctxBtns) + 4)

			ctxBtns(Ubound(ctxBtns) - 3) = "EditTestPlan(" & aAID & "," & strSubjClassID & ")"
			ctxBtns(Ubound(ctxBtns) - 2) = ""
			ctxBtns(Ubound(ctxBtns) - 1) = "primary"
			ctxBtns(Ubound(ctxBtns)) = "glyphicon glyphicon-list-alt"
		End If
	End If

	If Not IsLimited(dt) Then
		If Not readonly Then
			ReDim Preserve ctxBtns(Ubound(ctxBtns) + 8)

			ctxBtns(Ubound(ctxBtns) - 7) = "EditAssignment('" & aAID & "','" & aCMID & "','" & aType & "')"
			ctxBtns(Ubound(ctxBtns) - 6) = obLanguage("Grade", "kEditAssignment")
			ctxBtns(Ubound(ctxBtns) - 5) = "primary"
			ctxBtns(Ubound(ctxBtns) - 4) = "glyphicon glyphicon-pencil"

			ctxBtns(Ubound(ctxBtns) - 3) = "DelAssignment(" & IIF(nResults>0,-2,aAID) & ", false)"
			ctxBtns(Ubound(ctxBtns) - 2) = obLanguage("Grade", "kDeleteAssign")
			ctxBtns(Ubound(ctxBtns) - 1) = "danger"
			ctxBtns(Ubound(ctxBtns)) = "glyphicon glyphicon-remove"
		End If
	End If
	
	GetAssLink = GetAssLink & GetContextButtons(ctxBtns, True, True, "ctx-btns-icons-md") & "<div>" & aName & "</div>"
End Function

Function GetHomeAssLink( haAID, haName, haCMID, haDescr, dt, nResults, strRowSpan )
	If Not readonly And Not IsLimited(dt) Then
		GetHomeAssLink = GetHomeAssLink & GetContextButtons(Array("EditAssignment('" & haAID & "','" & haCMID & "','" & PreDefinedAssignmentType_HomeWork & "')", obLanguage("Grade", "kEditAssignment"), "primary", "glyphicon glyphicon-pencil", "DelAssignment("& IIF(nResults>0, -2, haAID) & ", true)", obLanguage("Grade", "kDeleteAssign"), "danger", "glyphicon glyphicon-remove"), True, True, "ctx-btns-icons-md") & "<div " & IIF(Len(haDescr)>0," style='cursor:help;' title='" & haDescr & "'","") & ">" & haName & "</div>"
	Else
		GetHomeAssLink = GetHomeAssLink & "<div>&nbsp;</div><div " & IIF(Len(haDescr)>0," style='cursor:help;' title='" & haDescr & "'","") & ">" & haName & "</div>"
	End If
End Function

Function GetAssTypeWord( aType )
	GetAssTypeWord = IIF((aType=""), "*", aType)
End Function

Function GetWeight( aAID, dt, nWeight )
	Dim strInput
	If readonly Or IsLimited(dt) Then
		GetWeight = DB2HTML(nWeight)
	Else
		strInput = "<input type=""text"" name=""Weight"" size=""" & TextInputSize(3) & """ maxlength=""3"" value=""" & DB2Value(nWeight) & """ OnChange=""dataChanged()"">"
		strInput = strInput & "<input type=""hidden"" name=""WeightedAID"" value=""" & aAID & """ >"
		GetWeight = strInput
	End If
End Function

Function IsLimited( dtDate )
	IsLimited = bLimitedJournalEditing And (NSNow()-dtDate > nJournalEditingDayLimit)
End Function

Function IsRestrictedEditPast( dtDate )
	isRestrictedEditPast = bLimitedHAJournalEditing And DateDiff("d", NSNow(), dtDate, 0, 0) <= 0
End Function%>