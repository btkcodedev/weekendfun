/*
$('.switch').on('click', function(){
  $(".top").toggleClass("clicked");
  $('.closer').toggleClass("active").one(transitionEnd,   
    function(e) {

    $(".top").toggleClass("clicked");
    $('.closer').toggleClass("active").one(transitionEnd,   
    function(e) {

  });

  });

});

var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

*/

var el = document.getElementsByClassName('switch');

el[0].addEventListener('click', function(){
 let po = document.getElementsByClassName("top");
 po[0].classList.toggle("clicked"); 
  
 let clo = document.getElementsByClassName('closer');
  clo[0].classList.toggle("active");
  clo[0].addEventListener("transitionend",   
    function() {
    
    let to = document.getElementsByClassName("top")
    to[0].classList.toggle("clicked");
   
    let cl =  document.getElementsByClassName('closer');
  clo[0].classList.toggle("active");
  clo[0].addEventListener("transitionend",   
    function() {});
  });
  
  
});