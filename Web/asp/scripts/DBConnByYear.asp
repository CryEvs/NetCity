<% ' © 2007-2011 IRTech. All rights reserved.
'используется в отчетах совместно с /asp/headernoscreen_Year.asp
'из-за отсутвия в последнем необходимости проверки текущего года и соответсвенно переключения коннекций
Function ReadYearConnectionState()
	strCurrYearID = obTokenMgr.GetData(strToken,stCurrYear)
	If obTokenMgr.GetData(strToken,"IsArchived") Then SetArchConnection
End Function
%>
