const form = document.getElementById("myForm");
	form.addEventListener("submit", function(event) {
    	event.preventDefault();
    const dob = form.elements["dob"].value;
    const address = form.elements["address"].value;
    const contact = form.elements["contact"].value;
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "php/profile.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    const data = "dob=" + encodeURIComponent(dob) + "&address=" + encodeURIComponent(address) + "&contact=" + encodeURIComponent(contact);

    xhr.send(data);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
        }
    };
});
