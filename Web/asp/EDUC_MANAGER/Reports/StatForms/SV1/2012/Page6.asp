<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH()
{
	ValidateDividedRows(8, 19, [20], 3, 3);
	ValidateDividedRows(8, 21, [22], 3, 3);
	ValidateDividedRows(8, 26, [27], 3, 3);
	ValidateDividedRows(8, 49, [50,51], 3, 3);
	ValidateDividedRows(8, 49, [53], 3, 3);
	ValidateDividedRows(8, 49, [55], 3, 3);
	ValidateDividedRows(8, 49, [65], 3, 3);
	ValidateDividedRows(8, 53, [54], 3, 3);
	ValidateDividedRows(8, 55, [56], 3, 3);
	ValidateDividedRows(8, 57, [58,59,60], 3, 3);
	ValidateDividedRows(8, 57, [61,62,63,64], 3, 3);
	ValidateDividedRows(8, 65, [66], 3, 3);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section8_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo( )
	Dim sourceFormId

	sourceFormId = GetSourceFormId()

	Call GetEOCountValuesForEOTypes("T080103", sourceFormId, 7, 1, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T080203", sourceFormId, 7, 1, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T080303", sourceFormId, 7, 2, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T080403", sourceFormId, 7, 3, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T080503", sourceFormId, 7, 4, 3, Empty, Array(8))
	
	'int SchoolCount = GetEMSchoolsForEOType(nEMID, 12, 8, 10)
	'Call GetEOSumValuesForEOTypes("T080203", sourceFormId, 7, 1, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T080703", sourceFormId, 7, 5, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T080803", sourceFormId, 7, 6, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T080903", sourceFormId, 7, 7, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T081003", sourceFormId, 7, 7, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T081103", sourceFormId, 7, 8, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T081203", sourceFormId, 7, 9, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T081303", sourceFormId, 7, 10, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T081403", sourceFormId, 7, 11, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T081503", sourceFormId, 7, 12, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T081603", sourceFormId, 7, 12, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T081703", sourceFormId, 7, 13, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T081803", sourceFormId, 7, 13, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T081903", sourceFormId, 7, 14, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T082003", sourceFormId, 7, 15, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T082103", sourceFormId, 7, 16, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T082203", sourceFormId, 7, 17, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T082303", sourceFormId, 7, 18, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T082403", sourceFormId, 7, 19, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T082503", sourceFormId, 7, 20, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T082603", sourceFormId, 7, 20, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T082703", sourceFormId, 7, 21, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T082803", sourceFormId, 7, 22, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T082903", sourceFormId, 7, 23, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T083103", sourceFormId, 7, 24, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T083203", sourceFormId, 7, 25, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T083403", sourceFormId, 7, 26, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T083603", sourceFormId, 7, 27, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T083703", sourceFormId, 7, 28, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T083803", sourceFormId, 7, 29, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T083903", sourceFormId, 7, 30, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T084003", sourceFormId, 7, 30, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T084103", sourceFormId, 7, 31, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T084203", sourceFormId, 7, 31, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T084303", sourceFormId, 7, 32, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T084403", sourceFormId, 7, 33, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T084503", sourceFormId, 7, 33, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T084603", sourceFormId, 7, 34, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T084703", sourceFormId, 7, 34, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T084803", sourceFormId, 7, 35, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T084903", sourceFormId, 7, 36, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T085003", sourceFormId, 7, 37, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T085103", sourceFormId, 7, 38, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T085203", sourceFormId, 7, 39, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T085303", sourceFormId, 7, 39, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T085403", sourceFormId, 7, 40, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T085503", sourceFormId, 7, 41, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T085603", sourceFormId, 7, 42, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T085703", sourceFormId, 7, 43, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T085803", sourceFormId, 7, 44, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T085903", sourceFormId, 7, 45, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T086003", sourceFormId, 7, 46, 3, Empty, Array(8))
	
	Call GetEOCountValuesForEOTypes("T086103", sourceFormId, 7, 47, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T086203", sourceFormId, 7, 48, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T086303", sourceFormId, 7, 49, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T086403", sourceFormId, 7, 50, 3, Empty, Array(8))
	
	Call GetEOSumValuesForEOTypes("T086503", sourceFormId, 7, 51, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T086603", sourceFormId, 7, 52, 3, Empty, Array(8))
	
	Call GetEOCountValuesForEOTypes("T086703", sourceFormId, 7, 53, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T086803", sourceFormId, 7, 54, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T086903", sourceFormId, 7, 55, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T087003", sourceFormId, 7, 56, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T087103", sourceFormId, 7, 57, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T087203", sourceFormId, 7, 58, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T087303", sourceFormId, 7, 59, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T087403", sourceFormId, 7, 60, 3, Empty, Array(8))
	
	Call GetEOSumValuesForEOTypes("T087503", sourceFormId, 7, 61, 3, Empty, Array(8))
	
	Call GetEOCountValuesForEOTypes("T087603", sourceFormId, 7, 62, 3, Empty, Array(8))
	Call GetEOSumValuesForEOTypes("T087703", sourceFormId, 7, 62, 3, Empty, Array(8))
	
	Call GetEOCountValuesForEOTypes("T087803", sourceFormId, 7, 63, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T087903", sourceFormId, 7, 64, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T088003", sourceFormId, 7, 65, 3, Empty, Array(8))
	Call GetEOCountValuesForEOTypes("T088103", sourceFormId, 7, 66, 3, Empty, Array(8))

	Dim objPivotRs, arrPivotParams
	Dim nWorkShopCnt, nStudentsCnt, bInEmergencyState, bWithAllKindsOfImprovement, bOverHaulState

	arrPivotParams = Array( _
		GetFormParameter(sourceFormId, 3, 7, 8, Null), _
		GetFormParameter(sourceFormId, 7, 5, 3, Null), _
		GetFormParameter(sourceFormId, 7, 22, 3, Null), _
		GetFormParameter(sourceFormId, 7, 24, 3, Null), _
		GetFormParameter(sourceFormId, 7, 26, 3, Null) _
		)

	Set objPivotRs = GetPivot(strEMID, strCommonYearID, sourceFormId, arrPivotParams, Array(8), Empty, false)

	Dim nWithouWorkshops, nEmergencyStateStudCnt, nWithAllKindsOfImprovementCnt, bOverHaulStateStudCnt
	While Not objPivotRs.EOF
		nStudentsCnt = GetSafeLng(objPivotRs("VALUE"), 0)
		nWorkShopCnt = GetSafeLng(objPivotRs("VALUE1"), 0)
		bOverHaulState = GetSafeLng(objPivotRs("VALUE2"), 0) > 0
		bInEmergencyState = GetSafeLng(objPivotRs("VALUE3"), 0) > 0
		bWithAllKindsOfImprovement = GetSafeLng(objPivotRs("VALUE4"), 0) > 0
	
		If nWorkShopCnt = 0 Then nWithouWorkshops = nWithouWorkshops + 1
		If bOverHaulState Then bOverHaulStateStudCnt = bOverHaulStateStudCnt + nStudentsCnt
		If bInEmergencyState Then nEmergencyStateStudCnt = nEmergencyStateStudCnt + nStudentsCnt
		If bWithAllKindsOfImprovement Then nWithAllKindsOfImprovementCnt = nWithAllKindsOfImprovementCnt + nStudentsCnt
		objPivotRs.MoveNext
	Wend

	Call SetLoadedRIKValue( GetFieldName(8, 6, 3), nWithouWorkshops )
	Call SetLoadedRIKValue( GetFieldName(8, 30, 3), bOverHaulStateStudCnt )
	Call SetLoadedRIKValue( GetFieldName(8, 33, 3), nEmergencyStateStudCnt )
	Call SetLoadedRIKValue( GetFieldName(8, 35, 3), nWithAllKindsOfImprovementCnt )

End Sub
%>

