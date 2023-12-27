var tablebg1 = document.querySelector('.app-safe1-table-bg1');
var tablebg2 = document.querySelector('.app-safe1-table-bg2');
var tablebg3 = document.querySelector('.app-safe1-table-bg3');
var tablebg4 = document.querySelector('.app-safe1-table-bg4');
var tablebg5 = document.querySelector('.app-safe1-table-bg5');
var appSafe1 = document.querySelector('.app-safe1');

var tablebgs = [tablebg1, tablebg2, tablebg3, tablebg4, tablebg5];

let appSafe1InRange = false;
let appSafe1Exist = false;
window.addEventListener('scroll', (e) => {

  let top = Math.round(window.innerHeight - window.innerHeight / 2);
  let bottom = -300;
  let end = -1000;

  if (Math.round(appSafe1.getBoundingClientRect().top) < top && Math.round(appSafe1.getBoundingClientRect().top) > bottom) {
    appSafe1InRange = true;
  }

  if ((Math.round(appSafe1.getBoundingClientRect().top) < end || Math.round(appSafe1.getBoundingClientRect().top) > window.innerHeight0 + 300) && appSafe1Exist) {
    appSafe1Exist = false;
    appSafe1InRange = false;
    console.log('remove');
    for (let i = 1; i <= tablebgs.length; i++) {
      tablebgs[i - 1].style.animation = ``;
    }
  }

  if (appSafe1InRange && !appSafe1Exist) {
    appSafe1Exist = true;
    console.log('add');
    for (let i = 1; i <= tablebgs.length; i++) {
      tablebgs[i - 1].style.animation = `tablebg${i} 2s ease-in-out forwards`;
    }
  }
})