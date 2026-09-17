<!-- #INCLUDE FILE=../../../header1.asp -->
<!-- #INCLUDE FILE=../../../scripts/filtersCommon.asp -->
<!-- #INCLUDE FILE=../../../scripts/filterClasses.asp -->

<% ' © 2007-2013 IRTech. All rights reserved.
Const AttTitle = "Выбор предметов для печати аттестатов в «ИвАттестат»"
Const HintOnEmptySubject = "Чтобы добавить в список предмет не из учебного плана текущего года, введите название предмета и нажмите кнопку ""Добавить"""
Const HintOnSavingCSV = "Будет сформирован файл для последующей загрузки в программу «ИвАттестат».\n\nСледует сохранить файл на вашем компьютере, изменить расширение файла на .CSV,\nзатем выполнить импорт в программе «ИвАттестат»."
Const HintOnMaxMark = "Вы используете оценочную шкалу, отличную от 5-балльной. При выгрузке в файл итоговые отметки будут автоматически приведены к 5-балльной шкале.\n\nПроверьте корректность отметок в программе «ИвАттестат»."
Const hintLongNames1 ="Следующие названия предметов будут усечены при печати аттестата"
Const hintLongNames2 ="Перед тем как вы смените файлу расширение, откройте файл с помощью ""Блокнота"" и сократите их названия, как требуется в аттестате"

Dim blnWasSaved, strBackPage, strGrade, nMaxMark, grades
Dim emptyGrades

const delhint = "<button class=""glyphicon glyphicon-trash delSj""></button>&nbsp;"

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arProfileEditSchoolInfo)
End Function

Function GetPageTitle()
	GetPageTitle = AttTitle & ": " & GreenText(strGrade & "-е классы")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miTotalAttestat
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbPrintAttestat
End Function


Sub Main()
'	strBackPage = "\asp\SetupSchool\SchoolForms\SchoolInfo.asp"
End Sub

Function onLoad()
End Function

Sub ReadState()
	nMaxMark = CLng(obTokenMgr.GetData(strToken, stMaxMark))
	strGrade = GetSafe("gradeType", -1)
	Set grades = objNSNET.GetIvattestGrades(strCurrYearID)
	emptyGrades = grades.EOF
	If emptyGrades Then
		Exit Sub
	End If

	If CLng(strGrade) = -1 Then
		strGrade = grades("GRADEID")
	End If
	Call InitYearGradeClassesAll(strGrade)
End Sub

Sub WritePostScripts()
%>
<script src="/vendor/components/jqueryui/jquery-ui.min.js" type="text/javascript"></script>
<link href="/vendor/components/jqueryui/themes/redmond/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
<%
End Sub

Sub onHead()%>

<SCRIPT><!--
function getLongNames(result)
{
	str = "";
	maxlen=32;
	for(var i = 0; i<result.length; i++)
	{
		var tmp = result[i];
		if(tmp.length > maxlen) str+=tmp.substr(0,maxlen)+'...\n';
	}
	return str;
}
function exportCSV()
{
	var confirms = new Array();
	confirms.push($.show.getConfirmation('<%=HintOnSavingCSV%>\n\n<%=obLanguage("Common","kContinue")%>'));
<%If nMaxMark<>5 Then%>
	confirms.push($.show.getConfirmation('<%=HintOnMaxMark%>\n\n<%=obLanguage("Common","kContinue")%>'));
<%End If%>

	var result = $('#sortable1').sortable('toArray');
	var result2 = $('#sortable2').sortable('toArray');
	var str = getLongNames(result);

	var subMainCnt = 42;
	var addMainCnt = 17;

	var goExport = function()
	{
		postTo('IVAttestatCsv.asp', {gradeType : <%=strGrade%>, subjMain : result, subjAdd :result2, maxMark:<%=nMaxMark%>, ClassID:<%=strClassID%>});
	}

	if (result.length > subMainCnt)
	{
		confirms.push(function(){return $.show.confirmation('<%=obLanguage("Common","kSubMainWarn")%>').reject();});
	}
	if (result2.length > addMainCnt)
	{
		confirms.push(function(){return $.show.confirmation('<%=obLanguage("Common","kAddMainWarn")%>').reject();});
	}

	extDeferred.when(confirms).done(function(){
		if (str != "") {
			str = '<%=hintLongNames1%>:<br />'+str+'<br /><%=hintLongNames2%>.';
			alert(str, {close:goExport})
		}
		else
		{
			goExport()
		}
	});
}
function Back()
{
	goBack(document.SchoolEdit,'/asp/SetupSchool/SchoolForms/SchoolInfo.asp');
}
function resetScreen()
{
	postTo('IVAttestat.asp', {gradeType : <%=strGrade%>});
}

jQuery.expr[':'].ContainsInsens = function(a,i,m){
	return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
};

function addSubj(text)
{
	var iditem = trimStr(text)
		iditem = iditem.replace(/>/g,"").replace(/</g,""); //protect from script injection
	iditem = iditem.substr(0, 1).toUpperCase() + iditem.substr(1);
	var list1 = $( "#sortable2" );
	if(list1.find("li:ContainsInsens(" + iditem + ")").length > 0) {
		alert('Предмет "'+iditem+'" уже есть в разделе "Дополнительные сведения"'); return;
	}
	list1 = $( "#sortable1" );
	if(list1.find("li:ContainsInsens(" + iditem + ")").length > 0) {
		alert('Предмет "'+iditem+'" уже есть в основном списке предметов'); return;
	}
	list1.append('<li class="ui-state-default" id="' + iditem + '"><%=delhint%>' + iditem + '</li>');
}

function AddNewSubj()
{
	$.show.prompt("Введите название предмета", "Добавление нового предмета", function (text) {
		var iditem = trimStr(text)
		iditem = iditem.replace(/>/g,"").replace(/</g,""); //protect from script injection
		if(iditem.length<=0) {
			alert('<%=HintOnEmptySubject%>'); return;
			return false;
		}
		return true;
	}).then(function (text) {
		addSubj(text);
	});
}

function delSubj(item)
{
	var li = item.parentNode;
	li.parentNode.removeChild(li);
}

//--></SCRIPT>

	<style>
		#sortable1, #sortable2 { list-style-type: none; margin: 0; margin-right: 10px; background: #eee; padding: 5px; width: auto}
		#sortable1 li, #sortable2 li {padding: 2px;}
	</style>
	<script>
		$(function() {
			$( "ul.droptrue" ).sortable({
				items: "li:not(.ui-state-highlight)",
				connectWith: "ul"
			});

			$( "#sortable1, #sortable2, #sortable3" ).disableSelection();
		});

		$(document).ready(function() {
			$('form[name="SchoolEdit"]').on('click', '.delSj', function() { 
				$(this).parent().remove(); 
			});
		});
	</script>
<%
End Sub

Sub DrawButtons()
	Dim theHint
	theHint = "Экспорт файла для «ИвАттестат»"
	ButtonAdd "AddNewSubj()", obLanguage("Common","kAdd")
	ButtonReset "resetScreen()", obLanguage("Common","kReset")
	ButtonExportCommonEx "exportCSV()", theHint, theHint
End Sub

Sub DrawFilters(strForm)
	Call DrawFilterRow( strForm, obLanguage("ClassManagement", "kGrade"), "gradeType",grades, "GRADEID", "GRADEID", strGrade, False)
	Call DrawYearClasses(strForm, True, obLanguage("Filter","kNoYearClasses",strFunctionalityType))
End Sub

Sub onDrawPage()
	If grades.EOF Then Exit Sub
	Dim strForm
%>
<form name="SchoolEdit" class="col-md-9 col-lg-6" method="POST" action="IVAttestat.asp" OnSubmit="return canSubmit();" >
<%=WriteObligatoryTags()%>

<%Call DrawInfo (obLanguage("SchoolInfo","kInfoIVAttestat").Format(Array("<b>","</b>","<br>")), False)
		Call DrawButtonsFilters( True, "SchoolEdit" )
'Call DrawButtonPanel()
%>
	<ul id="sortable1" class='droptrue'>
		<li class="ui-state-default ui-state-highlight"><h3>Основной список предметов</h3></li>
		<% DrawPage() %>
	</ul>

	<ul id="sortable2" class='droptrue'>
		<li class="ui-state-default ui-state-highlight"><h3>Раздел "Дополнительные сведения"</h3></li>
	</ul>
	<div class="legend print-block"><div>
		<p><span class="glyphicon glyphicon-trash legend-label" style="padding-left: 12px; padding-top: 5px;"></span><span class="legend-description"> — <%=obLanguage("SchoolInfo","kDelFromList")%></span></p>
	</div></div>
</form>
<%
End Sub

Sub DrawPage()
	Dim rs, str, id
	set rs = objNsNet.GetCurriculumSubjectList(strSchoolYearID, strGrade)
	Do While Not rs.EOF
		str = rs(0)
		id = DB2HTML(UCase(Left(str,1)) & Right(str,Len(str)-1))  ' требование к заполнению аттестата: писать предметы с большой буквы
		%><li class="ui-state-default" id="<%=id%>"><%=delhint & id%></li><%
		rs.MoveNext
	Loop
End Sub
%>
