import $ from 'jquery'
import 'popper.js'
import 'bootstrap'
import 'jquery-smooth-scroll'
import 'jquery-lazy'
import database from './database'
import contact from './contact'

$(document).ready(function() {
  (function() {
    database.init()
    contact.init()
  })()

  $('.lazy').Lazy({
    enableThrottle: true,
    throttle: 250
  })

  var nav = $('#navigation')

  $(window).scroll(function() {
    var windowPosition = $(window).scrollTop()

    if (windowPosition > 0) {
      nav.addClass('navigation--inverse')
    }
    else {
      nav.removeClass('navigation--inverse')
    }
  })

  $('.scroll-link').smoothScroll({ offset: - 105 })
})
