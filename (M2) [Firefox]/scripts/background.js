/* © Copyright 2024, Hemanta Gayen, All rights reserved. */
/*!
 *  Mytube for youtube by @codehemu -https://github.com/hemucode/Skip-Video-Ads-in-YouTube
 *  License - https://github.com/hemucode/Skip-Video-Ads-in-YouTube/license ( CSS: MIT License)
 */


/**
 * Do not use google API without permission from the developer.
 * This key has rights only @codehemu. You may not use it at all without CodeHemu permission.
 * https://script.google.com/macros
 */
const API_KEY = "AKfycbzF_4yb_NayS7ImuajG9Hnf4WfaJ5K7g4h4ZkT3a1OfpZ1KPva9JqJkcJxhlBmeyWTH";

/**
 * Here are the IDs and classes of all YouTube advertisement elements.
 * adBlockingSelectorsFallback Always changing. Here are the IDs and classes of 
 * all types of banner ads and other ads that can be easily targeted and remove.
 * rights only @codehemu.
 */

const adBlockingSelectorsFallback = [
  'ytd-promoted-video-renderer',
  'ytd-movie-offer-module-renderer',
  'ytd-promoted-sparkles-web-renderer',
  'ytd-promoted-sparkles-text-search-renderer',
  'ytd-player-legacy-desktop-watch-ads-renderer',
  '#player-ads',
  '#search-pva',
  '#premium-yva',
  '#masthead-ad',
  '#feedmodule-PRO',
  '#video-masthead',
  '#watch-buy-urls',
  '#sub-frame-error',
  '#main-frame-error',
  '#watch7-sidebar-ads',
  '#feed-pyv-container',
  '#shelf-pyv-container',
  '#watch-branded-actions',
  '#watch-channel-brand-div',
  '#homepage-chrome-side-promo',
  '#watch-channel-brand-div-text',
  '.iv-promo',
  '.video-ads',
  '.promoted-videos',
  '.ytp-ad-progress',
  '.ytp-ad-progress-list',
  '.searchView.list-view',
  '.html5-ad-progress-list',
  '.watch-extra-info-right',
  '.watch-extra-info-column',
  '.lohp-pyv-shelf-container',
  '.ytd-merch-shelf-renderer',
  '.carousel-offer-url-container',
  '.youtubeSuperLeaderBoardAdHolder',
  '.youtubeSuperLeaderOverallAdArea',
  '.ytd-movie-offer-module-renderer',
  '.ytd-action-companion-ad-renderer',
  'iframe[id^=ad_]',
  'div[class*="-ad-v"]',
  'div[class*="-ads-"]',
  'a[href*="/adwords/"]',
  'a[href*="doubleclick.net"]',
  'iframe[src*="doubleclick.net"]',
  'a[href^="http://www.youtube.com/cthru?"]',
  'a[href^="https://www.youtube.com/cthru?"]',
  'a[onclick*="\\"ping_url\\":\\"http://www.google.com/aclk?"]',
  '.ad-showing > .html5-video-container',
  '.ytd-player-legacy-desktop-watch-ads-renderer',
  '.ytd-rich-item-renderer > ytd-ad-slot-renderer',
  'ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"]',
  '#contents > ytd-rich-item-renderer:has(> #content > ytd-ad-slot-renderer)',
  '.ad-container',
  'ytd-display-ad-renderer',
  '.ytd-carousel-ad-renderer',
  'ytd-compact-promoted-video-renderer',
  '.ytd-promoted-sparkles-text-search-renderer',
  '.masthead-ad-control',
  '#ad_creative_3',
  '#footer-ads',
  '.ad-div',
  '.ytd-mealbar-promo-renderer',
  '.sparkles-light-cta',
  '.badge-style-type-ad',
  '.GoogleActiveViewElement',
  '.ytd-compact-promoted-video-renderer',
  '.ytd-companion-slot-renderer',
  '.ytd-video-masthead-ad-v3-renderer',
  '[layout*="display-ad-"]',
  '#merch-shelf',
  '#show-ad',
  '.ytd-in-feed-ad-layout-renderer',
  '.ytp-ad-image-overlay',
  '.ytp-ad-text-overlay',
  '.ytd-ad-slot-renderer',
  '.companion',
  'ytd-compact-promoted-item-renderer',
  '.html5-video-player.ad-showing video'
].join(",");


/**
 * It is used to determine whether a start will run or stop.
 * Where I mean an install will continue.
 * rights only @codehemu.
 */

browser.runtime.onStartup.addListener(async () => {
  var a = new Promise(function(resolve, reject){
        browser.storage.local.get({"enabled": true}, function(options){
            resolve(options.enabled);
      })
  });
  const enabled = await a;
  if (enabled) {await enable();} else {await disable();}
});

/**
 * If the user uninstalls the app then he will have a new url or windows open.
 * rights only @codehemu.
 */
var uninstallUrl = `${browser.runtime.getManifest().homepage_url}#uninstall`;
browser.runtime.setUninstallURL(uninstallUrl);

/**
 * When the app is installed, the date the app was installed and other 
 * information will be stored in the browser.
 * rights only @codehemu.
 */

browser.runtime.onInstalled.addListener(async (details) => {
  switch (details.reason) {
    case browser.runtime.OnInstalledReason.INSTALL:
      browser.storage.local.set({
        installDate: Date.now(),
        installVersion: chrome.runtime.getManifest().version,
        adBlockingSelectors: adBlockingSelectorsFallback,
        isPlayerContainer: ".html5-video-player.ad-showing video",
        isSkipButtonContainer: ".ytp-ad-skip-button",
        isSkipAdsEnabled: true,
        lessCurrentTime: 1.5,
        lessDurationTime: 10,
        minusDurationTime: 3,
        isSpeedAdsEnabled: false,
        videoSpeed: 2,
        isRecommendEnabled: false,
        isRateUsPopupEnabled: true,
        updateVersionFirefox: chrome.runtime.getManifest().version,
        isMessage: "",
        isMessageURL: ""
      });
      browser.tabs.create({ url: browser.runtime.getManifest().homepage_url });

    case browser.runtime.OnInstalledReason.UPDATE:
      browser.storage.local.set({
        updateDate: Date.now(),
      });
  }
});


browser.storage.onChanged.addListener(async (changes, namespace) => {
  if (namespace !== "local") return;

  if (changes.enabled) {
    if (changes.enabled.newValue) {
      await enable();
    } else {
      await disable();
    }
  }else if(changes.mytube_enabled){
    await reloadAffectedTab();
  }

});


/**
 * By looking at the name of the function, you can understand what it actually is function, 
 * it is the function of being active.
 * rights only @codehemu.
 */
async function enable() {
  browser.browserAction.setIcon({
    path: {
      128: "images/128.png",
      32: "images/32.png",
      48: "images/48.png"
    },
  });
  await reloadAffectedTab();
}

/**
 * @returns Promise
 */
async function disable() {
  browser.browserAction.setIcon({
    path: {
      128: "images/128_d.png",
      32: "images/32_d.png",
      48: "images/48_d.png"
    },
  });
  await reloadAffectedTab();
}

/**
 * As with the function above, it's inverse.
 * This is the closing function.
 * rights only @codehemu.
 */

async function reloadAffectedTab() {
  const [currentTab] = await browser.tabs.query({
    active: true,
    url: "*://*.youtube.com/*",
  });
  const isTabAffected = Boolean(currentTab?.url);
  if (isTabAffected) {
    return browser.tabs.reload();
  }
}


const setAdBlockingSelectors = async (
  regexRules,
  adBlockingSelectors, 
  isPlayerContainer,
  isSkipButtonContainer,
  isSkipAdsEnabled,
  lessCurrentTime,
  lessDurationTime,
  minusDurationTime,
  isSpeedAdsEnabled,
  videoSpeed,
  isRecommendEnabled,
  isRateUsPopupEnabled,
  updateVersionFirefox,
  isMessage,
  isMessageURL) => {
  await browser.storage.local.set({ 
    regexRules,
    adBlockingSelectors, 
    isPlayerContainer,
    isSkipButtonContainer,
    isSkipAdsEnabled,
    lessCurrentTime,
    lessDurationTime,
    minusDurationTime,
    isSpeedAdsEnabled,
    videoSpeed,
    isRecommendEnabled,
    isRateUsPopupEnabled,
    updateVersionFirefox,
    isMessage,
    isMessageURL
  });
};


/**
 * It is used externally to update all the data it requests to download from the URL.
 * rights only @codehemu.
 */
const updateJson = async () => {
  url = `https://script.google.com/macros/s/${API_KEY}/exec`;
  await fetch(url)
  .then((response) => response.json())
  .then((json) => {
    //console.log(json);
     const {
        regexRules,
        adBlockingSelectors,
        isPlayerContainer,
        isSkipButtonContainer,
        isSkipAdsEnabled,
        lessCurrentTime,
        lessDurationTime,
        minusDurationTime,
        isSpeedAdsEnabled,
        videoSpeed,
        isRecommendEnabled,
        isRateUsPopupEnabled,
        updateVersionFirefox,
        isMessage,
        isMessageURL
     } = json;

     setAdBlockingSelectors(regexRules,
        adBlockingSelectors.join(","), 
        isPlayerContainer,
        isSkipButtonContainer,
        isSkipAdsEnabled,
        lessCurrentTime,
        lessDurationTime,
        minusDurationTime,
        isSpeedAdsEnabled,
        videoSpeed,
        isRecommendEnabled,
        isRateUsPopupEnabled,
        updateVersionFirefox,
        isMessage,
        isMessageURL);
  })
  .catch((e) => {
    console.error(e);
   });
};

const init = async () => {
  updateJson();
  browser.runtime.onMessage.addListener(
    ({ action, href, message }, { tab }, sendResponse) => {
      if (action === "PAGE_READY") {
        const response = {
          adBlockSelectors: adBlockingSelectorsFallback
        };
        updateJson();
        sendResponse(response);
    } 
  });

};init();

