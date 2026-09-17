<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/dateinput.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const MaxAidCommentSize = 2000
Const kAidDateNew = "ADT"

Dim strParentID, objAids, objAidTypes, objAidResults
Dim bCanSave, bCanAdd
Dim nAidsCnt

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kTitleParentAid",strFunctionalityType) & GreenText(DB2HTML(objNSNET.GetUserNickName(strParentID)))
End Function
Function GetPageTabItem()
	GetPageTabItem = TabItem_tbParents
 	bTabInternalPage = True
End Function

Function hasUserRightsOnPage()
	Dim strClassID
	If HasUserRight(arUsersEditStudents) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arEditInfoSelf) Then
		strClassID = GetSafeID( obTokenMgr.GetData(strToken,stStudClassID), "0" )
		If strClassID <> "0" Then
			If objNSNET.IsClassChief(strClassID, strUserID) Then hasUserRightsOnPage = True: Exit Function
		End If
	End If
	hasUserRightsOnPage = False
End Function

Sub ReadState()
	If readonly Then GenerateError obLanguage("Filter","kErrorEditClosedYear")
	strParentID = GetSafeID(Request("UID"), Null)
End Sub

Sub Main
	nAidsCnt = 0
	Set objAids = objNSNET.GetParentAids(strParentID, strCurrYearID)
	If Not objAids.EOF Then nAidsCnt = objAids.RecordCount
	Set objAidTypes = objNSNET.GetParentAidTypes(strParentID, strCurrYearID)
	bCanAdd = Not objAidTypes.EOF
	bCanSave = (Not objAids.EOF) Or bCanAdd
	If bCanSave Then
		Set objAidResults = objNSNET.GetParentAidResults()
		If objAidResults.EOF Then GenerateError obLanguage("SetupSchool","kErrorNoAidResults")
	End If
End Sub

Sub onHead()
	Dim i, dtAid
	If bCanAdd Then
		bIsCheckDates = True
		Call CalcCurrYearLimits( dtMinDate, dtMaxDate )
		Call scriptCalendar( "main", dtMinDate, dtMaxDate  )
	End If
	If bCanSave Then
%>
<SCRIPT><!--
<%If nAidsCnt > 0 Then%>
	var arrAidDates = new Array(<%=nAidsCnt%>);
	var arrAidTypes = new Array(<%=nAidsCnt%>);
	<%i = 0
	While Not objAids.EOF
		dtAid = CDate(objAids("AIDDATE"))%>
		arrAidDates[<%=i%>] = <%=Date2Js(dtAid)%>;
		arrAidTypes[<%=i%>] = <%=CLng(objAids("AIDTYPE"))%>;<%
		objAids.MoveNext
		i = i + 1
	Wend
	objAids.MoveFirst%>
	function deleteAids(){
		if( isDBBusy() ) return false;
		var form=document.forms['main'];
		var chkBox=form.elements.delAid, chkItems=0;
		if (chkBox) {
			if (chkBox.length) {
				for (var j=0;j<chkBox.length;j++)
					if (chkBox[j].checked==true) {chkItems=1; break;}
			}
			else if (chkBox.checked==true)
				chkItems=1;
		}
		if (chkItems>0){
			$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function(){
				form.ACT.value = 'delete';
				setDBBusy();
				ok( 'main', 'ParentAidSave.asp' );
			});
		}
		else {alert(language.Generic.Common.kErrMsgNoChecks); return};
	}
<%End If%>

function doSave(){
	if( isDBBusy() ) return false;
	if(!dataWereChanged) return;

	var form = document.main;
<%If nAidsCnt = 1 Then%>
	if(!(checkAreaLength(form.AIDCOMMENT, <%=MaxAidCommentSize%>, '<%=obLanguage("Common","kComment")%>'))) return;
<%ElseIf nAidsCnt > 1 Then%>
	for(var i = 0; i < <%=nAidsCnt%>-1; i++)
		if(!(checkAreaLength(form.AIDCOMMENT[i], <%=MaxAidCommentSize%>, '<%=obLanguage("Common","kComment")%>'))) return;
<%End If%>

<%If bCanAdd Then%>
	var dateFilter = getDateFilterInfo("<%=kAidDateNew%>");
	if(dateFilter && dateFilter.date() == null){
		if(form.AidTypeNew.selectedIndex > 0 || form.AidResultNew.selectedIndex > 0){
			focusAlert(dateFilter.element, language.Generic.Common.kErrInvalidDateNotEmpty);
			return;
		}
	}
	else{
		if(! isNewFormValid() ) return false;
	}
	if(trimStr(form.AidCommentNew.value) != ''){
		if(aidDate == null){
			focusAlert(el, language.Generic.Common.kErrInvalidDateNotEmpty);
			return;
		}
		if(!(checkAreaLength(form.AidCommentNew, <%=MaxAidCommentSize%>, '<%=obLanguage("Common","kComment")%>'))) return;
	}
<%End If%>
	form.ACT.value = 'save';
	setDBBusy();
	ok('main', 'ParentAidSave.asp');
}
<%If bCanAdd Then%>
function addParentAid(){
	if( isDBBusy() ) return false;
	var form = document.main;
	if (isNewFormValid()){
		form.ACT.value = 'add';
		setDBBusy();
		ok('main', 'ParentAidSave.asp');
	}
}
function isNewFormValid(){
	var form = document.main;
	if( !checkDates(form) ) return false;
	if(!checkAreaLength(form.AidCommentNew, <%=MaxAidCommentSize%>, '<%=obLanguage("Common","kComment")%>')) return false;
	<%If nAidsCnt > 0 Then%>
		if(isAidExists() ) return false;
	<%End If%>
	return true;
}
	<%If nAidsCnt > 0 Then%>
	function isAidExists(){
		var el_aidDate = $('input[name=ADT]');
		var aidDate = str2date( el_aidDate.val() );
		var nAidType = parseInt($(document.main.AidTypeNew).val());
		for(var i = 0; i < arrAidDates.length; i++){
			if(arrAidTypes[i] == nAidType && arrAidDates[i].getYear() == aidDate.getYear() &&
			   arrAidDates[i].getMonth() == aidDate.getMonth() && arrAidDates[i].getDate() == aidDate.getDate()){
				focusAlert(el_aidDate,language.Generic.SetupSchool.kAidExists);
				return true;
			}
		}
		return false;
	}
	<%End If%>
<%End If%>

function Back(){
	goBack(document.main, '/angular/school/userinfo/parents/<%=strParentID%>');
}
//--></SCRIPT>
<%
	End If
End Sub

Sub DrawButtons()
	If bCanSave Then
		ButtonSave "doSave();", obLanguage("Common","kSave")
		If nAidsCnt > 0 Then ButtonDel "deleteAids();", obLanguage("Common","kRemove")
		ButtonReset "resetScreen('main');", obLanguage("Common","kReset")
	End If
End Sub

Function Date2Str_YYYYMMDD(dtDate)
	Dim strDate, nLen, i, str

	strDate = CStr(Year(dtDate))
	nLen = Len(strDate)
	For i = nLen + 1 To 4
		strDate = "0" & strDate
	Next
	str = CStr(Month(dtDate))
	strDate = strDate & IIf(Len(str) = 1, "0" & str, str)
	str = CStr(Day(dtDate))
	strDate = strDate & IIf(Len(str) = 1, "0" & str, str)
	Date2Str_YYYYMMDD = strDate
End Function

Sub onDrawPage()
	Dim dtAid, strAidDate, i
	
	DrawButtonPanel%>

	<form name="main" method="post" action="ParentAidSave.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("UID", strParentID, "ACT", ""))%><%
		If objAids.EOF Then
			DrawInfo obLanguage("SetupSchool","kNoAid"), False
		Else%>
			<table class="table table-bordered table-condensed table-thin table-sm">
				<tr>
					<th><%=obLanguage("SetupSchool","kHeaderDate")%></th>
					<th><%=obLanguage("SetupSchool","kHeaderType")%></th>
					<th><%=obLanguage("SetupSchool","kHeaderResult")%></th>
					<th><%=obLanguage("Common","kComment")%></th>
					<%=ShowDelCellHeader(1)%>
				</tr><%
				i = 1
				While Not objAids.EOF
					strAidDate = Date2Str_YYYYMMDD(CDate(objAids("AIDDATE")))%>
					<tr>
						<td valign="top">
							<%=WriteHiddenTags(Array("AIDDATE", strAidDate, "AIDTYPE", objAids("AIDTYPE")))%>
							<%=Date2Str(objAids("AIDDATE"))%>
						</td>
						<td valign="top"><%=DB2HTML(objAids("AIDTYPE_NAME"))%></td>
						<td valign="top"><%Call DrawSelectRs(objAidResults, "AIDRESULT", "ITEMID", "ITEMNAME", GetSafeStrParam(objAids("AIDRESULT"), "-1"), "", "")%></td>
						<td><%=ShowTextArea("AIDCOMMENT", 3, 20, "", objAids("AIDCOMMENT"))%></td>
						<td valign="top" align="center"><INPUT TYPE="checkbox" NAME="delAid" VALUE="<%=i%>"></td>
					</tr><%
					i = i + 1
					objAidResults.MoveFirst
					objAids.MoveNext
				Wend%>
			</table><br><%
		End If
		If Not bCanAdd Then
			DrawInfo obLanguage("SetupSchool","kCannotAddAid"), False
		Else%>
			<div class="row">
				<div class="col-md-8"><%
					OpenPanel obLanguage("SetupSchool","kAddParentAid"), "", False
					Call DrawDateInfoRow(obLanguage("SetupSchool","kHeaderDateNew") & ":", "", kAidDateNew, obLanguage("SetupSchool","kChooseDate"))
					Call DrawSelectInfoRow(obLanguage("SetupSchool","kHeaderTypeNew") & ":", "", "AidTypeNew", objAidTypes, "ITEMID", "ITEMNAME", "", "")
					Call DrawSelectInfoRow(obLanguage("SetupSchool","kHeaderResult") & ":", "", "AidResultNew", objAidResults, "ITEMID", "ITEMNAME", "", "")
					Call DrawInputRow(obLanguage("Common","kComment") & ":", "", "AidCommentNew", "area", 30, 3, "" )
					ButtonAdd "addParentAid();", obLanguage("SetupSchool","kAddParentAid")
					ClosePanel%>
				</div>
			</div><%
		End If%>
	</form><%
End Sub
%>
