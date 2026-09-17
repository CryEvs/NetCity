<!-- #INCLUDE FILE="em_screen.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterEMs.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FiltersCommon.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim nFuncTypeID
Dim strGlobalYearID
Dim objEMSchools', strEMSchoolID
Dim strBackPage

Function GetPageTitle()
	GetPageTitle = IIf(nFuncTypeID = kFuncType_PreSchool, obLanguage("EM","kPreSchoolsCodes"), obLanguage("EM","kEOsCodes"))
End Function

Function GetPageTabItem()
	GetPageTabItem = IIf(nFuncTypeID = kFuncType_PreSchool, TabItem_tb_EM_DOUPay, TabItem_tb_EM_EGEInfo)
 End Function

Sub ReadState()
	nFuncTypeID = GetSafeLng(Request("FType"), kFuncType_Common)
	strBackPage = GetSafeStr(Request("Back"), 255, "DOUPay.asp")
	'Подсовываем strFilterEMID из Report_inc.asp
	'Для того чтобы отрисовывать учебные года подотчетных УО из фильтров, если их нет берет самое вышестоящее
	strGlobalYearID = -1'GetSafeStr(obTokenMgr.GetData( strToken, stGlobalYearID ),9,"-1")

	'strEMSchoolID = GetSafeID(Request("EMSCHOOLID"), GetSafeID(obTokenMgr.GetData(strToken, stEMSchoolID), "0"))
	Set objEMSchools = objNSNET.GetEMSchoolsForFuncTypes(strEMID, kWizardSteps, nFuncTypeID, strGlobalYearID)
	'dbgstr strEMID
	'If objEMSchools.EOF Then bExit = True
End Sub

Sub Main()
End Sub

Sub onHead()%>
	<SCRIPT><!--
		function Back() {
			checkForChanges().then(function() {
				var form = document.forms.MainForm;

				goBack(form, '<%=strBackPage%>');
			});
		}

		function CheckNumPadKeyCode(keycode){
			if(keycode >= 96 & keycode <= 105) {
				keycode = keycode - 48
			}

			return keycode;
		}

		function SaveCode(schoolId) {
			oldCodeVal = oldCodes[schoolId];
			x = jsSubmit({
				form: document.MainForm,
				action: 'SaveCode_Ajax.asp',

				onSuccess: function(data, textStatus) { // Save_success

					tr = $("tr#" + schoolId);
					if (tr.length > 0) {
						td = tr.children().last().prev();
						if (td.length > 0)
 							td[0].innerHTML = data.isError ? oldCodeVal : data.message;
					}

					if(data.isError) {
						//inputCode.val(oldCodeVal);
						return;
					}

					processDirect();
				},

				onError: function(XMLHttpRequest, textStatus, errorThrown) { // Save_fail
					//inputCode.val(oldCodeVal);
					tr = $("tr#" + schoolId);
					if (tr.length > 0) {
						td = tr.children().last().prev();
						if (td.length > 0)
							td[0].innerHTML = oldCodeVal;
					}
					//alert(errorThrown);
				}
			});
		}

		function Save_fail(XMLHttpRequest, textStatus, errorThrown) {
			//alert(XMLHttpRequest.message);
			//alert(textStatus);
			inputCode.val(oldval);
			alert(errorThrown);
		}

		function Save_success(data, textStatus) {
			if(data.isError) {
				inputCode.val(oldval);
				alert(data.message);

				return;
			}
			processDirect();
			//alert(language.Generic.EM.kSchoolCodeSaved);
		}

		function processDirect() {
			if(direct > 0) {
				tr = $(inputCode).parent().parent();

				if(tr.length == 0)
					tr = $(".school-codes-table tr").first();
				if(tr.length == 0)
					return;
				if(direct == 38)
					focusPrev(tr);
				if(direct == 40)
					focusNext(tr);
			}
		}

		function focusNext(tr) {
			//if (old) oldval = inputCode.val();
			tr = tr.next();
			Click(tr);
		}

		function focusPrev(tr){
			//if (old) oldval = inputCode.val();
			tr = tr.prev();
			Click(tr);
		}

		function Click(tr){
			if($(tr).length == 0)
				return;

			if($(tr)[0].nodeName != "TR")
				tr = $(tr).parents("tr").first();

			td = tr.children().last().prev();
			if(td.length==0)
				return;
			if(td[0].nodeName!="TD")
				return;

			/*
			if (old){
				if(direct!=0)
					oldval = inputCode.val();
			//if (old){
				//old.append(oldval);
			}
			old =td;
			*/

			oldval= td.text()
			//td.empty();

			sch_id = tr.attr("id");
			oldCodes[sch_id] = oldval;

			inputCode.show();
			inputCode.val(oldval);
			inputCode.prependTo(td);
			inputCode.trigger("focus");
		}

		function save() {
			el = inputCode[0];
			if (!el )
				return false;
			if(oldval != el.value){
				if( _.isEmpty(el.value.trim()) || /\d/.test(el.value) ){
					//lalert("save me");
					//if(0 || confirm('<%=obLanguage("Common","kSave")%>?'/*language.Generic.Common.kSave*/)){
						//oldval = el.value; //for clicks
						sch_id = $(el).parents("tr").first().attr("id");
						$("[name=sch]").val(sch_id);
						$("[name=SchoolCode]").val(el.value);
						SaveCode(sch_id);
						return true;
					//}
				}
				el.value = oldval;
			}
			processDirect();
			return false;
		}
		function NavKeyUpHandler(e) {
			e=getEvent(e);
			if (e.which){
				keycode = e.which;
			}
			else if (e.keyCode){
				//FF special symbols
				keycode = e.keyCode;
				return true;
			}
			if (keycode == 8){
				//backspace
				return true;
			}
			var keychar = String.fromCharCode(keycode)
			if( /\d/.test(keychar) ){
				return true;
			}
			return false;
		}
		oldval="";
		//old = null;
		direct=0;
		let oldCodes = {};
		inputCode = $('<input type="text" id="SchoolCodeInput" class="form-control" value="" maxlength="6" style="border: none; font-size: 14px; color: red;" autocomplete="off" size="7">');
		$(document).ready(function(){
			function changer(e){
						inputCode.off("change");
						inputCode.on("change", function(e){return false;});
						//return $.when( e ).done(save);
							ret=save();
							ret=true; //overwrite
							inputCode.off("change");
							inputCode.on("change",changer);
							return ret;
						}
			inputCode.on(
					{
						"keypress": function(e){return NavKeyUpHandler(e);},
						"change": changer,
						"click": function(e){return false;}
					}
				 );
			//inputCode.unbind("change");
			elems = $("table.school-codes-table tr td");
			elems.on("click",  function(e){direct=-1;e=getEvent(e); targ=getTargetElement(e); return Click(targ)});
	
			$(document).on("keyup", function(e){
				inputCode.trigger("focus");
			});

			$(document).on("click", function(evt){
				e = getEvent(evt);
				targ = getTargetElement(e);
				if (targ.closest("table.school-codes-table") == null || targ.closest("table.school-codes-table th") != null) {
					inputCode.hide();
				}
			});
		});
		function KeyDown(e, keycode, element){
			if (element == inputCode[0]){
				direct=0;
				if(keycode==38)
					direct=38;
					//focusPrev();
				if(keycode==40 || keycode == 9|| keycode == 13){
					direct=40;
					//down, tab, enter
				}
				if (direct!=0){
					//save();
					//focusNext();
					//inputCode.blur();
					inputCode.trigger("change");
					return false;
					//processDirect();
				}
			}
			return true;//(keycode != 13);
		}
	//--></SCRIPT><%
End Sub

Sub onDrawPage()%>
	<FORM Name="MainForm" METHOD="POST" ACTION="SchoolCodesSave.asp" onsubmit="return false;">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("sch", 0, "SchoolCode", 0))%>

		<div class="row">
			<div class="col-md-10 col-lg-8"><%
				Call DrawRawTable(objEMSchools, _
					Array("Name", obLanguage("Common","kCity"), "SCHOOLNAME", obLanguage("SchoolInfo","kEOName"), "SCHOOLCODE", obLanguage("SetupSchoolUI","kOUCode")), _
					Array("", "", "class=""input-cell text-center""") _
				)%>
			</div>
		</div>
	</FORM><%
End Sub

Sub DrawRawTable(RS, columns, columnsAux)
	Dim i, last, colName, colAux
	If RS.EOF Then Exit Sub

	last = RS.Fields.Count - 1

	Call DrawInfo(obLanguage("EM","kSchoolCodeLegend"), False)%>
	
	<table class="table table-bordered table-condensed school-codes-table table-striped table-hover table-sm" id="dataTable">
		<tr><%
			If Not IsArray(columns) Then
				Redim columns(last*2)
				For i = 0 to last
					colName = RS(i).Name
					columns(2 * i) = colName%>
					<th><b><% =  colName%></b></th><%
				Next
			Else
				For i = 0 to Ubound(columns) step 2
					colName = columns(i+1)
					%>
					<th><B><%=colName%></B></th><%
				Next
			End If%>
			<th></th>
		</tr><%
		Do While Not RS.EOF %>
			<tr id="<%=RS(0)%>"><%
				For i = 0 to Ubound(columns) step 2
					colAux = columnsAux(i / 2)
					%><td <%=colAux%>><%=RS(columns(i)) %></td><%
				Next %>
				<td style="width: 1%; cursor:pointer;">
					<i title="Редактировать код ОО" +  class="icon-edit"></i>
				</td>
			</tr><%
			RS.MoveNext
		Loop
		RS.Close%>
	</table><%
End Sub%>