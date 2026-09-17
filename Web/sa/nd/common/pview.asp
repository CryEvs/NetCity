<%@ Language=VBScript %>
<%
Option Explicit
Response.Buffer = TRUE
'Response.Expires = 0
'Response.AddHeader "pragma", "no-cache"
%>
<!-- #INCLUDE FILE="common.asp" -->
<%
CheckCNTeacherLogin
Dim strLesson, strParam, aParam, nLessonID, nPageID, nAssignmentID, sChapterID, sSectionID
Dim strTheoreticalParamter, strFileName

Dim strCurrElemType, strCurrChapterID, strCurrSectionID, strCurrLessonID, strCurrPageID
Dim strTreeState, strPreserveTree, strNotSwitch, cImg, csImg, cnsImg, cpImg, strCurrpImg
Dim strExpCOl, strExpElem
Dim sPgChks, sPgAsAllChks, sPgAsMChks, sPgAsChks, sAsChks
Dim soXML, soXSL, strXSLFile

strParam = Request("parameters")
aParam = Split(strParam,";")

strFileName = aParam(0)
strTheoreticalParamter = aParam(1)
If UBound(aParam)>3 Then
	nLessonID = getSafeLng(aParam(1), -1)
	nPageID = getSafeLng(aParam(2), -1)
	nAssignmentID = getSafeLng(aParam(3),-1)
Else
	nLessonID = getSafeLng(aParam(1), -1)
	nPageID = getSafeLng(aParam(2), -1)
	nAssignmentID = -1
End If

strLesson = "Урок " & CStr(nLessonID)

Set soXSL = CreateObject("MSXML2.FreeThreadedDOMDocument")
soXSL.async = false
soXSL.validateOnParse = False

If bSection Then strXSLFile="sectionsReadOnly.xsl" Else strXSLFile="nosectionsReadOnly.xsl"
soXSL.Load(Server.MapPath("/" & LAID & "/common/" & strXSLFile))
If soXSL.parseError.errorCode<>0 Then
	Response.Write soXSL.parseError.reason
End If 

Set soXML = CreateObject("MSXML2.FreeThreadedDOMDocument")
soXML.Load(Server.MapPath("/" & LAID & "/" & LAID & ".xml"))
If soXML.parseError.errorCode<>0 Then
	Response.Write soXML.parseError.reason
End If 

if getSafeLng(strFileName,-1) = -1 Then
	If bSection Then
		sChapterID = FindChapterByFilename(strFileName)
		sSectionID = FindSectionByFilename(strFileName)
	Else
		sChapterID = FindChapterByFilename_NoSections(strFileName)
	End If
else
	If bSection Then
		sChapterID = jFindChapter(nLessonID)
		sSectionID = jFindSection(nLessonID)
	Else
		sChapterID = jFindChapter_NoSections(nLessonID)
	End If
end if

AddAuxiliaryFields(soXML)

Sub AddAuxiliaryFields(theoXML)
	Dim aPNodes, aPNode, aLsNodes, aLsNode
	Dim aChNodes, aChNode, aScNodes, aScNode
	Dim aLessonID, aPageID, aParentPageID, aChildNodes, aChildNode
	Dim aChapterName, aSectionName, aLessonName
	
	if strTheoreticalParamter = "Theoretical" Then
		set aChNode = theoXML.selectSingleNode("//Chapter[0]")		
		aChNode.AppendChild(theoXML.CreateElement("Checked"))
		aChNode.lastChild.text = kChecked
	end if
	
	Set aChNodes = theoXML.selectNodes("//Chapter")
	For Each aChNode In aChNodes
		aChNode.AppendChild(theoXML.CreateElement("Opened"))
		If aChNode.getAttribute("ID") = sChapterID Then
			aChNode.lastChild.text = kOpened

			If bSection Then
				Set aScNodes = aChNode.selectNodes("Section")
				For Each aScNode In aScNodes
					aScNode.AppendChild(theoXML.CreateElement("Opened"))
					If aScNode.getAttribute("ID") = sSectionID Then
						aScNode.lastChild.text = kOpened

						Set aLsNodes = aScNode.selectNodes("Lesson")
						ParseLessonNodes theoXML, aLsNodes
					Else
						aScNode.lastChild.text = kClosed
					End If
				Next
			Else
				Set aLsNodes = aChNode.selectNodes("Lesson")
				ParseLessonNodes theoXML, aLsNodes
			End If

		Else
			aChNode.lastChild.text = kClosed
		End If
	Next
End Sub

Sub ParseLessonNodes( theoXML, theLsNodes )
	Dim aNodes, aNode, aPNodes, aPNode, aLsNodes, aLsNode
	Dim aANodes, aANode, aChNodes, aChNode, aScNodes, aScNode
	Dim aLessonID, aPageID, aParentPageID, aChildNodes, aChildNode
	Dim aChapterName, aSectionName, aLessonName

	For Each aLsNode In theLsNodes
		aLsNode.AppendChild(theoXML.CreateElement("Opened"))
		aLessonID = aLsNode.getAttribute("ID")
		If CStr(aLessonID) = CStr(nLessonID) Then
			aLsNode.lastChild.text = kOpened
			aPageID = 1
			Set aPNodes = aLsNode.selectNodes("Page")
			For Each aPNode In aPNodes
				aPNode.AppendChild(theoXML.CreateElement("Checked"))
				If CStr(aPageID) = CStr(nPageID) And nAssignmentID = -1 Then
					aPNode.lastChild.text = kChecked
				Else
					aPNode.lastChild.text = kUnchecked
				End If

				aPNode.setAttribute "ID", CStr(aPageID)
				Set aANodes = aPNode.selectNodes("Assignment")
				For Each aANode In aANodes
					aANode.AppendChild(theoXML.CreateElement("Checked"))
					If nAssignmentID = -1 Then
						aANode.lastChild.text = kUnchecked
					Else
						If aANode.text = CStr(nAssignmentID) Then
							aANode.lastChild.text = kChecked
						Else
							aANode.lastChild.text = kUnchecked
						End If
					End If
					aANode.setAttribute "ID", aANode.text
				Next	
				aPageID = aPageID + 1
			Next
		Else
			aLsNode.lastChild.text = kClosed
		End If
	Next
End Sub
%>

<SCRIPT LANGUAGE="JSCRIPT" RUNAT=SERVER>
	function jFindChapter(theLessonID)
	{
		var ChapterNode = soXML.selectSingleNode("//Chapter[Section/Lesson/@ID="+ theLessonID + "]");
		if (ChapterNode!=null)
			return ChapterNode.getAttribute("ID");
	}
	function jFindChapter_NoSections(theLessonID)
	{
		var ChapterNode = soXML.selectSingleNode("//Chapter[Lesson/@ID="+ theLessonID + "]");
		if (ChapterNode!=null)
			return ChapterNode.getAttribute("ID");
	}
	function jFindSection(theLessonID)
	{
		var SectionNode = soXML.selectSingleNode("//Chapter/Section[Lesson/@ID="+ theLessonID + "]");
		if (SectionNode!=null)
			return SectionNode.getAttribute("ID");
	}

	
	function FindChapterByFilename(Filename)
	{
		var ChapterNode = soXML.selectSingleNode("//Chapter[Section/Lesson/Page[@Filename=\"" + Filename + "\"]]");
		if (ChapterNode!=null)
			return ChapterNode.getAttribute("ID");
	}
	function FindChapterByFilename_NoSections(Filename)
	{
		var ChapterNode = soXML.selectSingleNode("//Chapter[Lesson/Page[@Filename=\"" + Filename + "\"]]");
		if (ChapterNode!=null)
			return ChapterNode.getAttribute("ID");
	}
	function FindSectionByFilename(Filename)
	{
		var SectionNode = soXML.selectSingleNode("//Chapter/Section[Lesson/Page[@Filename=\"" + Filename + "\"]]");
		if (SectionNode!=null)
			return SectionNode.getAttribute("ID");
	}
</SCRIPT>

<HTML><HEAD>
<TITLE><%=HTML_TITLE%> - просмотр</TITLE>
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=utf-8">
<SCRIPT><!--
function setImgState( img, imgId, state ) {
	var newImg = new Image();
	if( state == 1) newImg.src = img + '_m.gif';
	else newImg.src = img + '.gif';
	document[imgId].src = newImg.src;
}
function Close() {
	if( !confirm('Вы уверены, что хотите закрыть это окно?') )
		return;
	if( window.parent )
		window.parent.window.close();
	else
		window.close();
}
//--></SCRIPT>
</HEAD>
<BODY onLoad="" background="images/back.gif" <%=BODY_PARAMS%>>
<H2 ALIGN="CENTER"><font face="Verdana, Arial, Helvetica" color="#120DC5"><%=HTML_TITLE%> - просмотр</font></H2>
<div align="center">
	<table width="90%" border="0" cellspacing="0" cellpadding="0" bgcolor="#5b91c0">
	  <tr><td>&nbsp;</td></tr>
	  <tr><td>
		<div align="center">
			<table width="80%" border="1" cellspacing="0" cellpadding="7">
<!-- #INCLUDE FILE="lnames_inc.asp" -->
			</table>
<p><a href="JavaScript:Close()" onMouseDown="setImgState('images/btn_back','btn_back',2);" onMouseOver="setImgState('images/btn_back','btn_back',1); self.status='Вернуться без изменений'; return true;" onMouseOut="setImgState('images/btn_back','btn_back',0); self.status='';"><img name="btn_back" src="images/btn_back.gif" alt="[Вернуться]" border=0 width="116" height="35"></a></p>
		</div>

	  </td></tr>
	</table>
</div>
<HR>
<I><%=COPYRIGHT%></I>
</BODY>
</HTML>
