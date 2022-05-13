const toggleButton = document.getElementsByClassName('toggle-button')[0]
const topLinks = document.getElementsByClassName('topLinks')[0]
const entireHeader = document.getElementsByClassName('header-inner')[0]


let headerHight;
const sendPostMessage = () => {
  if (headerHight !== entireHeader.offsetHeight) {
    headerHight = entireHeader.offsetHeight;
    window.parent.postMessage({
      headerFrameHeight: headerHight
    }, '*');
    //console.log(headerHight) // check the message is being sent correctly
  }
}

function createMenu() {
	topLinks.classList.toggle('active');
	sendPostMessage();
}

toggleButton.addEventListener('click', createMenu);
window.onload = () => sendPostMessage();
window.onresize = () => sendPostMessage();