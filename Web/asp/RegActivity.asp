<%@ language="VBSCRIPT" %>
<% ' © 2007-2008 IRTech. All rights reserved.

Option Explicit 
On Error Resume Next%>
<!-- #INCLUDE FILE=scripts/adovbs.asp -->
<%
Response.ContentType = "text/XML"
Response.CharSet = "windows-1251"

Dim docXml
Set docXml = CreateObject("MSXML2.DOMDocument")
TestErrorEx "ASP Error : Ошибка при создании MSXML2.DOMDocument", -3

docXml.load(Request)
TestErrorEx "ASP Error : Ошибка при чтении списка параметров", -3

If docXml.parseError.errorCode <> 0 Then
  MakeResult "ASP Error : Ошибка при чтении списка параметров", -3
End If

Dim objActionNode, action
Set objActionNode = docXml.selectSingleNode("root").attributes.getNamedItem("action")
if Not objActionNode is Nothing Then
  action = objActionNode.nodeValue
Else
  MakeResult "ASP Error : Ошибка при чтении списка параметров - пустой ACTION", -3
end If

Dim aConnection, cConnectionString
cConnectionString = Application("DB_STRING")
Set aConnection = CreateObject("ADODB.Connection")
TestErrorEx "ASP Error : Ошибка при создании ADODB.Connection", -3
aConnection.Open cConnectionString

If action = "install" or action = "uninstall" Then
  Dim aCmdSQL_DELETE_RESULTS
  Set aCmdSQL_DELETE_RESULTS = CreateObject("ADODB.Command")
  TestErrorEx "ASP error : Ошибка при создании ADODB.Command DELETE_RESULTS", -3
  Set aCmdSQL_DELETE_RESULTS.ActiveConnection = aConnection
  aCmdSQL_DELETE_RESULTS.Prepared = True
  aCmdSQL_DELETE_RESULTS.CommandText = _
          "DELETE FROM RESULTS WHERE ASSIGNMENTID in (SELECT ASSIGNMENTID FROM ASSIGNMENTS " & _
          " WHERE activityId = ?)"

  aCmdSQL_DELETE_RESULTS.Parameters.Append aCmdSQL_DELETE_RESULTS.CreateParameter("ACTIVITYID", adVarChar, adParamInput, 20)

  Dim aCmdSQL_DELETE_ACTIVITY
  Set aCmdSQL_DELETE_ACTIVITY = CreateObject("ADODB.Command")
  TestErrorEx "ASP error : Ошибка при создании ADODB.Command DELETE_ACTIVITY", -3
  Set aCmdSQL_DELETE_ACTIVITY.ActiveConnection = aConnection
  aCmdSQL_DELETE_ACTIVITY.Prepared = True
  aCmdSQL_DELETE_ACTIVITY.CommandText = "DELETE FROM ACTIVITIES WHERE ACTIVITYID = ?" 

  aCmdSQL_DELETE_ACTIVITY.Parameters.Append aCmdSQL_DELETE_ACTIVITY.CreateParameter("ACTIVITYID", adVarChar, adParamInput, 20)
End If

If action <> "uninstall" Then
  Dim aCmdSQL_SELECT_ACTIVITY
  Set aCmdSQL_SELECT_ACTIVITY = CreateObject("ADODB.Command")
  TestErrorEx "ASP error : Ошибка при создании ADODB.Command SELECT_ACTIVITY", -3
  Set aCmdSQL_SELECT_ACTIVITY.ActiveConnection = aConnection
  aCmdSQL_SELECT_ACTIVITY.Prepared = True
  aCmdSQL_SELECT_ACTIVITY.CommandText = "SELECT * FROM ACTIVITIES WHERE ACTIVITYID = ?"

  aCmdSQL_SELECT_ACTIVITY.Parameters.Append aCmdSQL_SELECT_ACTIVITY.CreateParameter("ACTIVITYID", adVarChar, adParamInput, 20)
End If

If action = "install" Then
  Dim aCmdSQL_GET_PARAMETER_ID
  Set aCmdSQL_GET_PARAMETER_ID = CreateObject("ADODB.Command")
  TestErrorEx "ASP error : Ошибка при создании ADODB.Command GET_PARAMETER_ID", -3
  Set aCmdSQL_GET_PARAMETER_ID.ActiveConnection = aConnection
  aCmdSQL_GET_PARAMETER_ID.Prepared = True
  aCmdSQL_GET_PARAMETER_ID.CommandText = "SELECT gen_id(parameters_seq,1) as ID FROM dual"

  Dim aCmdSQL_SELECT_ACTIVITYGROUP
  Set aCmdSQL_SELECT_ACTIVITYGROUP = CreateObject("ADODB.Command")
  TestErrorEx "ASP error : Ошибка при создании ADODB.Command SELECT_ACTIVITYGROUP", -3
  Set aCmdSQL_SELECT_ACTIVITYGROUP.ActiveConnection = aConnection
  aCmdSQL_SELECT_ACTIVITYGROUP.Prepared = True
  aCmdSQL_SELECT_ACTIVITYGROUP.CommandText = "SELECT * FROM ACTIVITYGROUPS WHERE GROUPID = ?" 

  aCmdSQL_SELECT_ACTIVITYGROUP.Parameters.Append aCmdSQL_SELECT_ACTIVITYGROUP.CreateParameter("GROUPID", adInteger, adParamInput, 4)

  Dim aCmdSQL_INSERT_ACTIVITYGROUP
  Set aCmdSQL_INSERT_ACTIVITYGROUP = CreateObject("ADODB.Command")
  TestErrorEx "ASP error : Ошибка при создании ADODB.Command INSERT_ACTIVITYGROUP", -3
  Set aCmdSQL_INSERT_ACTIVITYGROUP.ActiveConnection = aConnection
  aCmdSQL_INSERT_ACTIVITYGROUP.Prepared = True
  aCmdSQL_INSERT_ACTIVITYGROUP.CommandText = _
	  	  "INSERT INTO ACTIVITYGROUPS(GROUPID,PUBCODE,NAME,ORDERNO) " & _
		  "VALUES(?,?,?,?)" 

  aCmdSQL_INSERT_ACTIVITYGROUP.Parameters.Append aCmdSQL_INSERT_ACTIVITYGROUP.CreateParameter("GROUPID", adInteger, adParamInput, 4)
  aCmdSQL_INSERT_ACTIVITYGROUP.Parameters.Append aCmdSQL_INSERT_ACTIVITYGROUP.CreateParameter("PUBCODE", adVarChar, adParamInput, 20)
  aCmdSQL_INSERT_ACTIVITYGROUP.Parameters.Append aCmdSQL_INSERT_ACTIVITYGROUP.CreateParameter("NAME", adVarChar, adParamInput, 200)
  aCmdSQL_INSERT_ACTIVITYGROUP.Parameters.Append aCmdSQL_INSERT_ACTIVITYGROUP.CreateParameter("ORDERNO", adInteger, adParamInput, 4)

  Dim aCmdSQL_INSERT_ACTIVITY
  Set aCmdSQL_INSERT_ACTIVITY = CreateObject("ADODB.Command")
  TestErrorEx "ASP error : Ошибка при создании ADODB.Command INSERT_ACTIVITY", -3
  Set aCmdSQL_INSERT_ACTIVITY.ActiveConnection = aConnection
  aCmdSQL_INSERT_ACTIVITY.Prepared = True
  aCmdSQL_INSERT_ACTIVITY.CommandText = _
	  	  "INSERT INTO ACTIVITIES(ACTIVITYID,ACTIVITYNAME,SELFPACED,PROBLEMLISTURL,PROBLEMURL, " & _
		  " ENTRYURL,RESULTSURL,TEACHER_TOOLTIP,STUDENT_TOOLTIP,INTERNALID,GROUPID) " & _
		  "VALUES(?,?,?,?,?,?,?,?,?,?,?)"

  aCmdSQL_INSERT_ACTIVITY.Parameters.Append aCmdSQL_INSERT_ACTIVITY.CreateParameter("ACTIVITYID", adVarChar, adParamInput, 20)
  aCmdSQL_INSERT_ACTIVITY.Parameters.Append aCmdSQL_INSERT_ACTIVITY.CreateParameter("ACTIVITYNAME", adVarChar, adParamInput, 80)
  aCmdSQL_INSERT_ACTIVITY.Parameters.Append aCmdSQL_INSERT_ACTIVITY.CreateParameter("SELFPACED", adChar, adParamInput, 1)
  aCmdSQL_INSERT_ACTIVITY.Parameters.Append aCmdSQL_INSERT_ACTIVITY.CreateParameter("PROBLEMLISTURL", adVarChar, adParamInput, 200)
  aCmdSQL_INSERT_ACTIVITY.Parameters.Append aCmdSQL_INSERT_ACTIVITY.CreateParameter("PROBLEMURL", adVarChar, adParamInput, 200)
  aCmdSQL_INSERT_ACTIVITY.Parameters.Append aCmdSQL_INSERT_ACTIVITY.CreateParameter("ENTRYURL", adVarChar, adParamInput, 200)
  aCmdSQL_INSERT_ACTIVITY.Parameters.Append aCmdSQL_INSERT_ACTIVITY.CreateParameter("RESULTSURL", adVarChar, adParamInput, 200)
  aCmdSQL_INSERT_ACTIVITY.Parameters.Append aCmdSQL_INSERT_ACTIVITY.CreateParameter("TEACHER_TOOLTIP", adVarChar, adParamInput, 200)
  aCmdSQL_INSERT_ACTIVITY.Parameters.Append aCmdSQL_INSERT_ACTIVITY.CreateParameter("STUDENT_TOOLTIP", adVarChar, adParamInput, 200)
  aCmdSQL_INSERT_ACTIVITY.Parameters.Append aCmdSQL_INSERT_ACTIVITY.CreateParameter("INTERNALID", adVarChar, adParamInput, 20)
  aCmdSQL_INSERT_ACTIVITY.Parameters.Append aCmdSQL_INSERT_ACTIVITY.CreateParameter("GROUPID", adInteger, adParamInput, 4)

  Dim aCmdSQL_INSERT_ACTIVITYPARAMETERS
  Set aCmdSQL_INSERT_ACTIVITYPARAMETERS = CreateObject("ADODB.Command")
  TestErrorEx "ASP error : Ошибка при создании ADODB.Command INSERT_ACTIVITYPARAMETERS", -3
  Set aCmdSQL_INSERT_ACTIVITYPARAMETERS.ActiveConnection = aConnection
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Prepared = True
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.CommandText = _
		  "INSERT INTO ACTIVITYPARAMETERS(PARAMETERID,ACTIVITYID,NAME,TITLE,""TYPE"",EDITABLE,VISIBLE, " & _
		  " SORTABLE,LAVISIBLE,LAEDITABLE,GRADING,DEFAULTVALUE,LISTITEMS) " & _
		  "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)"

  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Parameters.Append aCmdSQL_INSERT_ACTIVITYPARAMETERS.CreateParameter("PARAMETERID", adInteger, adParamInput, 4)
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Parameters.Append aCmdSQL_INSERT_ACTIVITYPARAMETERS.CreateParameter("ACTIVITYID", adVarChar, adParamInput, 20)
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Parameters.Append aCmdSQL_INSERT_ACTIVITYPARAMETERS.CreateParameter("NAME", adVarChar, adParamInput, 20)
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Parameters.Append aCmdSQL_INSERT_ACTIVITYPARAMETERS.CreateParameter("TITLE", adVarChar, adParamInput, 200)
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Parameters.Append aCmdSQL_INSERT_ACTIVITYPARAMETERS.CreateParameter("TYPE", adChar, adParamInput, 1)
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Parameters.Append aCmdSQL_INSERT_ACTIVITYPARAMETERS.CreateParameter("EDITABLE", adChar, adParamInput, 1)
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Parameters.Append aCmdSQL_INSERT_ACTIVITYPARAMETERS.CreateParameter("VISIBLE", adChar, adParamInput, 1)
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Parameters.Append aCmdSQL_INSERT_ACTIVITYPARAMETERS.CreateParameter("SORTABLE", adChar, adParamInput, 1)
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Parameters.Append aCmdSQL_INSERT_ACTIVITYPARAMETERS.CreateParameter("LAVISIBLE", adChar, adParamInput, 1)
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Parameters.Append aCmdSQL_INSERT_ACTIVITYPARAMETERS.CreateParameter("LAEDITABLE", adChar, adParamInput, 1)
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Parameters.Append aCmdSQL_INSERT_ACTIVITYPARAMETERS.CreateParameter("GRADING", adChar, adParamInput, 1)
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Parameters.Append aCmdSQL_INSERT_ACTIVITYPARAMETERS.CreateParameter("DEFAULTVALUE", adVarChar, adParamInput, 2000)
  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Parameters.Append aCmdSQL_INSERT_ACTIVITYPARAMETERS.CreateParameter("LISTITEMS", adVarChar, adParamInput, 2000)

  Dim aCmdSQL_INSERT_ASSIGNMENTPARAMETER
  Set aCmdSQL_INSERT_ASSIGNMENTPARAMETER = CreateObject("ADODB.Command")
  TestErrorEx "ASP error : Ошибка при создании ADODB.Command INSERT_ASSIGNMENTPARAMETER", -3
  Set aCmdSQL_INSERT_ASSIGNMENTPARAMETER.ActiveConnection = aConnection
  aCmdSQL_INSERT_ASSIGNMENTPARAMETER.Prepared = True
  aCmdSQL_INSERT_ASSIGNMENTPARAMETER.CommandText = "INSERT INTO ASSIGNMENTPARAMETERS(PARAMETERID) VALUES(?)"

  aCmdSQL_INSERT_ASSIGNMENTPARAMETER.Parameters.Append aCmdSQL_INSERT_ASSIGNMENTPARAMETER.CreateParameter("PARAMETERID", adInteger, adParamInput, 4)

  Dim aCmdSQL_INSERT_CLASSPARAMETER
  Set aCmdSQL_INSERT_CLASSPARAMETER = CreateObject("ADODB.Command")
  TestErrorEx "ASP error : Ошибка при создании ADODB.Command INSERT_CLASSPARAMETER", -3
  Set aCmdSQL_INSERT_CLASSPARAMETER.ActiveConnection = aConnection
  aCmdSQL_INSERT_CLASSPARAMETER.Prepared = True
  aCmdSQL_INSERT_CLASSPARAMETER.CommandText = "INSERT INTO CLASSPARAMETERS(PARAMETERID) VALUES(?)"

  aCmdSQL_INSERT_CLASSPARAMETER.Parameters.Append aCmdSQL_INSERT_CLASSPARAMETER.CreateParameter("PARAMETERID", adInteger, adParamInput, 4)

  Dim aCmdSQL_INSERT_STUDENTPARAMETER
  Set aCmdSQL_INSERT_STUDENTPARAMETER = CreateObject("ADODB.Command")
  TestErrorEx "ASP error : Ошибка при создании ADODB.Command INSERT_STUDENTPARAMETER", -3
  Set aCmdSQL_INSERT_STUDENTPARAMETER.ActiveConnection = aConnection
  aCmdSQL_INSERT_STUDENTPARAMETER.Prepared = True
  aCmdSQL_INSERT_STUDENTPARAMETER.CommandText = "INSERT INTO STUDENTPARAMETERS(PARAMETERID) VALUES(?)"

  aCmdSQL_INSERT_STUDENTPARAMETER.Parameters.Append aCmdSQL_INSERT_STUDENTPARAMETER.CreateParameter("PARAMETERID", adInteger, adParamInput, 4)
End If

If action = "update" Then
  Dim aCmdSQL_UPDATE_ACTIVITY
  Set aCmdSQL_UPDATE_ACTIVITY = CreateObject("ADODB.Command")
  TestErrorEx "ASP error : Ошибка при создании ADODB.Command UPDATE_ACTIVITY", -3
  Set aCmdSQL_UPDATE_ACTIVITY.ActiveConnection = aConnection
  aCmdSQL_UPDATE_ACTIVITY.Prepared = True
  aCmdSQL_UPDATE_ACTIVITY.CommandText = _
	  	  "UPDATE ACTIVITIES SET ACTIVITYNAME = ?,SELFPACED = ?,PROBLEMLISTURL = ?,PROBLEMURL = ?, " & _
		  " ENTRYURL = ?,RESULTSURL = ?,TEACHER_TOOLTIP = ?,STUDENT_TOOLTIP = ?,INTERNALID = ?,GROUPID = ? " & _
		  "WHERE ACTIVITYID = ?"

  aCmdSQL_UPDATE_ACTIVITY.Parameters.Append aCmdSQL_UPDATE_ACTIVITY.CreateParameter("ACTIVITYNAME", adVarChar, adParamInput, 80)
  aCmdSQL_UPDATE_ACTIVITY.Parameters.Append aCmdSQL_UPDATE_ACTIVITY.CreateParameter("SELFPACED", adChar, adParamInput, 1)
  aCmdSQL_UPDATE_ACTIVITY.Parameters.Append aCmdSQL_UPDATE_ACTIVITY.CreateParameter("PROBLEMLISTURL", adVarChar, adParamInput, 200)
  aCmdSQL_UPDATE_ACTIVITY.Parameters.Append aCmdSQL_UPDATE_ACTIVITY.CreateParameter("PROBLEMURL", adVarChar, adParamInput, 200)
  aCmdSQL_UPDATE_ACTIVITY.Parameters.Append aCmdSQL_UPDATE_ACTIVITY.CreateParameter("ENTRYURL", adVarChar, adParamInput, 200)
  aCmdSQL_UPDATE_ACTIVITY.Parameters.Append aCmdSQL_UPDATE_ACTIVITY.CreateParameter("RESULTSURL", adVarChar, adParamInput, 200)
  aCmdSQL_UPDATE_ACTIVITY.Parameters.Append aCmdSQL_UPDATE_ACTIVITY.CreateParameter("TEACHER_TOOLTIP", adVarChar, adParamInput, 200)
  aCmdSQL_UPDATE_ACTIVITY.Parameters.Append aCmdSQL_UPDATE_ACTIVITY.CreateParameter("STUDENT_TOOLTIP", adVarChar, adParamInput, 200)
  aCmdSQL_UPDATE_ACTIVITY.Parameters.Append aCmdSQL_UPDATE_ACTIVITY.CreateParameter("INTERNALID", adVarChar, adParamInput, 20)
  aCmdSQL_UPDATE_ACTIVITY.Parameters.Append aCmdSQL_UPDATE_ACTIVITY.CreateParameter("GROUPID", adInteger, adParamInput, 4)
  aCmdSQL_UPDATE_ACTIVITY.Parameters.Append aCmdSQL_UPDATE_ACTIVITY.CreateParameter("ACTIVITYID", adVarChar, adParamInput, 20)
End If

aConnection.BeginTrans

If action = "install" Then
  BuildGroups(docXml)
  BuildActivities(docXml)
Elseif action = "uninstall" Then
  DeleteActivities(docXml)
Elseif action = "update" Then
  UpdateActivities(docXml)
Elseif action = "is_exists" Then
  Dim existsFlag, activityId
  Set objActionNode = docXml.selectSingleNode("root").attributes.getNamedItem("activityid")
  If Not objActionNode is Nothing Then
    activityId = objActionNode.nodeValue
  Else
    MakeResult "ASP Error : Ошибка при чтении списка параметров - пустой ACTIVITYID", -3
  end If
  existsFlag = isActivityExists(activityId)
End If

aConnection.CommitTrans

If action = "install" Then
  MakeResult "Регистрация электронного модуля успешно завершена",0
Elseif action = "uninstall" Then
  MakeResult "Удаление регистрационной информации электронног модуля успешно завершено",0
Elseif action = "update" Then
  MakeResult "Изменение регистрационной информации электронног модуля успешно завершено",0
Elseif action = "is_exists" Then
  If existsFlag Then
    MakeResult "Электронный модуль '" & activityId & "' уже существует",0
  Else
    MakeResult "Электронный модуль '" & activityId & "' не существует",1
  End If
End If

Function TestErrorEx(Text, Code)
  If Err.Number <> 0 Then
    MakeResult Text & Chr(13) & Chr(10) & Err.Description, Code
  End If
End Function

Function MakeResult(Text, Code)
  Response.Write("<?xml version=""1.0"" encoding=""windows-1251""?>")
  Response.Write("<result>")
  Response.Write("<result-code>")
  Response.Write(Code)
  Response.Write("</result-code>")
  Response.Write("<result-description>")
  Response.Write(Text)
  Response.Write("</result-description>")
  Response.Write("</result>")
  Response.End
End Function

Function GetCheckAttrValue(objNode)
  If Not objNode is Nothing Then
    GetCheckAttrValue = objNode.nodeValue
  Else
    GetCheckAttrValue = Null
  End If
End Function

Function GetParameterId
  On Error Resume Next
  Dim objRecordSet
  Set objRecordSet = aCmdSQL_GET_PARAMETER_ID.Execute
  TestErrorEx "ASP error : Ошибка при выполнении ADODB.Command GET_PARAMETER_ID", -3
  If Not objRecordSet.EOF Then 
    GetParameterId = objRecordSet("ID")
  Else
    GetParameterId = -1 
  End If
End Function

Function isGroupExists(aId)
  On Error Resume Next
  Dim objRecordSet
  aCmdSQL_SELECT_ACTIVITYGROUP("GROUPID") = aId

  Set objRecordSet = aCmdSQL_SELECT_ACTIVITYGROUP.Execute
  TestErrorEx "ASP error : Ошибка при выполнении ADODB.Command SELECT_ACTIVITYGROUP", -3
  If Not objRecordSet.EOF Then 
    isGroupExists = True
  Else
    isGroupExists = False
  End If
End Function

Function BuildGroup(aId, aPubCode, aName, aOrderNo)
  On Error Resume Next
  aCmdSQL_INSERT_ACTIVITYGROUP("GROUPID") = aId
  aCmdSQL_INSERT_ACTIVITYGROUP("PUBCODE") = aPubCode
  aCmdSQL_INSERT_ACTIVITYGROUP("NAME") = aName
  aCmdSQL_INSERT_ACTIVITYGROUP("ORDERNO") = aOrderNo

  aCmdSQL_INSERT_ACTIVITYGROUP.Execute
  TestErrorEx "ASP error : Ошибка при выполнении ADODB.Command INSERT_ACTIVITYGROUP", -3
End Function

Function BuildGroups(docXml)
  On Error Resume Next
  Dim objNodeList, objAttributes, reWrite, i, existsFlag
  Dim objNodeAttrId, objNodeAttrPubCode, objNodeAttrName, objNodeAttrOrderNo, objNodeAttrReWrite

  reWrite = "N"
  Set objNodeList = docXml.getElementsByTagName("group")
  For i = 0 To (objNodeList.length - 1)
    Set objAttributes = objNodeList.Item(i).attributes

    Set objNodeAttrId      = objAttributes.getNamedItem("id")
    Set objNodeAttrPubCode = objAttributes.getNamedItem("pubcode")
    Set objNodeAttrName    = objAttributes.getNamedItem("name")
    Set objNodeAttrOrderNo = objAttributes.getNamedItem("orderno")
    Set objNodeAttrReWrite = objAttributes.getNamedItem("rewrite")
    If Not ((objNodeAttrId is Nothing) Or (objNodeAttrPubCode is Nothing) Or _
            (objNodeAttrName is Nothing) Or (objNodeAttrOrderNo Is Nothing)) Then
      If Not objNodeAttrReWrite is Nothing Then
        reWrite = objNodeAttrReWrite.nodeValue
      End If 
      existsFlag = isGroupExists(objNodeAttrId.nodeValue)
       If Not existsFlag Then
         BuildGroup objNodeAttrId.nodeValue, objNodeAttrPubCode.nodeValue, objNodeAttrName.nodeValue, _
                    objNodeAttrOrderNo.nodeValue
       End If
    Else
      MakeResult "ASP error : Отсутствуют необходимые аттрибуты в файле параметров в теге GROUP", -3
    end If
  Next
End Function

Function isActivityExists(aId)
  On Error Resume Next
  Dim objRecordSet
  aCmdSQL_SELECT_ACTIVITY("ACTIVITYID") = aId

  Set objRecordSet = aCmdSQL_SELECT_ACTIVITY.Execute
  TestErrorEx "ASP error : Ошибка при выполнении ADODB.Command SELECT_ACTIVITY", -3
  If Not objRecordSet.EOF Then 
    isActivityExists = True
  Else
    isActivityExists = False
  End If
End Function

Function DeleteActivity(aId)
  On Error Resume Next
  aCmdSQL_DELETE_RESULTS("ACTIVITYID") = aId

  aCmdSQL_DELETE_RESULTS.Execute
  TestErrorEx "ASP error : Ошибка при выполнении ADODB.Command DELETE_RESULTS", -3

  aCmdSQL_DELETE_ACTIVITY("ACTIVITYID") = aId

  aCmdSQL_DELETE_ACTIVITY.Execute
  TestErrorEx "ASP error : Ошибка при выполнении ADODB.Command DELETE_ACTIVITY", -3
End Function

Function BuildActivity(aId, aName, aSelfPaced, aProblemListUrl, aProblemUrl, aEntryUrl, aResultsUrl, _
                       aTeacher_Tooltip, aStudent_Tooltip, aInternalId, aGroupId)
  On Error Resume Next
  aCmdSQL_INSERT_ACTIVITY("ACTIVITYID") = aId
  aCmdSQL_INSERT_ACTIVITY("ACTIVITYNAME") = aName
  aCmdSQL_INSERT_ACTIVITY("SELFPACED") = aSelfPaced

  aCmdSQL_INSERT_ACTIVITY("PROBLEMLISTURL") = aProblemListUrl
  aCmdSQL_INSERT_ACTIVITY("PROBLEMURL") = aProblemUrl
  aCmdSQL_INSERT_ACTIVITY("ENTRYURL") = aEntryUrl
  aCmdSQL_INSERT_ACTIVITY("RESULTSURL") = aResultsUrl
  aCmdSQL_INSERT_ACTIVITY("TEACHER_TOOLTIP") = aTeacher_Tooltip
  aCmdSQL_INSERT_ACTIVITY("STUDENT_TOOLTIP") = aStudent_Tooltip
  aCmdSQL_INSERT_ACTIVITY("INTERNALID") = aInternalId
  aCmdSQL_INSERT_ACTIVITY("GROUPID") = aGroupId

  aCmdSQL_INSERT_ACTIVITY.Execute
  TestErrorEx "ASP error : Ошибка при выполнении ADODB.Command INSERT_ACTIVITY", -3
End Function

Function UpdateActivity(aId, aName, aSelfPaced, aProblemListUrl, aProblemUrl, aEntryUrl, aResultsUrl, _
                        aTeacher_Tooltip, aStudent_Tooltip, aInternalId, aGroupId)
  On Error Resume Next
  aCmdSQL_UPDATE_ACTIVITY("ACTIVITYNAME") = aName
  aCmdSQL_UPDATE_ACTIVITY("SELFPACED") = aSelfPaced

  aCmdSQL_UPDATE_ACTIVITY("PROBLEMLISTURL") = aProblemListUrl
  aCmdSQL_UPDATE_ACTIVITY("PROBLEMURL") = aProblemUrl
  aCmdSQL_UPDATE_ACTIVITY("ENTRYURL") = aEntryUrl
  aCmdSQL_UPDATE_ACTIVITY("RESULTSURL") = aResultsUrl
  aCmdSQL_UPDATE_ACTIVITY("TEACHER_TOOLTIP") = aTeacher_Tooltip
  aCmdSQL_UPDATE_ACTIVITY("STUDENT_TOOLTIP") = aStudent_Tooltip
  aCmdSQL_UPDATE_ACTIVITY("INTERNALID") = aInternalId
  aCmdSQL_UPDATE_ACTIVITY("GROUPID") = aGroupId

  aCmdSQL_UPDATE_ACTIVITY("ACTIVITYID") = aId

  aCmdSQL_UPDATE_ACTIVITY.Execute
  TestErrorEx "ASP error : Ошибка при выполнении ADODB.Command UPDATE_ACTIVITY", -3
End Function

Function BuildActivities(docXml)
  On Error Resume Next
  Dim objNodeList, objAttributes, reWrite, i, existsFlag
  Dim objNodeAttrId, objNodeAttrName, objNodeAttrSelfPaced, objNodeAttrReWrite
  Dim objNodeAttrProblemListUrl, objNodeAttrProblemUrl, objNodeAttrEntryUrl, objNodeAttrResultsUrl
  Dim objNodeAttrTeacher_Tooltip, objNodeAttrStudent_Tooltip, objNodeAttrInternalId, objNodeAttrGroupId

  reWrite = "N"
  Set objNodeList = docXml.getElementsByTagName("activity")
  For i = 0 To (objNodeList.length - 1)
    Set objAttributes = objNodeList.Item(i).attributes

    Set objNodeAttrId              = objAttributes.getNamedItem("id")
    Set objNodeAttrName            = objAttributes.getNamedItem("name")
    Set objNodeAttrSelfPaced       = objAttributes.getNamedItem("selfpaced")

    Set objNodeAttrProblemListUrl  = objAttributes.getNamedItem("problemlisturl")
    Set objNodeAttrProblemUrl      = objAttributes.getNamedItem("problemurl")
    Set objNodeAttrEntryUrl        = objAttributes.getNamedItem("entryurl")
    Set objNodeAttrResultsUrl      = objAttributes.getNamedItem("resultsurl")
    Set objNodeAttrTeacher_Tooltip = objAttributes.getNamedItem("ttooltip")
    Set objNodeAttrStudent_Tooltip = objAttributes.getNamedItem("stooltip")
    Set objNodeAttrInternalId      = objAttributes.getNamedItem("internalid")
    Set objNodeAttrGroupId         = objAttributes.getNamedItem("groupid")

    Set objNodeAttrReWrite   = objAttributes.getNamedItem("rewrite")
    If Not ((objNodeAttrId is Nothing) Or (objNodeAttrSelfPaced is Nothing) Or _
            (objNodeAttrName is Nothing)) Then
      If Not objNodeAttrReWrite Is Nothing Then
        reWrite = objNodeAttrReWrite.nodeValue
      End If 
      existsFlag = isActivityExists(objNodeAttrId.nodeValue)
      If Not existsFlag Or (existsFlag And reWrite = "Y") Then
        If existsFlag And reWrite = "Y" Then 
          DeleteActivity(objNodeAttrId.nodeValue)
        End If
        BuildActivity objNodeAttrId.nodeValue, objNodeAttrName.nodeValue, objNodeAttrSelfPaced.nodeValue, _
                      GetCheckAttrValue(objNodeAttrProblemListUrl), GetCheckAttrValue(objNodeAttrProblemUrl), _
                      GetCheckAttrValue(objNodeAttrEntryUrl), GetCheckAttrValue(objNodeAttrResultsUrl), _
                      GetCheckAttrValue(objNodeAttrTeacher_Tooltip), GetCheckAttrValue(objNodeAttrStudent_Tooltip), _
                      GetCheckAttrValue(objNodeAttrInternalId), GetCheckAttrValue(objNodeAttrGroupId)
        BuildParameters objNodeList.Item(i)
      End If  
    Else
      MakeResult "ASP error : Отсутствуют необходимые аттрибуты в файле параметров в теге ACTIVITY", -3
    end If
  Next
End Function

Function DeleteActivities(docXml)
  On Error Resume Next
  Dim objNodeList, objAttributes, reWrite, i
  Dim objNodeAttrId, objNodeAttrReWrite

  reWrite = "N"
  Set objNodeList = docXml.getElementsByTagName("activity")
  For i = 0 To (objNodeList.length - 1)
    Set objAttributes = objNodeList.Item(i).attributes
    Set objNodeAttrId = objAttributes.getNamedItem("id")
    Set objNodeAttrReWrite = objAttributes.getNamedItem("rewrite")
    If Not objNodeAttrId is Nothing Then
      If Not objNodeAttrReWrite Is Nothing Then
        reWrite = objNodeAttrReWrite.nodeValue
      End If
      If reWrite = "Y" Then
        DeleteActivity objNodeAttrId.nodeValue
      End If
    Else
      MakeResult "ASP error : Отсутствуют необходимые аттрибуты в файле параметров в теге ACTIVITY", -3
    End If
  Next
End Function

Function UpdateActivities(docXml)
' Необходимо отметить, что при выполнении данной функции меняется содержимое записи ТОЛЬКО в ACTIVITIES
' Список параметров в ACTIVITYPARAMETERS и связанных с ними таблицах остаются неизменными

  On Error Resume Next
  Dim objNodeList, objAttributes, i, existsFlag
  Dim objNodeAttrId, objNodeAttrName, objNodeAttrSelfPaced, objNodeAttrReWrite
  Dim objNodeAttrProblemListUrl, objNodeAttrProblemUrl, objNodeAttrEntryUrl, objNodeAttrResultsUrl
  Dim objNodeAttrTeacher_Tooltip, objNodeAttrStudent_Tooltip, objNodeAttrInternalId, objNodeAttrGroupId

  Set objNodeList = docXml.getElementsByTagName("activity")
  For i = 0 To (objNodeList.length - 1)
    Set objAttributes = objNodeList.Item(i).attributes

    Set objNodeAttrId              = objAttributes.getNamedItem("id")
    Set objNodeAttrName            = objAttributes.getNamedItem("name")
    Set objNodeAttrSelfPaced       = objAttributes.getNamedItem("selfpaced")

    Set objNodeAttrProblemListUrl  = objAttributes.getNamedItem("problemlisturl")
    Set objNodeAttrProblemUrl      = objAttributes.getNamedItem("problemurl")
    Set objNodeAttrEntryUrl        = objAttributes.getNamedItem("entryurl")
    Set objNodeAttrResultsUrl      = objAttributes.getNamedItem("resultsurl")
    Set objNodeAttrTeacher_Tooltip = objAttributes.getNamedItem("ttooltip")
    Set objNodeAttrStudent_Tooltip = objAttributes.getNamedItem("stooltip")
    Set objNodeAttrInternalId      = objAttributes.getNamedItem("internalid")
    Set objNodeAttrGroupId         = objAttributes.getNamedItem("groupid")

    If Not ((objNodeAttrId is Nothing) Or (objNodeAttrSelfPaced is Nothing) Or _
            (objNodeAttrName is Nothing)) Then
      existsFlag = isActivityExists(objNodeAttrId.nodeValue)
      If existsFlag Then
        UpdateActivity objNodeAttrId.nodeValue, objNodeAttrName.nodeValue, objNodeAttrSelfPaced.nodeValue, _
                       GetCheckAttrValue(objNodeAttrProblemListUrl), GetCheckAttrValue(objNodeAttrProblemUrl), _
                       GetCheckAttrValue(objNodeAttrEntryUrl), GetCheckAttrValue(objNodeAttrResultsUrl), _
                       GetCheckAttrValue(objNodeAttrTeacher_Tooltip), GetCheckAttrValue(objNodeAttrStudent_Tooltip), _
                       GetCheckAttrValue(objNodeAttrInternalId), GetCheckAttrValue(objNodeAttrGroupId)
      Else
        MakeResult "ASP error : Невозможно обновить несуществующий электронный модуль", -3
      End If
    Else
      MakeResult "ASP error : Отсутствуют необходимые аттрибуты в файле параметров в теге ACTIVITY", -3
    end If
  Next
End Function

Function BuildParameter(aParameterId, aActivityId, aName, aTitle, aType, aEditable, aVisible, _
                        aSortable, aLavisible, aLaeditable, aGrading, aDefaultValue, aListItems)
  On Error Resume Next
  aCmdSQL_INSERT_ACTIVITYPARAMETERS("PARAMETERID")  = aParameterId
  aCmdSQL_INSERT_ACTIVITYPARAMETERS("ACTIVITYID")   = aActivityId
  aCmdSQL_INSERT_ACTIVITYPARAMETERS("NAME")         = aName
  aCmdSQL_INSERT_ACTIVITYPARAMETERS("TITLE")        = aTitle
  aCmdSQL_INSERT_ACTIVITYPARAMETERS("TYPE")         = aType
  aCmdSQL_INSERT_ACTIVITYPARAMETERS("EDITABLE")     = aEditable
  aCmdSQL_INSERT_ACTIVITYPARAMETERS("VISIBLE")      = aVisible
  aCmdSQL_INSERT_ACTIVITYPARAMETERS("SORTABLE")     = aSortable
  aCmdSQL_INSERT_ACTIVITYPARAMETERS("LAVISIBLE")    = aLavisible
  aCmdSQL_INSERT_ACTIVITYPARAMETERS("LAEDITABLE")   = aLaeditable
  aCmdSQL_INSERT_ACTIVITYPARAMETERS("GRADING")      = aGrading

  aCmdSQL_INSERT_ACTIVITYPARAMETERS("DEFAULTVALUE") = aDefaultValue
  aCmdSQL_INSERT_ACTIVITYPARAMETERS("LISTITEMS")    = aListItems

  aCmdSQL_INSERT_ACTIVITYPARAMETERS.Execute
  TestErrorEx "ASP error : Ошибка при выполнении ADODB.Command INSERT_ACTIVITYPARAMETERS", -3
End Function

Function InsertSubParameter(aCmd, aParameterId)
  On Error Resume Next
  aCmd("PARAMETERID") = aParameterId

  aCmd.Execute
  TestErrorEx "ASP error : Ошибка при выполнении ADODB.Command InsertSubParameter", -3
End Function

Function BuildParameters(ActivityNode)
  On Error Resume Next
  Dim objNodeList, objAttributes, i, parameterId, objChildNodeList, objChildNode, j
  Dim objNodeAttrActivityId, objNodeAttrName, objNodeAttrTitle, objNodeAttrType, objNodeAttrEditable
  Dim objNodeAttrVisible, objNodeAttrSortable, objNodeAttrLavisible, objNodeAttrLaeditable
  Dim objNodeAttrGrading, objNodeAttrDefaultValue, objNodeAttrListItems

  Set objNodeList = ActivityNode.childNodes
  Set objNodeAttrActivityId = ActivityNode.attributes.getNamedItem("id")
  For i = 0 To (objNodeList.length - 1)
    If UCase(objNodeList.Item(i).nodeName) = "PARAMETER" Then 
      Set objAttributes = objNodeList.Item(i).attributes

      Set objNodeAttrName         = objAttributes.getNamedItem("name")
      Set objNodeAttrTitle        = objAttributes.getNamedItem("title")
      Set objNodeAttrType         = objAttributes.getNamedItem("type")
      Set objNodeAttrEditable     = objAttributes.getNamedItem("editable")
      Set objNodeAttrVisible      = objAttributes.getNamedItem("visible")
      Set objNodeAttrSortable     = objAttributes.getNamedItem("sortable")
      Set objNodeAttrLavisible    = objAttributes.getNamedItem("lavisible")
      Set objNodeAttrLaeditable   = objAttributes.getNamedItem("laeditable")
      Set objNodeAttrGrading      = objAttributes.getNamedItem("grading")

      Set objNodeAttrDefaultValue = objAttributes.getNamedItem("defaultvalue")
      Set objNodeAttrListItems    = objAttributes.getNamedItem("listitems")

      If Not ((objNodeAttrActivityId is Nothing) Or (objNodeAttrName is Nothing) Or _
              (objNodeAttrTitle is Nothing) Or (objNodeAttrType is Nothing) Or _
              (objNodeAttrEditable is Nothing) Or (objNodeAttrVisible is Nothing) Or _
              (objNodeAttrSortable is Nothing) Or (objNodeAttrLavisible is Nothing) Or _
              (objNodeAttrLaeditable is Nothing) Or (objNodeAttrGrading is Nothing)) Then
        parameterId = GetParameterId
        If parameterId = -1 Then 
          MakeResult "ASP error : Ошибка при генерации ключа ACTIVITYID", -3
        End If
        BuildParameter parameterId, objNodeAttrActivityId.nodeValue, objNodeAttrName.nodeValue, _
                       objNodeAttrTitle.nodeValue, objNodeAttrType.nodeValue, objNodeAttrEditable.nodeValue, _
                       objNodeAttrVisible.nodeValue, objNodeAttrSortable.nodeValue, objNodeAttrLavisible.nodeValue, _
                       objNodeAttrLaeditable.nodeValue, objNodeAttrGrading.nodeValue, _
                       GetCheckAttrValue(objNodeAttrDefaultValue), GetCheckAttrValue(objNodeAttrListItems)

        Set objChildNodeList = objNodeList.Item(i).childNodes
        For j = 0 To (objChildNodeList.length - 1)
          Set objChildNode = objChildNodeList.Item(j)
          If Not objChildNode.attributes.getNamedItem("value") Is Nothing Then
            If objChildNode.attributes.getNamedItem("value").nodeValue = "Y" Then
              If UCase(objChildNode.nodeName) = "ASSIGNMENT-PARAMETER" Then 
                InsertSubParameter aCmdSQL_INSERT_ASSIGNMENTPARAMETER, parameterId
              Elseif UCase(objChildNode.nodeName) = "CLASS-PARAMETER" Then
                InsertSubParameter aCmdSQL_INSERT_CLASSPARAMETER, parameterId
              Elseif UCase(objChildNode.nodeName) = "STUDENT-PARAMETER" Then
                InsertSubParameter aCmdSQL_INSERT_STUDENTPARAMETER, parameterId
              End If
            End If
          Else
            MakeResult "ASP error : Отсутствуют необходимые аттрибуты в файле параметров в теге " & UCase(objChildNode.nodeName), -3
          End If  
        Next
      Else
        MakeResult "ASP error : Отсутствуют необходимые аттрибуты в файле параметров в теге PARAMETER", -3
      End If
    End If
  Next
End Function
%>
