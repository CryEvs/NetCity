<!-- #INCLUDE FILE="StatForms_inc.asp" -->
<!-- #INCLUDE FILE="../../scripts/FiltersUsers.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
' NOTE: This file should be included before onDrawPage() sub and after end of the onHead() sub

Const kFormNameOSH1 = "OSH1"
Const kFormNameOSH2 = "OSH2"
Const kFormNameOSH5 = "OSH5"
Const kFormNameOSH9 = "OSH9"
Const kFormName83RIK = "83RIK"
Const kFormNameOO1 = "OO1"
Const kFormNameOO2 = "OO2"

Dim arrSchoolInfo, intRow
Dim blnIsOSHClosed, blnIsOSHMNSClosed, blnIsOSH2Closed, blnIsOSH5Closed, blnIsOSH9Closed, blnIsForm85KClosed, blnIsForm83RIKClosed, blnIsFormOO1Closed, blnIsFormOO2Closed
Dim blnIsFormOD1Closed
Dim blnIs1DOClosed, blnIs1DOPClosed
Dim blnIsOSHAvailable, blnIsOSHMNSAvailable, blnIsOSH2Available, blnIsOSH5Available, blnIsOSH9Available, blnIsForm85KAvailable, blnIsForm83RIKAvailable, blnIsFormND1Available, blnIsFormOO1Available, blnIsFormOO2Available
Dim blnIsFormOD1Available
Dim blnIsForm1DOAvailable, blnIsForm1DOPAvailable
Dim strShoolYearStart, strShoolYearEnd
Dim strShoolPrevYearStart, strShoolPrevYearEnd
Dim bIsNextYearCreated
Dim objSchoolFormComponent
Dim bIsMNS
Dim objSchoolParams
Dim strFullSchoolName
Dim bIsOSH1Relevance, bIsOSH2Relevance, bIsOSH5Relevance, bIsOSH9Relevance, bIsRIK83Relevance
Dim objStaffList

' NOTE: The following variables will be set up in the "IsOSHxClosed" function
strShoolYearRStart = ""
strShoolYearEnd = ""
strShoolPrevYearStart = ""
strShoolPrevYearEnd = ""
bIsNextYearCreated = False

Sub InitSchoolFormComponent()
	If Not IsObject(objSchoolFormComponent) Then
		Set objSchoolFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
		If objSchoolFormComponent Is Nothing Then GenerateError obLanguage("EMReports","kCantCreateMorfComponent")
		TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
	End If
End Sub

Sub LoadShoolInfoEx(form,page,section)
	Dim objInfo, i

	On Error Resume Next

	Call InitSchoolFormComponent()

	If form > 0 Then
		If form = 1 Then bIsMNS = (GetSafeLng(Request("MNS"), 0) = 1)

		Set dictSchoolInfo = objSchoolFormComponent.GetFormParameters(form, strCurrYearID, page, section, bIsMNS)
	Else
		Set dictSchoolInfo = objSchoolFormComponent.GetSchoolInfo(strSchoolID, page)
	End If

	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
End Sub

Sub InitStateFormsInfo
	If Not bIsDebug Then On Error Resume Next
	Call InitSchoolFormComponent()
	Dim dctAvailabilityInfo, dctCloseInfo, dctFormsRelevance
	Dim dctAvailabilityMnsInfo, dctCloseMnsInfo

	Set dctAvailabilityInfo = objSchoolFormComponent.GetStatFormsAvailability(strSchoolId, strCurrYearID)
	Set dctCloseInfo = objSchoolFormComponent.GetStatFormsCloseInfo(strCurrYearID)
	Set dctFormsRelevance = objSchoolFormComponent.GetStatFormsRelevance(strCurrGlobalYearId)
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))

	blnIsOSHAvailable = dctAvailabilityInfo(StatForm_Osh1)
	blnIsOSH2Available = dctAvailabilityInfo(StatForm_Osh2)
	blnIsOSH5Available = dctAvailabilityInfo(StatForm_Osh5)
	blnIsOSH9Available = dctAvailabilityInfo(StatForm_Osh9)
	blnIsForm83RIKAvailable = dctAvailabilityInfo(StatForm_Rik83)
	blnIsFormOO1Available = dctAvailabilityInfo(StatForm_Oo1)
	blnIsFormOO2Available = dctAvailabilityInfo(StatForm_Oo2)
	blnIsForm85KAvailable = dctAvailabilityInfo(StatForm_K85)
	blnIsFormOD1Available = True 'dctAvailabilityInfo(StatForm_Od1)
	blnIsForm1DOAvailable = dctAvailabilityInfo(StatForm_Do1)
	blnIsForm1DOPAvailable = dctAvailabilityInfo(StatForm_Dop1)

	blnIsOSHClosed = dctCloseInfo(StatForm_Osh1)
	blnIsOSH2Closed = dctCloseInfo(StatForm_Osh2)
	blnIsOSH5Closed = dctCloseInfo(StatForm_Osh5)
	blnIsOSH9Closed = dctCloseInfo(StatForm_Osh9)
	blnIsForm83RIKClosed = dctCloseInfo(StatForm_Rik83)
	blnIsFormOO1Closed = dctCloseInfo(StatForm_Oo1)
	blnIsFormOO2Closed = dctCloseInfo(StatForm_Oo2)
	blnIsForm85KClosed = dctCloseInfo(StatForm_K85)
	blnIsFormOD1Closed = False 'dctCloseInfo(StatForm_Od1)
	blnIs1DOClosed = dctCloseInfo(StatForm_Do1)
	blnIs1DOPClosed = dctCloseInfo(StatForm_Dop1)
	
	' This is because returned value will be used as "readonly" value
	If Not blnIsOSHAvailable Then blnIsOSHClosed = True
	If Not blnIsOSH2Available Then blnIsOSH2Closed = True
	If Not blnIsOSH5Available Then blnIsOSH5Closed = True
	If Not blnIsOSH9Available Then blnIsOSH9Closed = True 
	If Not blnIsForm83RIKAvailable Then blnIsForm83RIKClosed = True
	If Not blnIsForm85KAvailable Then blnIsForm85KClosed = True
	If Not blnIsFormOD1Available Then blnIsFormOD1Closed = True
	If Not blnIsForm1DOAvailable Then blnIs1DOClosed = True
	If Not blnIsForm1DOPAvailable Then blnIs1DOPClosed = True
	If Not blnIsFormOO1Available Then blnIsFormOO1Closed = True
	If Not blnIsFormOO2Available Then blnIsFormOO2Closed = True

	bIsOSH1Relevance = dctFormsRelevance(StatForm_Osh1)
	bIsOSH2Relevance = dctFormsRelevance(StatForm_Osh2)
	bIsOSH5Relevance = dctFormsRelevance(StatForm_Osh5)
	bIsOSH9Relevance = dctFormsRelevance(StatForm_Osh9)
	bIsRIK83Relevance = dctFormsRelevance(StatForm_Rik83)

	If obContext.ServerSettings.SystemSettings.ShowMNSForms Then
		Set dctAvailabilityMnsInfo = objSchoolFormComponent.GetStatFormsAvailability(strSchoolId, strCurrYearID, True)
		Set dctCloseMnsInfo = objSchoolFormComponent.GetStatFormsCloseInfo(strCurrYearID, True)
		TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))

		blnIsOSHMNSAvailable = dctAvailabilityMnsInfo(StatForm_Osh1)
		blnIsOSHMNSClosed = dctCloseMnsInfo(StatForm_Osh1)
		If Not blnIsOSHMNSAvailable Then blnIsOSHMNSClosed = True
	End If
End Sub

Sub GetYearDatesInfo
	If Not bIsDebug Then On Error Resume Next
	Dim objInfo
	Dim nYearID, strErr

	strShoolYearStart = ""
	strShoolYearEnd = ""

	Set objInfo = objNSNETWork.GetSchoolYearList(strSchoolID, False )
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
	Do While Not objInfo.EOF
		If CLng(objInfo("SCHOOLYEARID")) = CLng(strCurrYearID) Then
			strShoolYearStart = Year(objInfo("STARTDATE"))
			strShoolYearEnd =  Year(objInfo("ENDDATE"))

			objInfo.MoveNext
			bIsNextYearCreated = Not objInfo.EOF
			If IsDull(strShoolPrevYearStart) or IsDull(strShoolPrevYearEnd) Then
				strShoolPrevYearEnd = strShoolYearStart
				strShoolPrevYearStart = strShoolPrevYearEnd - 1
			End If
			TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
			Exit Do
		End If
		strShoolPrevYearStart = Year(objInfo("STARTDATE"))
		strShoolPrevYearEnd = Year(objInfo("ENDDATE"))
		objInfo.MoveNext
	Loop
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
End Sub

Function GetOshFieldName(nSection, nRow, nCol)
	On Error Resume Next
	GetOshFieldName = "T" & LPad2(nSection) & LPad2(nRow) & LPad2(nCol)
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
End Function

Sub DrawLangRow(nRow, nCols)
	Dim sName, sRow, i, arrayList, arrNativeLangs

	Set arrayList = objSchoolFormComponent.GetNativeLangs()
	arrNativeLangs = arrayList.ToArray()

	sRow = Lpad(nRow,2)
	sName = "T01" & sRow%>

	<td><%If nRow=1 Then rw "<div align=""left"">&nbsp;&nbsp;Русский</div>" Else rw IBArrValue(sName & "01",arrNativeLangs)
	%></td>
	<td><%=sRow%></td><%
	i = 3
	Do While i<=nCols%>
	<td><%=IT(sName & Lpad(i,2), 4, 5 )%></td><%
		i=i+1
	Loop

	If nCols >3 Then%>
	<td><%=ITS(sName & Lpad(i,2), 5, 6 )%></td><%
	End If
End Sub

Sub DrawSchoolInfoParam(strParamTitle, strParamKey, nMaxLength, nSize)
	OpenFormGroup strParamTitle
	rw ITWithClass(strParamKey, nMaxLength, nSize, "FilterWhiteSpace")
	CloseFormGroup
End Sub

Function GetOSH1Name()
	bIsMNS = (GetSafeLng(Request("MNS"), 0)=1)
	GetOSH1Name = "Форма № ОШ-1"
	If bIsMNS Then GetOSH1Name = GetOSH1Name & " " & obLanguage("EMReportNames","kMns")
End Function%>
