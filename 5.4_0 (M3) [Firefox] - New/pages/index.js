async function isSettings() {
  var colorPromise = new Promise(function(resolve, reject){
          browser.storage.local.get({
            "enabled": true,
            "mytube_enabled": true,
            "color1": "#08090c",
            "color2": "#2cf2d1",
            "color3": "#49f53d",
            "color4": "#671bf3"
          }, function(options){
              resolve(options);
          })
  });

  const colorOptions = await colorPromise;
  const enabled = colorOptions.enabled;
  const mytube_enabled = colorOptions.mytube_enabled;
  const color1 = colorOptions.color1;
  const color2 = colorOptions.color2;
  const color3 = colorOptions.color3;
  const color4 = colorOptions.color4;
   

  const $checkboxLabel1 = document.querySelector("[data-message=enabled]");
  const $checkboxLabel2 = document.querySelector("[data-message=style]");
  const $colorBoxLabel = document.querySelector(".colorBox");

  $checkboxLabel1.style.color = (enabled ? "#0d8ed0" : "#909090");
  $checkboxLabel2.style.color = (mytube_enabled ? "#0d8ed0" : "#909090");
  $colorBoxLabel.style.display = (mytube_enabled ? "grid" : "none");

  // Hydrate Checkbox Label
  const $enabledCheckbox1 = document.querySelector("input[name=enabled]");
  $enabledCheckbox1.checked = enabled;
  $enabledCheckbox1.addEventListener("change", async (event) => {
    const enabled = event.currentTarget.checked;
    await browser.storage.local.set({ enabled });
    $checkboxLabel1.style.color = (enabled ? "#0d8ed0" : "#909090");

  });

  const $enabledCheckbox2 = document.querySelector("input[name=style]");
  $enabledCheckbox2.checked = mytube_enabled;
  $enabledCheckbox2.addEventListener("change", async (event) => {
    const mytube_enabled = event.currentTarget.checked;
    await browser.storage.local.set({ mytube_enabled });
    $checkboxLabel2.style.color = (mytube_enabled ? "#0d8ed0" : "#909090");
    $colorBoxLabel.style.display = (mytube_enabled ? "grid" : "none");
    
  });

  const $colorBox1 = document.querySelector("input[name=color1]");
  $colorBox1.value = color1;
  $colorBox1.addEventListener("change", async (event) => {
    const color1 = event.currentTarget.value;
    await browser.storage.local.set({ color1 });
    $colorBox1.value = color1;

  });

  const $colorBox2 = document.querySelector("input[name=color2]");
  $colorBox2.value = color2;
  $colorBox2.addEventListener("change", async (event) => {
    const color2 = event.currentTarget.value;
    await browser.storage.local.set({ color2 });
    $colorBox2.value = color2;

  });

  const $colorBox3 = document.querySelector("input[name=color3]");
  $colorBox3.value = color3;
  $colorBox3.addEventListener("change", async (event) => {
    const color3 = event.currentTarget.value;
    await browser.storage.local.set({ color3 });
    $colorBox3.value = color3;

  });

  const $colorBox4 = document.querySelector("input[name=color4]");
  $colorBox4.value = color4;
  $colorBox4.addEventListener("change", async (event) => {
    const color4 = event.currentTarget.value;
    await browser.storage.local.set({ color4 });
    $colorBox4.value = color4;
  });

}

var details = {
  "WEBSTORE":`https://addons.mozilla.org/en-US/firefox/addon/mytube-youtube-theme/`,
  "HOMEPAGE": "https://www.codehemu.com/p/mytubeforyoutube.html",
  "YT": "https://www.youtube.com/@CodeHemu",
  "FB": "https://www.facebook.com/CodeHemu",
  "SITE":"https://www.codehemu.com/",
  "ADDON_SITE": "https://www.downloadhub.cloud/"
}

function hrefLink(){
  document.querySelector('.teaser').href = details.WEBSTORE;
  document.querySelector('.youtube').href = details.YT;
  document.querySelector('.facebook').href = details.FB;
  document.querySelector('.website').href = details.HOMEPAGE;
  document.querySelector('.homepage').href = details.HOMEPAGE;
  document.querySelector('.hemu').href = details.SITE;
}


function domReady (callback) {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('load', callback, false);
  }
}

domReady(() => {
  isSettings()
  hrefLink()
})