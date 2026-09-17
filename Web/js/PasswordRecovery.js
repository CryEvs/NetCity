function isPswRecoveryInfoValid(allowDisplayMessage) {
	var emptyString = "";
	var unSelected = 0;
	var enterQuestion = 8;
	var selectedQuestion = $("[name=Questions]").val();
	var questionInput = $('input[name=RecoveryQuestion]');
	var answerInput = $('input[name=RecoveryAnswer]');
	var question = $.trim(questionInput.val());

	var email = $('input[name=EMAIL]').val();
	var mobilephone = $('input[name=MOBILEPHONE]').val();

	var answer = $.trim(answerInput.val());
	answer = answer.replace(/d41d8cd98f00b204e9800998ecf8427e/gi, '');

	if (selectedQuestion == unSelected && answer.length > 0)
	{
		alert(language.Generic.Common.kChoseControlQuestion);
		return false;
	}
	else if (selectedQuestion == unSelected)
	{
		if (allowDisplayMessage)
			alert(language.Generic.Common.kQuestionAbsent);
		answerInput.val("");
		return true;
	}
	else if(selectedQuestion == enterQuestion && question.length == 0 && answer.length > 0)
	{
		alert(language.Generic.Common.kQuestionAbsent);
		return false;
	}
	else if (selectedQuestion == enterQuestion && question.length == 0)
	{
		return true;
	}

	if (answer.length < 6) {
		alert(language.Generic.Common.kAnswerLengthInvalid);
		return false;
	}
	if (question == "" && $("[name=RecoveryQuestion]").is(":visible")) {
		alert(language.Generic.Common.kQuestionAbsent);
		return false;
	}
	if (answer == emptyString) {
		alert(language.Generic.Common.kAnswerAbsent);
		return false;
	}

	questionInput.val(question);
	answerInput.val(answer);

	if (typeof email != 'undefined' && typeof mobilephone != 'undefined') {
		if (email.length == 0 && mobilephone.length == 0) {
			alert(language.Generic.Common.kSetEmailOrMobilephone);
			return false;
		}
	}
	return true;
}

function validateRecoveryInput(recoveryType, recoveryValue) {
	var charIndex, i, ref;
	if (recoveryValue === "") {
		if (recoveryType === 2) {
			alert(language.Generic.Login.kNotSetPhoneNumber);
		} else {
			alert(language.Generic.Login.kNotSetEmailAdress);
		}
		return false;
	}
	if (recoveryType === 2) {
		if (recoveryValue.indexOf(7) !== 0) {
			alert(language.Generic.SetupSchoolUI.kMobileValueMustStartWith.replace('{0}', language.Generic.Common.kMobilePhone).replace('{1}', 7));
			return false;
		}
		for (charIndex = i = 0, ref = recoveryValue.length; 0 <= ref ? i <= ref : i >= ref; charIndex = 0 <= ref ? ++i : --i) {
			if (isNaN(recoveryValue.charAt(charIndex))) {
				alert(language.Generic.SetupSchoolUI.kFieldPhoneHasOnlyNumbers.replace('{0}', language.Generic.Common.kMobilePhone));
				return false;
			}
		}
		if (recoveryValue.length !== 11) {
			alert(language.Generic.SetupSchoolUI.kMobileLenMustBe.replace('{0}', language.Generic.Common.kMobilePhone).replace('{1}', 11));
			return false;
		}
	}
	return true;
};

function recoveryPassword() {
	var recoveryType = parseInt($("input[name=recoveryType]:checked").val());
	var revoveryInput = $("input[name=recoveryValue]");
	var recoveryValue = revoveryInput.val();

	if (!validateRecoveryInput(recoveryType, recoveryValue) ) {
		revoveryInput.focus();
		return;
	}

	jsSubmit({
		data: {
			recoveryType: recoveryType,
			recoveryValue: recoveryValue
		},
		auth: false,
		method: "get",
		action: "PasswordRecovery.asp",
		showProcessing: true
	}).then(function(response) {
		var question = response.data.recoveryQuestion;
		var userId = response.data.userId;

		if (question == undefined || !userId) {
			if (response.message) {
				$.show.message(response.message);
				return;
			}
			return;
		}

		if (question === "") {
			alert(language.Generic.Login.NotSetSecretQuestion);
			return;
		}

		$.show.prompt(question, "Восстановление пароля", function (answer) {
			if (answer === "") {
				$.show.message(language.Generic.Login.AnswerCanNotBeEmpty);
				return false;
			}
			return true;
		}).then(function (answer) {
			jsSubmit({
				showProcessing: true,
				auth: false,
				action: "/asp/RecoveryAnswerVerification.asp",
				data: { userId: userId, answer: answer, recoveryType: recoveryType, recoveryValue: recoveryValue },
				onSuccess: function (response) {
					alert(response.message);
				}
			});
		});
	});
}

function QuestionChanged() {
	var controlQuestionContainer = $("[name=RecoveryQuestion]").parent().parent();
	var userQuestion = $("[name=Questions]").val();

	if (userQuestion == 8) {
		$("[name=RecoveryAnswer]").removeAttr("disabled");
		controlQuestionContainer.show();
	}
	else if (userQuestion == 0)
	{
		$("[name=RecoveryAnswer]").val("");
		if (!$("[name=RecoveryAnswer]").prop("disabled")) {
			$("[name=RecoveryAnswer]").prop("disabled", true);
		}
		controlQuestionContainer.hide();
	}
	else if (userQuestion > 0 && userQuestion < 8)
	{
		$("[name=RecoveryAnswer]").removeAttr("disabled");
		controlQuestionContainer.hide();
	}
}

function saveChanges() {
	if (isPswRecoveryInfoValid(true)) {
		DetermineQuestion();
		
		var question = $("[name=Questions]").val();
		var recoveryQuestion = $('input[name=RecoveryQuestion]').val();
		var answer = $('input[name=RecoveryAnswer]').val();

		if (!((question == 0 || recoveryQuestion.length == 0) && answer.length == 0))
			ok_check_db('SaveRecoveryPasswordInfo', '');
	}
}

function CheckEnter(event) { if (event.keyCode == 13) saveChanges(); }

function DetermineQuestion() {
	var userQuestion = $("[name=RecoveryQuestion]");
	
	if (!userQuestion.is(":visible")) {
		var selectedOptionText = $("[name=Questions] option:selected").text();
		if (selectedOptionText == "Не выбрано")
			userQuestion.val($("[name=Questions]").val());
		else
			userQuestion.val(selectedOptionText);
	}
}

function ValidateRecoveryMode() {
	if ($("[name='recoveryType']:checked").length == 0) {
		alert(language.Generic.Login.YouDontChoseRecoveryMode);
		return false;
	}
	return true;
}