
<% ' © 2007-2008 IRTech. All rights reserved.
Dim objConflicts, objSchoolDocs, objNADocs

Sub ReadState()
End Sub

Sub Main
    Set objConflicts = objNSNET.GetReplConflicts()
	TestError obLanguage("ServAdmin","kErrCantGetInfoConflicts")
End Sub

Sub DrawTable()
	Dim nStudID
	If objConflicts.EOF Then%>
		<h3 align="left"><%=obLanguage("ServAdmin","kNoConflicts")%></h3><%
	Else %>
		<table border="1" cellpadding="3" cellspacing="0" class="ThinTable">
		<tr>
		<th><%=obLanguage("ServAdmin","kDocNumber")%></th><th><%=obLanguage("ServAdmin","kDocDate")%></th><th><%=obLanguage("ServAdmin","kSchool")%></th></tr><%
		Do While Not objConflicts.EOF
			Set objSchoolDocs = objConflicts.Fields()("rsSchoolDocs").Value
			if nStudID <> objConflicts("USERID") Then
				nStudID = objConflicts("USERID")
				If Not objSchoolDocs.EOF Then Response.Write "<tr><td colspan='3'>" & objSchoolDocs("NICKNAME") & "</td></tr>"
	        End IF
	        If Not objSchoolDocs.EOF Then Response.Write "<tr><td>" & objSchoolDocs("DOCNUMBER") & "</td><td>" & objSchoolDocs("DOCDATE") & "</td><td>" & objSchoolDocs("SCHOOLNAME") & "</td></tr>"
			Set objNADocs = objConflicts.Fields()("rsNADocs").Value
	        If Not objNADocs.EOF Then Response.Write "<tr><td>-</td><td>-</td><td>Архив</td></tr>"
			objConflicts.MoveNext
		Loop
		%></TABLE><%
	End If
End Sub%>
