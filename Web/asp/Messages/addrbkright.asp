<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/ScreenNonPrint.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/Messaging.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2021 IRTech. All rights reserved.

Function getBGColor()
	getBGColor = "#EEEEEE"
End Function

'--------- Page Parameters -------
'	F=<Form Name>
'	FN=<Field Name> for set names to
'	FA=<Field Name> for set address' list to
'	AL	address' list
'	ID		ID for add
'	FT	first time running
'	RM	ID for remove

'	recipients:
'U	all Users of School
'T	all Teachers
'A	all Admins
'P	all Principals
'S	all Staff
'R	all Parents
'D	all Students
'H	Teacher's Classes
'C	Students of CLASSID
'E	Parents of CLASSID
'number	User - USERID

Const kSpace = " " ' this is for individual users

'get parameters
Dim strForm, strFieldNames, strList, strRcpt, strID, strFieldAddrs, chrID, strSendList, strFirstTime, strSY
Dim strRegionServer
Dim i, strRemove
Dim rsUsers, rsClasses, rsParents, strGlobals
Dim strResipName
Dim dctRecipients
Dim strListNames


Sub Main
	Dim key, recipName
	Dim strStorageName
	Dim arrAddrs, arrAddrNames

	strForm = GetSafeStr(Request("F"), 20, NULL)
	strFieldNames = GetSafeStr(Request("FN"), 10, NULL)
	strFieldAddrs = GetSafeStr(Request("FA"), 10, NULL)
	strList = CStr(Request("AL"))
	strListNames = CStr(Request("ALN"))
	strRcpt = CStr(Request("ID"))
	strSY = GetSafeStr(Request("SY"), 20, "" )
	strFirstTime = CStr(Request("FT"))
	strRemove = CStr(Request("RM"))

	strStorageName = stStorageMsgRecips & "_" & strFieldNames

	strID = ""
	chrID = kSpace
'	If Len(strSY) > 0 Then strRcpt = strRcpt + strSY

	strRegionServer = IIf(GetSafeStr(Request("RegionServer"), 1, "0") = "1", "_", "")
	If Not IsDull(strRcpt) Then
		strRcpt = strRcpt + strRegionServer
	End If
	strResipName = GetSafeStr(Request("ResipName"), -1, "")

	dctRecipients = Null
	If strFirstTime = "" Then ' первый заход
		Call obTokenMgr.SetData(strToken, strStorageName, Null)
		Set dctRecipients = CreateObject("NetCity.DictionaryStorage")
	Else
		If IsObject(obTokenMgr.GetData(strToken, strStorageName)) Then
			Set dctRecipients = obTokenMgr.GetData(strToken, strStorageName)
		End If
	End If
	If Not IsObject(dctRecipients) Then
		Set dctRecipients = CreateObject("NetCity.Storage")
	End If

	If Not IsDull(strRcpt) Then
		dctRecipients(strRcpt) = strResipName
	ElseIf Not IsDull(strList) Then
		dctRecipients.RemoveAll()
		arrAddrs = Split(strList, ";", -1, 1)
		arrAddrNames = Split(strListNames, ";", -1, 1)
		If UBound(arrAddrs) = UBound(arrAddrNames) Then
			For i = 0 To UBound(arrAddrs)
				If Not IsDull(arrAddrs(i)) And Not IsDull(arrAddrNames(i)) Then
					dctRecipients(arrAddrs(i)) = arrAddrNames(i)
				End If
			Next
		End If
	End If

	'remove recipient from list
	If Not IsDull(strRemove) Then
		'Call RemoveFromList(strList, strRemove)
		dctRecipients.Remove(strRemove)
	End If

	Call obTokenMgr.SetData(strToken, strStorageName, dctRecipients)
End Sub

Sub RemoveFromList(strList1,strRemove)
	Dim regEx
	Set regEx = New RegExp
	regEx.Global = True
	regEx.Pattern = "(([;]?[^0-9])|(^))" & strRemove & "[^0-9][;]?"
	regEx.IgnoreCase = True
	strList1 = regEx.Replace(strList1, ";")
End Sub

Sub onHead()
%>
<SCRIPT>
<!--
function AddRcpt(userID, userName, regionServer)
{
	var form = document.forms['AddrList'];
	form.elements['ID'].value = userID;
	form.elements['ResipName'].value = userName;
	form.elements['RegionServer'].value = regionServer;
	form.submit();
}

function AddRcptAll(userID, aSchoolYearID, userName, regionServer)
{
	var form = document.forms['AddrList'];
	form.elements['ID'].value = userID;
	form.elements['SY'].value = aSchoolYearID;
	form.elements['ResipName'].value = userName;
	form.elements['RegionServer'].value = regionServer;
	form.submit();
}

function AddSchRcpAll(schoolId)
{
	var form = document.forms['AddrList'];
	form.elements['ID'].value = schoolId;
	form.submit();
}
//-->
</SCRIPT>
<%
End Sub

Sub onDrawPage()
	Dim key, recipName
%><form NAME="AddrList" METHOD="POST" class="form-horizontal" ACTION="addrbkright.asp">
<%=WriteObligatoryTags()%>
	<div class="container-fluid">
		<%=WriteHiddenTags(Array("F", strForm, "FN", strFieldNames, "FA", strFieldAddrs, "AL", strList, "ALN", strListNames, "ID", "", "SY", "", "RegionServer", "", "ResipName", "", "FT", "", "RM", ""))%>
		<h3><%=obLanguage("Messages","kRecipients")%></h3>
		<div class="row">
			<div class="col-xs-12" style="font-size: 0.9em;">
				<ul class="nav nav-list recipient-list">
					<%
					if dctRecipients.Count = 0 then
						strList = ""
						strSendList = ""
					else
						Dim sID, str, strName
						strList = ""
						strSendList = ""
	
						For Each key In dctRecipients.Keys
							recipName = dctRecipients(key)
							str = "<li VALUE=""" & key & """"
							str = str & "><a href=""JavaScript:deleteFromRecipientList('" & key & "')"">" & recipName & "</a></li>"
							Response.Write str
							strList = strList & key & ";"
							strSendList = strSendList & recipName & ";"
						Next
						strList = Left(strList, Len(strList) - 1)
						strSendList = Left(strSendList, Len(strSendList) - 1)
					end if%>
				</ul>
			</div>
		</div>
	</div>
</form>
<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/address-book.min.css")%>"/>
<script>
<!--
function deleteFromRecipientList(val)
{
	var form = document.forms['AddrList'];
	element = form.elements['RM'];
	element.value=val;
	form.submit();
}
function SetAddress()
{
	var sNames = '<%=(DB2Java(strSendList))%>';
	var sAddrs = '<%=strList%>';
	if (sNames.length > 4000 || sAddrs.length > 4000){
		alert(language.Generic.Messages.kErrTooBigRecipientList);
		return;
	}
	var pwnd = parent.window.opener;
	if( pwnd && !pwnd.closed ){
		var doc = pwnd.document;
		if( doc ) {
			var form = doc.forms['<%=strForm%>'];
			if( form ) {
				var element = form.elements['<%=strFieldAddrs%>'];
				if( element )
					element.value = sAddrs;
				var element = form.elements['<%=strFieldNames%>'];
				if( element )
					element.value = sNames;
	}	}	}
	parent.window.close();
}
<%if strFirstTime = "" then%>
var sList = '';
var sListNames = '';
if( parent.window.opener && !parent.window.opener.closed ){
	var doc = parent.window.opener.document;
	if(doc){
		var form = doc.forms['<%=strForm%>'];
		if(form){
			var element = form.elements['<%=strFieldAddrs%>']; 
			if(element) sList = element.value;
			element = form.elements['<%=strFieldNames%>']; 
			if(element) sListNames = element.value;
		}
	}
}
	var form = document.forms['AddrList'];
	form.elements['FT'].value = 'N';
	form.elements['AL'].value = sList;
	form.elements['ALN'].value = sListNames;
	if (sList != '') { form.submit(); }
<%else%>
	var form = document.forms['AddrList'];
	form.elements['FT'].value = 'N';
	form.elements['AL'].value = '<%=strList%>';
	form.elements['ALN'].value = '<%=(DB2Java(strSendList))%>';
<%end if%>
//-->
</script>
<%
End Sub
%>
