window.sys = $.extend(typeof sys !== "undefined" && sys !== null ? sys : {}, {
  mail: (function() {
    var groupsBuilder, mailMngr, recipientInfo, recipientsBuilder;
    mailMngr = (function() {
      function mailMngr() {}


      /*@messageData:
      				theme				- тема
      				to					- получатели "кому"
      				copy				- получатели "копия"
      				text				- текст письма
       */

      mailMngr.prototype.compose = function(messageData) {
        var Wnd, mailPostParams, url, winOptions;
        this.messageData = messageData;
        url = urlHelper.makeUrl("/asp/messages/composemessage.asp");
        Wnd = null;
        winOptions = {
          url: url,
          name: '_composemessage',
          specs: 'status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=820,height=620',
          winChild: Wnd
        };
        windowOpen(winOptions);
        Wnd = winOptions.winChild;
        Wnd.name = '_composemessage';
        if (!Wnd) {
          throw "ошибка отрытия окна почты";
        }
        center(Wnd, 500, 520);
        mailPostParams = {
          NA: this.messageData.theme,
          TXT: this.messageData.text,
          A: "T",
          MBID: 2,
          SID: this.messageData.to.id,
          sName: this.messageData.to.displayText,
          RT: "R"
        };
        if (this.messageData.copy) {
          mailPostParams.cID = this.messageData.copy.id;
          mailPostParams.cName = this.messageData.copy.displayText;
        }
        return postTo(url, mailPostParams, {
          target: Wnd.name
        });
      };

      mailMngr.prototype.inbox = function() {
        return openPopupWindow("_mail", "/asp/Messages/MailBox.asp", 950, 660);
      };

      mailMngr.prototype.getRecipientBuilder = function() {
        return new recipientsBuilder;
      };

      return mailMngr;

    })();
    recipientInfo = (function() {
      function recipientInfo(id1, displayText1) {
        this.id = id1;
        this.displayText = displayText1;
      }

      return recipientInfo;

    })();
    groupsBuilder = (function() {
      function groupsBuilder(recipientsBuilder1) {
        this.recipientsBuilder = recipientsBuilder1;
      }

      groupsBuilder.prototype.admins = function(orgId, orgName) {
        var recipient;
        recipient = new recipientInfo("A" + orgId, language.Generic.Common.kToAdministration + " " + orgName);
        this.recipientsBuilder.addRecipient(recipient);
        return this;
      };

      groupsBuilder.prototype.end = function() {
        return this.recipientsBuilder;
      };

      return groupsBuilder;

    })();
    recipientsBuilder = (function() {
      function recipientsBuilder() {
        this.recipients = [];
        this.groups = new groupsBuilder(this);
      }

      recipientsBuilder.prototype.addRecipient = function(recipient) {
        return this.recipients.push(recipient);
      };

      recipientsBuilder.prototype.end = function() {
        var displayText, i, id, len, recipient, ref;
        id = "";
        displayText = "";
        ref = this.recipients;
        for (i = 0, len = ref.length; i < len; i++) {
          recipient = ref[i];
          id += ", " + recipient.id;
          displayText += ", " + recipient.displayText;
        }
        id = id.substring(2);
        displayText = displayText.substring(2);
        return new recipientInfo(id, displayText);
      };

      return recipientsBuilder;

    })();
    return new mailMngr;
  })()
});
