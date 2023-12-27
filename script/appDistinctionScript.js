var appDistinctionCircle1 = document.querySelector('.app-distinction-circle1');
var appDistinctionCircle2 = document.querySelector('.app-distinction-circle2');
var appDistinction = document.querySelector('.app-distinction');

var appDistinctionCircles = [appDistinctionCircle1, appDistinctionCircle2];

let appDistinctionInRange = false;
let appDistinctionExist = false;
window.addEventListener('scroll', (e) => {

  let top = Math.round(window.innerHeight - window.innerHeight / 2);
  let bottom = -300;
  let end = -1000;

  if (Math.round(appDistinction.getBoundingClientRect().top) < top && Math.round(appDistinction.getBoundingClientRect().top) > bottom) {
    appDistinctionInRange = true;
  }

  if ((Math.round(appDistinction.getBoundingClientRect().top) < end) && appDistinctionExist) {
    appDistinctionExist = false;
    appDistinctionInRange = false;
    console.log('remove');
    for (let i = 1; i <= tablebgs.length; i++) {
      appDistinctionCircles[i - 1].style.animation = ``;
    }
  }

  if (appDistinctionInRange && !appDistinctionExist) {
    appDistinctionExist = true;
    console.log('add');
    for (let i = 1; i <= appDistinctionCircles.length; i++) {
      appDistinctionCircles[i - 1].style.animation = `appDistinctionCircle${i} 1s ease-in-out forwards`;
    }
  }
})