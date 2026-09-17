<!-- #INCLUDE FILE=UI.asp -->

<%'© 2007-2011 IRTech. All rights reserved.
Const shortNameCut = 30

Function isHelpAvailable()
	isHelpAvailable = True
End Function

Function GetDecimalSymbol()
	Dim strSeparator
	Select Case Session.LCID
	Case "1033" ' English
		strSeparator = "."
	Case "1048" ' Russian
		strSeparator = ","
	Case "1058" ' Ukraine
		strSeparator = ","
	Case Else   ' Default
		strSeparator = ","
	End Select
	GetDecimalSymbol = strSeparator
End Function

Function WriteObligatoryTags()%>
	<input type="hidden" name="<%=kInterfaceTypeKey%>" value="<%=IIF(bIsEducManager, kInterfaceType_EducManager, IIF(bIsAdminInterface, kInterfaceType_ServAdmin, kInterfaceType_School) )%>">
	<input type="hidden" name="AT" value="<%=DB2Value(strToken)%>">
	<input type="hidden" name="VER" value="<%=GetVer()%>"><%
End Function

Function WriteHiddenTags( theTags )
	Response.Write GetHiddenTags(theTags)
End Function

Function WriteHiddenTagsJs( strFormName, theTags )
	Dim i, strScript, strValue
	For i=0 To Ubound( theTags ) Step 2
		rw "<input type=""hidden"" name=""" & DB2Value(theTags(i)) & """>"
		strValue =  (DB2Java(theTags(i+1)))
		If Not IsDull(strValue) Then
			strScript = "document.forms['" & strFormName & "']." & theTags(i) & ".value = '" & strValue & "';"
			Call AddPostScript(strScript)
		End If
	Next
End Function

Function GetHiddenTags(theTags)
	Dim result
	Dim i
	For i=0 To Ubound( theTags ) Step 2
		result = result & "<input type=""hidden"" name=""" & theTags(i) & """ value=""" & DB2Value( theTags(i+1)) & """>"
	Next
	GetHiddenTags = result
End Function

Sub onCurrentSchool()
	Dim strOrganizationName
	If IsEmpty(strSchoolName) Then
		If IsEmpty(strEmFullName) Then
			Exit Sub
		Else
			strOrganizationName = strEmFullName
		End If
	Else 
		strOrganizationName = obTokenMgr.GetData(strToken, stSchoolShortName)
	End If

	rw DB2HTML( strOrganizationName )
End Sub

Sub onHeadNonPrint()
	%>
	<script><!--
	<%If isHelpAvailable() Then%>
	function ShowHelp() {
		openPopupWindow("_help", "<%=GetHelpPath()%>", 950, 660)
	}<%
	End If%>
	//--></script><%
End Sub
		
Function GetHelpPath
	Dim strHelpPath, nSlPos, strScriptName, strReportId
	strScriptName = Request.ServerVariables("SCRIPT_NAME")

	If InStr(strScriptName,"Report.asp") Then
		strReportId = GetSafeStr(Request("RPTID"), -1, "NoRptId")
		strHelpPath = "/rp_" + strReportId
	Else
		nSlPos = InStrRev(strScriptName,"/")
		strHelpPath = Mid( strScriptName, nSlPos, InStrRev(strScriptName,".")-nSlPos )
	End If
	GetHelpPath = "/Help" & Left(strHelpPath, 31) & ".htm"
End Function
		%>
