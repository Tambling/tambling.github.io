$(document).ready(function(){
  $("a[href='#about']").click(function(event){
    event.preventDefault();
    $('#about').toggle();
    $("#floater").toggleClass("opaque bordered");
    $(this).toggleClass('active');
  });
});
