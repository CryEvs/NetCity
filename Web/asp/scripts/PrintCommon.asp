<% ' © 2007-2015 IRTech. All rights reserved.
Dim shortReportName, printPostFix
Dim bIsHeavyReport

Sub ButtonPrintForStudent(stud_ID)
	Call ButtonPrintIcon("ViewPrint("&stud_ID&")")
End Sub

Sub ButtonExportForStudent(stud_ID)
	Call ButtonExport("ViewExcel("&stud_ID&")")
End Sub

Function ButtonPrintHandler()
	ButtonPrintHandler = "openPrint()"
End Function

Function ButtonExportHandler()
	ButtonExportHandler = "openExcel()"
End Function

Sub DrawStudentPrintButtons(stud_ID)
	Call ButtonPrintForStudent(stud_ID)
	Call ButtonExportForStudent(stud_ID)
	Call DrawStudent_GraphButton(stud_ID)
End Sub

Sub DrawStudent_GraphButton(stud_ID)
	Call SimpleButton("ViewGraph("& stud_ID &")", obLanguage("Buttons","kViewGraphReport"))
End Sub

Sub DrawAllPrintButtonsForStudent(stud_ID)
	Call ButtonPrintForStudent(stud_ID)
	Call ButtonExportForStudent(stud_ID)
	If (Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool) And Not bIsEMForSchool Then
		If HasUserRight(arMessagesSendReceive) Then 
			If bIsStaff Then Call ButtonSend("SendReport("& stud_ID &")", obLanguage("Buttons","kSend"))
		End If
	End If
End Sub

Sub DrawStudentButtonsScript( stud_ID, studName )%>
<tr><td class="body"><%=DB2HTML(studName)%></td><td><%Call DrawAllPrintButtonsForStudent(stud_ID)%></td></tr><%
End Sub

Sub DrawPrintOnlyButton()
	Call ButtonPrint(ButtonPrintHandler())
End Sub

Sub DrawPrintButtons()
	Call ButtonPrint(ButtonPrintHandler())
	Call ButtonExport(ButtonExportHandler())
End Sub

Sub DrawPrintIconButtons()
	Call ButtonPrintIcon(ButtonPrintHandler())
	Call ButtonExport(ButtonExportHandler())
End Sub

Sub DrawAllPrintButtons()
	DrawPrintButtons

	If (Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool) And Not bIsEMForSchool Then
		If HasUserRight(arMessagesSendReceive) Then 
			Call ButtonSend("SendReport('')", obLanguage("Buttons","kSend"))
		End If
	End If
End Sub

Sub DrawPrintOnlyScripts( strPrintFile ) 'obsolete use DrawCommonScripts
%>	var wndPrint = null;
	function ViewReport( lngParam, sSend)
	{
		var form = document.forms[0];
		form.target = "_report";
		var winOptions = { name: form.target, specs: 'status=no,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=550', winChild: wndPrint };
		windowOpen( winOptions );
		wndPrint = winOptions.winChild
		center(wndPrint, 750,550);
		DoSubmit(form, '<%=strPrintFile%>'+ '?SID=' + lngParam+'&RP='+sSend);
		form.target = "";
		form.action = "";
	}
	function openPrint() {
		ViewReport( 0, '');
	}<%
End Sub

Sub DrawExcelScripts(strExcelFile)%>
	var wndPrint=null;

	function openExcel() {
		var form = document.forms['ExcelForm'];
		openExcelCommon(form, '<%=strExcelFile%>');
	}<%
End Sub

Sub DrawViewReportScript( )
End Sub

Sub DrawPrintScripts( strPrintFile, strExcelFile ) 'obsolete use DrawCommonScripts
	Call DrawPrintOnlyScripts( strPrintFile ) %>
	function openExcel() {
		var form = document.forms['ExcelForm'];
		openExcelCommon(form, '<%=strExcelFile%>');
	}<%
End Sub

Sub Init()
	bIsHeavyReport = false
	bIsCheckDates = false
	shortReportName = GetShortReportName()
	printPostFix = ""
End Sub

'Парсит строку полученую как правило из Request("SCRIPT_NAME") до названия отчета без части Report и расширения файла
Function GetShortReportName()
	Dim strUrl
	Dim pointIndex
	strUrl = GetSafeStrParam(Request("SCRIPT_NAME"),Null)
	pointIndex = InStrRev(strUrl,"/")+1
	strUrl = Mid(strUrl,pointIndex)
	pointIndex = InStrRev(strUrl,".")-1
	strUrl = Left(strUrl,pointIndex)
	If Instr(strUrl, "Report")=1 Then strUrl = Mid(strUrl,Len("Report")+1)

	GetShortReportName = strUrl
End Function

Sub DrawCommonScripts() 'actual
%>
<script><!--
	var wndPrint=null;

	function dataChanged() {
		dataWereChanged = false;
	}
	function isValidFilter() {
		return true;
	}

	function ViewPrint(nParam) {
		var schowParams = getReportParams("Print");
		schowParams.additionalParams = $.extend(schowParams.additionalParams, {SID: nParam});
		ShowReport(schowParams);
	}
	function ViewExcel(nParam) {
		var schowParams = getReportParams("Excel");
		schowParams.additionalParams = $.extend(schowParams.additionalParams, {SID: nParam});
		ShowReport(schowParams);
	}
	function ViewGraph(nParam) {
		var schowParams = getReportParams("Graph");
		schowParams.additionalParams = $.extend(schowParams.additionalParams, {SID: nParam});
		ShowReport(schowParams);
	}
	function SendReport( nParam )
	{
		if ( nParam == ""){
			openReport( "Send");
			return;
		}
		var schowParams = getReportParams("Send");
		schowParams.additionalParams = $.extend(schowParams.additionalParams, {SID: nParam, RP:'R'});

		ShowReport(schowParams);
	}
	function openPrint() {
		openReport( "Print");
	}
	function openExcel() {
		 openReport( "Excel");
	}
	//stub
	//function getReportAddParams(reportType)
	function getReportParams(reportType) {
		var params = {
				  actionName: reportType
				, actionFile: "<%=shortReportName%>"
				, printPostFix: "<%=printPostFix%>"
				, isHeavyReport: <%=Bool2JS(bIsHeavyReport) %>
				, isCheckDates: <%=Bool2JS(bIsCheckDates) %>
				, additionalParams : {}
			};
		if(typeof(getReportAddParams) == "function"){
			params.additionalParams = $.extend(params.additionalParams, getReportAddParams());
		}
		return params;
	}
	
	function openReport( reportType) {
		schowParams = getReportParams(reportType);
		ShowReport(schowParams);
	}

	function ShowReport(params) {
		var defaultOptions = {
			actionName: ""
			, actionFile: "" //Куда отправляем форму(в окно или сюда же)
			, printPostFix: "" //Print or Empty
			, formName: "Reports"
			, isHeavyReport: null //отображать алерт?(для больших отчетов)
			, isCheckDates: null //Проверять изменение даты?
			, additionalValid: function(){ 
				return false;
			},
			additionalParams: []
		};
		options = $.extend(defaultOptions, params);
		var form = document.forms[options.formName];
		if (! form)
			form = document.forms[0];
		var assertDates=function(){
			if (!checkDates(form)) {
				return true;
			}
			else{
				return false;
			}
		}

		var assertAdditionalParams =  function(){
			options.actionFile += "?" //В ДАННОМ СЛУЧАЕ ЗНАК "?" НЕОБХОДИМ. Без него будет загружатся файл .asp, а не .xls
			if(options.additionalParams){
				for(var param in options.additionalParams){
					options.actionFile += param + "=" + options.additionalParams[param] + "&";
				}
			}
		}

		var assertHeavyReport = function(openMethodDelegate)
		{
			if(options.additionalValid()){
				return;
			}
			if (options.isHeavyReport) {
				alert(language.Generic.EMReports.kReportTakesTime + '.' + language.Generic.Curriculum.kPleaseWait + '!', ({ close: openMethodDelegate }));
			} else {
				openMethodDelegate();
			}
		}

		var openPrint = function () {
			form.target = "_report";
			var winOptions = { name: "_report", specs: "status=yes,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=560", winChild: wndPrint };
			windowOpen( winOptions );
			wndPrint = winOptions.winChild;
			center(wndPrint, 750, 560);
			options.actionFile += options.printPostFix;
			options.actionFile += ".asp";
			assertAdditionalParams();
//			jsSubmit({
//						action: options.actionFile,
//						dataType: "html",
//						showProcessing: true,
//						form: form,
//						defaultErrorHandling: false,
//						onSuccess: function(response) {
//							$('#report').html(response)
//						},
//						onError: function(response) {
//							$('#report').html(response)
//						},
//					});
			DoSubmit(form, options.actionFile);
			form.target = "_self";
			form.action = "";
		};
		var openExcel = function(){
			options.actionFile += "Export.asp";
			assertAdditionalParams();
			openExcelVersn(form, options.actionFile);
			form.target = "_self";
			form.action = "";
		}
		var openGraph = function(){
			form.target = "_report";
			var winOptions = { name: "_report", specs: "status=yes,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=560", winChild: wndPrint };
			windowOpen( winOptions );
			wndPrint = winOptions.winChild;
			center(wndPrint, 750, 560);
			options.actionFile = "g" + options.actionFile;
			options.actionFile += ".asp";
			assertAdditionalParams();
			DoSubmit(form, options.actionFile);
			form.target = "_self";
			form.action = "";
		}
		var method = openPrint;
		if (form.RP)
			if(options.actionName == "Send"){
				form.RP.value= "R";
			} else if (form.RP) {
				form.RP.value="";
			}
		if (options.actionName == "Print" || options.actionName == "Send") {
			if (options.isCheckDates && assertDates()){
					return;
			}
		} else if (options.actionName == "Excel") {
			if (options.isCheckDates && assertDates()){
					return;
			}
			method = openExcel;
		}
		else if (options.actionName == "Graph") {
				if (options.isCheckDates && assertDates()){
						return;
				}
				method = openGraph;
		}
		assertHeavyReport(method);

		form.target = "_self";
		form.action = "";
	}
	//-->
	</script><%
End Sub

Function onUnload()
	onUnload = specialUnload()
End Function

Sub SpecialDraw()
	If bExit Then Exit Sub
	Call DrawPrintButtons()
	Call SpecialButtons()
End Sub

Sub SpecialButtons()
End Sub


Sub WriteExcelFormTags
	RW WriteHiddenTags(Array("RP", ""))
End Sub

Sub DrawExcelForm()%>
	<form name="ExcelForm" method="POST" action="" <%If isIE Then %> target="_blank" <%End if%> >
		<%=WriteObligatoryTags()%>
		<%WriteExcelFormTags%>
	</form><%
End Sub%>