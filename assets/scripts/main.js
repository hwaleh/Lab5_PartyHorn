// main.js

// TODO
document.getElementById("volume-number").addEventListener("input", volInput);
document.getElementById("volume-slider").addEventListener("input", volSlider);
document.getElementById("audio-selection").addEventListener("change", audios);
document.getElementById("honk-btn").addEventListener("click", honker);

function volInput(event){
    event.preventDefault();
    if(event.target.value==0){
        //event.target.value=0;
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-0.svg";
        document.getElementById("volume-slider").value="0";
        document.getElementById("honk-btn").disabled=true;
    }
    if(event.target.value>0&&event.target.value<=33){
        //event.target.value=0;
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-1.svg";
        document.getElementById("volume-slider").value=event.target.value;
        document.getElementById("honk-btn").disabled=false;
    }
    if(event.target.value>33&&event.target.value<=66){
        //event.target.value=0;
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-2.svg";
        document.getElementById("volume-slider").value=event.target.value;
        document.getElementById("honk-btn").disabled=false;
    }
    if(event.target.value>66){
        //event.target.value=0;
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-3.svg";
        document.getElementById("volume-slider").value=event.target.value;
        document.getElementById("honk-btn").disabled=false;
    }
    //console.log(event.target.value);
}

function volSlider(event){
    //console.log(event.target.value);
    if(event.target.value==0){
        //event.target.value=0;
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-0.svg";
        document.getElementById("volume-slider").value="0";
        document.getElementById("volume-number").value=event.target.value;
        document.getElementById("honk-btn").disabled=true;
    }
    if(event.target.value>0&&event.target.value<=33){
        //event.target.value=0;
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-1.svg";
        document.getElementById("volume-slider").value=event.target.value;
        document.getElementById("volume-number").value=event.target.value;
        document.getElementById("honk-btn").disabled=false;
    }
    if(event.target.value>33&&event.target.value<=66){
        //event.target.value=0;
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-2.svg";
        document.getElementById("volume-slider").value=event.target.value;
        document.getElementById("volume-number").value=event.target.value;
        document.getElementById("honk-btn").disabled=false;
    }
    if(event.target.value>66){
        //event.target.value=0;
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-3.svg";
        document.getElementById("volume-slider").value=event.target.value;
        document.getElementById("volume-number").value=event.target.value;
        document.getElementById("honk-btn").disabled=false;
    }
}

function audios(event){
    //console.log(event.target.id);
    event.preventDefault();
    
    if(event.target.id=="radio-air-horn"){
        document.getElementById("sound-image").src="./assets/media/images/air-horn.svg";
        document.getElementById("horn-sound").src="./assets/media/audio/air-horn.mp3";
    }
    if(event.target.id=="radio-car-horn"){
        document.getElementById("sound-image").src="./assets/media/images/car.svg";
        document.getElementById("horn-sound").src="./assets/media/audio/car-horn.mp3";
    }
    if(event.target.id=="radio-party-horn"){
        document.getElementById("sound-image").src="./assets/media/images/party-horn.svg";
        document.getElementById("horn-sound").src="./assets/media/audio/party-horn.mp3";
    }
}

function honker(event){
    event.preventDefault();
    //console.log(event);
    console.log(document.getElementById("horn-sound").src);
    /*if(document.getElementById("volume-number").value==0){
        document.getElementById("honk-btn").disabled=true;
    }*/
    //else{
        //document.getElementById("honk-btn").disabled=false;
        document.getElementById("horn-sound").volume=(document.getElementById("volume-number").value)/100;
        document.getElementById("horn-sound").play();
    //}
}



