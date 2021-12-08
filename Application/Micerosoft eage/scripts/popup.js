domReady(() => {
  translateHTML()
  initRateButton()
  donateButton()
})

function domReady (callback) {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('load', callback, false);
  }
}

function translateHTML (dataKey = 'message') {
  for (const $element of document.getElementsByTagName('*')) {
    if ($element.dataset && $element.dataset[dataKey]) {
      $element.innerHTML = chrome.i18n.getMessage($element.dataset[dataKey])
    }
  }
}


function initRateButton() {
  document.querySelector('.teaser').href = `https://microsoftedge.microsoft.com/addons/detail/mytube-for-youtube%E2%84%A2/jfbcahnffhbepgccnkchdacpcabbalde`;
}
function donateButton() {
  document.querySelector('.teaserz').href = `https://www.paypal.com/paypalme/hemantagayen`;
}