<!-- #INCLUDE VIRTUAL="/asp/headerprint.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/ScreenNonPrint.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function getBGColor()
	getBGColor = "#EEEEEE"
End Function 

Sub onDrawHead()
	Call onHeadNonPrint()
End Sub

Sub onDrawPage()%>
<div class="container-fluid" style="padding-bottom:5px;">
	<div class="row-fluid">
		<div class="btn-group"><%
			Call InlineButton( "parent.frames['addrbkright'].SetAddress()", obLanguage("Common","kChoose"), "disk")
			Call ButtonCancel("parent.window.close()", obLanguage("Common","kBack"))%>
		</div>
	</div>
</div><%
End Sub
%>
