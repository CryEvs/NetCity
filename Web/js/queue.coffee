window.showQueuedTasks = () ->

	source = "<table class=\"table\">
					<tr>
						<th>{{language.Generic.MySettings.kEnqueueDate}}</th>
						<th>{{language.Generic.MySettings.kStartProcessingDate}}</th>
						<th>{{language.Generic.MySettings.kNumberInQueue}}</th>
						<th>{{language.Generic.Common.kFileName}}</th>
						<th>{{language.Generic.ServAdmin.kDocNumber}}</th>
						<th>{{language.Generic.Movement.kDocDate}}</th>
						<th>{{language.Generic.MySettings.kQueueCurrentStatus}}</th>
					</tr>
					{{#each tasks}}
					<tr>
						<td>{{EnqueueDate}}</td>
						<td>{{StartDate}}</td>
						<td>{{QueuePosition}}</td>
						<td>{{FileName}}</td>
						<td>{{DocNumber}}</td>
						<td>{{DocDate}}</td>
						<td>{{Status}}</td>
					</tr>
					{{/each}}
				</table>";
				
	template = Handlebars.compile(source)

	jsSubmit
		action: "/asp/ajax/GetQueuedTasks.asp"
		showProcessing: true
		onSuccess: (response) ->
			model = $.extend {}, response.data, {language: language}

			if response.data.tasks.length > 0
				message = template model
			else
				message = language.Generic.Movement.kMsgNoActiveQueuedImportProcesses

			$.show.dialog
				title: language.Generic.Movement.kQueuedImportProcesses
				size: BootstrapDialog.SIZE_WIDE
				message: message
				buttons: [
					{
						label: language.Generic.Buttons.kRefresh
						action: (dialog) ->
							dialog.successClose()
							showQueuedTasks()
					},
					{
						label: language.Generic.Calendar.kClose
						action: (dialog) -> dialog.close()
					},
				]
