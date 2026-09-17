<%@ Language=VBScript %>
<%
Option Explicit
Response.Buffer = TRUE
'Response.Expires = 0
'Response.AddHeader "pragma", "no-cache"
%>
<!-- #INCLUDE FILE="common.asp" -->
<%
Const stCrMngmXMLTree = "stCrMngmXMLTree"
Const stCrMngmXSL = "stCrMngmXSL"

CheckCNTeacherLogin

strID = Request("ID")
If IsEmptyStr(strID) Then
	strID = Storage.CreateToken( 1 )
	Call Storage.SetTokenTimeout(strID, 60*60000)
End If

Dim strCurrElemType, strCurrChapterID, strCurrSectionID, strCurrLessonID, strCurrPageID
Dim strPreserveTree, strNotSwitch, strCurrpImg
Dim sPgChks, sPgAsAllChks, sPgAsMChks, sPgAsChks, sAsChks, sTheorChks
Dim soXML, soXSL, strXSLFile, bReadOnly, nScrollTop

bReadOnly = (Request("RO")="1")
nScrollTop = GetSafeLng(Request("SCTOP"),0)

strCurrChapterID = GetSafeStr(Request("CHID"),5,"0")
strCurrSectionID = GetSafeStr(Request("SCID"),5,"0")
strCurrLessonID = GetSafeStr(Request("LSID"),5,"0")
strCurrPageID = GetSafeStr(Request("PGID"),5,"0")
strCurrElemType = GetSafeStr(Request("ELEMTYPE"),2,"")
strNotSwitch = GetSafeStr(Request("NOTSWITCH"),1,"N")
strCurrpImg = GetSafeStr(Request("PIMG"),20,"")

Set sPgChks = Request("PG")
Set sPgAsChks = Request("PG_AS")
Set sAsChks = Request("AS")
Set sPgAsAllChks = Request("PG_AS_ALL")
Set sPgAsMChks = Request("PG_AS_M")
Set sTheorChks = Request("TheoreticalChapter")

If IsObject(Storage.GetData(strID, stCrMngmXMLTree) ) Then 'And CStr(Request("SHOWTREE"))="Y" Then
	Set soXML = Storage.GetData(strID, stCrMngmXMLTree)
Else
	Set soXML = Nothing
End If

If IsObject(Storage.GetData(strID, stCrMngmXSL)) Then
	Set soXSL = Storage.GetData(strID, stCrMngmXSL)
Else
	Set soXSL = Nothing 
End If

If soXSL Is Nothing Then
	Set soXSL = CreateObject("MSXML2.FreeThreadedDOMDocument")
	soXSL.async = false
	soXSL.validateOnParse = False

	If bSection Then strXSLFile="sections" Else strXSLFile="nosections"
	If bReadOnly Then strXSLFile = strXSLFile & "View"
	soXSL.Load(Server.MapPath("/" & LAID & "/common/" & strXSLFile & ".xsl"))
	If soXSL.parseError.errorCode<>0 Then
		Response.Write soXSL.parseError.reason
	End If 
End If

If soXML Is Nothing Then
	Set soXML = CreateObject("MSXML2.FreeThreadedDOMDocument")
	soXML.Load(Server.MapPath("/" & LAID & "/" & LAID & ".xml"))
	If soXML.parseError.errorCode<>0 Then
		Response.Write soXML.parseError.reason
	End If 

	AddAuxiliaryFields(soXML)
End If

If bSection Then
	jClearOpenedChkBoxes
Else
	jClearOpenedChkBoxes_NoSections
End If
Dim i
If Not IsNull(sPgChks) Then
	For i = 1 To sPgChks.Count
		jSetPagesChkBoxes sPgChks(i)
	Next
End If
If Not IsNull(sPgAsChks) Then
	For i = 1 To sPgAsChks.Count
		jSetPagesChkBoxes sPgAsChks(i)
	Next
End If
If Not IsNull(sAsChks) Then
	For i = 1 To sAsChks.Count
		jSetAssignmentsChkBoxes sAsChks(i)
	Next
End If
If Not IsNull(sPgAsAllChks) Then
	For i = 1 To sPgAsAllChks.Count
		jSetPagesChkBoxes sPgAsAllChks(i)
	Next
End If
If Not IsNull(sPgAsMChks) Then
	For i = 1 To sPgAsMChks.Count
		jSetPagesChkBoxes sPgAsMChks(i)
	Next
End If
If Not IsNull(sTheorChks) Then
	For i = 1 To sTheorChks.Count
		jSetTheorChksBoxes sTheorChks(i)
	Next
End If

If strCurrElemType="ch" And strNotSwitch<>"Y" Then jSwitchChapter strCurrChapterID
If bSection Then
	If strCurrElemType="sc" And strNotSwitch<>"Y" Then jSwitchSection strCurrChapterID, strCurrSectionID
	If strCurrElemType="ls" And strNotSwitch<>"Y" Then jSwitchLesson strCurrChapterID, strCurrSectionID, strCurrLessonID
Else
	If strCurrElemType="ls" And strNotSwitch<>"Y" Then jSwitchLesson_NoSections strCurrChapterID, strCurrLessonID
End If

Call Storage.SetData(strID, stCrMngmXMLTree, soXML)
Call Storage.SetData(strID, stCrMngmXSL, soXSL)

Sub AddAuxiliaryFields(theoXML)
	Dim aLsNodes, aChNodes, aChNode, aScNodes, aScNode, aChNodeFileName, aChId
	Dim aChapterName, aSectionName

	theoXML.setProperty "SelectionLanguage", "XPath"	
	Set aChNodes = theoXML.selectNodes("//Chapter")
	For Each aChNode In aChNodes
		aChNode.AppendChild(theoXML.CreateElement("Opened"))
		aChNode.lastChild.text = kClosed
		aChapterName = aChNode.getAttribute("Name")
		If bSection Then
			Set aScNodes = aChNode.selectNodes("Section")
			For Each aScNode In aScNodes
				aScNode.AppendChild(theoXML.CreateElement("Opened"))
				aScNode.lastChild.text = kClosed
				aSectionName = aScNode.getAttribute("Name")
				Set aLsNodes = aScNode.selectNodes("Lesson")
				ParseLessonNodes theoXML, aLsNodes
			Next
		Else
			Set aLsNodes = aChNode.selectNodes("Lesson")
			ParseLessonNodes theoXML, aLsNodes
		End If
				
		if aChNode.getAttribute("ID") = "1" Then
			ParseCheckableNodes theoXML, aChNode, "Theoretical", 1
		end if	
	Next
End Sub

Sub ParseLessonNodes( theoXML, theLsNodes )
	Dim aNodes, aNode, aPNodes, aPNode, aLsNode
	Dim aANodes, aANode
	Dim aLessonID, aPageID, aParentPageID, aChildNodes, aChildNode
	Dim aPageName, aAssignmentID, aFileName
	Dim aAttrib, aAttribList, aLessonNum

	For Each aLsNode In theLsNodes
		aLsNode.AppendChild(theoXML.CreateElement("Opened"))
		aLsNode.lastChild.text = kClosed
		aLessonNum = aLsNode.getAttribute("Number")
		aLessonID = aLsNode.getAttribute("ID")
		aPageID = 1
		Set aPNodes = aLsNode.selectNodes("Page")
		For Each aPNode In aPNodes
			aPNode.AppendChild(theoXML.CreateElement("Checked"))
			aPNode.lastChild.text = kUnchecked
			aPageName = aPNode.getAttribute("Name")
			aFileName = aPNode.getAttribute("Filename")
			aAttribList = ""
			For Each aAttrib In aPNode.attributes
				If aAttrib.name <> "Name" And aAttrib.name <> "Filename" _
				   And aAttrib.name <> "TYPE" Then
					aAttribList = ";" & aAttrib.name & ":" & aAttrib.value
				End If
			Next
			aPNode.setAttribute "ID", aFileName & ";" & aLessonID & ";" _ 
							  & CStr(aPageID) & aAttribList & _
							";;" & aLessonNum & ". " & aPageName 
			Set aANodes = aPNode.selectNodes("Assignment")
			For Each aANode In aANodes
				aAssignmentID = aANode.text
				aANode.AppendChild(theoXML.CreateElement("Checked"))
				aANode.lastChild.text = kUnchecked
				
				aANode.setAttribute "ID", aFileName & ";" & aLessonID & ";" &	CStr(aPageID) & _
								  ";" & aAssignmentID & aAttribList &_
								";;" & aPageName & " " & "Упражнение " & aAssignmentID
			Next
			aPageID = aPageID + 1
		Next
	Next
End Sub

Sub ParseCheckableNodes(theoXML, aPNode, aLessonID, aAssignmentID)	
	Dim aPageName, aFileName
	Dim aAttrib, aAttribList, aLessonNum
	
	aPNode.AppendChild(theoXML.CreateElement("Checked"))
	aPNode.lastChild.text = kUnchecked
	aPageName = aPNode.getAttribute("Name")
	aFileName = aPNode.getAttribute("Filename")
	aAttribList = ""
	For Each aAttrib In aPNode.attributes
		If aAttrib.name <> "Name" And aAttrib.name <> "Filename" _
		   And aAttrib.name <> "TYPE" and aAttrib.name <> "ID" Then
			aAttribList = ";" & aAttrib.name & ":" & aAttrib.value
		End If
	Next
	aPNode.setAttribute "ID", aFileName & ";" & aLessonID & ";" _ 
					  & "0" & aAssignmentID & aAttribList _
					  & aLessonNum _
					  &	";;" & aPageName
end sub

%>
<SCRIPT LANGUAGE="JSCRIPT" RUNAT=SERVER>
	function jClearOpenedChkBoxes()
	{
		var nodes = soXML.selectNodes("//Chapter[Opened=1]/Section[Opened=1]/Lesson[Opened=1]/Page/Checked");
		for (var i = 0;i<nodes.length;i++)
		{
			nodes[i].text = "0";
		}
		nodes = soXML.selectNodes("//Chapter[Opened=1]/Section[Opened=1]/Lesson[Opened=1]/Page/Assignment/Checked");
		for (var i = 0;i<nodes.length;i++)
		{
			nodes[i].text = "0";
		}
	}
	function jClearOpenedChkBoxes_NoSections()
	{
		var nodes = soXML.selectNodes("//Chapter[Opened=1]/Lesson[Opened=1]/Page/Checked");
		for (var i = 0;i<nodes.length;i++)
		{
			nodes[i].text = "0";
		}
		nodes = soXML.selectNodes("//Chapter[Opened=1]/Lesson[Opened=1]/Page/Assignment/Checked");
		for (var i = 0;i<nodes.length;i++)
		{
			nodes[i].text = "0";
		}
	}

	function jSetPagesChkBoxes(theID)
	{
		var node = soXML.selectSingleNode("//Page[@ID='"+theID+"']/Checked");
		if (node!=null)
		{
			node.text = "1";
		}
	}

	function jSetAssignmentsChkBoxes(theID)
	{
		var node = soXML.selectSingleNode("//Assignment[@ID='"+theID+"']/Checked");
		if (node!=null)
		{
			node.text = "1";
		}
	}

	function jSwitchChapter( strChapterID )
    {
        var node = soXML.selectSingleNode("/Project/Chapter[@ID='"+strChapterID+"']/Opened");
        if (node!=null)
        {
            if (node.text=="0")
                node.text = "1";
            else
                node.text = "0";    
        }       
    }

    function jSwitchSection( strChapterID, strSectionID )
    {
        var node = soXML.selectSingleNode("/Project/Chapter[@ID='"+strChapterID+"']/Section[@ID='"+strSectionID+"']/Opened");
        if (node!=null)
        {
            if (node.text=="0")
                node.text = "1";
            else
                node.text = "0";    
        }
    }

    function jSwitchLesson( strChapterID, strSectionID, strLessonID )
    {
        var node = soXML.selectSingleNode("/Project/Chapter[@ID='"+strChapterID+"']/Section[@ID='"+strSectionID+"']/Lesson[@ID='"+strLessonID+"']/Opened");
        if (node!=null)
        {
            if (node.text=="0")
                node.text = "1";
            else
                node.text = "0";    
        }
    }            
    function jSwitchLesson_NoSections( strChapterID, strLessonID )
    {
        var node = soXML.selectSingleNode("/Project/Chapter[@ID='"+strChapterID+"']/Lesson[@ID='"+strLessonID+"']/Opened");
        if (node!=null)
        {
            if (node.text=="0")
                node.text = "1";
            else
                node.text = "0";    
        }
    }
	function jSetTheorChksBoxes(theID){
		var node = soXML.selectSingleNode("/Project/Chapter[@ID='"+theID+"']/Checked");
		if (node!=null)
		{
			node.text = "1";
		}
	}
		
</SCRIPT>

<HTML><HEAD>
<TITLE><%=HTML_TITLE%></TITLE>
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=utf-8">
<SCRIPT><!--
function setImgState( img, imgId, state ) {
	var newImg = new Image();
	if( state==1) newImg.src = img + '_m.gif';
	else newImg.src = img + '.gif';
	document[imgId].src = newImg.src;
}
function Close() {<%
If Not bReadOnly Then%>
	if( !confirm('Вы уверены, что хотите закрыть это окно без сохранения?') ) return;<%
End If%>
	if( window.parent )
		window.parent.window.close();
	else
		window.close();
}<%
If Not bReadOnly Then%>
function Save(){
	var form = document.forms[0];
	var form1 = document.forms[1];
	var aCount = 0;
	var aTmpArray, aEl, aParam, aToAdd, i=3;<%

	' add checked items from collapsed lessons %>
	while (i<form1.elements.length) {
		if (form1.elements[i].name=='HPARAM') {
			aParam = form1.elements[i].value;
			aToAdd = 1;
			for (var j=0; j<form.elements.length; j++)
				if ((form.elements[j].type=='checkbox') && (form.elements[j].checked)) {
					aTmpArray = form.elements[j].value.split(';;');
					if (aParam==aTmpArray[0]) { aToAdd=0; break; }
				}
			if (aToAdd) {
				aEl = document.createElement('input');
				aEl.type = 'hidden';
				aEl.name = 'parameters';
				aEl.value = aParam; form1.appendChild(aEl);

				aEl = document.createElement('input');
				aEl.type = 'hidden';
				aEl.name = 'name';
				aEl.value = form1.elements[i+1].value; form1.appendChild(aEl); 

				aEl = document.createElement('input');
				aEl.type = 'hidden';
				aEl.name = 'lexile';
				aEl.value = ''; form1.appendChild(aEl);

				aCount++;
			}
			i++;
		}
		i++;
	}<%

	' add checked items which are visible %>
	for (var i=0; i<form.elements.length; i++)
		if (form.elements[i].type=='checkbox')
			if (form.elements[i].checked && checkNames(form.elements[i], ['PG_AS', 'AS', 'PG', 'TheoreticalChapter'])) {
				aTmpArray = form.elements[i].value.split(';;');
				aEl = document.createElement('input');
				aEl.type = 'hidden';
				aEl.name = 'parameters';
				aEl.value = aTmpArray[0]; form1.appendChild(aEl);

				aEl = document.createElement('input');
				aEl.type = 'hidden';
				aEl.name = 'name';
				aEl.value = aTmpArray[1]; form1.appendChild(aEl); 

				aEl = document.createElement('input');
				aEl.type = 'hidden';
				aEl.name = 'lexile';
				aEl.value = ''; form1.appendChild(aEl);

				aCount++;
		}
	if (aCount==0) {
	  alert("Чтобы назначить задание, выберите тему из списка"); return;
	}
	form1.submit();
}
//--></SCRIPT>
<script language="JavaScript" src="mark.js"></script>
<SCRIPT><!-- <%
End If

If strCurrElemType="ch" Then %>
var currElementID = '<%=strCurrChapterID%>';
<%ElseIf strCurrElemType="sc" Then %>
var currElementID = '<%=strCurrSectionID%>';
<%ElseIf strCurrElemType="ls" Then %>
var currElementID = '<%=strCurrLessonID%>';
<%ElseIf strCurrElemType="pg" Then %>
var currElementID = '<%=strCurrPageID%>';
<%Else %>
var currElementID = '0';
<%End If %>
var currElementType = '<%=strCurrElemType%>';
var currClID = '<%=strCurrChapterID%>';
var currUnID = '<%=strCurrSectionID%>';
var currLsID = '<%=strCurrLessonID%>';
var currAsID = '<%=strCurrPageID%>';
var prevNSelImg = '<%=strCurrpImg%>';
<%
If Not bReadOnly Then%>
function prepareHiddenItems() {
	var form = document.forms[0];
	var form1 = document.forms[1];
	var aTmpArray, aEl, aParam, aToAdd, i=3;<%
	' prepare to submit all hidden items if they are not checked %>
	while (i<form1.elements.length) {
		if (form1.elements[i].name=='HPARAM') {

			aParam = form1.elements[i].value;
			aToAdd = 1;
			for (var j=0; j<form.elements.length; j++)
				if ((form.elements[j].type=='checkbox') && (form.elements[j].checked)) {
					aTmpArray = form.elements[j].value.split(';;');
					if (aParam==aTmpArray[0]) { aToAdd=0; break; }
				}
			if (aToAdd) {
			 aEl = document.createElement('input');
			 aEl.type = 'hidden';
			 aEl.name = 'HPARAM';
			 aEl.value = aParam; form.appendChild(aEl);
			 aEl = document.createElement('input');
			 aEl.type = 'hidden';
			 aEl.name = 'HNAME';
			 aEl.value = form1.elements[i+1].value; form.appendChild(aEl);
			 i++;
			}
		}
		i++;
	}<%
	' prepare to submit all checked items %>
	for (i=0; i<form.elements.length; i++)
		if (form.elements[i].type=='checkbox')
			if (form.elements[i].checked && checkNames(form.elements[i], ['PG_AS', 'AS', 'PG', 'TheoreticalChapter'])) {
				aTmpArray = form.elements[i].value.split(';;');
				aEl = document.createElement('input');
				aEl.type = 'hidden';
				aEl.name = 'HPARAM';
				aEl.value = aTmpArray[0]; form.appendChild(aEl);
				aEl = document.createElement('input');
				aEl.type = 'hidden';
				aEl.name = 'HNAME';
				aEl.value = aTmpArray[1]; form.appendChild(aEl);
			}
}<%
End If%>
function openCurrChapter(chID, pImg){<%
If Not bReadOnly Then%>
	prepareHiddenItems();<%
End If%>
	var form = document.forms[0];
	form.elements["CHID"].value = chID;
	form.elements["ELEMTYPE"].value = 'ch';
	form.elements["PRESERVETREE"].value = 'Y';
	form.elements["PIMG"].value = pImg;
	form.elements["SCTOP"].value = document.body.scrollTop;
	form.submit();
}<%
If bSection Then%>
function openCurrSection(chID,scID,pImg){<%
If Not bReadOnly Then%>
	prepareHiddenItems();<%
End If%>
	var form = document.forms[0];
	form.elements["CHID"].value = chID;
	form.elements["SCID"].value = scID;
	form.elements["ELEMTYPE"].value = 'sc';
	form.elements["PRESERVETREE"].value = 'Y';
	form.elements["PIMG"].value = pImg;
	form.elements["SCTOP"].value = document.body.scrollTop;
	form.submit();
}<%
End If%>
function openCurrLsn(chID,scID,lsID,pImg){
	var form = document.forms[0];<%
If Not bReadOnly Then%>
	var form1 = document.forms[1];
	var aTmpArray, aEl, i=3;
	var sMask = '.bdf;'+lsID+';';<%

	' prepare to submit items outside the selected lesson %>
	while (i<form1.elements.length) {
		if ((form1.elements[i].name=='HPARAM') && (form1.elements[i].value.indexOf(sMask)<=0)) {
			aEl = document.createElement('input');
			aEl.type = 'hidden';
			aEl.name = 'HPARAM';
			aEl.value = form1.elements[i].value; form.appendChild(aEl);
			aEl = document.createElement('input');
			aEl.type = 'hidden';
			aEl.name = 'HNAME';
			aEl.value = form1.elements[i+1].value; form.appendChild(aEl);
			i++;
		}
		i++;
	}<%

	' add items which are checked in the selected lesson %>
	for (var i=0; i<form.elements.length; i++)
		if (isMaskedCheckbox(form.elements[i], sMask))
			if (form.elements[i].checked && checkNames(form.elements[i], ['PG_AS', 'AS', 'PG', 'TheoreticalChapter'])) {
				aTmpArray = form.elements[i].value.split(';;');
				  aEl = document.createElement('input');
				  aEl.type = 'hidden';
				  aEl.name = 'HPARAM';
				  aEl.value = aTmpArray[0]; form.appendChild(aEl);
				  aEl = document.createElement('input');
				  aEl.type = 'hidden';
				  aEl.name = 'HNAME';
				  aEl.value = aTmpArray[1]; form.appendChild(aEl);
			}<%
End If%>
	form.elements["CHID"].value = chID;
	form.elements["SCID"].value = scID;
	form.elements["LSID"].value = lsID;
	form.elements["ELEMTYPE"].value = 'ls';
	form.elements["PRESERVETREE"].value = 'Y';
	form.elements["PIMG"].value = pImg;
	form.elements["SCTOP"].value = document.body.scrollTop;
	form.submit();
}
//--></SCRIPT>
</HEAD>
<BODY background="images/back.gif" <%=BODY_PARAMS%><%If nScrollTop>0 Then%> onLoad="window.scrollTo(0,<%=nScrollTop%>)"<%End If%>>
<H2 ALIGN="CENTER"><font face="Verdana, Arial, Helvetica" color="#120DC5"><%=HTML_TITLE%></font></H2>

<FORM NAME="chaptertree" ACTION="index.asp" METHOD="POST">
<INPUT TYPE="HIDDEN" NAME="ID" VALUE="<%=strID%>">
<INPUT TYPE="HIDDEN" NAME="AT" VALUE="<%=strToken%>">
<INPUT TYPE="HIDDEN" NAME="TTSURL" VALUE="<%=strTTSURL%>">
<INPUT TYPE="HIDDEN" NAME="CHID" VALUE="<%=strCurrChapterID%>">
<INPUT TYPE="HIDDEN" NAME="SCID" VALUE="<%=strCurrSectionID%>">
<INPUT TYPE="HIDDEN" NAME="LSID" VALUE="<%=strCurrLessonID%>">
<INPUT TYPE="HIDDEN" NAME="ELEMTYPE" VALUE="<%=strCurrElemType%>">
<INPUT TYPE="HIDDEN" NAME="PIMG" VALUE="<%=strCurrpImg%>">
<INPUT TYPE="HIDDEN" NAME="PRESERVETREE" VALUE="N">
<INPUT TYPE="HIDDEN" NAME="SHOWTREE" VALUE="Y">
<INPUT TYPE="HIDDEN" NAME="RO" VALUE="<%If bReadOnly Then%>1<%End If%>">
<INPUT TYPE="HIDDEN" NAME="SCTOP" VALUE="0">

<div align="center">
	<table width="95%" border="0" cellspacing="0" cellpadding="0" bgcolor="#5b91c0">
	  <tr><td>&nbsp;</td></tr>
	  <tr><td>
		  <div align="center"> 
			<table width="80%" border="1" cellspacing="0" cellpadding="7">
			  <tr bgcolor="#83b2db"><td>
				<div align="center"><font face="Verdana, Arial, Helvetica" size="+1" color="white"><b>
				  <%If bReadOnly Then%>Просмотр тем заданий<%Else%>Выберите тему, по которой Вы хотите назначить задание<%End If%>
				  </b></font></div>
			  </td></tr>
<!-- #INCLUDE FILE="lnames_inc.asp" -->
			</table>
<p><%If Not bReadOnly Then%><a href="JavaScript:Save()" onMouseDown="setImgState('images/btn_save','btn_save',2);" onMouseOver="setImgState('images/btn_save','btn_save',1); self.status='Сохранить выбранное задание'; return true;" onMouseOut="setImgState('images/btn_save','btn_save',0); self.status='';"><img name="btn_save" src="images/btn_save.gif" alt="[Сохранить]" border=0 width="116" height="35"></a>&nbsp;&nbsp;&nbsp;<%End If%>
<a href="JavaScript:Close()" onMouseDown="setImgState('images/btn_back','btn_back',2);" onMouseOver="setImgState('images/btn_back','btn_back',1); self.status='Вернуться без изменений'; return true;" onMouseOut="setImgState('images/btn_back','btn_back',0); self.status='';"><img name="btn_back" src="images/btn_back.gif" alt="[Вернуться]" border=0 width="116" height="35"></a></p>
		  </div>
	  </td></tr>
	</table>
</div>
</FORM>
<%
If Not bReadOnly Then%>
<FORM ACTION="/asp/t_saveproblems.asp" METHOD="POST">
<INPUT TYPE="HIDDEN" NAME="ID" VALUE="<%=strID%>">
<INPUT TYPE="HIDDEN" NAME="AT" VALUE="<%=strToken%>">
<INPUT TYPE="HIDDEN" NAME="LAID" VALUE="<%=LAID%>">
<INPUT TYPE="HIDDEN" NAME="lexile" VALUE="">
<%
For i=1 To Request("HPARAM").Count
  Response.Write "<INPUT TYPE=""HIDDEN"" NAME=""HPARAM"" VALUE=""" & Request("HPARAM")(i) &""">" &Chr(13)&Chr(10)& _
				"<INPUT TYPE=""HIDDEN"" NAME=""HNAME"" VALUE=""" & Request("HNAME")(i) &""">" &Chr(13)&Chr(10)
Next
%>
</FORM><%
End If%>
<div align="center">
	<table width="95%" border="0" cellspacing="0" cellpadding="0">
		<tr align="left" valign="top"><td colspan="2"><font color="blue" size="+1">
			<H4>Примеры экранов:</H4>
		</font></td></tr>
		<tr align="left" valign="top">
			<td width="435"><img src="../<%=LAID%>_1.jpg" width="420" height="315" border="1"></td>
			<td width="435"><img src="../<%=LAID%>_2.jpg" width="420" height="315" border="1"></td>
		</tr>
		<tr align="left" valign="top"><td colspan="2"><font color="blue" size="+1"><br>
<p>По всем дополнительным вопросам можете обращаться на сайт компании "Новый Диск" - <a href="http://www.school.nd.ru" target="_blank">www.school.nd.ru</a> или по телефону +7 (495) 785-65-14.</p>
		</font></td></tr>
	</table>
</div>
<HR>
<I><%=COPYRIGHT%></I>
</BODY>
</HTML>
