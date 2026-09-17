<%
Sub PrintPreScripts()
%><HTML>
<HEAD><TITLE><%=DB2HTML(strPageTitle)%></TITLE>
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=utf-8"></HEAD>
<SCRIPT><!--
function setState( img, state )
{
	var newImg = new Image();
	if( state == 1)
	newImg.src = '../images/' + img + '_on.gif';
	else if( state == 2)
	newImg.src = '../images/' + img + '_dn.gif';
	else
	newImg.src = '../images/' + img + '.gif';
	document['btn_'+img].src = newImg.src;
}
var arrPreloadImages = new Array();
function preloadImages()
{
	var nIndex = 0, nPos;
	for( i = 0; i < document.images.length; i++ ) {
    if( document.images[i].name.substring(0,4) == 'btn_' ) {
    	nPos = document.images[i].src.lastIndexOf('.gif');
    	if( nPos >= 0 ) {
          	arrPreloadImages[nIndex] = new Image();
    		arrPreloadImages[nIndex++].src = document.images[i].src.substring(0,nPos) + '_on.gif';
          	arrPreloadImages[nIndex] = new Image();
    		arrPreloadImages[nIndex++].src = document.images[i].src.substring(0,nPos) + '_dn.gif';
    	}
    }
    }
}
function OnHelp()
{
	window.open( '" & GetHelpLink() & "', 'Help', 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no' );
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
		if(chrome) {
			return;
		}
		window.history.go(0);
	}
}
//--></SCRIPT><%
End Sub

Sub PrintPreTitle()
	Dim strBkcolor, strBaseFont, strBodyParams
	strBkcolor = Application("BACKGROUND_COLOR")
	strBaseFont = Application("BASEFONT_COLOR")
	strBodyParams = Application("BODY_PARAMS")
	
    If IsEmpty( strBkcolor ) Or strBkcolor = "" Then
		Writeln "<BODY leftmargin=0 topmargin=0 bottommargin=0 rightmargin=0 marginwidth=0 marginheight=0 " & strBodyParams & " BACKGROUND=""../images/back3.gif"" TEXT=""black"" LINK=""blue"" ALINK=""red"" VLINK=""blue"" onHelp=""OnHelp(); window.event.returnValue = false;"" onLoad=""SaveSize();preloadImages();" & strOnLoad & """ onUnLoad=""" & strOnUnLoad & """ onresize=""Resize();"">"
	Else
		Writeln "<BODY leftmargin=0 topmargin=0 bottommargin=0 rightmargin=0 marginwidth=0 marginheight=0 " & strBodyParams & " BGCOLOR=""" &strBkcolor & """ TEXT=""black"" LINK=""blue"" ALINK=""red"" VLINK=""blue"" onHelp=""OnHelp(); window.event.returnValue = false;"" onLoad=""SaveSize();preloadImages();" & strOnLoad & """ onUnLoad=""" & strOnUnLoad & """ onresize=""Resize();"">"
	End If 	
	Writeln "<BASEFONT FACE=""" & strBaseFont & """>"
	Writeln "<A NAME=""top_screen""></A>"
	Writeln"<TABLE WIDTH=100% CELLSPACING=0 CELLPADDING=0 BORDER=0>"
	Writeln"  <TR BGCOLOR=#4545c3><TD COLSPAN=3>"
	Writeln"    <TABLE WIDTH=100% CELLSPACING=0 BORDER=0 BACKGROUND="""" CELLPADDING=0><TR>"
	Writeln"      <TD><font size=""5"" color=""white"">&nbsp;" & DB2HTML(PRODUCT_NAME) & "</font></TD>"
End Sub

Sub PrintHeaderMessage( strMsg )
		%><TD HEIGHT="200%" ALIGN="RIGHT" nowrap><BR><FONT size="5" color="white"><%=strMsg%></FONT></TD>
		<TD><IMG SRC="../images/trans.gif"></TD></TR>
		</TABLE></TD><%
End Sub

Sub PrintPrePage()
	Writeln"</TR>"
	Writeln"<TR ><TD><TABLE WIDTH=100% CELLSPACING=0 CELLPADDING=0 BORDER =0>"
	Writeln"<TR ><TD  WIDTH=100% HEIGHT=100% BACKGROUND=""../images/tb.gif"" VALIGN=TOP><IMG SRC=""../images/tb.gif"" ></TD></TR>"
	Writeln"<TR><TD WIDTH=100% VALIGN=TOP><TABLE WIDTH=100% CELLSPACING=0 BORDER=0 CELLPADDING=0><TR><TD>"
End Sub

Sub PrintPreFullTextPage()
	Writeln"</TR>"
	Writeln"<TR ><TD><TABLE WIDTH=100% CELLSPACING=0 CELLPADDING=0 BORDER =0>"
	Writeln"<TR ><TD  WIDTH=100% HEIGHT=100% BACKGROUND=""../images/tb.gif"" VALIGN=TOP><IMG SRC=""../images/tb.gif"" ></TD></TR>"
	Writeln"<TR><TD WIDTH=100% VALIGN=TOP><TABLE WIDTH=100% CELLSPACING=0 BORDER=0 CELLPADDING=0><TR><TD>"
End Sub

Sub PrintPreNoButtonsPage()
	Writeln"</TR>"
	Writeln"<TR ><TD><TABLE WIDTH=100% CELLSPACING=0 CELLPADDING=0 BORDER =0>"
	Writeln"<TR ><TD  WIDTH=100% HEIGHT=100% BACKGROUND=""../images/tb.gif"" VALIGN=TOP><IMG SRC=""../images/tb.gif"" ></TD></TR>"
	Writeln"<TR><TD WIDTH=100% VALIGN=TOP><TABLE WIDTH=100% CELLSPACING=0 BORDER=0 CELLPADDING=0><TR><TD>"
End Sub

Sub PrintPreButtons()
	Writeln "		</TD>"
	Writeln "		<TD WIDTH=20% VALIGN=TOP ALIGN=CENTER>"
	Call PrintInfo()
	Writeln "		<BR>"
End Sub

Sub PrintPreFullTextButtons()
	Writeln "		</TD>"
	Writeln "		<TD WIDTH=20% VALIGN=TOP ALIGN=LEFT>"
	Call PrintInfo()
	Writeln "		</TD>"
	Writeln "	</TR>"
	Writeln "	<TR>"
	Writeln "		<TD VALIGN=BOTTOM>"
End Sub

Sub PrintInfo()
  	If Not ( nInfoType = 0 Or nInfoType = 2 And IsEmptyStr(strID) ) Then
		Writeln "<TABLE BORDER=5 WIDTH=99% CELLSPACING=0 CELLPADDING=3>"
		Writeln "<TR>"
		Writeln "	<TD>"
		If nInfoType = 1 Then
			Writeln "<B>Республика:</B><BR><I>" & strCountryName & "</I>"
			If strStateName <> "" Then
				Writeln "<BR><B>Регион:</B><BR><I>" & strStateName & "</I>"
			End If
			If strCity <> "" Then
			    Writeln "<BR><B>Город/село:</B><BR><I>" & strCity & "</I>"
			    If strDistrict <> "" Then
			        Writeln "<BR><B>Район:</B><BR><I>" & strDistrict & "</I>"
			        If strSchoolName <> "" Then
			            Writeln "<BR><B>Школа:</B><BR><I>" & strSchoolName & "</I>"
			            If strTeacherName <> "" Then
			                Writeln "<BR><B>Учитель:</B><BR><I>" & strTeacherName & "</I>"
			                If strClassName <> "" Then
			                    Writeln "<BR><B>Класс/Предмет:</B><BR><I>" & strClassName & "</I>"
			                    If strStudentName <> "" Then
			                        Writeln "<BR><B>Ученик:</B><BR><I>" & strStudentName & "</I>"
			                    End If
			                End If
			            End If
			        End If
			    End If
			End If
		Else
			Writeln "<B>Школа:</B><BR><I>" & Storage.GetData( strID, "SchoolName" ) & ",</I><BR><I>" & Storage.GetData( strID, "City" ) & "</I>"
			Writeln "<BR><B>Учитель:</B><BR><I>" & Storage.GetData( strID, "TeacherName" ) & "</I>"
			Writeln "<BR><B>Класс/Предмет:</B><BR><I>" & Storage.GetData( strID, "ClassName" ) & "</I>"
			Writeln "<BR><B>Ученик:</B><BR><I>" & Storage.GetData( strID, "StudentName" ) & "</I>"
		End If
		Writeln "	</TD>"
		Writeln "</TR>"
		Writeln "</TABLE>"
	End If
End Sub

Sub PrintHints()
	Writeln "		</TD>"
	Writeln "	</TR>"
	Writeln "	</TABLE>"
End Sub

Sub PrintFooter()
	Writeln "</TD></TR></TABLE>"
	Writeln "</TD></TR>"
	Writeln "<TR><TD  WIDTH=100% HEIGHT=100% BACKGROUND=""../images/mid.gif"" VALIGN=TOP><IMG SRC=""../images/mid.gif"" ></TD></TR>"
	Writeln "<TR BGCOLOR=#4545c3 height=50><TD COLSPAN=1 ALIGN=LEFT>&nbsp;<FONT FACE=""Arial"" size=-1 color=white>"
	Writeln COPYRIGHT & "</FONT>"
	Writeln "</TD></TR ></TABLE>"
	Writeln "</TD></TR></TABLE>"
	Writeln "</BODY>"
	Writeln "</HTML>"
End Sub
%>
