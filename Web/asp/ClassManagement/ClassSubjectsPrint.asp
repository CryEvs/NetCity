<!-- #INCLUDE VIRTUAL="/asp/headerPrint.asp" -->
<!-- #INCLUDE FILE="ClassSubjects_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects_IUP.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim strTeacherID, strView, strCT, strHCT
Sub specialReadState()
	If nTypeOfView = kViewType_ByClasses Then
		strView = obLanguage("Reports","kByClasses",strFunctionalityType)
		If bIsIupGrade Then
			strHCT = obLanguage("SetupSchoolCalendar","kGrade",strFunctionalityType)
			strCT = strIupGrade
		Else
			strHCT = obLanguage("Common","kClass",strFunctionalityType) 
			strCT = objNSNET.GetClassName(strClassID)
		End If
	Else
		strTeacherID = obTokenMgr.GetData(strToken,stCurrTeacher)
		strView = obLanguage("ClassManagement","kByTeachers",strFunctionalityType)
		strHCT = obLanguage("Filter","kTeacherGB",strFunctionalityType)
		strCT = objNSNET.GetUserNickName(strTeacherID)
	End If
	readonly = True
End Sub

Sub onDrawPage()
	Response.Write GetPageTitlePrint(obLanguage("Common","kSubjects"), Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), obLanguage("Common","kView"), strView, strHCT, strCT ) )
	Call DrawTable()
	Response.Write GetPageVerPrint()
End Sub

Function GreenText(sumHours)
	GreenText = sumHours
End Function
%>
