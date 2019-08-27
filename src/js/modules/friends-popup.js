module.exports = function () {

  // begin friends-popup
  $(document).mouseup(function (e){
    var arr = $(".popup-arr");
    var list = $('.popup-list');

    console.log(e.target);

    if(arr.is(e.target) || arr.has(e.target).length !== 0){
      console.log(this);
      $(e.target).siblings(list).addClass('active');
    } else if (!arr.is(e.target) && !list.is(e.target)) {
      $(list).removeClass('active');
    }
  });
  // end friends-popup

};