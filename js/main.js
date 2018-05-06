$(document).ready(function(){

  $(window).scroll(function(){

    var scrollval =  $(this).scrollTop();
    $("#logo").css("transform", 'translate(0px -'+ scrollval+'%)');
    $("#btn").css("transform", 'translate(-50%'+ scrollval/3+'%)');
  })
});