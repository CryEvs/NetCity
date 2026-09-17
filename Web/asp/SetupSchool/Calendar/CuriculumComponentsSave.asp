<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Const MaxCompNameSize = 50

If Not HasUserRight(arSchoolSubjects) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim strAction, strComponentID, strComponentName, bOk, arrComponents, i
strAction = Request("ACT")

If strAction = "new" Then
	strComponentName = Trim( GetSafeStr( Request("COMPONENTNAME"), MaxCompNameSize, NULL ) )

	bOk = CBool( objNSNET.CreateComponent(strSchoolID, strComponentName) )
	TestError obLanguage("SetupSchoolCalendar","kCantCreateComponent")
	If Not bOk Then GenerateError obLanguage("SetupSchoolCalendar","kComponentNameExists")
ElseIf strAction = "remove" Then
	If Request("COMPONENTS").Count > 0 Then
		ReDim arrComponents(Request("COMPONENTS").Count-1)
		For i = 0 To UBound(arrComponents)
			arrComponents(i) = GetSafeID(Request("COMPONENTS")(i+1), NULL)
		Next
		Call objNSNET.RemoveComponents(arrComponents)
		TestError obLanguage("SetupSchoolCalendar","kCantRemoveComponent")
	End If
End If

RedirectTo "CuriculumComponents.asp", null
%>
