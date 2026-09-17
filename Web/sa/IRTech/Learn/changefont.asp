<!-- #INCLUDE FILE="include/header.asp" -->
<%
strPageTitle = "Настройка параметров текста"
dim strFontSize, strFontColor, strBGColor, strOldFontSize, strOldFontColor, strOldBGColor
strFontSize = GetSafeStr( Request("FontSize") )
If IsEmpty(strFontSize) or strFontSize="" then 
	strFontSize = 3
End If	
strFontColor = GetSafeStr( Request("FontColor") )
If IsEmpty(strFontColor) or strFontColor="" then 
	strFontColor = "#000000"
End If	
strBGColor = GetSafeStr( Request("BGColor") )
If IsEmpty(strBGColor) or strBGColor="" then 
	strBGColor = "#000000"
End If	

strOldFontSize = GetSafeStr( Request("OldFontSize") )
If IsEmpty(strOldFontSize) Or strOldFontSize="" Then 
	strOldFontSize=strFontSize
End If
strOldFontColor = GetSafeStr( Request("OldFontColor") )
If IsEmpty(strOldFontColor) Or strOldFontColor="" Then 
	strOldFontColor=strFontColor
End If
strOldBGColor = GetSafeStr( Request("OldBGColor") )
If IsEmpty(strOldBGColor) Or strOldBGColor="" Then 
	strOldBGColor=strBGColor
End If

dim Colors(6,8)

Colors(0,0) = "#FF8080"
Colors(0,1) = "#FFFF80"
Colors(0,2)= "#80FF80"
Colors(0,3) = "#00FF80"
Colors(0,4) = "#80FFFF"
Colors(0,5) = "#0080FF"
Colors(0,6) = "#FF80C0"
Colors(0,7) = "#FF80FF"

Colors(1,0) = "#FF0000"
Colors(1,1) = "#FFFF00"
Colors(1,2) = "#80FF00"
Colors(1,3) = "#00FF40"
Colors(1,4) = "#00FFFF"
Colors(1,5) = "#0080C0"
Colors(1,6) = "#8080C0"
Colors(1,7) = "#FF00FF"

Colors(2,0) = "#804040"
Colors(2,1) = "#FF8040"
Colors(2,2) = "#00FF00"
Colors(2,3) = "#008080"
Colors(2,4) = "#004080"
Colors(2,5) = "#8080FF"
Colors(2,6) = "#800040"
Colors(2,7) = "#FF0080"

Colors(3,0) = "#800000"
Colors(3,1) = "#FF8000"
Colors(3,2) = "#008000"
Colors(3,3) = "#008040"
Colors(3,4) = "#0040FF"
Colors(3,5) = "#0000A0"
Colors(3,6) = "#800080"
Colors(3,7) = "#8000FF"

Colors(4,0) = "#400000"
Colors(4,1) = "#804000"
Colors(4,2) = "#004000"
Colors(4,3) = "#004040"
Colors(4,4) = "#000080"
Colors(4,5) = "#000040"
Colors(4,6) = "#400040"
Colors(4,7) = "#400080"

Colors(5,0) = "#000000"
Colors(5,1) = "#808000"
Colors(5,2) = "#808040"
Colors(5,3) = "#808080"
Colors(5,4) = "#408080"
Colors(5,5) = "#C0C0C0"
Colors(5,6) = "#400040"
Colors(5,7) = "#FFFFFF"

%>

<%Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<SCRIPT>
<!--
var forceClosing = false;
function ResetOpener(){if( !forceClosing && opener ) opener.wndFont=null;}

function ChangeFontSize()
{
  var form = document.forms['ChangeFontForm'];
  var sel = form.elements['FS'];
  form.elements['FontSize'].value = sel.options[sel.selectedIndex].value;
  forceClosing = true;
  form.submit(); 
}

function ChangeFontColor(strColor)
{
  var form = document.forms['ChangeFontForm'];
  form.elements['FontColor'].value = strColor;
  forceClosing = true;
  form.submit(); 
}

function ChangeBGColor(strColor)
{
  var form = document.forms['ChangeFontForm'];
  form.elements['BGColor'].value = strColor;
  forceClosing = true;
  form.submit(); 
}

function GoSave()
{
	var op=window.opener;
	if (op)
	{
		if (op.ChangeTextParameters)
		{
			var form = document.forms['ChangeFontForm'];	
			var fs = form.elements['FontSize'].value;
			var fc = form.elements['FontColor'].value;
			var bc = form.elements['BGColor'].value;
			op.ChangeTextParameters(fs,fc,bc);
		}	  
	}
}

function SaveSize() 
{
    if( !window.saveInnerWidth ) 
    {
        window.saveInnerWidth = window.innerWidth;
        window.saveInnerHeight = window.innerHeight;
    }
}

function Resize() 
{
    if( window.saveInnerWidth != window.innerWidth || window.saveInnerHeight != window.innerHeight ) 
    {
        window.history.go(0);
    }
}


//-->
</SCRIPT>
<%
dim strBkcolor, strBaseFont, strBodyParams
strBkcolor = Application("BACKGROUND_COLOR")
strBaseFont = Application("BASEFONT_COLOR")
strBodyParams = Application("BODY_PARAMS")
strOnload="SaveSize();" 
If IsEmpty(strBkcolor) Or strBkcolor="" Then
	Writeln "<BODY " & strBodyParams & " BACKGROUND=""../images/back3.gif"" TEXT=""black"" LINK=""blue"" ALINK=""red"" VLINK=""blue"" onHelp=""OnHelp(); window.event.returnValue = false;"" onLoad=""" & strOnLoad & """ onUnload=""ResetOpener();"" onresize=""Resize();"">"
Else
	Writeln "<BODY " & strBodyParams & " BGCOLOR=""" &strBkcolor & """ TEXT=""black"" LINK=""blue"" ALINK=""red"" VLINK=""blue"" onHelp=""OnHelp(); window.event.returnValue = false;"" onLoad=""" & strOnLoad & """ onUnLoad=""ResetOpener();"" onresize=""Resize();"">"
End If 	
Writeln "<BASEFONT FACE=""" & strBaseFont & """>"
%>
<FORM ACTION="changefont.asp" METHOD="POST" NAME="ChangeFontForm">
<INPUT TYPE="HIDDEN" NAME="FontSize" VALUE=<%=strFontSize%>>
<INPUT TYPE="HIDDEN" NAME="FontColor" VALUE=<%=strFontColor%>>
<INPUT TYPE="HIDDEN" NAME="BGColor" VALUE=<%=strBGColor%>>
<INPUT TYPE="HIDDEN" NAME="OldFontSize" VALUE=<%=strOldFontSize%>>
<INPUT TYPE="HIDDEN" NAME="OldFontColor" VALUE=<%=strOldFontColor%>>
<INPUT TYPE="HIDDEN" NAME="OldBGColor" VALUE=<%=strOldBGColor%>>
<DIV ALIGN="RIGHT"> 
  <H3 ALIGN="CENTER">Настройка параметров текста</H3>
  <DIV ALIGN="LEFT">
    <TABLE >
	  <TR>
        <TD WIDTH="10">
        <TD ><B>Пример:</B></TD>
	  </TR>
	</TABLE>
  </DIV>
  <TABLE BORDER="1" CELLPADDING="10" WIDTH="95%" ALIGN="CENTER">
    <TR> 
	  <TD ALIGN="LEFT" BGCOLOR="<%=strBGColor%>"> 
		<FONT SIZE="<%=strFontSize%>" COLOR="<%=strFontColor%>" >
		<P><TT> ПРИМЕР ДЛЯ НАСТРОЙКИ ТЕКСТА </TT></P>
		<P><TT>Этот небольшой текст позволит вам настроить цвет и размер шрифта, а также 
			цвет фона, для того чтобы воспринимать текст так, как вам удобно.
		</TT></P>
		<P>
		<TT>Чтобы суметь ответить на контрольные вопросы, нужно понять текст: выделить в нем главную мысль,
			представить себе, на какие смысловые части можно разделить текст и о чем говорится в каждой из частей. 
			Запомните основные факты, изложенные в тексте.
		   </TT></P>
		</FONT>
      </TD>
    </TR>
  </TABLE>
</DIV>
  <TABLE CELLPADDING="1" WIDTH="100%" >
    <TR> 
      <TD ALIGN="CENTER"><B>Параметры текста:</B></TD>
    </TR>
  </TABLE>

  <TABLE WIDTH="590" BORDER="1" ALIGN="CENTER" BGCOLOR="#DDDDDD">
    <TR>
      <TD WIDTH="23%"><B>Размер шрифта</B></TD>
      <TD WIDTH="34%"><B>Цвет шрифта</B></TD>
      <TD WIDTH="33%"><B>Цвет фона</B></TD>
    </TR>
    <TR>
      <TD WIDTH="33%"> 
        <TABLE WIDTH="100%" BORDER="0">
          <TR>
            <TD WIDTH="30%">Текущий:</TD>
            <TD WIDTH="70%"><%=strOldFontSize%></TD>
          </TR>
        </TABLE>
      </TD>
      <TD WIDTH="33%"> 
        <TABLE WIDTH="100%" BORDER="0">
          <TR>
            <TD WIDTH="30%">Текущий:</TD>
            <TD WIDTH="70%" BGCOLOR="<%=strOldFontColor%>">&nbsp;</TD>
          </TR>
        </TABLE>
      </TD>
      <TD WIDTH="34%"> 
        <TABLE WIDTH="100%" BORDER="0">
          <TR>
            <TD WIDTH="30%">Текущий:</TD>
            <TD WIDTH="70%" BGCOLOR="<%=strOldBGColor%>">&nbsp;</TD>
          </TR>
        </TABLE>
      </TD>
    </TR>
    <TR>
	  <TD WIDTH="33%" HEIGHT="81" ALIGN="LEFT" VALIGN="TOP" >
	     Новый: <SELECT NAME="FS" onchange="JavaScript:ChangeFontSize();">
	       <% Dim i 
              For i=1 To 6 %>	       
	             <OPTION VALUE=<%=i%> 
	       <%       If i=CInt(strFontSize) Then%> 
	                    SELECTED 
	       <%       End If %>
	              ><%=i%>
	       <% Next
	       %>         
	          </SELECT>   
	  </TD>
      <TD WIDTH="34%" HEIGHT="81"> 
        <TABLE WIDTH="100%" BORDER="0" CELLPADDING=0 CELLSPACING = 1 >
          <TR> 
            <TD COLSPAN="9">Выберите новый</TD>
          </TR>
          <%dim row1,col1
			For row1=0 To 5 %>
            <TR> 
		  <%  For col1=0 To 7 %>	
              <TD BGCOLOR=<% =Colors(row1,col1)%> ALIGN = "CENTER" VALIGN="MIDLE"><A HREF="JavaScript:ChangeFontColor('<% =Colors(row1,col1)%>');" onclick="JavaScript:ChangeFontColor('<% =Colors(row1,col1)%>'); return false;"><IMG SRC="../images/empty_cell.gif" BORDER=0></A></TD>
          <%  Next %>     
            </TR>			
		  <%Next %>
        </TABLE>
      </TD>  
      <TD WIDTH="33%" HEIGHT="81"> 
        <TABLE WIDTH="100%" BORDER="0" CELLPADDING=0 CELLSPACING = 1 >
          <TR> 
            <TD COLSPAN="9">Выберите новый</TD>
          </TR>
          <%dim row2,col2
			For row2=0 To 5 %>
            <TR> 
		  <%  For col2=0 To 7 %>	
			  <TD BGCOLOR=<% =Colors(row2,col2)%> ><A HREF="JavaScript:ChangeBGColor('<% =Colors(row2,col2)%>');" onclick="JavaScript:ChangeBGColor('<% =Colors(row2,col2)%>');return false;"><IMG SRC="../images/empty_cell.gif" BORDER=0></A></TD>		  
          <%  Next %>     
            </TR>			
		  <%Next %>
        </TABLE>
      </TD>  
    </TR>
  </TABLE>        
  <table ALIGN="CENTER" BORDER="0" WIDTH="95%" >
  <tr>
 	<td ALIGN="CENTER">
    <% = ShowButton( "Save", "Сохранить", "JavaScript:GoSave()", "Сохранить новые параметры" )%>
	&nbsp	
	<% = ShowButton( "Cancel", "Отказаться", "JavaScript:window.close()", "Отменить все изменения" ) %>
	</td>
  </tr>
  </table>  
</FORM>

</BODY>
</HTML>
