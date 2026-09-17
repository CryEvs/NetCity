<%'© 2007-2015 IRTech. All rights reserved.

'common functions
Function ShowButtonBase( strLink, strText, strImageName, strAlt, strClass, bDisabled )
	ShowButtonBase = objHtmlHelper.ShowButtonBase( "JavaScript:" & strLink, strText, strImageName, strAlt, strClass, , bDisabled)
End Function

Function ButtonBaseId( strLink, strText, strImageName, strAlt, strClass, id, bDisabled, bVisible)
	ButtonBaseId = objHtmlHelper.ShowButtonBase( "JavaScript:" & strLink, strText, strImageName, strAlt, strClass, id, bDisabled, bVisible)
End Function

Sub ShowButtonBaseId( strLink, strText, strImageName, strAlt, strClass, id, bDisabled, bVisible)
	Response.Write ButtonBaseId( strLink, strText, strImageName, strAlt, strClass, id, bDisabled, bVisible)
End Sub

Sub ButtonBase( strLink, strText, strImageName, strAlt, strClass, bDisabled )
	Response.Write ShowButtonBase( strLink, strText, strImageName, strAlt, strClass, bDisabled )
End Sub

'todo. заменить на Button или ShowButtonBase
Function ShowButton( strName, strImageName, strLink, strStatus, strAlt )
	'If IsDull(strImageName) Then strImageName = strName
	If IsDull(strAlt) Then strAlt = strStatus
	ShowButton = ShowButtonBase( strLink, strAlt, strImageName, strStatus, "", False )
End Function

Sub DropDownButton(strMainName, arrButtons)
	DropDownButtonEx strMainName, Null, "btn-primary", arrButtons
End Sub

Sub DropDownButtonEx(strMainName, strMainIcon, strMainClass, arrButtons)
	Dim i, strButtonJs, strButtonName, strButtonHint, strButtonImg%>

	<div class="btn-group">
		<button type="button" class="btn <%=strMainClass%> dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
			<%If Not IsDull(strMainIcon) Then%><span class="<%=strMainIcon%>"></span> <%End If %>
			<%=strMainName%> <span class="caret"></span>
		</button>
		<ul class="dropdown-menu" role="menu"><%
			For i = 0 to Ubound(arrButtons) Step 4
				strButtonJs = arrButtons(i)
				strButtonHint = arrButtons(i + 1)
				strButtonImg = arrButtons(i + 2)
				strButtonName = arrButtons(i + 3)%>
				<li><a href="javascript:<%=strButtonJs%>" title="<%=strButtonHint%>"><%=IIF(Not IsDull(strButtonImg), "<span class=""glyphicon glyphicon-" & strButtonImg & """aria-hidden=""true""></span> ", "")%><%=strButtonName%></a></li><%
			Next%>
		</ul>
	</div><%
End Sub

'short functions
Sub Button( theJSCall, strText, strHint, strImage)
	Response.Write ButtonStr( theJSCall, strText, strHint, strImage)
End Sub
Function ButtonStr( theJSCall, strText, strHint, strImage)
	ButtonStr = ButtonWithClass( theJSCall, strText, strHint, strImage, "" )
End Function
Function ButtonWithClass( theJSCall, strText, strHint, strImage, strClass )
	rw ButtonStrWithClass( theJSCall, strText, strHint, strImage, strClass )
End Function
Function ButtonStrWithClass( theJSCall, strText, theHint, strImage, strClass )
	ButtonStrWithClass = ShowButtonBase( theJSCall, strText, strImage, theHint, strClass, False )
End Function
Sub DisabledButton( theJSCall, strText, theHint, strImage )
	Response.Write ShowButtonBase( theJSCall, strText, strImage, theHint, "inlineButton btn-default", True ) 
End Sub
Sub InlineButton( theJSCall, theHint, image )
	Response.Write ShowButtonBase( theJSCall, theHint, image, theHint, "inlineButton btn-default", False ) 
End Sub
Sub ImageButton( theJSCall, theHint, image)
	Response.Write ImageButtonStr( theJSCall, theHint, image)
End Sub
Function ImageButtonStr( theJSCall, theHint, image)
	ImageButtonStr = ButtonStr(theJSCall, "", theHint, image)
End Function

Sub ArrowUpButton( theJSCall, theHint )
	Call ImageButton(theJSCall, theHint, "glyphicon glyphicon-circle-arrow-up")
End Sub
Sub ArrowDownButton( theJSCall, theHint )
	Call ImageButton(theJSCall, theHint, "glyphicon glyphicon-circle-arrow-down")
End Sub
Sub ArrowLeftButton( theJSCall, theHint )
	Call ImageButton(theJSCall, theHint, "glyphicon glyphicon-circle-arrow-left")
End Sub
Sub ArrowRightButton( theJSCall, theHint )
	Call ImageButton(theJSCall, theHint, "glyphicon glyphicon-circle-arrow-right")
End Sub
Sub SimpleButton( theJSCall, theHint)
	Response.Write ShowButtonBase( theJSCall, theHint, "", theHint, "", False )
End Sub
Sub ButtonAttachFile( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kAttachFile"), "glyphicon glyphicon-link", theHint, "", False ) 
End Sub
Sub ButtonCreate( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kAdd"), "glyphicon glyphicon-plus-sign", theHint, "btn-info", False ) 
End Sub
Sub ButtonApply( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kApply"), "glyphicon glyphicon-search", theHint, "", False ) 
End Sub
Sub ButtonChoose( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kChoose"), "glyphicon glyphicon-ok-sign", theHint, "btn-info", False ) 
End Sub
Sub ButtonSearch( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kSearch"), "glyphicon glyphicon-search", theHint, "", False ) 
End Sub
Sub ButtonAdd(theJSCall, theHint)
	Call ButtonAddEx(theJSCall, theHint, obLanguage("Buttons","kAdd"))
End Sub
Sub ButtonAddEx(theJSCall, theHint, theText)
	Response.Write ShowButtonBase( theJSCall, theText, "glyphicon glyphicon-plus-sign", theHint, "btn-info", False ) 
End Sub
Sub ButtonDel( theJSCall, theHint )
	Call ButtonDelEx(theJSCall, theHint, obLanguage("Buttons","kRemove"))
End Sub
Sub ButtonDelEx(theJSCall, theHint, theText)
	Response.Write ShowButtonBase( theJSCall, theText, "glyphicon glyphicon-minus-sign", theHint, "btn-danger", False ) 
End Sub
Sub ButtonReset( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kReset"), "glyphicon glyphicon-repeat", theHint, "btn-warning", False ) 
End Sub
Sub ButtonCopy( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kCopy"), "glyphicon glyphicon-duplicate", theHint, "", False ) 
End Sub
Sub ButtonContinue( theJSCall, theHint )
	If IsDull(theHint) Then theHint = obLanguage("Buttons","kContinue")
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kContinue"), "glyphicon glyphicon-new-window", theHint, "", False ) 
End Sub
Sub ButtonExit( theJSCall, theHint )
	If IsDull(theHint) Then theHint = obLanguage("Common","kExit")
	Response.Write ShowButtonBase( theJSCall, obLanguage("Common","kExit"), "glyphicon glyphicon-off", theHint, "", False ) 
End Sub
Sub ButtonCancel( theJSCall, theHint )
	If IsDull(theHint) Then theHint = obLanguage("Buttons","kBack")
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kBack"), "glyphicon glyphicon-arrow-left", theHint, "", False ) 
End Sub
Sub ButtonSave( theJSCall, theHint )
	If IsDull(theHint) Then theHint = obLanguage("Buttons","kSave")
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kSave"), "glyphicon glyphicon-floppy-save", theHint, "btn-primary", False ) 
End Sub
Sub ButtonRefresh( theJSCall, theHint )
	If IsDull(theHint) Then theHint = obLanguage("Buttons","kRefresh")
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kRefresh"), "glyphicon glyphicon-refresh", theHint, "", False ) 
End Sub
Sub ButtonChange( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kChange"), "glyphicon glyphicon-pencil", theHint, "btn-warning", False ) 
End Sub
Sub ButtonEdit( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kEdit"), "glyphicon glyphicon-pencil", theHint, "btn-warning", False ) 
End Sub
Sub ButtonView( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kView"), "glyphicon glyphicon-eye-open", theHint, "", False ) 
End Sub
Sub ButtonImport( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kImport"), "glyphicon glyphicon-import", theHint, "", False ) 
End Sub
Sub ButtonPrintCommon( theJSCall, theHint )
	Call ButtonPrintCommonEx( theJSCall, obLanguage("Buttons","kPrint"), theHint)
End Sub
Sub ButtonPrintCommonEx( theJSCall, theText, theHint )
	theHint = IIF(IsDull(theHint),"&nbsp;", theHint)
	Response.Write ShowButtonBase( theJSCall, theText, "glyphicon glyphicon-print", theHint, "", False ) 
End Sub
Sub ButtonPrint(js)
	Call ButtonPrintCommon(js, obLanguage("Common","kBtnPrint"))
End Sub
Sub ButtonPrintIcon(js)
	Call ButtonPrintCommonEx(js, "", obLanguage("Common","kBtnPrint"))
End Sub
Sub ButtonExportCommon( theJSCall, theHint )
	Call ButtonExportCommonEx( theJSCall, obLanguage("Buttons","kExport"), theHint)
End Sub
Sub ButtonExportCommonEx( theJSCall, theText, theHint)
	theHint = IIF(IsDull(theHint),"&nbsp;", theHint)
	Response.Write ShowButtonBase( theJSCall, theText, "glyphicon glyphicon-export", theHint, "", False ) 
End Sub
Sub ButtonExport(js)
	Call ButtonExportCommonEx( js, obLanguage("Common","kBtnExcel"), obLanguage("Common","kBtnExcel"))
End Sub
Sub ButtonExportIcon(js)
	Call ButtonExportCommonEx( js, "", obLanguage("Common","kBtnExcel"))
End Sub
Sub ButtonSend( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kSend"), "glyphicon glyphicon-envelope", theHint, "", False ) 
End Sub
Sub ButtonGenerate( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kGenerate"), "glyphicon glyphicon-random", theHint, "generate-report-button", False ) 
End Sub
Sub ButtonGenerateGraph( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, "", "glyphicon glyphicon-stats", theHint, "", False ) 
End Sub
Sub ButtonGeneratePdf( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kGenerate") & " PDF", "glyphicon glyphicon-random", theHint, "generate-report-button-pdf", False ) 
End Sub
Sub ButtonGenerateExcel( theJSCall, theHint )
	Response.Write ShowButtonBase( theJSCall, obLanguage("Buttons","kGenerate") & " Excel", "glyphicon glyphicon-random", theHint, "generate-report-button-excel", False )
End Sub

Sub ButtonClass( theJSCall, strText, strHint, strClass )
	rw ButtonStrWithClass( theJSCall, strText, strHint, "", strClass)
End Sub



%>
