<% ' © 2007-2008 IRTech. All rights reserved.

Dim arrAlphabet, dctLetterArea
Dim arrReplaceLetters

Sub InitPoolSimilarsABC()
	' Буквы, которые определены в arrReplaceLetters - что ОНИ будут заменены (т.е. 1-ая, 3-я и т.д.) должны не упоминаться в arrAlphabet.
	' Ё - не рассматриваем, она заменена на Е (см. arrReplaceLetters)
	arrAlphabet = Array("А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", _
						"Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ь", "Ы", "Ъ", "Э", "Ю", "Я")

	Set dctLetterArea = Server.CreateObject("NetCity.Storage")
	dctLetterArea("А") = Array("К", "В", "С", "М", "П", "Е")
	dctLetterArea("Б") = Array("Л", "Ь", "Ю", "Д")
	dctLetterArea("В") = Array("У", "Ы", "Ч", "С", "А", "К")
	dctLetterArea("Г") = Array("Н", "Р", "О", "Ш")
	dctLetterArea("Д") = Array("Л", "Б", "Ю", "Ж", "З", "Щ")
	dctLetterArea("Е") = Array("К", "А", "П", "Н")
	dctLetterArea("Ж") = Array("Д", "Ю", "Э", "Х", "З")
	dctLetterArea("З") = Array("Щ", "Д", "Ж", "Х")
	dctLetterArea("И") = Array("М", "Т", "Р", "П")
	dctLetterArea("Й") = Array("Ф", "Ы", "Ц")
	dctLetterArea("К") = Array("У", "В", "А", "Е")
	dctLetterArea("Л") = Array("О", "Ь", "Б", "Д", "Щ", "Ш")
	dctLetterArea("М") = Array("С", "И", "П", "А")
	dctLetterArea("Н") = Array("Е", "П", "Р", "Г")
	dctLetterArea("О") = Array("Р", "Т", "Ь", "Л", "Ш", "Г")
	dctLetterArea("П") = Array("А", "М", "И", "Р", "Н", "Е")
	dctLetterArea("Р") = Array("П", "И", "Т", "О", "Г", "Н")
	dctLetterArea("С") = Array("Ч", "М", "А", "В")
	dctLetterArea("Т") = Array("И", "Ь", "О", "Р")
	dctLetterArea("У") = Array("Ц", "Ы", "В", "К")
	dctLetterArea("Ф") = Array("Я", "Ы", "Ц", "Й")
	dctLetterArea("Х") = Array("З", "Ж", "Э", "Ъ")
	dctLetterArea("Ц") = Array("Й", "Ф", "Ы", "У")
	dctLetterArea("Ч") = Array("Я", "С", "В", "Ы")
	dctLetterArea("Ш") = Array("Г", "О", "Л", "Щ")
	dctLetterArea("Щ") = Array("Ш", "Л", "Д", "З")
	dctLetterArea("Ь") = Array("Т", "Б", "Л", "О")
	dctLetterArea("Ы") = Array("Ф", "Я", "Ч", "В", "У", "Ц")
	dctLetterArea("Ъ") = Array("Х", "Э")
	dctLetterArea("Э") = Array("Ж", "Ъ", "Х")
	dctLetterArea("Ю") = Array("Б", "Ж", "Д")
	dctLetterArea("Я") = Array("Ч", "Ы", "Ф")

	arrReplaceLetters = Array("Ё", "Е") ' 1-ую букву заменим на 2-ую, 3-ю - на 4-ю и т.д. Если нет замен, то вообще не инициировать здесь arrReplaceLetters.
End Sub
%>
