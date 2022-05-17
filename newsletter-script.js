const news = document.getElementById("my-form")
const submitButton = document.getElementById("btnSubmit")

let newsHeight;
let submitted;
const sendPostMessage = () => {
    if (newsHeight !== news.offsetHeight) {
        newsHeight = news.offsetHeight;
        window.parent.postMessage({
        newsFrameHeight: newsHeight + 10
        }, '*');
        //console.log(newsHeight) // check the message is being sent correctly
    }
    if (submitted) { 
        window.parent.postMessage ({submitted: true}, '*');
    }
}

function loadThankYou() {
    submitted = true;
    sendPostMessage();
}

window.onload = () => sendPostMessage();
window.onresize = () => sendPostMessage();

news.addEventListener('submit', loadThankYou);