var video = document.getElementById("bckvideo");
var bouton = document.getElementById("btn");


bouton.addEventListener("click", function () {
    bouton.classList.toggle("onclic");
});

function pause() {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}