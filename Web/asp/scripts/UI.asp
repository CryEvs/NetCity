<!-- #INCLUDE FILE=populate.asp -->
<!-- #INCLUDE FILE=buttons.asp -->

<%'© 2007-2015 IRTech. All rights reserved.

Const kDefFilterPanelWidth	= "col-md-6 col-lg-6 col-sm-12"
Const kDefFiltersLabelWidth = "col-md-4 col-lg-3 col-sm-4"
Const kDefFiltersWidth		= "col-md-8 col-lg-5 col-sm-8"

Dim strFilterPanelWidth, strFiltersLabelWidth, strFiltersWidth

Sub SetFiltersWidth(filterPanelWidth, filtersLabelWidth, filtersWidth)
	strFilterPanelWidth = filterPanelWidth
	strFiltersLabelWidth = filtersLabelWidth
	strFiltersWidth = filtersWidth
	objHtmlHelper.SetFiltersWidth filterPanelWidth, filtersLabelWidth, filtersWidth
End Sub

Sub RestoreDefFiltersWidth
	strFilterPanelWidth = Empty
	strFiltersLabelWidth = Empty
	strFiltersWidth = Empty
	objHtmlHelper.SetFiltersWidth kDefFilterPanelWidth, kDefFiltersLabelWidth, kDefFiltersWidth
End Sub

Function GetFiltersPanelWidth
	If IsEmpty(strFilterPanelWidth) Then 
		GetFiltersPanelWidth = kDefFilterPanelWidth
	Else
		GetFiltersPanelWidth = strFilterPanelWidth
	End If
End Function

Function GetFiltersLabelWidth
	If IsEmpty(strFiltersLabelWidth) Then 
		GetFiltersLabelWidth = kDefFiltersLabelWidth
	Else
		GetFiltersLabelWidth = strFiltersLabelWidth
	End If
End Function

Function GetFiltersWidth
	If IsEmpty(strFiltersWidth) Then 
		GetFiltersWidth = kDefFiltersWidth
	Else
		GetFiltersWidth = strFiltersWidth
	End If
End Function

Function DrawButtonsFiltersSingleRow(strForm)
	%>
	<div class="buttons-filters-panel form-horizontal single-row">
		<div class="row">
			<div class="buttons-panel">
				<%DrawLinkButtonPanel%>
			</div>
			<div class="filters-panel <%=GetFiltersPanelWidth()%>">
				<%Call DrawFilters(strForm)%>
			</div>
		</div>
	</div>
	<%
End Function

Function DrawButtonsFilters(bButtons, strForm)
	Call DrawButtonsFiltersEx(bButtons, True, strForm)
End Function

Function DrawButtonsFiltersEx(bButtons, bFilters, strForm)
	%>
	<div class="buttons-filters-panel form-horizontal">
		<%If bButtons Then
			Call DrawButtonPanel()
		End If
		If bFilters Then%>
			<div class="row">
				<div class="filters-panel <%=GetFiltersPanelWidth()%>">
					<%Call DrawFilters(strForm)%>
				</div>
			</div><%
		End If%>
	</div>
	<%
End Function

Sub DrawButtonPanel
	OpenBtnGroup
	%><div class="buttons-panel-left"><%
	DrawButtons
	%></div><%
	DrawLinkButtonPanel
	CloseBtnGroup
End Sub

Sub DrawLinkButtonPanel
	%><div class="buttons-panel-right"><%
		DrawLinkButtons
	%></div><%
End Sub

Sub DrawButtons
End Sub

Sub DrawLinkButtons
End Sub

Function OpenFormGroup(strLabelName)
	rw objHtmlHelper.OpenFormGroup(strLabelName)
End Function

Function CloseFormGroup()
	rw objHtmlHelper.CloseFormGroup()
End Function

Function OpenFormGroupSpan(strLabelName, strSpanName)
	rw objHtmlHelper.OpenFormGroupSpan(strLabelName, strSpanName)
End Function

Function OpenFormGroupInline(strLabelName)%>
	<div class="form-group">
		<label><%=strLabelName%></label><%
End Function

Function CloseFormGroupInline()%>
	</div><%
End Function

Sub OpenBtnGroup%>
	<div class="row">
		<div class="col-md-12">
			<div class="buttons-panel">	<%
End Sub

Sub CloseBtnGroup%>
				</div>
			</div>
	</div><%
End Sub

Sub OpenPanel(strPanelTitle, strPanelId, bCollapsed)
	OpenPanelEx strPanelTitle, strPanelId, "", bCollapsed, ""
End Sub

Sub OpenPanelEx(strPanelTitle, strPanelId, strAccordionId, bCollapsed, strClass)
	If IsDull(strClass) Then 
		strClass = "panel-default"
	End If%>
	<div class="panel <%=strClass%>">
		<div class="panel-heading" role="tab" id="heading<%=strPanelId%>">
			<h4 class="panel-title">
				<a data-toggle="collapse" <% If Not IsDull(strAccordionId) Then %>data-parent="#<%=strAccordionId%>" <% End If %> class="<%=IIF(bCollapsed, "collapsed", "")%>" data-target="#<%=strPanelId%>" aria-expanded="<%=Bool2Js(Not(bCollapsed))%>" aria-controls="<%=strPanelId%>"><%=DB2Html(strPanelTitle)%></a>
			</h4>
		</div>
		<div id="<%=strPanelId%>" class="panel-collapse collapse <%=IIF(bCollapsed,"","in") %>" aria-labelledby="heading<%=strPanelId%>" role="tabpanel">
			<div class="panel-body"><%
End Sub

Sub ClosePanel()%>
			</div>
		</div>
	</div><%
End Sub

Function CloseFormGroupWithNote(strNote)
	If Not IsDull(strNote) Then%>
		<span class="help-block"><%=strNote%></span><%
	End If
	CloseFormGroup
End Function

Sub DrawTextRow(strLabelName, strText, strAux)
	rw objHtmlHelper.DrawTextRow(strLabelName, strText, strAux)
End Sub

Sub DrawTextRowBr(strLabelName, strText, strAux)
	rw objHtmlHelper.DrawTextRowBr(strLabelName, strText, strAux)
End Sub

Sub DrawMessage(strMessage, strType, bButtonClose)%>
	<div class="alert alert-<%=strType%>" role="alert"><%
		If bButtonClose Then%> 
			<button type="button" class="close" data-dismiss="alert">×</button><%
		End If%>
		<%=strMessage%>
	</div><%
End Sub

Sub DrawWarning(strMessage)
	Call DrawWarningEx(strMessage, False)
End Sub

Sub DrawWarningEx(strMessage, bButtonClose)
	Call DrawMessage(strMessage, "warning", bButtonClose)
End Sub

Sub DrawInfo(strMessage, bButtonClose)
	Call DrawMessage(strMessage, "info", bButtonClose)
End Sub

Sub DrawInputGroupRow(InfoName, strInfo, inputName, inputClass, size, length, arrButtons)
	rw objHtmlHelper.DrawInputGroupRow(InfoName, strInfo, inputName, inputClass, size, length, arrButtons)
End Sub

Sub DrawInputGroupRowEx(InfoName, strInfo, inputName, inputType, inputClass, inputAux, size, length, arrButtons)
	rw objHtmlHelper.DrawInputGroupRowEx(InfoName, strInfo, inputName, inputType, inputClass, inputAux, size, length, arrButtons)
End Sub

Sub DrawInputGroupBtns(arrButtons)
	rw objHtmlHelper.DrawInputGroupBtns(arrButtons)
End Sub

Sub DrawDateInterval(StartName, dtStartDate, EndName, dtEndDate)
	rw objHtmlHelper.DrawDateInterval(StartName, dtStartDate, EndName, dtEndDate)
End Sub

Sub DrawDateIntervalRow()
	Call DrawDateIntervalRowEx(obLanguage("Filter","kInterval"), "ADT", dtStartDate, "DDT", dtEndDate)
End Sub

Sub DrawDateIntervalRowEx(strInfoName, StartName, dtStartDate, EndName, dtEndDate)
	OpenFormGroup strInfoName
	DrawDateInterval StartName, dtStartDate, EndName, dtEndDate
	CloseFormGroup
End Sub

Sub DrawDateInfoRow(InfoName, strInfo, inputName, aStatus)
	OpenFormGroup InfoName
	Call DrawDateInput(inputName, strInfo, aStatus)
	CloseFormGroup
End Sub

'aName - имя элемента
'aDate - значение элемента
'aStatus - всплывающая подсказка на кнопке календаря
Sub DrawDateInput( aName, aDate, aStatus )
	DrawDateInputEx aName, aDate, aStatus, Null
End Sub

Sub DrawDateInputEx( aName, aDate, aStatus, arrButtons )
	rw objHtmlHelper.DrawDateInputEx( aName, aDate, aStatus, arrButtons )
End Sub

Sub DrawDateRangeItem(Name, Value, Note)
	OpenFormGroup obLanguage("Common", Note)
	Call DrawDateInput( Name, Value, obLanguage("Common", Note) )
	CloseFormGroup
End Sub

Sub DrawInputTextRow(InfoName, strInfo, inputName, size, length, strChange, strAux)
	rw objHtmlHelper.DrawInputTextRow(InfoName, strInfo, inputName, size, length, strChange, strAux)
End Sub

Sub DrawInput(strInfo, inputName, inputType, inputClass, size, length, strInputAux)
	rw objHtmlHelper.DrawInput(strInfo, inputName, inputType, inputClass, size, length, strInputAux)
End Sub

Sub DrawInputEx(strInfo, inputName, inputType, inputClass, size, length, strInputAux, strOnChange)
	rw objHtmlHelper.DrawInputEx(strInfo, inputName, inputType, inputClass, TextInputSize(size), length, strInputAux, strOnChange)
End Sub

Sub DrawInputRow(InfoName, strInfo, inputName, inputType, size, length, strAux)
	Call DrawInputRowEx(InfoName, strInfo, inputName, inputType, size, length, strAux, "")
End Sub

Sub DrawInputRowEx(InfoName, strInfo, inputName, inputType, size, length, strAux, strInputAux)
	OpenFormGroup InfoName
	DrawInput strInfo, inputName, inputType, "", size, length, strInputAux
	If strAux <> "" Then
		%><div style="margin-top: 5px;"><%=strAux%></div><%
	End If
	CloseFormGroup
End Sub

'Для отображения полей страницы с коментариями(EditLesson.asp)
'ГлуховЕА
Sub DrawInputRowAndNote(InfoName, Note, strInfo, inputName, inputType, size, length, strAux, strInputAux )
	OpenFormGroup InfoName
	DrawInput strInfo, inputName, inputType, "", size, length, strInputAux
	If strAux <> "" Then
		%><div style="margin-top: 5px;"><%=strAux%></div><%
	End If
	CloseFormGroupWithNote Note
End Sub

Sub DrawLinkRow(InfoName, strInfo, jsCall)
	OpenFormGroup InfoName
	rw ShowAnchor(jsCall, "", strInfo, "" )
	CloseFormGroup
End Sub

Sub DrawFileInputRow(LabelName)
	'для правильной работы инпута необходимо также на странице инпута добавлять скрипт из attaechments_inc.asp WriteCheckAttachmentSizeJsScript

	OpenFormGroup LabelName%>
		<div class="input-group">
			<span class="btn btn-primary btn-file input-group-addon">
				<%=obLanguage("Common", "kSelectFile")%>
				<input type="file" name="file">
			</span>
			<input type="text" class="form-control file-input-filename" id="fileName" name="fileName" readonly>
		</div><%
	CloseFormGroup
End Sub

Sub DrawListRow(strLabelName, arrItemList, fieldName)
	rw objHtmlHelper.DrawListRow(strLabelName, arrItemList, fieldName)
End Sub

Sub DrawInputRowWithClass(InfoName, strInfo, inputName, inputType, size, length, strAux, strClass)
	OpenFormGroup InfoName
		DrawInput strInfo, inputName, inputType, strClass, size, length, ""
		If strAux <> "" Then
			%><div style="margin-top: 5px;"><%=strAux%></div><%
		End If
	CloseFormGroup
End Sub

Sub DrawInputRowExt(InfoName, strInfo, inputName, inputType, size, length, strAux, strKeyPress)
	Call DrawInputRowEx(InfoName, strInfo, inputName, inputType, size, length, strAux, "onkeypress=""" & strKeyPress & """")
End Sub

'InfoName -- Имя группы элементов
'inputName -- имя элемента (атрибут name)
'strValue -- значение элемента ввода (input)
'strChecked -- состояние чекбокса
'theOnClick -- функция onclick обёрнутая двойными кавычками
Sub DrawCheckBox(InfoName, inputName, strValue, strChecked, strOnClick)
	OpenFormGroup InfoName
	rw ShowCheckbox( inputName, strValue, strChecked, "", strOnClick )
	CloseFormGroup
End Sub

Sub DrawCheckBoxesEx(objRs, strInputName, strIdField, strNameField, objSelected, strCanDeselectField, strDisabledField, bReadOnly, theOnClick)
	Dim bCanRemove, bSelected, bDisabled, strSelectedField, arrSelected, i
	Dim bDisabledCheckBox

	If IsArray(objSelected) Then
		arrSelected = objSelected
	Else
		strSelectedField = objSelected
	End If

	While Not objRs.EOF
		bCanRemove = True
		bSelected = False
		bDisabled = False
		
		If Not IsDull(strCanDeselectField) Then
			bCanRemove = CBool(GetSafeLng(objRs(strCanDeselectField),1))
		End If

		If Not IsDull(strSelectedField) Then
			bSelected = CBool(GetSafeLng(objRs(strSelectedField),0))
		ElseIF Not IsNull(arrSelected) Then
			For i = 0 To Ubound(arrSelected)
				If CLng(arrSelected(i)) = Clng(objRs(strIdField)) Then bSelected = True: Exit For
			Next
		End If

		If bCanRemove Or Not bSelected Then
			If Not IsDull(strDisabledField) Then
				bDisabled = CBool(GetSafeLng(objRs(strDisabledField),0))
			End If
		End If

		' #13351
		' Если "нельзя удалить" (Not bCanRemove), но связь "не выбрана" (Not bSelected), то должно быть можно редактировать, в частности, выставить связь.
		' Т.е. в старом условии заменяем условие (Not bCanRemove) на более сложное (Not bCanRemove and bSelected)
		'bDisabledCheckBox = Not bCanRemove Or bReadOnly Or bDisabled
		bDisabledCheckBox = (Not bCanRemove and bSelected) Or bReadOnly Or bDisabled

		rw ShowParamCheckbox(strInputName, objRs(strIdField), bSelected, IIF(bDisabledCheckBox," disabled='disabled'",""), objRs(strNameField), theOnClick)
		If bDisabledCheckBox And bSelected Then
			rw "<input type=""hidden"" name=""" & strInputName & """ value=""" & objRs(strIdField) & """>"
		End If
		objRs.MoveNext
	Wend
End Sub

Sub DrawCheckBoxes(objRs, strInputName, strIdField, strNameField, objSelected, strCanDeselectField, strDisabledField, bReadOnly)
	Call DrawCheckBoxesEx(objRs, strInputName, strIdField, strNameField, objSelected, strCanDeselectField, strDisabledField, bReadOnly, "")
End Sub

Sub DrawSelectInfoRow(InfoName, strInfo, inputName, theRs, theValueField, theTextField, strNull, strChange)
	If IsArray(theRs) Then
		rw objHtmlHelper.DrawSelectInfoRow(InfoName, strInfo, inputName, convert2Dto1D(theRs), theValueField, theTextField, strNull, strChange)
	ElseIf theRs is Nothing Then
		rw WriteHiddenTags(Array(inputName, ""))
	ElseIf Not theRs.EOF Then
		rw objHtmlHelper.DrawSelectInfoRow(InfoName, strInfo, inputName, theRs, theValueField, theTextField, strNull, strChange)
	Else
		rw WriteHiddenTags(Array(inputName, ""))
	End If
End Sub

Sub DrawSelectNamedEntitiesArrRow(InfoName, CurrId, inputName, theArr, strNull, strChange)
	OpenFormGroup InfoName
	Call DrawSelectNamedEntitiesArr(theArr, inputName, CurrId, strNull, strChange)
	CloseFormGroup
End Sub

Sub DrawSelectNamedEntitiesArrRowAux(InfoName, CurrId, inputName, theArr, strNull, strChange, arrAux)
	OpenFormGroup InfoName
	Call DrawSelectNamedEntitiesArrAux(theArr, inputName, CurrId, strNull, strChange, arrAux)
	CloseFormGroup
End Sub

Sub DrawSelectNamedEntitiesArrAux(theArr, strName, curID, strNull, strChange, arrAux)
	rw objHtmlHelper.DrawSelectNamedEntitiesArr(theArr, strName, curID, strNull, strChange, arrAux)
End Sub

Sub DrawSelectNamedEntitiesArr(theArr, strName, curID, strNull, strChange)
	rw objHtmlHelper.DrawSelectNamedEntitiesArr(theArr, strName, curID, strNull, strChange)
End Sub

Sub DrawSimpleRadioList(inputName, arr, strInfo, strChange)
	rw objHtmlHelper.DrawSimpleRadioList(inputName, arr, strInfo, strChange)
End Sub

Sub DrawRadioList(InfoName, strInfo, inputName, theRs, theValueField, theTextField, strChange, bDisabled)
	rw objHtmlHelper.DrawRadioList(InfoName, strInfo, inputName, theRs, theValueField, theTextField, strChange, bDisabled)
End Sub

Sub DrawRadioListInline(InfoName, strInfo, inputName, theRs, theValueField, theTextField, strChange, bDisabled)
	rw objHtmlHelper.DrawRadioListInline(InfoName, strInfo, inputName, theRs, theValueField, theTextField, strChange, bDisabled)
End Sub

Sub DrawInputSelect(strInfo, inputName, size, length, selectName, aArr)
	Dim aItem
	%><div class="input-group copyto"><%
		DrawInput strInfo, inputName, "text", "", size, length, "" 
		%><div class="input-group-btn">
			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Выбрать <span class="caret"></span></button>
			<ul class="dropdown-menu dropdown-menu-right copyfrom" role="menu">
				<%For Each aItem In aArr
					%><li><%=DB2Html(aItem)%></li><%
				Next%>
			</ul>
		</div>
	</div><%
End Sub

Sub DrawInputSelectRow(InfoName, strInfo, inputName, size, length, selectName, aArr)
	OpenFormGroup InfoName
	DrawInputSelect strInfo, inputName, size, length, selectName, aArr
	CloseFormGroup
End Sub

Sub DrawReadonlyRow(InfoName, strInfo)
	DrawReadonlyRowEx InfoName, strInfo, ""
End Sub

Sub DrawReadonlyRowEx(InfoName, strInfo, inputName)
	rw objHtmlHelper.DrawReadonlyRowEx(InfoName, strInfo, inputName)
End Sub

Sub DrawReadonlyRowExPlus(InfoName, strInfo, inputName, alarmInfo, hrefInfo, href)
	rw objHtmlHelper.DrawReadonlyRowEx(InfoName, strInfo, inputName, alarmInfo, hrefInfo, href)
End Sub

Sub DrawTitleRowBtn(InfoName, strInfo, arrButtons)
	rw objHtmlHelper.DrawTitleRowBtn(InfoName, strInfo, arrButtons)
End Sub

Sub DrawTitleRow(InfoName, strInfo)
	rw objHtmlHelper.DrawTitleRow(InfoName, strInfo)
End Sub

Sub DrawMultipleRows(InfoName, strInfo)
	rw objHtmlHelper.DrawMultipleRows(InfoName, strInfo)
End Sub

'theName -- имя элемента (атрибут name)
'theValue -- значение элемента ввода (input)
'bChecked -- состояние чекбокса
'thePrompt -- текстовое сопровождение чекбокса
'theOnClick -- функция onclick обёрнутая двойными кавычками
Function ShowCheckbox( theName, theValue, bChecked, thePrompt, theOnClick )
	ShowCheckbox = ShowParamCheckbox( theName, theValue, bChecked, "",thePrompt, theOnClick)
End Function

Function ShowParamCheckbox( theName, theValue, bChecked, sParameter, thePrompt, theOnClick )
	ShowParamCheckbox = "<div class=""checkbox""><label><input TYPE=""checkbox"" NAME=""" & theName & """ OnClick=""" & theOnClick & """" & IIF(bChecked, " checked", "") & " VALUE=""" & theValue & """" & sParameter & ">" & thePrompt & "</label></div>"
End Function

Sub ShowRadioYesNo(theName, theValue, bChecked, strTitle, textYes, textNo, theOnClick )
	%><div class="radio-list-block"><%
	If Not IsDull(strTitle) Then
		%><div class="radio-list-title"><label><%=strTitle%></label></div><%
	End If 
	%>
		<div class="radio-list-items-block">
			<div class="radio-list-item">
				<label class="radio-inline">
					<input TYPE="radio" NAME="<%=theName%>" VALUE="1" OnClick="<%=theOnClick%>" <%=IIF(bChecked, " checked", "")%>><%=obLanguage("Common","kYes")%>
				</label>
				<%
				If Not IsDull(textYes) Then
					%><div class="alert alert-warning" role="alert"><%=textYes%></div><%
				End If 
				%>
			</div>
		
			<div class="radio-list-item">
				<label class="radio-inline">
					<input TYPE="radio" NAME="<%=theName%>" OnClick="<%=theOnClick%>" <%=IIF(Not bChecked, " checked", "")%> VALUE="0"><%=obLanguage("Common","kNo")%>
				</label>
				<%
				If Not IsDull(textNo) Then
					%><div class="alert alert-info" role="alert"><%=textNo%></div><%
				End If
				%>
			</div>
		</div>
	</div><%
End Sub

Function ShowAnchor( jsCall, sStatus, aBody, Attr )
	ShowAnchor = objHtmlHelper.ShowAnchor( jsCall, sStatus, aBody, Attr )
End Function

Function ShowIMGAnchor( aHref, sStatus, aIMG, aAlt, aATTRs )
	ShowIMGAnchor = "<a href="""&aHref&""" title='"&sStatus&"'><IMG src="""&strCommonImgFolder&"/"&aIMG&""" alt="""&aAlt&""" "& aATTRs&"></a>"
End Function

Function ShowTextArea(aName, aRows, aCols, aChange, aText)
	ShowTextArea = ShowTextAreaEx(aName, aRows, aCols, aChange, aText, "", "")
End Function

Function ShowTextAreaEx(name, rows, cols, onChange, text, strClass, strAux)
	ShowTextAreaEx = "<textarea name="""&name&""" class=""form-control " & strClass & """ rows="""&rows&"""cols=""" & TextInputSize(cols) & """ wrap=""soft"" onChange="""&IIF(IsDull(onChange),"dataChanged();",onChange)&""" " & strAux & ">"&DB2TextArea(text)&"</textarea>"
End Function

Function ShowDelCellHeader(aRowSpan)
	If readonly Then ShowDelCellHeader = "" : Exit Function
	If(aRowSpan > 1) Then
		ShowDelCellHeader = "<th class=""NotPrintable"" rowspan=""" & aRowSpan&""">" & obLanguage("Common","kDeletingMark") & "</th>"
	Else
		ShowDelCellHeader = "<th class=""NotPrintable"">" & obLanguage("Common","kDeletingMark") & "</th>"
	End If
End Function

Sub ShowPageList(NumPages,EditPageNo)
	Const kPagingPages = 11
	Dim lngNo, nPageFrom, nPageTo

	If NumPages > kPagingPages Then
		nPageFrom = EditPageNo - 5
		nPageTo = EditPageNo + 5

		If nPageTo > NumPages - 1 Then 
			nPageFrom = nPageFrom - (nPageTo - NumPages - 1)
			nPageTo = NumPages - 1
		ElseIf nPageFrom < 0 Then 
			nPageTo = nPageTo + (0 - nPageFrom)
			nPageFrom = 0
		End If
	Else
		nPageFrom = 0
		nPageTo = NumPages - 1
	End If%>

	<div class="row">
		<div class="col-md-12">
			<nav>
				<ul class="pagination">
					<%IF EditPageNo > 0 Then 
						%><li><%=ShowAnchor("gotoPage(" & EditPageNo - 1 & ")", obLanguage("Common","kPrevPage"), "&larr;", "")%></li><%
					Else
						%><li class="disabled"><a href="#">&larr;</a></li><%
					End If

					For lngNo = nPageFrom To nPageTo
						%><li <%=IIF(lngNo = EditPageNo,"class=""active""","") %>>
							<%=ShowAnchor("gotoPage(" & lngNo & ")", obLanguage("Common","kCurPage")&" "& (lngNo+1), (lngNo+1), "")%>
						</li><%
					Next
					IF EditPageNo < NumPages-1 Then%>
						<li><%=ShowAnchor( "gotoPage(" & EditPageNo + 1 & ")", obLanguage("Common","kNextPage"), "&rarr;", "" )%></li>
					<%Else%>
						<li class="disabled"><a href="#">&rarr;</a></li>
					<%End If%>
				</ul>
			</nav>
		</div>
	</div><%
End Sub

Sub DrawContextButtons(arrCtx, isRigth, isHorizontal, strSize)
	rw objHtmlHelper.DrawContextButtons(arrCtx, isRigth, isHorizontal, strSize)
End Sub

Function GetContextButtons(arrCtx, isRigth, isHorizontal, strSize)
	GetContextButtons = objHtmlHelper.DrawContextButtons(arrCtx, isRigth, isHorizontal, strSize)
End Function
%>
