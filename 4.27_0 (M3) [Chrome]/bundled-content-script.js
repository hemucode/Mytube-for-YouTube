/*!
 *  Mytube for youtube by @thegayen - https://github.com/codegayen/Mytube-for-YouTube/ - @fontawesome
 *  License - https://github.com/codegayen/Mytube-for-YouTube/license ( CSS: MIT License)
 */
setInterval(()=>{
    logopath = document.querySelector("ytd-topbar-logo-renderer #logo-icon svg g g path");
    if (logopath) {
        logopath.style.fill="#58a6ff";
    }
    if( ! document.querySelector('.ad-showing') ) return
 
          const video=document.querySelector('video')
          if( ! video)  return
  
          const btn=document.querySelector(".ytp-ad-skip-button")
          if( btn) {
            btn.click()
          } else {
            video.currentTime = isNaN(video.duration) ? 0 : video.duration
          }
},300);
   
          
