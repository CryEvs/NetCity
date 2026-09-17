canSubmit = -> true
isHaveToLogout = true
haveToLogout =-> isHaveToLogout
windowsNotCloseNames = ["_mail", "_forum", "_help", "_qualityAssessmentAnalytics", "_qualityAssessmentAnalyticsEM", "nsxml", "_staffAttest"]

goCommonBack = ->
	if typeof Back == "function"
		Back()
	else
		goHistoryBack()

goHistoryBack = ->
	checkForChanges()
		.then(() ->
			isHaveToLogout = false
			history.go -1
		)

goBack = (form, action) ->
	if leaveAndConfirm()
		checkForChanges()
			.then(() ->
				$('input[type="password"]', form).attr('disabled', 'disabled');
				DoSubmit(form, action))
			
DoSubmit = (form, action) ->
	form.action = action if action and action isnt ''
	isHaveToLogout = false
	form.submit()

ok_check_db = (formName, action) ->
	extDeferred.when(bIsDBFree, canSubmit)
		.then(->
			$(document).trigger('showProcessing')
			setDBBusy()
			DoSubmit(document.forms[formName], action))
			
ok = (formName,action,obj) ->
	if obj is null then form = document.forms[formName] else form = GetForm(formName, obj)
	return extDeferred.when(canSubmit).then(-> DoSubmit(form, action))

SetSelectedTab = (tbID, url) ->
	form = document.forms['MenuForm']
	if not form then return

	if leaveAndConfirm()
		checkForChanges()
			.then(() ->
				if tbID == 56
					openPopupWindow("_qualityAssessmentAnalytics", (if !url.match(/\/$/) then url + "/" else url) + "?SchoolYearId=" + appContext.yearId + "&UserId=" + appContext.userId, 950, 660)
					return
				if tbID == 208
					openPopupWindow("_qualityAssessmentAnalyticsEM", (if !url.match(/\/$/) then url + "/" else url) + "?EMId=" + appContext.emId + "&UserId=" + appContext.userId + "&GlobalYearId=" + appContext.globalYearId, 950, 660)
					return
				if url.indexOf("window:") == 0
					clearUrl = url.substring(7)
					wndto = if tbID == 66 then "_staffAttest" else tbID
					openPopupWindow(wndto, clearUrl, 1024, 800)
					return
				
				if url.indexOf("/angular/") == 0
					isHaveToLogout = false
					nowApp = $(document).find('base').attr('href')
					if url.indexOf(nowApp) == 0
						isHaveToLogout = false
						clearedRoute = url.replace nowApp, ""
						#для страниц angular, в app.js должна быть определена данная функция для роутинга в рамках текущего бандла
						if typeof window.ChangeAngularRoute == "function"
							window.ChangeAngularRoute "/" + clearedRoute, url
							return true

				form.elements['TabItem'].value = tbID
				form.action = url
				isHaveToLogout = false
				form.submit()
			)
	return

SetSelectedMenu = (miID, url) ->
	form = document.forms['MenuForm']

	if not form then return
	
	if leaveAndConfirm()
		checkForChanges().then(() ->
			form.elements['MenuItem'].value = miID
			form.elements['TabItem'].value = 0
			form.action = url
			isHaveToLogout = false
			form.submit()
		)
	return false

OnChangeSelect = (sFormName, sAction) ->
	checkForChanges()
		.then(() -> ok_check_db(sFormName, sAction))
		.fail(
			() ->
				document.forms[sFormName].reset()
				return
			)
	return
	
getVersionedLink = (link) ->
	if typeof appContext == "undefined"
		return link
	link + "?ver=" + appContext.version

windowOpen = (winOptions) ->
	url = winOptions.url or ''
	name = winOptions.name or ''
	specs = winOptions.specs or ''
	replace = winOptions.replace or ''
	wnd = winOptions.winChild
	
	wnd.close() if wnd && !wnd.closed
	
	wnd = window.open(url, name, specs, replace)
	winOptions.winChild = wnd
	opener = wnd.opener
	
	while opener && not opener.closed
		try
			opener.childWindows.push(wnd)
			opener = opener.opener
		catch
			break
	$(window).on "unload", (e) ->
		if wnd && !wnd.closed && windowsNotCloseNames.indexOf(wnd.name) < 0
			wnd.forceClosing = true
			wnd.close()

closeChildWindows = ->
	k = childWindows.length
	while k > 0
		if childWindows[k-1] and not childWindows.closed
			childWindows[k - 1].close()
		childWindows.pop()
		k = k - 1
	return
	