<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_YearNo.asp -->

<%
Dim objSmsComponent
Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")

objSmsComponent.SetAgreementDate(strUserID)
RedirectTo "AgreementPersonalData.asp", null
%>
