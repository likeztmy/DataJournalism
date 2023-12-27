var appWhat = document.querySelector('.app-what');
var appWhatItem1 = document.querySelector('.app-what-item1');
var appWhatItem2 = document.querySelector('.app-what-item2');
var appWhatItem3 = document.querySelector('.app-what-item3');
var appWhatItem4 = document.querySelector('.app-what-item4');
var appWhatItems = [appWhatItem1, appWhatItem2, appWhatItem3, appWhatItem4];

let appWhatInRange = false;
let appWhatExist = false;

window.addEventListener('scroll', (e) => {

  let top = 300;
  let bottom = -300;
  let end = -1800;

  if (Math.round(appWhat.getBoundingClientRect().top) < top && Math.round(appWhat.getBoundingClientRect().top) > bottom) {
    appWhatInRange = true;
  }

  if (((Math.round(appWhat.getBoundingClientRect().top) < end) || Math.round(appWhat.getBoundingClientRect().top) > window.innerHeight - 100) && appWhatExist) {
    appWhatExist = false;
    appWhatInRange = false;
    console.log('remove');
    for (let i = 1; i <= appWhatItems.length; i++) {
      appWhatItems[i - 1].style.animation = ``
    }
  }

  if (appWhatInRange && !appWhatExist) {
    appWhatExist = true;
    console.log('add');
    for (let i = 1; i <= appWhatItems.length; i++) {
      appWhatItems[i - 1].style.animation = `appWhatItem${i} 2s linear forwards`
    }
  }
})