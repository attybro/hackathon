var WebSocket = require('ws')
, ws = new WebSocket('ws://127.0.0.1:1337');
ws.on('open', function(data) {

console.log("connected");
console.log(data)
});

ws.on('message', function(message) {
console.log('received: %s', message);
}); 
