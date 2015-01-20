var port = chrome.runtime.connect({name: 'devtools'});
chrome.devtools.network.onRequestFinished.addListener(
  function(request) {
    //change this search criteria to know which request data to forward.
    if(request.request.url.indexOf("https://pitangui.amazon.com/api/activities")!=-1){
      //forward the request to other server.
      request.getContent(function(content){
        port.postMessage(content);
      });
    }
  });