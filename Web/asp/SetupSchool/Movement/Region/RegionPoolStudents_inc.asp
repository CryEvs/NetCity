<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersUsers.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/populate.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strPoolSchoolID, rsPoolSchools, strPoolYearID, rsPoolYears, strPoolGrade, rsPoolGrades, arrPoolGrades
Dim objStudentList, strSaved
Dim lngStudentCnt

Dim nPageType, nViewType' kOut/kGraduation
Dim rsFuncTypes, strFuncTypeID
Dim rsDepartReasons, strDepReasonID
Dim arrInaccReasons, nInaccReason
Dim nPoolFilter, strEOIDTO
Dim strClassID, nClassTypeID, nAgeMin, nAgeMax, strClassName
Dim nGYMaxID ' ограничение года видимости

Dim objRegionPoolComp
Dim strPoolProvinceID, arrPoolProvinces, bNoProvinces
Dim strPoolCityID, arrPoolCities, bNoCities
Dim arrPoolSchools, bNoSchools
Dim dtYearStart, nYearStart
Dim arrPoolYears, bNoYears

Sub ReadState()
	On Error Resume Next
	Dim objSYInfo

	SetScriptTimeOut 900

	Set objRegionPoolComp = obComponentMgr.Resolve("NetCity.WebServices.RegionServices.Contracts.IRegionPool")
	TestError_RegionServer obLanguage("PoolStudents","kCantCreateRegionPoolComponent")
	If objRegionPoolComp Is Nothing Then
		Call GenerateHTMLError( obLanguage("PoolStudents","kCantCreateRegionPoolComponent"), "/asp/SetupSchool/Movement/MoveBook.asp", strToken )
	End If

	Set objSYInfo = objNSNET.GetYearInfo(strCurrYearID)
	If objSYInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")
	End If
	dtYearStart = objSYInfo("STARTDATE")
	nYearStart = Year(dtYearStart)

	Call ReadStateSpecial()
	Call ReadFilter()

	nCurrPage = 0
	nPageSize = kDefaultUsersPageSize
	lngSortOrder = 0
End Sub

Sub ReadStateSpecial()
End Sub

Sub ReadFilter()

	ReadViewType

	InitFunctionTypes

	InitRegionProvinces
	If bExit Then Exit Sub

	InitRegionCities
	If bExit Then Exit Sub

	InitRegionSchools
	If bExit Then Exit Sub

	InitRegionYears
	If bExit Then Exit Sub

	InitPoolGrades
	InitDepartReasons

	strFirstLetter = GetSafeStr(Request("FL"),1,GetSafeStr(obTokenMgr.GetData(strToken,stUsersStudentsFirstLetter),1,obLanguage("Common","kFirstLetter")))
	strLastLetter = GetSafeStr(Request("LL"),1,GetSafeStr(obTokenMgr.GetData(strToken,stUsersStudentsLastLetter),1,obLanguage("Common","kLastLetter")))
	If strLastLetter<>" " Then
		If obLanguage.Compare(strFirstLetter,strLastLetter, obContext.ServerSettings.LocalSettings.DefaultLanguage) > 0 Then strLastLetter = strFirstLetter
	End If

	strGender = GetSafeStr(Request("GN"), 1, GetSafeStr( obTokenMgr.GetData( strToken, stUsersStudentsGender ), 1,"" ) )
	If strGender = "A" Then strGender=""
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stFunctionType, strFuncTypeID)
	Call obTokenMgr.SetData(strToken, stEMProvinceID, strPoolProvinceID)
	Call obTokenMgr.SetData(strToken, stEMCityID, strPoolCityID)
	Call obTokenMgr.SetData(strToken, stPoolSchool, strPoolSchoolID)
	Call obTokenMgr.SetData(strToken, stPoolYear, strPoolYearID)
	Call obTokenMgr.SetData(strToken, stPoolGrade, strPoolGrade)
	Call obTokenMgr.SetData(strToken, stDepartReason, strDepReasonID)

	Call obTokenMgr.SetData(strToken,stUsersStudentsFirstLetter, strFirstLetter)
	Call obTokenMgr.SetData(strToken,stUsersStudentsLastLetter, strLastLetter)
	Call obTokenMgr.SetData(strToken,stUsersStudentsGender, strGender)

	Call WriteStateSpecial()
End Sub

Sub Main()
	On Error Resume Next

	pageCount = 1 ' Иначе не будет постраничной разбивки
	strEOIDTO = "0"

	If bExit Then Exit Sub

	Set objStudentList = objRegionPoolComp.GetPoolStudentsListCOM(nViewType, strPoolSchoolID, strPoolYearID, strPoolGrade, "", strFirstLetter, strLastLetter, strGender)
	TestError_RegionServer obLanguage("PoolStudents","kCantGetRegionPoolStudents")

	lngStudentCnt = objStudentList.Count
End Sub

Function onLoad()
	If Not IsDull( strSaved ) Then onLoad = "JavaScript:WasSaved('" & strSaved & "');" Else onLoad = ""
End Function

Sub onHeadSpecial()
End Sub

Sub DrawListTable()
	Dim CurName, i, nStudID, strClasses
	Dim nStartNum
	Dim strDepartPlace
	Dim strBGColor, nPoolClassTypeID, bSuitableForEnroll
	Dim objStudent

	If lngStudentCnt = 0 Then 
		Call DrawInfo(obLanguage("PoolStudents","kNoPoolStudentsForThisCategory"), False)
		Exit Sub
	End If%>

	<table class="table table-bordered table-condensed">
		<tr nowrap>
			<th width="30px">&nbsp;</th>
			<th><%=obLanguage("Filter","kN_PP")%></th>
			<th><%=obLanguage("Filter","kFIO")%></th>
			<th><%=obLanguage("Common","kBDate")%></th>
			<th><%=obLanguage("PoolStudents","kPoolSchool")%></th>
			<th><%=obLanguage("PoolStudents","kPoolReason")%></th>
			<th><%=obLanguage("PoolStudents","kPoolDepartPlace")%></th>
			<th><%=obLanguage("PoolStudents","kPoolYear")%></th>
			<th><%=obLanguage("PoolStudents","kPoolData")%></th>
			<th><%=obLanguage("PoolStudents","kPoolGrades2",strFunctionalityType)%></th>
		</tr><%

		nStartNum = nCurrPage * nPageSize
		i = 1
		Dim rsMSL, rwSpan, strRwSpan

		For Each objStudent In objStudentList
			bSuitableForEnroll = True
			nStudID = Clng(objStudent.PersonId)
			strBGColor = ""
		
			CurName = DB2HTML(objStudent.LastName) & " " & DB2HTML(objStudent.FirstName) & " " & DB2HTML(objStudent.MiddleName)%>
			<tr <%=strBGColor%> align="center"><%
				Call DrawPoolStudentsCheckBox(nStudID)%>
				<td align="right"><%=nStartNum + i%>&nbsp;</td><td align="left" nowrap><%
					Response.Write CurName%>
				</td>
				<td><%=Date2Str(objStudent.Birthdate)%></td>
				<td><%=DB2HTML(objStudent.FromSchool)%></td>
				<td><%=IIF(IsDull(objStudent.OutReason), obLanguage("PoolStudents","kGraduated_"), DB2HTML(objStudent.OutReason) )%></td>

				<td><%=DB2HTML(objStudent.OutPlace)%></td>
				<td width="1%"><%=DB2HTML(objStudent.OutYear)%></td>
				<td width="1%"><%=Date2Str(objStudent.OutDate)%></td>
				<td width="1%" nowrap><%=DB2HTML(objStudent.OutClass)%></td>
			</tr><%

			i = i + 1
		Next%>
	</table><%
	Call DrawLegend()
End Sub

Sub DrawLegend()
End Sub

Function IsSelectedStudent(strStudentID)
	IsSelectedStudent = False
End Function

Sub DrawPoolStudentsCheckBox(strStudentID)%>
	<TD>
		<INPUT TYPE="CHECKBOX" NAME="Students" VALUE="<%=strStudentID%>">
	</TD><%
End Sub


Sub onHead()%>
	<script charset="windows-1251">
		function changeView() {
			DoSubmit(document.MainForm, "");
		}

		function OnChangeSelect(fName, action) {
			DoSubmit(GetForm(fName, this),action)
		}
	</script><%

	Call onHeadSpecial()
	Call DrawUsersFiltersHeader()
End Sub


Sub DrawFilters(strForm)
	Call DrawFiltersSpecial(strForm)

	Call DrawFuncTypes(strForm)

	Call DrawPoolProvinces(strForm) : If bExit Then Exit Sub
	Call DrawPoolCities(strForm) : If bExit Then Exit Sub
	Call DrawPoolSchools(strForm) : If bExit Then Exit Sub

	Call DrawPoolYears(strForm) : If bExit Then Exit Sub
	Call DrawPoolGrades(strForm)
	Call DrawDepartReasons(strForm)

	Call DrawUsersFiltersBody(True, False)
End Sub

Sub DrawFiltersSpecial(strForm)
End Sub

Function WriteSpecialTags()
End Function

Sub onDrawPage()%>
	<FORM Name="MainForm" METHOD="POST" ACTION="<%=strScriptName%>">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("cp", "", "UID", "0", "BackPage", strBackPage, "SORT", lngSortOrder, "FT", ""))%>
		<%=WriteSpecialTags()%>

		<%Call DrawButtonsFilters(lngStudentCnt <> 0, "MainForm")
		If bExit Then response.write "</FORM>" : Exit Sub%>

		<div class="row">
			<div class="col-md-12">
				<%Call DrawListTable()%>
			</div>
		</div>
	</FORM><%
End Sub

Function DrawUsersFiltersBody_Special
	DrawUsersFiltersBody_Special = True
End Function

'***************************************************************************************
' Pool Filters ...

Sub ReadViewType
	nViewType = GetSafeLng(Request("ViewType"), GetSafeLng(obTokenMgr.GetData(strToken,"ViewType"), 1))
	Call obTokenMgr.SetData(strToken,"ViewType", nViewType)
End Sub

Sub InitFunctionTypes
	If strFuncTypeID = CStr(kFuncType_PreSchool) Then
		Set rsFuncTypes = objNSNET.GetFuctionalityType(kFuncType_PreSchool)
		If rsFuncTypes.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
		strFuncTypeID = GetSafeID(rsFuncTypes("FUNCTIONALITYTYPEID"), Null)
	Else
		InitFunctionTypesCommon
	End If
End Sub

Sub InitFunctionTypesCommon
	Set rsFuncTypes = objNSNET.GetFuctionalityTypes(kFuncType_Add)

	If IsDull(Request("FUNCTYPE")) Then
		strFuncTypeID = GetSafeID(obTokenMgr.GetData(strToken, stFunctionType), kFuncType_Common)
	Else
		strFuncTypeID = GetSafeID(Request("FUNCTYPE"), kFuncType_Common)
	End If
End Sub

Sub InitRegionProvinces
	Dim objPoolProvinces

	On Error Resume Next

	strPoolProvinceID = "-1"
	bExit = True

	strPoolProvinceID = GetSafeID(Request("ProvID"), GetSafeID(obTokenMgr.GetData(strToken, stEMProvinceID), "-1"))
	Set objPoolProvinces = objRegionPoolComp.GetPoolProvincesListCOM()
	TestError_RegionServer obLanguage("PoolStudents","kCantGetRegionProvinces")

	bNoProvinces = (objPoolProvinces.Count = 0)
	If bNoProvinces Then
		strPoolProvinceID = "-1"
	Else
		arrPoolProvinces = objPoolProvinces.ToArray()
	End If

	If strPoolProvinceID <> "-1" Then
		strPoolProvinceID = GetSafeIDForCOMFilter(strPoolProvinceID, objPoolProvinces)
	End If
	bExit = False
End Sub

Sub InitRegionCities
	Dim objPoolCities

	On Error Resume Next

	strPoolCityID = "0"
	bExit = True

	strPoolCityID = GetSafeID(Request("CityID"), GetSafeID(obTokenMgr.GetData(strToken, stEMCityID), "0"))
	If strPoolProvinceID = "-1" Then
		Set objPoolCities = objRegionPoolComp.GetPoolCitiesListCOM()
	Else
		Set objPoolCities = objRegionPoolComp.GetPoolProvinceCitiesListCOM(strPoolProvinceID)
	End If
	TestError_RegionServer obLanguage("PoolStudents","kCantGetRegionCities")

	bNoCities = (objPoolCities.Count = 0)
	If bNoCities Then
		Exit Sub
	End If
	arrPoolCities = objPoolCities.ToArray()

	strPoolCityID = GetSafeIDForCOMFilter(strPoolCityID, objPoolCities)
	bExit = False
End Sub

Function GetSafeIDForCOMFilter(strID, objCOMArray)
	Dim nID, objFilter

	nID = CLng(strID)
	If nID <> 0 Then
		For Each objFilter in objCOMArray
			If nID = CLng(objFilter.Id) Then
				GetSafeIDForCOMFilter = nID
				Exit Function
			End If
		Next
	End If
	GetSafeIDForCOMFilter = CLng(objCOMArray(0).Id)
End Function

Sub InitRegionSchools
	Dim objPoolSchools
	Dim nClientIDForSync

	On Error Resume Next

	nClientIDForSync = objNSNET.GetClientIdForSync()
	strPoolSchoolID = GetSafeID(Request("POOLSCHOOL"), GetSafeID(obTokenMgr.GetData(strToken, stPoolSchool), "0"))
	Set objPoolSchools = objRegionPoolComp.GetPoolSchoolsListCOM(strPoolCityID, strFuncTypeID, nClientIDForSync)
	TestError_RegionServer obLanguage("PoolStudents","kCantGetRegionSchools")

	bNoSchools = (objPoolSchools.Count = 0)
	If bNoSchools Then
		bExit = True
		Exit Sub
	End If
	arrPoolSchools = objPoolSchools.ToArray
	strPoolSchoolID = GetSafeIDForCOMFilter(strPoolSchoolID, objPoolSchools)
End Sub

Sub InitRegionYears
	Dim objPoolYears

	On Error Resume Next

	strPoolYearID = GetSafeID(Request("POOLYEAR"), GetSafeID(obTokenMgr.GetData(strToken, stPoolYear), "0"))
	Set objPoolYears = objRegionPoolComp.GetPoolYearsListCOM(strPoolSchoolID, nYearStart)
	TestError_RegionServer obLanguage("PoolStudents","kCantGetRegionYears")

	bNoYears = (objPoolYears.Count = 0)
	If bNoYears Then
		bExit = True
		Exit Sub
	End If

	arrPoolYears = objPoolYears.ToArray()
	strPoolYearID = GetSafeIDForCOMFilter(strPoolYearID, objPoolYears)
End Sub

Sub InitPoolGrades
	Dim objForm

	strPoolGrade = Request("FUTUREGRADE")
	If IsDull(strPoolGrade) Then
		If IsObject(obTokenMgr.GetData(strToken, "QA_dct")) Then
			Set objForm = obTokenMgr.GetData(strToken, "QA_dct")
			strPoolGrade = objForm("FUTUREGRADE")
			If objForm("DOCSUBTYPE") = kmdstNoClassEnroll Then strPoolGrade = -strPoolGrade

			IF isDull(strPoolGrade) Then
				If Not isDull(objForm("CLASSID")) Then
					strPoolGrade= objNSNET.GetClassInfo(objForm("CLASSID"))("GRADE")
				Else
					strPoolGrade= "1"
				End If
			Else
				strPoolGrade = GetSafeID(strPoolGrade, "1")
			End if
		Else
			strPoolGrade = GetSafeID(obTokenMgr.GetData(strToken, stPoolGrade), "1")
		End if
	Else
		strPoolGrade = GetSafeID(strPoolGrade, "1")
	End If

	arrPoolGrades = GetArrGrades(strFuncTypeID,1,0,0)
	strPoolGrade = GetSafeIDForArray(strPoolGrade, arrPoolGrades, 0, 1)
End Sub

Function GetSafeIDForArray(nID, arrCheck, nIDIndex, nIDDefault)
	Dim i

	For i = 0 To Ubound(arrCheck, 2)
		If CLng(nID) = CLng(arrCheck(nIDIndex, i)) Then
			GetSafeIDForArray = CLng(nID)
			Exit Function
		End If
	Next
	If Not IsDull(nIDDefault) Then
		GetSafeIDForArray = CLng(nIDDefault)
	Else
		GetSafeIDForArray = CLng(arrCheck(nIDIndex, 0))
	End If
End Function

Sub InitDepartReasons
	Set rsDepartReasons = objNSNET.GetDepartReasonList(strFunctionalityType, -1)
	If IsDull(Request("DEPREASON")) Then
		strDepReasonID = GetSafeID(obTokenMgr.GetData(strToken, stDepartReason), "-1")
	Else
		strDepReasonID = GetSafeID(Request("DEPREASON"), "-1")
	End If
End Sub

Sub DrawFuncTypes(strForm)
	DrawFilterRow StrForm, obLanguage("Common","kEOType"), "FUNCTYPE", rsFuncTypes, "FUNCTIONALITYTYPEID", "NAME", strFuncTypeID, False
End Sub

Sub DrawPoolProvinces(strForm)
	bExit = False
	If Not bNoProvinces Then
		Call DrawEnumFilterRow(strForm, obLanguage("Login","kLoginProvince"), "ProvID", arrPoolProvinces, strPoolProvinceID, obLanguage("Common","kAll"))
	End If
End Sub

Sub DrawPoolCities( strForm )
	bExit = False
	If bNoCities Then
		Call DrawInfo(obLanguage("PoolStudents","kNoPoolCities"), False)

		bExit = True
		Exit Sub
	End If
	Call DrawEnumFilterRow(strForm, obLanguage("Login","kLoginCity"), "CityID", arrPoolCities, strPoolCityID, Null)
End Sub

Sub DrawPoolSchools(strForm)
	bExit = False
	If bNoSchools Then
		Call DrawInfo(obLanguage("PoolStudents","kNoPoolSchools"), False)

		bExit = True
		Exit Sub
	End If
	Call DrawEnumFilterRow(strForm, obLanguage("PoolStudents","kPoolSchool"), "POOLSCHOOL", arrPoolSchools, strPoolSchoolID, Null)
End Sub

Sub DrawPoolYears(strForm)
	bExit = False
	If bNoYears Then
		Call DrawInfo(obLanguage("PoolStudents","kNoPoolYears"), False)

		bExit = True
		Exit Sub
	End If
	Call DrawEnumFilterRow(strForm, obLanguage("PoolStudents","kPoolYear"), "POOLYEAR", arrPoolYears, strPoolYearID, Null)
End Sub

Sub DrawPoolGrades(strForm)
	DrawFilterRow StrForm, obLanguage("PoolStudents","kPoolGrades",strFunctionalityType), "FUTUREGRADE", arrPoolGrades, "", "", strPoolGrade, False
End Sub

Sub DrawDepartReasons(strForm)
	DrawFilterRow StrForm, obLanguage("PoolStudents","kPoolReason"), "DEPREASON", rsDepartReasons, "ITEMID", "ITEMNAME", strDepReasonID, True
End Sub

Function GetPreClassName(strClasses)
	Dim i

	GetPreClassName = strClasses
'Следующая проверка определяет пришла в strClasses параллель(Значит НЕЗачисленные) или имя класса(Тогда оставляем его)
'т.к. в садиках не может быть группы с название которое не конвертися в число
	If GetSafeLng(strClasses,-1)=-1 Then Exit Function
	If CLng(strFuncTypeID) = kFuncType_PreSchool Then 
		For i = 0 to Ubound(arrPoolGrades,2)
			If arrPoolGrades(0,i) = Clng(strClasses) Then 
				strClasses = arrPoolGrades(1,i)
				exit For
			End If
		Next
	End If
	GetPreClassName = strClasses
End Function

Sub TestError_RegionServer( objErr )
	If Err <> 0 Then
		'If bIsDebug Then Call SetDetailedErrMessage(objErr)
		Call GenerateHTMLError( objErr & vbCrLf & obLanguage("PoolStudents","kRegionServerError"), "/asp/SetupSchool/Movement/MoveBook.asp", strToken )
	End If
End Sub%>