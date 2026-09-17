<% ' © 2007-2008 IRTech. All rights reserved.

Dim strRegExpAlphabet, strBadMessage
Dim strRegExpFio

Sub InitRegExpAlphabet()
	strRegExpAlphabet = obContext.LocalSettings.RegExpAlphabet
	strRegExpFio = obContext.LocalSettings.RegExpFio
	strBadMessage = obLanguage("Common","kbadFirstLetter").Format(obContext.LocalSettings.FirstLetter, obContext.LocalSettings.LastLetter)
End Sub

Sub BadFirstLetter()
%>
<script><!--
function badFio( el, bCheck ){
	<%If IsDull(strRegExpFio) Then%>
		return badFirstLetter(el, bCheck);
	<%End If%>

	el.value = trimStr( el.value );
	if( el.value == "" )
		return false;
	var firstLetter = el.value.slice(0,1).toUpperCase();
	if (bCheck){
		var namePattern = new RegExp("<%=strRegExpFio%>", "i");
		if (!namePattern.test(el.value)){
			el.focus();
			alert('<%=obLanguage("Common","kbadFio")%>');
			return true;
		}
	}
	el.value = firstLetter + el.value.slice(1);
	return false;
}

function badFirstLetter( el, bCheck ){
	el.value = trimStr( el.value );
	if( el.value == "" )
		return false;
	var firstLetter = el.value.slice(0,1).toUpperCase();
	if (bCheck){
		var namePattern = new RegExp("[<%=strRegExpAlphabet%>]");
		if (!namePattern.test(firstLetter)){
			el.focus();
			alert('<%=strBadMessage%>');
			return true;
		}
	}
	el.value = firstLetter + el.value.slice(1);
	return false;
}
//--></script>
<%
End Sub
%>
