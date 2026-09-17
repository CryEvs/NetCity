<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE FILE="CommonMoveBookEdit_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->


<% ' © 2007-2015 IRTech. All rights reserved.

Sub InitMoveDirections()
	Dim nFutureYearID, objClassInfo

	bWithMoveInDirection = (nDocType = kDocType_ENROLL)
	bWithMoveOutDirection = (nDocType = kDocType_OUT)

	If nDocSubType = kmdstNoClassEnroll Then 
		obTokenMgr.SetData strToken, stCurrClass, Null
		Exit Sub
	End If

	If bIsSummerMove And (nDocType = kDocType_ENROLL) Then
		Call InitMoveDocClasses(nYearID, nDocType, nDocSubType, bAddSchool)
	Else
		Call InitYearClasses()
	End If

	If objClassesRs.EOF Then 
		bNoMoveDirection = True
	End If
	If nDocType = kDocType_ENROLL Then 
		Set objClassesRsMoveTo = objClassesRs
	End If
End Sub

Sub SpecialReadState(objForm)
	Dim dtToday
	Dim objSourceInfo, bValidSource

	If bRestoreParams Then
		'todo. реализовать предварительый выбор
		Select Case nDocType
		Case kDocType_ENROLL, kDocType_OUT
			strSourceId = GetSafeStr(objForm("ENROLLFROM"), -1, IIf(bAddSchool, kEnrollSource_SchoolStudents, kEnrollSource_QuickAdd))
		End Select
	Else
		If nDocType = kDocType_ENROLL Then

			If GetSafeStr(objForm("ENROLLFROM"), -1, "") <> "" Then
				strSourceId = GetSafeStr(Request("ENROLLFROM"), -1, IIf(bAddSchool, kEnrollSource_SchoolStudents, kEnrollSource_QuickAdd))
			ElseIf IsObject(obTokenMgr.GetData(strToken, stMoveDocState)) Then
				strSourceId = GetSafeStr(obTokenMgr.GetData(strToken, stMoveDocState)("ENROLLFROM"), -1, IIf(bAddSchool, kEnrollSource_SchoolStudents, kEnrollSource_QuickAdd))
			Else
				strSourceId = IIf(bAddSchool, kEnrollSource_SchoolStudents, kEnrollSource_QuickAdd)
			End If

		End If
	End If

	bValidSource = False
	' дополнительная валидация источника
	For Each objSourceInfo in arrMovementSources
		if objSourceInfo.Id = strSourceId Then bValidSource = True: Exit For
	Next

	If Not bValidSource Then strSourceId = IIf(bAddSchool, kEnrollSource_SchoolStudents, kEnrollSource_QuickAdd)

	' 2010_09_01. Теперь надо запретить "быстрый ввод" не только в садиках, но и в школах.
	' Поэтому используем настройку BlockFastInput, определяющую, разрещён ли "быстрый ввод" или нет.
	If obContext.ServerSettings.UserAccountsSettings.BlockFastInput And bNewDoc And strSourceId = kEnrollSource_QuickAdd Then
		strSourceId = kEnrollSource_Pool 'kEnrollBy_ExtImport
	End If
End Sub

Sub DrawExtraHeaders(outNColNum)
	Dim bWithEditColumn

	bWithEditColumn = Not readonly And nDocType <> kDocType_MOVE

	If bAddSchool Then
		Select Case nDocType
		Case kDocType_OUT
			%><th style="width: 50%"><%=obLanguage("Movement","kDepartReason")%></th><%
		Case kDocType_ENROLL
			%><th style="width: 50%"><%=obLanguage("Common","kArriveFrom")%></th><%
			bWithEditColumn = False
		End Select
		outNColNum = outNColNum	+ 1
	Else
		Select Case nDocType
		Case kDocType_OUT
			%><th style="width: 50%"><%=obLanguage("Movement","kDepartTo")%></th><th><%=obLanguage("Movement","kDepartReason")%></th><%
		Case kDocType_ENROLL
			%><th style="width: 50%"><%=obLanguage("Common","kArriveFrom")%></th><th><%=obLanguage("Common","kInstitutSpecifedInDocOfDisposal")%></th><%
		End Select
		outNColNum = outNColNum	+ 2
	End If

	If bWithEditColumn Then
		Call DrawEditColumnHeader()
		outNColNum = outNColNum + 1
	End If
End Sub

Sub DrawStudentsExtraInfo(nStudentId, objDocStudents)

	Dim strPassDate, bHasTransferDocStay
	Dim nEnrollType

	Select Case nDocType
		Case kDocType_OUT
			If Not bAddSchool Then
				Call DrawMovEOS(objDocStudents("EOID"), objDocStudents("OUTSIDETYPE"), objDocStudents("OUTSIDETYPENAME"), readonly)
			End If

			Call DrawReason(GetSafeID(objDocStudents("REASON"), "-1"))

			If Not readonly Then 
				Call DrawEditColumnCell(nStudentId)
			End If
		Case kDocType_ENROLL
			nEnrollType = GetSafeLng(objDocStudents("ENROLLTYPE"), 0)

			If nEnrollType = kEnrollFrom_WithoutClass Then
				%><td>&nbsp;</td><td>&nbsp;</td><%
				If Not readonly Then 
					%><td>&nbsp;</td><%
				End If
			Else
				Call DrawMovEOS(objDocStudents("EOID"), objDocStudents("OUTSIDETYPE"), objDocStudents("OUTSIDETYPENAME"), IIf(bAddSchool, true, readonly))
							
				If Not bAddSchool Then
					Call DrawDepartEO(objDocStudents("DEPARTEONAME"), nStudentId, IIf(bAddSchool, true, readonly))
					If Not readonly Then 
						Call DrawEditColumnCell(nStudentId)
					End If
				End If

			End If
	End Select
End Sub

Sub DrawMoveWarnings()
%>
	<div class="row">
		<div class="col-md-8">
			<%
			If (nDocType = kDocType_ENROLL) And (nDocSubType = kmdstNoClassEnroll) Then
				Call DrawMessage("«Прикреплённые к ОО» нужны для учёта детей, не посещающих ОО (например, дети на домашнем обучении).", "warning", True)%>

				<div class="alert alert-warning" role="alert" >
					<button type="button" class="close" data-dismiss="alert">×</button>
					Внимание! «Прикреплённые» учащиеся не видны в списках классов и не учитываются в отчётах об успеваемости и посещаемости. См. подробности <a href="/Help/AttachedStudents.htm" target="_blank">во встроенной "Справке" системы</a>.
				</div><%
			End If
			%>
		</div>
	</div>
<%
End Sub

Sub WriteSpecialHiddenTags
	Response.Write WriteHiddenTags(Array("FutureMode", "0"))
End Sub

Sub OnDrawScripts()
	Call DrawOutSideTypesScript(strSchoolId)
	Call InitMoveEOs_Js(nDocType, strSchoolId, strFunctionalityType, -1)

	%>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/select2.full.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/select2/js/i18n/ru.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script>
	<script src="<%=GetVersionedResLink("/vendor/pages/js/import.js")%>" type="text/javascript"></script>
	<%

	If nDocType = kDocType_ENROLL Then
		%>
		<script type="text/javascript">
			function setEOEqualDepartEO() {
				control.eoid($('input[type=hidden][id^=DEPARTEOID]', $('#NS_MOVDOC_EDITING_ROW')).val());
				dataChanged();
			}
		</script>
		<%
	End If
	If nDocType = kDocType_OUT Then Call DrawPlaceReasonRelScripts()
End Sub
%>