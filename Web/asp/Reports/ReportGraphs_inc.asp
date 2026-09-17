<!-- #INCLUDE FILE="../scripts/DBConnByYear.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

'Константы, задающие тип графика (chart type)
Const kChartTypeLineMarkers			= 0
Const kChartTypeColumnClustered		= 1
Const kChartTypeRandom		= -1

Dim arrCaptions, arrCategories, arrValues
'arrCaptions - array of groups
'arrCategories - define values of X
'arrValues - define values of Y in each group

Function GetChartScaleMaximum()
	GetChartScaleMaximum = objNSNET.GetMarkScaleMax(strCurrYearID)
End Function

Sub WriteArrays()
	obTokenMgr.SetData strToken, stValues, arrValues
	obTokenMgr.SetData strToken, stCategories, arrCategories
	obTokenMgr.SetData strToken, stCaptions, arrCaptions
End Sub

Sub ReadArrays()
	arrValues = obTokenMgr.GetData(strToken, stValues)
	arrCategories = obTokenMgr.GetData(strToken, stCategories)
	arrCaptions = obTokenMgr.GetData(strToken, stCaptions)
End Sub

Function GetChType(o, chi)
	dim arr
	arr=Array(_
		o.chChartTypeColumnClustered,_
		o.chChartTypeLineMarkers,_
		o.chChartTypeRadarLineMarkers,_
		o.chChartTypeBarClustered)',_
 ' o.chChartTypeRadarSmoothLineMarkers,_
	chi = Clng(GetSafe("chi",0))
	GetChType = arr(chi)
	chi=chi+1
	If chi>Ubound(arr) Then chi=0
	obTokenMgr.SetData strToken, "chi", chi
End Function

Sub DrawChart(ByVal strChartTypeConst, ByVal strTitleX, ByVal strTitleY, ByVal strTitle)
	Dim oChartTrans, strPipeName, oChart, oConst, oCharts, strCaption, i, j, nCount, arrTmp, nWidth
	Dim nScaleMax, tp

	Err.Clear
	On Error Resume Next
	Set oChart = CreateObject("OWC.Chart")
	TestError obLanguage("Reports","kErrCreateGraph")

	Set oConst = oChart.Constants
	Set oCharts = oChart.Charts.Add
	oCharts.HasTitle = True

	With oCharts.Title
		.Font.Bold = True
		.Font.Size = 12
		.Caption = strTitle
	End With

	If Not IsArray(arrCaptions) Then ReDim arrCaptions(1)
	If Not IsArray(arrCategories) Then ReDim arrCategories(0)
	If Not IsArray(arrValues) Then
		ReDim arrValues(UBound(arrCaptions), 0)
		nCount = 0
	Else
		nCount = UBound(arrValues, 2)
	End If
		
	nWidth = 200 + nCount * 120
	If nWidth > 990 Then
		nWidth = 990
	End If
	Select Case strChartTypeConst
	Case kChartTypeLineMarkers
		tp = oConst.chChartTypeLineMarkers
	Case kChartTypeColumnClustered
		tp = oConst.chChartTypeColumnClustered
	Case Else
		tp = GetChType(oConst, 0)
	End Select
	ReDim arrTmp(nCount)
	i = 0
	For Each strCaption In arrCaptions
		For j = 0 To nCount
			arrTmp(j) = IIf(IsEmpty(arrValues(i, j)), 0, arrValues(i, j))
		Next
		With oCharts.SeriesCollection.Add
			.Caption = strCaption
			.SetData oConst.chDimCategories, oConst.chDataLiteral, arrCategories
			.SetData oConst.chDimValues, oConst.chDataLiteral, arrTmp
			.Type = tp
		End With
		i = i + 1
	Next
	oChart.Border.Color = oConst.chColorNone
	nScaleMax = GetChartScaleMaximum()
	With oChart.Charts(0)
		.Axes(0).HasTitle = True
		.Axes(0).Title.Caption = strTitleY
		.Axes(0).Title.Font.Size = 10
		.Axes(1).HasTitle = True
		.Axes(1).Title.Caption = strTitleX
		.Axes(1).Title.Font.Size = 10
		.Axes(0).MajorUnit = CDbl(nScaleMax / 10)
		.Axes(0).HasMinorGridlines = True
		.Axes(0).MinorUnit = CDbl(nScaleMax / 10)
		.Axes(0).Scaling.Maximum = nScaleMax
	End With
	
	oCharts.HasLegend = True
	oCharts.Legend.Position = oConst.chLegendPositionBottom

	Set oChartTrans = CreateObject("NSChart.ChartTranslator")
	TestError obLanguage("Reports","kErrTranslatorCreate")
	
	Response.ContentType = "image/gif"

	strPipeName = oChartTrans.Init(Response)
	TestError obLanguage("Reports","kErrTranslatorInit")

	oChart.ExportPicture strPipeName, "GIF", nWidth, 690
	TestError obLanguage("Reports","kErrExport")

	oChartTrans.Process()
	TestError obLanguage("Reports","kErrProcess")

	Set oChartTrans = Nothing
End Sub

ReadYearConnectionState
%>
