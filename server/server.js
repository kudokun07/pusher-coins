const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const Pusher = require('pusher')

const pusher = new Pusher({
  appId: '555034',
  key: '2b0f717b357a9c89cddf',
  secret: '7e1cd79533ec035be541',
  cluster: 'ap1',
  encrypted: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
  // Website you widh to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Request-With, content-type')
  //Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. incase you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)
  // Pass to next layer of middleware
  next()
})

//Set port to be used by Node.js

app.set('port', (7000))

app.get('/', (req, res) => {
  res.send('Welcome')
})

// API route in which the price information will be sent to from the clientside

app.post('/prices/new', (req, res) => {
  //Trigger the 'prices' ecent to the 'coin-prices' channel
  pusher.trigger('coin-prices', 'prices', {
    prices: req.body.prices
  })
  res.sendStatus(200)
})

app.listen(app.get('port', () => {
  console.log('Node app is running on port', app.get('port'))
}))