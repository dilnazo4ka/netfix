document.querySelector('.musicBottom').onmouseover = function (e) {
    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
};

function pushUpMessage() {
    document.getElementById('sound').play();
}
// document.addEventListener('keypress', function(){
//     pushUpMessage();
// });
function playMusic(){
    document.getElementById('thank').play();
}
function showModale() {
    alert("Thank you!")
}
