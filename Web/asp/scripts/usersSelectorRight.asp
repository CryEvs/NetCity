<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE FILE=ScreenNonPrint.asp -->
<!-- #INCLUDE FILE="Messaging.asp" -->
<!-- #INCLUDE FILE="YearIndependent_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function getBGColor()
	getBGColor = "#EEEEEE"
End Function

'--------- Page Parameters -------
'	F=<Form Name>
'	FN=<Field Name> for set user names
'	FID=<Field Name> for set user id
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
Dim strForm, strFieldNames, strList, strRcpt, strID, strFieldIDs, chrID, strSendList, strFirstTime, strSY
Dim arrAddrs, i, strRemove
Dim rsUsers, rsClasses, rsParents, strGlobals

Dim strUserField1Name, strFi

Sub ParseAddrList( ByVal arrAddrs, ByRef rsUsers, ByRef rsClasses, ByRef rsParents, ByRef strGlobals )
	Dim strUsers, strClasses, strParents, strT, chrT, i

	If Not bIsDebug Then On Error Resume Next
	
	Set rsUsers = Nothing
	Set rsClasses = Nothing
	Set rsParents= Nothing
	strUsers = ""
	strClasses = ""
	strParents = ""
	strGlobals = ""
	for i = 0 to UBound(arrAddrs)
		if  arrAddrs(i) <> ""  then
			strT = CStr(arrAddrs(i))
			chrT = Left(strT, 1)
			if IsNumeric(Left(strT, 1)) then
				strUsers = strUsers & CStr(strT) & ","
			else
				if chrT = "C" and Len(strT) > 1 then
					strClasses = strClasses & Mid(strT, 2) & ","
				elseif chrT = "E" and Len(strT) > 1 then
					strParents = strParents & Mid(strT, 2) & ","
				else
					strGlobals = strGlobals & strT& ","
				end if
			end if
		end if
	next
	if Len(strUsers) > 1 AND Right(strUsers, 1) = "," then strUsers = Left(strUsers, Len(strUsers) - 1)
	if Len(strClasses) > 1 AND Right(strClasses, 1) = "," then strClasses = Left(strClasses, Len(strClasses) - 1)
	if Len(strParents) > 1 AND Right(strParents, 1) = "," then strParents = Left(strParents, Len(strParents) - 1)
	if Len(strGlobals) > 1 AND Right(strGlobals, 1) = "," then strGlobals = Left(strGlobals, Len(strGlobals) - 1)

	Call objNSNET.GetNameListForAddressBook(strUsers, strClasses, strParents, rsUsers, rsClasses, rsParents)
	IF IsNull(rsUsers) then Set rsUsers = Nothing
	IF IsNull(rsClasses) then Set rsClasses = Nothing
	IF IsNull(rsParents) then Set rsParents = Nothing
	TestError obLanguage("Messages","kErrCantGetUserList")
end sub

Sub Main
	strForm = GetSafeStr(Request("F"), 20, "")
	strFieldNames = GetSafeStr(Request("FN"), -1, "")
	strFieldIDs = GetSafeStr(Request("FID"), -1, "")
	strList = CStr(Request("AL"))
	strRcpt = CStr(Request("ID"))
	strSY = GetSafeStr(Request("SY"), 20, "" )
	strFirstTime = CStr(Request("FT"))
	strRemove = CStr(Request("RM"))
	
	strID = ""
	chrID = kSpace
	If Len(strSY) >0 Then strRcpt = strRcpt + strSY
	'remove recipient from list
	if not IsEmpty(strRemove) and strRemove <> "" then
		dim nPos
		nPos = 1
		Do
			nPos = InStr(nPos, strList, ";"+strRemove+";")
			If nPos > 0 Then strList = Left(strList, nPos ) & Mid(strList, nPos + Len(strRemove) + 1) Else Exit Do
		Loop
	end if
	strList= Replace( strList, ";;", ";" )
	'split recipients list
	if not IsEmpty(strList) and strList <> "" and strList <> ";" then arrAddrs = Split( strList, ";", -1, 1)
	'add new recipient
	if not IsEmpty(strRcpt) and strRcpt <> "" then
		chrID = Left(strRcpt, 1)
		if IsNumeric(chrID) then
			strID = strRcpt
			chrID = kSpace
		else
			if Len(strRcpt) > 1 then strID = Mid(strRcpt, 2)
		end if

		'check if recipient alredy exists in the list
		Dim found, strT
		found = False
		if not IsEmpty(arrAddrs) then
			for each strT in arrAddrs
				if strT = strRcpt then found = True : exit for
			next
		end if
		if not found then
			strList = strList & ";" & strRcpt & ";"
			strList= Replace( strList, ";;", ";" )
			arrAddrs = Split( strList, ";", -1, 1)
		end if
	end if

	If Not IsEmpty(arrAddrs) Then ParseAddrList arrAddrs , rsUsers, rsClasses, rsParents, strGlobals
End Sub

Sub onHead()
Call onHeadNonPrint()
%>
<SCRIPT>
<!--
function DoSubmitWrap(form,url)
{
    DoSubmit(form, url);
}
function AddRcpt(userID)
{var form = document.forms['UserSelectorSelectedList']; form.elements['ID'].value = userID; form.submit();}

function AddRcptAll(userID, aSchoolYearID)
{
	var form = document.forms['UserSelectorSelectedList'];
	form.elements['ID'].value = userID;
	form.elements['SY'].value = aSchoolYearID;
	form.submit();
}

function Remove(){
	var form = document.forms['UserSelectorSelectedList'];
	var element = form.elements['List'];
	if (element.selectedIndex >= 0){
		var val = element[element.selectedIndex].value;
		element = form.elements['RM'];
		element.value=val;
		form.submit();}
}
//-->
</SCRIPT>
<%
End Sub

Sub onDrawPage()
%>
<FORM NAME="UserSelectorReturner" METHOD="POST" target="_parent">
<%=WriteObligatoryTags()%>
<INPUT TYPE="HIDDEN" NAME="SELECTEDUSERSIDS" VALUE="<%=strList%>">
<INPUT TYPE="HIDDEN" NAME="SELECTEDUSERSNAMES" VALUE="<%=strSendList%>">
</FORM>
<FORM NAME="UserSelectorSelectedList" METHOD="POST" ACTION="usersSelectorRight.asp">
<%=WriteObligatoryTags()%>
	<INPUT TYPE="HIDDEN" NAME="F" VALUE="<%=strForm%>">
	<INPUT TYPE="HIDDEN" NAME="FN" VALUE="<%=strFieldNames%>">
	<INPUT TYPE="HIDDEN" NAME="FID" VALUE="<%=strFieldIDs%>">
	<INPUT TYPE="HIDDEN" NAME="AL" VALUE="<%=strList%>">
	<INPUT TYPE="HIDDEN" NAME="ID" VALUE="">
	<INPUT TYPE="HIDDEN" NAME="SY" VALUE="">
	<INPUT TYPE="HIDDEN" NAME="FT" VALUE="">
	<INPUT TYPE="HIDDEN" NAME="RM" VALUE="">
	<TABLE ALIGN="CENTER" WIDTH="100%" HEIGHT="100%">
	<TR><TD><H2 ALIGN="CENTER"><%=obLanguage("Common","kSelectedUsers")%></TD></TR>
	<TR><TD ALIGN="CENTER" VALIGN="MIDDLE">
	<DIV CLASS="select">
	<SELECT NAME="List" SIZE="16" style="width:100%">
	<%
	if IsEmpty(arrAddrs) then
		Response.Write "<OPTION>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</OPTION>"
		strSendList = ""
	else
		Dim sID, str, strName
		strSendList = ""
		
		'происходит проверка на null так DataAccess возвращает null который присвается объекту значение Empty, а в вызов необходимо 
		'передовать Nothing 
		'Филимонов Антон
		
		if IsNull(rsUsers) then Set rsClasses = Nothing
		Call PopulateRS( rsUsers, "USERID", "NICKNAME", kSpace, "" )
		if IsNull(rsClasses) then Set rsClasses = Nothing
		Call PopulateRS( rsClasses, "CLASSID", "CLASSNAME", "C", obLanguage("MenuFolders","kStudentsOfTheClass",strFunctionalityType) & " " )
		if IsNull(rsParents) then Set rsParents = Nothing
		Call PopulateRS( rsParents, "CLASSID", "CLASSNAME", "E", obLanguage("Common","kParents") )
		
		if not IsEmpty(strGlobals) and strGlobals <> "" then
			dim chrT, arrGlob
			arrGlob = split( strGlobals, ",")
			for i = 0 to UBound(arrGlob)
				chrT = Mid(arrGlob(i), 1, 1)
				strName = "Всем " & GetGlbName(chrT)
				str = "<OPTION VALUE=""" & arrGlob(i) & """"
				str = str & ">" & (strName) & "</OPTION>"
				Response.Write str
				if strSendList = "" then strSendList = (strName) else strSendList = strSendList & "; " & strName
			next
		end if
	end if
	%>
	</SELECT>
	</DIV>
	</TD></TR></TABLE>
</FORM>
<SCRIPT>
<!--
var selUsersNames='<%=strSendList%>';
var selUsersIDs='<%=strList%>';

<%if strFirstTime = "" then%>
var sList = '';
if( parent.window.opener && !parent.window.opener.closed ){
	var doc = parent.window.opener.document;
	if(doc){
		var form = doc.forms['<%=strForm%>'];
		if(form){var element = form.elements['<%=strFieldIDs%>']; if(element) sList = element.value;}}}
	var form = document.forms['UserSelectorSelectedList'];
	form.elements['FT'].value = 'N';
	form.elements['AL'].value = sList;
	if (sList != '') { form.submit(); }
<%else%>
	var form = document.forms['UserSelectorSelectedList'];
	form.elements['FT'].value = 'N';
	form.elements['AL'].value = selUsersIDs;
<%end if%>
//-->
</SCRIPT>
<%
End Sub

Sub PopulateRS( theRS, theID, theName, default, theNamePrefix )
	Dim sID, strName, str, strValue
		
		'происходит проверка на null так DataAccess возвращает null который присвается объекту значение Empty, а в вызов необходимо 
		'передовать Nothing 
		'Филимонов Антон
	
	if IsNull(theRS) then Set theRS = Nothing
	
	if Not theRS Is Nothing then
		while not theRS.EOF
			sID = CStr( theRS( theID ) )
			If default = kSpace Then
				strValue = sID
			Else
				strValue = CStr(default) & sID ' add prefix to ID for non individual users ('C' or 'E' now)
			End If
			strName = theNamePrefix & theRS( theName )
			str = "<OPTION VALUE=""" & strValue & """"
			if chrID = default AND strID = sID then str = str & " SELECTED"
			str = str & ">" & strName & "</OPTION>"
			Response.Write str
			if strSendList = "" then strSendList = strName else strSendList = strSendList & "; " &  strName
			theRS.MoveNext
		wend
	end if
End Sub
%>
