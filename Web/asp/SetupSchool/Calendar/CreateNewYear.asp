<!-- #INCLUDE VIRTUAL=/asp/headersimple.asp -->
<!-- #INCLUDE VIRTUAL=/asp/SetupSchool/Calendar/CreateNewYear_inc.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strNext
Function GetPageTitle()
	GetPageTitle = kTitleCreateNewYear
End Function

Sub ReadState()
	Dim i, arrNewClasses, strClassName
	Dim bPreSchool, arr
	
	bPreSchool  = False
	If CLng(strFunctionalityType) = kFuncType_PreSchool Then
		bPreSchool  = True
		ReDim arr(1,6)
		arr(0,0) = 0 : arr(0,1) = 1 : arr(0,2) = 2 : arr(0,3) = 3: arr(0,4) = 4: arr(0,5) = 5: arr(0,6) = 6
		arr(1,0) = kGr0
		arr(1,1) = kGr1
		arr(1,2) = kGr2
		arr(1,3) = kGr3
		arr(1,4) = kGr4
		arr(1,5) = kGr5
		arr(1,6) = kGr6
	End If
	
	Redim arrNewClasses(Request("GRADE").Count-1)
	For i=1 To Request("GRADE").Count
		If bPreSchool Then
			strClassName = Request("LETTER")(i) & " " & arr(1, GetSafeLng(Request("GRADE")(i), Null))
		Else
			strClassName = Request("GRADE")(i) & Request("LETTER")(i)
		End If
		strClassName = Trim(strClassName)
		arrNewClasses(i-1) = Array( strClassName, CLng( Request("GRADE")(i) ), CStr( Request("LETTER")(i) ), CStr(Request(strClassName & "_TIDS")), CLng( Request("PROFID")(i)) )
	Next
	Call obTokenMgr.SetData(strToken,"NewYearClasses", arrNewClasses )
End Sub

Sub onHead()
	onSpecialHead
End Sub

Sub DrawButtons()
	ButtonSave "ok_check_db('MainForm','');", kSave
	ButtonCancel "goBack(document.MainForm, 'Years.asp')", kBack
End Sub
%>
