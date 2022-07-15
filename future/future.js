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

const fastLyrics = [
    ["", 3.2],
    ["save me", 7],
    ["hold me down", 9],
    ["fading fast into the dust", 16],
    ["always wanted to run to the hills", 19.5],
    ["if i have to exist, then i'll hide in the mist", 23.9],
    ["and cut the telephone wire", 28.7],
    ["better on my own i thought", 32.2],
    ["i would dream of a beach house, solo at sea", 36],
    ["but in reality, i just break at the seams", 40.9],
    ["in my dark apartment", 44.8],
    ["that no one ever sees", 51.3],
    ["but won't you", 54.3],
    ["save me", 57],
    ["hold me down", 58.6],
    ["fading fast into the dust", ((1*60)+2.9)],
    ["blow into the wind", ((1*60)+6.7)],
    ["just a memory to my kin", ((1*60)+11.1)],
    ["i can only talk to the walls", ((1*60)+15.4)],
    ["even then, the words dissolve", ((1*60)+20.1)],
    ["how was i so blissfully brave", ((1*60)+23.6)],
    ["i would gleefully dive to another's embrace", ((1*60)+28.1)],
    ["so oblivious to where it'd go", ((1*60)+33)],
    ["never thought we'd turn to smoke", ((1*60)+36.7)],
    ["but that's in the past now, and i go on dates", ((1*60)+40.7)],
    ["i try not to notice her nails, the paint", ((1*60)+47.5)],
    ["are baby blue, just like yours were", ((1*60)+54.2)],
    ["the memories just flood", ((1*60)+59)],
    ["but won't you", ((2*60)+1)],
    ["save me", ((2*60)+3.4)],
    ["hold me down", ((2*60)+5.3)],
    ["fading fast into the dust", ((2*60)+9.5)],
    ["blow into the wind", ((2*60)+13.3)],
    ["just a memory to my kin", ((2*60)+17.5)],
    ["i can only talk to the walls", ((2*60)+21.7)],
    ["even then, the words dissolve", ((2*60)+27.1)],
    ["gotta get back to the outside", ((2*60)+31.2)],
    ["i might be blinded by it<br>my eyes are used to twilight", ((2*60)+36.2)],
    ["gotta get back to the outside", ((2*60)+50)],
    ["really don't know how i got this lost", ((2*60)+53.9)],
    ["i watch my friendships fade into fog", ((2*60)+58.2)],
    ["maybe we're both lone ghosts just waiting round", ((3*60)+58)],
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
    if (!(fast.currentTime)) {
        displayLyrics();
    }
    if (fast.paused || (!(fast.currentTime))){
        fast.play();
        spinning = true;
        coverArt.style.animationPlayState = "running";
        lyricCon.style.display = "block";
        menu.style.display = "none";

        player.style.display = "block";
        playB.style.display = "none";
        pauseB.style.display = "inline";
    } else {
        fast.pause();
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
    fast.currentTime = 0;
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
    if (blinkCounter % 20 == 0) {
        counter[0] = !blinkOn;
    }
    if (blinkOn) {
        return txt + "&nbsp_";
    } else {
        return txt + "&nbsp&nbsp";
    }
}

function glitchText(txt, j) {
    randTime = 6;
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&*"
    res = ""
    for (let i = 0; i < (Math.min(j, txt.length)); i++) {
        if ((i < (j - randTime)) || txt[i] == " ") {
            res += txt[i]
        } else {
            rand = chars[Math.floor(Math.random() * chars.length)];
            res += rand
        }
    }
    return res;
}

function karaokeBlinker() {
    var counter = [false, 0]
    setInterval((function (){
        karaoke.innerHTML = "&nbsp&nbsp" + blinker("karaoke", counter);}), 
        30);
}

function displayLyrics() {
    id = setInterval(lyricHelper, 15)
    var i = 0
    var j = 0
    var txt = ""
    var counter = [true, 0]
    function lyricHelper() {
        if (fast.currentTime < 1) {
            i = 0;
        }
        if (i < fastLyrics.length) {
            var pos = fast.currentTime;
            var lyric_time = fastLyrics[i][1];
            if (pos < lyric_time) {
                if (counter[1] % 4 == 0) {
                    txt = glitchText(fastLyrics[i][0], j);
                    j += 1;
                }    
            } else { /* delete line */
                if (txt != "") {
                    txt = txt.slice(0, -1);
                } else {
                    i += 1;
                    j = 0;
                }
            }
            lyrics.innerHTML = blinker(txt, counter)
        } else {
            txt = "";
            clearInterval(id);
        }
        
    }
}

