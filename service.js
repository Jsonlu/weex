/**
 * Created by jsonlu on 17/6/25.
 */

var express = require('express');
var app = express();

app.use('/dist', express.static('dist'));
app.use('/web', express.static('web'));
app.use('/node_modules', express.static('node_modules'));

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});