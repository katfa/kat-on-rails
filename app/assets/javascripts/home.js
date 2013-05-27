function debug(msg) {
  var log = document.getElementById('debug-log'),
    pre = document.createElement('pre'),
    date = new Date().toUTCString(),
    text = document.createTextNode('[' + date + ']\n - ' + msg);

  pre.appendChild(text);
  log.appendChild(pre);
}

debug("TEST");