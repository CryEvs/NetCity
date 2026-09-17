<!-- #INCLUDE FILE="include/header.asp" -->
<%
Call OpenDatabase
Call CheckSession  ' PRODUCT_NAME is known after OpenDatabase
strPageTitle = PRODUCT_NAME & " - Главное меню"
%>
<%Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<SCRIPT>
function ViewReportCard() 
{ 
	var form = document.forms[0];
	form.action = 'report.asp';
	form.submit();
}
function ReloadAssignment() 
{ 
	var form = document.forms[0];
	form.action = 'main.asp';
	form.elements['Reload'].value = 1;
	form.submit();
}
function DoQuit() 
{ 
	var form = document.forms[0];
	if( window.confirm( 'Вы действительно хотите выйти?' ) ) {
		window.forceClosing = true;
		window.close();
	}
}
</SCRIPT>
<%Call PrintPreTitle '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%Call PrintHeaderMessage("Добро пожаловать, " & DB2HTML(Storage.GetData( strID, "StudentName" )) & "!")%>
<%Call PrintPrePage '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%BeginForm( "main_A.asp" )%>
<INPUT TYPE="HIDDEN" NAME="Reload" VALUE="">
<%EndForm%>
<H2 ALIGN="CENTER">По этому предмету для вас нет заданий.<BR>Обратитесь к своему учителю.</H2>
<%Call PrintPreButtons '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<TABLE BORDER=0 WIDTH=100% CELLSPACING=0 CELLPADDING=3>
<TR>
	<TD ALIGN=CENTER>
		<%=ShowButton( "Reload", "Обновить", "JavaScript:ReloadAssignment()", "Обновить задания" )%><BR>
		<%'=ShowButton( "ChangeClass", "Сменить класс", "JavaScript:GoChangeClass()", "Сменить класс" )%><!--BR-->
		<%=ShowButton( "ReportCard", "Отчет", "JavaScript:ViewReportCard()", "Посмотреть отчет" )%><BR>
		<HR>
		<%=ShowButton( "Quit", "Выход", "JavaScript:DoQuit()", "Выйти из " & PRODUCT_NAME )%>
	</TD>
</TR>
</TABLE>
<%Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
