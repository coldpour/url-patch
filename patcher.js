function patchProtocol (url) {
  var httpProto = 'http://';
  var httpsProto = 'https://';
  if(url.startsWith(httpsProto) || url.startsWith(httpProto)) {
    return url;
  } else {
    return httpProto + url;
  }
};

function removeTrailingSlashes(url) {
  var i = url.length - 1;
  while (i > 0 && url[i] === '/') {
    i--;
  }
  return url.substr(0, i+1);
};

function patchUrl(url) {
  if(url && typeof url === "string") {
    return patchProtocol(removeTrailingSlashes(url));
  }
  return url;
};

module.exports = patchUrl;
