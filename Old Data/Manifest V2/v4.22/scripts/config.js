var config = {};

config.welcome = {
  "timeout": 3000,
  get version () {return app.storage.read("version")},
  "url": "http://mybrowseraddon.com/wa-messenger.html",
  set version (val) {app.storage.write("version", val)}
};

config.popup = {
  get width () {return app.storage.read('width') || 800},
  get height () {return app.storage.read('height') || 550},
  set width (val) {
    val = parseInt(val);
    if (val < 570) val = 570;
    if (val > 1280) val = 1280;
    app.storage.write('width', val);
  },
  set height (val) {
    val = parseInt(val);
    if (val < 400) val = 400;
    if (val > 800) val = 800;
    app.storage.write('height', val);
  }
};
