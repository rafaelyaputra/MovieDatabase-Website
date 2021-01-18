$(document).ready(function () {

	localStorage.setItem('username', 'user');
	localStorage.setItem('password', 'uaspti');

	$("#login").click(function () {

		var username = $("#username").val();

		var password = $("#password").val();

		if (username == '' || password == '') {

			$('input[type="text"],input[type="password"]').css("border", "2px solid red");

			$('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");

			alert("Pastikan seluruh kotak sudah terisi!");

		} else {

			if (username != localStorage.getItem('username') || password != localStorage.getItem('password')) {

				$('input[type="text"]').css({ "border": "2px solid red", "box-shadow": "0 0 3px red" });

				$('input[type="password"]').css({ "border": "2px solid red", "box-shadow": "0 0 5px red" });

				alert('No User Exist/ Wrong Combination of User & Password');
				$("form")[0].reset();


			} else if (username == localStorage.getItem('username') || password == localStorage.getItem('password')) {

				$("form")[0].reset();

				alert('Login Success!');

				window.location.href = "data.html";

			}

		}

	});

});