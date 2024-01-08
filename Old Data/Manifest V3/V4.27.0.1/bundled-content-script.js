setInterval(mytubestart,300);
function mytubestart(){
    logopath = document.querySelector("ytd-topbar-logo-renderer #logo-icon svg g g path");
    if (logopath) {
        logopath.style.fill="#58a6ff";
    }
    ads_skip = document.querySelector(".ytp-ad-skip-button.ytp-button");
    if (ads_skip) {ads_skip.click();}

    ads_show = document.querySelector('.ad-showing');
    if (ads_show) {
        videos = document.querySelector("video");
        if (videos) {
            document.querySelector("video").currentTime = document.querySelector("video").duration;
        }
        
    }
}
   
          
