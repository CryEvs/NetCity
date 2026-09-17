<% ' © 2007-2008 IRTech. All rights reserved.
Sub DrawEditStudentMoveInfoScripts%>
	<script><!--
	function editStudentMoveInfo(button)
	{
		<%If nDocType = kDocType_ENROLL Then%>
		$('img[name^=btn_SetEqualEOAnch]').hide();
		$('img[name^=btn_SetEqualEOAnch]', button.parentNode.parentNode ).show();
		<%End If%>
		$('tr[id=NS_MOVDOC_EDITING_ROW]').css('background-color','');
		$('tr[id=NS_MOVDOC_EDITING_ROW]').removeAttr('id');
		$(button.parentNode.parentNode).css('background-color','#F8DFBA');
		button.parentNode.parentNode.id = 'NS_MOVDOC_EDITING_ROW';
		deleteOldEditSelects();
		drawMovEOSSelect(button.parentNode.parentNode.cells[<%If nDocType = kDocType_OUT Then%>1<%Else%>3<%End If%>]);
	}
	function deleteOldEditSelects()
	{
		if( $('select[id=EditingSelect]')[0] )
		{
			var studentid = $('select[id=EditingSelect]')[0].getAttribute('studentid');
			var moveEOSSelect = $('select[id=EditingSelect]')[0];
			<%If nDocType = kDocType_OUT Or nDocType = kDocType_GRADUATE Then%>
			var moveReasonSelect = $('select[id=REASON_SELECT_' + studentid + ']')[0];
			<%End If %>
			if( moveEOSSelect.value == -2 ) 
			{
				moveEOSSelect.selectedIndex = 0;
				setHiddenInputValue(moveEOSSelect);
			}
			var movEOSSpan;
			var reasonSpan;
			if (navigator.userAgent.indexOf ('MSIE') != -1)
			{
				movEOSSpan = document.createElement ('<span id="EOS_SPAN_' + studentid + '">');
				movEOSSpan.setAttribute('id','EOS_SPAN_' + studentid );
				var selectedtext = moveEOSSelect.options[moveEOSSelect.selectedIndex].text;
				if( selectedtext == '')
					selectedtext = '&nbsp;';
				movEOSSpan.innerHTML = '<nobr>' + selectedtext + '</nobr>';
				<%If nDocType = kDocType_OUT Or nDocType = kDocType_GRADUATE Then%>
				if( moveReasonSelect )
				{
					reasonSpan = document.createElement ('<span id="REASON_SPAN_' + studentid + '">');
					reasonSpan.setAttribute('id','REASON_SPAN_' + studentid );
					reasonSpan.innerHTML = '<nobr>' + moveReasonSelect.options[moveReasonSelect.selectedIndex].text + '</nobr>';
				}
				<%End If %>
			}
			else
			{
				movEOSSpan = document.createElement ('span');
				movEOSSpan.setAttribute('id','EOS_SPAN_' + studentid );
				var selectedtext = moveEOSSelect.options[moveEOSSelect.selectedIndex].text;
				if( selectedtext == '')
					selectedtext = '&nbsp;';
				movEOSSpan.innerHTML = '<nobr>' + selectedtext + '</nobr>';
				<%If nDocType = kDocType_OUT Or nDocType = kDocType_GRADUATE Then%>
				if( moveReasonSelect )
				{
					reasonSpan = document.createElement ('span');
					reasonSpan.setAttribute('id','REASON_SPAN_' + studentid );
					reasonSpan.innerHTML = '<nobr>' + moveReasonSelect.options[moveReasonSelect.selectedIndex].text + '</nobr>';
				}
				<%End If %>
			}
			$(moveEOSSelect).replaceWith(movEOSSpan);
			<%If nDocType = kDocType_OUT Or nDocType = kDocType_GRADUATE Then%>
			if( moveReasonSelect )
				$(moveReasonSelect).replaceWith(reasonSpan);
			<%End If %>
		}
	}

	function drawMovEOSSelect( td )
	{
		var hiddenInput = $('input[type=hidden]',td)[0];
		var nameOfSelect = hiddenInput.name;
		var movEOSSelect;
		if (navigator.userAgent.indexOf ('MSIE') != -1)
		{
			movEOSSelect = document.createElement ('<select id="EditingSelect" studentID="' + nameOfSelect.replace('EOS_','') + '" >');
			movEOSSelect.attachEvent('onchange', function(){ setHiddenInputValue(movEOSSelect);isAddMovEos(movEOSSelect);<%If nDocType = kDocType_OUT  Or nDocType = kDocType_GRADUATE Then%>setReasonType(movEOSSelect,false);<%End If%><%If nDocType = kDocType_OUT Then%>dataChanged();<%End If%> });
			movEOSSelect.setAttribute('id','EditingSelect');
			movEOSSelect.setAttribute('studentID',nameOfSelect.replace('EOS_',''));
		}
		else
		{
			var movEOSSelect = document.createElement ('select');
			movEOSSelect.setAttribute('id','EditingSelect');
			movEOSSelect.setAttribute('studentID',nameOfSelect.replace('EOS_',''));
			movEOSSelect.addEventListener("change", function(){ setHiddenInputValue(this);isAddMovEos(movEOSSelect);<%If nDocType = kDocType_OUT  Or nDocType = kDocType_GRADUATE Then%>setReasonType(this,false);<%End If%><%If nDocType = kDocType_OUT Then%>dataChanged();<%End If%> }, false);
		}

		for (i=0; i<arrMOVEOSes.length; i++){
		  var option = document.createElement("option");
		  option.value = arrMOVEOSes[i][0];
		  if( option.value == hiddenInput.value ) option.selected = true;
		  <%If nDocType = kDocType_OUT Or nDocType = kDocType_GRADUATE Then %>
			option.setAttribute('eotypeid', arrMOVEOSes[i][3]);
			option.setAttribute('eoformid', arrMOVEOSes[i][4]);
			option.eotypeid = arrMOVEOSes[i][3];
			option.eoformid = arrMOVEOSes[i][4];
			if( arrMOVEOSes[i][6] == 1 )
			{
				option.setAttribute('IsOtherState', '');
				option.IsOtherState = "";
			}
			else
			{
				if( arrMOVEOSes[i][5] == 1 )
				{
					option.setAttribute('IsOtherCityInState', '');
					option.IsOtherCityInState = "";
				}
				else
				{
					option.setAttribute('IsInCity', '');
					option.IsInCity = "";
				}
			}
		  <%End If %>
		  var text = document.createTextNode(arrMOVEOSes[i][1]);
		  option.appendChild(text);
		  movEOSSelect.appendChild(option);
	   }
		$('#EOS_SPAN_' + movEOSSelect.getAttribute('studentid'),td).replaceWith( movEOSSelect );
		<%If nDocType = kDocType_OUT Or nDocType = kDocType_GRADUATE Then%>setReasonType(movEOSSelect,false);<%End If%>
	}

	function setHiddenInputValue( select )
	{
		<%If nDocType = kDocType_OUT Or nDocType = kDocType_GRADUATE Then%>
		if( select.id.indexOf('REASON') != -1 )
		{
			var hiddenInput = $('input[type=hidden][id=' + select.id.replace('_SELECT','') + ']')[0];
			hiddenInput.value = select.value;
		}
		else
		{
		<%End If %>

			var hiddenInput = $('input[type=hidden][id^=EOS_]',select.parentNode)[0];
			hiddenInput.value = (select.value == -2) ? -1 : select.value;
			var elem = select.options[ (select.value == -2) ? 0 : select.selectedIndex];
			if( elem.getAttribute('IsOtherState') != null )
				$(hiddenInput).attr('IsOtherState', '').removeAttr('IsOtherCityInState').removeAttr('IsInCity');
			else if( elem.getAttribute('IsOtherCityInState') != null )
				$(hiddenInput).attr('IsOtherCityInState', '').removeAttr('IsOtherState').removeAttr('IsInCity');
			else
				$(hiddenInput).attr('IsInCity', '').removeAttr('IsOtherState').removeAttr('IsOtherCityInState');
		<%If nDocType = kDocType_OUT Or nDocType = kDocType_GRADUATE Then%>
		}
		<%End If %>
	}
	
	function isAddMovEos( EOSSelect )
	{
		if( EOSSelect.value == -2 )
			AddEO();
	}

	function AddEO(){
		//setDBBusy();
		//remove links
		arrneweo = new Array();
		arraddeo = new Array();
		var form = document.MainForm;
		var Wnd = window.open('/asp/blank.htm', 'add_eo', 'status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=1000,height=700');
		form.target = "add_eo";
		DoSubmit(form, "/asp/SetupSchool/Calendar/CreateOU.asp");
		if (Wnd) center(Wnd, 1000, 700);
		form.target = "_self";
	}
	-->
	</script><%
End Sub


Sub DrawEOReasonsRelationScripts%>
	<script>
	<!--
	var nFuncTypeArrayIndex = <%=strFunctionalityType %> - 1;
	var nShowedCnt;
	var nShowedIndex;
	var arrneweo = new Array();
	var arraddeo = new Array();

	function checkRelationWithEOType( itemorder )
	{
		for (var i = arrEOTypeReasons.length; --i >= 0;)
		{
			if (arrEOTypeReasons[i][nFuncTypeArrayIndex][0])
			{
				for (var j = arrEOTypeReasons[i][nFuncTypeArrayIndex][0].length; --j >= 0;)
					if( arrEOTypeReasons[i][nFuncTypeArrayIndex][0][j] == itemorder)
						return true;
			}
			if (arrEOTypeReasons[i][nFuncTypeArrayIndex][1])
			{
				for (var j = arrEOTypeReasons[i][nFuncTypeArrayIndex][1].length; --j >= 0;)
					if( arrEOTypeReasons[i][nFuncTypeArrayIndex][1][j] == itemorder)
						return true;
			}
		}
		return false;
	}
	function showOption(select, curOption)
	{
		select.options.add(curOption);
		nShowedCnt++;
		if( nShowedCnt == 1 ) curOption.selected = true;
	}
	function createAndShowReasonOption( select, value, name, itemorder)
	{
		var studentid = select.id.replace('REASON_SELECT_','');
		//var bselected = (arrReasonSelectsDefValues[select.id] == value);
		var bselected = (document.getElementById('REASON_' + studentid).value == value);
		
		var newoption = new Option(name, value, false, bselected);
		$(newoption).attr('itemorder', itemorder);
		showOption(select, newoption);
	}
	function showOptions(select, optionItemOrders, includeNullItemOrder)
	{
		if ( optionItemOrders.length )
			for (var i = optionItemOrders.length; --i >= 0;)
				for (var j = arrReasonOptions.length; --j >= 0;)
				   if( arrReasonOptions[j] && arrReasonOptions[j][2] == optionItemOrders[i] ){
						createAndShowReasonOption(select, arrReasonOptions[j][0], arrReasonOptions[j][1], arrReasonOptions[j][2]);
						break;
				   }
		if ( includeNullItemOrder )
			for (var j = arrReasonOptions.length; --j >= 0;)
				if( arrReasonOptions[j] && !arrReasonOptions[j][2] ) createAndShowReasonOption(select, arrReasonOptions[j][0], arrReasonOptions[j][1], arrReasonOptions[j][2]);
	}

	function isOptionMustBeVisible( itemOrder, specifiedItemOrder)
	{
		switch(specifiedItemOrder)
		{
			//если причина не связана с типами ОУ
			case -1:
			  if (! checkRelationWithEOType(itemOrder) )
				return true;
			  break;
			//если причина без itemorder`а либо причина 'другое ОУ'
			case -2:
			  if ( !itemOrder || itemOrder == 2 )
				return true;
			  break;
			//любая причина
			case -3:
				return true;
			//если причина совпадает со связанной причиной ОУ
			case -4:
				if ( !itemOrder )
				return true;
			//если причина совпадает со связанной причиной ОУ
			default:
			  if ( itemOrder )
			   if (specifiedItemOrder == itemOrder)
				return true;
		}
		return false;
	}

	function isOptionMustBeShow( arrReasonOption, eotypeidInput, eoformidInput, bIsOtherStateInput, bIsOtherCityInStateInput)
	{
		var itemOrdersSet;
		if( isOptionMustBeShow.arguments.length == 2 )
		{
			var eoSelect = isOptionMustBeShow.arguments[1];
			var eotypeid = eoSelect.getAttribute('eotypeid');
			var eoformid = eoSelect.getAttribute('eoformid');
			var bIsOtherState = (eoSelect.getAttribute('isotherstate') != null);
			var bIsOtherCityInState = (eoSelect.getAttribute('isothercityinstate') != null);
		}
		else
		{
			var eotypeid = eotypeidInput;
			var eoformid = eoformidInput;
			var bIsOtherState = bIsOtherStateInput;
			var bIsOtherCityInState = bIsOtherCityInStateInput;
		}

		//если за пределами города
		if( bIsOtherState || bIsOtherCityInState )
			return checkOptionStateForItemOrderSet( eoformid, arrReasonOption, arrEOTypeReasons[-1][nFuncTypeArrayIndex] );

		if( !(eotypeid && eoformid) )
			itemOrdersSet = arrEOTypeReasons[0][nFuncTypeArrayIndex];

		if ( arrEOTypeReasons[eotypeid] && (arrEOTypeReasons[eotypeid][nFuncTypeArrayIndex][0] != null || ( arrEOTypeReasons[eotypeid][nFuncTypeArrayIndex][1] && arrEOTypeReasons[eotypeid][nFuncTypeArrayIndex][1][eoformid] ) ) )
			itemOrdersSet = arrEOTypeReasons[eotypeid][nFuncTypeArrayIndex];

		return checkOptionStateForItemOrderSet( eoformid, arrReasonOption, itemOrdersSet );
	}

	function checkOptionStateForItemOrderSet(eoformid, arrReasonOption, reasonSpecifiedItemOrders)
	{
		var retValue = false;
		if( !reasonSpecifiedItemOrders ) return false;
		if( reasonSpecifiedItemOrders[1] && reasonSpecifiedItemOrders[1][eoformid] )
			retValue = checkOptionState( arrReasonOption, reasonSpecifiedItemOrders[1][eoformid])
		else{
			if( reasonSpecifiedItemOrders[0] )
				retValue = checkOptionState( arrReasonOption, reasonSpecifiedItemOrders[0])
		}

		return retValue;
	}

	function checkOptionState(arrReasonOption, itemOrders)
	{
		if( !itemOrders.length ){
			return isOptionMustBeVisible(arrReasonOption[2], itemOrders);
		}
		else
			for (var i = itemOrders.length; --i >= 0;)
			{
				if (isOptionMustBeVisible(arrReasonOption[2], itemOrders[i]))
					return true;
			}
	}

	function clearOptions(select)
	{
		select.options.length = 0;
	}

	function drawOptions(reasonSelect, eo, bfirst)
	{
		if( bfirst )
			var elem = eo;
		else
			var elem = eo[eo.selectedIndex];

		var bIsOtherState = false;//(elem.getAttribute('isotherstate') != null);
		var bIsOtherCityInState = false;//(elem.getAttribute('isothercityinstate') != null);
		var eotypeid = elem.getAttribute('eotypeid');
		var eoformid = elem.getAttribute('eoformid');

		for (var i = arrReasonOptions.length; --i >= 0;)
			if( arrReasonOptions[i] && isOptionMustBeShow(arrReasonOptions[i], eotypeid, eoformid, bIsOtherState, bIsOtherCityInState ) )
				createAndShowReasonOption(reasonSelect, arrReasonOptions[i][0], arrReasonOptions[i][1], arrReasonOptions[i][2]);
	}

	function setReasonType( eo, bFirst )
	{
		var moveEO = eo;
		var studentid = moveEO.getAttribute('studentid')
		var moveReasonSelect = $('select[id=REASON_SELECT_' + studentid + ']',moveEO.parentNode.parentNode)[0];
		if( !moveReasonSelect )
		{
			if (navigator.userAgent.indexOf ('MSIE') != -1)
			{
				moveReasonSelect = document.createElement ('<select id="REASON_SELECT_' + studentid + '" >');
				moveReasonSelect.setAttribute('id','REASON_SELECT_' + studentid);
				moveReasonSelect.attachEvent('onchange', function(){ setHiddenInputValue(moveReasonSelect); <%If nDocType = kDocType_OUT Then%>dataChanged();<%End If%>} );
			}
			else
			{
				moveReasonSelect = document.createElement ('select');
				moveReasonSelect.setAttribute('id','REASON_SELECT_' + studentid);
				moveReasonSelect.addEventListener("change", function(){ setHiddenInputValue(moveReasonSelect);<%If nDocType = kDocType_OUT Then%>dataChanged();<%End If%>}, false );
			}
		}
		
		clearOptions(moveReasonSelect);
		nShowedCnt = 0;
		drawOptions(moveReasonSelect, eo, bFirst);
		var type = 2;
		if( nShowedCnt <= 1 || bFirst )
			type = 1;
		//type == 1 - input hidden
		//type == 2 - select
		switchSelOrSpan(studentid,moveReasonSelect,nShowedCnt==0,type);
		setHiddenInputValue(moveReasonSelect);
	}

	function switchSelOrSpan( studID, reasonSelect, bIsEmpty, type )
	{
		var moveReasonHiddenInput = $('input[type=hidden][name=REASON_' + studID + ']')[0];
		if( !moveReasonHiddenInput )
		 moveReasonHiddenInput = $('input[type=hidden][name=REASON_' + studID + '_HIDDEN]')[0];
		var moveReasonSelect = reasonSelect;
		var moveReasonSpan = $('span[id=REASON_SPAN_' + studID + ']',moveReasonHiddenInput.parentNode.parentNode)[0];
		if( moveReasonSpan )
			var moveReasonNobr = $(moveReasonSpan).find('nobr')[0];
		

		if( type == 1 || moveReasonSelect.options.length < 2 )
		{
			//Удалить Select
			//Показать Span
			if( !moveReasonSpan )
			{
				if (navigator.userAgent.indexOf ('MSIE') != -1)
				{
					moveReasonSpan = document.createElement ('<span id="REASON_SPAN_' + studID + '">');
					moveReasonSpan.setAttribute('id','REASON_SPAN_' + studID );
					moveReasonNobr = document.createElement ('<nobr></nobr>');
					moveReasonSpan.appendChild(moveReasonNobr);
				}
				else
				{
					moveReasonSpan = document.createElement ('span');
					moveReasonSpan.setAttribute('id','REASON_SPAN_' + studID );
					moveReasonNobr = document.createElement ('nobr');
					moveReasonSpan.appendChild(moveReasonNobr);
				}
			}
			
			if( bIsEmpty)
			{
				moveReasonNobr.innerHTML = 'нет причин';
				moveReasonHiddenInput.value = -1;
			}
			else
			{
				moveReasonNobr.innerHTML = moveReasonSelect.options[moveReasonSelect.selectedIndex].text;
				moveReasonHiddenInput.value = moveReasonSelect.options[moveReasonSelect.selectedIndex].value;
			}
			
			if( $('select[id=REASON_SELECT_' + studID + ']',moveReasonHiddenInput.parentNode.parentNode)[0] )
				$('select[id=REASON_SELECT_' + studID + ']',moveReasonHiddenInput.parentNode.parentNode).replaceWith(moveReasonSpan);
		}
		else
		{
			//Показать select
			//Удалить span
			if( moveReasonSpan )
				$(moveReasonSpan).replaceWith( moveReasonSelect );
		}
	}
	-->
	</script><%
End Sub%>