
var appAccept = document.querySelector('.app-accept');

let appAcceptInRange = false;
let appAcceptExist = false;
let appAcceptChart;
window.addEventListener('scroll', (e) => {

  let top = Math.round(window.innerHeight - window.innerHeight / 2);
  let bottom = -300;
  let end = -1000;

  if (Math.round(appAccept.getBoundingClientRect().top) < top && Math.round(appAccept.getBoundingClientRect().top) > bottom) {
    appAcceptInRange = true;
  }

  if ((Math.round(appAccept.getBoundingClientRect().top) < end || Math.round(appAccept.getBoundingClientRect().top) > window.innerHeight + 1000) && appAcceptExist) {
    appAcceptExist = false;
    appAcceptInRange = false;
    console.log('remove');
    appAcceptChart && appAcceptChart.dispose();
  }

  if (appAcceptInRange && !appAcceptExist) {
    appAcceptExist = true;
    console.log('add');
    // 绘制调查问卷 您对各类预制菜的接受度如何？ 柱状图
    appAcceptChart = echarts.init(document.getElementById('app-accept-graph'));
    const appAcceptChartOption = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '完全不能接受', '比较不能接受', '一般', '比较接受', '完全接受'],
          ['即食类', 20, 20, 105, 170, 165],
          ['即热类', 15, 0, 80, 190, 235],
          ['即烹类', 25, 150, 120, 130, 65],
          ['即配类', 30, 60, 125, 165, 100]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };
    appAcceptChart.setOption(appAcceptChartOption, true);
  }
})