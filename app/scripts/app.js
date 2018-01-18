import $ from 'jquery'
import 'popper.js'
import 'bootstrap'
import 'jquery-smooth-scroll'

$(document).ready(function() {
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
})

$('.scroll-link').smoothScroll({ offset: -112 })
