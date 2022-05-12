const toggleButton = document.getElementsByClassName('toggle-button')[0]
const topLinks = document.getElementsByClassName('topLinks')[0]
const entireHeader = document.getElementsByClassName('header-inner')[0]


let height;
const sendPostMessage = () => {
  if (height !== entireHeader.offsetHeight) {
    height = entireHeader.offsetHeight;
    window.parent.postMessage({
      frameHeight: height
    }, '*');
    console.log(height) // check the message is being sent correctly
  }
}

function createMenu() {
	topLinks.classList.toggle('active');
	sendPostMessage();
}

toggleButton.addEventListener('click', createMenu);
window.onload = () => sendPostMessage();
window.onresize = () => sendPostMessage();