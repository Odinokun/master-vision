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

  $('.profile-teacher__reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.profile-teacher__reviews-t-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots:false,
    responsive: [
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // end Slick slider

};