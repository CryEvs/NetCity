<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE virtual="/asp/Messages/SendSaveMsg_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
'DMID=draft MESSAGEID, DRAFT if new draft, empty if not draft

Dim sMsgID, sTO, sCC, sBCC, sSubj, sBody, sLTO, sLCC, sLBCC, sDraftID
Dim sAttachment, sAName, cAType, sPrevPage
Dim bFromAdmin, bRepReloadType, bSaveOnly, bCloseAfter
Dim sNewMsgID, cAction, sBoxID, bNewMessageNeedNotify
Dim objForm
Dim bIsShortReport
Dim reportPartsLen, reportPart, reportInfo

Sub ReadState()
	Dim rsMsg, sPrefix, sHeader
	Dim stAttachmentArr, i

	bForwardMsg = CBool(GetSafeStr(Request("FRWRD"), 1, "") = "1")
	If bForwardMsg Then
		bCloseAfter = False
		sBoxID = bxDraft
		sMsgID = GetSafeLng(Request("MID"), Null)

		Set rsMsg = objNSNET.GetMessageInfo(sMsgID, strUserId)
		TestError obLanguage("Messages", "kErrNotFoundMsg")
		if rsMsg.EOF then GenerateError obLanguage("Messages","kErrNotFoundMsg")

		sSubj = GetSafeStr(rsMsg("SUBJ"), kSubjectLength, "")
		sBody = rsMsg("TEXT")

		sPrefix = ""
		If InStr(1, sSubj, "Fw:") <> 1 Then sPrefix ="Fw: "
		sSubj = sPrefix & sSubj
		sSubj = MakeStringOfSafeLength(sSubj, kSubjectLength)

		sHeader = GetHeader(rsMsg)
		sBody = sHeader & sBody

		sAttachment = GetSafeStr(rsMsg("ATTACHMENT"), -1, "")
		cAType = GetSafeStr(rsMsg("ATYPE"), -1, "")
		sAName = GetSafeStr(rsMsg("ATITLE"), -1, "")

		sTO			= ""
		sCC			= ""
		sBCC		= ""
		sLTO		= ""
		sLCC		= ""
		sLBCC		= ""

		sPrevPage 	= GetSafeStr(Request("PP"), 400, "/asp/Messages/mailbox.asp")
		sDraftID 	= kSaveDraftFlag
		bSaveOnly	= True
		bNewMessageNeedNotify = False

		Exit Sub
	End If

	Call comHelper.AntiForgeryHelper.ValidateRequestToken()

	bRepReloadType = CBool(GetSafeStr(Request("RT"), 1, "") = "R")
	bCloseAfter = False
	sBoxID = GetSafeID(Request("MBID"), bxSent)
	sMsgID		= GetSafeLng( Request("MID"), 0 )

	sTO			= Trim(GetSafeStr(Request("ATO"), 4000, ""))
	sCC			= Trim(GetSafeStr(Request("ACC"), 4000, ""))
	sBCC		= Trim(GetSafeStr(Request("ABC"), 4000, ""))

	sLTO		= Replace(Trim(GetSafeStr(Request("LTO"), 4000, "")), "&quot;", """")
	sLCC		= Replace(Trim(GetSafeStr(Request("LCC"), 4000, "")), "&quot;", """")
	sLBCC		= Replace(Trim(GetSafeStr(Request("LBC"), 4000, "")), "&quot;", """")

	sSubj		= Trim(GetSafeStr( Request("SU"), 150, ""))
	sBody		= Trim(CStr(Request("BO")))
	sAName		= GetSafeStr(Request("NA"), 150, "")
	cAType		= GetSafeStr(Request("TA"), 1, "")
	sPrevPage 	= GetSafeStr(Request("PP"), 400, "/asp/Messages/mailbox.asp")
	sDraftID 	= GetSafeStr(Request("DMID"), 20, "")
	bFromAdmin	= Request("ADM") = "Y"
	bSaveOnly	= CBool(GetSafeStr(Request("SO"), 1, "") = "Y")
	bNewMessageNeedNotify = CBool(GetSafeStr(Request("NEEDNOTIFY"), 1, "") = "1")
		
	bIsShortReport = Not IsDull(Request("STMSGREPORT"))
	If bIsShortReport Then
		sAttachment = GetSafeStr(Request("STMSGREPORT"), -1, "")
	Else
		reportInfo = obTokenMgr.GetData(strToken, stMsgReport)
		obTokenMgr.SetData strToken, stMsgReport, Null
			
		If IsArray(reportInfo) Then
			stAttachmentArr = reportInfo

			i = 0
			While i < Ubound(stAttachmentArr)
				sAttachment = sAttachment & stAttachmentArr(i)
				i = i + 1
			WEnd
		Else
			reportPartsLen = reportInfo

			i = 0
			While i < reportPartsLen
				reportPart = obTokenMgr.GetData(strToken, stMsgReport & "_" & CStr(i))
				obTokenMgr.SetData strToken, stMsgReport & "_" & CStr(i), Null
				sAttachment = sAttachment & reportPart
				i = i + 1
			WEnd
		End If
	End If
		
End Sub

Sub Main()
	Dim transaction, rsAttach
	On Error Resume Next

	If bCloseAfter Then Exit Sub
	bPaper = False
	sNewMsgID = Send(sBoxID, IIf(bForwardMsg, 0, sMsgID), sTO, sCC, sSubj, sBody, sLTO, sLCC, sBCC, sLBCC, sAName, sAttachment, cAType, sDraftID, bNewMessageNeedNotify)
	
	If bForwardMsg Then
		Call objNSNET.ForwardMessage(sMsgID, sNewMsgID, strUserID)
	End If

	If Not bRepReloadType Then obTokenMgr.SetData strToken, stMailHasBeenSent, 1
	obTokenMgr.SetData strToken, stMsgReport, Null

	Set objForm = Server.CreateObject("NetCity.Storage")
	If bRepReloadType Then objForm.Add "RT", "R"
	objForm.Add "MBID", sBoxID
	objForm.Add "MID", sNewMsgID

	If bSaveOnly Then
		objForm.Add "DMID", sNewMsgID
		objForm("MBID") = Cstr(bxDraft)
		objForm.Add "PP", sPrevPage
		objForm.Add "A", "E"
		objForm.Add "BCC", sBCC
		objForm.Add "LBCC", sLBCC
		cAction = objForm("A")
		If bRepReloadType Then obTokenMgr.SetData strToken, stMailHasBeenSent, 1
		Call obTokenMgr.SetData(strToken,"QA_dct", objForm )
		Call obTokenMgr.SetData(strToken, stBackPage, "/asp/Messages/composemessage.asp")
		If Not IsDull(Request("DESTINATION")) Then RedirectTo Request("DESTINATION"), null Else RedirectTo "composemessage.asp", null
	Else
		If bPaper Then cAction	= objForm("A")
	End If
End Sub

Sub WritePostScripts()
	%>
	<script type="text/javascript">
		isHaveToLogout = false;
		<%If bRepReloadType Then%>
		top.opener.alert(language.Generic.Messages.kMsgPosted + '.');
		window.forceClosing = true;
		window.close();
		<%Else%>
		if (!top.opener.closed)
		{
			top.opener.location.href = '/asp/messages/mailbox.asp?AT=<%=strToken%>&SVER=<%=getVer()%>&MID=<%=sNewMsgID%>&A=<%=cAction%>';
			window.forceClosing = true;
			window.close();
		}
		else
		{
			location.href = '/asp/messages/mailbox.asp?AT=<%=strToken%>&SVER=<%=getVer()%>&MID=<%=sNewMsgID%>&A=<%=cAction%>';
		}
		<%End If%>
	</script>
	<%
End Sub%>