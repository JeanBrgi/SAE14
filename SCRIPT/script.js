var video = document.getElementById("bckvideo");
var bouton = document.getElementById("btn");


function pause() {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}