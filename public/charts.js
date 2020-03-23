
var optionsOne = {
    series: [],
    chart: {
        type: 'area',
        height: 600,
        stacked: true,
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
    },
    stroke: {
        curve: "smooth"
    },
    dataLabels: {
        enabled: true
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: [
        {
            seriesName: "Total Cases",
            show: false,
        },
        {
            seriesName: "Total Hospitalized",
            show:false
        }
    ],
    markers: {
        size: 1
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
        }
    }
};
let optionsTwo={
    series: [],
    chart: {
        type: 'area',
        height: 600,
        stacked: true,
    },
    stroke: {
        curve: "straight"
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
    markers: {
        size: 1
    },
    yaxis:{
        show: false
    }
}
let optionsThree={
    series: [],
    chart: {
        type: 'line',
        height: 600,
        stacked: true,
        zoom:{
            type:"xy"
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    stroke: {
        curve: "straight"
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    },
    xaxis: {
        gategories: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
        title:{
            text:"Days since 24th of Febrary"
        } 

    },
    markers: {
        size: 1
    },
    yaxis:{
        show: true
    }
}
let optionsFour={
    series: [],
    chart: {
        type: 'line',
        height: 600,
        stacked: true,
        zoom:{
            type:"xy"
        }
    },
    dataLabels: {
        enabled: true
    },
    stroke: {
        curve: "straight"
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    },
    xaxis: {
        gategories: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
        title:{
            text:"Days since 24th of Febrary"
        } 

    },
    markers: {
        size: 1
    },
    yaxis:{
        show: true
    }
}
chart = new ApexCharts(document.getElementById("chart_1"), optionsOne);
chartTwo = new ApexCharts(document.getElementById("chart_2"), optionsTwo);
chartThree = new ApexCharts(document.getElementById("chart_3"), optionsTwo);
chartFour = new ApexCharts(document.getElementById("chart_4"), optionsThree);
chartFive = new ApexCharts(document.getElementById("chart_5"), optionsFour);
chart.render();
chartTwo.render();
chartFour.render();
chartFive.render();