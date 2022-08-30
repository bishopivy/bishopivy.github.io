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
        ["1. Dreaming of the Light", minSec(0, 5)]
    ],
    [
        ["2. Apparition Eyes", minSec(0, 5)]
    ],
    [
        ["3. Crimson (Love Without a Subject)", minSec(0, 5)]
    ],
    [
        ["4. Ultraviolet", minSec(0, 5)]
    ],
    [
        ["5. Hollow", minSec(0, 3.4)],
        ["I'll be just fine", minSec(0, 5.5)],
        ["I can sleep with my headphones through the night", minSec(0, 9.5)],
        ["I'll be just fine", minSec(0, 12.8)],
        ["I don't care that it's not", minSec(0, 15.9)],
        ["your voice humming soft", minSec(0, 19)],
        ["flutter from your heart", minSec(0, 22.3)],
        ["Would serve as my hearth", minSec(0, 27.6)],
        ["I don't care", minSec(0, 29.5)],
        ["What you do", minSec(0, 31.3)],
        ["I don't have to be two", minSec(0, 41)],
        ["But I'm", minSec(0, 43.9)],
        ["Haunted by it still", minSec(0, 46.9)],
        ["The hollow that you would fill", minSec(0, 49.8)],
        ["Almost like a film", minSec(0, 52.7)],
        ["Thoughts of all our good thrills", minSec(0, 55.6)],
        ["Anytime I'm driving, I'm reminded you were riding 'side me", minSec(1,1.3)],
        ["Burning on my own now", minSec(1,19)],
        ["I'll be okay", minSec(1,21)],
        ["Long as I am away from the painted park", minSec(1,24.8)],
        ["I'll be okay, save I'm reminded of", minSec(1,30.8)],
        ["Lying at the pond", minSec(1,33.8)],
        ["Talking about your dog", minSec(1,36.7)],
        ["Then I might be crushed", minSec(1,41.4)],
        ["I don't care what you do", minSec(1,44.4)],
        ["I don't have to be two", minSec(1,52)],
        ["But", minSec(1,52.7)],
        ["", minSec(1,53.5)],
        ["Haunted by it still", minSec(1,56.2)],
        ["The hollow that you would fill", minSec(1,59.1)],
        ["Almost like a film", minSec(2,2.2)],
        ["Thoughts of all our good thrills", minSec(2,5)],
        ["Anytime I'm driving", minSec(2,7.1)],
        ["I'm reminded you were riding 'side me", minSec(2,10.8)],
        ["Burning on my own now", minSec(2,16.8)],
        ["Is it just my fantasy", minSec(2,19.7)],
        ["Are we both in reverie", minSec(2,22.6)],
        ["Can I call you before I sleep", minSec(2,25.5)],
        ["Is it just a memory", minSec(2,28.4)],
        ["If it's the last time I'll", minSec(2,31.3)],
        ["Dream til I time travel", minSec(2,34.6)],
        ["If you ever change your mind, I'll save a seat", minSec(2,39.7)],
        ["Haunted by it still", minSec(2,42.4)],
        ["The hollow that you would fill", minSec(2,45.6)],
        ["Almost like a film", minSec(2,48.4)],
        ["Thoughts of all our good thrills", minSec(2,51.3)],
        ["Anytime I'm driving", minSec(2,53.5)],
        ["I'm reminded you were riding 'side me", minSec(2,57)],
        ["Burning on my own now", minSec(3,26)]
    ],
    [
        ["6. I'm nothing but a camera on my own", minSec(0, 5)]
    ],
    [
        ["7. Fading Fast", 3.2],
        ["save me", 7.2],
        ["hold me down", 9.5],
        ["fading fast into the dust", 16.2],
        ["always wanted to run to the hills", 19.5],
        ["if i have to exist, then i'll hide in the mist", 23.9],
        ["and cut the telephone wire", 28.7],
        ["better on my own i thought", 32.4],
        ["i would dream of a beach house, solo at sea", 36.5],
        ["but in reality, i just break at the seams", 40.9],
        ["in my dark apartment", 44.8],
        ["that no one ever sees", 51.4],
        ["but won't you", 54.6],
        ["save me", 57],
        ["hold me down", 58.9],
        ["fading fast into the dust", ((1*60)+2.9)],
        ["blow into the wind", ((1*60)+6.7)],
        ["just a memory to my kin", ((1*60)+11.1)],
        ["i can only talk to the walls", ((1*60)+15.4)],
        ["even then, the words dissolve", ((1*60)+20.5)],
        ["how was i so blissfully brave", ((1*60)+23.7)],
        ["i would gleefully dive to another's embrace", ((1*60)+28.1)],
        ["so oblivious to where it'd go", ((1*60)+33)],
        ["never thought we'd turn to smoke", ((1*60)+36.7)],
        ["but that's in the past now, and i go on dates", ((1*60)+40.7)],
        ["i try not to notice her nails, the paint", ((1*60)+48.5)],
        ["are baby blue, just like yours were", ((1*60)+54.4)],
        ["the memories just flood", ((1*60)+59)],
        ["but won't you", ((2*60)+1)],
        ["save me", ((2*60)+3.4)],
        ["hold me down", ((2*60)+5.3)],
        ["fading fast into the dust", ((2*60)+9.5)],
        ["blow into the wind", ((2*60)+13.3)],
        ["just a memory to my kin", ((2*60)+17.5)],
        ["i can only talk to the walls", ((2*60)+21.9)],
        ["even then, the words dissolve", ((2*60)+27.4)],
        ["gotta get back to the outside", ((2*60)+31.2)],
        ["i might be blinded by it<br>my eyes are used to twilight", ((2*60)+36.2)],
        ["gotta get back to the outside", ((2*60)+50.5)],
        ["really don't know how i got this lost", ((2*60)+54.1)],
        ["i watch my friendships fade into fog", ((2*60)+58.7)],
        ["maybe we're both lone ghosts just waiting round", ((3*60)+58)]
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
    if (blinkCounter % 5 == 0) {
        counter[0] = !blinkOn;
    }
    if (blinkOn) {
        return txt + "&nbsp_";
    } else {
        return txt + "&nbsp&nbsp";
    }
}

function glitchText(txt, j) {
    randTime = 8;
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
    id = setInterval(lyricHelper, 60);
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