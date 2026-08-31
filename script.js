 let showDetails = [
    {
        name: "Breaking Bad",
        type: ["offbeat", "gritty", "drama"],
        link: "media/breakingbad-video.mp4"
    },
    {
        name: "Better Call Saul",
        type: ["offbeat", "drama", "psycho"],
        link: "media/bettercallsaul-video.mp4"
    },
    {
        name: "WWE",
        type: ["comedy", "wrestling", "kayfabe"],
        link: "media/wwe-video.mp4"
    },
    {
        name: "Mourinho",
        type: ["documentry", "motivational"],
        link: "media/mourinho-video.mp4"
    }
];
const carouselState = {
    1: { index: 0 },
    2: { index: 0 },
    3: { index: 0 }
};
const bodyElement = document.querySelector('body');
const crslVdoPlayBttn = document.getElementById("play-button");
const popUpContainer = document.getElementById("pop-up-container");
const bigVideoPlayButton = document.getElementById("show-play");
const popUpVideo = document.getElementById("pop-up-video");
const popupVideoSource = document.getElementById("popup-video-source");
const bigVideo = document.getElementById("big-video");
const popUp = document.getElementById("pop-up");
const carouselSection = document.getElementById("section-1");
const carouselSection2 = document.getElementById('section-2');
const carouselSection3 = document.getElementById('section-3');
const videoElements1 = Array.from(document.querySelectorAll(".sec1video"));
const videoElements2 = Array.from(document.querySelectorAll(".sec2video"));
const videoElements3 = Array.from(document.querySelectorAll(".sec3video"));
const nextButton1 = document.getElementById("next-card-button1");
const nextButton2 = document.getElementById("next-card-button2");
const nextButton3 = document.getElementById("next-card-button3");
const previousButton1 = document.getElementById("previous-card-button1");
const previousButton2 = document.getElementById("previous-card-button2");
const previousButton3 = document.getElementById("previous-card-button3");
const contentWrapper = document.querySelector(".content-wrapper");
const videoSource = document.getElementById("video-container-source");
const videoPlayer = document.getElementById("video-player");
const videoContainer = document.querySelector(".video-container");
document.addEventListener("DOMContentLoaded", ()=>{
    bigVideo.muted = true;
    bigVideo.loop = true;
    bigVideo.play();
})
nextButton1.addEventListener("click", ()=>{
    nextSetCards(videoElements1, 1);
});
nextButton2.addEventListener("click", ()=>{
    nextSetCards(videoElements2, 2);
});
nextButton3.addEventListener("click", ()=>{
    nextSetCards(videoElements3, 3);
});
previousButton1.addEventListener("click", ()=>{
    previousCards(videoElements1, 1);
})
previousButton2.addEventListener("click", (event)=>{
    previousCards(videoElements2, 2);
});
previousButton3.addEventListener('click', (event)=>{
    previousCards(videoElements3, 3);
});
function previousCards(array, carouselNumber){
    if(carouselState[carouselNumber].index===0){
        console.log('cannot go any back further');
        return;
    }
    let index=carouselState[carouselNumber].index;
    for(let i=index; i<=index+4; i++){
        array[i].setAttribute('hidden', "");
    };
    index-=5;
    carouselState[carouselNumber].index-=5;
    for(let i=index; i<=index+4; i++){
        array[i].removeAttribute('hidden');
    };
}
function nextSetCards(array, carouselNumber){
    if(carouselState[carouselNumber].index===10){
        console.log('cannot go ahead any further.');
        return;
    }
    let index=carouselState[carouselNumber].index;
    for(let j=index; j<=index+4; j++){
        array[j].setAttribute("hidden", "");
    }
    index+=5;
    carouselState[carouselNumber].index+=5;
    for(let i=index; i<=index+4; i++){
        array[i].removeAttribute("hidden");
    }
}
carouselSection.addEventListener("click", (event)=>{
    const paraElement = document.createElement("p");
    popUpContainer.replaceChildren();
    if(event.target.classList.contains(`sec1video`)){
        popUp.style.display = "block";
    }
    for(let i=0; i<showDetails.length; i++){
        if(event.target.dataset.showType===showDetails[i].name){
            popUpContainer.appendChild(paraElement);
            popupVideoSource.setAttribute("src", showDetails[i].link);
            paraElement.textContent = showDetails[i].type.join(" ●");
            paraElement.style.margin = "0px 10px";
        }
    }
    popUpVideo.load();
    popUpVideo.focus();
});
popUp.addEventListener("focusout", (event)=>{
    if(!popUp.contains(event.relatedTarget)){
        popUp.style.display='none'
        popUpVideo.pause();
    }
})
carouselSection2.addEventListener('click', (event)=>{
    const paraElement = document.createElement("p");
    popUpContainer.replaceChildren();
    if(event.target.classList.contains(`sec2video`)){
        popUp.style.display = "block";
    }
    for(let i=0; i<showDetails.length; i++){
        if(event.target.dataset.showType===showDetails[i].name){
            popUpContainer.appendChild(paraElement);
            popupVideoSource.setAttribute("src", showDetails[i].link);
            paraElement.textContent = showDetails[i].type.join(" ●");
            paraElement.style.margin = "0px 10px";
        }
    }
    popUpVideo.load();
    popUpVideo.focus();
});
carouselSection3.addEventListener("click", (event)=>{
    const paraElement = document.createElement("p");
    popUpContainer.replaceChildren();
    if(event.target.classList.contains(`sec3video`)){
        popUp.style.display = "block";
    }
    for(let i=0; i<showDetails.length; i++){
        if(event.target.dataset.showType===showDetails[i].name){
            popUpContainer.appendChild(paraElement);
            popupVideoSource.setAttribute("src", showDetails[i].link);
            paraElement.textContent = showDetails[i].type.join(" ●");
            paraElement.style.margin = "0px 10px";
        }
    }
    popUpVideo.load();
    popUpVideo.focus();
})
bigVideoPlayButton.addEventListener("click", ()=>{
    videoPlayer.removeAttribute("hidden");
    videoSource.setAttribute("src", "media/The-Penguin-Trailer.mp4");
    videoContainer.load();
    videoContainer.play();
    contentWrapper.style.display = "none";
})
crslVdoPlayBttn.addEventListener("click", ()=>{
    if(popUpVideo.paused){
        popUpVideo.play();
    }else{
        popUpVideo.pause();
    }
});
