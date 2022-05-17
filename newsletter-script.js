const news = document.getElementById("my-form")
const submitButton = document.getElementById("btnSubmit")

let newsHeight;
let submitted;
const sendPostMessage = () => {
    if (newsHeight !== news.offsetHeight) {
        newsHeight = news.offsetHeight;
        window.parent.postMessage({
        newsFrameHeight: newsHeight
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

function processForm(event) {
    let valid = false;
    const fName = (news.elements['First Name']).value;
    const lName = (news.elements['Last Name']).value;
    const email = (news.elements['Email']).value;
    const isNameValid = (name) => {
        if (name.length >= 40) { 
            return false;
        } else {
            const re = new RegExp("(^(?!.*=).*$)");
            return re.test(name);
        }
    }
    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const noeq = new RegExp("(^(?!.*=).*$)");
        return re.test(email) && noeq.test(email);
    };

    if (isNameValid(fName) && isNameValid(lName) && isEmailValid(email)) {
        valid = true;
    }

    if (valid) {
       loadThankYou();
    } else {
        event.preventDefault();
    }
    
}

window.onload = () => sendPostMessage();
window.onresize = () => sendPostMessage();

news.addEventListener('submit', processForm);