<%@ Language=VBScript %>
<%
Dim strAT, strTTSURL, strRO
	strAT = Request("AT")
	strTTSURL = Request("TTSURL")
	strRO = Request("RO")
%>
<html>
<head>
<title>Votum</title>
<style type="text/css">
body {
  background-image: url(/votum/common/images/background.jpeg);
  text-align:center;
}
</style>
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=utf-8"></HEAD>
<script>
function DoSave() 
{ 
	var form = document.forms[0];
	var name = form.elements["name"].value;
	if(trim(name) =="")
	{
		alert("Следует указать задание тестирования!");
	}
	else
	{
		form.submit();
	}
}

function trim(s)
{
	return trimLeading(trimTrailing(s));
}

function trimLeading(s)
{
	var leadingSpacing = /^\s+/;
	return s.replace(leadingSpacing,"");
}

function trimTrailing(s)
{
	var trailingSpacing = /\s+$/;
	return s.replace(trailingSpacing,"");
}
</script>
</head>
<body>

<table border="0">
<tr>
	<td>
		<img src="/votum/common/images/logo_100x100.jpg" alt="Votum логотип" />
	</td>
	<td align="right">
		<p>
			<b>Интерактивная система обучения, голосования и тестирования</b>
		</p>
		<p>
			<a href="http://votum-edu.ru" target="_blank">О системе подробнее</a>
		</p>
		<p>
			<a href="http://votum-web.ru" target="_blank">Проект votum-web</a>
		</p>
	</td>
</tr>
<tr><td colspan="2">&nbsp;</td></tr>
<tr>
<%If strRO <> "1" Then %>
			<FORM ACTION="/asp/t_saveproblems.asp" METHOD="POST">
			<INPUT TYPE="hidden" NAME="AT" VALUE="<%=strAT%>">
			<INPUT TYPE="hidden" NAME="LAID" VALUE="votum">
			<INPUT TYPE="hidden" NAME="lexile" VALUE="">
			<INPUT TYPE="hidden" NAME="parameters" VALUE="">
		<td colspan="2" align="right">
			<font color="red">*</font>Задание тестирования: <INPUT TYPE="text" NAME="name" VALUE="" size="60"></FORM>
		</td>
	</tr>
	<tr>
		<td colspan="2" align="right">
			<button onclick="DoSave();">Сохранить</button>
		</td>
	</tr>
	<tr>
		<td colspan="2" width="550" height="500" valign="top">
			<p>
				<i>
				"Задание тестирования" является обязательным к заполнению полем.
				Старайтесь указывать в этом поле то, что поможет Вам понять, что это
				именно Ваш тест, и правильно выставить оценки.				
				</i>
			</p>
			<p>
				<i>
				Также обращайте внимание на тему задания и дату выполнения.
				(На следующей странице).
				</i>
			</p>
		</td>
	<%Else%>
		<td colspan="2" align="right" valign="top" height="500">
			Система тестирования VOTUM не предусматривает просмотр материала из электронного журнала.
		</td>
	<%End If%>	
	</tr>
	<tr>
		<td colspan="2" align="left">
			&copy <a href="http://votum-edu.ru" target="_blank">ООО "Вотум"</a>, 2011
		</td>
	</tr>	
</table>
</body>
</html>