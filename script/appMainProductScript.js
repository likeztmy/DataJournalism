// var maskImage1 = new Image(600, 500)
// var chart1 = echarts.init(document.getElementById('app-main-product-cloud1'));
// let wordOption1 = {
//   // title: {
//   //   text: '预制菜商品词云图',
//   //   x: "10%",
//   //   y: '2%',
//   //   textStyle: {
//   //     fontSize: 24,
//   //     color: "black"
//   //   },
//   // },
//   tooltip: {
//     //数据项图形触发
//     trigger: 'item',
//     //提示框浮层的背景颜色。 (鼠标悬浮后的提示框背景颜色)
//     backgroundColor: "rgba(255,255,255)",
//     //字符串模板(地图): {a}（系列名称），{b}（区域名称），{c}（合并数值）,{d}（无）
//     formatter: function (params) {
//       return params.data.name + ':' + params.data.value;
//     },
//     textStyle: {
//       color: 'black',
//       fontSize: '20'
//     },
//     show: true,
//     showDelay: 0,
//     transitionDuration: 0.2
//   },
//   series: [{
//     type: 'wordCloud',

//     // The shape of the "cloud" to draw. Can be any polar equation represented as a
//     // callback function, or a keyword present. Available presents are circle (default),
//     // cardioid (apple or heart shape curve, the most known polar equation), diamond (
//     // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
//     shape: 'circle',

//     // Keep aspect ratio of maskImage or 1:1 for shapes
//     // This option is supported since echarts-wordcloud@2.1.0
//     keepAspect: true,

//     // A silhouette image which the white area will be excluded from drawing texts.
//     // The shape option will continue to apply as the shape of the cloud to grow.

//     maskImage: maskImage1,

//     // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
//     // Default to be put in the center and has 75% x 80% size.

//     left: 'center',
//     top: 'center',
//     width: '90%',
//     height: '80%',
//     right: null,
//     bottom: null,

//     // Text size range which the value in data will be mapped to.
//     // Default to have minimum 12px and maximum 60px size.

//     sizeRange: [18, 64],

//     // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

//     rotationRange: [0, 0],
//     rotationStep: 45,

//     // size of the grid in pixels for marking the availability of the canvas
//     // the larger the grid size, the bigger the gap between words.


//     gridSize: 2,

//     // set to true to allow word to be drawn partly outside of the canvas.
//     // Allow word bigger than the size of the canvas to be drawn
//     // This option is supported since echarts-wordcloud@2.1.0
//     drawOutOfBound: false,

//     // if the font size is too large for the text to be displayed,
//     // whether to shrink the text. If it is set to false, the text will
//     // not be rendered. If it is set to true, the text will be shrinked.
//     // This option is supported since echarts-wordcloud@2.1.0
//     shrinkToFit: false,

//     // If perform layout animation.
//     // NOTE disable it will lead to UI blocking when there is lots of words.
//     layoutAnimation: true,

//     // Global text style
//     textStyle: {
//       fontFamily: 'sans-serif',
//       fontWeight: 'bold',
//       // Color can be a callback function or a color string
//       color: function () {
//         // Random color
//         var randomIndex = Math.floor(Math.random() * 6);
//         var colors = [
//           'rgb(86,125,235)',
//           'rgb(116,203,246)',
//           'rgb(139,93,238)',
//           'rgb(244,212,107)',
//           'rgb(230,114,105)',
//           'rgb(242,169,83)',
//         ]
//         return colors[randomIndex]
//       },
//     },
//     emphasis: {
//       textStyle: {
//         color: '#528'
//       }
//     },
//     // Data is an array. Each array item must have name and value property.
//     data: product
//   }]
// };

// // chart1.setOption(wordOption1);
// maskImage1.onload = function () {
//   wordOption1.series[0].maskImage
//   chart1.setOption(wordOption1);
// }

// maskImage1.src = '../image/cloud.png';

// window.onresize = function () {
//   chart1.resize();
// }

// var maskImage2 = new Image(600, 500)
// var chart2 = echarts.init(document.getElementById('app-main-product-cloud2'));
let wordOption2 = {
  // title: {
  //   text: '预制菜商品词云图',
  //   x: "10%",
  //   y: '2%',
  //   textStyle: {
  //     fontSize: 24,
  //     color: "black"
  //   },
  // },
  tooltip: {
    //数据项图形触发
    trigger: 'item',
    //提示框浮层的背景颜色。 (鼠标悬浮后的提示框背景颜色)
    backgroundColor: "rgba(255,255,255)",
    //字符串模板(地图): {a}（系列名称），{b}（区域名称），{c}（合并数值）,{d}（无）
    formatter: function (params) {
      return params.data.name + ':' + params.data.value;
    },
    textStyle: {
      color: 'black',
      fontSize: '20'
    },
    show: true,
    showDelay: 0,
    transitionDuration: 0.2
  },
  series: [{
    type: 'wordCloud',

    // The shape of the "cloud" to draw. Can be any polar equation represented as a
    // callback function, or a keyword present. Available presents are circle (default),
    // cardioid (apple or heart shape curve, the most known polar equation), diamond (
    // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
    shape: 'circle',

    // Keep aspect ratio of maskImage or 1:1 for shapes
    // This option is supported since echarts-wordcloud@2.1.0
    keepAspect: true,

    // A silhouette image which the white area will be excluded from drawing texts.
    // The shape option will continue to apply as the shape of the cloud to grow.

    // maskImage: maskImage2,

    // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
    // Default to be put in the center and has 75% x 80% size.

    left: 'center',
    top: 'center',
    width: '70%',
    height: '70%',
    right: null,
    bottom: null,

    // Text size range which the value in data will be mapped to.
    // Default to have minimum 12px and maximum 60px size.

    sizeRange: [12, 54],

    // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

    rotationRange: [0, 0],
    rotationStep: 45,

    // size of the grid in pixels for marking the availability of the canvas
    // the larger the grid size, the bigger the gap between words.


    gridSize: 2,

    // set to true to allow word to be drawn partly outside of the canvas.
    // Allow word bigger than the size of the canvas to be drawn
    // This option is supported since echarts-wordcloud@2.1.0
    drawOutOfBound: false,

    // if the font size is too large for the text to be displayed,
    // whether to shrink the text. If it is set to false, the text will
    // not be rendered. If it is set to true, the text will be shrinked.
    // This option is supported since echarts-wordcloud@2.1.0
    shrinkToFit: false,

    // If perform layout animation.
    // NOTE disable it will lead to UI blocking when there is lots of words.
    layoutAnimation: true,

    // Global text style
    textStyle: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      // Color can be a callback function or a color string
      color: function () {
        // Random color
        var randomIndex = Math.floor(Math.random() * 6);
        var colors = [
          'rgb(86,125,235)',
          'rgb(116,203,246)',
          'rgb(139,93,238)',
          'rgb(244,212,107)',
          'rgb(230,114,105)',
          'rgb(242,169,83)',
        ]
        return colors[randomIndex]
      },
    },
    emphasis: {
      textStyle: {
        color: '#528'
      }
    },
    // Data is an array. Each array item must have name and value property.
    data: comment
  }]
};

// chart2.setOption(wordOption2);
// maskImage2.onload = function () {
//   wordOption2.series[0].maskImage
//   chart2.setOption(wordOption2);
// }

// maskImage2.src = '../image/cloud.png';

// window.onresize = function () {
//   chart2.resize();
// }


var chart1 = echarts.init(document.getElementById('app-main-product-cloud1'));

var colorList = [[
  '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
  '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
  '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
  '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
],
[
  '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
  '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
  '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
  '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
],
[
  '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
  '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
  '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
  '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
]][2];

var chart1Option = {
  // 图表标题
  title: {
    show: true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
    // text: '关键词云',//主标题文本，'\n'指定换行
    x: 'center',        // 水平安放位置，默认为左对齐，可选为：
    // 'center' ¦ 'left' ¦ 'right'
    // ¦ {number}（x坐标，单位px）
    y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为：
    // 'top' ¦ 'bottom' ¦ 'center'
    // ¦ {number}（y坐标，单位px）
    //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#ccc',    // 标题边框颜色
    borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
    padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
    // 接受数组分别设定上右下左边距，同css
    itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
    textStyle: {
      fontSize: 30,
      fontWeight: 'bolder',
      color: '#eee'        // 主标题文字颜色
    },
    subtextStyle: {
      color: '#aaa'        // 副标题文字颜色
    }
  },
  // backgroundColor: '',
  tooltip: {},
  animationDurationUpdate: function (idx) {
    // 越往后的数据延迟越大
    return idx * 100;
  },
  animationEasingUpdate: 'bounceIn',
  color: ['#fff', '#fff', '#fff'],
  series: [{
    type: 'graph',
    layout: 'force',
    force: {
      repulsion: 150,
      edgeLength: 10
    },
    roam: true,
    label: {
      normal: {
        show: true,
        distance: 10,  // 标签与词语的距离
      }
    },
    itemStyle: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      fontSize: 30,
      // Color can be a callback function or a color string
      color: function (params) {
        // Random color
        var index = params.dataIndex;

        var colorIndex = Math.floor(index / 4);
        var colors = [
          'rgb(86,125,235)',
          'rgb(116,203,246)',
          'rgb(139,93,238)',
          'rgb(244,212,107)',
          'rgb(230,114,105)',

        ]
        return params.value > 1000 ? 'rgb(242,169,83)' : colors[colorIndex];
      },
    },
    data: product.sort((a, b) => a > b).slice(0, 20).map((item) => {
      return {
        name: item.name,
        value: item.value,
        symbolSize: item.value * 0.3,
        draggable: true,
        fontSize: 30
      }
    })
  }]
};
chart1.setOption(chart1Option, true);



var chart2 = echarts.init(document.getElementById('app-main-product-cloud2'));

var colorList = [[
  '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
  '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
  '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
  '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
],
[
  '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
  '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
  '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
  '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
],
[
  '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
  '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
  '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
  '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
]][2];

var chart2Option = {
  // 图表标题
  title: {
    show: true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
    // text: '关键词云',//主标题文本，'\n'指定换行
    x: 'center',        // 水平安放位置，默认为左对齐，可选为：
    // 'center' ¦ 'left' ¦ 'right'
    // ¦ {number}（x坐标，单位px）
    y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为：
    // 'top' ¦ 'bottom' ¦ 'center'
    // ¦ {number}（y坐标，单位px）
    //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#ccc',    // 标题边框颜色
    borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
    padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
    // 接受数组分别设定上右下左边距，同css
    itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
    textStyle: {
      fontSize: 30,
      fontWeight: 'bolder',
      color: '#eee'        // 主标题文字颜色
    },
    subtextStyle: {
      color: '#aaa'        // 副标题文字颜色
    }
  },
  // backgroundColor: '',
  tooltip: {},
  animationDurationUpdate: function (idx) {
    // 越往后的数据延迟越大
    return idx * 100;
  },
  animationEasingUpdate: 'bounceIn',
  color: ['#fff', '#fff', '#fff'],
  series: [{
    type: 'graph',
    layout: 'force',
    force: {
      repulsion: 200,
      edgeLength: 10
    },
    roam: true,
    label: {
      normal: {
        show: true,
        distance: 10,  // 标签与词语的距离
      }
    },
    itemStyle: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      fontSize: 30,
      // Color can be a callback function or a color string
      color: function (params) {
        // Random color
        var index = params.dataIndex;

        var colorIndex = Math.floor(index / 4);
        var colors = [
          'rgb(86,125,235)',
          'rgb(116,203,246)',
          'rgb(139,93,238)',
          'rgb(244,212,107)',
          'rgb(230,114,105)',

        ]
        return params.value > 1000 ? 'rgb(242,169,83)' : colors[colorIndex];
      },
    },
    data: comment.sort((a, b) => a > b).slice(0, 20).map((item) => {
      return {
        name: item.name,
        value: item.value,
        symbolSize: item.value * 0.3,
        draggable: true,
      }
    })
  }]
};
chart2.setOption(chart2Option, true);
