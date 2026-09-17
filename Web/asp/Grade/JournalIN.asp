<!-- #INCLUDE VIRTUAL=/asp/headerJournal.asp -->
<% ' © 2007-2008 IRTech. All rights reserved.

Dim strJournalScrollTable

Sub ReadState()
	strJournalScrollTable = obTokenMgr.GetData(strToken, stScrollJournallTable)
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stScrollJournallTable, Empty)
End Sub

Sub OnHead()
%><script><!--
	var colspancorrection = new Array();
	var strHighlightedClr = '#D6DAFF';
	var strNormalClr = '#e7eff7';
	function selectRow(n, color){
		parent.$('#pupilstab tr:eq('+n+')').css('background-color',color);
		parent.$('#AverTotalTable tr:eq('+n+')').css('background-color',color);
		$('#journal_marks tr:eq('+(n+2)+')').css('background-color', color);
	}
	function selectCol(n, color){
		n+=1;
		$('#journal_marks tr').each(function(){
			sum = 0;
			last=null;
			$(this).find('th').each(function(){
				if(sum<n){
					last=$(this);
					colspan=$(this).attr('colspan');
					sum += (colspan) ?parseInt(colspan) : 1;
				}
			});
			if(last)
				last.css('background-color',color);
		});
	}
	function movein_MainWnd(){
		selectRow(this.parentNode.rowIndex,strHighlightedClr);
	}
	function moveout_MainWnd(){
		selectRow(this.parentNode.rowIndex,'');
	}
	function movein(){
		selectCol(this.cellIndex, strHighlightedClr);
		selectRow(this.parentNode.rowIndex-2,strHighlightedClr);
	}
	function moveout(){
		selectCol(this.cellIndex, '');
		selectRow(this.parentNode.rowIndex-2,'');
	}
	function init() {
		$('#journal_marks td').hover(movein,moveout);
		parent.$('#AverTotalTable td').hover(movein_MainWnd,moveout_MainWnd);
		parent.$('#pupilstab td').hover(movein_MainWnd,moveout_MainWnd);
	}

	window.onload = function()
	{
		init();
		var lastEditedCMCell = document.getElementById('LastEditCM');
		var currDateElem = window.document.getElementById('currPeriod');
		if( lastEditedCMCell )
			window.scrollTo(lastEditedCMCell.offsetLeft - parent.$(window).width()/2,0);
		else if ( currDateElem )
			window.scrollBy(currDateElem.offsetLeft-400,0);
	}
//-->
</script><%
End Sub

Sub onDrawPage()
	Response.Write strJournalScrollTable
End Sub
%>
