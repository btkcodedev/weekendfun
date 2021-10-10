const fist = document.getElementById("fist");
const glass = document.getElementById("glass");
let isPunching = false;

function punchTheGlass() {
  let delay = 0.15;
  isPunching = true;
  TweenMax.to(fist, 0.25, { scaleX: 4, scaleY: 4 });

  for (let i = 0; i < 5; i++) {
    const isXNegative = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    const isYNegative = Math.floor(Math.random() * 2) == 1 ? 1 : -1;

    TweenMax.to(glass, 0.1, {
      y: Math.random() * 12 * isYNegative,
      x: Math.random() * 12 * isXNegative,
      delay });


    TweenMax.to(fist, 0.1, {
      y: Math.random() * 12 * isYNegative,
      x: Math.random() * 12 * isXNegative,
      delay });


    if (i === 4) {
      TweenMax.to(glass, 0.25, {
        y: 0,
        x: 0,
        delay: delay + 0.1 });


      TweenMax.to(fist, 0.25, {
        y: 0,
        x: 0,
        delay: delay + 0.1 });

    }

    delay += 0.1;

    TweenMax.to(fist, 0.25, {
      scaleX: 1,
      scaleY: 1,
      delay: delay + 0.25,
      onComplete: function () {
        isPunching = false;
      } });

  }
}
document.addEventListener("click", function (e) {
    if (!isPunching) {
      punchTheGlass();
    }
});