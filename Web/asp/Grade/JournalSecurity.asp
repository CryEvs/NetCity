

<%' © 2007-2015 IRTech. All rights reserved.
'базовая йункциоя определения доступа к КЖ
'используется для опрделения досутпа на редактирование текущих и итоговых оценок. в зависимости от передаваемых прав 
Function HasUserRightJournalEditAccess( arRightEditAll, arRightViewAll, arRightEditSelf, nSubjectGroupTeacherId, nTermId)
	Dim bIsSgTeacher, bEditAll, bEditSelf, bViewAll
	
	bEditAll = HasUserRight(arRightEditAll)
	'Проверка наличия права редактировать все
	If bEditAll Then
		HasUserRightJournalEditAccess = True
		Exit Function
	End If

	If bIsClassChief Then
		'у классного руководителя обычных классов - полные права
		'Для классных руководителей ИУП-классов используем режим readonly #7891
		If Not bIsIupGrade Then
			HasUserRightJournalEditAccess = True
			Exit Function
		End If
	End If

	bEditSelf = HasUserRight(arRightEditSelf)
	bViewAll =  HasUserRight(arRightViewAll)
	bIsSgTeacher = (nSubjectGroupTeacherId = Clng(strUserID))

	If bEditSelf Then
		If bIsSgTeacher Then
			'Если пользователь - преподаватель в данной ПГ - то полные права
			HasUserRightJournalEditAccess = True
			Exit Function
		End If

		If Not IsEmpty(nTermId) Then
			'если указан период - то уточняем не заместитель ли текущий пользователь у данной ПГ в данном периоде
			Call TermLimits( strTermID )
			If objNSNET.IsSubstituteForInterval(strSubjClassID, strUserID, dtTermStart, dtTermEnd) Then
				HasUserRightJournalEditAccess = True
				Exit Function
			End IF
		End If
	End If
	
	HasUserRightJournalEditAccess = False
End Function
%>