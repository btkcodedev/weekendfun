<<<<<<< HEAD
const button = document.getElementById("runaway-btn");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
=======
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
>>>>>>> ghtemp/main
