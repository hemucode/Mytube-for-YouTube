domReady(() => {
  infoemation()
  preference()
})

function domReady (callback) {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('load', callback, false);
  }
}



async function preference() {

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



  const enabled = await a;
  const style = await b;
  const color1 = await c;
  const color2 = await d;
  const color3 = await e;
  const color4 = await f;


  const $checkboxLabel1 = document.querySelector("[data-message=enabled]");

  const $checkboxLabel2 = document.querySelector("[data-message=style]");

  $checkboxLabel1.style.color = (enabled ? "#0d8ed0" : "#909090");
  $checkboxLabel2.style.color = (style ? "#0d8ed0" : "#909090");



  // Hydrate Checkbox Label
  const $enabledCheckbox1 = document.querySelector("input[name=enabled]");
  $enabledCheckbox1.checked = enabled;

  $enabledCheckbox1.addEventListener("change", async (event) => {
    const enabled = event.currentTarget.checked;

    // Persist
    await chrome.storage.sync.set({ enabled });

    // Update Checkbox Label
    $checkboxLabel1.style.color = (enabled ? "#0d8ed0" : "#909090");

  });

  const $enabledCheckbox2 = document.querySelector("input[name=style]");
  $enabledCheckbox2.checked = style;


  $enabledCheckbox2.addEventListener("change", async (event) => {
    const style = event.currentTarget.checked;

    // Persist
    await chrome.storage.sync.set({ style });

    // Update Checkbox Label
    $checkboxLabel2.style.color = (style ? "#0d8ed0" : "#909090");
    
  });


  const $colorBox1 = document.querySelector("input[name=color1]");
  $colorBox1.value = color1;

  $colorBox1.addEventListener("change", async (event) => {
    const color1 = event.currentTarget.value;
    // Persist
    await chrome.storage.sync.set({ color1 });
    $colorBox1.value = color1;

  });

  const $colorBox2 = document.querySelector("input[name=color2]");
  $colorBox2.value = color2;

  $colorBox2.addEventListener("change", async (event) => {
    const color2 = event.currentTarget.value;
    // Persist
    await chrome.storage.sync.set({ color2 });
    $colorBox1.value = color2;

  });

  const $colorBox3 = document.querySelector("input[name=color3]");
  $colorBox3.value = color3;

  $colorBox3.addEventListener("change", async (event) => {
    const color3 = event.currentTarget.value;
    // Persist
    await chrome.storage.sync.set({ color3 });
    $colorBox3.value = color3;

  });

  const $colorBox4 = document.querySelector("input[name=color4]");
  $colorBox4.value = color4;

  $colorBox4.addEventListener("change", async (event) => {
    const color4 = event.currentTarget.value;
    // Persist
    await chrome.storage.sync.set({ color4 });
    $colorBox4.value = color4;

  });

}




function infoemation(){
  document.querySelector('.teaser').href = `https://chromewebstore.google.com/detail/mytube-for-youtube/mlolgpcecboccnknllkhfdafmphinbon`;
  document.querySelector('.youtube').href = `https://youtube.com/c/HemantaGayen`;
  document.querySelector('.facebook').href = `https://www.facebook.com/codehemu/`;
  document.querySelector('.website').href = `https://www.codehemu.com/p/mytubeforyoutube.html`;
  document.querySelector('.hemu').href = `https://www.codehemu.com/`;

  box = document.querySelector(".div_myadblock");

  full_box = document.querySelector(".cta-description");

  box_text = document.querySelector(".cta-message");

  close_button = document.querySelector(".cta-close");

  header_icon = document.querySelector("#header-icons");

  box.addEventListener("mouseover", ()=>{
    close_button.style.display="block";
    if (localStorage.message=="dislike") {
      box_text.innerText = "Dislike in YouTube™";
    }else{
      box_text.innerText = "Adblock for YouTube™";
    }
    box.style.background="#0047ff";

  },false);

  box.addEventListener("mouseout", ()=>{
    close_button.style.display="none";
    box_text.innerText = "Looking for Good addons";
    box.style.background="#fff";
  },false);

  full_box.addEventListener("click", ()=>{
    if (localStorage.message=="dislike") {
      link = "https://www.downloadhub.cloud/";
      if (localStorage.message=="dislike") {
        window.open(`${link}2022/10/dislike-add-youtube.html`,'_blank');
      }else{
        window.open(`${link}2022/11/adblock-for-youtube.html`,'_blank');
      }
    }
  },false);

  close_button.addEventListener("click", ()=>{
    if (localStorage.message=="dislike") {
      box.style.display="none";
    }else{
      box.style.display="none";
      localStorage.message="dislike";
    }
  },false);

  header_icon.addEventListener("click",()=>{
    window.open(chrome.runtime.getManifest().homepage_url,'_blank');
  },false)

}




