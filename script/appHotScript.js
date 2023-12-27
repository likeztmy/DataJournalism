var appHotImg1 = document.querySelector('.app-hot-img1-box');
var appHotImg2 = document.querySelector('.app-hot-img2-box');
var appHotImg3 = document.querySelector('.app-hot-img3-box');
var appHotImg4 = document.querySelector('.app-hot-img4-box');
var appHotCircle1 = document.querySelector('.app-hot-circle1');
var appHotCircle2 = document.querySelector('.app-hot-circle2');
var appHot = document.querySelector('.app-hot');

var appHotImgs = [appHotImg1, appHotImg2, appHotImg3, appHotImg4];
var appHotCircles = [appHotCircle1, appHotCircle2];

let appHotInRange = false;
let appHotExist = false;

window.addEventListener('scroll', (e) => {

  let top = Math.round(window.innerHeight - window.innerHeight / 2);
  let bottom = -300;
  let end = -1000;

  if (Math.round(appHot.getBoundingClientRect().top) < top && Math.round(appHot.getBoundingClientRect().top) > bottom) {
    appHotInRange = true;
  }

  if (((Math.round(appHot.getBoundingClientRect().top) < end) || Math.round(appHot.getBoundingClientRect().top) > window.innerHeight - 100) && appHotExist) {
    appHotExist = false;
    appHotInRange = false;
    console.log('remove');
    for (let i = 1; i <= appHotCircles.length; i++) {
      appHotCircles[i - 1].style.animation = ``;
    }

    for (let i = 1; i <= appHotImgs.length; i++) {
      appHotImgs[i - 1].style.animation = ``;
    }
  }

  if (appHotInRange && !appHotExist) {
    appHotExist = true;
    console.log('add');
    for (let i = 1; i <= appHotCircles.length; i++) {
      appHotCircles[i - 1].style.animation = `appHotCircle${i} 1s linear forwards`;
    }

    for (let i = 1; i <= appHotImgs.length; i++) {
      appHotImgs[i - 1].style.animation = `appHotImg 1s linear 1s forwards`;
    }
  }
})