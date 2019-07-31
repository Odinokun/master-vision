module.exports = function() {

  // begin DND
  $( function() {
    $('.my-course-homework__item-druglist').sortable();
    $('.my-course-homework__item-druglist').disableSelection();
    $('.my-course-homework__item-lists-answers').sortable();
    $('.my-course-homework__item-lists-answers').disableSelection();
  } );
  // end DND

};