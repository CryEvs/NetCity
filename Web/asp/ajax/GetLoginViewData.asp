<%@ Language=VBScript %>
<!-- #INCLUDE VIRTUAL=/asp/scripts/common.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/login.asp -->
<%
	Session.CodePage = 65001
	Response.Charset = "utf-8"
	Response.Expires = -1
	Response.CacheControl = "no-cache" 
	Response.AddHeader "Content-Type","application/json; charset=utf-8"
	
	Function GetCacheVer()
		Dim strRet
		strRet = obTokenMgr.Application()("CACHE_SCHOOLS_VERS")
		If IsDull(strRet) Then
			strRet = GetVer()
			obTokenMgr.Application()("CACHE_SCHOOLS_VERS") = strRet
		End If
		GetCacheVer = strRet
	End Function
%>
{
	"productName": "<%=NETSCHOOL_PRODUCT_NAME%>",
	"schoolLogin": <%=Bool2Js(Not bIsRegionEMForSchool)%>,
	"emLogin": <%=Bool2Js(MODULE_EM)%>,
	"esiaLogin": <%=Bool2Js(kESIA_AUTH)%>,
	"esiaLoginPage": "/asp/sso/esia/crosslogin",
	"esiaMainAuth": <%=Bool2Js(kESIA_MAIN_AUTH)%>,
	"esiaButton": <%=Bool2Js(kESIA_BUTTON_AUTH)%>,
	"signatureLogin": false,
	"cacheVer": "<%=GetCacheVer()%>"
}