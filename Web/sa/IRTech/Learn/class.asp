<!-- #INCLUDE FILE="include/header.asp" -->
<%
strPageTitle = PRODUCT_NAME & " - Смена класса"

Sub CheckLACCError()
    If Err.Number <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", Err.Number, Err.Description )
    If lacc.LastErrorCode <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", lacc.LastErrorCode, lacc.LastError )
End Sub

Call CheckSession

Dim strTeacherID, strTeacherName, strClassID, strClassName

strTeacherID      = Storage.GetData( strID, "TeacherID" )
strTeacherName    = Storage.GetData( strID, "TeacherName" )
strClassID        = Storage.GetData( strID, "ClassID" )
strClassName      = Storage.GetData( strID, "ClassName" )

Dim List
Set List = lacc.GetStudentClasses( strAccessToken )
CheckLACCError
%>
<%Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<SCRIPT>
<%If bBrowserIE Then%>
    document.onkeydown = onKey;
	function onKey() { if( window.event.keyCode == 13 ) { window.event.returnValue = false; GoForward(); } }
<%End If%>
function GoForward() 
{ 
	var form = document.forms[0];
	var list = form.elements['ClassInfo']; 
	if (list) {
	    var item = list.options[list.selectedIndex];
	    form.elements['ClassName'].value = item.text;
	    form.submit(); 
	}    
}
function GoBack() 
{
	document.forms[0].submit(); 
}
</SCRIPT>
<%Call PrintPreTitle '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%Call PrintHeaderMessage("Добро пожаловать, " & Storage.GetData( strID, "StudentName" ) & "!")%>
<%Call PrintPrePage '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%
Dim Item
BeginForm( "main.asp" )
%>
<INPUT TYPE="HIDDEN" NAME="ClassName" VALUE="<%=strClassName%>">
<CENTER>
	<%If List.Count > 0 Then%>
	    <H3>Выделите ваш класс в списке и нажмите кнопку "Выбрать":</H3>
	    <TABLE ALIGN=CENTER CELLSPACING=5 BORDER=0>
	    <TR>
			<TD ALIGN=CENTER COLSPAN=2>
				<TABLE ALIGN=CENTER CELLSPACING=0 CELLPADDING=0 BORDER=<%If bBrowserIE Then%>3<%Else%>0<%End If%>>
				<TR>
					<TD>
						<SELECT NAME="ClassInfo" SIZE=10 ondblclick="Javascript:GoForward()">
<%						Dim strTmpID, strTmpName, strCurrClassID
						strCurrClassID = Storage.GetData( strID, "ClassID" )
						For Each Item In List
							strTmpID = Item.Field("classid")
							strTmpName = Item.Field("classname")%>
							<OPTION <%If strTmpID = strCurrClassID Then%>SELECTED <%End If%>VALUE="<%=(strTmpID & Chr(1) & Item.Field("teacherid") & Chr(1) & Item.Field("teachername") ) %>"><%=strTmpName%>
<%						Next%>
						</SELECT>
					</TD>
				</TR>
				</TABLE>
				<SCRIPT>document.forms[0].elements['ClassInfo'].focus();</SCRIPT>
			</TD>
		</TR>
	    <TR>
			<TD ALIGN=CENTER>
				<%=ShowButton( "Select", "Выбрать", "JavaScript:GoForward()", "Выбрать класс" )%>
			</TD>
			<TD ALIGN=CENTER>
				<%=ShowButton( "Cancel", "Отказаться", "JavaScript:GoBack()", "Отказаться" )%>
			</TD>
		</TR>
	    </TABLE>
	<%Else%>
	    <TABLE WIDTH=80% BORDER=0>
	    <TR>
			<TD ALIGN="CENTER">
				<H2>Для вас не найдено никаких классов. Чтобы решить эту проблему, пожалуйста, обратитесь к учителю.</H2>
				<%=ShowButton( "Back", "Назад", "JavaScript:GoBack()", "Назад" )%>
			</TD>
		</TR>
		</TABLE>
	<%End If%>
</CENTER>
<%EndForm%>
<%Call PrintPreButtons '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
