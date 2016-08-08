require('dotenv').load({path: __dirname + '/.env'})

// Initialise New Relic if an app name and license key exists
if (process.env.NEW_RELIC_APP_NAME && process.env.NEW_RELIC_LICENSE_KEY) {
  require('newrelic')
}

var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.locals.port = process.env.PORT || 5000
// app.locals.env = 'production'
app.locals.env = process.env.NODE_ENV || 'development'
app.locals.gtm_property = process.env.GTM_PROPERTY || false
// Adsense if ya got it
app.locals.adsense = false
if (process.env.ADSENSE_CLIENT && process.env.ADSENSE_AD_SLOT) {
  app.locals.adsense = {
    client: process.env.ADSENSE_CLIENT,
    adSlot: process.env.ADSENSE_AD_SLOT
  }
}
app.locals.social = {
  'facebookId': process.env.FACEBOOK_ID || false,
  'twitterSite': process.env.TWITTER_SITE || false
}

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index', {
    title: '&#x1F427; Noot Noot!',
    description: 'Toot my noot. Pingu noots on demand!',
    og: {
      title: 'Noot Noot!',
      url: 'http://noot.space',
      description: 'Noots on demand!',
      image: 'http://noot.space/noot.gif'
    }
  })
})

app.listen(app.locals.port, function () {
  console.log(`Example app listening on port ${app.locals.port}!`)
})
