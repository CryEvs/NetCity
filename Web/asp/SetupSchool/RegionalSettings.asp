<!-- #INCLUDE virtual="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim cur, strLCID, strGMT
Dim hFormatArr, dFormatArr, mFormatArr, yFormatArr, AllArr, AllArrRu
Dim strWasSaved

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kTitleRegionalSettings")
End Function
Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementSchoolInfo
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbRegSettings
 End Function

Sub ReadState()
	strWasSaved = GetSafeStr(Request("SaveStatus"),1,"N")
End Sub

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arProfileEditRegionalSettings)
End Function

Sub Main()
	Dim bDefault, datRS, dfString
	bDefault =True
	strLCID = CStr(Session.LCID)
	If IsEmpty( Request("0") ) Then
		Set datRS = objNSNET.GetSchoolInfo(strSchoolID)
		TestError( obLanguage("SetupSchool","kErrCantGetSchoolInfo") & obLanguage("Common","kSchool_p",strFunctionalityType) )
		dfString = datRS("DATEFORMAT")
		If Not IsNull( dfString ) Then
			cur = Split( dfString, chr(1) )
			strGMT = datRS("TIMEOFFSET")
			bDefault = False
		End If
	End If
	If bDefault Then
		strGMT =  GetSafeStr( Request("GMT"), 6, "4" )
		Redim cur(8)
		cur(0) = GetSafeStr( Request("0"), 4, "d" )
		cur(1) = GetSafeStr( Request("1"), 4, "mm" )
		cur(2) = GetSafeStr( Request("2"), 4, "yy" )
		cur(3) = GetSafeStr( Request("delim"), 1, "." )
		cur(4) = GetSafeStr( Request("t0"), 2, "h" )
		cur(5) = GetSafeStr( Request("t1"), 2, "mm" )
		cur(6) = GetSafeStr( Request("tdelim"), 1, ":" )
		If strLCID="1033" Then
			cur(7) = GetSafeStr( Request("tam"), 10, "" )
			cur(8) = GetSafeStr( Request("tpm"), 10, "" )
		Else
			cur(7) = ""
			cur(8) = ""
		End If
	End If
	If strWasSaved = "Y"  Then
		dfString = cur(0)&chr(1)&cur(1)&chr(1)&cur(2)&chr(1)&cur(3)&chr(1)&cur(4)&chr(1)&cur(5)&chr(1)&cur(6)&chr(1)&cur(7)&chr(1)&cur(8)&chr(1)&strLCID

		Call objNSNET.SaveSchoolRegionalSettings(strSchoolID, dfString, strGMT)
		TestError( obLanguage("SetupSchool","kErrCantGetSchoolInfo") & obLanguage("Common","kSchool_p",strFunctionalityType) )

		strDateFormat = cur(0)&chr(1)&cur(1)&chr(1)&cur(2)&chr(1)&cur(3)
		Call obTokenMgr.SetData( strToken, "RegionalSettingsDateFormat", strDateFormat )
		
		Call obTokenMgr.SetData( strToken, "REGIONAL_SETTINGS_FormatT", cur(4)&chr(1)&cur(5)&chr(1)&cur(6)&chr(1)&cur(7)&chr(1)&cur(8)&chr(1) )
		Call obTokenMgr.SetData( strToken, "REGIONAL_SETTINGS_GMT", strGMT )
		strTimeOffset = strGMT
	End If
	Dim dFARu, mFARu, yFARu, hFARu
	dFormatArr = Array("d","dd")
	mFormatArr = Array("m","mm")
	yFormatArr = Array("yy", "yyyy")
	hFormatArr = Array("h","hh")
	AllArr = Array( dFormatArr, mFormatArr, yFormatArr )
	dFARu = Array("д","дд")
	mFARu = Array("м","мм")
	yFARu = Array("гг","гггг")
	hFARu = Array("ч","чч")
	AllArrRu = Array( dFARu, mFARu, yFARu, hFARu )
End Sub

Function onLoad()
	If strWasSaved = "Y" Then
		onLoad = "JavaScript:WasSaved('" & obLanguage("SetupSchool","kRegionalSettingsSaved") & "');"
	ElseIf Not IsEmpty( Request("0") ) Then
		onLoad="JavaScript:dataChanged();"
	Else
		onLoad = ""
	End If
End Function
Sub onHead()
%>
<SCRIPT><!--

function save() {
	$('input[name="savestatus"]').val('Y');
	ok_check_db('Local','RegionalSettings.asp');
}
function canSubmit() {
	var form = document.forms["Local"];
	if( form.elements['delim'].value == "\\" || form.elements['delim'].value == "'" || form.elements['delim'].value == '"' ) {
		alert(language.Generic.SetupSchool.kCharactersAreNotAllowed1);
		form.elements['delim'].focus();
		return false;
	}
	if( form.elements['tdelim'].value == "\\" || form.elements['tdelim'].value == "'" || form.elements['tdelim'].value == '"' ) {
		alert(language.Generic.SetupSchool.kCharactersAreNotAllowed1);
		form.elements['tdelim'].focus();
		return false;
	}
	<%If strLCID ="1033" Then%>
	{
	 var reg;
	 reg = new RegExp("[\'\"]");
	 if( form.elements['tam'].value.search(reg) >=0 ) {
		alert(language.Generic.SetupSchool.kCharactersAreNotAllowed2);
		form.elements['tam'].focus();
		return false;
	 }
	 if( form.elements['tpm'].value.search(reg) >=0 ) {
		alert(language.Generic.SetupSchool.kCharactersAreNotAllowed2);
		form.elements['tpm'].focus();
		return false;
	 }
	 if( form.elements['tpm'].value ==form.elements['tam'].value ) {
		if( form.elements['tpm'].value !="" ) {
			alert(language.Generic.SetupSchool.kAMandPMmustDiffer);
			form.elements['tpm'].focus();
			return false;
		}
	 }
	}
	<%End If%>
	return true;
}
//-->
</SCRIPT>
<%
End Sub

Sub DrawButtons()
	If Not readonly Then
		Call ButtonSave("save()", obLanguage("Common","kSave"))
	End If
End Sub

Sub DrawFilters(strForm)
	Dim df, b1,b2,b3, g, i

	SetFiltersWidth "", "col-md-3 col-sm-3", "col-md-9 col-lg-6 col-sm-6"
	
	OpenFormGroup obLanguage("SetupSchool","kRegTimezone")%>
		<select Name="GMT"  OnChange="dataChanged();" <%=IIF(readonly, " disabled=""disabled"" ","")%> class="form-control form-control-inline"><%For i=-12 To 12%>
			<option Value="<%=i%>"<%If strGMT=CStr(i) Then%> selected <%End If%>>GMT <%=i%>:00</option><%Next%>
		</select>
	<%CloseFormGroup

	OpenFormGroup obLanguage("SetupSchool","kRegDate")%>
		<select Name="0" OnChange="dataChanged();DoSubmit(document.forms[0], '')" <%=IIF(readonly, " disabled=""disabled"" ","")%> class="form-control form-control-inline"><%For g=0 To Ubound( AllArr )%><%For i=0 To UBound(AllArr(g))%>
			<option Value="<%=AllArr(g)(i)%>"<%If cur(0)=AllArr(g)(i) Then %><%b1=g%><%df=df&AllArr(g)(i)&chr(1)%> selected <% End If%>><%=AllArrRu(g)(i)%></option><%Next%><%Next%>
		</select>

		<%If IsEmpty(b1) Then%><% b1=0%><%df=df&AllArr(0)(0)%><%End If%>
			<select Name="1" OnChange="dataChanged();DoSubmit(document.forms[0], '')" <%=IIF(readonly, " disabled=""disabled"" ","")%> class="form-control form-control-inline"><%For g=0 To Ubound( AllArr )%><%If b1 <>g Then %><%For i=0 To UBound(AllArr(g))%>
				<option Value="<%=AllArr(g)(i)%>"<%If cur(1)=AllArr(g)(i) Then %><%b2=g%><%df=df&AllArr(g)(i)&chr(1)%> selected <%End If%>><%=AllArrRu(g)(i)%></option><%Next%><%End If%><%Next%>
		<%If IsEmpty(b2) Then%><%If b1=0 Then%><%b2 =1%><%Else%><%b2=0%><%End If%><%df=df&AllArr(b2)(0)&chr(1)%><%End If%>
			</select>

		<select Name="2" OnChange="dataChanged();DoSubmit(document.forms[0], '')" <%=IIF(readonly, " disabled=""disabled"" ","")%> class="form-control form-control-inline"><%For g=0 To Ubound( AllArr )%><%If b1 <>g AND b2 <>g Then %><%For i=0 To UBound(AllArr(g))%>
			<option Value="<%=AllArr(g)(i)%>"<%If cur(2)=AllArr(g)(i) Then %><%b3=g%><%df=df&AllArr(g)(i)&chr(1)%> selected <%End If%>><%=AllArrRu(g)(i)%></option><%Next%><%End If%><%Next%>
		</select>

		<%If IsEmpty(b3) Then%><% b3 = 3-b1-b2 %><%df=df&AllArr(b3)(0)&chr(1)%><%End If%>
		<input type="text" name="delim" value="<%=DB2Value(cur(3))%>" size="<%=TextInputSize(1)%>" maxlength="1" <%=IIF(readonly, " disabled=""disabled"" ","")%>>
		<div class="pull-right"><b><%=DateTwoStr(NSDate(), df&cur(3))%></b></div>
	<%CloseFormGroup
	
	OpenFormGroup obLanguage("SetupSchool","kRegTime")%>
		<select name="t0" OnChange="dataChanged();" <%=IIF(readonly, " disabled=""disabled"" ","")%> class="form-control form-control-inline"><%df=hFormatArr(0)&chr(1)%> <%For i=0 To UBound( hFormatArr )%>
			<option Value="<%=hFormatArr(i)%>"<%If cur(4)=hFormatArr(i) Then %><%df=cur(4)&chr(1)%> selected <% End If%>><%=AllArrRu(3)(i)%></option><%Next%>
		</select>

		<select Name="t1" OnChange="dataChanged();" <%=IIF(readonly, " disabled=""disabled"" ","")%> class="form-control form-control-inline"><option Value="mm"  selected >мм</option></select>

		<input TYPE="text" name="tdelim" value="<%=DB2Value(cur(6))%>" size="<%=TextInputSize(1)%>" maxlength="1" <%=IIF(readonly, " disabled=""disabled"" ","")%>>

		<%If strLCID="1033" Then %>
			am<input type="text" name="tam" value="<%=DB2Value(cur(7))%>" size="<%=TextInputSize(6)%>" <%=IIF(readonly, " disabled=""disabled"" ","")%>>
			pm<input type="text" name="tpm" value="<%=DB2Value(cur(8))%>" size="<%=TextInputSize(6)%>" <%=IIF(readonly, " disabled=""disabled"" ","")%>>
		<%End If%>
		<div class="pull-right"><b><%=TimeTwoStr(NSTime(), df &"mm"&chr(1)&cur(6)&chr(1)&cur(7)&chr(1)&cur(8) )%></b></div>
	<%CloseFormGroup
End Sub

Sub onDrawPage()%>
	<form name = "Local" method="POST" Action = "RegionalSettings.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="savestatus" value="">
		<%Call DrawButtonsFilters( True, "Local" )%>
	</form><%
End Sub
%>
