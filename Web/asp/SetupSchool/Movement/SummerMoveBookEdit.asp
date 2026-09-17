<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE FILE="CommonMoveBookEdit_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub InitMoveDocDates()
	Dim objMovePeriods
	Dim dtMovePeriodSummerStart, dtMovePeriodSummerEnd, dtFutureYearStart
	' Для летнего движения определяем разрешённый диапазон дат. Он из настроек - летний отчётный период по движению.
	' Сейчас здесь работа происходит только для "будущего года" (т.е. до нажатия кнопки "Открыть новый год"), поэтому год
	' для ограничения берётся этот "будущий".
	' Если сделаем, чтобы редактировалось и после нажатия кнпки "Открыть новый год", т.е. в текущем рабочем году, то надо будет брать
	' уже этот год!
	' Соответственно убираем ненужные вещи для дат, которые нужны только для документов внутри года (сравнение термов и т.д.).

	Set objMovePeriods = objNSNET.GetSYMovePeriodsInfo(nYearID)
	If objMovePeriods.EOF Then GenerateError kUnexpErr

	dtMoveDocStart = CDate(objMovePeriods("STARTDATE"))
	dtMoveDocEnd = CDate(objMovePeriods("ENDDATE"))
End Sub

Sub InitClasses()
	Dim bAllClasses
	bAllClasses = True
	If nDocSubType=kmdstAllClassesEnroll Then
		bAllClasses = False
	ElseIf nDocType=kDocType_OUT Then
		bAllClasses = False
	End If
	If bAllClasses Then Call InitMoveDocClassesAll(nYearID, nDocType, nDocSubType, bAddSchool) Else Call InitMoveDocClasses(nYearID, nDocType, nDocSubType, bAddSchool)
End Sub

Sub SpecialReadState()
	bFutureMode = True
	bSummerPage = True
	nYearID = objNSNET.GetSchoolFutureYear(strSchoolID)
	If nYearID = 0 Then GenerateError kUnexpErr
End Sub

' Подготовка термов (уч. периодов) для их динамического показа согласно дате документа.
' Если в документе есть классы, учащиеся по разным типам уч. периодов, то уч. период не показывается, даже "лето", хотя он есть у всех.
Sub GetTerms()
	Dim cmdMoveDocClasses
	Dim strDocClass1ID, strDocClass2ID
	Dim strDocClasses, objTermTypes
	Dim objTerms
	Dim arrTermsReal, i, j, nRealTermsUBound, nExitIndex
	Dim dtMinTermsEndCurr

	strDocClasses = ""
	bEmptyStudents = True
	If strDocID > 0 Then
		Set cmdMoveDocClasses = objNSNET.GetMoveDocClasses_Prepare()
		Set rsMoveDocClasses = objNSNET.GetMoveDocClasses_Execute(cmdMoveDocClasses, strDocID)
		Set cmdSubDocStudents = objNSNET.GetMoveSubDocStudents_Prepare(strCurrYearID, nDocType)
		Call objNSNET.DisposeCommand(cmdMoveDocClasses)

		If Not rsMoveDocClasses.EOF Then
			While Not rsMoveDocClasses.EOF
				strDocClass1ID = GetSafeStr(rsMoveDocClasses("CLASSID1"), -1, "")
				strDocClass2ID = GetSafeStr(rsMoveDocClasses("CLASSID2"), -1, "")
				If Not IsDull(strDocClass1ID) Then strDocClasses = strDocClasses & strDocClass1ID & ","
				If Not IsDull(strDocClass2ID) Then strDocClasses = strDocClasses & strDocClass2ID & ","
				rsMoveDocClasses.MoveNext
			WEnd
			rsMoveDocClasses.MoveFirst
			bEmptyStudents = False
		End If
	End If
	strTermTypeID = "0" ' undefined
End Sub

Sub SpecialWriteState()
	' ВНИМАНИЕ!!!
	' Сейчас заход на редактирование (создание нового) конкретного дока возможен только через страницу "Движение уч-ся".
	' Поэтому мы можем здесь запомнить флаг "Будущий год" и использовать его далее в "нижеследующих" страницах (выбор учеников, сохранение и т.д.).
	' Если это правило будет как-то нарушено, то возможны ошибки - может неправильно определяться режим "Будущего года".
	Call obTokenMgr.SetData(strToken, stFutureMode, 1)
End Sub

Sub WriteSpecialHiddenTags
	Response.Write WriteHiddenTags( Array("FutureMode", "1", "FutureYearID", nYearID,  "GoalPage", "SaveMoveBook.asp", "BackPage", "SummerMoveBookEdit.asp") )
End Sub

Sub OnDrawScripts()
%><script>
<!--
function SaveBook(){
	if( isDBBusy() ) return false;
	if (CanSaveBook()){
		setDBBusy();
		DoSubmit(document.MainForm,"SaveMoveBook.asp");
	}
}
function Back()
{
	if (dataWereChanged)
		if (!confirm(kDataWereChanged)) return;
	ok('MainForm','SummerMoveBook.asp');
}

//-->
</script><%
End Sub%>
