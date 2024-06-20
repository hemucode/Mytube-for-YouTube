const rendomJson = (addon_details) => {
  try {
    return addon_details[Math.floor(Math.random() * addon_details.length)];
  } catch (e) {
    return addon_details[0];
  }
}

async function isSettings() {
   var a = new Promise(function(resolve, reject){
      chrome.storage.sync.get({"enabled": true}, function(options){
          resolve(options.enabled);
      })
  });

  var b = new Promise(function(resolve, reject){
      chrome.storage.sync.get({"mytube_enabled": true}, function(options){
          resolve(options.mytube_enabled);
      })
  });

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


  const mytube_enabled = await b;
  const enabled = await a;
  const color1 = await c;
  const color2 = await d;
  const color3 = await e;
  const color4 = await f;


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
    await chrome.storage.sync.set({ enabled });
    $checkboxLabel1.style.color = (enabled ? "#0d8ed0" : "#909090");

  });

  const $enabledCheckbox2 = document.querySelector("input[name=style]");
  $enabledCheckbox2.checked = mytube_enabled;
  $enabledCheckbox2.addEventListener("change", async (event) => {
    const mytube_enabled = event.currentTarget.checked;
    await chrome.storage.sync.set({ mytube_enabled });
    $checkboxLabel2.style.color = (mytube_enabled ? "#0d8ed0" : "#909090");
    $colorBoxLabel.style.display = (mytube_enabled ? "grid" : "none");
    
  });

  const $colorBox1 = document.querySelector("input[name=color1]");
  $colorBox1.value = color1;
  $colorBox1.addEventListener("change", async (event) => {
    const color1 = event.currentTarget.value;
    await chrome.storage.sync.set({ color1 });
    $colorBox1.value = color1;

  });

  const $colorBox2 = document.querySelector("input[name=color2]");
  $colorBox2.value = color2;
  $colorBox2.addEventListener("change", async (event) => {
    const color2 = event.currentTarget.value;
    await chrome.storage.sync.set({ color2 });
    $colorBox2.value = color2;

  });

  const $colorBox3 = document.querySelector("input[name=color3]");
  $colorBox3.value = color3;
  $colorBox3.addEventListener("change", async (event) => {
    const color3 = event.currentTarget.value;
    await chrome.storage.sync.set({ color3 });
    $colorBox3.value = color3;

  });

  const $colorBox4 = document.querySelector("input[name=color4]");
  $colorBox4.value = color4;
  $colorBox4.addEventListener("change", async (event) => {
    const color4 = event.currentTarget.value;
    await chrome.storage.sync.set({ color4 });
    $colorBox4.value = color4;
  });

}


var details = {
  "WEBSTORE":`https://microsoftedge.microsoft.com/addons/detail/${chrome.runtime.id}`,
  "HOMEPAGE": "https://www.codehemu.com/p/mytubeforyoutube.html",
  "YT": "https://www.youtube.com/@CodeHemu",
  "FB": "https://www.facebook.com/CodeHemu",
  "SITE":"https://www.codehemu.com/",
  "ADDON_SITE": "https://www.downloadhub.cloud/"
}

var addon_details = [
{
  "name": "Dislike in YouTube™",
  "link": "2022/10/dislike-add-youtube.html"
},{
  "name": "Adblock for YouTube™",
  "link": "2022/11/adblock-for-youtube.html"
},{
  "name": "Image Downloader",
  "link": "2023/02/downloader.html"
},{
  "name": "Loop YouTube™",
  "link": "2023/01/loop.html"
},{
  "name": "Allow Copy& Right Click",
  "link": "2022/12/browser-allow-copy-right-click.html"
},{
  "name": "Nonstop for YouTube™",
  "link": "2022/10/nonstopyoutube.html"
},{
  "name": "SiteBlock: Block Websites",
  "link": "2023/06/SiteBlock.html"
},{
  "name": "ClickBait YouTube™",
  "link": "2023/05/clickbait.html"
}];


function hrefLink(){
  document.querySelector('.teaser').href = details.WEBSTORE;
  document.querySelector('.youtube').href = details.YT;
  document.querySelector('.facebook').href = details.FB;
  document.querySelector('.website').href = details.HOMEPAGE;
  document.querySelector('.homepage').href = details.HOMEPAGE;
  document.querySelector('.hemu').href = details.SITE;
}


function Dialog(){
  const randomArray = rendomJson(addon_details);
  document.querySelector(".addons_name").appendChild(
    document.createTextNode(randomArray.name)
  );

  document.querySelector(".cta-description").addEventListener("click", ()=>{
    window.open(details.ADDON_SITE + randomArray.link,'_blank');
  },false); 

  document.querySelector(".cta-close").addEventListener("click", ()=>{
    document.querySelector(".div_myadblock").style.display="none";
  },false);
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
  Dialog()
})