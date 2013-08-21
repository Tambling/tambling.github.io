$(document).ready(function(){
  $("a[href='#about']").click(function(event){
    event.preventDefault();
    $("#about").slideToggle();
    $("#floater").toggleClass("opaque");
  });
});
