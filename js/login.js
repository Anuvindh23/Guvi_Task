$(document).ready(function() {
    $("#login-form").submit(function(event) {
        event.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();

        const xhttp = new XMLHttpRequest();
        xhttp.open("POST","php/login.php",true);
        xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhttp.send("name="+name+"&email="+email);
        xhttp.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                if(this.responseText === "Success"){
                    window.localStorage.setItem(name,email);
                    window.location.href = "profile.html";
                }
                else{
                    alert("Invalid login credentials");
                }
            }
        }
    })});