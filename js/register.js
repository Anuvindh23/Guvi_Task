$(document).ready(function() {
    $('#register-form').submit(function(e) {

        e.preventDefault();
        $.ajax({
            url: 'php/register.php',
            type: 'POST',
            data: $('#register-form').serialize(),
            success: function(response) {
                alert("Registration Successful!");
                window.location.href = 'login.html';
            }
        });
    });
});