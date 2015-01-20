var ports = [];
chrome.runtime.onConnect.addListener(function(port) {
  if (port.name !== "devtools") return;
  ports.push(port);
  // Remove port when destroyed (eg when devtools instance is closed)
  port.onDisconnect.addListener(function() {
    var i = ports.indexOf(port);
    if (i !== -1) ports.splice(i, 1);
  });
  port.onMessage.addListener(function(msg) {
    // Received message from devtools. Do something:
    //console.log('request to ', msg.request.url);
    console.log('response ', msg);
    //make ajax request.
    //change URL accordingly
    servers = [];
    servers.push('http://192.168.1.102/echoData');
    servers.push('http://192.168.1.128/echoData');
    //servers.push('http://10.48.102.3001/echoData'); //Add more servers here
    for (index = 0; index < servers.length; index++) {
    $.ajax({
      type: 'POST', //GET or POST or PUT or DELETE verb
      //url:window.serverURl,
      url:servers[index],
      data:JSON.stringify({"response":msg}) , //Data sent to server
      contentType: 'application/json', // content type sent to server
      success: function (msg, textStatus, xmlHttp) {
        result = msg;
      }
    });
  }

  });
});