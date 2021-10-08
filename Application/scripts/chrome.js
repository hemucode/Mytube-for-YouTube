var app = {};

app.parent = {};
app.version = function () {return chrome.runtime.getManifest().version};
app.homepage = function () {return chrome.runtime.getManifest().homepage_url};
app.tab = {"open": function (url) {chrome.tabs.create({"url": url, "active": true})}};

chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
  if (tabId) {
    delete app.parent[tabId];
  }
});

if (!navigator.webdriver) {
  chrome.runtime.setUninstallURL('https://youtu.be/dJTeEhwUzrg', function () {});
  chrome.runtime.onInstalled.addListener(function (e) {
    chrome.management.getSelf(function (result) {
      if (result.installType === "normal") {
        window.setTimeout(function () {
          var previous = e.previousVersion !== undefined && e.previousVersion !== app.version();
          var doupdate = previous && parseInt((Date.now() - config.welcome.lastupdate) / (24 * 3600 * 1000)) > 45;
          if (e.reason === "install" || (e.reason === "update" && doupdate)) {
            var parameter = (e.previousVersion ? "&p=" + e.previousVersion : '') + "&type=" + e.reason;
            app.tab.open("https://youtu.be/dbBnWScaedo");
            config.welcome.lastupdate = Date.now();
          }
        }, 3000);
      }
    });
  });
}

app.storage = (function () {
  var objs = {};
  window.setTimeout(function () {
    chrome.storage.local.get(null, function (o) {
      objs = o;
      var script = document.createElement("script");
      script.src = "../common.js";
      document.body.appendChild(script);
    });
  }, 300);
  /*  */
  return {
    "read": function (id) {return objs[id]},
    "write": function (id, data) {
      var tmp = {};
      tmp[id] = data;
      objs[id] = data;
      chrome.storage.local.set(tmp, function () {});
    }
  }
})();

app.options = (function () {
  var tmp = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendeponse) {
    for (var id in tmp) {
      if (tmp[id] && (typeof tmp[id] === "function")) {
        if (request.path === "options-to-background") {
          if (request.method === id) tmp[id](request.data);
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {tmp[id] = callback},
    "send": function (id, data) {
      chrome.runtime.sendMessage({"path": "background-to-options", "method": id, "data": data});
    }
  }
})();

app.webrequest = {
  "observe": function (callback) {
    var onBeforeRequest = function (e) {
      var id = {};
      var type = e.type;
      var current = e.url;
      var initiator = e.initiator;
      /*  */
      id.a = e.tabId;
      id.b = e.tabId + '|' + e.frameId;
      if (type === "ping" || type === "main_frame" || type === "sub_frame") {
        app.parent[id.a] = current;
        app.parent[id.b] = current;
      }
      /*  */
      return callback({
        "type": type,
        "current": current,
        "top": {
          'a': initiator,
          'b': app.parent[id.a],
          'c': app.parent[id.b]
        }
      });
    };
    /*  */
    chrome.webRequest.onBeforeRequest.addListener(onBeforeRequest, {
      "urls" : [
        "http://*/*", 
        "https://*/*"
      ]
    }, ["blocking"]);
  }
};
