var appAnswerCircle1 = document.querySelector('.app-answer-circle1');
var appAnswerCircle2 = document.querySelector('.app-answer-circle2');
var appAnswer = document.querySelector('.app-answer');

var appAnswerCircles = [appAnswerCircle1, appAnswerCircle2];

let appAnswerInRange = false;
let appAnswerExist = false;
window.addEventListener('scroll', (e) => {

  let top = Math.round(window.innerHeight - window.innerHeight / 2);
  let bottom = -300;
  let end = -900;

  if (Math.round(appAnswer.getBoundingClientRect().top) < top && Math.round(appAnswer.getBoundingClientRect().top) > bottom) {
    appAnswerInRange = true;
  }

  if ((Math.round(appAnswer.getBoundingClientRect().top) < end) && appAnswerExist) {
    appAnswerExist = false;
    appAnswerInRange = false;
    console.log('remove');
    for (let i = 1; i <= tablebgs.length; i++) {
      appAnswerCircles[i - 1].style.animation = ``;
    }
  }

  if (appAnswerInRange && !appAnswerExist) {
    appAnswerExist = true;
    console.log('add');
    for (let i = 1; i <= appAnswerCircles.length; i++) {
      appAnswerCircles[i - 1].style.animation = `appAnswerCircle${i} 1s ease-in-out forwards`;
    }
  }
})