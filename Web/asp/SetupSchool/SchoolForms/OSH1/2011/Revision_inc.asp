<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolForms/OSH1/FormOSH1_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
' NOTE: This file should be included before onDrawPage() sub and after end of the onHead() sub

Const kOtherReason	= 16

Const kRusEnglishTemplate	= "АНГЛ%"
Const kEngEnglishTemplate	= "ENG%"
Const kRusGermanTemplate	= "НЕМЕЦ%"
Const kEngGermanTemplate	= "DEU%"
Const kRusFrenchTemplate	= "ФРАНЦ%"
Const kEngFrenchTemplate	= "FRA%"

Function GetFormPages()
	GetFormPages = Array( "", "Титульный лист", "пп.1-2", "пп.3-4", "пп.5-7", "пп.8-12", "пп.13-14", "пп.15-16", "пп.17", "пп.18", "пп.19", "пп.20", "пп.21", "пп.22" )
End Function
%>
