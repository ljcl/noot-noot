;(function () {
  'use strict'
  // Listen for taps and clicks
  window.addEventListener('touchend', onNoot)
  window.addEventListener('click', onNoot)
  window.addEventListener('load', onNoot) // Create Event Listener for KeyDown
  window.AudioContext = window.AudioContext || window.webkitAudioContext // Let older webkit browsers join in on the fun
  var twitterShare = document.querySelector('.twitter-share-button')
  var tweetUrl = twitterShare.dataset.tweeturl

  function storageAvailable (type) {
    try {
      var storage = window[type],
        x = '__storage_test__'
      storage.setItem(x, x)
      storage.removeItem(x)
      return true
    } catch(e) {
      return false
    }
  }

  // Create the noot & build audiocontext
  var noot // Create the noot
  var context = new AudioContext()
  var userAgent = navigator.userAgent || navigator.vendor || window.opera
  var preventFirst = false // Create and Initialize the Audio Context

  var getSound = new XMLHttpRequest() // Load the Sound with XMLHttpRequest
  getSound.open('GET', 'noot.mp4', true) // Path to Audio File
  getSound.responseType = 'arraybuffer' // Read as Binary Data
  getSound.onload = function () {
    context.decodeAudioData(getSound.response, function (buffer) {
      noot = buffer // Decode the Audio Data and Store it in a Variable
    })
  }
  getSound.send() // Send the Request and Load the File

  function loadNoot () {
    if (storageAvailable('localStorage')) {
      if (!localStorage.getItem('noots')) {
        twitterShare.innerHTML = 0 + ' Noots'
        twitterShare.href = tweetUrl + ' (' + 0 + '!)'
      } else {
        twitterShare.innerHTML = localStorage.getItem('noots') + ' Noots'
        twitterShare.href = tweetUrl + ' (' + localStorage.getItem('noots') + '!)'
        twitterShare.dataset.noot = localStorage.getItem('noots')
      }
    }
    console.log('loading noots')
  }

  function saveNoot (count) {
    if (storageAvailable('localStorage')) {
      localStorage.setItem('noots', count)
    }
    console.log('saving noots!')
  }

  loadNoot()

  function onNoot (e) {
    var playSound = context.createBufferSource() // Declare a New Sound
    playSound.buffer = noot; // Attatch our Audio Data as it's Buffer
    playSound.connect(context.destination) // Link the Sound to the Output
    playSound.start ? playSound.start(context.currentTime) : playSound.noteOn(context.currentTime); // Play the Sound Immediately, fallback to noteOn
    countNoot()
  }

  // Count the noots
  function countNoot (e) {
    if (preventFirst === false && (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i))) {
      // iOS
      preventFirst = true
      return
    }

    var counter = twitterShare.dataset.noot
    counter++
    twitterShare.dataset.noot = counter
    twitterShare.innerHTML = counter + ' Noots'
    twitterShare.href = tweetUrl + ' (' + counter + '!)'
    dataLayer.push({
      'event': 'trackEvent',
      'gtmCategory': 'action',
      'gtmAction': 'noot',
      'gtmValue': 1
    })
    saveNoot(counter)
    if (e) { return; }
    setTimeout(function () {
      countNoot('stop')
    }, 600)
  }
}())

;(function () {
  'use strict'

  function gaEvent () {
    if (this.dataset.ga !== 'undefined') {
      var category = this.dataset.category,
        action = this.dataset.action,
        label = this.dataset.label,
        value = this.dataset.value
      // Send the event, homie.
      dataLayer.push({
        'event': 'trackEvent',
        'gtmCategory': category,
        'gtmAction': action,
        'gtmLabel': label,
        'gtmValue': value
      })
    }
  }
}())
