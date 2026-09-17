<%@ Language=VBScript %>
<% 
Option Explicit
On Error Resume Next

Response.Buffer = True
Response.Expires = 0
Response.AddHeader "pragma", "no-cache"

Sub CheckLACCError()
    If Err <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", Err.Number, Err.Description )
    If lacc.LastErrorCode = 10007 Then Call RedirectToScreen("login.asp")
    If lacc.LastErrorCode <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", lacc.LastErrorCode, lacc.LastError )
End Sub
%>
<!-- #INCLUDE FILE=include/adovbs.asp -->
<!-- #INCLUDE FILE=include/common.asp -->
<!-- #INCLUDE FILE=include/cn_common.asp -->
<%

Dim strStateID, strStateName
Dim strCity, strDistrict, strSchoolID, strSchoolName
Dim strTeacherID, strTeacherName
Dim strClassID, strClassName
Dim strStudentID, strStudentName
CheckCNLogin

strToken = lacc.CloneAccessToken( strToken )
CheckLACCError

strClassID = GetSafeStr( Request("CID") )
If IsEmptyStr(strClassID) Then 
	Dim List
	Set List = lacc.GetStudentClasses( strToken )
	CheckLACCError
	If List.Count > 0 Then
		strClassID = GetSafeStr( List(0).Field("classid") )
	End If
End If

If IsEmptyStr(strClassID) Then Call ClassNotFound()

Dim UserInfo, ClassInfo
Set UserInfo = lacc.GetUserInfo( strToken )
Set ClassInfo = lacc.GetClassInfo( strClassID )
CheckLACCError

Dim strCountryID, strCountryName
strCountryID        = CStr( ClassInfo.Field("countryid") )
strCountryName      = CStr( ClassInfo.Field("countryname") )
strStateID        = CStr( ClassInfo.Field("state_provinceid") )
strStateName      = CStr( ClassInfo.Field("stateprovincename") )
strCity           = CStr( ClassInfo.Field("cityname") )
strDistrict       = CStr( ClassInfo.Field("district") )
strSchoolID       = CStr( ClassInfo.Field("schoolid") )
strSchoolName     = CStr( ClassInfo.Field("schoolname") )
strTeacherID      = CStr( ClassInfo.Field("teacherid") )
strTeacherName    = CStr( ClassInfo.Field("teachername") )
strClassName      = CStr( ClassInfo.Field("classname") )
strStudentName    = CStr( UserInfo.Field("name") )

Response.Cookies("SchoolInfo")("CountryID") = strCountryID
Response.Cookies("SchoolInfo")("StateID") = strStateID
Response.Cookies("SchoolInfo")("StateName") = strStateName
Response.Cookies("SchoolInfo")("City") = strCity
Response.Cookies("SchoolInfo")("District") = strDistrict
Response.Cookies("SchoolInfo")("SchoolID") = strSchoolID
Response.Cookies("SchoolInfo")("SchoolName") = strSchoolName
Response.Cookies("SchoolInfo").Expires = #Jan 1, 2010#

strID = Storage.CreateToken( 1 )
Call Storage.SetTokenTimeout(strID, 60*60000)

Call Storage.SetData( strID, "City", strCity & ", " & strStateID )
Call Storage.SetData( strID, "SchoolName", strSchoolName )
Call Storage.SetData( strID, "TeacherID", strTeacherID )
Call Storage.SetData( strID, "TeacherName", strTeacherName )
Call Storage.SetData( strID, "ClassID", strClassID )
Call Storage.SetData( strID, "ClassName", strClassName )
Call Storage.SetData( strID, "StudentName", strStudentName )
Call Storage.SetData( strID, "AccessToken", strToken )
Call Storage.SetData( strID, "TTSURL", strTTSURL )

Set dictParams = CreateObject("NetCity.Storage")
Call Storage.SetData( strID, "Parameters", dictParams )

Call RedirectToScreen("main.asp")
%>
