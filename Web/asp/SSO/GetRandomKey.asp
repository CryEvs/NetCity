<% ' © 2007-2021 IRTech. All rights reserved.

' генерирует рандомный ключ
Function GetRandomKey()
	GetRandomKey = LCase(Cstr(objNSNET.GenerateGUID()))
End Function

' генерирует уникальный ключ
Function GetUniqueKey(objCacheComponent)
	Dim randomKey, objCache

	' случайный ключ
	randomKey = GetRandomKey()
	' объект кэша по ключу
	objCache = objCacheComponent.Get(randomKey)

	Do While Not IsDull(objCache)
		randomKey = GetRandomKey()
		objCache = objCacheComponent.Get(randomKey)
	Loop

	GetUniqueKey = randomKey
End Function
%>