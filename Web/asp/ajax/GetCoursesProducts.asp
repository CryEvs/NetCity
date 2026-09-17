<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next

Dim result, json
Dim objProducts, arrProducts
Dim nSGId, nCMId

Set objProducts = objLa.GetProducts
arrProducts = objProducts.GetRows()

'TODO. сериализация массива в json

TestError "Ошибка сериализации ответа"

Set result = new JSONResult
Call result.AddJsonData("coursesProducts", "[""productid"": 1, ""productname"": ""test""]")

rw result%>