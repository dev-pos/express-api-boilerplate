const express = require('express')
const bodyParser = require('body-parser')
const cfg = require('./app/config')

const app = express()

app.disable('etag')
app.disable('x-powered-by')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }))

app.use('/', express.static(__dirname + '/public'))

app.use('/api', require('./app/routes/'))

app.listen(cfg.port, () => {
    console.log('Server is up on port ' + cfg.port);
  });