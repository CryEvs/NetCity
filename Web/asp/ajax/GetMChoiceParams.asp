<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Const kParamID_Social = "1026"

Dim result
Dim strEditUserID, strRole
Dim strParamID
Dim schoolYearId
Dim objRs, mChoiceParamData, excludeParams, errMessage

If Not hasUserRightsOnPage() Then Call onAccessError()

strParamID		 = GetSafeID(Request("paramId"), NULL)
strEditUserID	 = GetSafeID(Request("userId"), NULL) ' RightsOnPage depend on strEditUserID

Set result = new JSONResult
Set objRs = objNSNET.GetMChoiceParam(strEditUserID, strParamID, strSchoolID, strSchoolYearId)

Call GetMChoiceParamData()

TestError Err.Description

Call result.AddJsonData("mChoiceParamData", mChoiceParamData)
If excludeParams Then
	Call result.AddData("excludeParams", excludeParams)
	Call result.AddData("errMessage", errMessage)
End If

rw result

Function hasUserRightsOnPage()
	If objNSNET.DoesUserHaveRole(strEditUserID, strSchoolID, rlStudent) Then
		hasUserRightsOnPage = hasRightsToEditStudentOrParent()
	ElseIf (objNSNET.DoesUserHaveRole(strEditUserID, strSchoolID, rlParent) And InStr(UCase(Request.ServerVariables("HTTP_REFERER" )),"PARENT" ) > 0 ) Then
		hasUserRightsOnPage = hasRightsToEditStudentOrParent()
	Else 'Staff
		hasUserRightsOnPage = HasUserRight(arUsersEditStaff)
	End If
End	Function

Function hasRightsToEditStudentOrParent()
	Dim strClassID
	If HasUserRight(arUsersEditStudents) Then hasRightsToEditStudentOrParent = True: Exit Function
	If HasUserRight(arUsersEditStudentsPsyInfo) Then hasRightsToEditStudentOrParent = True: Exit Function
	If HasUserRight(arUsersEditStudentsMedInfo) Then hasRightsToEditStudentOrParent = True: Exit Function
	If HasUserRight(arEditInfoSelf) Then
		strClassID = GetSafeID( obTokenMgr.GetData(strToken, stStudClassID), "0" )
		If strClassID <> "0" Then
			If objNSNET.IsClassChief(strClassID, strUserID) Then hasRightsToEditStudentOrParent = True: Exit Function
		End If
	End If
	hasRightsToEditStudentOrParent = False
End Function

Sub GetMChoiceParamData()
	Dim properties, columns, i

	properties = Array("id", "choiceid", "name", "orderno", "name2", "name3")
	columns = Array("ITEMID", "CHOICE_ITEMID", "ITEMNAME", "ITEMORDERNO", "ITEMNAME2", "ITEMNAME3")

	If strParamID = kParamID_Social Then
		' Используется "orderno".
		' Значения из 1-ого массива не должны пересекаться со значениями из 2-ого массива, из 3-его - со значениями из 4-ого, и т.д.
		excludeParams = Array( _
			Array(1), Array(2, 3, 4, 5, 6, 7), _
			Array(9), Array(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20))
		' При нарушении совместимости показывается общее сообщение без названия конкретных значений. Совместимость можно отразыть в справке.
		errMessage = obLanguage("SetupSchool", "kDoNotSelectExcludeValues")
	End If
	
	mChoiceParamData = comHelper.DataSetAdapterHelper.ToJSON(objRs, properties, columns, Array("ignoreNullValues"))
End Sub
%>