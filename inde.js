document.querySelector('.musicBottom').onmouseover = function (e) {
    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
};

function pushUpMessage() {
    if(sound.paused) {
        document.getElementById('sound').play();
    }
    else{
        document.getElementById('sound').pause();
    }
}

function playMusic(){
    let name = document.getElementById('fname');
    while (name > 1 ) {
        document.getElementById('thank').play();
    }
}
function showModale(message) {
    let user = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value
    };
    alert("Dear " + user.firstName + ", we are grateful for your opinion");
}
