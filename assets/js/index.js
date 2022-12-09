document.querySelector("#btn").onclick = function () {
    document.querySelector("#btn").style.display = 'none';
    document.querySelector(".christmas").style.display = 'block';
    document.querySelector("#body").style.background = "#de2f32";
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }