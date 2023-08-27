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
const randTime = 8
const LYRICS = "1. dreaming of the light:0;Dreaming of the light:5.03;I used to find that I\'m:7.79;Only bright in the summer time:12.46;Dreaming of light:20.49;Seeking other eyes:25.24;END:40.52;SONG2. apparition eyes:0;I don\'t buy that you\'re really there :6.04;I know my mind:14.44;I know the tricks it tries:19.55;I can\'t decide if it\'s wrong or right :26.45;To intertwine with apparition eyes :34.94;Could you maybe prove :46.56;You\'re not an illusion :51.28;Don\'t want to see you if I can\'t be near you :57.3;I swear it\'s already dawn :62.07;I wouldn\'t lie except to myself:67.6;When I\'m too deep, replaying memories :76.14;But my eyes are locked:87.75;I\'m locked in your arms :92.5;So tell me please:96.68;Are you a fantasy? :101.72;Could you maybe prove :108.37;You\'re not an illusion :113.02000000000001;Don\'t want to see you if I can\'t be near you :119.0;I swear it\'s already dawn :123.71;END:131.06;SONG3. crimson (love without a subject):0;Driving through the tunnel between my old self and who I\'m becoming:27.49;I turn the wheel to the wall:36.28;Watch the flames fill the hall:40.9;Walking out the other side:45.1;I give one more look at the crash site:48.93;Everything I used to be:54.15;Burning in a limousine:58.5;Maybe it is not that bad, it\'s not that bad:62.73;I might be ready for it:69.84;Love without a subject, if that\'s alright:72.32;I feel like I dived inside my favorite childhood memory highlight:106.75;Anything I ever loaned:115.78999999999999;Letting go into the shore:120.16;Never mind the eyes of Anna:124.43;I\'ll look into a cloud of amber:129.02;Staring at the riverway:133.29;TV static in the waves:137.76;Maybe it is not that bad, it\'s not that bad:141.94;I might be ready for it:149.14;Love without a subject, if that\'s alright:151.52;Thought to call and say:164.2;\'I love you\' but I realized there\'s no one out there:168.06;I could roam around the:177.5;Avenue lights, like I\'m hiding in sight:181.66;And all the passerbys are a sweet lullaby:185.51;And I\'m so in love:189.93;I look around, my world is crimson:207.32;But does it count without a witness?:213.5;END:223.73;SONG4. ultraviolet:0;Everyday I leave the house:9.15;Ride my bike into the town:12.65;For people watching:15.99;Only exist in the ultraviolet light :18.65;When I\'m inside I\'m like a tree falling when no one\'s around :22.93;I can\'t even hear my own sound :31.3;Oh, watch the people roam :38.79;I\'m nothing but a camera on my own :45.12;Oh, watch the people roam :52.46;When I\'m found I\'ll be made out of stone :59.67;My memories I see them fade:67.24;Watch them drain like trailing wakes:70.85;Oh, didn\'t know I could leave myself like the leaves in autumn time :74.28;I\'m just left with my inner monologue:81.17;The only voice I hear:86.7;Maybe it\'ll slowly disappear :89.66;Oh, watch the people roam :97.0;I\'m nothing but a camera on my own :103.42;Oh, watch the people roam :110.72999999999999;When I\'m found I\'ll be made out of stone :118.08;Surrounded by flashing:125.27;And laughing from a stranger\'s voice:128.75;I\'m bounded by doubting :132.16;I\'m better off a shadow:135.55;No violence:139.06;Just silence:140.7;I\'ll come around when I have the chance:142.45;No violence:145.91;Just silence:147.62;I\'ll come around when I have the chance :149.27;Surrounded by flashing :152.74;And laughing from a stranger\'s voice:156.1;I\'m bounded by doubting :159.53;I\'m better off a shadow:163.03;No violence:166.5;Just silence:168.2;I\'ll come around when I have the chance:169.89;No violence:173.32;Just silence:174.94;I\'ll come around when I have the chance :176.68;END:181.13;SONG5. hollow:0;I\'ll be just fine:4.7;I can sleep with my headphones through the night:6.76;I\'ll be just fine:10.98;I don\'t care that it\'s not:14.2;Your voice humming soft:17.37;Flutter from your heart:20.45;Would serve as my hearth:23.64;I don\'t care what you do:29.01;I don\'t have to be two:32.71;But I\'m:42.36;Haunted by it still:45.45;The hollow that you would fill:48.23;Almost like a film:51.23;Thoughts of all our good thrills:54.07;Any time I\'m driving:56.94;I\'m reminded you were riding \'side me:59.12;Burning on my own now:62.75;I\'ll be okay:80.5;Long as I am away from the painted park:82.63;I\'ll be okay, save I\'m reminded of:86.25;Lying at the pond:92.38;Talking \'bout your dog:95.27000000000001;Then I might be crushed:98.19;I don\'t care what you do:102.75;I don\'t have to be two:105.77000000000001;But—:113.35;Haunted by it still:114.84;The hollow that you would fill:117.58;Almost like a film:120.59;Thoughts of all our good thrills:123.5;Any time I\'m driving:126.37;I\'m reminded you were riding \'side me:128.52;Burning on my own now:132.15;Is it just my fantasy?:138.25;Are we both in reverie?:141.2;Can I call you \'fore I sleep?:144.07999999999998;Is it just a memory?:146.98;If it\'s the last time I\'ll:149.8;Dream \'til I time travel:152.73;If ever change your mind, I\'ll save a seat:156.01;Haunted by it still :161.05;The hollow that you would fill:163.81;Almost like a film:166.75;Thoughts of all our good thrills :169.71;Any time I\'m driving :172.59;I\'m reminded you were riding \'side me:174.81;Burning on my own now:178.42000000000002;END:184.98;SONG6. silent, idle:0;I\'ve been only silent:2.08;I\'ve been only idle:4.31;I can only hear my AC humming:7.58;Since I\'ve isolated:14.05;I\'ve become a cloud, somehow :17.18;I\'ve hid alone in my hollow so long :30.14;And if I\'m honest I miss, oh :36.54;Every time we danced to each other\'s light :40.91;I\'m only my eyes now and not my mind :47.49;I\'m never really out there:53.65;I\'m never really out there:60.16;I\'m never really out there:66.57;Never really out there:73.33;So how could I really know what :82.1;Really know what:88.42;Really know what :91.67;I am for:100.50999999999999;END:111.41;SONG7. fading fast:0;Save me:3.2;Hold me down:7.2;Fading fast into the dust:9.5;Always wanted to run to the hills:16.2;If I have to exist, then i\'ll hide in the mist:19.5;And cut the telephone wire:23.9;Better on my own I thought:28.7;I would dream of a beach house, solo at sea:32.4;But in reality, I just break at the seams:36.5;In my dark apartment:40.9;That no one ever sees:44.8;But won\'t you:51.4;Save me:54.6;Hold me down:57;Fading fast into the dust:58.9;Blow into the wind:62.9;Just a memory to my kin:66.7;I can only talk to the walls:71.1;Even then, the words dissolve:75.4;How was I so blissfully brave:80.5;I would gleefully dive to another\'s embrace:83.7;So oblivious to where it\'d go:88.1;Never thought we\'d turn to smoke:93;But that\'s in the past now, and I go on dates:96.7;I try not to notice her nails, the paint:100.7;Are baby blue, just like yours were:108.5;The memories just flood:114.4;But won\'t you:119;Save me:121;Hold me down:123.4;Fading fast into the dust:125.3;Blow into the wind:129.5;Just a memory to my kin:133.3;I can only talk to the walls:137.5;Even then, the words dissolve:141.9;Gotta get back to the outside:147.4;I might be blinded by it:151.2;My eyes are used to twilight:153.7;Gotta get back to the outside:156.2;Really don\'t know how I got this lost:170.5;I watch my friendships fade into fog:174.1;Maybe we\'re both lone ghosts just waiting round:178.7;END:192"

const mobileBreak = 500;

var loading = true;

var dream = new Audio('music/dreaming of the light.mp3');
var apparition = new Audio('music/apparition eyes.mp3');
var crimson = new Audio('music/crimson (love without a subject).mp3');
var ultra = new Audio('music/ultraviolet.mp3');
var hollow = new Audio('music/hollow.mp3');
var silent = new Audio('music/silent, idle.mp3');
var fast = new Audio('music/fading fast.mp3');


songs = [dream, apparition, crimson, ultra, hollow, silent, fast];
var currSong = 0;

function minSec(m, s) {return ((60*m) + s);}

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
    var paused = songs[currSong].paused;
    if (songs[currSong].currentTime < 1) {
        songs[currSong].currentTime = 0;
        songs[currSong].pause();
        currSong -= 1;
        if (currSong < 0) currSong = 6;
    } else {
        songs[currSong].currentTime = 0;
    }
    if (paused) {
        play()
    } else {
        songs[currSong].play();
    }
}

function fastForward() {
    var paused = songs[currSong].paused
    songs[currSong].pause();
    songs[currSong].currentTime = 0;
    currSong += 1;
    currSong %= 7;
    if (paused){
        play()
    } else {
        songs[currSong].play();
    }

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
        return txt + "_";
    } else {
        return txt + "&nbsp";
    }
}

function glitchText(txt, j) {
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
        karaoke.innerHTML = "&nbsp" + blinker("karaoke", counter);}), 
        120);
}

function displayLyrics() {
    id = setInterval(lyricHelper, 60);
    var line = 0;
    var j = 0;
    var txt = "";
    var blinkCounter = [true, 0];

    song_txt = LYRICS.split("SONG")
    
    function lyricHelper() {
        all_lines = song_txt[currSong].split(";")

        if (songs[currSong].currentTime < 1) {
            line = 0;
        }
        if (line < all_lines.length - 1) {
            var lyric_text = all_lines[line].split(":")[0].trim();
            var lyric_time = parseFloat(all_lines[line+1].split(":")[1]);
            var max_j =  lyric_text.length+randTime
            var pos = songs[currSong].currentTime;
            if (pos < lyric_time) {
                txt = glitchText(lyric_text, j);
                j = Math.min(j+1, max_j)
            } else { /* delete line */
                line += 1;
                if (line < all_lines.length - 2) {
                    txt="";
                    j = 0;
                }
            }
            lyrics.innerHTML = j < lyric_text.length
                ? txt : blinker(txt, blinkCounter)
        } else {
            var lyric_text = all_lines[all_lines.length - 3].split(":")[0].trim();
            if (j > 0) {
                j -= 1;
            }
            txt = glitchText(lyric_text, j);
            lyrics.innerHTML = blinker(txt, blinkCounter)
        }
        if (songs[currSong].currentTime == songs[currSong].duration){
            fastForward();
        }
    }
}
displayLyrics();

document.addEventListener('keydown', 
(event) => {
    if (event.key == "ArrowLeft") {rewind();};
    if (event.key == " ") {play();};
});