$(document).ready(function () {
    var password = document.getElementById('password1');
    let timeout;
    let strengthBadge = document.getElementById('StrengthDisp');
    let reStrongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let reMediumPassword = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    function checkPwStrength(passwordParameter) {
        if (reStrongPassword.test(passwordParameter)) {
            strengthBadge.style.background = "green";
            strengthBadge.textContent = 'Strong';
            $("#error-message-password1").html("");
        } else if (reMediumPassword.test(passwordParameter)) {
            strengthBadge.style.background = "orange";
            strengthBadge.textContent = 'Medium';
            $("#error-message-password1").html("");
        } else {
            strengthBadge.style.background = "red";
            strengthBadge.textContent = 'Weak';
            $("#error-message-password1").html("password is weak...");
        }
    }
    password.addEventListener('input', function () {
        strengthBadge.style.display = 'block';
        clearTimeout(timeout);
        timeout = setTimeout(() => checkPwStrength(password.value), 500);
        if (password.value.length !== 0) {
            strengthBadge.style.display != 'block';
        } else {
            strengthBadge.style.display = 'none';
        }
    });

    $('#button-register').click(function () {
        let valid = true;
        if ($("#name").val() == "") {
            $("#error-message-name").html("Please fill name");
            valid = false;
        }

        const inputEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!inputEmail.test(String($("#email").val()).toLowerCase())) {
            $("#error-message-email").html("Please fill a valid email");
            valid = false;
        }
        if ($("#email").val() == '') {
            $("#error-message-email").html("Please fill a valid email");
            valid = false;
        }

        if ($("#password1").val() == '') {
            $("#error-message-password1").html("password is required...");
            valid = false;
        }
        
        if ($("#password2").val() == '') {
            $("#error-message-password2").html("password is required...");
            valid = false;
        }

        if ($("#password1").val() != $("#password2").val()) {
            $("#error-message-password2").html("password do not match...");
            valid = false;
        }
        if(valid){
            var result = document.getElementById('result');
            $("#name_output").html($("#name").val());
            $("#email_output").html($("#email").val());
            $("#pw_output").html($("#password1").val());
            $("#error-message-name").html("");
            $("#error-message-email").html("");
            $("#error-message-password1").html("");
            $("#error-message-password2").html("");
            result.style.visibility="visible";
            $('form')[0].reset();
        }else{
            $('form')[0].reset();
        }

        return false; // disable default form submission
    });

});