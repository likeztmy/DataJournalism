var appSummaryCircle1 = document.querySelector('.app-summary-circle1');
var appSummaryCircle2 = document.querySelector('.app-summary-circle2');
var appSummary = document.querySelector('.app-summary');

var appSummaryCircles = [appSummaryCircle1, appSummaryCircle2];

let appSummaryInRange = false;
let appSummaryExist = false;
window.addEventListener('scroll', (e) => {

  let top = Math.round(window.innerHeight - window.innerHeight / 2);
  let bottom = -300;
  let end = -1000;

  if (Math.round(appSummary.getBoundingClientRect().top) < top && Math.round(appSummary.getBoundingClientRect().top) > bottom) {
    appSummaryInRange = true;
  }

  if ((Math.round(appSummary.getBoundingClientRect().top) < end) && appSummaryExist) {
    appSummaryExist = false;
    appSummaryInRange = false;
    console.log('remove');
    for (let i = 1; i <= tablebgs.length; i++) {
      appSummaryCircles[i - 1].style.animation = ``;
    }
  }

  if (appSummaryInRange && !appSummaryExist) {
    appSummaryExist = true;
    console.log('add');
    for (let i = 1; i <= appSummaryCircles.length; i++) {
      appSummaryCircles[i - 1].style.animation = `appSummaryCircle${i} 1s ease-in-out forwards`;
    }
  }
})