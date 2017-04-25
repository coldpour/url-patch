var patchProtocol = (url) => {
  var protocolStr = 'http://';
  if(url.substr(0,5) == 'https') {
    return url;
  }
  else if (url.substr(0,4) == 'http') {
    return url;
  }
  else {
    return protocolStr + url;
  }
};

var patchTrailingSlash = (url) => {
  var lastIndex = url.length-1;
  if(url.endsWith('/')) {
    url = url.substr(0, lastIndex);
  }
  return url;
};

var patchUrl = (url) => {
  return patchProtocol(patchTrailingSlash(url));
};

module.exports = patchUrl;
