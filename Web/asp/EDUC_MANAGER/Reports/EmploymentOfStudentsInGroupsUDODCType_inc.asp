<% ' © 2007-2013 IRTech. All rights reserved.
'Массив хранит информацию о категориях учащихся, необходим для отчета "Занятость обучающихся в объединениях МОДО"
Function InitarrType( bAll )
	Dim arr, arrType, domain, i, m
	domain="EMReports"
	arr = Array(_
		obLanguage(domain, "kMOY"), _
		obLanguage(domain, "kPreschool"), _
		obLanguage(domain, "kNOY"), _
		obLanguage(domain, "kCKOY"), _
		obLanguage(domain, "kStudents"), _
		obLanguage(domain, "kWorkers") )
	i = 0
	If bAll Then
		Redim arrType(1, 6)
		arrType(0,i) = - 1
		arrType(1,i)=obLanguage("Common", "kAll")
		i = 1
	Else
		Redim arrType(1, 6)
	End If
	For m = 0 To Ubound(arr)
		arrType(0,i) = m
		arrType(1,i) = arr(m)
		i = i + 1
	Next
	InitarrType = arrType
End Function

%>