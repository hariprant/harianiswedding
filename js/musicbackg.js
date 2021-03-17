// Music Backgroud
var x = document.getElementById("music");
var mute = document.getElementById("mute-btn");
var icon = mute.getElementsByTagName("i").item(0);

function playAudio() { 
    x.play();
    icon.className = "fas fa-volume-up my-float";
    console.log(icon); 
} 
function pauseAudio() {
    x.pause(); 
    icon.className = "fas fa-volume-mute my-float";
    console.log(icon);
}
function onoff(){
    currentvalue = icon.className;
    console.log(currentvalue)
    if(currentvalue == "fas fa-volume-up my-float"){
        icon.className = "fas fa-volume-mute my-float";
        pauseAudio();
    }else{
        icon.className = "fas fa-volume-up my-float";
        playAudio();
    }
}