var patchProtocol = (url) => {
  var protocolStr = 'http://';
  if(!url.startsWith(protocolStr)) {
    url = protocolStr + url;
  }
  return url;
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
