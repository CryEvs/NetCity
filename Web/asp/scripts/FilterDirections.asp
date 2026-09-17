<% ' © 2007-2015 IRTech. All rights reserved.

Dim strDirectionID, objDirections

Sub DrawDirections( theStrForm, bCanSelectAll )
	DrawFilterRow theStrForm, obLanguage("Reports","kProgramDirection"), "DIRECTIONID", objDirections, "DIRECTIONID", "DIRECTIONNAME", strDirectionID, bCanSelectAll
End Sub

Sub WriteDirection
	Call obTokenMgr.SetData(strToken, stCurrDirection, strDirectionID)
End Sub

Function InitCuriculumDirections(strTermID, minGrade, maxGrade, strProfileID)
	If IsDull( Request("DIRECTIONID") ) Then
		strDirectionID = GetSafeID(obTokenMgr.GetData(strToken, stCurrDirection), "-1")
	Else
		strDirectionID = GetSafeID( Request("DIRECTIONID"), "-1")
	End If
	Set objDirections = objNSNET.GetCuriculumDirections(strTermID, minGrade, maxGrade, strProfileID)
	If objDirections.EOF Then
		' Для данных условий нет направленностей программ ОДО. Для функционала, использующего эту ф-цию, это не очень критично, здесь генерировать ошибку не надо.
		strDirectionID = "-1"
		InitCuriculumDirections = False
		Exit Function
	End If

	If strDirectionID <> "-1" Then
		strDirectionID = GetSafeIDForRs(strDirectionID, objDirections, "DIRECTIONID")
	End If
	If strDirectionID = "0" Then strDirectionID = "-1"
	InitCuriculumDirections = True
End Function
%>
