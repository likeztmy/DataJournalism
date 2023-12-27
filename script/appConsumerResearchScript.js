var appConsumerResearch = document.querySelector('.app-consumer-research');
let appConsumerResearchInRange = false;
let appConsumerResearchExist = false;

let consumerResearchChart1;
let consumerResearchChart2;
let consumerResearchChart3;
let consumerResearchChart4;
let consumerResearchChart5;

let consumerResearchChartBg1 = document.querySelector('.app-consumer-research-graphbg1');
let consumerResearchChartBg2 = document.querySelector('.app-consumer-research-graphbg2');
let consumerResearchChartBg3 = document.querySelector('.app-consumer-research-graphbg3');
let consumerResearchChartBg4 = document.querySelector('.app-consumer-research-graphbg4');
let consumerResearchChartBg5 = document.querySelector('.app-consumer-research-graphbg5');
let consumerResearchChartBgs = [consumerResearchChartBg1, consumerResearchChartBg2, consumerResearchChartBg3, consumerResearchChartBg4, consumerResearchChartBg5];

window.addEventListener('scroll', (e) => {

  let top = 500;
  let bottom = -100;
  let end = -2000;

  if (Math.round(appConsumerResearch.getBoundingClientRect().top) < top && Math.round(appConsumerResearch.getBoundingClientRect().top) > bottom) {
    appConsumerResearchInRange = true;
  }

  if (((Math.round(appConsumerResearch.getBoundingClientRect().top) < end) || Math.round(appConsumerResearch.getBoundingClientRect().top) > window.innerHeight - 100) && appConsumerResearchExist) {
    appConsumerResearchExist = false;
    appConsumerResearchInRange = false;
    console.log('remove');
    for (let i = 0; i < consumerResearchChartBgs.length; i++) {
      consumerResearchChartBgs[i].style.backgroundColor = "transparent";
    }
    consumerResearchChart1 && consumerResearchChart1.dispose();
    consumerResearchChart2 && consumerResearchChart2.dispose();
    consumerResearchChart3 && consumerResearchChart3.dispose();
    consumerResearchChart4 && consumerResearchChart4.dispose();
    consumerResearchChart5 && consumerResearchChart5.dispose();
  }

  if (appConsumerResearchInRange && !appConsumerResearchExist) {
    appConsumerResearchExist = true;
    console.log('add');

    for (let i = 0; i < consumerResearchChartBgs.length; i++) {
      consumerResearchChartBgs[i].style.backgroundColor = "#fff";
    }

    // 绘制调查问卷 学校是否会使用预制菜 饼图
    consumerResearchChart1 = echarts.init(document.getElementById('app-consumer-research-graph1'));
    const consumerResearchChart1Option = {
      title: {
        text: '对于预制菜,您比较关心的问题是什么',
        textStyle: {
          color: '#235894'
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
        left: '2%',
        right: '10%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        // boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['G.其他', 'F.摆盘是否美观，\n与图片是否符合', 'E.品牌口碑', 'D.菜品种类是否\n齐全', 'C.价格是否合理', 'B.购买后的\n制作成本和难度', 'A.食品安全'],
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
          data: [0.36, 5.83, 9.73, 16.37, 19.48, 19.19, 29.03],
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{c}%'
            }
          },
        }
      ]
    };
    consumerResearchChart1.setOption(consumerResearchChart1Option, true);


    // 绘制调查问卷 您是否会在知道是预制菜的情况下，仍然选择购买 饼图
    consumerResearchChart2 = echarts.init(document.getElementById('app-consumer-research-graph2'));
    const consumerResearchChart2Option = {
      title: {
        text: '菜品口味是否达到预期',
        textStyle: {
          color: '#235894'
        },
        // position: bottom
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
      },
      grid: {
        left: '2%',
        right: '10%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        orient: 'horizontal',
        bottom: 'bottom'
      },
      // color: ['#ffed51', '#1f96ff'],
      series: [
        {
          name: '菜品口味是否达到预期',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 30,
          clockwise: true,
          label: {
            normal: {
              show: true,
              position: 'inner',
              formatter: '{c}%',
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
          data: [
            { value: 65.32, name: '超过预期' },
            { value: 34.36, name: '一般般' },
            { value: 3.32, name: '较差，不好吃' },
          ],
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
    consumerResearchChart2.setOption(consumerResearchChart2Option, true);


    // 绘制调查问卷  您认为预制菜存在哪些安全隐患 柱状图
    consumerResearchChart3 = echarts.init(document.getElementById('app-consumer-research-graph3'));
    const consumerResearchChart3Option = {
      title: {
        text: '有无发现标示信息存在问题',
        textStyle: {
          color: '#235894'
        },
      },
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
          data: ['A.未标注生产\n日期或保质期', 'B.未标注菜品\n名称及主要食材', 'C.未标注菜品\n分量', 'D.未标注菜品\n价格', 'E.套餐未标注\n适宜用餐人数', 'F.其他', 'G.以上均无'],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,//代表显示所有x轴标签显示
            rotate: 0, //代表逆时针旋转45度
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
          name: '有无发现问题',
          type: 'bar',
          stack: 'Total',
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c}%'
            }
          },
          data: [16.45, 27.54, 23.61, 16.40, 11.10, 3.09, 1.81]
        }
      ]
    };
    consumerResearchChart3.setOption(consumerResearchChart3Option, true);

    // 绘制调查问卷 学校是否会使用预制菜 饼图
    consumerResearchChart4 = echarts.init(document.getElementById('app-consumer-research-graph4'));
    const consumerResearchChart4Option = {
      title: {
        text: '您觉得市面上的预制菜存在哪些问题？',
        textStyle: {
          color: '#235894'
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
        left: '2%',
        right: '10%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        // boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['J.没有什么不\n满意或需要改\n进的', 'I.其他', 'G.口味不够好', 'F.保存不方便', 'E.提货不方便', 'D.购买不方便', 'C.套餐固定，\n可选品种少', 'B.价格高，性价比低', 'A.营养搭配\n不够合理'],
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
          data: [3.21, 1.46, 2.61, 5.33, 7.09, 8.79, 11.43, 28.68, 19.03, 12.46],
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{c}%'
            }
          },
        }
      ]
    };
    consumerResearchChart4.setOption(consumerResearchChart4Option, true);

    // 绘制调查问卷 您是否会在知道是预制菜的情况下，仍然选择购买 饼图
    consumerResearchChart5 = echarts.init(document.getElementById('app-consumer-research-graph5'));
    const consumerResearchChart5Option = {
      title: {
        text: '购买预制菜的主要渠道',
        textStyle: {
          color: '#235894'
        },
        // position: bottom
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
      },
      grid: {
        left: '2%',
        right: '10%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        orient: 'horizontal',
        bottom: 'bottom'
      },
      // color: ['#ffed51', '#1f96ff'],
      series: [
        {
          name: '购买渠道',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 30,
          clockwise: true,
          label: {
            normal: {
              show: true,
              position: 'inner',
              formatter: '{c}%',
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
          data: [
            { value: 61.99, name: '线上购买' },
            { value: 19.52, name: '超市，商场购买' },
            { value: 17.23, name: '酒店，餐馆购买' },
            { value: 1.27, name: '其他' },
          ],
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
    consumerResearchChart5.setOption(consumerResearchChart5Option, true);
  }
})
