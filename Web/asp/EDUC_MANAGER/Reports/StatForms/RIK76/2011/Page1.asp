<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 1
End Function

Sub DrawPage()
	If strWarningMessage <> "" Then
		DrawWarningEx DB2HTML_BR(strWarningMessage), True
	End If
	%>
	<!-- #INCLUDE FILE="Sections/Section0_inc.asp" -->
	<%
End Sub

Sub SpecialMain()
	Call InitializeCommonYears
End Sub

Sub SpecialReadState()
	Call InitFilterTitlePage()
End Sub

Sub SpecialOnHead()
End Sub
%>