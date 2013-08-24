$(document).ready(function(){
  $("a[href='#about']").click(function(event){
    event.preventDefault();
    $("#floater").toggleClass("opaque bordered flush-right", 200);
    $(this).toggleClass('active');
  });
});
