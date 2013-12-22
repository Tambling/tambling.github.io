$(document).ready(function(){
  var scrollTimer = null;
  var headerVisible = false;
  $(window).scroll(function(event){
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    setTimeout(toggleHeader, 200)
  });
  var toggleHeader = function(){
    var position = $(window).scrollTop();
    var scrollingHead = $('#scrolling-head')
    if (position > 65 && !headerVisible){
      scrollingHead.toggleClass('invisible');
      headerVisible = true;
    } else if (position < 100 && headerVisible) {
      scrollingHead.toggleClass('invisible');
      headerVisible = false;
    }
  }
});
