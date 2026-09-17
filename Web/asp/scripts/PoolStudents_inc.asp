<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersUsers.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/populate.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kPageType_UNDEF = -1
Const kPageType_ADMIN = 0
Const kPageType_SELECT = 1
Const kPageType_SCHOOL = 2

Const kByDirectingSuitableColor = "#CCFF99" '"#CAFF70" '"pink"
Const kByDirectingStudInSchoolColor = "pink"
Const kStudentInESPoolColor = "pink"

Dim strPoolSchoolID, rsPoolSchools, strPoolYearID, rsPoolYears, strPoolGrade, rsPoolGrades, arrPoolGrades
Dim objStudentList, strSaved
Dim lngStudentCnt

Dim nPageType, nViewType' active/non active/...
Dim rsFuncTypes, strFuncTypeID
Dim rsDepartReasons, strDepReasonID
Dim arrInaccReasons, nInaccReason
Dim nPoolFilter, bAll, strEOIDTO
Dim bByDirecting
Dim strClassID, nClassTypeID, nAgeMin, nAgeMax, strClassName, nClassGrade
Dim bProcessClassParams
Dim nGYMaxID ' ограничение года видимости
Dim objPoolCategories
Dim bPseudoPool ' дети, попавшие в пул не из-за выбытия из школы, а при зачислении в ОДО, nViewType - соответсвует PoolCategories: 2, 3
Dim bIsOutOfSchoolPoolExists, nPoolCategoryID
Dim bIsAnyAdmin
Dim bAddSchool
Dim deleteStudentsInqueryIds
Dim nPoolEMID

Sub ReadState()
	SetScriptTimeOut 900

	nPoolEMID = -1
	nPageType = kPageType_UNDEF
	bProcessClassParams = False
	nGYMaxID = -1 ' Без ограничений
	bIsOutOfSchoolPoolExists = objNSNET.IsOutOfSchoolPoolExists()
	bIsAnyAdmin = objNSNET.IsAdminOfServer(strUserID) Or bIsEducManager
	bAddSchool = False

	Call ReadStateSpecial()
	Call ReadFilter()

	nCurrPage = GetSafeLng(Request("cp"), GetSafeLng(obTokenMgr.GetData(strToken, stCurrPage ), 0))
	nPageSize = GetSafeLng(Request("PageSize"), GetSafeLng(obTokenMgr.GetData(strToken, stPageSize), kDefaultUsersPageSize))
	If nPageSize <= 0 Then nPageSize = kDefaultUsersPageSize
	lngSortOrder = GetSafeLng(Request("SORT"), GetSafeLng(obTokenMgr.GetData(strToken, stSortOrder), 0))
	
	deleteStudentsInqueryIds = Request("ids")
	if not IsEmpty(deleteStudentsInqueryIds) Then
		objNSNET.DeleteFromEsPool deleteStudentsInqueryIds, strSchoolID
	end if	
End Sub

Sub ReadStateSpecial()
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact"
End Function

Sub ReadFilter()
	Dim objPreClassInfo, objClassInfo

	ReadViewType

	bByDirecting = (nViewType = 0)
	If Not bByDirecting Then
		ReadPoolFilter
		If Not bPseudoPool Then
			InitFunctionTypes
			InitPoolSchools
			InitPoolYears
			InitPoolGrades
			InitDepartReasons
		End If
		InitInaccessReasons
	Else
		If nPageType = kPageType_SELECT Then
			strClassID = obTokenMgr.GetData(strToken, stCurrClass)
			
			If CLng(strFunctionalityType) = kFuncType_PreSchool Then
				Set objPreClassInfo = objNSNET.GetPreClassInfo(strClassID)
				bProcessClassParams = Not objPreClassInfo.EOF

				If bProcessClassParams Then
					strClassName	= GetSafeStr(objPreClassInfo("CLASSNAME"), -1, "")
					nClassTypeID	= GetSafeLng(objPreClassInfo("TYPEID"), -1)
					nAgeMin			= GetSafeLng(objPreClassInfo("AGEMIN"), -1)
					nAgeMax			= GetSafeLng(objPreClassInfo("AGEMAX"), -1)

					If nClassTypeID = -1 Or nAgeMin = -1 Or nAgeMax = -1 Then
						bProcessClassParams = False
					End If
				End If
			Else
				Set objClassInfo = objNSNET.GetClassInfo(strClassID)
				bProcessClassParams = Not objClassInfo.EOF

				If bProcessClassParams Then
					strClassName = GetSafeStr(objClassInfo("CLASSNAME"), -1, "")
					nClassGrade = GetSafeLng(objClassInfo("GRADE"), -1)

					If strClassName = "" Then
						bProcessClassParams = False
					End If
				End If
			End If
		End If
	End If

	strFirstLetter = GetSafeStr(Request("FL"), 1, GetSafeStr(obTokenMgr.GetData(strToken,stUsersStudentsFirstLetter), 1, obLanguage("Common","kFirstLetter")))
	strLastLetter = GetSafeStr(Request("LL"), 1, GetSafeStr(obTokenMgr.GetData(strToken,stUsersStudentsLastLetter), 1, obLanguage("Common","kLastLetter")))

	If strLastLetter <> " " Then
		If obLanguage.Compare(strFirstLetter,strLastLetter, obContext.LocalSettings.DefaultLanguage) > 0 Then strLastLetter = strFirstLetter
	End If

	strGender = GetSafeStr(Request("GN"), 1, GetSafeStr(obTokenMgr.GetData( strToken, stUsersStudentsGender), 1, ""))
	If strGender = "A" Then strGender=""
End Sub

Sub WriteState()
	Call WriteFilter()
	Call obTokenMgr.SetData(strToken, stCurrPage, nCurrPage)
	Call obTokenMgr.SetData(strToken, stPageSize, nPageSize)
	Call obTokenMgr.SetData( strToken, stSortOrder, lngSortOrder )
	Call WriteStateSpecial()
End Sub

Sub WriteStateSpecial()
End Sub

Sub WriteFilter()
	If Not bByDirecting Then
		If Not bPseudoPool Then
			WriteFunctionType
			WritePoolSchool
			WritePoolYear
			WritePoolGrade
			WriteDepartReason
		End If

		WriteInaccessReason
	End If

	Call obTokenMgr.SetData(strToken,stUsersStudentsFirstLetter, strFirstLetter)
	Call obTokenMgr.SetData(strToken,stUsersStudentsLastLetter, strLastLetter)
	Call obTokenMgr.SetData(strToken,stUsersStudentsGender, strGender)
End Sub

Sub Main()
	pageCount = 1 ' Иначе не будет постраничной разбивки
'	If bUseRepl and Not objNSNET.IsAdminOfServer(strUserID) and Not bIsEducManager Then strEOIDTO = objNSNET.GetSchoolInfo(strSchoolID)("EOID") :Else strEOIDTO="0"
	If (bUseRepl Or obContext.ServerSettings.SystemSettings.ModuleEServices) and Not objNSNET.IsAdminOfServer(strUserID) and Not bIsEducManager and Not bAddSchool and _
		((nPageType = kPageType_SELECT) Or (nViewType = 0)) Then
		strEOIDTO = objNSNET.GetSchoolInfo(strSchoolID)("EOID")
	Else
		strEOIDTO = "0"
	End If

	Set objStudentList = objNSNET.GetPoolStudents(nViewType, nPoolCategoryID, nPoolFilter, strFuncTypeID, strFirstLetter, strLastLetter, strGender, strDepReasonID, nInaccReason, strPoolGrade, strPoolYearID, strPoolSchoolID, strEOIDTO, lngSortOrder, nPageSize, nCurrPage, pageCount, nGYMaxID, nPoolEMID)
	lngStudentCnt = 0
	If Not objStudentList Is Nothing Then lngStudentCnt = objStudentList.RecordCount
End Sub

Function onLoad()
	If Not IsDull(strSaved) Then onLoad = "JavaScript:WasSaved('" & strSaved & "');" Else onLoad = ""
End Function

Sub onHeadSpecial()
End Sub

Sub DrawListTable()
	Dim QuickLetter, CurLetter, CurName, i, nStudID, nNewStudID, strClasses
	Dim bSelected
	Dim nStartNum
	Dim strDepartPlace
	Dim strBGColor, nPoolClassTypeID, nPoolAgeMin, nPoolAgeMax, bSuitableForEnroll
	Dim objStudSchool, bStudInSchool, bStudInESPool
	Dim strPoolClassName, nPoolClassGrade
	Dim strStudInSchool
	Dim strSchName, bEmptyAddInfo

	If lngStudentCnt = 0 Then
		Call DrawInfo(obLanguage("PoolStudents","kNoPoolStudentsForThisCategory"), False)
		
		Exit Sub
	End If%>

	<table class="table table-bordered table-bright-hover table-bright-striped table-xs print-block">
		<tr><%
			If nPageType = kPageType_SELECT Then%><th width="30px">&nbsp;</th><%End If%>
			<th><%=obLanguage("Filter","kN_PP")%></th>
			<th><%=GetSortHeader(obLanguage("Filter","kFIO"), 0, lngSortOrder)%></th>
			<th><%=GetSortHeader(obLanguage("Common","kBDate"), 2, lngSortOrder)%></th><%

			If CLng(strFunctionalityType) <> kFuncType_Add Then
				If Not bByDirecting Then%>
					<th><%=IIf(bPseudoPool, obLanguage("Common","kSchool",kFuncType_Add), obLanguage("PoolStudents","kPoolSchool"))%></th><%
					If Not bPseudoPool Then%>
						<th><%=obLanguage("PoolStudents","kPoolReason")%></th>
						<th><%=obLanguage("PoolStudents","kPoolDepartPlace")%></th><%
					End If
				Else
					If CLng(strFunctionalityType) = kFuncType_PreSchool Then%>
						<th><%=obLanguage("PoolStudents","kAge")%></th>
						<th><%=obLanguage("ClassManagement","kClassType", 1)%></th><%
					Else%>
						<th><%=obLanguage("PoolStudents","kDistributionClass",strFunctionalityType)%></th><%
					End If%>
					<th><%=obLanguage("PoolStudents","kCertificate")%></th>
					<th><%=obLanguage("PoolStudents","kDistributionPlace")%></th>
					<th><%=obLanguage("Common","kArriveFrom")%></th>
					<th><%=obLanguage("Common","kComment")%></th>
					<th><%=obLanguage("Common","kRemove")%></th><%
				End If
			End If

			If Not bByDirecting Then
				If Not bPseudoPool Then
					If nViewType = -1 Then%><th><%=obLanguage("PoolStudents","kInaccessibilityReason")%></th><%End If%>
					<th><%=obLanguage("PoolStudents","kPoolYear")%></th>
					<th><%=obLanguage("PoolStudents","kPoolData")%></th>
					<th><%=obLanguage("PoolStudents","kPoolGrades2",strFunctionalityType)%></th><%
				Else ' bPseudoPool %>
					<th><%=obLanguage("SetupSchool","kEnrollDate")%></th>
					<th><%=obLanguage("Movement","kDocNumber")%></th>
					<th><%=obLanguage("Common","kClass",kFuncType_Add)%></th><%
				End If
			End If%>
		</tr><%
	QuickLetter = ""
	nStartNum = nCurrPage * nPageSize
	i = 1
	Dim rsMSL, rwSpan, strRwSpan
			
	While Not objStudentList.EOF
		bSuitableForEnroll	= True
		rsMSL				= objStudentList("chapMSL")
		nStudID				= objStudentList("STUDENTID")
		strBGColor			= ""
		strStudInSchool		= ""

		If bProcessClassParams Then
			If CLng(strFunctionalityType) = kFuncType_PreSchool Then
				nPoolClassTypeID	= GetSafeLng(rsMSL("GROUPTYPEID"), -1)
				nPoolAgeMin			= GetSafeLng(rsMSL("AGEMONTHMIN"), -1)
				nPoolAgeMax			= GetSafeLng(rsMSL("AGEMONTHMAX"), 1000)

				If nPoolClassTypeID = nClassTypeID And ((nPoolAgeMin <= nAgeMin And nAgeMin <= nPoolAgeMax) Or (nPoolAgeMin <= nAgeMax And nAgeMax <= nPoolAgeMax)) Then
					strBGColor = "suitable"
				Else
					bSuitableForEnroll = False
				End If
			Else
				nPoolClassGrade = GetSafeLng(rsMSL("GRADE"), -1)
				strPoolClassName = GetSafeLng(rsMSL("GRADE"), -1) & GetSafeStr(rsMSL("CLASSNAME"), -1, "")

				If (UCase(strPoolClassName) = UCase(strClassName)) And (nPoolClassGrade = nClassGrade) Then
					strBGColor = "suitable"
				Else
					bSuitableForEnroll = False
				End If
			End If
		End If
	
		bStudInSchool = False
		bStudInESPool = False

		If bByDirecting Then
			Set objStudSchool = objNSNET.GetUserSchool(nStudID)
			bStudInSchool = Not objStudSchool.EOF

			If bStudInSchool Then
				If nPageType = kPageType_SELECT Then
					strBGColor = "by-directing"""
				End If
				strStudInSchool = obLanguage("PoolStudents","kIsIn") & " " & GetSafeStr(objStudSchool("EONAME"), -1, "") & " (" & GetSafeStr(objStudSchool("CITY"), -1, "") & ")"
			End If
		Else ' Значит находимся в обычном пуле.
			If obContext.ServerSettings.SystemSettings.ModuleEServices Then
				bStudInESPool = objNSNET.IsStudentInESPool(nStudID)
				If bStudInESPool Then
					If nPageType = kPageType_SELECT Then
						strBGColor = "in-es-pool"
					End If
				End If
			End If
		End If

		rwSpan = objStudentList("cnt")
		bEmptyAddInfo = (rwSpan = 0)
		If(rwSpan > 1) Then strRwSpan = " rowspan=""" & rwSpan & """" Else strRwSpan = ""
		CurName = DB2HTML(objStudentList("LASTNAME")) & " " & DB2HTML(objStudentList("FIRSTNAME")) & " " & DB2HTML(objStudentList("MIDDLENAME"))
		CurLetter = UCase(Left(objStudentList("LASTNAME"),1))%>
		<tr class="text-left <%=strBGColor%>"><%

		If nPageType = kPageType_SELECT Then
			If bStudInSchool Or bStudInESPool Then%>
				<td <%=strRwSpan%>>&nbsp;</td><%
			Else
				Call DrawStudentsCheckBox(nStudID, rsMSL, bSuitableForEnroll, strRwSpan)
			End If
		End If%>
			<td class="text-right" <%=strRwSpan%>><%=nStartNum + i%>&nbsp;</td><td class="text-left" nowrap<%=strRwSpan%>> <%
		If CurLetter<>QuickLetter Then Response.Write "<A NAME="""&CurLetter&"""></A>": QuickLetter=CurLetter
		If nPageType = kPageType_SELECT or Not PERSON_DATA Then
			Response.Write CurName
		Else
			Response.Write ShowAnchor( "editUser('"&DB2Java(nStudID)&"',null,this);", obLanguage("PoolStudents","kEditStudent",strFunctionalityType), CurName, "class=""uid"&DB2Java(nStudID)&"""" )
		End If%>
			</td>
			<td class="text-left" <%=strRwSpan%>><%=Date2Str(objStudentList("BIRTHDATE"))%></td><%
		Do
			If CLng(strFunctionalityType) <> kFuncType_Add Then
				strDepartPlace = ""
				If Not bPseudoPool Then
					If Not IsDull(rsMSL("EONAME")) Then
						strDepartPlace = rsMSL("EONAME") & " (" & rsMSL("CITYNAME") & ")"
					End If
				End If
				If Not bByDirecting Then
					If Not bPseudoPool Then%>
						<td class="text-left"><%=DB2HTML(rsMSL("SCHOOLNAME"))%></td>
						<td class="text-left"><%=IIF(IsNull(rsMSL("REASONNAME")), obLanguage("PoolStudents","kGraduated_"), DB2HTML(rsMSL("REASONNAME")))%></td><%
					Else
						strSchName = ""
						If Not bEmptyAddInfo Then
							If Not IsDull(rsMSL("SCHOOLNAME")) Then
								strSchName = rsMSL("SCHOOLNAME") & " (" & rsMSL("CITYNAME") & ")"
							End If
						End If%>
						<td class="text-left"><%=DB2HTML(strSchName)%></td>
					<%End If
				Else
					If CLng(strFunctionalityType) = kFuncType_PreSchool Then%>
						<td><%=(GetAge(rsMSL("AGEMONTHMIN")) & " - " & GetAge(rsMSL("AGEMONTHMAX")))%></td>
						<td><%=DB2HTML(rsMSL("TYPENAME"))%></td><%
					Else%>
						<td><%=DB2HTML(rsMSL("GRADE") & rsMSL("CLASSNAME"))%></td><%
					End If%>
					<td><%=DB2HTML(rsMSL("CERTIFICATE"))%></td><%
				End If
				If Not bPseudoPool Then%>
					<td class="text-left"><%=DB2HTML(strDepartPlace)%></td><%
				End If
				If bByDirecting Then%>
					<td><%=DB2HTML(rsMSL("FROM_EONAME"))%></td>
					<td><%=DB2HTML(strStudInSchool)%></td>
					<td class="text-center"><input type="checkbox" class="deleted" id="<%=DB2Java(nStudID) %>"/></td><%
				End If
			End If
			If nViewType = -1 And Not bPseudoPool Then%><td><%=ShowReason(rsMSL("REASONID"))%></td><%
			End If
			If Not bByDirecting Then
				If Not bPseudoPool Then%>
					<td class="text-left"><%=DB2HTML(rsMSL("SCHOOLYEARNAME"))%></td><%
				End If%>
				<td class="text-left"><%=Date2Str(rsMSL("DOCDATE"))%></td><%
				If bPseudoPool Then%>
					<td class="text-left"><%=DB2HTML(rsMSL("DOCNUMBER"))%></td><%
				End If%>
				<td class="text-nowrap text-center"><%strClasses = rsMSL("CLASSNAME")
			End If
			rsMSL.MoveNext
			If Not bByDirecting Then
				If CLng(strFuncTypeID) = kFuncType_PreSchool Then strClasses = GetPreClassName(strClasses)
				Response.Write DB2HTML(strClasses)%></td><%
			End If%>
		</tr><%If rsMSL.EOF Then Exit Do%><tr><%
		Loop
		objStudentList.MoveNext
		i = i + 1
	Wend%>
	</table><%
	Call DrawLegend()
End Sub

Sub DrawLegend()
End Sub

Function GetAge(strAgeMonth)
	Dim nAgeMonth, nYear, nMonth
	Dim strAge, strYearShort

	If IsDull(strAgeMonth) Then
		GetAge = ""
		Exit Function
	End If

	nAgeMonth = GetSafeLng(strAgeMonth, Null)
	nYear = nAgeMonth \ 12 ' целочисленное деление
	nMonth = nAgeMonth Mod 12

	strYearShort = IIf(nYear < 5, obLanguage("PoolStudents","kSYearsLess5"), obLanguage("PoolStudents","kSYears"))
	strAge = nYear & " " & strYearShort

	If nMonth > 0 Then
		strAge = strAge & " " & nMonth & " " & obLanguage("PoolStudents","kSMonths")
	End If

	GetAge = strAge
End Function

Function ShowReason( nReason )
	Select Case nReason
	Case NotAvailableReasons_Worked: ShowReason = obLanguage("PoolStudents","kWorked")
	Case NotAvailableReasons_Learned: ShowReason = obLanguage("PoolStudents","kLearned")
	Case NotAvailableReasons_LearnedPOO: ShowReason = obLanguage("PoolStudents","kLearnedPOO")
	Case NotAvailableReasons_Leaved: ShowReason = obLanguage("PoolStudents","kLeaved")
	Case NotAvailableReasons_Gone: ShowReason = obLanguage("PoolStudents","kGone")
	Case NotAvailableReasons_DuplicateSgo: ShowReason = obLanguage("PoolStudents","kDuplicateSGO")
	Case Else ShowReason = "&nbsp;"
	End Select
End Function

Function IsSelectedStudent(strStudentID)
	IsSelectedStudent = False
End Function

Sub DrawStudentsCheckBox(strStudentID, rsPool, bSuitableForEnroll, strRwSpan)
	Dim bSelected

	bSelected = IsSelectedStudent(strStudentID)%>
	<td <%=strRwSpan%>>
		<INPUT TYPE="CHECKBOX" NAME="Students" VALUE="<%=strStudentID%>" <%If bSelected Then%>checked<%End If%> <%If Not bSuitableForEnroll Then%>onclick="changeUnsuitable(this)"<%End If%>>
		<%If bSelected Then%><input type="hidden" name="oldUsers" value="<%=strStudentID%>"><%End If%>
	</td><%
End Sub

Sub onHead()%>
	<style>
		@media (min-width: 810px) {
			.select2-dropdown {
				width: 350px !important;
			}
		}
	</style>

	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>
	
	<script charset="windows-1251" type="text/javascript">
		$(function() {
			$('select[name="POOLSCHOOL"]').select2({language: 'ru', dropdownCssClass : 'select2-dropdown'});
		});
	
		function changeView() {
			$.show.processing();
			DoSubmit(document.MainForm, "");
		}

		function deleteInquery(){
			var checkedList = $("input.deleted:checked");
			if(!checkedList.length){
				$.show.alert(language.Generic.Common.kErrMsgNoChecks);
				return;
			}

			var idList = $.map(checkedList, function(x){return x.id});
			if(isDBBusy()) return false;
			$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function() {
				setDBBusy();
				$.show.processing();
				postTo("/asp/SetupSchool/Movement/PoolStudents.asp", {ids: [idList]});
			});
		}

		function goPseudoPool(pseudoPool) {
			var form = document.MainForm;
			form.PseudoPool.value = pseudoPool;
			$.show.processing();
			DoSubmit(form, "");
		}

		function tryEditDesabledUser() {
			alert(language.Generic.PoolStudents.kChildWasRefusedToEnroll);
		}

		function HotKey(e) {
			if($(e.target).is('input')) return;
			
			e = getEvent(e);
			keycode = getKeyCode(e);

			numcheck = /[А-я]/
			keychar = String.fromCharCode(keycode);

			if(numcheck.test(keychar)) {
				var destA = "#" + keychar;
				window.location.href = destA.toUpperCase();
			}

			return true;
		}

		function editUser(uId, schId, obj) {
			var form = GetForm('MainForm', obj);

			form.UID.value = uId;

			ShowInDialog(form, '/asp/SetupSchool/Movement/StudentInfo.asp');
		}

		$(document).on('keypress', HotKey);

		function gotoPage(nPage) {
			var form = document.forms.MainForm;
			form.elements["cp"].value = nPage;
			$.show.processing();
			DoSubmit(form, "<%=strScriptName%>");
		}

		function changeSortOrder(nNewSortOrder) {
			var form = document.forms.MainForm;
			form.elements["SORT"].value = (nNewSortOrder == <%= lngSortOrder%>) ? -nNewSortOrder : nNewSortOrder;
			$.show.processing();
			DoSubmit(form, "<%=strScriptName%>");
		}

		function OnChangeSelect(fName, action) {
			$.show.processing();
			DoSubmit(GetForm(fName, this),action);
		}

		function returnTableCell(str) {
			if (str == "") {
				return "&nbsp;"
			}
			else return str;
		}

		<%Call DrawPrintScripts("/asp/scripts/PoolStudentsPrint.asp", "/asp/scripts/PoolStudentsExport.asp")%>
	</script>

	<style>
		.deleted * {
			color: grey;
			text-decoration: line-through;
		}

		.suitable > td {
			background-color: <%=kByDirectingSuitableColor%> !important;
		}
		
		.in-es-pool > td {
			background-color: <%=kStudentInESPoolColor%> !important;
		}

		.by-directing > td {
			background-color: <%=kByDirectingStudInSchoolColor%> !important;
		}

	</style><%

	Call onHeadSpecial()
	Call DrawUsersFiltersHeader()
End Sub

Sub DrawFilters(strForm)
	Call DrawFiltersSpecial(strForm)

	If Not bByDirecting Then
		If Not bPseudoPool Then
			Call DrawPoolFilter(strForm)
			Call DrawFuncTypes(strForm)
			Call DrawEmFilter(strForm)
			Call DrawPoolSchools(strForm) : If bExit Then Exit Sub
			Call DrawPoolYears(strForm) : If bExit Then Exit Sub
			Call DrawPoolGrades(strForm) : If bExit Then Exit Sub

			If CLng(strFunctionalityType) <> kFuncType_Add Then Call DrawDepartReasons(strForm)
		End If

		If nViewType = -1 Then Call DrawInaccessReasons(strForm)
	End If

	Call DrawUsersFiltersBody(True, False)
End Sub

Sub DrawFiltersSpecial(strForm)
End Sub

Sub DrawEmFilter(strForm)
End Sub

Sub DrawAdminViewTypeFilters(strForm)
	Dim arr

	If Not bPseudoPool Then
		arr = Array("1", obLanguage("PoolStudents","kOut"), "6", obLanguage("PoolStudents","kGraduation"), "-1", obLanguage("PoolStudents","kInaccessible"))
	Else
		arr = Array("1", obLanguage("PoolStudents","kAccessible"), "-1", obLanguage("PoolStudents","kInaccessible"))
	End If
	
	Call DrawSimpleFilterRow(obLanguage("PoolStudents","kAccessCategory"), "ViewType", arr, nViewType, Null, "changeView()")
	
	If bPseudoPool Then
		Call DrawSelectInfoRow(obLanguage("PoolStudents","kCategory"), nPoolCategoryID, "PoolCategory", objPoolCategories, "CATEGORYID", "CATEGORYNAME", Null, "changeView()")
	End If
End Sub

Sub DrawPoolFilter(strForm)
	If CLng(strFunctionalityType) <> kFuncType_Add And nViewType <> -1 Then
		Call DrawSimpleFilterRow(obLanguage("Common","kStudents",strFunctionalityType), "PoolFilter", Array("0", obLanguage("PoolStudents","kAccessible"), "-1", obLanguage("Common","kAll")), nPoolFilter, Null, "DoSubmit(GetForm('MainForm', this), '')")
	End If
End Sub

Sub DrawPseudoPoolButtons()
	If bPseudoPool Then
		Call SimpleButton("goPseudoPool(0);", obLanguage("PoolStudents","kInSystem"))
	Else
		If ((bIsAnyAdmin Or (nPageType = kPageType_SELECT)) And (Not bByDirecting)) Then
			If bIsOutOfSchoolPoolExists Then
				Call SimpleButton("goPseudoPool(1);", obLanguage("PoolStudents","kOutOfSystem"))
			End If
		End If
	End If
End Sub

Sub DrawButtons()
End Sub

Sub DrawPoolPrintButtons()
	If PERSON_DATA Then
		Call DrawPrintButtons()
	Else
		Call DrawPrintOnlyButton()
	End If
End Sub

Sub DrawLinkButtons()
	Call DrawPseudoPoolButtons()
	If (lngStudentCnt > 0) And (nPageType <> kPageType_SELECT) And (Not bByDirecting) Then
		Call DrawPoolPrintButtons()
	End If
	If bByDirecting Then
		Call ButtonDel("deleteInquery()", obLanguage("Common","kRemove"))
	End If
End Sub

Function WriteSpecialTags()
End Function

Sub onDrawPage()
	%>
	<form Name="MainForm" METHOD="POST" ACTION="<%=strScriptName%>" OnSubmit="return false" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("cp", "", "UID", "0", "BackPage", strBackPage, "SORT", lngSortOrder, "FT", "", "PseudoPool", IIf(bPseudoPool, 1, 0)))%>
		<%=WriteSpecialTags()%><%
		
		Call DrawButtonsFilters(bPseudoPool Or ((bIsAnyAdmin Or nPageType = kPageType_SELECT) And Not bByDirecting And bIsOutOfSchoolPoolExists) Or lngStudentCnt > 0, "MainForm")

		If bPseudoPool Then
			DrawInfo obLanguage("FilterUsers","kStudentsOutOfSystemComment"), True
		End If

		If bExit Then response.write "</form>" : Exit Sub

		If pageCount > 1 Then Call ShowPageList(pageCount,nCurrPage)
		
		Call DrawListTable()

		If pageCount > 1 Then Call ShowPageList(pageCount,nCurrPage)%>
	</form><%

	If nPageType <> kPageType_SELECT Then Call DrawExcelForm()
End Sub

Function GetSortHeader(strName, lngSortOrder, lngCurrSortOrder)
	If Not bIsDebug Then On Error Resume Next
	
	If lngSortOrder = lngCurrSortOrder Then
		lngSortOrder = lngSortOrder + 1
	End If

	GetSortHeader ="<nobr>" & ShowAnchor("changeSortOrder(" & lngSortOrder &");", obLanguage("Common","kChangeSortOrder"), strName, "") & "</nobr>"
End Function

Function DrawUsersFiltersBody_Special
	DrawUsersFiltersBody_Special = True
End Function


'***************************************************************************************
' Pool Filters ...

Sub ReadViewType
	If IsEmpty(Request("ViewType")) Then
		' #21872
		nViewType = GetSafeLng(obTokenMgr.GetData(strToken,"ViewType"), 1)
	Else
		nViewType = GetSafeLng(Request("ViewType"), 1)
	End If

	bPseudoPool = False
	If bIsOutOfSchoolPoolExists Then
		If nPageType <> kPageType_SCHOOL Then
			bPseudoPool = (GetSafeLng(Request("PseudoPool"), GetSafeLng(obTokenMgr.GetData(strToken, stPseudoPool), 0)) = 1)
		End If
	End If

	If bPseudoPool Then
		Set objPoolCategories = objNSNET.GetPoolCategories("1, 1000")
		If objPoolCategories.EOF Then
			GenerateError obLanguage("Import","kCantGetPoolCategories")
		End If

		nPoolCategoryID = GetSafeLng(Request("PoolCategory"), GetSafeLng(obTokenMgr.GetData(strToken, stPoolCategory), 2))
		If nPoolCategoryID = -1 Or nPoolCategoryID = 1 Then ' Здесь 1 недопустима
			nPoolCategoryID = 2
		End If

		Call obTokenMgr.SetData(strToken, stPoolCategory, nPoolCategoryID)
	Else
		nPoolCategoryID = 1
	End If

	Call obTokenMgr.SetData(strToken, stPseudoPool, IIf(bPseudoPool, 1, 0))
	Call obTokenMgr.SetData(strToken,"ViewType", nViewType)
End Sub

Sub ReadPoolFilter
	If nViewType = -1 Or nPageType = kPageType_SELECT Then ' Архив или Выбор в приказ для зачисления в школу из пула
		nPoolFilter = 0 ' Pool
	Else
		If IsEmpty( Request("PoolFilter") ) Then
			nPoolFilter = GetSafeLng(obTokenMgr.GetData(strToken, stPoolFilter), 0)
		Else
			nPoolFilter = GetSafeLng(Request("PoolFilter"), 0)
		End If
	End If

	If CLng(strFunctionalityType) = kFuncType_Add Then nPoolFilter = -1
	bAll = (nPoolFilter = -1)
	Call obTokenMgr.SetData(strToken, stPoolFilter, nPoolFilter)
End Sub

Sub InitFunctionTypes
	InitFunctionTypesCommon
End Sub

Sub InitFunctionTypesCommon
	Set rsFuncTypes = objNSNET.GetFuctionalityTypes(kFuncType_Add)
	If IsDull(Request("FUNCTYPE")) Then
		strFuncTypeID = GetSafeID(obTokenMgr.GetData(strToken, stFunctionType), kFuncType_Common)
	Else
		strFuncTypeID = GetSafeID(Request("FUNCTYPE"), kFuncType_Common)
	End If
End Sub

Sub InitPoolSchools
	If bAll Then
		Set rsPoolSchools = objNSNET.GetDepartSchools(nViewType, strFuncTypeID, nPoolEMID)
	Else
		Set rsPoolSchools = objNSNET.GetPoolSchools(nViewType, strFuncTypeID, nPoolEMID)
	End If

	If rsPoolSchools.EOF Then strPoolSchoolID = "0" :Exit Sub

	If IsDull(Request("POOLSCHOOL")) Then
		strPoolSchoolID = GetSafeID(obTokenMgr.GetData(strToken, stPoolSchool), "-1")
	Else
		strPoolSchoolID = GetSafeID(Request("POOLSCHOOL"), "-1")
	End If

	If bAll Then
		strPoolSchoolID = objNSNET.GetSafeDepartSchool(nViewType, strPoolSchoolID, strFuncTypeID, nPoolEMID)
	Else
		strPoolSchoolID = objNSNET.GetSafePoolSchool(nViewType, strPoolSchoolID, strFuncTypeID, nPoolEMID)
	End If

	If strPoolSchoolID = "0" Then strPoolSchoolID = GetSafeID(rsPoolSchools("EOID"), NULL)
End Sub

Sub InitPoolYears
	If bAll Then
		Set rsPoolYears = objNSNET.GetDepartYears(nViewType, strPoolSchoolID, strFuncTypeID, nPoolEMID)
	Else
		' Для bAll = True ограничение по nGYMaxID не нужно, ограничение нужно только при зачислении в школы из пула
		Set rsPoolYears = objNSNET.GetPoolYears(nViewType, strPoolSchoolID, strFuncTypeID, nGYMaxID, nPoolEMID)
	End If

	If rsPoolYears.EOF Then strPoolYearID = "0" :Exit Sub

	If IsDull(Request("POOLYEAR")) Then
		strPoolYearID = GetSafeID(obTokenMgr.GetData(strToken, stPoolYear), "-1")
	Else
		strPoolYearID = GetSafeID(Request("POOLYEAR"), "-1")
	End If

	If bAll Then
		strPoolYearID = objNSNET.GetSafeDepartYear(nViewType, strPoolSchoolID, strPoolYearID, strFuncTypeID, nPoolEMID)
	Else
		strPoolYearID = objNSNET.GetSafePoolYear(nViewType, strPoolSchoolID, strPoolYearID, strFuncTypeID, nGYMaxID, nPoolEMID)
	End If

	If strPoolYearID = "0" Then strPoolYearID = GetSafeID( rsPoolYears("GLOBALYEARID"), NULL )
End Sub

Sub InitPoolGrades
	Dim arr, i, nCurGrade, objForm

	If bAll Then
		Set rsPoolGrades = objNSNET.GetDepartGrades(nViewType, strPoolSchoolID, strPoolYearID, strFuncTypeID, nPoolEMID)
	Else
		Set rsPoolGrades = objNSNET.GetPoolGrades(nViewType, strPoolSchoolID, strPoolYearID, strFuncTypeID, nGYMaxID, nPoolEMID)
	End If

	If rsPoolGrades.EOF Then strPoolGrade = "0" :Exit Sub

	strPoolGrade = Request("FUTUREGRADE")
	If IsDull(strPoolGrade) Then
		If IsObject(obTokenMgr.GetData(strToken, "QA_dct")) Then
			Set objForm = obTokenMgr.GetData(strToken, "QA_dct")
			strPoolGrade = objForm("FUTUREGRADE")
			If objForm("DOCSUBTYPE") = kmdstNoClassEnroll Then strPoolGrade = -strPoolGrade

			If isDull(strPoolGrade) Then
				If Not isDull(objForm("CLASSID")) Then
					strPoolGrade= objNSNET.GetClassInfo(objForm("CLASSID"))("GRADE")
				Else
					strPoolGrade= "-1"
				End If
			Else
				strPoolGrade = GetSafeID(strPoolGrade, "-1")
			End if
		Else
			strPoolGrade = GetSafeID(obTokenMgr.GetData(strToken, stPoolGrade), "-1")
		End if
	Else
		strPoolGrade = GetSafeID(strPoolGrade, "-1")
	End If

	If bAll Then
		strPoolGrade = objNSNET.GetSafeDepartGrade(nViewType, strPoolSchoolID, strPoolYearID, strPoolGrade, strFuncTypeID, nPoolEMID)
	Else
		strPoolGrade = objNSNET.GetSafePoolGrade(nViewType, strPoolSchoolID, strPoolYearID, strPoolGrade, strFuncTypeID, nGYMaxID, nPoolEMID)
	End If

	If bAll Then
		If CStr(rsPoolGrades("GRADE")) = "-1" Then
			rsPoolGrades.MoveNext

			If rsPoolGrades.EOF Then
				strPoolGrade = "-1"
				Exit Sub
			End If
		End If
	End If

	' #17124
	'If strPoolGrade = "0" Then strPoolGrade = GetSafeID(rsPoolGrades("GRADE"), NULL)
	If strPoolGrade = "0" Then strPoolGrade = GetSafeID(rsPoolGrades("GRADE"), 0)

	arrPoolGrades = rsPoolGrades.GetRows(,,Array("GRADE", "GRADE"))
	If CLng(strFuncTypeID) = kFuncType_PreSchool Then
		arr = GetArrGrades(strFuncTypeID,1,0,0)
		For i = 0 To Ubound(arrPoolGrades, 2)

			' #17124
			'nCurGrade = CLng(arrPoolGrades(0, i))
			nCurGrade = GetSafeLng(arrPoolGrades(0, i), 0)

			If nCurGrade >= 0 And nCurGrade <= 8 Then
				arrPoolGrades(1, i) = arr(1, nCurGrade)
			End If
		Next
	End If
End Sub

Sub InitDepartReasons
	Set rsDepartReasons = objNSNET.GetDepartReasonList(strFunctionalityType, -1)

	If IsDull(Request("DEPREASON")) Then
		strDepReasonID = GetSafeID(obTokenMgr.GetData(strToken, stDepartReason), "-1")
	Else
		strDepReasonID = GetSafeID(Request("DEPREASON"), "-1")
	End If
End Sub

Sub InitInaccessReasons
	If nViewType > 0 Then
		nInaccReason = 0

		Exit Sub
	End If

	arrInaccReasons = convert1Dto2D(_
	Array(_
		0,obLanguage("Common","kAll"), -1, obLanguage("PoolStudents","kUndefined"),_
		NotAvailableReasons_Worked, obLanguage("PoolStudents","kWorked"),_
		NotAvailableReasons_Learned, obLanguage("PoolStudents","kLearned"),_
		NotAvailableReasons_LearnedPOO, obLanguage("PoolStudents","kLearnedPOO"),_
		NotAvailableReasons_Leaved, obLanguage("PoolStudents","kLeaved"),_
		NotAvailableReasons_Gone, obLanguage("PoolStudents","kGone"),_
		NotAvailableReasons_DuplicateSgo, obLanguage("PoolStudents","kDuplicateSGO")_
	))
	
	nInaccReason = CLng(GetSafe("INACCREASON", 0))
	If nInaccReason < -1 Or nInaccReason > Ubound(arrInaccReasons,2) Then
		nInaccReason = 0
	End If
End Sub

Sub WriteFunctionType
	Call obTokenMgr.SetData(strToken, stFunctionType, strFuncTypeID)
End Sub

Sub WritePoolSchool
	Call obTokenMgr.SetData(strToken, stPoolSchool, strPoolSchoolID)
End Sub

Sub WritePoolYear
	Call obTokenMgr.SetData(strToken, stPoolYear, strPoolYearID)
End Sub

Sub WritePoolGrade
	Call obTokenMgr.SetData(strToken, stPoolGrade, strPoolGrade)
End Sub

Sub WriteDepartReason
	Call obTokenMgr.SetData(strToken, stDepartReason, strDepReasonID)
End Sub

Sub WriteInaccessReason
	Call obTokenMgr.SetData(strToken, stInaccessReason, nInaccReason)
End Sub

Sub DrawFuncTypes(strForm)
	DrawFilterRow StrForm, obLanguage("Common","kEOType"), "FUNCTYPE", rsFuncTypes, "FUNCTIONALITYTYPEID", "NAME", strFuncTypeID, False
End Sub

Sub DrawPoolSchools(strForm)
	If rsPoolSchools.EOF Then
		Call DrawInfo(obLanguage("PoolStudents","kNoPoolStudents"), False)
		bExit = True

		Exit Sub
	End If
	DrawFilterRow StrForm, obLanguage("PoolStudents","kPoolSchool"), "POOLSCHOOL", rsPoolSchools, "EOID", "SCHOOLNAME", strPoolSchoolID, True
End Sub

Sub DrawPoolYears(strForm)
	If rsPoolYears.EOF Then
		Call DrawInfo(obLanguage("PoolStudents","kNoPoolStudents"), False)
		bExit = True

		Exit Sub
	End If

	DrawFilterRow StrForm, obLanguage("PoolStudents","kPoolYear"), "POOLYEAR", rsPoolYears, "GLOBALYEARID", "SCHOOLYEARNAME", strPoolYearID, True
End Sub

Sub DrawPoolGrades(strForm)
	If bAll And strPoolGrade = "-1" And Not IsArray(arrPoolGrades) Then
		Call DrawReadonlyRow(obLanguage("PoolStudents","kPoolGrades",strFunctionalityType), obLanguage("Common","kAll"))

		Exit Sub
	End If

	If Not IsArray(arrPoolGrades) Then
		Call DrawInfo(obLanguage("PoolStudents","kNoPoolStudents"), False)
		bExit = True

		Exit Sub
	End If

	DrawFilterRow StrForm, obLanguage("PoolStudents","kPoolGrades",strFunctionalityType), "FUTUREGRADE", arrPoolGrades, "", "", strPoolGrade, True
End Sub

Sub DrawDepartReasons(strForm)
	DrawFilterRow StrForm, obLanguage("PoolStudents","kPoolReason"), "DEPREASON", rsDepartReasons, "ITEMID", "ITEMNAME", strDepReasonID, True
End Sub

Sub DrawInaccessReasons(strForm)
	DrawFilterRow StrForm, obLanguage("PoolStudents","kInaccessibilityReason"), "INACCREASON", arrInaccReasons, "", "", nInaccReason, False
End Sub

Function GetPreClassName(strClasses)
	Dim i

	GetPreClassName = strClasses

	'Следующая проверка определяет пришла в strClasses параллель(Значит НЕЗачисленные) или имя класса(Тогда оставляем его)
	'т.к. в садиках не может быть группы с название которое не конвертися в число
	If GetSafeLng(strClasses,-1) = -1 Then Exit Function

	If CLng(strFuncTypeID) = kFuncType_PreSchool Then
		For i = 0 to Ubound(arrPoolGrades,2)
			If arrPoolGrades(0,i) = Clng(strClasses) Then
				strClasses = arrPoolGrades(1,i)

				Exit For
			End If
		Next
	End If

	GetPreClassName = strClasses
End Function%>