<!-- #INCLUDE FILE=sa_inc.asp -->
<!-- #INCLUDE FILE="../scripts/FiltersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

const isPassSer = "isPassSer"
const isBirthSer = "isBirthSer"
const isMiddleName = "isMiddleName"
const isLastname = "isLastname"

Dim title, objGlobalYears, globalYearID, objMovePeriods, dr
Dim viewType, enrollType
Dim fiops

Function GetPageTitle()
	title = obLanguage("MenuFolders","kDiagnos")
	GetPageTitle = title & " <i>" & NETSCHOOL_PRODUCT_NAME & "</i><br><br>"
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_mi_SA_Diagnos
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tb_SA_Diagnos
 End Function

Function LoadData(globalYearID, fiops, isBD, isMiddle, isOU, isOUDOD, isHidden)
	Set LoadData = movementComponent.GetUserClones(globalYearID, fiops, isBD, isMiddle, isOU, isOUDOD, isHidden)
End Function
Sub Main()
	SetScriptTimeOut 900
	Set objGlobalYears = objNSNET.GetGlobalYears(0)
	Dim isMiddle, isOU, isBD, isOUDOD, isHidden
	Dim movementComponent
	Set movementComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IUserClonesComponent")
	TestError obLanguage("Common","kUnexpErr")
	'stop

	globalYearID = GetSafeLng(objGlobalYears("GLOBALYEARID"), Null)
	viewType =  GetSafeID(Request("ViewType"), "1")
	'Set objMovePeriods = objNSNET.GetMovePeriodsInfo(strGlobalYearID)
	
	fiops = GetSafeStr(Request("ErrDocTypes"), -1, "P_ERR") '11.09.2009
	Set dr=movementComponent.GetErrorDocs(globalYearID, fiops)
	' If viewType = "1" Then
		' Set dr = movementComponent.GetNegativeRanges(strGlobalYearID)
	' ElseIf viewType = "2" Then
		' Set dr = movementComponent.GetIntersectRanges(strGlobalYearID)
	' Else
		' enrollType = GetSafeLng(Request("EnrollType"),0)
		' Set dr = movementComponent.GetDifferenceRanges(strGlobalYearID, enrollType)
	' End If
End Sub

Function GetData(rs)
	Dim properties, columns
	properties = Null'Array("PASS_SER","PASS_num","PASS_DATE","PASS_INFO","STUDENTID","NickName","BIRTHDATE","bser","bnum","bdt","borg")
	columns = Null'Array("PASS_SER","PASS_num","PASS_DATE","PASS_INFO","STUDENTID","NickName","BIRTHDATE","bser","bnum","bdt","borg")
	GetData = comHelper.DataSetAdapterHelper.ToJSON(rs, properties, columns, Array("ToShortDate"))
End Function

' //cdn.datatables.net/1.10.6/css/jquery.dataTables.css
' //code.jquery.com/jquery-1.11.1.min.js
' //cdn.datatables.net/1.10.6/js/jquery.dataTables.min.js
<!-- jQuery -->
'<script type="text/javascript" charset="utf8" src="//code.jquery.com/jquery-1.11.1.min.js"></script>

Sub OnHead()%>

<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.css">
<!--link rel="stylesheet" type="text/css" href="//cdn.datatables.net/fixedcolumns/3.0.4/css/dataTables.fixedColumns.css"-->
<!-- DataTables -->
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js"></script>
<!--script type="text/javascript" charset="utf8" src="//cdn.datatables.net/fixedcolumns/3.0.4/js/dataTables.fixedColumns.min.js"></script-->
	<script>
	$(function() {
		$(document.MainForm.ErrDocTypes).on('change',function() {
			DoSubmit(document.MainForm,'')
		})
/*	    $('#example tfoot th').each( function () {
		var title = $('#example thead th').eq( $(this).index() ).text();
		$(this).html( '<input type="text" placeholder="Search '+title+'" />' );
	} );*/
	var xxxx = //[]
	<%=GetData(dr)
	%>
	var table = $('#example').dataTable( {
		//"scrollY": "600px",
		//"scrollX": "100%",
		//"scrollCollapse": true,
		"ordering": true,
		"paging": true,
		"processing": true,
		"deffered": true,
		//"serverSide": true,
		//"sorting":false,
		/*  "dom": 'T<"clear">lfrtip',
		"tableTools": {
			"sSwfPath": "/swf/copy_csv_xls_pdf.swf"
		},*/
		//"ajax": {"url":"x.txt", "dataSrc": ""},
		//"ajax": {"url":"/asp/scripts/ajaxmethods.asp?method=clones", "dataSrc": ""}, //"type": "POST"},
		//"ajax": "x.txt",
		"data": xxxx,
		"columns": [
		<%If fiops="P_ERR" Then%>
			{ "data": "PASS_SER" },
			{ "data": "PASS_num" },
			{ "data": "PASS_DATE" },
			{ "data": "PASS_INFO" },
			{ "data": "STUDENTID" },
			{ "data": "NICKNAME" },
			 { "data": "BIRTHDATE" },
		   { "data": "bser" },
			{ "data": "bnum" },
			{ "data": "bdt" },
			{ "data": "borg" }
		<%Else%>
		   { "data": "bser" },
			{ "data": "bnum" },
			{ "data": "bdt" },
			{ "data": "borg" },
			{ "data": "STUDENTID" },
			{ "data": "NICKNAME" },
			 { "data": "BIRTHDATE" },
			{ "data": "PASS_SER" },
			{ "data": "PASS_num" },
			{ "data": "PASS_DATE" },
			{ "data": "PASS_INFO" }
			<%End If%>
		]
		,initComplete: function () {
		var columns =this.api().column(0);//s(function ( idx, data, node ) {return (idx <= 0);})
			columns.every( function () {
				var column =this;
				values = column.cache( 'search' ).sort().unique();
				//.cache( 'search' )
				//.data()
				//.unique().sort()
				if (values){
				var select = $('<select><option value="Все">Все</option></select>')
					.appendTo( $(column.footer()).empty() )
					.on( 'change', function () {
						var val = $.fn.dataTable.util.escapeRegex(
							$(this).val()
						);
 
						column
							//.search( val!="Все" ? '^'+val+'$' : '', true, false )
							.search( val!="Все" ? '^'+val+'$' : '', true, false , false )
							//.search( val!="Все" ? val : '')
							.draw();
					} );
				values.each( function ( d, j ) {
					select.append( '<option value="'+d+'">'+d+'</option>' )
				} );
				}
			} );
		}
		//,"pagingType": "scrolling"
	} );
	/*
	table.columns().flatten().each( function ( colIdx ) {
    // Create the select list and search operation
    var select = $('<select />')
        .appendTo(
            table.column(colIdx).footer()
        )
        .on( 'change', function () {
            table
                .column( colIdx )
                .search( $(this).val() )
                .draw();
        } );
 
    // Get the search data for the first column and add to the select list
    table
        .column( colIdx )
        .cache( 'search' )
        .sort()
        .unique()
        .each( function ( d ) {
            select.append( $('<option value="'+d+'">'+d+'</option>') );
        } );
} );*/
	//new $.fn.dataTable.FixedColumns( table,{leftColumns: 2} );
		/*var tableTools = new $.fn.dataTable.TableTools( table, {
		"buttons": [
			"copy",
			"csv",
			"xls",
			"pdf",
			{ "type": "print", "buttonText": "Print me!" }
		]
	} );
	  
	$( tableTools.fnContainer() ).insertAfter('div.info');*/
} );
		function editUser(uId, schId, obj) {
			var form = GetForm('MainForm', obj);
			form.UID.value = uId;
			$(form).append("<input name='SCH', value='"+schId+"' type='hidden'>");
	
			ShowInDialog(form, '/asp/SetupSchool/Movement/StudentMovementInfo.asp',
				function() {
					jsSubmit({
						action: "/asp/scripts/ajaxmethods.asp",
						data: {method: "UpdatePoolStudentsLine", UID: uId},
						showProcessing: true,
						onSuccess: function(response){
							if (response.data.archReason == 0) {
								if (response.data.school == "") {
									response.data.school = "&nbsp";
								}

								$(".uid"+uId).parent().siblings()
									.eq(3).html(returnTableCell(response.data.reason)).end()
									.eq(4).html(returnTableCell(response.data.school)).end();
							}
							else {
								if ($("*[name=ViewType]").val() != -1) {
									$(".uid"+uId).parent().parent().addClass('deleted');
								}
								else
								{
									$(".uid"+uId).parent().siblings()
										.eq(3).html(returnTableCell(response.data.reason)).end()
										.eq(4).html(returnTableCell(response.data.school)).end()
										.eq(5).html(returnTableCell(response.data.archReason)).end();
								}
							}
						}
					});
				}
			);
	
		}
	</script><%
End Sub

' Function GetSafeGlobalYearID()
	' Dim strID
	' strID = GetSafeID(Request("CMNYEAR"), "0")
	' If strID = "0" Then
		' GetSafeGlobalYearID = GetSafeID(objGlobalYears("GLOBALYEARID"), Null)
		' Exit Function
	' End If

	' While Not objGlobalYears.EOF
		' If strID = GetSafeID(objGlobalYears("GLOBALYEARID"), Null) Then
			' GetSafeGlobalYearID = strID
			' objGlobalYears.MoveFirst
			' Exit Function
		' End If
		' objGlobalYears.MoveNext
	' WEnd
	' objGlobalYears.MoveFirst
	' GetSafeGlobalYearID = GetSafeID(objGlobalYears("GLOBALYEARID"), Null)
' End Function

Sub onDrawPage()
	%><div class="span8"><%
	ButtonCancel "goBack( document.MenuForm, '/angular/admin/support/');", obLanguage("Common","kBack")%>
	<form name="MainForm" class="form-horizontal" action="<%=strScriptName%>" method="post">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("UID",-1))%>
	<%
	drawSimpleFilter "Common","ErrDocTypes", "P_ERR", Array("P_ERR", "S_ERR")
	'InlineButton "DoSubmit(document.MainForm, '');", "Apply", ""
	%>
	</form>
	<table id="example" class="display compact nowrap1" cellspacing="0" width="100%">
	<thead><tr>
		<%Dim header, header1, header2, header3
			header1="<th>PASS_SER</th><th>PASS_num</th><th>PASS_DATE</th><th>PASS_INFO</th>"
			header2="<th>STUDENTID</th><th>NickName</th><th>BIRTHDATE</th>"
			header3="<th>bser</th><th>bnum</th><th>bdt</th><th>borg</th>"
			If fiops="P_ERR" Then header= header1 & header2 & header3 Else header= header3 & header2 & header1

			rw header
			%>
			</tr>
		</thead>
	<tfoot>
		<tr>
			<%rw header%>
		</tr>
	</tfoot>
	</table>
<%
'InlineButton "ajax;", "Apply", ""
	' <select name="PERIOD" OnChange="OnChangeSelect('MainForm', '<-%=strScriptName%->');"><-%
		' PopulateSelect objMainForm, "PERIODID", "STARTDATE", Null %->
	' </select>
	rw "<br />"
	rw "<br />"
	rw "<br />"
	rw "<br />"
	rw "<br />"
	rw "<br />"
	'stop
	'Call DrawTable2( dr, "similars")
	'	If viewType <> "3" Then Call DrawTable1(dr) Else  DrawTable1 dr', "rangesRel"
End Sub

Sub DrawTable(dr, id0)
	dim val, dic, stud1exists, stud2exists, studentID, studentID2
	If dr Is Nothing Then Exit Sub
	If  dr.EOF Then Exit Sub
	Dim j, i, n,fieldName, id, id2, first', idName', arr, row
	'arr = dr.GetRows()
		'rw "<br />"
	rw "<table class=""table1 table1-bordered table1-condensed"">"
	n = dr.Fields.Count-1'Ubound(arr,1)'
	id=-1
	id2 = (n+1)/2'+id0-2
	'rw "<th>"
	For i=id0 To n
		'rw "<th>"
		fieldName = dr.Fields()(i).Name
		if  fieldName = "STUDENTID" Then id=i
		'if  fieldName = "M2" Then id2=i
		'rw  fieldName&" "
		'rw "&nbsp;" &" "
		'rw "</th>"
	Next
	'rw "</tr>"
	'dr.MoveFirst
	j=0
	first=0
	Set dic = CreateObject("Scripting.Dictionary")
	Do While Not dr.EOF
	'For each row in arr
		studentID=dr("STUDENTID").Value
		studentID2=dr("STUDENTID2").Value
		stud1exists = dic.exists(studentID)
		stud2exists = dic.exists(studentID2)
		dic(studentID)=1
		dic(studentID2)=1
		If Not stud1exists Or Not stud2exists then
			rw "<tr>"
			For i=id0 To n
				if i<id2 and first=studentID Then
				Elseif i<id2 and stud1exists Then
				Else
				 if i=id2 Then
					first=dr(i).Value
					if stud2exists Then Exit For
					rw "</tr><tr>"
					i=i+id0
				End If

				rw "<td>"
				If i=id or dr.Fields()(i).Name="STUDENTID2" Then
					val = ShowAnchor( "editUser('"&dr(i)&"',null,this);", obLanguage("PoolStudents","kEditStudent",strFunctionalityType), dr(i), "class=""uid"&(dr(i))&"""" )
				Else
					val = DB2HTML(dr(i))
				End If
				rw val &" "
				'rw row()(i)' &" "
				'rw row
				rw "</td>"
				End If
			Next
			rw "</tr>" & vbcrlf
		End If
		dr.MoveNext
		j=j+1
		'if j>500 Then Exit Do
	Loop
	'Next
	rw "</table>"
End Sub
Sub DrawTable2(dr, relation)
	Dim rs, colsp
	If dr Is Nothing Then Exit Sub
	If  dr.EOF Then Exit Sub
	Dim i, rownum, n', arr, row
	'arr = dr.GetRows()
		'rw "<br />"
	rw "<table class=""table1 table1-bordered table1-condensed"">"
	n = dr.Fields.Count-1'Ubound(arr,1)'
	' rw "<tr>"
	' rw "<th>N</th>"
	' For i=0 To n
		' rw "<th>"
		' rw dr.Fields()(i).Name &" "
		' rw "&nbsp;" &" "
		' rw "</th>"
	' Next
		' rw "<th>"
		' rw relation &" "
		' rw "&nbsp;" &" "
		' rw "</th>"
	' rw "</tr>"
	'dr.MoveFirst
	rownum=1
	Do While Not dr.EOF
	'For each row in arr
		rw "<tr>"
		rw "<td>"&rownum&"</td>"
		For i=0 To n
			rw "<td>"
			rw dr(i).Value' &" "
			'rw row()(i)' &" "
			'rw row
			rw "</td>"
		Next
			Set rs=dr(relation).Value
			colsp = "" ' colspan='"&(rs.Fields.Count - n - 1)&"'
			rw "<td >"
			Call DrawTable(rs, n+1)
			'rw row()(i)' &" "
			'rw row
			rw "</td>"
		rw "</tr>"
		dr.MoveNext
		rownum=rownum+1
		'if rownum>500 Then Exit Do
	Loop
	'Next
	rw "</table>"
End Sub%>