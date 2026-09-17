<% ' © 2007-2013 IRTech. All rights reserved.
const kErrorActivities = "Учебные курсы недоступны." '"Cannot get activities"

Function GetSafeActivityID(ByVal strLAID)
	If Not bIsDebug Then On Error Resume Next
	Dim strSafeLAID
	strSafeLAID = GetSafeStr( strLAID, 20, "" )
	If strSafeLAID <> "" Then
		Dim strSchoolActivityList
		strSchoolActivityList = obTokenMgr.GetData(strToken, "SCHOOLACTIVITYLIST" )
		If Not objNSNET.CheckActivityID(strSafeLAID, strSchoolActivityList) Then strSafeLAID = ""
		TestError kErrorActivities
	End If
	GetSafeActivityID = strSafeLAID
End Function

Sub GetTermInfoForClassAndDate_IUP(strClassID_IUP, dtCurrDate, ByRef strTermID, ByRef strTermName)
	Dim objRs
	strTermName = ""
	strTermID = ""

	If strClassID_IUP <> "0" And strClassID_IUP <> "-1" And IsDate(dtCurrDate) Then
		Call ParseIupClassId(strClassID_IUP, strClassId, strIupGrade, bIsIupGrade)
		Set objRs = objNSNET.GetClassTermInfoForDate_IUP(strClassID, strIupGrade, CLng(strCurrYearID), dtCurrDate)
		If Not objRs.EOF Then
			strTermName = CStr(objRs("TERMNAME"))
			strTermID = CStr(objRs("TERMID"))
		End If
	End If
End Sub%>
