const iframeHeader = document.getElementsByClassName('header-iframe')[0]

window.onmessage = (e) => {
      if (e.data.hasOwnProperty("frameHeight")) {
        iframeHeader.style.height = `${e.data.frameHeight + 30}px`;
      }
    };