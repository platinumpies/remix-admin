var express = require('express');
var proxy = require('proxy');
var app = express();

app.set('port', (process.env.PORT || 9001));
app.use(express.static(__dirname + '/dist'));
app.use(proxy);

app.listen(app.get('port'), function() {
    console.log('Node app is running at localhost:' + app.get('port'));      
});
