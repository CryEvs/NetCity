<% ' © 2007-2008 IRTech. All rights reserved.

Sub DrawExportScript()%>
	function ExecuteExport()
	{
		var form=document.forms['VseobuchForm'];
		var main=document.forms['MainForm'];
		var hn=form.elements['HN'].value;
		var file=form.elements['FILE'].value;
	
		if (form.elements['FILE'].value=='')
			alert(language.Generic.SetupSchoolUI.kErrMsgDBFilePath);
		else
		{
		<%If lngGrade>0 Or lngGrade=-1 Then
			If lngStudentCnt>0 Then%>
				form.elements['FL'].value = main.elements['FL'].value;
				form.elements['LL'].value = main.elements['LL'].value;
				form.elements['GN'].value = main.elements['GN'].value;
				form.elements['GR'].value = main.elements['GR'].value;
			
				if (hn=='')
					hn = 'localhost';
				form.elements['ADDR'].value = hn+':'+file;
				form.action = "/asp/SetupSchool/Export/GetErrors.asp";
				form.submit();
			<%Else%>
				alert('Нет учеников для экспорта!');
			<%End If%>
		}
		<%Else%>
	
			alert('Экспорт можно проводить только зачисленных учеников!');
		}
		<%End If%>
	}

	function ExecuteImport()
	{
		var form=document.forms['VseobuchForm'];
		var main=document.forms['MainForm'];
		var hn=form.elements['HN'].value;
		var file=form.elements['FILE'].value;
	
		if (form.elements['FILE'].value=='')
			alert(language.Generic.SetupSchoolUI.kErrMsgDBFilePath);
		else
		{
			if (hn=='')
				hn = 'localhost';
			form.elements['ADDR'].value = hn+':'+file;
			form.action = "/asp/SetupSchool/Import/GetErrors.asp";
			form.submit();
		}
	}<%
End Sub
%>
