var  audio = document.getElementById('audio');
var  playPauseBTN = document.getElementById('button');
var count = 0;

function pp(){
    if(count==0){
        count=1;
        audio.play();
        playPauseBTN.innerHTML = "Pause &#9208";
    }else{
        count=0;
        audio.pause();
        playPauseBTN.innerHTML = "Play &#9658";
    }
}