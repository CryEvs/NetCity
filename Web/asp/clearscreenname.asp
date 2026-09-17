<% ' © 2007-2008 IRTech. All rights reserved.
Response.Buffer = TRUE
Session("NSSession")("ScreenName") = ""
RedirectToScreen("postlogin.asp")

Sub RedirectToScreen(strAction)
	Response.Clear
	Dim dctFParams, dctQSParams, strQS
	
	Dim param
	strQS = ""
    For Each param In Request.QueryString
       strQS = strQS & "&" & param & "=" & Request.QueryString(param)  
    Next   
    If strQS<>"" Then
        strQS = "?" & Mid(strQS,2) 
    End If
%>	<html><head>
    </head>
    <body>
      <FORM NAME="RF" METHOD="post" ACTION="<%=strAction & strQS%>" > 
      <INPUT TYPE="HIDDEN" NAME="FOO" VALUE="">
      <%For Each param In Request.Form %>
        <INPUT TYPE="HIDDEN" NAME="<%=param%>" VALUE="<%=Request.Form(param)%>">
      <%Next %>  
      </FORM>
      <script>
        var form=document.forms[0];
        form.submit();
      </script>  
    </body>
    </html>  
<%
    Response.End
    Set Session("NSSession")("stRequestQS") = null
    Set Session("NSSession")("stRequestForm") = null
End Sub

%>
