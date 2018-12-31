var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
let port = 6969

app.set('port', (process.env.PORT || port));
app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => res.render('./index.html'))
app.get('/2019', (req, res) => res.render('./index.html'))
app.get('/bienphamxuan', (req, res) => res.render('./index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))