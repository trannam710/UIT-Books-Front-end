// JavaScript Document
// Graph
// var ctx = document.getElementById("myChart");

// var myChart = new Chart(ctx, {
//     type: "line",
//     data: {
//         labels: [
//             "Sunday",
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday",
//         ],
//         datasets: [{
//             data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
//             lineTension: 0,
//             backgroundColor: "transparent",
//             borderColor: "#007bff",
//             borderWidth: 4,
//             pointBackgroundColor: "#007bff",
//         }, ],
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: false,
//                 },
//             }, ],
//         },
//         legend: {
//             display: false,
//         },
//     },
// });


// (() => {
//   'use strict'
//   const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//   tooltipTriggerList.forEach(tooltipTriggerEl => {
//     new bootstrap.Tooltip(tooltipTriggerEl)
//   })
// })()

// DASHBOARD PIE CHART

var ctx = document.getElementById("barChart");
var xValues = ["Văn Học", "SGK", "Truyện Tranh", "Ngoại Ngữ", "CNTT"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart(ctx, {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Tỉ lệ sách bán trong năm 2022"
    }
  }
});

// DASHBOARD LINE CHART
var ctx = document.getElementById("lineChart");
var xValues = ['1','2','3','4','5','6','7','8','9','10', '11', '12'];

new Chart("lineChart", {
type: "line",
data: {
    labels: xValues,
    datasets: [
    { 
    data: [1600,1760,1806,1900,2000,2700,3034,4553,5306,6135,6902,7204],
    borderColor: "green",
    fill: false
    }, 
    { 
    data: [300,700,2000,4500,5300,4000,3000,3500,5000,5800,5500,6200],
    borderColor: "blue",
    fill: false
    }]
},
options: {
    legend: {display: false}
}
});