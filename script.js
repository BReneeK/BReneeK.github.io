function buttonPressed() {
    var message  =       document.getElementById("message").value;
    
    if (message) {
        var background = document.getElementById("background").style.background = message;
    }
    else {
        alert("No message");
    }
}