<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kEpsilon = 0.00001

Dim rsStudents, rsDays, rsAttendances
Dim bAll, bEditSelfViewAll
Dim strTeacherID
Dim bRight_arJournalEditAll

Dim bEmpty
Dim dtYearStart_1, dtYearEnd_1, dtYearEnd_30
Dim dtLastPayMonth, nMonthsCount
Dim arrClasses
Dim bOutDebt

Function hasUserRightsOnPage()
	bAll = True
	bRight_arJournalEditAll = HasUserRight(arJournalEditAll)
	If HasUserRight(arJournalEditAll) Then hasUserRightsOnPage =True :Exit Function
	If HasUserRight(arJournalViewAll) Then hasUserRightsOnPage =True :Exit Function
	
	bAll = False
	If HasUserRight(arJournalEditSelf) Then hasUserRightsOnPage =True :Exit Function
	hasUserRightsOnPage = HasUserRight(arJournalViewSelf)
End Function

Sub GetRightsOnPage()
	bEditSelfViewAll = False
	If readonly Then Exit Sub
	If HasUserRight(arJournalEditAll) Then Exit Sub

	If HasUserRight(arJournalEditSelf) Then
		If HasUserRight(arJournalViewAll) Then bEditSelfViewAll = True
	Else
		readonly = True
	End If
End Sub

Function GetPageTitle()
	GetPageTitle = obLanguage("Grade","kParentPay")
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbParentPay
 End Function

Sub ReadState()
	Dim bIsClassChief
	Dim nCnt

	strTeacherID = strUserID

	Call obTokenMgr.SetData(strToken, stParentPayTable, "")
	Call GetRightsOnPage()

	If bAll Then Call InitYearClassesAll() Else Call InitTeacherClasses(False)
	If objClassesRs.EOF Then Exit Sub

	bOutDebt = (strClassID = "-1")

	arrClasses = objClassesRs.GetRows(,,Array("CLASSID", "CLASSNAME"))
	If bAll Then
		nCnt = UBound(arrClasses, 2)
		nCnt = nCnt + 1
		ReDim Preserve arrClasses(1, nCnt)
		arrClasses(0, nCnt) = -1
		arrClasses(1, nCnt) = obLanguage("Grade","kOutDebt")
	End If
	' Сверху сделали из objClassesRs - arrClasses, в конец arrClasses добавляем ещё элемент, если надо.
	' Заменяем objClassesRs на arrClasses, после этого DrawYearClasses сама разберётся, что надо отрисовать массив
	objClassesRs = arrClasses

	bIsClassChief = objNSNET.IsClassChief(strClassID, strUserID)
	If Not readonly And bEditSelfViewAll And Not bIsClassChief Then
		If objNSNET.GetSafeYearTeacherClassID(strCurrYearID, strUserID, GetSafeID(strClassID,"0"))<>strClassID Then readonly=true
	End If
	If Not readonly And Not bRight_arJournalEditAll Then
		readonly = Not bIsClassChief
	End If

	Call CalcCurrYearLimits( dtYearStart, dtYearEnd )

	dtYearStart_1 = DateSerial(Year(dtYearStart), Month(dtYearStart), 1)
	dtYearEnd_1 = DateSerial(Year(dtYearEnd), Month(dtYearEnd), 1)
	
    dtYearEnd_30 = DateAdd("m", 1, dtYearEnd_1)
    dtYearEnd_30 = DateAdd("d", -1, dtYearEnd_30)
End Sub

Sub WriteState()
	If bExit Then Exit Sub
	WriteClass
End Sub

Sub Main()
	bEmpty = True
	If strClassID = "0" Then Exit Sub

	Set rsStudents = objNSNET.GetParentPayForDates(strSchoolID, strCurrYearID, strClassID, dtYearStart_1, dtYearEnd_30)
	bEmpty = rsStudents.EOF
	If bEmpty Then Exit Sub

	dtLastPayMonth = objNSNET.GetLastPayMonth(strCurrYearID)
	If IsDull(dtLastPayMonth) Then
		dtLastPayMonth = dtYearEnd_1
	Else
		If DateDiff("d", dtLastPayMonth, dtYearEnd_1, 0, 0) <> 0 Then
			dtLastPayMonth = DateAdd("m", 1, dtLastPayMonth)
		End If
	End If
	nMonthsCount = DateDiff("m", dtYearStart_1, dtLastPayMonth) + 1
End Sub

Sub onHead()
	If strClassID = "0" Then Exit Sub%>

	<script><!--
		function EditMonth(nYear, nMonth, nNumMonth) {
			var form = document.forms['MainForm'];

			form.elements['NYear'].value = nYear;
			form.elements['NMonth'].value = nMonth;
			form.elements['NumMonth'].value = nNumMonth;

			let monthId = nYear + "_" + nMonth;
			let editUrl = "/angular/school/parentpay/edit/?classId=<%=strClassID%>&monthId=" + monthId;
			
			postTo(editUrl)
			//postTo("EditParentPay.asp", {NYEAR: 2018, NMonth: 9, NumMonth: 1});
			//DoSubmit( form, "EditParentPay.asp" );
		}
		//-->
	</script><%
End Sub

Sub onDrawPage()
	Dim strPayTable, strPayTable_RO%>

	<form name="MainForm" method="post" action="ParentPay.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("NYear","", "NMonth","", "NumMonth",""))%><%

		Call DrawButtonsFilters(Not bEmpty, "MainForm")
		If strClassID = "0" Then Response.Write "</form>" : Exit Sub
		If rsStudents.EOF Then
			Call DrawInfo(obLanguage("Filter","kNoStudents",strFunctionalityType), False)
			Response.Write "</form>"
			
			Exit Sub
		End If

		Call GetPayTable(True, strPayTable, strPayTable_RO)
		Call obTokenMgr.SetData(strToken, stParentPayTable, strPayTable_RO)%>

		<div class="row">
			<div class="col-md-12">
				<div class="table-responsive"><%
					rw strPayTable%>
				</div>
			</div>
		</div>
	</form><%
End Sub

Sub DrawButtons()
End Sub

Sub DrawLinkButtons()
	Call DrawPrintButtons()
End Sub

Sub DrawFilters(strForm)
	DrawYearClasses strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType)) : If bExit Then Exit Sub
End Sub

Sub GetPayTable(bLink, strReport, strReport_RO)
	Dim i, nRow
	Dim strName, strStudID
	Dim rsParentPay
	Dim fDebt_Init, nAttendCount, nNumMonth_Curr, fContent, fCompens, fDebt_Last
	Dim nNumMonth_Last
	Dim strReport_1, strReport_2
	Dim strReport_Months, strReport_Months_RO
	Dim bNegative, strStyle
	Dim strSYName

	strReport_1 = "<table class=""table table-bordered table-xs table-striped table-hover print-block"">"
	strReport_1 = strReport_1 & "<tr><th rowspan=""2"">" & obLanguage("Common","kStudents",strFunctionalityType) & "</th>" &_
		"<th rowspan=""2"">" & DB2HTML_BR(obLanguage("Grade","kOverpayDebt")) & "</th>"

	strReport_Months_RO = DrawMonths(False)
	If bLink Then
		strReport_Months = DrawMonths(True)
	Else
		strReport_Months = strReport_Months_RO
	End If

	strReport_2 = "<th rowspan=""2"">" & DB2HTML_BR(obLanguage("Grade","kOverpayDebt")) & "</th></tr>"

	strReport_2 = strReport_2 & "<tr>"
	For i = 1 To nMonthsCount
		strReport_2 = strReport_2 & "<th>" & obLanguage("Grade","kAttendanceS") & "</th><th nowrap>" & _
			obLanguage("Grade","kForContentS") & "</th><th nowrap>" & obLanguage("Grade","kToCompensS") & "</th>"
	Next
	strReport_2 = strReport_2 & "</tr>"

	Set rsParentPay = rsStudents("rsParentPay").Value
    nRow = 0
	While Not rsStudents.EOF
	    nRow = nRow + 1
		strName = CStr(rsStudents("NICKNAME"))
		If bOutDebt Then
			strSYName = GetSafeStr(rsStudents("YEARNAME"), -1, "")
			If strSYName <> "" Then
				strName = strName & " (" & strSYName & ")"
			End If
		End If
		fDebt_Init = rsStudents("DEBT")
		If IsDull(fDebt_Init) Then
			fDebt_Init = 0
		End If
		fDebt_Last = fDebt_Init
		strReport_2 = strReport_2 & "<tr align=""center"">"
		strReport_2 = strReport_2 & "<td align=""left"" class=""cell-text""><nobr>" & nRow & ". "
		strReport_2 = strReport_2 & DB2HTML(strName)
		strReport_2 = strReport_2 &"</nobr></td>"

		bNegative = False
		strStyle = ""
'		If Not IsDull(fDebt_Init) Then
			If CDbl(fDebt_Init) < -(kEpsilon) Then
				bNegative = True
				strStyle = " style=""color:red"""
			End If
'			If Abs(CDbl(fDebt_Init)) < kEpsilon Then
'				fDebt_Init = Null
'			End If
'		End If
		strReport_2 = strReport_2 & "<td class=""xn1c""" & strStyle & ">" & DB2HTML(fDebt_Init) & "</td>"

		nNumMonth_Last = 0
		While Not rsParentPay.EOF
			nNumMonth_Curr = CLng(rsParentPay("NUMMONTH"))
			nAttendCount = rsParentPay("ATTENDCOUNT") ' may be Null!
			fContent = rsParentPay("CONTENT")
			fCompens = RoundNullableDouble(rsParentPay("COMPENS"), 2)
'			If Not IsDull(fCompens) Then
'				If Abs(CDbl(fCompens)) < kEpsilon Then
'					fCompens = Null
'				End If
'			End If

			'fDebt = rsParentPay("DEBT")
			fDebt_Last = CDbl(rsParentPay("DEBT")) + CDbl(rsParentPay("CORRECTION"))

			For i = nNumMonth_Last + 1 To nNumMonth_Curr - 1
				strReport_2 = strReport_2 & "<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
			Next
			strReport_2 = strReport_2 & "<td class=""xn3c"">" & DB2HTML(nAttendCount) & "</td>"
			strReport_2 = strReport_2 & "<td class=""xn1c"">" & DB2HTML(fContent) & "</td>"
			strReport_2 = strReport_2 & "<td class=""xn1c"">" & DB2HTML(fCompens) & "</td>"

			nNumMonth_Last = nNumMonth_Curr
			rsParentPay.MoveNext
		Wend

		For i = nNumMonth_Last + 1 To nMonthsCount
			strReport_2 = strReport_2 & "<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>"
		Next

		bNegative = False
		strStyle = ""
'		If Not IsDull(fDebt_Last) Then
			If CDbl(fDebt_Last) < -(kEpsilon) Then
				bNegative = True
				strStyle = " style=""color:red"""
			End If
'			If Abs(CDbl(fDebt_Last)) < kEpsilon Then
'				fDebt_Last = Null
'			End If
'		End If
		strReport_2 = strReport_2 & "<td class=""xn1c""" & strStyle & ">" & DB2HTML(RoundNullableDouble(fDebt_Last, 2)) & "</td>"
		strReport_2 = strReport_2 & "</tr>"
		rsStudents.MoveNext
	Wend

	strReport_2 = strReport_2 & "</table><br>"

	strReport = strReport_1 & strReport_Months & strReport_2
	strReport_RO = strReport_1 & strReport_Months_RO & strReport_2

'	GetPayTable = strReport & "</table><br>"
End Sub

Function DrawMonths(bLink)
	Dim dtCurr
	Dim strMonths, i
	Dim nMonth, nYear

	strMonths = ""
	dtCurr = dtYearStart_1
	For i = 1 To nMonthsCount
		nMonth = Month(dtCurr)
		nYear = Year(dtCurr)

		strMonths = strMonths & "<th colspan=""3"">"
		If bLink Then
			strMonths = strMonths & ShowAnchor( "EditMonth(" & nYear & ", " & nMonth & ", " & i & ")" , obLanguage("Grade","kParentsPayFilling"), obLanguage.GetMonthName(nMonth, False) & "&nbsp;" & nYear, "")
		Else
			strMonths = strMonths & obLanguage.GetMonthName(nMonth, False) & "&nbsp;" & nYear
		End If
		strMonths = strMonths & "</th>"

		dtCurr = DateAdd("m", 1, dtCurr)
	Next

	DrawMonths = strMonths
End Function%>