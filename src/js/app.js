$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin back2top
  require('./modules/back2top')();

  // begin menu
  require('./modules/menu')();

  // begin tags
  require('./modules/tags')();

  // begin showMore
  require('./modules/showMore')();

  // begin radio
  require('./modules/radio')();

  // begin checkbox
  require('./modules/checkbox')();

  // begin addFileName
  require('./modules/addFileName')();

  // begin DND
  require('./modules/drugNdrop')();
  require('./modules/drugNdrop-mobile')();

  // begin rait
  require('./modules/rait')();

  // begin Scroll2Ancor
  // require('./modules/scroll2ancor')();

  // begin Slick slider
  require('./modules/slick')();

  // begin Popup
  require('./modules/popup')();

  // begin Popup Add User
  require('./modules/popup-add-user')();

  // begin tabs
  require('./modules/tabs')();

  // begin full article
  require('./modules/fullArticle')();

  // begin popup item delete
  require('./modules/popup-item-del')();

  // begin friends popup
  require('./modules/friends-popup')();

  // begin Animate.css
  // require('./modules/waypoints')();
  // require('./modules/animateCss')();

  // begin Fancybox3
  // require('./modules/fancybox')();

});