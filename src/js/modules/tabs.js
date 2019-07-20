module.exports = function () {

  // begin tabs
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

  })
  // end tabs

};