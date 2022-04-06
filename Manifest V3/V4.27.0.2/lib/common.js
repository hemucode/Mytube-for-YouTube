var old = 0;

window.setTimeout(function () {
  var version = config.welcome.version;
  if (!version) {
    app.tab.open(config.welcome.url + "?v=" + app.version() + "&type=install");
    config.welcome.version = app.version();
  }
}, config.welcome.timeout);

app.popup.receive("load", function () {
  app.popup.send("load", {"width": config.popup.width, "height": config.popup.height});
});

app.content_script.receive("badge", function (e) {
  var count = e.count, icount = parseInt(count);
  if ((icount + '') !== (count + '')) return;
  /*  */
  count = icount;
  if (count !== old) {
    old = count;
    count = count <= 0 ? '' : (count > 99 ? "99+" : count);
    app.button.badge = count + '';
  }
});
