var appSafe = document.querySelector('.app-safe');
let appSafeInRange = false;
let appSafeExist = false;

window.addEventListener('scroll', (e) => {

  let top = 300;
  let bottom = -300;
  let end = -1000;

  if (Math.round(appSafe.getBoundingClientRect().top) < top && Math.round(appSafe.getBoundingClientRect().top) > bottom) {
    appSafeInRange = true;
  }

  if (((Math.round(appSafe.getBoundingClientRect().top) < end) || Math.round(appSafe.getBoundingClientRect().top) > window.innerHeight - 100) && appSafeExist) {
    appSafeExist = false;
    appSafeInRange = false;
    console.log('remove');
    // 绘制调查问卷 学校是否会使用预制菜 饼图
    const appSafeChart1 = echarts.init(document.getElementById('app-safe-question1-graph'));
    const appSafeChart1Data = [
      // { value: 285, name: '是' },
      // { value: 195, name: '否' },
    ];
    const appSafeChart1Option = {
      title: {
        // text: '饼图纹理',
        textStyle: {
          color: '#235894'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      color: ['#ffed51', '#1f96ff'],
      series: [
        {
          name: '学校是否使用预制菜',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 30,
          clockwise: true,
          label: {
            normal: {
              formatter: '{b}:{c}',
              textStyle: {
                fontWeight: 'normal',
                fontSize: 24
              },
            },

          },
          labelLine: {
            lineStyle: {
              color: '#235894'
            }
          },
          data: appSafeChart1Data,
          itemStyle: {
            opacity: 0.7,
            borderWidth: 3,
            // borderColor: '#235894'
          },
          emphasis: {
            itemStyle: {
              // shadowBlur: 1,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
        }
      ]
    };
    appSafeChart1.setOption(appSafeChart1Option, true);


    // 绘制调查问卷 您是否会在知道是预制菜的情况下，仍然选择购买 饼图
    const appSafeChart2 = echarts.init(document.getElementById('app-safe-question2-graph'));
    const appSafeChart2Data = [
      // { value: 350, name: '是' },
      // { value: 130, name: '否' },
    ];
    const appSafeChart2Option = {
      title: {
        // text: '饼图纹理',
        textStyle: {
          color: '#235894'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
      },
      color: ['#ffed51', '#1f96ff'],
      series: [
        {
          name: '仍然购买预制菜',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 30,
          clockwise: true,
          label: {
            normal: {
              formatter: '{b}:{d}%',
              textStyle: {
                fontWeight: 'normal',
                fontSize: 24
              },
            },

          },
          labelLine: {
            lineStyle: {
              color: '#235894'
            }
          },
          data: appSafeChart2Data,
          itemStyle: {
            opacity: 0.7,
            borderWidth: 3,
            // borderColor: '#235894'
          },
          emphasis: {
            itemStyle: {
              // shadowBlur: 1,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
        },
        {
          name: '仍然购买预制菜',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 30,
          clockwise: true,
          label: {
            normal: {
              show: true,
              position: 'inner',
              formatter: '{c}',
              textStyle: {
                fontWeight: 'normal',
                fontSize: 24
              },
            },

          },
          labelLine: {
            lineStyle: {
              color: '#235894'
            }
          },
          data: appSafeChart2Data,
          itemStyle: {
            opacity: 0.7,
            borderWidth: 3,
            // borderColor: '#235894'
          },
          emphasis: {
            itemStyle: {
              // shadowBlur: 1,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
        }
      ]
    };
    appSafeChart2.setOption(appSafeChart2Option, true);


    // 绘制调查问卷  您认为预制菜存在哪些安全隐患 柱状图
    const appSafeChart3 = echarts.init(document.getElementById('app-safe-question3-graph'));
    const appSafeChart3Data = [];
    const appSafeChart3Option = {
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
        data: ['其他（请注明）', '没有影响', '增加慢性疾病\n的风险', '缺乏营养', '食品制作过程\n控制不当可能\n导致食物中毒'],
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
          data: appSafeChart3Data,
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
    appSafeChart3.setOption(appSafeChart3Option, true);
  }

  if (appSafeInRange && !appSafeExist) {
    appSafeExist = true;
    console.log('add');
    // 绘制调查问卷 学校是否会使用预制菜 饼图
    const appSafeChart1 = echarts.init(document.getElementById('app-safe-question1-graph'));
    const appSafeChart1Data = [
      { value: 285, name: '是' },
      { value: 195, name: '否' },
    ];
    const appSafeChart1Option = {
      title: {
        // text: '饼图纹理',
        textStyle: {
          color: '#235894'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      color: ['#ffed51', '#1f96ff'],
      series: [
        {
          name: '学校是否使用预制菜',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 30,
          clockwise: true,
          label: {
            normal: {
              formatter: '{b}:{c}',
              textStyle: {
                fontWeight: 'normal',
                fontSize: 24
              },
            },

          },
          labelLine: {
            lineStyle: {
              color: '#235894'
            }
          },
          data: appSafeChart1Data,
          itemStyle: {
            opacity: 0.7,
            borderWidth: 3,
            // borderColor: '#235894'
          },
          emphasis: {
            itemStyle: {
              // shadowBlur: 1,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
        }
      ]
    };
    appSafeChart1.setOption(appSafeChart1Option, true);


    // 绘制调查问卷 您是否会在知道是预制菜的情况下，仍然选择购买 饼图
    const appSafeChart2 = echarts.init(document.getElementById('app-safe-question2-graph'));
    const appSafeChart2Data = [
      { value: 350, name: '是' },
      { value: 130, name: '否' },
    ];
    const appSafeChart2Option = {
      title: {
        // text: '饼图纹理',
        textStyle: {
          color: '#235894'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
      },
      color: ['#ffed51', '#1f96ff'],
      series: [
        {
          name: '仍然购买预制菜',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 30,
          clockwise: true,
          label: {
            normal: {
              formatter: '{b}:{d}%',
              textStyle: {
                fontWeight: 'normal',
                fontSize: 24
              },
            },

          },
          labelLine: {
            lineStyle: {
              color: '#235894'
            }
          },
          data: appSafeChart2Data,
          itemStyle: {
            opacity: 0.7,
            borderWidth: 3,
            // borderColor: '#235894'
          },
          emphasis: {
            itemStyle: {
              // shadowBlur: 1,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
        },
        {
          name: '仍然购买预制菜',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 30,
          clockwise: true,
          label: {
            normal: {
              show: true,
              position: 'inner',
              formatter: '{c}',
              textStyle: {
                fontWeight: 'normal',
                fontSize: 24
              },
            },

          },
          labelLine: {
            lineStyle: {
              color: '#235894'
            }
          },
          data: appSafeChart2Data,
          itemStyle: {
            opacity: 0.7,
            borderWidth: 3,
            // borderColor: '#235894'
          },
          emphasis: {
            itemStyle: {
              // shadowBlur: 1,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
        }
      ]
    };
    appSafeChart2.setOption(appSafeChart2Option, true);


    // 绘制调查问卷  您认为预制菜存在哪些安全隐患 柱状图
    const appSafeChart3 = echarts.init(document.getElementById('app-safe-question3-graph'));
    const appSafeChart3Data = [25, 70, 230, 260, 285];
    const appSafeChart3Option = {
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
        data: ['其他（请注明）', '没有影响', '增加慢性疾病\n的风险', '缺乏营养', '食品制作过程\n控制不当可能\n导致食物中毒'],
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
          data: appSafeChart3Data,
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
    appSafeChart3.setOption(appSafeChart3Option, true);
  }
})