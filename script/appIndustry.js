var appIndustry = document.querySelector('.app-industry');

let appIndustryInRange = false;
let appIndustryExist = false;
let cplChart;
window.addEventListener('scroll', (e) => {

  let top = Math.round(window.innerHeight - window.innerHeight / 2);
  let bottom = -300;
  let end = -1000;

  if (Math.round(appIndustry.getBoundingClientRect().top) < top && Math.round(appIndustry.getBoundingClientRect().top) > bottom) {
    appIndustryInRange = true;
  }

  if ((Math.round(appIndustry.getBoundingClientRect().top) < end || Math.round(appIndustry.getBoundingClientRect().top) > window.innerHeight + 1000) && appIndustryExist) {
    appIndustryExist = false;
    appIndustryInRange = false;
    console.log('remove');
    cplChart && cplChart.dispose();
  }

  if (appIndustryInRange && !appIndustryExist) {
    appIndustryExist = true;
    console.log('add');
    cplChart = echarts.init(document.getElementById('app-industry-graph'));
    let cpl_data = companyYear

    let cplOption = {

      title: {
        text: '预制菜公司年份分布情况',
        left: 'center',
        top: '2%'
      },

      xAxis: {
        type: 'category',
        data: cpl_data.map(v => { return v.name })
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          data: cpl_data.map(v => { return v.value }),
          type: 'line',
          width: '70%',
          height: '80%',
        },

      ],
      animation: true,  // 开启动画效果
      animationDuration: 1000,  // 动画时长，单位为毫秒
      animationEasing: 'quadraticOut'  // 动画缓动效果
    };
    cplChart.setOption(cplOption, true)
  }
})