<!-- #INCLUDE VIRTUAL=/asp/Setupschool/qadd_vb.asp -->
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/qadd.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.
Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolUI","kTitleEMUserQAdd")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_EM_Users
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_EM_Users
 End Function

Sub ReadState()
	strListTitle = obLanguage("SetupSchoolUI","kListEMUserQAdd")
	bIsBDateObligatory = True
	Call ReadStateSpecial
	Call obTokenMgr.SetData(strToken, stBackPage, strBackPage)
End Sub

Sub Main()
	If Not HasUserRight(arEMUsersEdit) Then GenerateError obLanguage("Common","kErrPageAccess")
	QuickAddInit
End Sub

Sub onSpecialHead()
	Dim k, bStudent 
	qadd_edit_name = Array("FN", "MN", "LN", "LON", "PW", "PW2", "ChangePW", "PCM", "EM", "POS", "WPH", "UR")
	Call qAddScript()
%>
<script><!--
function ValidateSpecific()
{
	var form = document.UserInfo;
	if( checkNotEmpty( form.POS, '<%=obLanguage("SetupSchoolUI","kTitlePosition")%>' ) ) return false;
	if (isPhoneNumberValid()) return true;
	return false;
}

function isPhoneNumberValid(){
	var i, j;
	var form = document.UserInfo;
	var elWPhone = form.elements['WPH'];
	var sWPhone = elWPhone.value;
	
	if (sWPhone.length==0) return true;
	for( i = 0; i < sWPhone.length; i++ ){

		if( isNaN( sWPhone.charAt(i) ) ){
			alert('<%=obLanguage("SetupSchoolUI","kFieldPhoneHasOnlyNumbers").Format(Array(obLanguage("SetupSchoolUI", "kWorkPhone")))%>');
			elWPhone.focus();
			return false;
		}
	}
	return true;
}

function Back() {
	goBack(document.MenuForm, "<%=strBackPage%>");
}

$("select[name=UR]").bind("onchange",function(){qadd_data_changed = true;});

//--></script>
<%
End Sub

Sub DrawSpecificRows()
	Call DrawUserParam
	Call DrawUserRoles(14, false)
End Sub


Sub DrawUserParam()
	Call DrawInputTextRow( "*** " & obLanguage("ServAdmin","kPosition"), "", "POS", 50, 200, "qadd_on_data_change()", "" )
	Call DrawInputTextRow( obLanguage("SetupSchoolUI","kWorkPhone"), "", "WPH", 50, 200, "qadd_on_data_change()", "" )
End Sub
%>
