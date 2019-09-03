module.exports = function() {

  // begin popup open
  $('.popup-open').on('click', function() {
    var linkVal = $(this).attr('href');
    // console.log(linkVal);

    $('body').addClass('no-scroll');
    $(linkVal).fadeIn();
    $('.popup__layer').fadeIn();
  });
  // end popup open

  // begin popup close
  $('.popup__layer, .popup__close').on('click', function() {
    $('body').removeClass('no-scroll');
    $('.popup, .popup__layer').fadeOut();
  });
  // end popup close

};