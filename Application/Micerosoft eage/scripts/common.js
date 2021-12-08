app.webrequest.observe(function (e) {
  var a = e.top.a && config.youtube.regexp.top.test(e.top.a);
  var b = e.top.b && config.youtube.regexp.top.test(e.top.b);
  var c = e.top.c && config.youtube.regexp.top.test(e.top.c);
  /*  */  
  if (a || b || c) {
    if (e.current.indexOf(".googlevideo.") !== -1) return;
    /*  */
    var allow = config.youtube.regexp.allow.test(e.current);
    var block = config.youtube.regexp.block.test(e.current);
    /*  */
    if (allow === false && block === true) {
      if (config.log) console.error(">> Blocking ad", e.current);
      return {"cancel": true};
    }
    /*  */
    if (config.youtube.annotations === true) {      
      var annotation = config.youtube.regexp.annotations.test(e.current);
      if (annotation) {
        if (config.log) console.error(">> Blocking annotation", e.current);
        return {"cancel": true};
      }
    }
  }
});

app.options.receive("annotations", function (e) {
  config.youtube.annotations = e;
});

app.options.receive("storage", function () {
  app.options.send("render", {
    "annotations": config.youtube.annotations
  });
});