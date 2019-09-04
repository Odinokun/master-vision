module.exports = function() {

  // begin video
  $('.btn-mute').on('click', function () {
    if( $(".about-top__video").prop('muted') ) {
      $(".about-top__video").prop('muted', false);
    } else {
      $(".about-top__video").prop('muted', true);
    }
  });
  // end video

};