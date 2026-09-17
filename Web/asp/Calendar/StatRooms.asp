<!-- #INCLUDE FILE=../headerprint.asp -->
<% ' © 2007-2008 IRTech. All rights reserved.

Const kMaxRoomLength = 50

Dim objRooms, nRoomID
Dim strSaved

Function GetPageTitle()
	GetPageTitle = obLanguage("Calendar","kTitleStatRooms",strFunctionalityType)& GreenText(DB2HTML(obTokenMgr.GetData(strToken, "CurrYearName")))
End Function

Sub Main
	SetScriptTimeOut 900
	If Not IsDull(Request("Stat1") ) Then
		Call objNSNET.Execute_StatRooms(strSchoolID, strCurrYearID)
		strSaved = obLanguage("Calendar","kRecalculated")
	End If
	If obTokenMgr.GetData(strToken,"IsArchived") Then
		If Not IsDull(Request("Stat") ) Then
			Call objNSNET.Execute_StatRooms(strSchoolID, 0)
			strSaved = obLanguage("Calendar","kRecalculated")
		End If
	End If
	Set objRooms = objNSNET.GetRooms(strSchoolID, false)
End Sub

Function onLoad()
	If Not IsDull( strSaved ) Then onLoad = "JavaScript:alert('" & strSaved & "');"
End Function

Sub onHead()
%>
<SCRIPT><!--
function Stat()
{
	return confirm(language.Generic.Calendar.kMsgConfirm);
}
//--></SCRIPT>
<%
End Sub

Sub onDrawPage()
	Dim i, strRoom
	Dim rsTmp%>
	<form name="MainForm" method="post" action="StatRooms.asp" OnSubmit="return Stat();">
	<input type="hidden" name="AT" value="<%=strToken%>">
	<input type="hidden" name="VER" VALUE="<%=DateDiff("s", #1/1/1999#, Now, 0, 0 )%>"><%
	Response.Write "<h3>"&GetPageTitle()&"</h3>"
	If obTokenMgr.GetData(strToken,"IsArchived") Then%>
	<input type="submit" name="STAT" VALUE="<%=obLanguage("Calendar","kStat")%>"><%
	End If%>
	<input type="submit" name="STAT1" VALUE="<%=obLanguage("Calendar","kStatYear")%>"><br><br>
		<table cellpadding=5>
			<tr><td><%
			If objRooms.EOF Then%>
				<H3><%=obLanguage("Common","kNoRooms",strFunctionalityType)%></H3><%
			Else%>
				<table class="ThinTable" align="center" border="1" cellpadding="3" cellspacing="0">
					<tr align=center><th><%=obLanguage("Calendar","kRoomNumber")%></th><th><%=obLanguage("Common","kSubjects")%></th><th><%=obLanguage("Common","kTeachers",strFunctionalityType)%></th></tr><%
					While Not objRooms.EOF%>
						<tr align="center"><%
							nRoomID = CLng(objRooms("ROOMID"))
							strRoom = GetSafeStr( objRooms("ROOMNAME"), kMaxRoomLength, "-")
							Call DrawReadonlyCell( strRoom )
							Set rsTmp =  objNSNET.GetRoomSubjects(nRoomID)
							Response.Write "<td>"
							If rsTmp.EOF Then
								Response.Write "-"
							Else
								Do
									Response.Write rsTmp("SUBJECTNAME")
									rsTmp.MoveNext
									If rsTmp.EOF Then Exit Do
									Response.Write "; "
								Loop
							End If
							Response.Write "</td><td>"
							Set rsTmp =  objNSNET.GetRoomTeachers(nRoomID)
							If rsTmp.EOF Then
								Response.Write "-"
							Else
								Do
									Response.Write rsTmp("lastname")
									rsTmp.MoveNext
									If rsTmp.EOF Then Exit Do
									Response.Write "; "
								Loop
							End If
							Response.Write "</td>"%>
						</tr><%objRooms.MoveNext
					Wend%>
				</table><%
			End If%>
			</td></tr>
		</table>
	</form><%
End Sub

Sub DrawReadonlyCell( strInfo )
	%><TD NOWRAP ALIGN="CENTER"><%=DB2HTML(strInfo)%></TD><%
End Sub
%>
