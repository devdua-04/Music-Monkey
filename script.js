console.log("HELLO WORLD");

let audioElement=new Audio('songs/Obsessed.mp3');
let masterPlay=document.getElementById("masterPlay");
let progressBar=document.getElementById("progressBar");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let playNext=document.getElementById("playNext");
let playPrev=document.getElementById("playPrev");
let sName=document.getElementById("sName");
let songs=[
    {songName:"Obsessed", filePath:"songs/Obsessed.mp3"},
    {songName:"Raule", filePath:"songs/Raule.mp3"},
    {songName:"Goliyan", filePath:"songs/Goliyan.mp3"},
    {songName:"Ashes", filePath:"songs/Ashes.mp3"},
    {songName:"Panga", filePath:"songs/Panga.mp3"},
];

songItems.forEach((element,i)=> {
    element.getElementsByTagName("span")[0].innerText=songs[i].songName;
});


// Playing songs
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
});


// updating progress bar value with music time
audioElement.addEventListener('timeupdate',()=>{
    progress=(audioElement.currentTime/audioElement.duration)*100;
    progressBar.value=progress;
})

// updating music with change to progress bar to move formward and backward in the same song
progressBar.addEventListener("change",()=>{
    progress=(progressBar.value*audioElement.duration)/100;
    audioElement.currentTime=progress;
})
let i=0;
let n=songs.length;
// moving forward in the song list
playNext.addEventListener("click", ()=>{
    i+=1;
    if(i>=n){
        i=0;
    }
    // audioElement.src=songs[i].filePath;
    // sName.innerText=songs[i].songName;
    if(audioElement.paused){
        audioElement.src=songs[i].filePath;
        sName.innerText=songs[i].songName;
    }
    else {
        audioElement.src=songs[i].filePath;
        sName.innerText=songs[i].songName;
        audioElement.play();
    }
})

//moving backward in the song list
playPrev.addEventListener("click", ()=>{
    i-=1;
    if(i<0){
        i=n-1;
    }
    if(audioElement.paused){
        audioElement.src=songs[i].filePath;
        sName.innerText=songs[i].songName;
    }
    else {
        audioElement.src=songs[i].filePath;
        sName.innerText=songs[i].songName;
        audioElement.play();
    }
});
