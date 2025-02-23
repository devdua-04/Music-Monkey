console.log("HELLO WORLD");

let audioElement = new Audio('songs/Obsessed.mp3');
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let playNext = document.getElementById("playNext");
let playPrev = document.getElementById("playPrev");
let sName = document.getElementById("sName");
let songPlay = Array.from(document.getElementsByClassName("songPlay"));
let gif=document.getElementById("gif");

let songs = [
    { songName: "Obsessed", filePath: "songs/Obsessed.mp3" },
    { songName: "Raule", filePath: "songs/Raule.mp3" },
    { songName: "Goliyan", filePath: "songs/Goliyan.mp3" },
    { songName: "Ashes", filePath: "songs/Ashes.mp3" },
    { songName: "Panga", filePath: "songs/Panga.mp3" },
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("span")[0].innerText = songs[i].songName;
});


// Playing songs
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        songPlay[index].classList.remove("fa-circle-play");
        songPlay[index].classList.add("fa-circle-pause");
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        makeAllPlay();
        gif.style.opacity=0;
    }
});


// updating progress bar value with music time
audioElement.addEventListener('timeupdate', () => {
    progress = (audioElement.currentTime / audioElement.duration) * 100;
    progressBar.value = progress;
})

// updating music with change to progress bar to move formward and backward in the same song
progressBar.addEventListener("change", () => {
    progress = (progressBar.value * audioElement.duration) / 100;
    audioElement.currentTime = progress;
})
let index = 0;
let n = songs.length;
// moving forward in the song list
playNext.addEventListener("click", () => {
    index += 1;
    if (index >= n) {
        index = 0;
    }
    // audioElement.src=songs[i].filePath;
    // sName.innerText=songs[i].songName;
    if (audioElement.paused) {
        makeAllPlay();
        songPlay[index].classList.remove("fa-circle-play");
        songPlay[index].classList.add("fa-circle-pause");
        audioElement.src = songs[index].filePath;
        sName.innerText = songs[index].songName;
    }
    else {
        makeAllPlay();
        songPlay[index].classList.remove("fa-circle-play");
        songPlay[index].classList.add("fa-circle-pause");
        audioElement.src = songs[index].filePath;
        sName.innerText = songs[index].songName;
        audioElement.play();
    }
})

//moving backward in the song list
playPrev.addEventListener("click", () => {
    index -= 1;
    if (index < 0) {
        index = n - 1;
    }
    if (audioElement.paused) {
        makeAllPlay();
        songPlay[index].classList.remove("fa-circle-play");
        songPlay[index].classList.add("fa-circle-pause");
        audioElement.src = songs[index].filePath;
        sName.innerText = songs[index].songName;
    }
    else {
        makeAllPlay();
        songPlay[index].classList.remove("fa-circle-play");
        songPlay[index].classList.add("fa-circle-pause");
        audioElement.src = songs[index].filePath;
        sName.innerText = songs[index].songName;
        audioElement.play();
    }
});

const makeAllPlay = () => {
    songPlay.forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

songPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            makeAllPlay();
            index=parseInt(e.target.id);
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            audioElement.src=songs[index].filePath;
            audioElement.play();
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            sName.innerText = songs[index].songName;
            gif.style.opacity=1;
        }else{
            makeAllPlay();
            audioElement.pause();
            masterPlay.classList.remove("fa-circle-pause");
            masterPlay.classList.add("fa-circle-play");
            gif.style.opacity=0;
        }
    })
})