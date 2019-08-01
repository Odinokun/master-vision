module.exports = function() {

  // begin rait
  $('.course-about__teacher-rait svg').on('click', function () {
    var rait = $(this).index() + 1;
    $(this).parents('.course-about__teacher-rait').removeClass('course-about__teacher-rait--1');
    $(this).parents('.course-about__teacher-rait').removeClass('course-about__teacher-rait--2');
    $(this).parents('.course-about__teacher-rait').removeClass('course-about__teacher-rait--3');
    $(this).parents('.course-about__teacher-rait').removeClass('course-about__teacher-rait--4');
    $(this).parents('.course-about__teacher-rait').removeClass('course-about__teacher-rait--5');
    $(this).parents('.course-about__teacher-rait').addClass('course-about__teacher-rait--' + rait );
  });
  // end rait

};