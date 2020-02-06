'use strict'; // import SimpleBar from 'simplebar';

var prevScrollPos = 0;
$('.content').scroll(function () {
  var data = $('.content').scrollTop();

  if (prevScrollPos < data) {
    $('.header').slideUp();
  } else {
    $('.header').slideDown();
  }

  prevScrollPos = data;
});

