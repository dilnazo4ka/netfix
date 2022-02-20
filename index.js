var numberOfButtons = document.querySelectorAll("button").length;
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var audio = new Audio('click.mp3');
        audio.play();
    });
}

var numberOfInputs = document.querySelectorAll("input").length;
for (var i = 0; i < numberOfInputs; i++) {
    document.querySelectorAll("input")[i].addEventListener("keypress", function (){
        var audio = new Audio('click.mp3');
        audio.play();
    });
}
function pushUpMessage() {
    document.getElementById('sound').play();
}
