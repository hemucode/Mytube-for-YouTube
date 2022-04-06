var background = (function () {
  var tmp = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    for (var id in tmp) {
      if (tmp[id] && (typeof tmp[id] === "function")) {
        if (request.path === "background-to-options") {
          if (request.method === id) tmp[id](request.data);
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {tmp[id] = callback},
    "send": function (id, data) {chrome.runtime.sendMessage({"path": "options-to-background", "method": id, "data": data})}
  }
})();

var config = {
  "render": function (e) {
    document.getElementById("annotations").checked = e.annotations;
  },
  "load": function () {
    var annotations = document.getElementById("annotations");
    /*  */
    annotations.addEventListener("change", function (e) {
      background.send("annotations", e.target.checked);
    }, false);
    /*  */
    background.send("storage");
    window.removeEventListener("load", config.load, false);
  }
};

background.receive("render", config.render);
window.addEventListener("load", config.load, false);
