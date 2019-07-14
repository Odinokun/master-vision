module.exports = function() {

  // begin Slick slider

  $('.profile-teacher-education__sertificate-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:false,
    responsive: [
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  // end Slick slider

};