<!-- #INCLUDE FILE=sa_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kMaxTeamCount = 100

Dim nPID, nEOID, strEOName, objCreatives
Dim bFromSchoolPage

Function GetPageTitle()
	GetPageTitle = obLanguage("ServAdmin","kTitleCreatives")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = IIf(bFromSchoolPage, MenuItem_mi_SA_School, MenuItem_mi_SA_Addresses)
End Function

Function GetPageTabItem()
	GetPageTabItem = IIf(bFromSchoolPage, TabItem_tb_SA_School, TabItem_tb_SA_Addresses)
 End Function

Sub ReadState()
	nPID				= GetSafeLng(Request("PID"), 0)
	nEOID				= GetSafeLng(Request("AreaID"), Null)
	Set objCreatives	= objNSNET.GetEOCreativeList(nEOID)
	TestError obLanguage("ServAdmin","kErrEOCreatives")
	If objCreatives.EOF Then GenerateError obLanguage("ServAdmin","kErrEOCreatives")
	bFromSchoolPage = GetSafeBool(obTokenMgr.GetData(strToken, stFromSchoolPage), False)
End Sub

Sub onHeadSpecial()
%><SCRIPT><!--
function Back(form, action) {
	checkForChanges()
		.then(function() {
			$('input[name=CRTCNT]').val('<%=Request("CRTCNT")%>');
			DoSubmit(document.mainForm, 'createArea.asp');
		});
}

function checkElem(el, elInUse) {
	var nCount = str2lng(el.value);
	var bInUse = (elInUse.value == "1");

	if (nCount != '') {
		if(isNaN(nCount) || (nCount < 1) || (nCount > <%=kMaxTeamCount%>)) {
			alert(language.Generic.Common.kEnterIntegerFrom1To + '<%=(" "& kMaxTeamCount)%>' + (bInUse ? '': ' ' + language.Generic.ServAdmin.kOrLeaveEmpty));
			el.focus(); return false;
		}

		el.value = str2lng(el.value);
	}
	else {
		if(bInUse) {
			alert(language.Generic.ServAdmin.kThisCreativeIsUsed);
			el.focus(); 
			
			return false;
		}
	}

	return true;
}

function saveCreatives() {
	if(isDBBusy()) return false;

	var form = document.forms.mainForm;
	var el = form.elements['TeamCount'];
	var elInUse = form.elements['InUse'];

	if (el.length) {
		for (var i = 0; i < el.length; i++) {
			if(!checkElem(el[i], elInUse))
				return;
		}
	}
	else {
		if(!checkElem(el)) return;
	}

	getCountCreatives();
	DoSubmit(document.mainForm, 'createArea.asp');
}

function getCountCreatives() {
	var length = $('input[name=TeamCount]').length;
	var arrCount = new Array();
	var val;

	if (length > 0) {
		for(var i = 0; i < length; i++) {
			if ($('input[name=TeamCount]')[i].value == "") val = -1; else val = $('input[name=TeamCount]')[i].value;
			arrCount[arrCount.length] = val;
		}
	}

	$('input[name=CRTCNT]').val(arrCount);
}
//--></SCRIPT>
<%
End Sub

Sub DrawButtons()
	ButtonSave "saveCreatives()", obLanguage("Common","kSave")
End Sub

Sub onDrawPage()
	Dim strTeamCount, nTypeID, nInUse, arrEOCreativesCnt, i
	
	DrawButtonPanel%>

	<form method="POST" class="form-horizontal" name="mainForm" action="saveCreatives.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("Area", "EO","AreaID", nEOID, "EditSchoolID", Request("EditSchoolID"), "act", Request("act"), "EOFID", Request("EOFID"), "CRTCNT", ""))%>

		<div class="row">
			<div class="col-md-7 col-lg-5">
				<table class="table table-bordered table-condensed">
					<tr>
						<th><%=obLanguage("ServAdmin","kCreativeType")%></th>
						<th><%=obLanguage("ServAdmin","kCount")%></th>
						<th><%=obLanguage("ServAdmin","kUsage")%></th>
					</tr><%
					If Not IsDull(Request("CRTCNT")) Then arrEOCreativesCnt = Split(Request("CRTCNT"), ",")

					While Not objCreatives.EOF
						strTeamCount	= ""
						nTypeID			= GetSafeID(objCreatives("TYPEID"), Null)
						nInUse			= GetSafeLng(objCreatives("INUSE"), 0)

						If Not IsDull(Request("CRTCNT")) Then
							For i = 0 To UBound(arrEOCreativesCnt)
								If Clng(nTypeID) = i + 1 And Clng(arrEOCreativesCnt(i)) > 0 Then strTeamCount = arrEOCreativesCnt(i)
							Next
						Else
							If Not IsDull(objCreatives("TEAMCOUNT")) Then strTeamCount = GetSafeLng(objCreatives("TEAMCOUNT"), Null)
						End If%>

						<tr>
							<td><%=DB2HTML(objCreatives("TYPENAME"))%></td>
							<td>
								<input type="text" class="form-control" name="TeamCount" size="<%=TextInputSize(5)%>" maxlength="3" value="<%=strTeamCount%>" onChange="JavaScript:dataChanged()">
								<input type="hidden" name="TypeID" value="<%=nTypeID%>">
							</td>
							<td><%If nInUse = 1 Then%>X<%Else%>&nbsp;<%End If%><input type="hidden" name="InUse" value="<%=nInUse%>"></td>
						</tr><%

						objCreatives.MoveNext
					WEnd%>
				</table>
			</div>
		</div>
	</form><%
End Sub%>