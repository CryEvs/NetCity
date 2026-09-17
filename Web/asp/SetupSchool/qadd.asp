<!-- #INCLUDE VIRTUAL="/asp/scripts/firstLetter.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Const kMinBeforeExpire = 2
Const kMaxQUsersCnt = 10

Dim nTokenTimeOut, nTimeOut, dtToday
Dim nYear, dtStartDate, dtEndDate
Sub qAddScript()
	Dim bStudent
	Dim strRegExpLogin
	bStudent = (InStrRev(Request.ServerVariables("SCRIPT_NAME"),"Student") > 0)
	nTokenTimeOut = obTokenMgr.GetTokenTimeout(strToken)
	nTimeOut = nTokenTimeOut - kMinBeforeExpire * 60000
	dtToday = NSNow()

	nYear = Year(dtToday)
	dtStartDate = NormalizeDate( DateSerial( nYear - 90, 1, 1 ) )
	dtEndDate = NormalizeDate( NSDate )
	bIsCheckDates = True
	Call scriptCalendar( "UserInfo", dtStartDate, dtEndDate )
	Call BadFirstLetter()
	Call InitServerSettings
	strRegExpLogin = "[" & kRegExp_Login & strRegExpAlphabet & "]"
	%>

<script src="<%=GetVersionedResLink("/static/dist/pages/common/js/emailValidator.js")%>" type="text/javascript"></script>
<script>
<!--

	var qadd_form;
	var qadd_listbox_form;
	var qadd_listbox;
	
var qadd_input_names = <%=comHelper.JsonHelper.SerializeObject(qadd_edit_name)%>;
var emailValidatorCtrl;

	$(document).ready(function(){
		qadd_form = document["<%=qadd_form_name%>"];
		qadd_listbox_form = document["<%=qadd_listbox_form%>"];
		qadd_listbox = qadd_listbox_form.<%=qadd_listbox_name%>;

	emailValidatorCtrl = new EmailValidatorCtrl.EmailValidatorCtrl();
});

	dateInput.onChange(qadd_on_data_change);

	function qadd_verify_record() {
		if (!qadd_edit_mode && (qadd_count + 1) > <%=kMaxQUsersCnt%>){
			alert(language.Generic.SetupSchoolUI.kMsgMaxQuickUsers + '.');
			return false;
		}
		return canSubmit();
	}

	function qadd_get_value_for_listbox() { 
		return <%IF(CLng(strFunctionalityType)<>kFuncType_EM) Then GetEditValue(2) ELSE GetEditValue(3) End If%>;
	}
	var bContinueSubmitForm = true;

	function onPreSubmitForm() {}
	var bShowMsgForLast = true;

	function saveChanges() {
		if(isDBBusy()) {
			alert(language.Generic.SetupSchoolUI.kSavingContinue + '.' + language.Generic.Curriculum.kPleaseWait + '...');
			return false;
		}

		if( canSubmit()) {
			if(qadd_data_changed) {
				bShowMsgForLast = false;
				qadd_add_new();
			}

			if (qadd_count == 0) {
				alert(language.Generic.SetupSchoolUI.kYouDidNotEnterUserInfo);
				return false;
			}

			document.forms["UserInfo"].qadd_total.value = "";
			qadd_on_submit();
			onPreSubmitForm();

			if(bContinueSubmitForm)
				submitForm();
		}
	}

	function submitForm()
	{
		setDBBusy();
		DoSubmit( document.UserInfo, "" );
	}

	function VerifyUserNames(elLON)
	{
		var sLON = elLON.value.toUpperCase();
		for(var i = 0; i < qadd_count; i++)
		{
			if(qadd_edit_mode && (i == qadd_index))
				continue;
			qadd_record = qadd_records[i];
			if(qadd_record != null)
			{
				if(sLON == qadd_record["LON"].toUpperCase())
				{
					focusAlert(elLON, language.Generic.SetupSchoolUI.kErrorLoginNameAlreadyExists);
					return false;
		}	}	}
		return true;
	}

	function isInvalidName( el, fieldname )
	{
		return isInvalidNameEx( el, fieldname, true );
	}

	function isInvalidNameEx( el, fieldname, docheckNotEmpty )
	{
		el.value = trimStr(el.value);
		if( docheckNotEmpty )
		{
			if( checkNotEmpty( el, fieldname ) ) return true;
		}
		if( badFio(el, true ) ) return true;
		return false;
	}

	function isInvalidDate( el, fieldname ){
		if(dateUtils.str2date(el.value) == null){
			//focusAlert(el, 'неверное значение ' + fieldname.toLowerCase());
			return true;
		}
		return false;
	}

	function checkNotEmpty( el, fieldname )
	{
		if( trimStr(el.value) == "" )
		{
			focusAlert(el, language.Generic.SetupSchoolUI.kErrEmpty+fieldname.toLowerCase());
			return true;
		}
		return false;
	}

	var dtNow = <%=Date2Js(dtToday)%>;

	function canSubmit(){
		if (!qadd_data_changed)
			return true;

		var form = document.UserInfo;
		var frmElements = form.elements;
	
		var ErrLastName = language.Generic.SetupSchoolUI.kErrLastName;
		if( isInvalidName( form.LN, ErrLastName ) ) return false;
		var ErrFirstName = language.Generic.SetupSchoolUI.kErrFirstName;
		if( isInvalidName( form.FN, ErrFirstName ) ) return false;
		var ErrMiddleName = language.Generic.Common.kMiddleName;
		if( isInvalidNameEx( form.MN, ErrMiddleName, false ) ) return false;

		<%If CLng(strFunctionalityType)<>kFuncType_EM Then %>
		form.BDT.value = trimStr( form.BDT.value );
		<%If bIsBDateObligatory Then%>
			if( checkNotEmpty( form.BDT, language.Generic.SetupSchoolUI.kErrBirthdate ) ) 
				return false;
			if( isInvalidDate( form.BDT, language.Generic.SetupSchoolUI.kErrBirthdate ) ) {
				focusAlert(form.BDT, language.Generic.Common.kErrInvalidDate + ' - '+language.Generic.Common.kBDate );
				return false;
			}
		<%End If%>

		var dateFilter = getDateFilterInfo("BDT");
		if( ( dateFilter.date() != null ) && ( dateFilter.date() > dtNow ) ){
			focusAlert(dateFilter.element, language.Generic.SetupSchoolUI.kBirthdayLargeToday);
			return false;
		}
		<%End If %>

		<%If CLng(strFunctionalityType)<>kFuncType_PreSchool Or (CLng(strFunctionalityType)=kFuncType_PreSchool And Not bStudent) Then%>

			var checkEmail = $('input[name=PCM]').length != 0 && $('input[name=PCM]').eq(1).prop('checked');
			if (checkEmail) {
				var e_EM = form.EM;
				var sEmail = e_EM.value;
				if (!emailValidatorCtrl.isEmailValid(sEmail)) {
					focusAlert(e_EM, language.Generic.SetupSchoolUI.kSetEMail);
					return false;
				}
			}

			var e_LON = form.LON;
			if( checkNotEmpty( e_LON, language.Generic.SetupSchoolUI.kErrLoginName ) ) return false;
			if( !VerifyUserNames( e_LON ) ) return false;
			if( e_LON.value.length < <%=kMinLoginLength%>){
				focusAlert(e_LON, '<%=obLanguage("Common","kErrorLoginMustHave").Format(Array(kMinLoginLength))%>');
				return false;
			}
			if( /<%=strRegExpLogin%>/.test(e_LON.value) )
			{
				focusAlert(e_LON, language.Generic.Common.kErrLoginValidSimbols + '<br />' + '<%=kSimbolsForLogin%>');
				return false;
			}

			var e_PW = form.PW;
			if( e_PW.value.length < <%=obContext.ServerSettings.SecuritySettings.MinPasswordLength%> )
			{
				focusAlert(e_PW, '<%=obLanguage("Common","kErrorPasswordMustHave").Format(Array(obContext.ServerSettings.SecuritySettings.MinPasswordLength))%>');
				return false;
			}
			if( e_PW.value.charAt(0) == ' ' || e_PW.value.charAt(e_PW.value.length-1) == ' ' )
			{
				focusAlert(e_PW, language.Generic.Common.kErrPWDSurroundSpaces);
				return false;
			}

			if( form.PW2.value != e_PW.value )
			{
				e_PW.value = "";
				form.PW2.value = "";
				focusAlert(e_PW, language.Generic.SetupSchoolUI.kErrorBadPasswordConfirm);
				return false;
			}
			<%If serverSettings.SecuritySettings.RestrictNumericPasswords Then%>
			var bOnlyNumeric = !(/[^0-9]/.test(e_PW.value));
			if(bOnlyNumeric)
			{
				focusAlert(e_PW, language.Generic.Common.kErrNumericPasswordsRestricted);
				return false;
			}
			<%End If%>

			var pass = trimStr(e_PW.value);
			e_LON.value = trimStr(e_LON.value);

			if(checkPasswordReliability(pass, e_LON.value, form))
			{
				focusAlert(e_PW, language.Generic.Common.kSimplePassword);
				return false;
			}
		<%End If%>
		return ValidateSpecific();
	}

	function checkPasswordReliability(pass, e_LON, form)
	{
		var upperPass = pass.toUpperCase();
		var upperLastName = form.LN.value.toUpperCase();
		var upperFirstName = form.FN.value.toUpperCase();
		var upperLogin = e_LON.toUpperCase();
		var firstSymbolFN = upperFirstName.charAt(0);
		var firstSymbolMN = form.MN.value.toUpperCase().charAt(0);

		return upperPass == upperLogin || upperPass == upperLastName || upperPass == upperFirstName ||
			upperPass == upperLastName + upperFirstName || upperPass == upperFirstName + upperLastName ||
			upperPass == upperLastName + firstSymbolFN || upperPass == firstSymbolFN + upperLastName ||
			upperPass == upperLastName + firstSymbolFN + firstSymbolMN || upperPass == firstSymbolFN + firstSymbolMN + upperLastName;

	}

	function ValidateSpecific(){ return true; }

	var gIDWarningTimer = 0;
	function SetWarningTimer()
	{
		<%If nTimeOut > 0 Then%>
			gIDWarningTimer = setTimeout("ShowExpireWarning()", <%=nTimeOut%>);
		<%End If%>
	}
	function ClearWarningTimer()
	{
		<%If nTimeOut > 0 Then%>
			clearTimeout(gIDWarningTimer);
			gIDWarningTimer = 0
		<%End If%>
	}
	<%If nTimeOut > 0 Then%>
	function ShowExpireWarning(){ alert(language.Generic.SetupSchoolUI.kStrExpireWarning); }
	<%End If%>

	var gIsListBoxEmpty = true;

	// Quick Input. Add item to the listbox
	function qadd_add_item(value)
	{
		var len = qadd_listbox.length;
		if (gIsListBoxEmpty) len = 0;
		var new_item = new Option(value, len, false, true);

		qadd_listbox.options[len]=new_item;
		qadd_listbox.options[len].selected=true;

		qadd_records[len]["LISTBOX_VALUE"] = value;
		gIsListBoxEmpty = false;
	}

	// Quick Input. Change item in the listbox
	function qadd_set_item(ind, value)
	{
		if (ind>-1)
		{
			qadd_listbox.options[ind].text=value;
			qadd_listbox.options[ind].selected=true;
			qadd_records[ind]["LISTBOX_VALUE"] = value;
		}
		else
		{
			qadd_add_item(value);
			qadd_records[0]["LISTBOX_VALUE"] = value;
		}
	}

	// Quick Input. Delete item from the listbox. Move selection if need
	function qadd_del_item(index)
	{
		var ind = index;
		if (gIsListBoxEmpty) return;
		if (ind == -1) ind = 0;

		var len = qadd_listbox.length;
		if (ind>-1 && len>1)
		{
			qadd_listbox.options[ind]=null;
			len = qadd_listbox.length;
		}
		else
		{
			qadd_listbox.options[ind].text=" ";
			gIsListBoxEmpty = true;
			ind = -1;
		}
		if (ind>len-1) ind = len-1;

		if (ind>-1) qadd_listbox.options[ind].selected=true;
	}

	var	qadd_index = 0, qadd_count = 0;	// current index and whole count of saved in the array datas
	var	qadd_edit_mode = false;			// edit|adding trigger - in case listbox clicking or index moving - edit mode,
										// after saving - adding mode
	var	qadd_records = new Array();		// main array
	var	qadd_data_changed = false;		// "data changed" trigger - set upped by edit controls event handler
	var	qadd_record = null;

	// Quick Input. "Prev" event handler
	function qadd_prev()
	{
		var r = true;
		if (qadd_data_changed)
		{
			if (qadd_verify_record()) qadd_store_record();
			else r = false;
		}
		if (r && qadd_index>0)
		{
			qadd_index--;
			qadd_listbox.options[qadd_index].selected=true;
			qadd_show_record(qadd_index);
		}
	}

	// Quick Input. "Next" event handler
	function qadd_next()
	{
		var r = true;
		if (qadd_data_changed)
		{
			if (qadd_verify_record()) qadd_store_record();
			else r = false;
		}
		if (r && qadd_index < qadd_count-1)
		{
			qadd_index++;
			qadd_listbox.options[qadd_index].selected=true;
			qadd_show_record(qadd_index);
		}
	}

	// Quick Input. Universal GetValue from <input> fields with supporting different types: edit, radio, checkbox
	function qadd_get_value(object_name)
	{
		var object = qadd_form[object_name];

		var a = object.type;
		var r = "";

		if (a == null) {
			if ( object[0].type == "radio")	{
				var j = 0;
				// we have radio-buttons
				for (j=0; true; j++) {
					var w = object[j];
					if (w == null) break;
					if (w.checked == true)
					{
						r = j+"\002"+w.value;
						break;
					}	
				}	
			}
		} else {
			if (a == "checkbox") {
				// we have checkbox
				r = object.checked == true ? "on" : "off";
				r = r + "\002"+ object.value;
			} else {
				if (a.indexOf("select")>-1 ) {
					// we found SELECT object
					var k = object.selectedIndex;
					r = object.options[k].value;
					return r;
				} else {
					// all other input types like edit, password and so on
					r = object.value;
				}	
			}	
		}
		return r;
	}

	// Quick Input. Save changes from edit comtrols or create new item in array
	function qadd_store_record()
	{
		if (qadd_edit_mode)
			qadd_record = qadd_records[qadd_index];
		else
			qadd_record = new Array();
		<%Dim i
			for each i in qadd_edit_name
		%>qadd_record["<%=i%>"] = qadd_get_value("<%=i%>");
		<%next%>

		qadd_data_changed = false;

		if (qadd_edit_mode)
		{
			qadd_records[qadd_index] = qadd_record;
			qadd_set_item(qadd_index, qadd_get_value_for_listbox(qadd_index));
		}else{
			qadd_index = qadd_count;
			qadd_count++;

			document.<%=qadd_listbox_form%>.qadd_total.value = qadd_count;

			qadd_records[qadd_index] = qadd_record;
			qadd_add_item(qadd_get_value_for_listbox(qadd_index));

			if (bShowMsgForLast && qadd_count == <%=kMaxQUsersCnt%>){
				alert(language.Generic.SetupSchoolUI.kMsgMaxQuickUsers + '.');
			}
			bShowMsgForLast = true;
		}
	}

	// Quick Input. Universal SetValue for <input> fields with supporting different types: edit, radio, checkbox
	function qadd_set_value(object_name, value)
	{
		var r = "";
		var obj = qadd_form[object_name];
		var a = obj.type;

		if (a == null){
			if ( obj[0].type == "radio" )
			{
				var j = 0;
				// we have radio-buttons
				if (value != "")
				{
					var index = value.indexOf("\002");
					if (index>-1)
					{
						index = value.substring(0,index);
						obj[index].checked = true;
					}
					else
						obj[value].checked = true;
				}else{
					for (j=0; true; j++)
					{
						var w = obj[j];
						if (w == null) break;
						if (w.defaultChecked)
						{
							w.checked = true;
							break;
			}	}	}	}
		}else{
			if (a == "checkbox"){
				// we have checkbox
				var index = value.indexOf("\002");
				if (index>-1) value = value.substring(0,index);
				obj.checked = value == "on" ? true : value == "off" ? false : obj.defaultChecked;
			}else{
				if (a.indexOf("select")>-1 ) // we found SELECT object
				{
					if (value == ""){
						// we found SELECT tag with some OPTION -> so we need to find out
						// what option is SELECTED by default (only for RESET())
						var k = 0;
						for (k=0; k < obj.options.length; k++)
							if (obj.options[k].defaultSelected == true)
							{
								obj.selectedIndex = k;
								return;
							}
						obj.selectedIndex = 0;
					}else{
						// we found SELECT tag with some OPTION -> so we need to find out
						// what option's value we are stored and which selectedIndex we should select for parent SELECT
						var k = 0;
						for (k=0; k < obj.options.length; k++)
							if (obj.options[k].value == value)
							{
								obj.selectedIndex = k;
								return;
					}		}
				}else{// all other input types like edit, password and so on
					obj.value = value;
		}	}	}
	}

	// Quick Input. Clear edit controls
	function qadd_reset_edits(bAddNewStud)
	{
		if (bAddNewStud){
			<%for each i in qadd_edit_name%>
					<%If i <> "CID" Then%>
						qadd_set_value("<%=i%>", "");
					<%End If %>
			<%next%>
		}
		else{
			<%for each i in qadd_edit_name%>
				qadd_set_value("<%=i%>", "");
			<%next%>
		}

		document.<%=qadd_listbox_form%>.qadd_total.value = qadd_count;
		var len = qadd_listbox.length;
		if (qadd_index>-1){
			if (qadd_index < len)
				qadd_listbox.options[qadd_index].selected=true;
		}
		qadd_data_changed = false;
		qadd_edit_mode = false;
	}

	// Quick Input. Setup edit controls with earlier saved values
	function qadd_show_record(index)
	{
		if (index>-1)
			qadd_record = qadd_records[index];
		if (index>-1 && qadd_record != null)
		{
		<%for each i in qadd_edit_name%>
				qadd_set_value("<%=i%>", qadd_record["<%=i%>"]);
		<%next%>
			qadd_data_changed = false;
			qadd_edit_mode = true;
		}
		else
		{
			qadd_reset_edits(false);
			qadd_data_changed = false;
			qadd_edit_mode = false;
		}
	}

	// Quick Input. "change selection" listbox's event handler
	function qadd_on_list_click()
	{
		if( qadd_data_changed )
			if (qadd_verify_record())
				qadd_store_record();

		if (qadd_count > 0 && qadd_listbox.selectedIndex > -1)
		{
			qadd_index = qadd_listbox.selectedIndex;
			qadd_show_record(qadd_index);
			qadd_edit_mode = true;
		}
	}

	// Quick Input. "data change" event handler - set up trigger
	function qadd_on_data_change()
	{

		qadd_data_changed = true;
		dataChanged();
	}

	// Quick Input. deleting data from array and listbox
	function qadd_del()
	{
		if (qadd_count > 0 && qadd_index > -1 && qadd_index < qadd_count)
		{
	//		qadd_records.splice(qadd_index, 1);
	// "splice" method is not realized in the IE with version is less then 5.5
	// we want to workaround this
			for (j=qadd_index; j<qadd_count; j++)
				qadd_records[j] = qadd_records[j+1]

			qadd_count--;
			document.<%=qadd_listbox_form%>.qadd_total.value = qadd_count;

			qadd_del_item(qadd_index);
			qadd_index = qadd_listbox.selectedIndex;
			if (qadd_index == -1)
				qadd_index = 0;
			if (qadd_index > qadd_count-1)
				qadd_index = qadd_count-1;
		}
		qadd_show_record(qadd_index);
	}

	// Quick Input. Initiate changed data saving or adding
	function qadd_add_new()
	{
		if (qadd_data_changed)
		{
			if (qadd_verify_record())
			{
				qadd_store_record();
				qadd_reset_edits(true);
				qadd_data_changed = false;
				qadd_edit_mode = false;
			}
		}else{
			qadd_reset_edits(true);
			qadd_data_changed = false;
			qadd_edit_mode = false;
		}
	}

	// Quick Input. Preparing arrowed datas for submitting
	function qadd_on_submit()
	{
		if (qadd_count > 0) {
			_.each(qadd_records, function(qadd_record){
				if (qadd_record) {
					_.each(qadd_input_names, function(inputName){
						var value = qadd_record[inputName];
						var index = value.indexOf("\002");
						var submitKey = "submit_" + inputName;

						if(value.substring(0, index) != "off") {
							value = value.substring(index+1, 2000);
						} else {
							value = "";
						}

						if(inputName == "PW") {
							value = hexMD5_(value);
						} else if(inputName == "PW2") {
							value = "";
						}
						qadd_form[submitKey].value += "\001" + value;
					});
				}
			});

			_.each(qadd_input_names, function(inputName){
				var submitKey = "submit_" + inputName;
				if (qadd_form[submitKey].value) {
					qadd_form[submitKey].value = qadd_form[submitKey].value.substring(1);
				}
			});
		}
	}
	//-->
	</script>
	<script src="/asp/md5r.min.js" type="text/javascript"></script><%
End Sub%>