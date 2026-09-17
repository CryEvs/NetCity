<% ' © 2007-2015 IRTech. All rights reserved.
Dim dtEndDate, dtStartDate
Dim strTeacherID, bOK, bAll, bNoStudents, bNoAssignments
Dim bRight_LAEditSelf
Dim bMayAddLAAssignment
Dim strCalendarTargetForm, strCalendarTargetAction

Function hasUserRightsOnPage()
	hasUserRightsOnPage = True
	bAll = False
	bRight_LAEditSelf = HasUserRight(arLAEditSelf)
	If HasUserRight(arLAViewAll) Then
		bAll = True
		Exit Function
	End If
	If HasUserRight(arLAViewSelf) Then Exit Function
	If bRight_LAEditSelf Then Exit Function
	hasUserRightsOnPage = False
End Function

Sub ReadState()
	Dim bIsClassChief
	Dim teachersId
	Dim teacherId
	Call ReadState_Special()

	bNoStudents = True
	bNoAssignments = True
	bOK = False
	strTeacherID = strUserID
	If bAll Then Call InitYearClasses_IUP() Else Call InitTeacherClasses_IUP(False)

	If objClasses_IUP_rs.EOF Then readonly = True : Exit Sub

	Call ParseIupClassId(strClassID_IUP, strClassId, strIupGrade, bIsIupGrade)
	If bIsIupGrade Then
		bIsClassChief = False
	Else
		bIsClassChief = objNSNET.IsClassChief(strClassID, strUserId)
	End If

	If bAll Or bIsClassChief Then
		Call InitSubjectGroups_IUP
	Else
		Call InitTeacherSubjectGroups_Ex_IUP(strTeacherID)
		If strSubjClassID <> "0" And Not readonly Then
			' limits editing rights for substitute only

			Set teachersId = objNSNET.GetSubjectGroupTeachers(strSubjClassID)
			readonly = True
			For Each teacherId in teachersId
				If CLng(strTeacherID) = teacherId Then readonly = False
			Next
		End If
	End If
	If strSubjClassID = "0" Then readonly = True : Exit Sub

	Call InitDateRange(dtMinDate, dtMaxDate, dtStartDate, dtEndDate)
	bOK = True
	' correct readonly
	If Not readonly Then
		If bRight_LAEditSelf Then
			If bAll Then ' equal arLAViewAll
				If Not bIsClassChief Then
					Set teachersId = objNSNET.GetSubjectGroupTeachers(strSubjClassID)
					readonly = True
					For Each teacherId in teachersId
						If CLng(strTeacherID) = teacherId Then readonly = False
					Next
				End If
			End If
		Else
			readonly = True
		End If
	End If
End Sub

Sub WriteState()
	Call WriteState_Special()

	WriteClass_IUP
	Call obTokenMgr.SetData(strToken,stCurrSubjClass, strSubjClassID)
	Call obTokenMgr.SetData(strToken,"QA_dct", Null )
	Call obTokenMgr.SetData(strToken, stEditAss_RO, readonly)

	Call WriteDateRange(dtStartDate, dtEndDate)
End Sub

Sub Main
	If Not bOK Then Exit Sub
	Call Main_Before()
	'bOK = Not bNoStudents
End Sub

Function OnUnload()
	If bOK Then OnUnload = "closeDate()"
End Function

Sub onHead()
	If bOK Then Call scriptCalendar(strCalendarTargetForm, dtMinDate, dtMaxDate)%>
	<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/common/css/popover.css")%>">
<script>
<!--
<%If bOK Then%>
function closeDate() {
	var form = document.forms['<%=strCalendarTargetForm%>'];
	if (form.elements['ADT']) {
		form.elements['ADT'].value = '';
		form.elements['DDT'].value = '';
	}
}

function CheckAndSubmit() {
	var form = document.forms['<%=strCalendarTargetForm%>'];
	var startDate = str2date( form.ADT.value );
	if( startDate == null ) {
		alert(language.Generic.Common.kErrInvalidStartDate );
		form.ADT.value = '<%=Date2Java(dtStartDate)%>';
		return false;
	}
	var endDate = str2date( form.DDT.value );
	if( endDate == null ) {
		alert(language.Generic.Common.kErrInvalidEndDate );
		form.DDT.value = '<%=Date2Java(dtEndDate)%>';
		return false;
	}
	if( startDate > endDate ) {
		alert(language.Generic.Common.kMsgStartBeforeEnd );
		form.ADT.value = '<%=Date2Java(dtStartDate)%>';
		form.DDT.value = '<%=Date2Java(dtEndDate)%>';
		return false;
	}
	form.action = '<%=strCalendarTargetAction%>';
	DoSubmit(form, "");
}
	<%If bMayAddLAAssignment Then%>
	function addItem( text, param, activityID, lexile ) {
		var form = document.forms['QA'];
		form.elements['ASL'].value += text +"\001" + param +"\001" + activityID +"\001" + lexile +"\001";
	}
	function AllItemsIsSent() {
		DoSubmit(document.QA, "");
	}
	<%End If
End If
Call onHead_Special()%>
//-->
</script>
<%End Sub

Sub DrawFilters( strForm )
	Call DrawFilters_Before()
	Call DrawYearClasses_IUP(strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType))) : If bExit Then Exit Sub
	Call DrawSubjectGroups( strForm, False ) : If bExit Then Exit Sub
	Call DrawDateIntervalRow()
	If bNoStudents Then %><tr><td colspan="2"><div class="SmallHeader"><%=obLanguage("Filter","kNoStudents",strFunctionalityType)%></div></td></tr><%bExit=True:Exit Sub
	End If
End Sub

Function ParseLA( strLAID_Request )
	Dim arrLAID
	If Instr(1, strLAID_Request, "|") Then
		arrLAID = Split(strLAID_Request,"|")
		ParseLA = arrLAID(0)
		strLAJID = arrLAID(1)
		bJuniorLA = True
		Call obTokenMgr.SetData(strToken, stJuniorLA, strLAJID )
	Else
		ParseLA = strLAID_Request
		bJuniorLA = False
		Call obTokenMgr.SetData(strToken, stJuniorLA, "" )
	End If
End Function
%>
