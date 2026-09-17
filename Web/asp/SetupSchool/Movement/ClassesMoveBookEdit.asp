<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE FILE="CommonMoveBookEdit_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetCurrDocTypeName()
	GetCurrDocTypeName = obLanguage("Movement","kDocName_MOVE",strFunctionalityType)
End Function

Sub InitMoveDirections()
	bWithMoveOutDirection = True
	bWithMoveInDirection = True

	Call InitYearClasses()
	If objClassesRs.EOF Then 
		bNoMoveDirection = True
	End If
	Set objClassesRsMoveTo = objClassesRs
End Sub
%>