<% ' © 2007-2015 IRTech. All rights reserved.

Dim currMenuItem
currMenuItem = 0

'*********************************************************************************************************************************
' Menu drawing

Sub DrawMenu()
	Dim i
	Dim arrTopMenu	
	Dim menu, selectedMenuItem
	
	menu = objContextComponent.DrawMenu()
	Set selectedMenuItem = objContextComponent.GetSelectedMenuItem()

	%>
	<div class="btn-menu visible-scr-sm">
		<div class="btn-menu-body">
			<span class="icon-reorder"></span>
		</div>
		<div class="btn-menu-text">
			<%=selectedMenuItem.Name %>
		</div>
	</div>
	<div class="navbar navbar-default">
		<%=menu%>
		<%If IsShowYearsTabs And Not bTabInternalPage Then Call DrawSwitchYear() End If%>
	</div><%
End Sub

'*********************************************************************************************************************************
' Is Menu Item available

Function isInquiryRegAvailable()
	Dim bPreSchool
	isInquiryRegAvailable = False: Exit Function
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	isInquiryRegAvailable = obContext.ServerSettings.SystemSettings.ModuleEServices And bIsStaff And bPreSchool
End Function

' isInARGroup по смыслу это isMIAvailable
Function isInARGroup( nGroup )
	
End Function
%>
