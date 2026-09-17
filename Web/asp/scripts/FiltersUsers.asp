<!-- #INCLUDE FILE=FilterGrades.asp -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim bFiltersUsed, lngSortOrder, nFindType
Dim strFirstLetter, strLastLetter, strGender
Dim strLetter, strFio
Dim bAllowAllGRType, bAllowNotEnrolledGRType, bUseGender

Const FilterType_Filter = 1
Const FilterType_Search = 2

'Paging vars
Dim pageCount, nCurrPage, nPageSize

Function UserListForRole()
	'Stub
End Function

Sub DrawUsersFiltersHeader()%>
<SCRIPT><!--
function setNewFilter() {
	var actionURL;
	updateLastLetter();
	var form = document.MainForm;
	if(form.PageSize) {
		if( trimStr(form.PageSize.value) == "" || isNaN(str2lng( form.PageSize.value )) || str2lng( form.PageSize.value ) < 1) {
			alert(language.Generic.FilterUsers.kUsersNumberOfPage);
			form.PageSize.focus();
			return false;
		}
	}
	$.show.processing();
	DoSubmit( form, "<%=strScriptName%>" );
}

function updateLastLetter() {
	var form = document.MainForm;
	if( form.FL.selectedIndex > 0 )
		if( form.FL.selectedIndex > form.LL.selectedIndex )
			form.LL.selectedIndex = form.FL.selectedIndex;
}

function updateFirstLetter() {
	var form = document.MainForm;
	if( form.FL.selectedIndex > 0 )
		if( form.FL.selectedIndex > form.LL.selectedIndex )
			form.FL.selectedIndex = form.LL.selectedIndex;
}

function changeFind() {
	//акордеон срабатывает с запаздыванием
	setTimeout(function(){
		var selectedTabId = $("#headingFindByFilter, #headingFindByFam").find("a[aria-expanded='true']").attr("data-target");

		var searchPanel = "#FindByFam";
		var filterPanel = "#FindByFilter";

		if (selectedTabId == searchPanel) {
			selectedValue = <%=FilterType_Search%>;
			$("div.SmallHeader").html(language.Generic.Common.kMustUseFind);
		}
		else {
			selectedValue = <%=FilterType_Filter%>;
			$("div.SmallHeader").html(language.Generic.Common.kMustUseFilter);
		}

		$("input[name='FilterType']").val(selectedValue);

		onChangeFind(selectedValue);
		setFocus();
	}, 200)
}

function PageSizeKeyup(me) {
	me.value=me.value.replace(/\D/g, '');
}

function onChangeFind(selVal) {
}

function ChangeGrType() {
	var form = document.MainForm
	if (!form.GRtype) return;
	var selectedValue=form.GRtype.value;
	if (selectedValue=="-3")
	{
		form.GR.style.display = "none"
		if (form.Letter) form.Letter.style.display = "none"
	}
	else if(selectedValue=="-2")
	{
		form.GR.style.display = ""
		if (form.Letter) form.Letter.style.display = "none"
	}
	else
	{
		form.GR.style.display = ""
		ChangeGr();
	}
}

function ChangeGr() {
	var form = document.MainForm
	if (!form.Letter) return;
	var selectedValue=form.GR.value;
	if (selectedValue=="-1")
	{
		form.Letter.style.display = "none";
	}
	else if(form.GRtype.value=="-1")
	{
		form.Letter.style.display = "";
	}
}
//--></SCRIPT><%
End Sub

Sub GetTokenKeys(nRoleType, byref strFilterTypeKey, byref strFioKey, byref strFirstLetterKey, byref strLastLetterKey, byref strGenderKey)
	Select Case nRoleType
		Case RoleGroup_Staffs
			strFilterTypeKey = stUsersStaffFilterType
			strFioKey = stUsersStaffFioSearch
			strFirstLetterKey =	stUsersStaffFirstLetter
			strLastLetterKey = stUsersStaffLastLetter
			strGenderKey = stUsersStaffGender
		Case RoleGroup_Students
			strFilterTypeKey = stUsersStudentsFilterType
			strFioKey = stUsersStudentsFioSearch
			strFirstLetterKey =	stUsersStudentsFirstLetter
			strLastLetterKey = stUsersStudentsLastLetter
			strGenderKey = stUsersStudentsGender
		Case RoleGroup_Parents
			strFilterTypeKey = stUsersParentsFilterType
			strFioKey = stUsersParentsFioSearch
			strFirstLetterKey =	stUsersStudentsFirstLetter
			strLastLetterKey = stUsersStudentsLastLetter
			strGenderKey = stUsersStudentsGender
	End Select
End Sub

Sub ReadCommonUsersFilter(nRoleType)
	Dim strFilterTypeKey, strFioKey, strFirstLetterKey, strLastLetterKey, strGenderKey
	Dim nCorrectedDefaultPageSize
	GetTokenKeys nRoleType, strFilterTypeKey, strFioKey, strFirstLetterKey, strLastLetterKey, strGenderKey

	'Common filter fields
	bFiltersUsed = Not (IsDull(obTokenMgr.GetData( strToken, strFilterTypeKey )) And IsDull(Request("FilterType")))
	strFio = GetSafeStr(Trim(Request("SRCH_TEXT")),20,GetSafeStr(obTokenMgr.GetData(strToken,strFioKey),20,""))

	strFirstLetter = GetSafeStr(Request("FL"),1,GetSafeStr(obTokenMgr.GetData(strToken,strFirstLetterKey),1,obLanguage("Common","kFirstLetter")))
	strLastLetter = GetSafeStr(Request("LL"),1,GetSafeStr(obTokenMgr.GetData(strToken,strLastLetterKey),1,obLanguage("Common","kLastLetter")))
	If strLastLetter<>" " Then
		If obLanguage.Compare(strFirstLetter,strLastLetter, obContext.LocalSettings.DefaultLanguage) > 0 Then strLastLetter = strFirstLetter
	End If
	strGender = GetSafeStr(Request("GN"), 1, GetSafeStr( obTokenMgr.GetData( strToken, strGenderKey ), 1,"" ) )
	If strGender = "A" Then strGender = ""
	lngSortOrder = GetSafeLng( Request("SORT"), GetSafeLng( obTokenMgr.GetData( strToken, stSortOrder ), 0) )
	nFindType = GetSafeLng(Request("FilterType"),GetSafeLng( obTokenMgr.GetData( strToken, strFilterTypeKey ), FilterType_Filter))

	nCurrPage = GetSafeLng(Request("cp"), GetSafeLng( obTokenMgr.GetData( strToken, stCurrPage ),0) )
	If isIE6 Then
		'perfomance problem
		nCorrectedDefaultPageSize = kDefaultUsersPageSize_IE6
	Else
		nCorrectedDefaultPageSize = kDefaultUsersPageSize
	End If
	nPageSize = GetSafeLng( Request("PageSize"), GetSafeLng( obTokenMgr.GetData( strToken, stPageSize ), nCorrectedDefaultPageSize) )
	If nPageSize <=0 Then nPageSize=kDefaultUsersPageSize
End Sub

'For Students and Parents
Sub InitGrType
	lngGrade = GetSafeLng( obTokenMgr.GetData( strToken, stUsersStudentsGrades ), -1 )
	If lngGrade >= 0 Then
		strLetter = GetSafeStr(Request("LETTER"),60,GetSafeStr(obTokenMgr.GetData(strToken,stCurrClassLetter),60," "))
	Else
		If GetSafeLng(Request("GRtype"),GetSafeLng( obTokenMgr.GetData( strToken, stGRtype ), -3)) = -3 Then
			strLetter = Null
		ElseIf GetSafeLng(Request("GRtype"),GetSafeLng( obTokenMgr.GetData( strToken, stGRtype ), -2)) = -2 Then
			strLetter = "kNotEnrolled"
			lngGrade = -2
		Else
			strLetter = " "
		End If
	End If
End Sub

'For Students and Parents
Sub InitLetter
	If nFindType = FilterType_Filter Then
		If nGRtype = -2 Then
			strLetter = "kNotEnrolled"
		ElseIf nGRtype = -3 Then
			strLetter = Null
			lngGrade = -1
		ElseIf bPreSchool Then
			strLetter = " "
		ElseIf lngGrade>=0 Then
			strLetter = GetSafeStr(Request("LETTER"),60,GetSafeStr(obTokenMgr.GetData(strToken,stCurrClassLetter),60," "))
		Else
			strLetter = " "
		End If
	ElseIf lngGrade >=0 Then
		strLetter=GetSafeStr(Request("LETTER"),60,GetSafeStr(obTokenMgr.GetData(strToken,stCurrClassLetter),60," "))
	Else
		strLetter=" "
	End If
End Sub

Sub WriteCommonUsersFilter(nRoleType)
	Dim strFilterTypeKey, strFioKey, strFirstLetterKey, strLastLetterKey, strGenderKey
	GetTokenKeys nRoleType, strFilterTypeKey, strFioKey, strFirstLetterKey, strLastLetterKey, strGenderKey
	'Common filter fields
	Call obTokenMgr.SetData(strToken,strFirstLetterKey, strFirstLetter)
	Call obTokenMgr.SetData(strToken,strLastLetterKey, strLastLetter)
	Call obTokenMgr.SetData(strToken,strGenderKey, strGender)
	Call obTokenMgr.SetData(strToken,strFioKey, strFio)
	If bFiltersUsed Then Call obTokenMgr.SetData(strToken,strFilterTypeKey, nFindType)

	Call obTokenMgr.SetData(strToken, stCurrPage, nCurrPage)
	Call obTokenMgr.SetData(strToken, stPageSize, nPageSize)
	Call obTokenMgr.SetData(strToken, stSortOrder, lngSortOrder)
End Sub

Sub DrawUsersSearchHeader()%>
<SCRIPT><!--
var validateSearch = null;
function setNewSearch(){
	var actionURL;
	var form = document.MainForm;
	if (typeof validateSearch === 'function'){
		if (!validateSearch()){
			return;
		}
	}
	else{
		if (!form.elements["SRCH_TEXT"].value || form.elements["SRCH_TEXT"].value.toString().trim() == ""){
			alert('<%=GetMsgOnEmptySearch()%>')
			return;
		}
	}
	DoSubmit( form, "<%=strScriptName%>" );
}

$(document).ready(function(){
	$("#headingFindByFilter, #headingFindByFam").on("click", changeFind);
})
//--></SCRIPT><%
End Sub

Function GetMsgOnEmptySearch()
	GetMsgOnEmptySearch = obLanguage("FilterUsers","kInputLastName")
End Function

Sub DrawUsersFiltersBody( bNeedGrades, bDrawSearchFilter )
	Call DrawUsersFiltersBody_Ex( bNeedGrades, bDrawSearchFilter, strCurrYearID, strFunctionalityType, 1 )
End Sub

Sub DrawUsersFiltersBody_Ex( bNeedGrades, bDrawSearchFilter, strInYearID, strInFuncType, nMainColSpan )
	Call SetFiltersWidth("", "col-md-4 col-lg-5 col-sm-4", "col-md-8 col-lg-6 col-sm-8")

	If bDrawSearchFilter Then
		%><div class="panel-group" id="users-filter-accordion" role="tablist" aria-multiselectable="true">
			<input type="hidden" name="FilterType" value="<%=nfindType%>"/><%

			OpenPanelEx obLanguage("FilterUsers","kFilter"), "FindByFilter", "users-filter-accordion", (nfindType <> 1), ""
			Call DrawUsersFiltersCommonBody(bNeedGrades, strInFuncType)
			ClosePanel

			OpenPanelEx obLanguage("FilterUsers","kSearch"), "FindByFam", "users-filter-accordion", (nfindType <> 2), ""
			%><div class="row"><div class="col-md-12"><%
			Call DrawUsersSearchBody()
			%></div></div><%
			ClosePanel
			%>
		</div><% 
	Else
		Call DrawUsersFiltersCommonBody(bNeedGrades, strInFuncType)
	End If

	RestoreDefFiltersWidth
End Sub

Function DrawUsersFiltersBody_Special
	DrawUsersFiltersBody_Special = False
End Function

Sub DrawUsersFiltersCommonBody(bNeedGrades, strInFuncType)
	Dim arrGenders
	Dim i
	Dim bPreSchool
	strInFuncType = CLng(strInFuncType)
	bPreSchool = CLng(strInFuncType) = kFuncType_PreSchool

	OpenFormGroup obLanguage("FilterUsers","kByABC") %>
		<select name="FL" onChange="updateLastLetter()" class="form-control form-control-inline">
			<option value=" "<%If " " = strFirstLetter Then%> selected<%End If%>><%=obLanguage("FilterUsers","kLatin_")%></option>
			<% OutABC( strFirstLetter ) %>
		</select> - 
		<select name="LL" onChange="updateFirstLetter()" class="form-control form-control-inline">
			<option value=" "> </option>
			<% OutABC( strLastLetter ) %>
		</select>
	<%CloseFormGroup

	If IsEmpty(bUseGender) Or bUseGender Then
		arrGenders = Array("A", obLanguage("Common","kAll"), obLanguage("Common","kMaleLet"), obLanguage("Common","kMale"), obLanguage("Common","kFemaleLet"), obLanguage("Common","kFemale"))
		DrawSimpleFilterRow obLanguage("Common","kGender"), "GN", arrGenders, strGender, False, " "
	End If

	If Not DrawUsersFiltersBody_Special() Then
		i = Clng(obTokenMgr.GetData(strToken,"ROLEID"))
		Select Case i
		Case rlStudent, rlParent
			If InStr(strScriptName,"NonEnroll") = 0 Then
				If InStr(strScriptName,"AssociateParent.asp") = 0 Then%>

					<%OpenFormGroup obLanguage("Common","kClass", strInFuncType) %>
						<select name="GRtype" onchange="ChangeGrType()" class="form-control form-control-inline">
							<%If IsEmpty(bAllowAllGRType) Or bAllowAllGRType Then%>
							<option value="-3" <%If nGRtype=-3 Then%> selected<%End If%>><%=IIF(i=rlStudent, obLanguage("Filter","kAllStudents",strFunctionalityType), obLanguage("FilterUsers","kAllParents"))%></option>
							<%End If%>
							<option value="-1"<%If nGRtype=-1 Then%> selected<%End If%>><%=obLanguage("FilterUsers","kAllEnrolled")%></option>
							<%If IsEmpty(bAllowNotEnrolledGRType) Or bAllowNotEnrolledGRType Then%>
							<option value="-2"<%If nGRtype=-2 Then%> selected<%End If%>><%=obLanguage("Filter","kNotEnrolled")%></option>
							<%End If%>
						</select>

						<%Call DrawSelectGRade(bNeedGrades or bPreSchool, strInFuncType)
						If bPreSchool Then
							bNoLetters = True
						Else
							Call InitClassLetters(strFunctionalityType = kFuncType_Add)
						End If
						If Not bNoLetters Then
							DrawClassLetters strLetter, ""
						ElseIf nGRtype=-1 Then
							%><input type="hidden" name="Letter" value=" "/><%
						End if%>
					<%CloseFormGroup %>	<%
				End If
			Else
				OpenFormGroup obLanguage("Common","kClass",strFunctionalityType)
					rw obLanguage("Filter","kNotEnrolled")
					Call DrawSelectGRade(bNeedGrades or bPreSchool, strInFuncType)
				CloseFormGroup
			End If
		End Select
	End If

	If InStr(strScriptName,"AssociateParent.asp")=0 And InStr(strScriptName,"RegionPoolStudentsSelect.asp")=0 Then%>
		<%OpenFormGroup obLanguage("FilterUsers","kNumOfRecords") %>
			<input type="text" name="PageSize" size="<%=TextInputSize(4)%>" maxlength="4" value="<%= nPageSize %>" onkeyup="PageSizeKeyup(this);">
		<%CloseFormGroup %> <%
	End If

	%><div class="form-group"><div class="col-md-12"><%
		ButtonApply "setNewFilter()", obLanguage("FilterUsers","kApplyFilter")
	%></div></div><%
End Sub

Sub DrawUsersSearchBody()
	OpenFormGroup GetTitleSearchFor() 
	%><input type="text" name="SRCH_TEXT" maxlength="20" class="form-control" value="<%=strFio%>" onkeydown="if (event.keyCode == 13) setNewSearch()"><%
	CloseFormGroup
	Call DrawNextSeachFields()
	%><div class="form-group"><div class="col-md-12"><%
		ButtonSearch "setNewSearch()", obLanguage("FilterUsers","kFindUser")
	%></div></div><%
End Sub

Function GetTitleSearchFor()
	GetTitleSearchFor = obLanguage("Common","kLastName")
End Function

Sub DrawNextSeachFields()
End Sub

'Отрисовка алфавита системного языка
Function OutABC( strLetter )
	If Not bIsDebug Then On Error Resume Next
	Dim strChar
	For Each strChar in obLanguage.GetAlphabet(obContext.LocalSettings.DefaultLanguage)
		strChar = UCase(strChar)
		%><option value="<%=strChar%>"<%If strChar = strLetter Then%> selected<%End If%>><%=strChar%></option><%
	Next
End Function

Sub DrawSelectGRade(bGetGrades, strInFuncType)
	Dim arrGrades, i
	if bGetGrades Then arrGrades = GetArrGrades(strInFuncType,1,1,0)%>
	<select name="GR" class="form-control form-control-inline" onchange="ChangeGr()" <%If nGRtype=-2 Then%> style="display: none;"<%End If%>><%
	If IsArray( arrGrades ) Then
		For i = 0 To UBound(arrGrades, 2)%>
			<option value="<%=arrGrades(0,i)%>"<%If arrGrades(0,i) = lngGrade Then Response.Write " selected"%>><%=arrGrades(1,i)%></option><%
		Next
	End If%>
	</select><%
End Sub
%>
