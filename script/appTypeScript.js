

var appType = document.querySelector('.app-type');

let appTypeInRange = false;
let appTypeExist = false;

window.addEventListener('scroll', (e) => {

  let top = 300;
  let bottom = -300;
  let end = -1000;

  if (Math.round(appType.getBoundingClientRect().top) < top && Math.round(appType.getBoundingClientRect().top) > bottom) {
    appTypeInRange = true;
  }

  if (((Math.round(appType.getBoundingClientRect().top) < end) || Math.round(appType.getBoundingClientRect().top) > window.innerHeight + 300) && appTypeExist) {
    appTypeExist = false;
    appTypeInRange = false;
    console.log('remove');
    // 绘制预制菜类型柱状图
    const typeChart = echarts.init(document.getElementById('app-type-graph'));
    const typeChartData = [];
    const typeChartOption = {
      title: {
        // text: 'World Population'
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
        data: ['自热火锅 八宝粥 \n\n 料理包 火腿肠', '速冻丸子 料理包 \n\n 火腿肠 水果捞', '料理包 水果捞 \n\n 汤圆 辣条'],
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
          data: typeChartData,
          label: {
            show: true,
            position: 'right'
          },
        }
      ]
    };
    typeChart.setOption(typeChartOption, true);
  }

  if (appTypeInRange && !appTypeExist) {
    appTypeExist = true;
    console.log('add');
    // 绘制预制菜类型柱状图
    const typeChart = echarts.init(document.getElementById('app-type-graph'));
    const typeChartData = [280, 160, 40];
    const typeChartOption = {
      title: {
        // text: 'World Population'
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
        data: ['自热火锅 八宝粥 \n\n 料理包 火腿肠', '速冻丸子 料理包 \n\n 火腿肠 水果捞', '料理包 水果捞 \n\n 汤圆 辣条'],
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
          data: typeChartData,
          label: {
            show: true,
            position: 'right'
          },
        }
      ]
    };
    typeChart.setOption(typeChartOption, true);
  }
})