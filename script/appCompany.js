var cpmChart = echarts.init(document.getElementById('app-company-map'));
var companyBtn = document.getElementById('company-btn');
var productBtn = document.getElementById('product-btn');
var data = companyProvince;
productBtn.style.backgroundColor = '#fff'
productBtn.style.color = '#000'
companyBtn.style.backgroundColor = '#058cec'
companyBtn.style.color = '#fff'
cpmChart.setOption({
  //标题样式
  title: {
    text: '预制菜公司分布图',
    x: "10%",
    y: '2%',
    textStyle: {
      fontSize: 24,
      color: "black"
    },
  },
  //这里设置提示框 (鼠标悬浮效果)
  tooltip: {
    //数据项图形触发
    trigger: 'item',
    //提示框浮层的背景颜色。 (鼠标悬浮后的提示框背景颜色)
    backgroundColor: "rgba(255,255,255)",
    //字符串模板(地图): {a}（系列名称），{b}（区域名称），{c}（合并数值）,{d}（无）
    formatter: '地区：{b}<br/>公司数量：{c}',
    textStyle: {
      color: 'blue'
    },
    showDelay: 0,
    transitionDuration: 0.2
  },
  //视觉映射组件 (旁边的小地图配置项)
  visualMap: {
    // left: 'left',
    min: 10,
    max: 300,
    inRange: {
      color: [
        '#ebdba4',
        '#f2d643',
        '#ffb248',
        '#eb8146',
        '#d95850',
        '#893448',
      ]
    },
    text: ['High', 'Low'],
    bottom: '150',
    left: '5%',
    // calculable: true
  },
  toolbox: {
    show: true,
    //orient: 'vertical',
    left: 'left',
    top: 'top',
    feature: {
      // dataView: { readOnly: false },
      // restore: {},
      saveAsImage: {}
    }
  },
  series: [
    {
      name: 'gdp',
      type: 'map',
      mapType: 'china',
      //是否开启鼠标缩放和平移漫游
      // roam: true,
      itemStyle: {
        borderColor: 'red',
        borderWidth: '10',
        borderType: 'dotted',
        //地图区域的多边形 图形样式
        normal: {
          //是图形在默认状态下的样式
          label: {
            // show: true,//是否显示标签

            formatter: (params) => {

              var str = `${params.name}` + '\n' + `${params.value}`
              // console.log(params);
              return str
            },
            textStyle: {
              color: "black"
            }
          }
        },
        zoom: 1,
        //地图缩放比例,默认为1
        emphasis: {
          //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
          label: {
            show: true,
          },

        },

      },
      top: 'center',
      left: 'center',
      data: data
    }
  ]
}, true);

companyBtn.addEventListener('click', () => {
  data = companyProvince;
  var title = '预制菜公司分布图'
  productBtn.style.backgroundColor = '#fff'
  productBtn.style.color = '#000'
  companyBtn.style.backgroundColor = '#058cec'
  companyBtn.style.color = '#fff'
  cpmChart.setOption({
    //标题样式
    title: {
      text: title,
      x: "10%",
      y: '2%',
      textStyle: {
        fontSize: 24,
        color: "black"
      },
    },
    //这里设置提示框 (鼠标悬浮效果)
    tooltip: {
      //数据项图形触发
      trigger: 'item',
      //提示框浮层的背景颜色。 (鼠标悬浮后的提示框背景颜色)
      backgroundColor: "rgba(255,255,255)",
      //字符串模板(地图): {a}（系列名称），{b}（区域名称），{c}（合并数值）,{d}（无）
      formatter: '地区：{b}<br/>公司数量：{c}',
      textStyle: {
        color: 'blue'
      },
      showDelay: 0,
      transitionDuration: 0.2
    },
    //视觉映射组件 (旁边的小地图配置项)
    visualMap: {
      // left: 'left',
      min: 10,
      max: 300,
      inRange: {
        color: [
          '#ebdba4',
          '#f2d643',
          '#ffb248',
          '#eb8146',
          '#d95850',
          '#893448',
        ]
      },
      text: ['High', 'Low'],
      bottom: '150',
      left: '5%',
      // calculable: true
    },
    toolbox: {
      show: true,
      //orient: 'vertical',
      left: 'left',
      top: 'top',
      feature: {
        // dataView: { readOnly: false },
        // restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        name: 'gdp',
        type: 'map',
        mapType: 'china',
        //是否开启鼠标缩放和平移漫游
        // roam: true,
        itemStyle: {
          borderColor: 'red',
          borderWidth: '10',
          borderType: 'dotted',
          //地图区域的多边形 图形样式
          normal: {
            //是图形在默认状态下的样式
            label: {
              // show: true,//是否显示标签

              formatter: (params) => {

                var str = `${params.name}` + '\n' + `${params.value}`
                // console.log(params);
                return str
              },
              textStyle: {
                color: "black"
              }
            }
          },
          zoom: 1,
          //地图缩放比例,默认为1
          emphasis: {
            //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
            label: {
              show: true,
            },

          },

        },
        top: 'center',
        left: 'center',
        data: data
      }
    ]
  }, true);
})

productBtn.addEventListener('click', () => {
  data = productProvince;
  var title = '淘宝预制菜商品分布图'
  companyBtn.style.backgroundColor = '#fff'
  companyBtn.style.color = '#000'
  productBtn.style.backgroundColor = '#058cec'
  productBtn.style.color = '#fff'
  cpmChart.setOption({
    //标题样式
    title: {
      text: title,
      x: "10%",
      y: '2%',
      textStyle: {
        fontSize: 24,
        color: "black"
      },
    },
    //这里设置提示框 (鼠标悬浮效果)
    tooltip: {
      //数据项图形触发
      trigger: 'item',
      //提示框浮层的背景颜色。 (鼠标悬浮后的提示框背景颜色)
      backgroundColor: "rgba(255,255,255)",
      //字符串模板(地图): {a}（系列名称），{b}（区域名称），{c}（合并数值）,{d}（无）
      formatter: '地区：{b}<br/>公司数量：{c}',
      textStyle: {
        color: 'blue'
      },
      showDelay: 0,
      transitionDuration: 0.2
    },
    //视觉映射组件 (旁边的小地图配置项)
    visualMap: {
      // left: 'left',
      min: 10,
      max: 300,
      inRange: {
        color: [
          '#ebdba4',
          '#f2d643',
          '#ffb248',
          '#eb8146',
          '#d95850',
          '#893448',
        ]
      },
      text: ['High', 'Low'],
      bottom: '150',
      left: '5%',
      // calculable: true
    },
    toolbox: {
      show: true,
      //orient: 'vertical',
      left: 'left',
      top: 'top',
      feature: {
        // dataView: { readOnly: false },
        // restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        name: 'gdp',
        type: 'map',
        mapType: 'china',
        //是否开启鼠标缩放和平移漫游
        // roam: true,
        itemStyle: {
          borderColor: 'red',
          borderWidth: '10',
          borderType: 'dotted',
          //地图区域的多边形 图形样式
          normal: {
            //是图形在默认状态下的样式
            label: {
              // show: true,//是否显示标签

              formatter: (params) => {

                var str = `${params.name}` + '\n' + `${params.value}`
                // console.log(params);
                return str
              },
              textStyle: {
                color: "black"
              }
            }
          },
          zoom: 1,
          //地图缩放比例,默认为1
          emphasis: {
            //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
            label: {
              show: true,
            },

          },

        },
        top: 'center',
        left: 'center',
        data: data
      }
    ]
  }, true);
})