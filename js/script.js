function show(shown, hidden1, hidden2) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden1).style.display = 'none';
    document.getElementById(hidden2).style.display = 'none';
    return false;
}
var audio = new Audio('audio/staple stable.mp3');
function playAudio() {
    audio.play()
    audio.volume = 0.05;
}
function stopAudio() {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
}

function TTT() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}