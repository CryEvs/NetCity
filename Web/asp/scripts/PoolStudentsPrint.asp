<!-- #INCLUDE Virtual="/asp/headerprint_s.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PoolStudents_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PoolStudentsPrint_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Sub Main()
	Dim nTmp,strEOIDTO
	nTmp = 0 ' Чтобы не было постраничной разбивки
	If (bUseRepl Or obContext.ServerSettings.SystemSettings.ModuleEServices) and Not objNSNET.IsAdminOfServer(strUserID) and Not bIsEducManager Then strEOIDTO = objNSNET.GetSchoolInfo(strSchoolID)("EOID") :Else strEOIDTO="0"
	Set objStudentList = objNSNET.GetPoolStudents(nViewType, nPoolCategoryID, nPoolFilter, strFuncTypeID, strFirstLetter, strLastLetter, strGender, strDepReasonID, nInaccReason, strPoolGrade, strPoolYearID, strPoolSchoolID,strEOIDTO, lngSortOrder, 0, 0, nTmp, -1)
	lngStudentCnt = 0
	If Not objStudentList Is Nothing Then lngStudentCnt = objStudentList.RecordCount
End Sub

Sub onDrawPage()
	Dim i, nNewStudID, nStudID, strClasses
	Dim strDepartPlace
	Dim CurName
	Call GetArrUsersFilters
	Response.Write GetPageTitlePrint(IIf(bPseudoPool, obLanguage("FilterUsers","kStudentsOutOfSystem"), obLanguage("FilterUsers","kStudentList",0)), arrUsersFilters)
	Call DrawListTable()
	Response.Write GetPageVerPrint()
End Sub
%>
