var apiai = require('apiai');

var app = apiai("77a1d2e2e92c4e86abfe74515392b6fd");

var request = app.textRequest('Interface', {
    sessionId: '12345'
});
request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
