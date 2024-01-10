/*!
 *  Mytube for youtube by @thegayen - https://github.com/codegayen/Mytube-for-YouTube/ - @fontawesome
 *  License - https://github.com/codegayen/Mytube-for-YouTube/license ( CSS: MIT License)
 */

async function preference() {
  try {
       var a = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"enabled": true}, function(options){
              resolve(options.enabled);
          })
      });

      var b = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"style": true}, function(options){
              resolve(options.style);
          })
      });

      var c = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"color1": "#161b22"}, function(options){
              resolve(options.color1);
          })
      });

      var d = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"color2": "#c7c7c7"}, function(options){
              resolve(options.color2);
          })
      });

      var e = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"color3": "#c7c7c7"}, function(options){
              resolve(options.color3);
          })
      });

      var f = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"color4": "#c7c7c7"}, function(options){
              resolve(options.color4);
          })
      });


      const enabled = await a;
      const style = await b;
      const color1 = await c;
      const color2 = await d;
      const color3 = await e;
      const color4 = await f;


      styleCode = `
      html {
  --yt-spec-text-primary: #0f0f0f !important;
  --yt-spec-text-primary-inverse: #fff !important;
  --yt-spec-base-background: #0f0f0f !important;
  --yt-spec-raised-background: #212121 !important;
  --yt-spec-menu-background: #282828 !important;
  --yt-spec-inverted-background: #f1f1f1 !important;
  --yt-spec-additive-background: rgba(255, 255, 255, 0.1) !important;
  --yt-spec-outline: rgba(255, 255, 255, 0.2) !important;
  --yt-spec-shadow: rgba(0, 0, 0, 0.25) !important;
  --yt-spec-text-primary: #fff !important;
  --yt-spec-text-secondary: #aaa !important;
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
  --yt-spec-brand-icon-active: #fff !important;
  --yt-spec-brand-icon-inactive: #909090 !important;
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
  --yt-spec-brand-background-primary: rgba(33, 33, 33, 0.98) !important;
  --yt-spec-brand-background-secondary: rgba(33, 33, 33, 0.95) !important;
  --yt-spec-general-background-a: #181818 !important;
  --yt-spec-general-background-b: #0f0f0f;
  --yt-spec-general-background-c: #030303;
  --yt-spec-error-background: #f9f9f9;
  --yt-spec-10-percent-layer: rgba(255, 255, 255, 0.1);
  --yt-spec-snackbar-background: #030303;
  --yt-spec-snackbar-background-updated: #f9f9f9;
  --yt-spec-badge-chip-background: rgba(255, 255, 255, 0.1);
  --yt-spec-verified-badge-background: rgba(255, 255, 255, 0.25);
  --yt-spec-call-to-action-faded: rgba(62, 166, 255, 0.3);
  --yt-spec-call-to-action-hover: #6ebcff;
  --yt-spec-brand-button-background-hover: #990412;
  --yt-spec-brand-link-text-faded: rgba(255, 78, 69, 0.3);
  --yt-spec-filled-button-focus-outline: rgba(255, 255, 255, 0.7);
  --yt-spec-static-overlay-button-hover: rgba(255, 255, 255, 0.5);
  --yt-spec-mono-filled-hover: #d9d9d9;
  --yt-spec-commerce-filled-hover: #65b8ff;
  --yt-spec-mono-tonal-hover: rgba(255, 255, 255, 0.2);
  --yt-spec-commerce-tonal-hover: #515561;
  --yt-spec-static-overlay-filled-hover: #e6e6e6;
  --yt-spec-static-overlay-tonal-hover: rgba(255, 255, 255, 0.2);
  --yt-spec-paper-tab-ink: rgba(255, 255, 255, 0.3);
  --yt-spec-filled-button-text: #030303;
  --yt-spec-selected-nav-text: #fff
}


      `;


      if (style) {
        stylesheet = document.createElement("style");
        stylesheet.setAttribute("id", "mytube");
        if (document.head) {
          document.head.appendChild(stylesheet);
        }
      }

      if (enabled) {
        await Promise.all([injectMainScript()]);
      }


    }catch(err) {
    console.log(err.message);
  }

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

async function injectMainScript() {
  const playerContainer = await waitForElement("#movie_player");
  const observer = new MutationObserver(() => {
    try {
      const isAd =
        playerContainer.classList.contains("ad-interrupting") ||
        playerContainer.classList.contains("ad-showing");
      const preText = document.querySelector(".ytp-ad-preview-text-modern");
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

preference();