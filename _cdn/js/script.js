function goTo(element , speed){
    var href = element.attr('href');
    var top = $(href).offset().top;
    $("html,body").animate({scrollTop : top }, speed);
};
  
$( "a" ).click(function() {
  goTo($(this) , 500);
});
    




