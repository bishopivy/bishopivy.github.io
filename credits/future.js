const coverArt = document.getElementById('cover-art')
const lyrics = document.getElementById('lyrics')
const lyricCon = document.getElementById('lyric-container')
const player = document.getElementById('player')
const playB = document.getElementById('play-b')
const pauseB = document.getElementById('pause-b')
const menu = document.getElementById('menu')
const newsletter = document.getElementById('newsletter')
const contact = document.getElementById('contact')
const karaoke = document.getElementById('karaoke')

const mobileBreak = 500;

var loading = true;

var fast = new Audio('fading-fast.mp3');
var hollow = new Audio('hollow.mp3');

songs = [hollow, hollow, hollow, hollow, hollow, hollow, fast];
var currSong = 0;

function minSec(m, s) {return ((60*m) + s);}

// the time is when the corresponding lyrics ENDS
const lyric_times = [
    [
        ["1. Dreaming of the Light<br>swag money", minSec(0, 0.1)],
        ["1. Dreaming of the Light<br>written by cameron bishop crowley<br>produced by Bishop Ivy, Riccardo Schulz<br>mixed by al carlson<br>mastered by john greenham<br>Additional musicians: Bishop Ivy: vocals, piano, omnichord. Stefan Mason: viola", minSec(1, 30)],
    ],
    [
        ["2. Apparition Eyes", minSec(0, 0.1)],
        ["2. Apparition Eyes<br>written by cameron bishop crowley<br>produced by Bishop Ivy<br>mixed by al carlson<br>mastered by john greenham<br>Additional musicians: Bishop Ivy: vocals, drum programming, keyboards, violin, guitars, bass", minSec(1, 30)]
    ],
    [
        ["3. Crimson (Love Without a Subject)", minSec(0, 0.1)],
        ["3. Crimson (Love Without a Subject)<br>written by cameron bishop crowley<br>produced by Bishop Ivy<br>mixed by al carlson<br>mastered by john greenham<br>Additional musicians: Bishop Ivy: vocals, guitars, drum programming, keyboards, glockenspiel, violin, bass, omnichord. Stefan Mason: viola. Benny Benji: additional guitar", minSec(1, 30)]
    ],
    [
        ["4. Ultraviolet", minSec(0, 0.1)],
        ["4. Ultraviolet<br>written by cameron bishop crowley<br>produced by Bishop Ivy<br>mixed by al carlson<br>mastered by john greenham<br>Additional musicians: Bishop Ivy: vocals, keyboards, piano, guitars, omnichord, drum programming, violin. Stefan Mason: viola", minSec(1, 30)]
    ],
    [
        ["5. Hollow", minSec(0, 0.1)],
        ["5. Hollow<br>written by cameron bishop crowley<br>produced by Bishop Ivy<br>mixed by al carlson<br>mastered by john greenham<br>Additional musicians: Bishop Ivy: keyboards, violin, drum programming, piano, glockenspiel", minSec(1, 30)]
    ],
    [
        ["6. silent, idle", minSec(0, 0.1)],
        ["6. silent, idle<br>written by cameron bishop crowley<br>produced by Bishop Ivy<br>mixed by al carlson<br>mastered by john greenham<br>Additional musicians: Bishop Ivy: guitars, keyboards, piano, violin, omnichord, bass. c_robo_: drum programming", minSec(1, 30)]
    ],
    [
        ["7. Fading Fast", minSec(0, 0.1)],
        ["7. Fading Fast<br>written by cameron bishop crowley<br>produced by Bishop Ivy<br>mixed by al carlson<br>mastered by john greenham<br>Additional musicians: Bishop Ivy: keyboards, drum programming, guitars, piano, violin, bass, omnichord, glockenspiel", minSec(1, 30)]
    ]
]

function showEmail() {
    contact.innerHTML = 'contact@bishopivy.com' 
}
function hideEmail() {
    contact.innerHTML = 'contact' 
}

function setLoading () {
    setTimeout(()=>{loading=false;}, 2500);
}

var spinning = true;
function spin() {
    var angle = 360.0;
    var slower = 0;
    id = setInterval(spinHelper, 10) 
    function spinHelper() {
        if (slower < 1) {
            slower += 0.002
        }
        if (spinning) {
            angle -= 0.3 * slower;
            coverArt.style.transform = "rotate(" + angle.toString() + "deg)";
        }  
    }
}

function play() { 
    nonews();
    if (loading && (window.innerWidth > mobileBreak)) {
        return;
    }
    if (songs[currSong].paused || (!(songs[currSong].currentTime))){ // if not playing
        songs[currSong].play();
        spinning = true;
        coverArt.style.animationPlayState = "running";
        lyricCon.style.display = "block";
        menu.style.display = "none";

        player.style.display = "block";
        playB.style.display = "none";
        pauseB.style.display = "inline";
    } else { // PAUSE
        songs[currSong].pause();
        spinning = false;
        coverArt.style.animationPlayState = "paused";
        lyricCon.style.display = "none";
        menu.style.display = "block";

        playB.style.display = "inline";
        pauseB.style.display = "none";

        if (window.innerWidth <= mobileBreak) {
            player.style.display = "none";
        }

    }
}

function rewind() {
    if (songs[currSong].currentTime < 1) {
        songs[currSong].currentTime = 0;
        var playing = (!(songs[currSong].paused));
        songs[currSong].pause();
        currSong -= 1;
        if (currSong < 0) currSong = 6;
        console.log(currSong);
        if (playing) songs[currSong].play();
    } else {
        songs[currSong].currentTime = 0;
    }
}

function fastForward() {
    var playing = (!(songs[currSong].paused));
    songs[currSong].pause();
    songs[currSong].currentTime = 0;
    currSong += 1;
    currSong %= 7;
    console.log(currSong);
    if (playing) songs[currSong].play();
}

function news() {
    newsletter.style.display = "block";
    menu.style.display = "none";   
}

function nonews() {
    newsletter.style.display = "none";
    menu.style.display = "block";  
}

function point() {
    if (!loading) {
        document.body.style.cursor = "pointer";
    }
}

function curs() {
    document.body.style.cursor = "auto";
}

function blinker(txt, counter) {
    [blinkOn, blinkCounter] = counter;
    counter[1] += 1;
    if (blinkCounter % 10 == 0) {
        counter[0] = !blinkOn;
    }
    if (blinkOn) {
        return txt + "&nbsp_";
    } else {
        return txt + "&nbsp&nbsp";
    }
}

function glitchText(txt, j) {
    randTime = 16;
    chars = "ABCFGHIJKLOQSTVWXYZ1234567890@#$%&*"
    res = ""
    for (let i = 0; i < (Math.min(j, txt.length)); i++) {
        if ((i < (j - randTime)) || txt[i] == " ") {
            res += txt[i];
        } else {
            rand = chars[Math.floor(Math.random() * chars.length)];
            res += rand;
        }
    }
    return res;
}

function karaokeBlinker() {
    var counter = [false, 0]
    setInterval((function (){
        karaoke.innerHTML = "&nbsp&nbsp" + blinker("karaoke", counter);}), 
        120);
}

function displayLyrics() {
    id = setInterval(lyricHelper, 30);
    var line = 0;
    var j = 0;
    var txt = "";
    var blinkCounter = [true, 0];
    function lyricHelper() {
        if (songs[currSong].currentTime < 1) {
            line = 0;
        }
        if (line < lyric_times[currSong].length) {
            var pos = songs[currSong].currentTime;
            var lyric_time = lyric_times[currSong][line][1];
            if (pos < lyric_time) {
                txt = glitchText(lyric_times[currSong][line][0], j);
                j += 1;    
            } else { /* delete line */
                line += 1;
                j = 0;
                txt = "";
            }
            lyrics.innerHTML = blinker(txt, blinkCounter);
        } else {
            txt = "";
            clearInterval(id);
        } 
    }
}
displayLyrics();

document.addEventListener('keydown', 
(event) => {
    if (event.key == "ArrowLeft") {rewind();};
    if (event.key == " ") {play();};
});