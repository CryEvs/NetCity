
<% ' © 2007-2008 IRTech. All rights reserved.
Sub SetupTableDrawParams()
	Dim nStudCnt
	nStudCnt = objStudRs.RecordCount
	nMonHeight = 20
	If isIE Then
		nInHeight = nStudCnt * 17 + nTitleHeight + nScrollBarH + 8
	Else
		nInHeight = nStudCnt * 17 + nTitleHeight + nScrollBarH + 2
	End if
End Sub
%>
