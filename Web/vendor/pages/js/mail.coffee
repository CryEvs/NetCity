window.sys = $.extend sys ? {}, 
	mail: do -> 
		#менеджер почты
		class mailMngr
			constructor : () ->
		
			#открыть экран составления письма
			###@messageData:
				theme				- тема
				to					- получатели "кому"
				copy				- получатели "копия"
				text				- текст письма
			###
			compose : (@messageData) ->
		
				url = urlHelper.makeUrl("/asp/messages/composemessage.asp")
				Wnd = null
				
				winOptions = { url: url, name: '_composemessage', specs: 'status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=820,height=620', winChild: Wnd }
				windowOpen( winOptions )
				Wnd = winOptions.winChild
				Wnd.name='_composemessage'
				
				if !Wnd
					throw "ошибка отрытия окна почты"
				center(Wnd, 500, 520)
					
				mailPostParams =
					NA: @messageData.theme
					TXT: @messageData.text
					A: "T"
					MBID: 2
					SID: @messageData.to.id
					sName: @messageData.to.displayText
					RT: "R"

				if @messageData.copy
					mailPostParams.cID = @messageData.copy.id
					mailPostParams.cName = @messageData.copy.displayText
					
				postTo url, mailPostParams, {target: Wnd.name}

			#открыть экран с входящей почтой
			inbox : -> 
				openPopupWindow("_mail", "/asp/Messages/MailBox.asp", 950, 660)
				
			#получить построителя адресатов
			getRecipientBuilder : -> new recipientsBuilder
			
			
		#структура описывающая полчателя
		class recipientInfo 
			constructor : (@id, @displayText) ->

		#fluent билдер групповых получателей
		class groupsBuilder
			constructor : (@recipientsBuilder) ->
		
			#группа - администраторы орагнизации
			admins: (orgId, orgName) ->
				recipient = new recipientInfo("A" + orgId, language.Generic.Common.kToAdministration + " " + orgName)
				@recipientsBuilder.addRecipient recipient
				return this
			
			#метод окончания построения групповых получателей.
			#возвращает исполнение к построителю получателей
			end: () -> return @recipientsBuilder
	
		#fluent билдер получателей
		class recipientsBuilder
			constructor : () ->
				@recipients = []
				@groups = new groupsBuilder(this)

			addRecipient: (recipient) ->
				@recipients.push recipient

			#метод окончания построения списка получателей.
			#возвращает одну запись получателя, с перечислением через запятую
			end: () ->
				id = ""
				displayText = ""
				for recipient in @recipients
					id += ", " + recipient.id 
					displayText += ", " + recipient.displayText 

				id = id.substring(2) 
				displayText = displayText.substring(2) 
				
				return new recipientInfo(id, displayText)

		return new mailMngr