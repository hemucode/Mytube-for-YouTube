/*!
 *  Mytube for youtube by @thegayen - https://github.com/codegayen/Mytube-for-YouTube/ - @fontawesome
 *  License - https://github.com/codegayen/Mytube-for-YouTube/license ( CSS: MIT License)
 */

function LightenDarkenColor(col, amt) {
  col = parseInt(col, 16);
  return (((col & 0x0000FF) + amt) | ((((col >> 8) & 0x00FF) + amt) << 8) | (((col >> 16) + amt) << 16)).toString(16);
}

/**
 * @returns Promise
 */

async function infoemation(){
  MyTubeHead = document.head;
  MyTubeSheet = document.createElement("style");
  MyTubeSheet.setAttribute("id", "mytube");
  MyTubeSheet.setAttribute("type", "text/css");

  if (MyTubeHead) {MyTubeHead.appendChild(MyTubeSheet)};

  await Promise.all([MainStylish("style")]);

  try {
      chrome.storage.onChanged.addListener(async (changes, namespace) => {
          if (namespace !== "sync") return;
          if (changes.color1 || changes.color2 || changes.color3 || changes.color4) {
              MainStylish("style");
          }
      });

      var a = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"enabled": true}, function(options){
              resolve(options.enabled);
          })
      });

      const enabled = await a;

      if (!enabled) return;
      await Promise.all([injectMainScript(),injectStyles()]);

  }catch(err) {
    console.log(err.message);
  }

}infoemation();


/**
 * @returns Promise
 */

async function MainStylish(css){
   var b = new Promise(function(resolve, reject){
        chrome.storage.sync.get({"style": true}, function(options){
            resolve(options.style);
        })
    });
   const style = await b;

   if (!style) return;

   var c = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"color1": "#08090c"}, function(options){
              resolve(options.color1);
          })
      });

  var d = new Promise(function(resolve, reject){
      chrome.storage.sync.get({"color2": "#2cf2d1"}, function(options){
          resolve(options.color2);
      })
  });

  var e = new Promise(function(resolve, reject){
      chrome.storage.sync.get({"color3": "#49f53d"}, function(options){
          resolve(options.color3);
      })
  });

  var f = new Promise(function(resolve, reject){
      chrome.storage.sync.get({"color4": "#671bf3"}, function(options){
          resolve(options.color4);
      })
  });

  const color1 = await c;
  const color2 = await d;
  const color3 = await e;
  const color4 = await f;
  styleCode = `::-webkit-scrollbar-thumb{ background: linear-gradient(to top, ${color2}, #${LightenDarkenColor(color3.substring(1),10)}); } ::-webkit-scrollbar{ background: #${LightenDarkenColor(color1.substring(1),10)} !important; } ytd-masthead{ background:${color1} !important; } yt-icon{ color:${color4}!important; } .ytd-searchbox:before,.ytp-swatch-background-color:before { content: ''; position: absolute; top: -5px; bottom: -5px; right: -5px; left: -5px; z-index: -1; background: linear-gradient(90deg,${color4},${color3},#1996d7,${color2}); background-size: 400%; filter: blur(30px); opacity: 0; transition: 0.5s; } .ytd-searchbox:hover:before { filter: blur(30px); opacity: 1; animation: animate 8s linear infinite; } .ytd-searchbox:hover { animation: animate 8s linear infinite; } .ytp-swatch-background-color:before { filter: blur(5px); opacity: 1; animation: animate 8s linear infinite; } .ytp-swatch-background-color { animation: animate 8s linear infinite; background: ${color2} !important; } #player-container-outer { box-shadow: 0px 0px 20px 4px ${color2}; border: 2px solid ${color2}; border-radius: 12px !important; } @keyframes animate {0% {background-position: 0%;}100% {background-position: 400%;}} .yt-spec-button-shape-next__button-text-content, .yt-core-attributed-string--link-inherit-color{ color: ${color3} !important; } .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text{ color: ${color4} !important; } html { -ytd-searchbox-border-color: #${LightenDarkenColor(color1.substring(1),10)} !important; --ytd-searchbox-legacy-border-color: ${color2} !important; --ytd-searchbox-legacy-border-shadow-color: ${color1} !important; --ytd-searchbox-legacy-button-color: #${LightenDarkenColor(color1.substring(1),10)} !important; --ytd-searchbox-legacy-button-border-color: ${color2} !important; --ytd-searchbox-legacy-button-focus-color: #e9e9e9; --ytd-searchbox-legacy-button-hover-color: #f0f0f0; --ytd-searchbox-legacy-button-hover-border-color: #c6c6c6; --ytd-searchbox-legacy-button-icon-color: #333; --ytd-searchbox-text-color: ${color3} !important; --ytd-searchbox-background: #${LightenDarkenColor(color1.substring(1),10)} !important; --yt-spec-text-primary: ${color2} !important; --yt-spec-text-secondary: ${color3} !important; --yt-spec-text-primary-inverse: #fff !important; --yt-spec-base-background: #${LightenDarkenColor(color1.substring(1),10)} !important; --yt-spec-raised-background: #212121 !important; --yt-spec-menu-background: #282828 !important; --yt-spec-inverted-background: #f1f1f1 !important; --yt-spec-additive-background: rgba(255, 255, 255, 0.1) !important; --yt-spec-outline: rgba(255, 255, 255, 0.2) !important; --yt-spec-shadow: rgba(0, 0, 0, 0.25) !important; --yt-spec-text-disabled: #717171 !important; --yt-spec-text-primary-inverse: #030303 !important; --yt-spec-call-to-action: #3ea6ff !important; --yt-spec-call-to-action-inverse: #065fd4 !important; --yt-spec-suggested-action: #263850 !important; --yt-spec-suggested-action-inverse: #def1ff !important; --yt-spec-icon-active-other: #fff !important; --yt-spec-icon-inactive: #909090 !important; --yt-spec-icon-disabled: #606060 !important; --yt-spec-button-chip-background-hover: rgba(255, 255, 255, 0.2) !important; --yt-spec-touch-response: #fff !important; --yt-spec-touch-response-inverse: #000 !important; --yt-spec-brand-icon-active: ${color3} !important; --yt-spec-brand-icon-inactive: #${color4} !important; --yt-spec-brand-button-background: #c00 !important; --yt-spec-brand-link-text: #ff4e45 !important; --yt-spec-wordmark-text: #fff !important; --yt-spec-error-indicator: #ff8983 !important; --yt-spec-themed-blue: #3ea6ff !important; --yt-spec-themed-green: #2ba640 !important; --yt-spec-ad-indicator: #00aaa7; --yt-spec-themed-overlay-background: rgba(0, 0, 0, 0.8) !important; --yt-spec-commerce-badge-background: #002d08 !important; --yt-spec-static-brand-red: #f00 !important; --yt-spec-static-brand-white: #fff !important; --yt-spec-static-brand-black: #212121 !important; --yt-spec-static-clear-color: rgba(255, 255, 255, 0) !important; --yt-spec-static-clear-black: rgba(0, 0, 0, 0) !important; --yt-spec-static-ad-yellow: #fbc02d !important; --yt-spec-static-grey: #606060 !important; --yt-spec-static-overlay-background-solid: #000 !important; --yt-spec-static-overlay-background-heavy: rgba(0, 0, 0, 0.8) !important; --yt-spec-static-overlay-background-medium: rgba(0, 0, 0, 0.6) !important; --yt-spec-static-overlay-background-medium-light: rgba(0, 0, 0, 0.3) !important; --yt-spec-static-overlay-background-light: rgba(0, 0, 0, 0.1) !important; --yt-spec-static-overlay-text-primary: #fff !important; --yt-spec-static-overlay-text-primary-inverse: #030303 !important; --yt-spec-static-overlay-text-secondary: rgba(255, 255, 255, 0.7) !important; --yt-spec-static-overlay-text-disabled: rgba(255, 255, 255, 0.3) !important; --yt-spec-static-overlay-call-to-action: #3ea6ff !important; --yt-spec-static-overlay-icon-active-other: #fff !important; --yt-spec-static-overlay-icon-inactive: rgba(255, 255, 255, 0.7) !important; --yt-spec-static-overlay-icon-disabled: rgba(255, 255, 255, 0.3) !important; --yt-spec-static-overlay-button-primary: rgba(255, 255, 255, 0.3) !important; --yt-spec-static-overlay-button-secondary: rgba(255, 255, 255, 0.1) !important; --yt-spec-static-overlay-touch-response: #fff !important; --yt-spec-static-overlay-touch-response-inverse: #000 !important; --yt-spec-static-overlay-background-brand: rgba(204, 0, 0, 0.9) !important; --yt-spec-assistive-feed-themed-gradient-1: #005446 !important; --yt-spec-assistive-feed-themed-gradient-2: #39003f !important; --yt-spec-assistive-feed-themed-gradient-3: #590000 !important; --yt-spec-discover-red: #ff4e45 !important; --yt-spec-discover-green: #a4ffa4 !important; --yt-spec-discover-blue: #6ea2ff !important; --yt-spec-brand-background-solid: #212121 !important; --yt-spec-brand-background-primary: ${color1} !important; --yt-spec-brand-background-secondary: ${color1} !important; --yt-spec-general-background-a: #${LightenDarkenColor(color1.substring(1),15)} !important; --yt-spec-general-background-b: #${LightenDarkenColor(color1.substring(1),12)} !important; --yt-spec-general-background-c: #${LightenDarkenColor(color1.substring(1),10)} !important; --yt-lightsource-section4-color: #${LightenDarkenColor(color1.substring(1),10)} !important; --yt-spec-error-background: #f9f9f9 !important; --yt-spec-10-percent-layer: ${color2} !important; --yt-spec-snackbar-background: #030303 !important; --yt-spec-snackbar-background-updated: #f9f9f9 !important; --yt-spec-badge-chip-background: rgba(255, 255, 255, 0.1) !important; --yt-spec-verified-badge-background: rgba(255, 255, 255, 0.25) !important; --yt-spec-call-to-action-faded: rgba(62, 166, 255, 0.3) !important; --yt-spec-call-to-action-hover: #6ebcff !important; --yt-spec-brand-button-background-hover: #990412 !important; --yt-spec-brand-link-text-faded: rgba(255, 78, 69, 0.3) !important; --yt-spec-filled-button-focus-outline: rgba(255, 255, 255, 0.7) !important; --yt-spec-static-overlay-button-hover: rgba(255, 255, 255, 0.5) !important; --yt-spec-mono-filled-hover: #d9d9d9 !important; --yt-spec-commerce-filled-hover: #65b8ff !important; --yt-spec-mono-tonal-hover: rgba(255, 255, 255, 0.2) !important; --yt-spec-commerce-tonal-hover: #515561 !important; --yt-spec-static-overlay-filled-hover: #e6e6e6 !important; --yt-spec-static-overlay-tonal-hover: rgba(255, 255, 255, 0.2) !important; --yt-spec-paper-tab-ink: rgba(255, 255, 255, 0.3) !important; --yt-spec-filled-button-text: #030303 !important; --yt-spec-selected-nav-text: #fff !important; }#cinematics-container{display: none !important;visibility: hidden !important;}`;
    stylesheetID = document.querySelector("#mytube");
    if (stylesheetID) {stylesheetID.innerText = styleCode;}

}


/**
 * @returns Promise
 */

function injectStyles() {
  return chrome.runtime.sendMessage({
    action: "INSERT_CSS_RULE",
    rule: "content-style",
  });
}

/**
 * @returns Promise
 */

function runSkipping() {
  document.querySelector(".ytp-ad-skip-button")?.click();
  document.querySelector(".ytp-ad-skip-button-modern")?.click();
  document.querySelector(".ytp-ad-survey")?.click();
}

/**
 * @returns Promise
 */

function runRewind() {
  try {
    const videoPlayer = document.querySelector(".video-stream");
    videoPlayer.currentTime = videoPlayer.duration - 0.1;
    videoPlayer.paused && videoPlayer.play();
  } catch (e) {
    console.error(e);
  }
}

/**
 * @returns Promise
 */


async function injectMainScript() {
  const playerContainer = await waitForElement("#movie_player");
  const observer = new MutationObserver(() => {
    try {
      const isAd =
        playerContainer.classList.contains("ad-interrupting") ||
        playerContainer.classList.contains("ad-showing");
      const preText = document.querySelector(".video-ads");
      if (isAd && preText) {
        runSkipping();
        runRewind();
      }
    } catch (e) {
      console.error(e);
    }
  });

  observer.observe(playerContainer, {
    subtree: !0,
    childList: !0,
    attributes: !0,
  });

}

const waitForElement = async (selector) => {
  return new Promise((resolve) => {
    let observedElement = document.querySelector(selector);
    if (observedElement) return resolve(observedElement);

    let observer = new MutationObserver(() => {
      let observedElement = document.querySelector(selector);
      if (observedElement) {
        observer.disconnect();
        resolve(observedElement);
      }
    });

    observer.observe(document.documentElement, {
      childList: !0,
      subtree: !0,
    });
  });
};





