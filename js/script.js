function onamaWindow() {
  $('#alert-onama').fadeIn(300);
  $('#onama-single-page').fadeIn(1000);

}
  $('#alert-x').click(function() {
    $('#alert-onama').fadeOut(500);
});

$(document).keyup(function(e) {
    if (e.which == 27) {
        $("#alert-onama").fadeOut(500);
    }
});
