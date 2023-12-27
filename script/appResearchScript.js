var appResearch = document.querySelector('.app-research');

let appResearchInRange = false;
let appResearchExist = false;

window.addEventListener('scroll', (e) => {

  let top = 300;
  let bottom = -300;
  let end = -1000;

  if (Math.round(appResearch.getBoundingClientRect().top) < top && Math.round(appResearch.getBoundingClientRect().top) > bottom) {
    appResearchInRange = true;
  }

  if (((Math.round(appResearch.getBoundingClientRect().top) < end) || Math.round(appResearch.getBoundingClientRect().top) > window.innerHeight - 100) && appResearchExist) {
    appResearchExist = false;
    appResearchInRange = false;
    console.log('remove');
    // 绘制问卷调查 男女比例 饼图
    const researchPeopleChart = echarts.init(document.getElementById('app-research-people-graph'));
    const researchPeopleChartData = [
      // { value: 250, name: '女' },
      // { value: 230, name: '男' },
    ];
    const researchPeopleChartOption = {
      title: {
        // text: '饼图纹理',
        textStyle: {
          color: '#235894'
        }
      },
      tooltip: {},
      color: ['#ffed51', '#1f96ff'],
      series: [
        {
          name: 'pie',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 30,
          clockwise: true,
          label: {
            fontSize: 30,
            color: '#235894'
          },
          labelLine: {
            lineStyle: {
              color: '#235894'
            }
          },
          data: researchPeopleChartData,
          itemStyle: {
            opacity: 0.7,
            borderWidth: 3,
            // borderColor: '#235894'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    researchPeopleChart.setOption(researchPeopleChartOption, true);

    const researchRoadChart = echarts.init(document.getElementById('app-research-road-graph-box'));
    const researchRoadChartData = [];
    const researchRoadChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['数字出版物', '视频平台', '网络社区', '传统媒体', '新闻客户端', '线下渠道', '其他'],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,//代表显示所有x轴标签显示
            rotate: 30, //代表逆时针旋转45度
          }
        },
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Life Cost',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          data: researchRoadChartData
        }
      ]
    };
    researchRoadChart.setOption(researchRoadChartOption, true);
  }

  if (appResearchInRange && !appResearchExist) {
    appResearchExist = true;
    console.log('add');
    // 绘制问卷调查 男女比例 饼图
    const researchPeopleChart = echarts.init(document.getElementById('app-research-people-graph'));
    const researchPeopleChartData = [
      { value: 250, name: '女' },
      { value: 230, name: '男' },
    ];
    const researchPeopleChartOption = {
      title: {
        // text: '饼图纹理',
        textStyle: {
          color: '#235894'
        }
      },
      tooltip: {},
      color: ['#ffed51', '#1f96ff'],
      series: [
        {
          name: 'pie',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 30,
          clockwise: true,
          label: {
            fontSize: 30,
            color: '#235894'
          },
          labelLine: {
            lineStyle: {
              color: '#235894'
            }
          },
          data: researchPeopleChartData,
          itemStyle: {
            opacity: 0.7,
            borderWidth: 3,
            // borderColor: '#235894'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    researchPeopleChart.setOption(researchPeopleChartOption, true);

    const researchRoadChart = echarts.init(document.getElementById('app-research-road-graph-box'));
    const researchRoadChartData = [90, 365, 295, 90, 140, 125, 15];
    const researchRoadChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['数字出版物', '视频平台', '网络社区', '传统媒体', '新闻客户端', '线下渠道', '其他'],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,//代表显示所有x轴标签显示
            rotate: 30, //代表逆时针旋转45度
          }
        },
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Life Cost',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          data: researchRoadChartData
        }
      ]
    };
    researchRoadChart.setOption(researchRoadChartOption, true);
  }
})