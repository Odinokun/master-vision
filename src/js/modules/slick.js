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

  $('.course-schedule__slider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots:false,
    responsive: [
      {
        breakpoint: 1111,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.courses-top__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots:false,
    responsive: [
      {
        breakpoint: 861,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.about-teachers__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:false,
    responsive: [
      {
        breakpoint: 1021,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.index-popular__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:false,
    responsive: [
      {
        breakpoint: 1111,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end Slick slider


  //begin slider with counters
    // отображаем общее кол-во слайдов
    $('#index-direction__slider').on('init', function (event, slick) {
      var allSlide = slick.slideCount;
      if (allSlide < 10) {
        allSlide = "0" + allSlide;
      }
      $("#counter-all").html(allSlide);
    });
    // отображаем текущий слайд в счетчике
    $('#index-direction__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      var curSlide = currentSlide + 1;
      if (curSlide < 10) {
        curSlide = "0" + curSlide;
      }
      $("#counter-tab").html(curSlide);
    });
    // инициализируем слайдер
    $('#index-direction__slider').slick({
      arrows: true,
      fade: true,
      autoplay: false,
      cssEase: 'linear',
      slidesToShow: 1,
      infinity:false,
      slidesToScroll: 1,
      dots: false,
      adaptiveHeight: true,
      dotsClass: 'custom_paging'
    });
  //end slider with counters


  //begin fadeIn/Out left arrows
  $('.slick-slider .slick-next').on('click', function () {
    var slider = $(this).parents('.slick-slider');
    $(slider).children('.slick-prev').addClass('active');
  });
  //end fadeIn/Out left arrows

  //begin fade next btn if last slide is active
  $('.course-schedule__slider .slick-next, .course-schedule__slider .slick-prev').on('click', function () {
    var slider = $(this).parents('.course-schedule__slider');
    var lastChild = $(slider).find('.slick-slide:last');

    if($(lastChild).hasClass('slick-active')){
      $(slider).children('.slick-next').addClass('hide');
    } else {
      $(slider).children('.slick-next').removeClass('hide');
    }
  });
  //end fade next btn if last slide is active
  
  
  

};
