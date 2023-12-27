var appFeature = document.querySelector('.app-feature');

let appFeatureInRange = false;
let appFeatureExist = false;
let featureChart;
window.addEventListener('scroll', (e) => {

  let top = Math.round(window.innerHeight - window.innerHeight / 2);
  let bottom = -300;
  let end = -1000;

  if (Math.round(appFeature.getBoundingClientRect().top) < top && Math.round(appFeature.getBoundingClientRect().top) > bottom) {
    appFeatureInRange = true;
  }

  if ((Math.round(appFeature.getBoundingClientRect().top) < end || Math.round(appFeature.getBoundingClientRect().top) > window.innerHeight + 1000) && appFeatureExist) {
    appFeatureExist = false;
    appFeatureInRange = false;
    console.log('remove');
    featureChart && featureChart.dispose();
  }

  if (appFeatureInRange && !appFeatureExist) {
    appFeatureExist = true;
    console.log('add');
    // 绘制调查问卷 学校是否会使用预制菜 饼图
    featureChart = echarts.init(document.getElementById('app-feature-graph'));
    const featureChartOption = {
      title: {
        text: '您是否看好预制菜的未来？ ',
        x: "10%",
        y: '2%',
        textStyle: {
          fontSize: 24,
          color: "black"
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        // boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['是', '否'],
        axisLabel: {
          textStyle: {
            fontSize: "16",
          },
        },
        axisTick: {
          alignWithLabel: true
        },
      },
      series: [
        // {
        //   name: '2011',
        //   type: 'bar',
        //   data: [18203, 23489, 29034, 104970, 131744, 630230]
        // },
        {
          // name: '2012',
          type: 'bar',
          data: [290, 190],
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{c}'
            }
          },
        }
      ]
    };
    featureChart.setOption(featureChartOption, true);
  }
})