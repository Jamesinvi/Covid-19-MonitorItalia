let fetchData;
let dates=[];
async function requestData(){
    const response = await fetch("/data");
    const json = await response.json();
    fetchData = json;
    console.log(fetchData);
}

requestData().then(createGraphData);

let totalCasesSeries=[];
let totalHospitalizedSeries=[];
let rateOfGrowth=[];
let exponentialFactor2=[];
let exponentialFactor3=[];
let exponentialFactor4=[];
let totalCasesSeriesTwo=[];
function createGraphData(){

    for (let i=0;i<fetchData.data.length;i++){
        dates.push(fetchData.data[i].data);
        totalCasesSeriesTwo.push(fetchData.data[i].totale_attualmente_positivi);
        totalCasesSeries.push({
            x: fetchData.data[i].data,
            y: fetchData.data[i].totale_attualmente_positivi
        })
        totalHospitalizedSeries.push({
            x: fetchData.data[i].data,
            y: fetchData.data[i].totale_ospedalizzati
        })
        if(i>1){
            rateOfGrowth.push({
                x: fetchData.data[i].data,
                y: (fetchData.data[i].nuovi_attualmente_positivi /  fetchData.data[i-1].nuovi_attualmente_positivi).toFixed(3)
            });
        }
        exponentialFactor2.push({
            x: fetchData.data[i].data,
            y: Math.pow(2,i+1)
        })
        exponentialFactor3.push({
            x: fetchData.data[i].data,
            y: (60000000 /(1+ (((60000000 / 221)-1) * Math.exp(-0.2*i)))).toFixed(0)
        })
    }
    for (let i=0;i<30;i++){
        exponentialFactor4.push(
            (60000000 /(1+ (((60000000 / 221)-1) * Math.exp(-0.24*i)))).toFixed(0)
        )
    }
    chart.updateSeries([{
            name: "Total Hospitalized",
            data: totalHospitalizedSeries
        },
        {
            name: "Total Cases",
            data: totalCasesSeries
        },
    ]);
    chartTwo.updateSeries([{
        name: "Rate of Growth",
        data: rateOfGrowth
    }]);
    // chartThree.updateSeries([{
    //         name: "Actual Cases",
    //         data: totalCasesSeries
    //     },
    //     {
    //         name: "2^x",
    //         data: exponentialFactor2
    //     },
    //     {
    //         name: "Logistic Curve from initial Values",
    //         data: exponentialFactor3
    //     },
        
    // ]);
    chartFour.updateSeries([
        {
            name: "Real cases so far",
            type: "line",
            data: totalCasesSeriesTwo
        },
        {
            name:" Prediction",
            type: "column",
            data: exponentialFactor4
        }
    ])

}