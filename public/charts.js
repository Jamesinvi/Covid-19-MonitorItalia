
var options = {
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
let newOptions={
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
let lastOptions={
    series: [],
    chart: {
        type: 'area',
        height: 600,
        stacked: true,
        zoom:{
            type:"xy"
        }
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
        type: 'numeric',
        title:{
            text:"Days staring from 24th of Febrary"
        } 

    },
    markers: {
        size: 1
    },
    yaxis:{
        show: false
    }
}
chart = new ApexCharts(document.getElementById("chart_1"), options);
chartTwo = new ApexCharts(document.getElementById("chart_2"), newOptions);
chartThree = new ApexCharts(document.getElementById("chart_3"), newOptions);
chartFour = new ApexCharts(document.getElementById("chart_4"), lastOptions);
chart.render();
chartTwo.render();
chartThree.render();
chartFour.render();