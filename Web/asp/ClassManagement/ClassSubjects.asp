<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterTeachers.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->
<!-- #INCLUDE FILE="ClassSubjects_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetPageTitle()
	GetPageTitle = obLanguage("Common","kSubjects")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningGroups
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbSubjects
 End Function

Function hasUserRightsOnPage()
	If HasUserRight(arClassMgmEditSubjects) Then bAll = True : hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arClassMgmViewClassSubjAll) Then
		bAll = bIsEMForSchool
		hasUserRightsOnPage = True
		Exit Function
	End If
	hasUserRightsOnPage = False
End Function

Sub specialReadState()
	If Not bAll Then readonly = True
	If nTypeOfView = kViewType_ByTeachers Then 
		Call InitTeachers( bAll, False)
	End If
End Sub

Sub WriteState()
	If nTypeOfView = kViewType_ByClasses Then 
		WriteClass_IUP 
		If bIsIupGrade Then WriteSubject 
	Else 
		Call obTokenMgr.SetData(strToken, stCurrTeacher, strTeacherID)
	End If
	Call obTokenMgr.SetData(strToken, "ViewType", nTypeOfView)
End Sub

Sub WritePostScripts()%>
	<script src="/vendor/components/jqueryui/jquery-ui.min.js" type="text/javascript"></script>
	<link href="/vendor/components/jqueryui/themes/redmond/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
	<link href="/vendor/components/jtable/lib/themes/lightcolor/blue/jtable.min.css" rel="stylesheet" type="text/css"/>

	<script src="<%=GetVersionedResLink("/vendor/components/jtable-bundle.min.js")%>" type="text/javascript"></script><%
End Sub

Sub onHead()%>
<script><!--
	function editClassSubjects( classId ) {
		if( isDBBusy() ) return false;
		setDBBusy();
		postTo('ClassSubjects.asp', { PCLID_IUP: classId });
	}

	function editClass( sgId ) {
		if( isDBBusy() ) return false;

		checkForChanges().then(function() {
			setDBBusy();
			postTo('ClassSubjectEdit.asp', { CLID: sgId });
		});
	}

	function saveChanges() {
		var saveForm = document.forms['ClassList'];
		saveForm.elements["ACT"].value = "";
		if (dataWereChanged) {
			jsSaveForm(saveForm);
		}
	}

	function deleteCSG() {
		if( isDBBusy() ) return false;

		if($("input:checkbox:checked[name=delClass]").length == 0) {
			alert(language.Generic.Common.kNoDelSubjects);
			return;
		}

		checkForChanges().then(function() {
			$.show.confirmation(language.Generic.ClassManagement.kMsgDelSubject + language.Common.kClass_r + '. ' + language.Generic.Common.kMsgAreYouSure).then(function(){
				var form = document.ClassList;
				setDBBusy();
				$.show.processing();
				form.elements["ACT"].value = "delete";
				DoSubmit( form, "" );
			});
		});
	}
	<%If nTypeOfView <> kViewType_ByClasses And HasUserRight(arClassMgmEditSubjects) Then%>
	var teacherId = <%=strTeacherID%>;	
	var schoolYearId = <%=strCurrYearID%>;

	<%End If%>
//--></script>
<%If nTypeOfView <> kViewType_ByClasses And HasUserRight(arClassMgmEditSubjects) Then
	%><script src="<%=GetVersionedResLink("/vendor/pages/js/classSubjects.min.js")%>" type="text/javascript"></script><%
End If

End Sub

Sub DrawFilters( strForm )
	If Not HasUserRole(rlMinorStaff) Then
		Call DrawSimpleFilterRow(obLanguage("Common","kView"), "ViewType", Array(kViewType_ByClasses,obLanguage("Reports","kByClasses",strFunctionalityType), kViewType_ByTeachers, obLanguage("ClassManagement","kByTeachers",strFunctionalityType)), nTypeOfView, False, SelectChangeHandler(strForm))
	End If
	If nTypeOfView = kViewType_ByClasses Then
		Call DrawYearClasses_IUP( strForm, False, obLanguage("Filter","kNoYearClasses",strFunctionalityType) )
		If bIsIupGrade Then Call DrawSubjects ( strForm, "")
	Else
		Call DrawTeachers( strForm, bAll, False )
	End If
End Sub

Sub DrawButtons()
	If strClassID_IUP = "0" Then Exit Sub
	If Not readonly Then
		If Not rsClassSubjects.EOF Then
			ButtonSave "saveChanges();", obLanguage("Common","kSave")
			ButtonReset "resetScreen('ClassList');", obLanguage("Common","kReset")
		End If
		If nTypeOfView = kViewType_ByClasses Then
			ButtonAdd "editClass(0)", obLanguage("Common","kAddSubject")
		End If
		If Not rsClassSubjects.EOF Then ButtonDel "deleteCSG()", obLanguage("ClassManagement","kDelSubject")

		If nTypeOfView <> kViewType_ByClasses And bExistsIupClasses And bExistsIupGroups Then
			If HasUserRight(arClassMgmEditSubjects) And Not rsClassSubjects.EOF And HasUserRole(rlAdmin) Then
				Call Button("showMergeClassSubjects()", obLanguage("ClassManagement","kMergeSubjects"), obLanguage("ClassManagement","kMergeSubjects"), "")
			End If
		End If
	End If
End Sub

Sub DrawLinkButtons()
	If strClassID_IUP = "0" Then Exit Sub
	If Not rsClassSubjects.EOF Then Call DrawPrintButtons()
End Sub

Sub onDrawPage()
	%><form name="TeacherList" method="post" action="ClassSubjects.asp">
		<%=WriteObligatoryTags()%>
		<%Call DrawButtonsFilters( True, "TeacherList" )
	%></form><%

	%><form name="ClassList" METHOD="post" ACTION="SaveClassSubject.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("PCLID_IUP", strClassID_IUP, "CLID", "0", "ACT", "", "SJID", strSubjectId) )%><%
			If bNoSubjectGroups Then
				If nTypeOfView = kViewType_ByClasses Then
					DrawInfo obLanguage("ClassManagement","kNoSubjects1",strFunctionalityType), False
				Else
					DrawInfo obLanguage("ClassManagement","kNoSubjects2",strFunctionalityType), False
				End If
			Else
				Call DrawTable
			End If
	%></form><%
	If bNoSubjectGroups Or bExit Then Exit Sub
End Sub
%>
