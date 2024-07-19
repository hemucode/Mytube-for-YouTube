/* © Copyright 2024, Hemanta Gayen, All rights reserved. */
/*!
 *  Mytube for youtube by @codehemu -https://github.com/hemucode/Mytube-for-YouTube
 *  License - https://github.com/hemucode/Mytube-for-YouTube/license ( CSS: MIT License)
 */

const WEBSTORE = `https://microsoftedge.microsoft.com/addons/detail/${chrome.runtime.id}`;
const WEBSTORE_REVIEW = `${WEBSTORE}`;

const LightenDarkenColor = (col, amt) => {
  try {
    col = parseInt(col, 16);
    return "#"+(((col & 0x0000FF) + amt) | ((((col >> 8) & 0x00FF) + amt) << 8) | (((col >> 16) + amt) << 16)).toString(16);
  } catch (e) {
    return col;
  }
}

const isIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};


async function myTubeForYoutube(){
  var colorPromise = new Promise(function(resolve, reject){
          chrome.storage.sync.get({
            "color1": "#08090c",
            "color2": "#2cf2d1",
            "color3": "#49f53d",
            "color4": "#671bf3"
          }, function(options){
              resolve(options);
          })
  });

  const colorOptions = await colorPromise;
  const color1 = colorOptions.color1;
  const color2 = colorOptions.color2;
  const color3 = colorOptions.color3;
  const color4 = colorOptions.color4;
  const color5 = LightenDarkenColor(color1.substring(1), 10);
  const color6 = LightenDarkenColor(color1.substring(1), 15);
  const color7 = LightenDarkenColor(color1.substring(1), 12);


  styleCode = `
  html,
  html[dark]{
    scrollbar-color: ${color2} ${color5} !important
  }
  ytd-masthead {
    background:${color1} !important;
  }

  yt-icon {
    color: ${color4} !important;
  }

  .ytd-searchbox:before,
  .ytp-swatch-background-color:before {
    content: '';
    position: absolute;
    top: -5px;
    bottom: -5px;
    right: -5px;
    left: -5px;
    z-index: -1;
    background: linear-gradient(90deg, ${color4}, ${color3}, #1996d7, ${color2});
    background-size: 400%;
    filter: blur(30px);
    opacity: 0;
    transition: 0.5s;
  }

  .ytd-searchbox:hover:before {
    filter: blur(30px);
    opacity: 1;
    animation: animate 8s linear infinite;
  }

  .ytd-searchbox:hover {
    animation: animate 8s linear infinite;
  }

  .ytp-swatch-background-color:before {
    filter: blur(5px);
    opacity: 1;
    animation: animate 8s linear infinite;
  }

  .ytp-swatch-background-color {
    animation: animate 8s linear infinite;
    background: ${color2} !important;
  }

  #player-container-outer {
    box-shadow: 0px 0px 20px 4px ${color2};
    border: 2px solid ${color2};
    border-radius: 12px !important;
  }

  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }

  .yt-spec-button-shape-next__button-text-content,
  .yt-core-attributed-string--link-inherit-color {
    color: ${color3} !important;
  }

  .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
    color: ${color4} !important;
  }

  html {
    -ytd-searchbox-border-color: ${color5} !important;
    --ytd-searchbox-legacy-border-color: ${color2} !important;
    --ytd-searchbox-legacy-border-shadow-color: ${color1} !important;
    --ytd-searchbox-legacy-button-color: ${color5} !important;
    --ytd-searchbox-legacy-button-border-color: ${color2} !important;
    --ytd-searchbox-legacy-button-focus-color: #e9e9e9;
    --ytd-searchbox-legacy-button-hover-color: #f0f0f0;
    --ytd-searchbox-legacy-button-hover-border-color: #c6c6c6;
    --ytd-searchbox-legacy-button-icon-color: #333;
    --ytd-searchbox-text-color: ${color3} !important;
    --ytd-searchbox-background: ${color5} !important;
    --yt-spec-text-primary: ${color2} !important;
    --yt-spec-text-secondary: ${color3} !important;
    --yt-spec-text-primary-inverse: #fff !important;
    --yt-spec-base-background: ${color5} !important;
    --yt-spec-raised-background: #212121 !important;
    --yt-spec-menu-background: #282828 !important;
    --yt-spec-inverted-background: #f1f1f1 !important;
    --yt-spec-additive-background: rgba(255, 255, 255, 0.1) !important;
    --yt-spec-outline: rgba(255, 255, 255, 0.2) !important;
    --yt-spec-shadow: rgba(0, 0, 0, 0.25) !important;
    --yt-spec-text-disabled: #717171 !important;
    --yt-spec-text-primary-inverse: #030303 !important;
    --yt-spec-call-to-action: #3ea6ff !important;
    --yt-spec-call-to-action-inverse: #065fd4 !important;
    --yt-spec-suggested-action: #263850 !important;
    --yt-spec-suggested-action-inverse: #def1ff !important;
    --yt-spec-icon-active-other: #fff !important;
    --yt-spec-icon-inactive: #909090 !important;
    --yt-spec-icon-disabled: #606060 !important;
    --yt-spec-button-chip-background-hover: rgba(255, 255, 255, 0.2) !important;
    --yt-spec-touch-response: #fff !important;
    --yt-spec-touch-response-inverse: #000 !important;
    --yt-spec-brand-icon-active: ${color3} !important;
    --yt-spec-brand-icon-inactive: ${color4} !important;
    --yt-spec-brand-button-background: #c00 !important;
    --yt-spec-brand-link-text: #ff4e45 !important;
    --yt-spec-wordmark-text: #fff !important;
    --yt-spec-error-indicator: #ff8983 !important;
    --yt-spec-themed-blue: #3ea6ff !important;
    --yt-spec-themed-green: #2ba640 !important;
    --yt-spec-ad-indicator: #00aaa7;
    --yt-spec-themed-overlay-background: rgba(0, 0, 0, 0.8) !important;
    --yt-spec-commerce-badge-background: #002d08 !important;
    --yt-spec-static-brand-red: #f00 !important;
    --yt-spec-static-brand-white: #fff !important;
    --yt-spec-static-brand-black: #212121 !important;
    --yt-spec-static-clear-color: rgba(255, 255, 255, 0) !important;
    --yt-spec-static-clear-black: rgba(0, 0, 0, 0) !important;
    --yt-spec-static-ad-yellow: #fbc02d !important;
    --yt-spec-static-grey: #606060 !important;
    --yt-spec-static-overlay-background-solid: #000 !important;
    --yt-spec-static-overlay-background-heavy: rgba(0, 0, 0, 0.8) !important;
    --yt-spec-static-overlay-background-medium: rgba(0, 0, 0, 0.6) !important;
    --yt-spec-static-overlay-background-medium-light: rgba(0, 0, 0, 0.3) !important;
    --yt-spec-static-overlay-background-light: rgba(0, 0, 0, 0.1) !important;
    --yt-spec-static-overlay-text-primary: #fff !important;
    --yt-spec-static-overlay-text-primary-inverse: #030303 !important;
    --yt-spec-static-overlay-text-secondary: rgba(255, 255, 255, 0.7) !important;
    --yt-spec-static-overlay-text-disabled: rgba(255, 255, 255, 0.3) !important;
    --yt-spec-static-overlay-call-to-action: #3ea6ff !important;
    --yt-spec-static-overlay-icon-active-other: #fff !important;
    --yt-spec-static-overlay-icon-inactive: rgba(255, 255, 255, 0.7) !important;
    --yt-spec-static-overlay-icon-disabled: rgba(255, 255, 255, 0.3) !important;
    --yt-spec-static-overlay-button-primary: rgba(255, 255, 255, 0.3) !important;
    --yt-spec-static-overlay-button-secondary: rgba(255, 255, 255, 0.1) !important;
    --yt-spec-static-overlay-touch-response: #fff !important;
    --yt-spec-static-overlay-touch-response-inverse: #000 !important;
    --yt-spec-static-overlay-background-brand: rgba(204, 0, 0, 0.9) !important;
    --yt-spec-assistive-feed-themed-gradient-1: #005446 !important;
    --yt-spec-assistive-feed-themed-gradient-2: #39003f !important;
    --yt-spec-assistive-feed-themed-gradient-3: #590000 !important;
    --yt-spec-discover-red: #ff4e45 !important;
    --yt-spec-discover-green: #a4ffa4 !important;
    --yt-spec-discover-blue: #6ea2ff !important;
    --yt-spec-brand-background-solid: #212121 !important;
    --yt-spec-brand-background-primary: ${color1} !important;
    --yt-spec-brand-background-secondary: ${color1} !important;
    --yt-spec-general-background-a: ${color6} !important;
    --yt-spec-general-background-b: ${color7} !important;
    --yt-spec-general-background-c: ${color5} !important;
    --yt-lightsource-section4-color: ${color5} !important;
    --yt-spec-error-background: #f9f9f9 !important;
    --yt-spec-10-percent-layer: ${color2} !important;
    --yt-spec-snackbar-background: #030303 !important;
    --yt-spec-snackbar-background-updated: #f9f9f9 !important;
    --yt-spec-badge-chip-background: rgba(255, 255, 255, 0.1) !important;
    --yt-spec-verified-badge-background: rgba(255, 255, 255, 0.25) !important;
    --yt-spec-call-to-action-faded: rgba(62, 166, 255, 0.3) !important;
    --yt-spec-call-to-action-hover: #6ebcff !important;
    --yt-spec-brand-button-background-hover: #990412 !important;
    --yt-spec-brand-link-text-faded: rgba(255, 78, 69, 0.3) !important;
    --yt-spec-filled-button-focus-outline: rgba(255, 255, 255, 0.7) !important;
    --yt-spec-static-overlay-button-hover: rgba(255, 255, 255, 0.5) !important;
    --yt-spec-mono-filled-hover: #d9d9d9 !important;
    --yt-spec-commerce-filled-hover: #65b8ff !important;
    --yt-spec-mono-tonal-hover: rgba(255, 255, 255, 0.2) !important;
    --yt-spec-commerce-tonal-hover: #515561 !important;
    --yt-spec-static-overlay-filled-hover: #e6e6e6 !important;
    --yt-spec-static-overlay-tonal-hover: rgba(255, 255, 255, 0.2) !important;
    --yt-spec-paper-tab-ink: rgba(255, 255, 255, 0.3) !important;
    --yt-spec-filled-button-text: #030303 !important;
    --yt-spec-selected-nav-text: #fff !important;
  }

  #cinematics-container {
    display: none !important;
    visibility: hidden !important;
  }`;

  stylesheetID = document.querySelector("#mytube");
  if (stylesheetID) {stylesheetID.innerText = styleCode;}
}

class myStyle {
  start() {
    let headElement = document.head || document.getElementsByTagName("head")[0];
    if (!headElement) return void setTimeout((() => {
      new myStyle().start();
    }), 100);

    if (!document.getElementById("mytube")) {
      let styleElement = document.createElement("style");
      styleElement.id = "mytube",
      headElement.appendChild(styleElement);
      myTubeForYoutube(); 
    }

  }
}


class CosmeticFilter {
  adBlockSelectors = "";

  constructor(adBlockSelectors) {
    this.adBlockSelectors = adBlockSelectors;
  }

  start() {
    let headElement = document.head || document.getElementsByTagName("head")[0];
    let bodyElement = document.body || document.getElementsByTagName("body")[0];

    if (!headElement || !bodyElement) return void setTimeout((() => {
      new CosmeticFilter(this.adBlockSelectors).start();
    }), 100);

    const newCssContent = `
    .yt-ext-hidden {
      display: none;
    }

    #yt-ext-info-bar {
      position: fixed;
      bottom: 20px;
      left: 20px;
      height: auto;
      border: 1px solid #ececec;
      background: red;
      z-index: 100000;
      padding: 5px 12px;
      color: white;
      font-size: 14px;
      border-radius: 4px;
    }`;

    if (!document.getElementById("yt-extension-style")) {
      let styleElement = document.createElement("style");
      styleElement.id = "yt-extension-style",
      styleElement.appendChild(document.createTextNode(newCssContent)), 
      headElement.appendChild(styleElement);
    }

    if (!document.getElementById("yt-ext-info-bar")) {
        var divEl = document.createElement("div");
        divEl.id = "yt-ext-info-bar",
        divEl.innerText = "MyTube Skipping ads...", 
        divEl.classList.add("yt-ext-hidden"), 
        bodyElement.appendChild(divEl);
    }


    if (!this.adBlockSelectors) {
      return;
    }

    if (!document.getElementById("adBlock-Selectors")) {
      const cssContent = `${this.adBlockSelectors} { display: none !important; visibility: hidden !important;}`;
      const styleEl = document.createElement("style");
      styleEl.id = "adBlock-Selectors",
      styleEl.textContent = cssContent,
      headElement.appendChild(styleEl);
    }

  }

}

class SkipVideoAds {

  constructor(isPlayerContainer, 
    isSkipButtonContainer, 
    isSkipAdsEnabled, 
    lessCurrentTime,
    lessDurationTime, 
    minusDurationTime,
    isSpeedAdsEnabled, 
    videoSpeed) {
    this.isPlayerContainer = isPlayerContainer;
    this.isSkipButtonContainer = isSkipButtonContainer;
    this.lessCurrentTime = lessCurrentTime;
    this.lessDurationTime = lessDurationTime;
    this.minusDurationTime = minusDurationTime;
    this.isSpeedAdsEnabled = isSpeedAdsEnabled ;
    this.videoSpeed = videoSpeed;
    this.isSkipAdsEnabled = isSkipAdsEnabled;

  }

  start() {
    let isPlayerContainer = this.isPlayerContainer,
    isSkipButtonContainer = this.isSkipButtonContainer,
    lessCurrentTime = this.lessCurrentTime,
    lessDurationTime = this.lessDurationTime,
    minusDurationTime = this.minusDurationTime,
    isSpeedAdsEnabled = this.isSpeedAdsEnabled,
    videoSpeed = this.videoSpeed,
    isSkipAds = this.isSkipAdsEnabled,
    tigger = 0;
  
    clearInterval(tigger),
    tigger = setInterval(() => {
      let playerContainer = document.querySelector(isPlayerContainer),
      //skipButton = document.querySelector(isSkipButtonContainer),
      tigger = document.getElementById("yt-ext-info-bar");
      //errorScreen = document.querySelector("#error-screen");
      try{
        playerContainer ? (
        tigger && tigger.classList.remove("yt-ext-hidden"),
        playerContainer.volume = 0, 
        isSpeedAdsEnabled &&
        (playerContainer.playbackRate = videoSpeed),
        isSkipAds &&
        playerContainer.currentTime > lessCurrentTime && 
        playerContainer.currentTime < lessCurrentTime * 3 && 
        playerContainer.currentTime < playerContainer.duration && 
        playerContainer.duration > lessDurationTime && 
        (playerContainer.currentTime = playerContainer.duration - minusDurationTime)
        ) : tigger && tigger.classList.add("yt-ext-hidden")
      }catch (e) {
        console.error(e);
      }
    }, 550)

  }
}


class Dialog {
  isUpdatePopupEnabled = "";
  isRateUsPopupEnabled = "";
  isMessage = "";

  constructor(updateVersionEdge,
    isRateUsPopupEnabled, 
    nextRatingRequest, 
    isMessage, 
    isMessageURL) {
      this.nextRatingRequest = nextRatingRequest;
      this.updateVersionEdge = updateVersionEdge;
      this.isRateUsPopupEnabled = isRateUsPopupEnabled;
      this.isMessage = isMessage;
      this.isMessageURL = isMessageURL;
  }

  start() {
    if (isIframe()) {
      return;
    }

    try {
      setTimeout(() => {
        if (this.updateVersionEdge > chrome.runtime.getManifest().version) {
          this.createDialogPopup(`New Version ${this.updateVersionEdge} Available Please Update..😉`, WEBSTORE);
        }else{
          if (this.isRateUsPopupEnabled && this.nextRatingRequest) {
            const webstoreLink = this.createDialogPopup(chrome.i18n.getMessage("rate") , WEBSTORE_REVIEW);
            webstoreLink.addEventListener("click", () => {
              chrome.storage.sync.set({
                nextRatingRequest: false
              });
            });
          }else{
            if (!this.isMessage=="") {
              this.createDialogPopup(this.isMessage, WEBSTORE);
            }
          }
        }
      },2000);
    }catch(err) {
      console.log(err.message);
    }

  }

  appendPopup(dialog) {
    domReady(() => {
      document.body.appendChild(dialog);
    });
  }

  handlePopupClose(dialog) {
    document.body.removeChild(dialog);
  }

  createDialogPopup(text, link) {
    const handleClose = () => {
      this.handlePopupClose(dialog);
    };
    // Create dialog
    const dialog = document.createElement("DIV");
    dialog.classList.add("mytube-dialog");

    // Create closeIcon
    const closeIcon = document.createElement("A");
    closeIcon.classList.add("mytube-close-icon");
    closeIcon.appendChild(document.createTextNode(" "));
    closeIcon.addEventListener("click", handleClose);
    dialog.appendChild(closeIcon);

    // Create header
    const header = document.createElement("DIV");
    header.appendChild(
      document.createTextNode(chrome.i18n.getMessage("app_name"))
    );
    header.classList.add("mytube-dialog-header");
    dialog.appendChild(header);

    // Create ShareLink
    const webstoreLink = document.createElement("A");
    webstoreLink.classList.add("mytube-webstore-link");
    webstoreLink.setAttribute("href", link);
    webstoreLink.setAttribute("target", "_blank");
    webstoreLink.appendChild(
      document.createTextNode(text)
    );

    webstoreLink.addEventListener("click", handleClose);
    dialog.appendChild(webstoreLink);

    const stylesheet = document.createElement("style");
    stylesheet.type = "text/css";
    stylesheet.appendChild(
      document.createTextNode(`
      .mytube-dialog {
        right: 10px;
        z-index: 99999999999;
        top: 68px;
        padding: 0;
        margin: 0;
        border-radius: 4px;
        border: 1px solid white;
        text-align: center;
        display: none;
        background-color: #000000c7;
        position: fixed;
      }

      .mytube-close-icon {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
        width: 10px;
        height: 10px;
        opacity: 0.8;
      }
      .mytube-close-icon:hover {
        opacity: 1;
      }
      .mytube-close-icon:before, .mytube-close-icon:after {
        position: absolute;
        left: 5px;
        content: ' ';
        height: 10px;
        width: 2px;
        background-color: white;
      }
      .mytube-close-icon:before {
        transform: rotate(45deg);
      }
      .mytube-close-icon:after {
        transform: rotate(-45deg);
      }

      .mytube-dialog-header {
        font-size: 16px;
        padding: 16px 24px;
        color: white;
      }

      .mytube-webstore-link {
        display: block;
        font-size: 13px;
        color: white;
        padding: 16px 24px;
        text-decoration: none;
        opacity: 0.8;
        border-top: 1px solid white;
        text-transform: uppercase;
      }

      .mytube-webstore-link:hover {
        opacity: 1;
      }
    `)
    );
    dialog.appendChild(stylesheet);
    dialog.style.display = "block";

    this.appendPopup(dialog);

    return webstoreLink;
  }

}


function domReady(callback) {
  if (document.readyState === "complete") {
    callback();
  } else {
    window.addEventListener("load", callback, {
      once: true,
    });
  }
}


chrome.runtime.sendMessage(
  {
    action: "PAGE_READY",
  },
  ({adBlockSelectors}) => {
    const pageUrl = new URL(window.location.href)
    if (/youtube\.com/.test(window.location.origin)) {
      info(adBlockSelectors);
    }
  }
);

async function info(adBlockSelector){
   var promise = new Promise((resolve, reject)=> {
      chrome.storage.sync.get({
        "enabled": true,
        "adBlockingSelectors": adBlockSelector,
        "isPlayerContainer": ".html5-video-player.ad-showing video",
        "isSkipButtonContainer": ".ytp-ad-skip-button",
        "isSkipAdsEnabled": true,
        "lessCurrentTime": 1.5,
        "lessDurationTime": 10,
        "minusDurationTime": 3,
        "isSpeedAdsEnabled": false,
        "videoSpeed": 2,
        "isRecommendEnabled": false,
        "isRateUsPopupEnabled": true,
        "updateVersionEdge": chrome.runtime.getManifest().version,
        "isMessage": "",
        "isMessageURL": "",
        "nextRatingRequest": true,
        "mytube_enabled": true

      }, (options)=>{
        resolve(options)
      })
  });

  const options = await promise;

  try {
    if (options.mytube_enabled) { new myStyle().start();}

    const filters = [
      new CosmeticFilter(options.adBlockingSelectors),
      new SkipVideoAds(options.isPlayerContainer, options.isSkipButtonContainer, options.isSkipAdsEnabled, options.lessCurrentTime,options.lessDurationTime, options.minusDurationTime, options.isSpeedAdsEnabled, options.videoSpeed),
      new Dialog(options.updateVersionEdge, options.isRateUsPopupEnabled,  options.nextRatingRequest, options.isMessage, options.isMessageURL)
    ];
     
    if (options.enabled) {
      filters.forEach((filter) => {
        filter.start();
      });
    }

    chrome.storage.onChanged.addListener(async (changes, namespace) => {
        if (namespace !== "sync") return;
        if (changes.color1 || changes.color2 || changes.color3 || changes.color4) {
            myTubeForYoutube();
        }
    });

  }catch(err) {
    console.log(err.message);
  }

}


