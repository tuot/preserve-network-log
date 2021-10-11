
chrome.devtools.network.onRequestFinished.addListener(function (request) {
  request.getContent((body) => {
    if (request._resourceType === "fetch" || request._resourceType === "xhr") {
      console.log(request.request.method, request.request.url);
      console.log(body);
    }
  });
});

document.getElementById("switch-button").checked = true;
console.log("log request starting...");