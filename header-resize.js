const iframeHeader = document.getElementsByClassName('header-iframe')[0]
const iframeNews = document.getElementById('news-iframe')
const thankYouMessage = document.getElementById('news-thank-you')

window.onmessage = (e) => {
      if (e.data.hasOwnProperty("headerFrameHeight")) {
        iframeHeader.style.height = `${e.data.headerFrameHeight + 30}px`;
      }
      if (e.data.hasOwnProperty("newsFrameHeight")) {
        iframeNews.style.height = `${e.data.newsFrameHeight}px`;
      }
      if (e.data.hasOwnProperty("submitted")) {
        iframeNews.style.display = "none";
        thankYouMessage.style.display = "inline"
      }
    };