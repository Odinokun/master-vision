module.exports = function() {

  // begin addFileName
  $('input[type=file]').change(function(){
    // console.log($(this).val());
    var path = $(this).val();
    var fileName = path.replace('C:\\fakepath\\', '');

    $(this).siblings('.download-files').append('<span class="download-file">' + fileName + '</span>');
  });
  // end addFileName

};