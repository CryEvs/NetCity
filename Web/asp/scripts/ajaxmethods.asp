<!-- #INCLUDE FILE=../headernoscreen_YearNo.asp -->
<%
	Session.CodePage = 65001
	Response.Charset = "utf-8"
	Dim strMethod, objRs, arr, result, objTeachersRs, objCSG, nTeacherOfSubjectId
	strMethod = GetSafeStr(Request("method"),-1,"")
	Set result = new JSONResult

	Select Case strMethod
		Case kGetCntWorkingUsersMTD:
			Call result.AddJsonData("currentWorkingUsers", onCurrentWorkingUsers())
			TestError obLanguage("Common","kErrCantGetCntWorkingUsers")
		Case kGetKLADRProvinces, kGetKLADRCities, kGetKLADRLocations
			Call TransferRequest("/asp/Administration/GetAjaxKLADRArea.asp")
		Case kGetClassSubjectGroups4Class
			Dim nClassID
			nClassID = GetSafeLng(Request("CLASSID"), Null)
			Set objRs = objNSNET.GetSubjectsListForClass(nClassID)
			Call obTokenMgr.SetData(strToken, stCurrClass, nClassID)

			If objRs.EOF Then
				Call WriteAjaxErrorResponse( -2, obLanguage("Filter","kNoCoursesGB") )
			End If
			Call result.AddJsonData("subjects", objRs.ToJSON(Array("id", "name"), Array("ID", "NAME")))
		Case kDelDayAttendance
			Call objNSNET.DelStudentClassMeetingAttendance( GetSafeLng(Request("STUDENTID"),0), GetSafeLng(Request("CLASSID"),0), GetSafeDate( Request("DAY"), NULL ) )
			TestError(obLanguage("Grade","kErrDeleteAttendance"))
		Case kGetEMSchoolsForEOType
			Dim nGYID
			nGYID = GetSafeLng(Request("GlobalYID"), Null)
			Set objRs = objNSNET.GetEMSchoolsForEOType(strEMID, kWizardSteps, kFuncType_PreSchool, nGYID)
			If objRs.EOF Then Call WriteAjaxErrorResponse( -2, "No Schools in this GlobalYearId" )
			Call result.AddJsonData("arr", objRs.ToJSON(Array("SCHOOLYEARID", "SCHOOLNAME")))
		Case kUpdatePoolStudentsLine
			Dim bByDirecting
			Dim arrReasons, strArchReason, nArchReason, objDetailsRs, strEditUserID, strSchool, strReason, nEOIDTO
			ReDim arrReasons(5)

			bByDirecting = (GetSafeLng(Request("ByDirecting"), 0) = 1)
			strEditUserID = GetSafeID( Request("UID"), Null)
			TestError obLanguage("PoolStudents","kJSLineUpdateError",strFunctionalityType)

			If bByDirecting Then
				Response.Write result
				Response.End
			End If

			arrReasons(0) = obLanguage("PoolStudents","kWorked")
			arrReasons(1) = obLanguage("PoolStudents","kLearned")
			arrReasons(2) = obLanguage("PoolStudents","kLearnedPOO")
			arrReasons(3) = obLanguage("PoolStudents","kLeaved")
			arrReasons(4) = obLanguage("PoolStudents","kGone")
			arrReasons(5) = obLanguage("PoolStudents","kDuplicateSGO")
			
			nArchReason = objNSNET.GetPoolStudent(strEditUserID, 0)
			Set objDetailsRs = objNSNET.GetPoolStudentDetails(strEditUserID, nArchReason <> 0)
			TestError obLanguage("PoolStudents","kJSLineUpdateError",strFunctionalityType)

			nEOIDTO = GetSafeLng(objDetailsRs("EOIDTO"), -1)

			If nEOIDTO = -1 Then 
				strSchool = ""
			Else
				strSchool = objNSNET.GetEOInfo(nEOIDTO)("EONAME")
			End If

			strSchool = DB2Java(strSchool) ' Ajax не понравилась табуляция, поэтому фильтруем через DB2Java
			strReason = objDetailsRs("ITEMNAME")
			If nArchReason <> 0 Then
				strArchReason = CStr(arrReasons(nArchReason-1))
			Else
				strArchReason = CStr(0)
			End If

			TestError obLanguage("PoolStudents","kJSLineUpdateError",strFunctionalityType)
			Call result.AddData("archReason", strArchReason)
			Call result.AddData("reason", strReason)
			Call result.AddData("school", strSchool)
		Case kCanDelSchool
			Dim bIsWorkInSchool, bIsCommonDataEnter
			Call objNSNET.CanDelSchool(GetSafeLng(Request("EditSchoolID"), Null), bIsWorkInSchool, bIsCommonDataEnter)
			TestError obLanguage("Common","kUnexpErr")
			Call result.AddData("isWorkInSchool", bIsWorkInSchool)
			Call result.AddData("isCommonDataEnter", bIsCommonDataEnter)
			If bIsWorkInSchool Then 
				result.Message = obLanguage("ServAdmin","kCantRemoveSchool_InUse")
			End If
		Case kHeavySessionIsPosible
			Dim component

			Set component = obComponentMgr.Resolve("NetCity.Components.Abstraction.IHeavySessionsComponent")
			Call result.AddData("isPosible", component.HeavySessionPosible)
		Case kRemoveToken
			Dim strRemoveToken
			If Not bIsAdminInterface Then GenerateError obLanguage("Common","kErrPageAccess")
			strRemoveToken = Request("token")
			Call obTokenMgr.RemoveToken(strRemoveToken)
			TestError obLanguage("Common","kUnexpErr")
	End Select

	Response.Write result
	Response.End

	Sub TransferRequest(page)
		Response.Clear
		Server.Transfer(page)
		Response.End
	End Sub
%>