

// DOT
var isdoughnutchart = document.getElementById('doughnut');

var lineChart = new Chart(isdoughnutchart, {
    type: 'doughnut',
    data: {
        labels: [
            "Bitcoin",
            "Ethereum",
            "Litecoin",
            "Dashcoin",
        ],
        datasets: [
            {
                data: [80, 50, 100, 121],
                backgroundColor: [
                    "#f7931a",
                    "#627eea",
                    "#e3eaef",
                    "#1c75bc",
                ],
                hoverBackgroundColor: [
                    "#02c0ce",
                    "#b2c0f5",
                    "#e3eaef",
                    "#9cc2e2",
                ],
                hoverBorderColor: "#fff"
            }]
    },
});

// line chart
var islinechart = document.getElementById('lineChart');

islinechart.setAttribute("width", islinechart.parentElement.offsetWidth);

var lineChart = new Chart(islinechart, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
        datasets: [{
            label: "Conversion Rate",
            fill: false,
            backgroundColor: '#4eb7eb',
            borderColor: '#4eb7eb',
            lineTension: 0.4,
            data: [44, 60, -33, 58, -4, 57, -89, 60, -33, 58]
        }, {
            label: "Average Sale Value",
            fill: false,
            backgroundColor: '#e3eaef',
            borderColor: "#e3eaef",
            lineTension: 0.4,
            borderDash: [5, 5],
            data: [-68, 41, 86, -49, 2, 65, -64, 86, -49, 2]
        }]
    },
    Option: {
        responsive: true,
        // title:{
        //     display:true,
        //     text:'Chart.js Line Chart'
        // },
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                // scaleLabel: {
                //     display: true,
                //     labelString: 'Month'
                // },
                
                gridLines: {
                    color: "rgba(0,0,0,0.1)"
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(255,255,255,0.05)",
                    fontColor: '#fff',
                },
                ticks: {
                    max: 100,
                    min: -100,
                    stepSize: 20
                }
            }]
        }
    }

});


//  bar chart 
// bar chart
var isbarchart = document.getElementById('bar');
isbarchart.setAttribute("width", isbarchart.parentElement.offsetWidth);
var barChart = new Chart(isbarchart, {
    type: 'bar',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Sales Analytics",
                backgroundColor: "rgba(68, 162, 210, 0.4)",
                borderColor: "#44a2d2",
                borderWidth: 2,
                barPercentage: 0.7,
                categoryPercentage: 0.5,
                hoverBackgroundColor: "rgba(68, 162, 210, 0.7)",
                hoverBorderColor: "#44a2d2",
                data: [65, 59, 80, 81, 56, 55, 40, 20]
            }
        ],
        Option: {
            responsive: true,
            scales: {
                xAxes: [
                    {
                        barPercentage: 0.8,
                        categoryPercentage: 0.4,
                        display: true
                    }
                ]
            }
        }
    },
});

// polarArea chart
var ispolarAreachart = document.getElementById('polarArea');
var lineChart = new Chart(ispolarAreachart, {
    type: 'polarArea',
    data: {
        datasets: [{
            data: [
                11,
                16,
                7,
                18
            ],
            backgroundColor: [
                "#1580c4",
                "#162546",
                "#ebeff2",
                "#ea3c75"
            ],
            label: 'My dataset', // for legend
            hoverBorderColor: "#fff"
        }],
        labels: [
            "Series 1",
            "Series 2",
            "Series 3",
            "Series 4"
        ],
    },
});

// pie chart
var ispiechart = document.getElementById('pie');

var pieChart = new Chart(ispiechart, {
    type: 'pie',
    data: {
        labels: [
            "Desktops",
            "Tablets",
            "Mobiles",
            "Mobiles",
        ],
        datasets: [
            {
                data: [80, 50, 100, 121],
                backgroundColor: [
                    "#98d4ce",
                    "#bac4d0",
                    "#e3eaef",
                    "#44a2d2",
                ],
                hoverBackgroundColor: [
                    "#98d4ce",
                    "#bac4d0",
                    "#e3eaef",
                    "#44a2d2",
                ],
                hoverBorderColor: "#fff"
            }]
    },
});


// radar chart
// radar chart
var isradarchart = document.getElementById('radar');
var lineChart = new Chart(isradarchart, {
    type: 'radar',
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                datasets: [
                    {
                        label: "Desktops",
                        backgroundColor: "rgba(152,212,206,0.3)",
                        borderColor: "#98d4ce",
                        pointBackgroundColor: "#038660",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(179,181,198,1)",
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: "Tablets",
                        backgroundColor: "rgba(21,128,196,0.2)",
                        borderColor: "#1580c4",
                        pointBackgroundColor: "#095d88",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(255,99,132,1)",
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
    },
});


