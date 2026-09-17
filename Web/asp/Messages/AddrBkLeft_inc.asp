<!-- #INCLUDE VIRTUAL="/asp/headerprint_s.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/ScreenNonPrint.asp"-->
<!-- #INCLUDE virtual="/asp/scripts/Messaging.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/FiltersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim bListSet, sAllName, sClassID, sClassName
Dim objRS, rsStudents, rsParents
Dim strFilter, objSchoolRS, bOwnSchool
Dim bEMPermit, bStudentsParentsPermit
Dim bStudent, bParent
Dim rsEMs, bIsEM, sInstID
Dim bFilterType, objFuncTypes, strScriptName, strFilterFuncType
Dim lngLoginState

Dim objList

Function getBGColor()
	getBGColor = "#EEEEEE"
End Function

Sub AddToList(byref arrGroups, strAbbr, strName)
	Dim ubnd
	ubnd = UBound(arrGroups)+2
	Redim Preserve arrGroups(ubnd)
	arrGroups(ubnd-1) = strAbbr
	arrGroups(ubnd)= strName
End Sub

Sub drawGroupsFilter(arrGroups)
	Dim i, str
	DrawSimpleFilterRow obLanguage("Common","kGroupA"), "FL", arrGroups, strFilter, False, "ChangeFilter();"
End Sub
%>
