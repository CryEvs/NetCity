<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.

Option Explicit
Response.Buffer = TRUE
Response.Charset = "utf-8"
'Server.ScriptTimeOut = Server.ScriptTimeOut * 10

On Error Resume Next


Const indRegCode = 3 ' arrItem(0) - next nPos
Const indSchoolCode = 4


Dim uploadData
Dim bOk, nPos, arrItem, strLine, strErrorLines, i, nSeparator
Dim objRs
Dim bSchoolCodeFound
Dim strFilePath, strParentFolder, objFSO, strFullFileName
Dim strEGEDataError, bEGEDataOk, bMayExport

Set uploadData = Server.CreateObject( "TTS.UploadedFileCtrl.1" )
strToken = uploadData.Item("AT")
arrGrades = Split(uploadData.Item("S_GRADES"), ",")
Call GetTokenParams()
Call obTokenMgr.SetData(strToken, "stEGEGrades", arrGrades)
strCurrYearID = obTokenMgr.GetData(strToken,stCurrYear)
%>

<!-- #INCLUDE VIRTUAL=/asp/scripts/common.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/Popup.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/stdhead.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/SecurityRoles.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/PageStates.asp -->
<!-- #INCLUDE FILE="EGEData_inc.asp" -->

<%
If Not HasUserRight(arProfileEditSchoolInfo) Then GenerateError obLanguage("Common","kErrPageAccess")

Call Main()

Sub Main()
	strFilePath = GetSafeStr(uploadData.Item("FilePath"), -1, Null)
	'strFilePath = uploadData.FileName1

	nSeparator = Asc(kEGESeparator)
	Set objRs = objNSNET.GetSchoolInfo(strSchoolID)
	If objRs.EOF Then GenerateError obLanguage("SetupSchool","kCantGetSchoolInfo")
	strSchoolCode = GetSafeStr(objRs("SCHOOLCODE"), kSchoolCodeMaxLen, "")

	Call obTokenMgr.SetData(strToken, stEGESchoolCode, Empty)
	Call obTokenMgr.SetData(strToken, stEGERegCode, Empty)

	Call GetRegCode()
	
	bEGEDataOk = False
	If bSchoolCodeFound Then
		strEGEDataError = GetSchoolEGEData(True)
		bEGEDataOk = (strEGEDataError = "")
	End If
	
	bMayExport = (bSchoolCodeFound And bEGEDataOk)
	If bMayExport Then
		Call obTokenMgr.SetData(strToken, stEGESchoolCode, strSchoolCode)
		Call obTokenMgr.SetData(strToken, stEGERegCode, strRegCode)
	End If
End Sub


Sub GetRegCode()

	strErrorLines=""
	nPos = 0 : i = 0
	bSchoolCodeFound = False

	Do
'		arrItem = uploadData.ParseLine( "File", nPos, "sssssssssssssssssssssssssssss", nSeparator ) ' 29 s
		arrItem = uploadData.ParseLine( "File", nPos, "sssssssssssssssssssssssssssssss", nSeparator ) ' 31 s
		If IsNull(arrItem) Or IsEmpty(arrItem) Then Exit Do
		i=i+1
	'	Response.Write i & " "
	'	Response.Flush
		strLine = uploadData.Line("File", nPos)
		If IsNumeric(arrItem) Then
			strErrorLines = strErrorLines & strLine&"<br>&nbsp; " & obLanguage("Import","kErrParamNum")
			nPos = arrItem
			bOk = False
		ElseIf Not IsArray(arrItem) Then
			strErrorLines = strErrorLines & strLine&"<br>&nbsp; " & obLanguage("Import","kErrParam")
			Exit Do
		Else
			If strSchoolCode = arrItem(indSchoolCode) Then
				strRegCode = arrItem(indRegCode)
				If Not (Len(strRegCode) = kRegCodeLen And IsNumeric(strRegCode)) Then
	'				GenerateError kInvalidRegCodeFormat & ":" & strRegCode
					strErrorLines = strErrorLines & strLine & "<br> & nbsp; " & kInvalidRegCodeFormat & ":" & strRegCode
				Else
					bSchoolCodeFound = True

					Set objFSO = CreateObject("Scripting.FileSystemObject")
					strParentFolder = objFSO.GetParentFolderName(strFilePath)
					strFullFileName = strParentFolder & "\" & strRegCode & "_" & strSchoolCode & "_" & kParticipantsBaseName
				End If
				Exit Do
			End If
			
			nPos = arrItem(0)
		End If
	Loop
End Sub

Sub DrawExportInfo()
	Dim strClassName, nEGEStudentCnt, i, nTotal
	
	Response.Write "<br>"
	If strErrorLines <> "" Then
		Response.Write "<b>" & kInvalidSchoolsFormat & "</b><br>" 'obLanguage("Import","kFailed")
		Response.Write strErrorLines
	End If

	Response.Write "<br>"
	If Not bSchoolCodeFound Then
		Response.Write "<br><b>" & kSchoolCodeNotFound & " " & DB2HTML(strSchoolCode) & "</b>"
	Else
		If Not bEGEDataOk Then
			Response.Write DB2HTML_BR(strEGEDataError) & "<br>"
		Else

			Response.Write kGenerateInfoForRegCode & " <b>" & DB2HTML(strRegCode) & "</b><br>"
			Response.Write kAndGenerateInfoForSchoolCode & " <b>" & DB2HTML(strSchoolCode) & ".</b><br>"
			If Not IsDull(strFullFileName) Then
				Response.Write "<br>"
				Response.Write kRecommendFilePath & ":<br><b>" & DB2HTML(strFullFileName) & "</b><br>"
			End If
			' Statistics by classes
			Response.Write "<br>"
			Response.Write kEGEStatisticsByClasses & ":<br>"
			nTotal = 0
			For i = 0 To UBound(arrEgeClasses, 2)
				strClassName = arrEgeClasses(0, i)
				nEGEStudentCnt = arrEgeClasses(1, i)
				nTotal = nTotal + nEGEStudentCnt
				Response.Write "<b>" & DB2HTML(strClassName) & "&nbsp;-&nbsp;" & nEGEStudentCnt & "</b><br>"
			Next
			Response.Write "<b>" & kTotalEGEStudents & "&nbsp;-&nbsp;" & nTotal & "</b>"
		End If
	End If
End Sub%>

<html><head><title><%=NETSCHOOL_PRODUCT_NAME & " -  " & obLanguage("Import","kTitleImportStudentParents",strFunctionalityType)%></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>
<body style="font-family: verdana, arial, helvetica; font-size:8pt">
<script>window.focus()</script>
<script language="JavaScript" src="<%=GetVersionedJsLink("screen1.js")%>"></script>
<H2 align="center"><%=kTitleExportEGE%></H2>
<H3 align="center"><%=kTitleWait%></H3><%
Call DrawExportInfo()%>
<br><br>
<FORM Name="MainForm" METHOD="POST" ACTION="Participants.cs_">
<%'=WriteObligatoryTags()%>
<input type="hidden" name="AT" value="<%=strToken%>">
<input type="hidden" name="VER" VALUE="<%=DateDiff("s", #1/1/1999#, Now, 0, 0 )%>">
<input type="button" value="<%=obLanguage("Common","kBack")%>" onclick="window.close();"><%
If bMayExport Then%>
	<input type="button" value="<%=kBeginExport%>" onclick="ok_check_db('MainForm','');this.disabled=true;"><%
	For i = 0 To UBound(arrEgeClasses, 2)%>
		<input type="hidden" name="EGEClassName" value="<%=DB2Value(arrEgeClasses(0, i))%>">
		<input type="hidden" name="EGEStunentsCnt" value="<%=DB2Value(arrEgeClasses(1, i))%>"><%
	Next
End If%>
</FORM>
</body></html>
