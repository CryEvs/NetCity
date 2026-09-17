<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
const idClass = 0
const idStage = 1
const idGrade = 2
const idYear = 3
Dim strTermID, strTermTypeID, strPrevTermID
Dim strPrevTermName, strTermName, strTitleAddString
Dim strForParameter, strForParameterValue
Dim objTermsRs
Dim arrRows, strNoStudentsMessage, bLessEq21
Dim dtCurrPeriodEndDate, dtCurrPeriodStartDate, nViewType, nOneOrTwo, nAbbrLimit
Dim nOrLessViewType, nHidePrevPeriod

Dim strTeacherID, strClassID

Sub specialRead()
	strClassID = GetSafeLng( obTokenMgr.GetData( strToken, stCurrClass ), Null )
	strTermID = GetSafeID( obTokenMgr.GetData( strToken, stCurrTerm ), Null )
	strTeacherID = GetSafeID( Request("TID"), Null )
End Sub

Function GetReport()
	Dim strReport

	strReport = GetPageTitleFor( GetPageTitle(), GetPageParams() )

	strReport = strReport & GetReportTable()
	GetReport = strReport & GetPageVer()
End Function

Function GetPageParams()
	GetPageParams = _
		Array( obLanguage("Common","kSchoolYear"), obTokenMgr.GetData( strToken, "CurrYearName" ),_
			obLanguage("Common","kClass",strFunctionalityType), objNSNET.GetClassName(strClassID ),_
			obLanguage("Common","kClassChief",strFunctionalityType), objNSNET.GetUserNickName(strTeacherID ),_
			obLanguage("Filter","kMarkFor"), strTermName)
End Function

Sub CalcTermParams
	strPrevTermName = ""
	nOrLessViewType = GetSafeLng( Request("OrLessViewType"), 0 )
	nHidePrevPeriod = GetSafeLng( Request("HidePrevPeriod"), 0 )
	nViewType = GetSafeLng( Request("ViewType") , 0 )
	Call obTokenMgr.SetData(strToken, "HidePrevPeriod", nHidePrevPeriod)
	Call obTokenMgr.SetData(strToken, "ViewType", nViewType)
	Call obTokenMgr.SetData(strToken, "OrLessViewType", nOrLessViewType)
	bLessEq21 = (nOrLessViewType = 0)
	nAbbrLimit = IIF(nHidePrevPeriod, 27, 7)
	Select Case strTermID
		Case kReportYearTermType
			strTermName = obLanguage("Common","kYear")
			strTitleAddString = " " & obLanguage("Reports","kForSchoolYear")
		Case kReportTotalTermType
			strTermName = obLanguage("Reports","kYearTotals")
			strTitleAddString = " " & obLanguage("Reports","kForTotals")
			strPrevTermName=obLanguage("Reports","kYearMarks")
			strPrevTermID=kReportYearTermType
		Case Else
			strTermName = objNSNET.GetTermName(strTermID)
			Set objTermsRs = objNSNET.GetTermInfo(strTermID)
			strTermTypeID = GetSafeID(objTermsRs("TERMTYPEID"), Null)
			dtCurrPeriodStartDate = objTermsRs("STARTDATE")
			dtCurrPeriodEndDate = objTermsRs("ENDDATE")
			'bLessEq21 = (DateDiff("d",NSNow, dtCurrPeriodEndDate,0,0) <=21)
			If nHidePrevPeriod = 0 Then
				Set objTermsRs = objNSNET.GetPreviousTermsList(strTermTypeID, strCurrYearID, dtCurrPeriodStartDate)
				If Not objTermsRs.EOF Then
					strPrevTermName = DB_2_HTML(objTermsRs("TERMNAME"))
					strPrevTermID = GetSafeID(objTermsRS("TERMID"), Null)
				End If
			End If
	End Select
End Sub

Function GetTableHeader()
	'draw titles of table
	strReport = "<table class=""table-print-text"">" &_
	"<tr><th>&nbsp;</th>" &_
	"<th colspan=""2"">" 

	If strTermID = kReportYearTermType Then
		strReport = strReport & obLanguage("Common","kSchoolYear")
	ElseIf strTermID = kReportTotalTermType Then
		strReport = strReport & DB2HTML(strTermName) & "</th><th colspan=""2"">" & DB2HTML(strPrevTermName)
	Else
		'get StartDate of Current Period
		strReport = strReport & obLanguage("Reports","kCurrPeriod") & "<br>(" & DB2HTML(strTermName) & ")"
		If strPrevTermName<>"" Then
			If IsArray(arrRows) Then
				If IsArray(arrRows(0)) Then
					If Ubound(arrRows(0)) > 2 Then
						strReport = strReport & "</th><th colspan=""2"">" & _
							obLanguage("Reports","kPreviousPeriod") & "<br>(" & DB2HTML(strPrevTermName) & ")"
					End If
				End If
			End If
		End If
	End If
	GetTableHeader = strReport & "</th></tr>"
End Function

Function GetReportRows()
	Dim i,j
	Dim strTable
	GetReportRows = ""
	For i = 0 To Ubound(arrRows)
		If IsArray(arrRows(i)) Then
			GetReportRows = GetReportRows & "<tr><td>" & DB2HTML_BR(arrRows(i)(0)) & "</td>"
			For j = 1 To Ubound(arrRows(i)) Step 2
				GetReportRows = GetReportRows & "<td class=""cell-num"">" & DB2HTML_BR(arrRows(i)(j)) & "&nbsp;</td><td>"
				'это условие нужно для отрисовки рамки нижних правых ячеек (без пробела отрисовываться не будет)
				If nViewType=0 Or i<>6 Or bLessEq21 Then
					If arrRows(i)(2) = "0/0 уч-ся" Then
						GetReportRows = GetReportRows & Replace(DB2HTML_RN(arrRows(i)(j+1), "tr"),"|","</td><td>| ") & "&nbsp;</td>"
					Else
						GetReportRows = GetReportRows & Replace(DB2HTML_RN(arrRows(i)(j+1), "tr"),"|","</td><td>| ") & "</td>"
					End If
				Else
					GetReportRows = GetReportRows & "..."
				End If
			Next
			GetReportRows = GetReportRows & "</tr>"
		End If
	Next
End Function

Function GetReportTable()
	If Not IsArray(arrRows) Then
		GetReportTable = GetWarning( strNoStudentsMessage & " " & strTermName )
	Else
		GetReportTable = GetTableHeader() & GetReportRows() & "</table>"
	End If
End Function

%>
