module.exports = function () {

  //begin course-questions tabs
  $('.course-questions-tabs__question').on('click', function () {
    if ($(this).parents('.course-questions-tabs-row').hasClass('active')) {
      $('.course-questions-tabs-row').removeClass('active');
      $('.course-questions-tabs__answer').slideUp();

    } else {
      $('.course-questions-tabs-row').removeClass('active');
      $('.course-questions-tabs__answer').slideUp();
      $(this).parents('.course-questions-tabs-row').addClass('active');
      $(this).siblings('.course-questions-tabs__answer').slideDown();
    }

  });
  //end course-questions tabs

  //begin my-course tabs
  $('.my-course-body-tabs__btn').on('click', function () {
    var tab = $(this).data('tab');

    $('.my-course-body-tabs__btn, .my-course-body-tabs__tab').removeClass('active');
    $(this).addClass('active');
    $('.my-course-body-tabs__tab-' + tab).addClass('active');
  });
  //end my-course tabs

  //begin popup tabs
  $('.popup-enter__tab-btn').on('click', function () {
    var tab = $(this).data('tab');

    $('.popup-enter__tab-btn, .popup-enter__autorise, .popup-enter__register').removeClass('active');

    $(this).addClass('active');
    $('.popup-enter__' + tab).addClass('active');
  });
  //end popup tabs

};