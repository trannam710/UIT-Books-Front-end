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

// DASHBOARD BAR CHART

var ctx = document.getElementById("barChart");
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
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
      text: "World Wide Wine Production 2018"
    }
  }
});

// DASHBOARD LINE CHART
var ctx = document.getElementById("lineChart");
var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("lineChart", {
type: "line",
data: {
    labels: xValues,
    datasets: [{ 
    data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
    borderColor: "red",
    fill: false
    }, { 
    data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
    borderColor: "green",
    fill: false
    }, { 
    data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
    borderColor: "blue",
    fill: false
    }]
},
options: {
    legend: {display: false}
}
});