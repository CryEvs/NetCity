<!-- #INCLUDE FILE=sa_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FiltersCommon.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

const isSeria = "isSeria"
const isMiddleName = "isMiddleName"
const isLastname = "isLastname"

Dim title
Function GetPageTitle()
	title = "Дубли"
	GetPageTitle = title & " <i>" & NETSCHOOL_PRODUCT_NAME & "</i><br><br>"
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Diagnos
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Diagnos
End Function

Sub WritePostScripts()%>
	<script src="/vendor/components/jqueryui/jquery-ui.min.js" type="text/javascript"></script>
	<link href="/vendor/components/jqueryui/themes/redmond/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
	<link href="/vendor/components/jtable/lib/themes/lightcolor/blue/jtable.min.css" rel="stylesheet" type="text/css"/>

	<script src="<%=GetVersionedResLink("/vendor/components/jtable-bundle.min.js")%>" type="text/javascript"></script><%
End Sub

Sub OnHead()%>
<script>
$(function () {
	collapsed ="icon-expand";
	expanded="icon-collapse";
	var clollapseF = function(img){
		var img=$(img);
		img.toggleClass(expanded);
		img.toggleClass(collapsed);
		$('#PersonTableContainer').jtable('closeChildTable',img.closest('tr'));
	};
	var expandF = function(img, theTitle, movementColumns, query){
		var img=$(img);
		$('#PersonTableContainer').jtable(
			'openChildTable'
			,img.closest('tr')
			, {
					showCloseButton: false,
					title: theTitle,
					actions: {
						listAction: '/asp/Administration/clones_ajax.asp'
					},
					fields: movementColumns
				}, function (data) {
					data.childTable.jtable('load', query);
				}
				);
		img.toggleClass(expanded);
		img.toggleClass(collapsed);
	};
	var getSubTable = function(subtitle, hint, cols, func){
		var x = {
			//title: '',
			width: '1%',
			sorting: false,
			edit: false,
			create: false,
			display: function (userInfo) {
				if ( !userInfo.record.USERID || userInfo.record.STUDENTID){
				var $img2 = $('<span title="'+hint+'" />');
				$img2.toggleClass(collapsed);
				$img2.on("click", function () {
					if ($(this).hasClass(expanded)){
						clollapseF(this);
						return;
					}
					expandF(this, subtitle(userInfo),cols, func(userInfo) );
				});
				//Return image to show on the person row
				return $img2;
				}
			}
		};
		return x;
	};
	movementColumns = {
		N: {
			title: '№',
			width: '1%',
		},
		DOCNUMBER: {title: 'приказ',},
		DOCDATE: {
			title: 'от',
			width: '1%',
			type: 'date',
			displayFormat: 'dd.mm.yy'
		},
		CLASSFROM: {title: 'из',},
		CLASSTO: {title: 'в',},
		EONAME: {title: 'ОО'},
	};
	var requestMovement = function(userInfo){
		var x={
			AT: strATTok,
			StudentId: userInfo.record.USERID
		};
		return x;
	};
	var empySubTitle = function(userInfo){return '';}
	movementSubTable = getSubTable(empySubTitle, 'Приказы о движении',movementColumns, requestMovement);

	clonesColumns = {
			Movement: movementSubTable,
			STUDENTID: {type: 'hidden',},
			USERID: {title: 'id',
				width: '1%',
			},
			NICKNAME: {title: 'ФИО',},
			BIRTHDATE: {title: 'д.рожд.',
				width: '1%',
				type: 'date',
				displayFormat: 'dd.mm.yy'
			},
			PASS_INFO: {title: 'документ',},
			ADDRESS: {title: 'Адрес',},
			RELATIVES: {title: 'Дети/Родители',},
			EONAME: {title: 'ОО'},
		};
	var requestClones = function(studentData){
		return {
			AT: strATTok,
			FIOPS: document.MainForm.FIOPS.value,
			PASS_SER: studentData.record.PASS_SER,
			PASS_NUM: studentData.record.PASS_NUM
		};
	};
	var clonesSubTitle = function(studentData){
		return ' Дубли: ' + (studentData.record.PASS_SER ? studentData.record.PASS_SER :'')+ ' ' + studentData.record.PASS_NUM;
	};
	clonesSubTable = getSubTable(clonesSubTitle, 'Просмотр дублей',clonesColumns, requestClones); 

	$('#PersonTableContainer').css('min-width', '800px'); 
	$('#PersonTableContainer').jtable({
		//title: '',
		paging: true, 
		pageSize: 10,
		actions: {
			listAction: '/asp/Administration/clones_ajax.asp'
		},
		fields: {
			Clones: clonesSubTable,
			PASS_SER: {width: '9%'},
			PASS_NUM: {width: '61%'},
			cnt: {
				width: '16%',
				title: 'Кол-во&nbsp;дублей',
			}
		}
	});
		
});
	function applyFilter() {
		$('#PersonTableContainer').jtable('load',{ AT: strATTok, FIOPS: document.MainForm.FIOPS.value, kRoles: document.MainForm.kRoles.value});
	}
	function exportClones() {
		$.show.confirmation('<%=obLanguage("Common","kBtnExcel")%>')
			.then(function(){
						postTo({
						path: "/webapi/admin/userclones/export",
						formParams: { 
							method: "GET",
							target:"_blank"
						},
						params: {
							fiops: document.MainForm.FIOPS.value, 
							role: document.MainForm.kRoles.value == "kChildren"? 4 : document.MainForm.kRoles.value == "kParents"? 5 : 3
						},
					});
				});
	}


	</script><%
End Sub

Sub DrawLinkButtons()
	%><div id="exportTestPlanButton" class="display-inline" style="display:none;"><%
		'Call ButtonExportCommonEx( "exportClones()", hint, hint)
		%>
	</div><%
End Sub

Sub onDrawPage()
	dim hint
	hint = obLanguage("Common","kBtnExcel")%>
	<div class="row">
		<div class="col-md-12">
			<form name="MainForm" class="form-horizontal" action="<%=strScriptName%>" method="post">
				<%=WriteObligatoryTags()%>
				<%=WriteHiddenTags(Array("UID",-1))%>
				<%'Call ButtonExportCommonEx( "exportClones()", hint, hint) #32436
				drawSimpleFilter "Common","kRoles", "kChildren", Array("kChildren", "kParents", "kStaffs")
				drawSimpleFilter "Common","FIOPS", "P_ERR", Array("P_ERR", "S_ERR","FIOD_ERR","FID_ERR","FIO_ERR","FI_ERR") ',"POOL_ERR"

				OpenFormGroup ""
				ButtonSearch "applyFilter()", "Поиск"
				CloseFormGroup
				%>
			</form>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<div id="PersonTableContainer" style="padding: 10px 0"></div>
		</div>
	</div>
	<br /><br /><br /><br /><br /><br />
<%
End Sub
%>