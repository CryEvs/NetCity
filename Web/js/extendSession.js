var pageTimer;
var nTickCnt = 0;
var bServerCalled = false;

$(document).ready(function () {
	setPageTimer();
});

function setPageTimer() {
	nTickCnt++;
	if (nTickCnt < 14) // 48 min
	{
		if (nTickCnt > 0 && !bServerCalled) {
			jsSubmit({
				action: '/asp/scripts/ajaxmethods.asp',
				defaultErrorHandling: false
			});
		}
		pageTimer = setTimeout("setPageTimer();", 240000); // 4 min
	}
	else {
		clearTimeout(pageTimer);
	}
}
