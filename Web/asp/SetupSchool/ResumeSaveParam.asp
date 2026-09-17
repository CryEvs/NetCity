<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strAFileName, strDestination, strADescription, strDelAttach, j, strEditUserID
Dim intPos, objForm

strDestination = Request.Item("DESTINATION")
strADescription = GetSafeStr( Request.Item("ADESC"),4000, "" )
intPos = CInt(Instr(strDestination, "Edit"))
strEditUserID = GetSafeStr( Request.Item("UID"),200, "" )

If ((intPos=0) and (Request.Form("delattach").Count<>0)) Then
	For j=1 To Request.Form("delattach").Count
		strDelAttach = GetSafeLng ( Request.Form("delattach")(j) ,0)
		Call objNSNET.RemoveFileAttachment(strDelAttach)
		TestError obLanguage("SetupSchool","kErrDelAttachment")
	Next
End If

strAFileName = GetSafeStr( Request.Item("AFileName"),200, "" )

Set objForm = Server.CreateObject( "NetCity.Storage" )
objForm.Add "ATTACHMENTID", 0	' if ATTACHMENTID=0 - then new attachment will be added else  attachment will be replaced
objForm.Add "ADESC", strADescription
objForm.Add "AFileName", strAFileName
objForm.Add "EDITUSERID", strEditUserID
Call obTokenMgr.SetData(strToken,"QA_dct", objForm )
Response.Redirect strDestination
%>
