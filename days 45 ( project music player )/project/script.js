// music
const audio = document.getElementById("main-audio");

// btn icon
const btnPlayIcon = document.getElementsByClassName("btn-play")[0];
const playIcon = document.getElementById("play");
const pauseIcon = document.getElementById("pause");
const backIcon = document.getElementById("back");
const forwardIcon = document.getElementById("forward");
const stopIcon = document.getElementById("stop");


// img cover
const coverImage = document.getElementsByClassName("song-cover")[0];

// timer
const currentTimeMin = document.getElementsByClassName("current-time-min")[0];
const currentTimeSecond = document.getElementsByClassName("current-time-second")[0];
const maxTimeMin = document.getElementsByClassName("max-time-min")[0];
const maxTimeSecond = document.getElementsByClassName("max-time-second")[0];

const progresBar = document.getElementsByClassName("progres-bar")[0];


// start function

function spacePausePlay() {
    let flag = false
    window.onkeyup = function (e) {

        if (e.keyCode == 32 && !flag) {
            musicPlay();
            flag = true;
        }
        else if (e.keyCode == 32 && flag) {
            musicPause();
            flag = false;
        }
    }
}

function musicPlay() {
    audio.play();

    playIcon.classList.toggle("d-none");
    pauseIcon.classList.remove("d-none");

    coverImage.classList.add("animate-rotate");


    btnPlayIcon.classList.add("animate__flipInY");

    setTimeout(() => {
        btnPlayIcon.classList.remove("animate__flipInY");
    }, 500)
}

function musicPause() {
    audio.pause();

    pauseIcon.classList.toggle("d-none");
    playIcon.classList.remove("d-none");

    coverImage.classList.remove("animate-rotate");

    btnPlayIcon.classList.add("animate__flipInY");

    setTimeout(() => {
        btnPlayIcon.classList.remove("animate__flipInY");
    }, 500)
}

function writeMaxTime() {
    window.onload = function () {
        setTimeout(() => {
            let kol = parseInt(audio.duration);
            let min = parseInt(kol / 60);
            let sec = kol % 60;

            if (min < 10) {
                min = `0${min}`;
            }

            maxTimeMin.innerHTML = min;
            maxTimeSecond.innerHTML = sec;

            // console.log(sec);
        }, 200)
    }
}

function timePass() {
    stopIntervalTimePass = setInterval(() => {

        let kol = parseInt(audio.currentTime);
        let min = parseInt(kol / 60);
        let sec = kol % 60;

        if (min < 10) {
            min = `0${min}`;
        }
        if (sec < 10) {
            sec = `0${sec}`;
        }

        currentTimeMin.innerHTML = min;
        currentTimeSecond.innerHTML = sec;

        let passWidth = ((audio.currentTime * 100)) / audio.duration;
        progresPassWidth(passWidth);

    }, 1000);
}

function progresPassWidth(widh) {
    progresBar.style.width = `${widh}%`;
}

// end function






playIcon.addEventListener("click", function () {
    musicPlay();

    timePass();



});

pauseIcon.addEventListener("click", function () {
    musicPause();

    clearInterval(stopIntervalTimePass);
});

spacePausePlay();
writeMaxTime();

backIcon.addEventListener("click", function () {
    audio.currentTime -= 10;
    timePass();

    // console.log(audio.currentTime);
})

forwardIcon.addEventListener("click", function () {
    audio.currentTime += 10;
    timePass();

    // console.log(audio.currentTime);
})

stopIcon.addEventListener("click", function () {
    if (audio.currentTime > 0) {
        musicPause();
    }
    audio.currentTime = 0;
    audio.pause();
})

