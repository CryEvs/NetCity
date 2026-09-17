function BindWinAccout() {
	return jsSubmit({
		action: "/WinAuthLogin.asp",
		data: { CU: 1 },
		defaultErrorHandling: false,
		onSuccess: function (response) {
			if (response.isError) {
				alert(response.message);
			}
			$("input[name=WLN]").val(response.data.RemoteUser);
			dataWereChanged = true;
		},
		onError: function (xhr, response) {
			if (xhr.status == 401) {
				return;
			}
			alert(response.message || language.Generic.Login.kWinAuthError);
		}
	});
}

function winlogin() {
	jsSubmit({
		action: "/WinAuthLogin.asp",
		auth: false,
		method: "GET",
		defaultErrorHandling: false,
		onSuccess: function (response) {
			if(!response) {
				alert(language.Generic.Login.kWinAuthError);
				return;
			}
			if(response.isError) {
				alert(response.message);
				return;
			}
			//NetCity.Common.Enums.LoginType
			var LoginType_WinSchool = 4;
			postTo('/WinAuthLogin.asp', { LoginType: LoginType_WinSchool });
		},
		onError: function (xhr) {
			if (xhr.status == 401) {
				return;
			}
			var message = language.Generic.Login.kWinAuthError;
			var response = xhr.responseJSON;
			if (response && response.message) {
				message = response.message;
			}
			alert(message);
		}
	});
}