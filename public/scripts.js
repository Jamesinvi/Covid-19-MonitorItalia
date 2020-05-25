let fetchData;
let dates=[];
async function requestData(){
    const response = await fetch("/data");
    const json = await response.json();
    fetchData = json;
    console.log(fetchData);
}


requestData().then(createGraphData);

let romeData=[];
let totalCasesSeries=[];
let totalHospitalizedSeries=[];
let rateOfGrowth=[];
let exponentialFactor2=[];
let exponentialFactor3=[221];
let exponentialFactor4=[];
let totalCasesSeriesTwo=[];
let newInfectedSeries=[];
let infectionRate= 24.35;
let e=0.05 * infectionRate;

function resetEValue(){
    e=0.05 * infectionRate;
    updateExpFac3();
    document.getElementById("eSlider").value=0.05;
}
function updateEValue(val){
    e=val * infectionRate;
    updateExpFac3();
}


function updateExpFac3(){
    exponentialFactor3=[221];
    for (let i=1;i<30;i++){
        let num= parseInt(e * parseFloat(exponentialFactor3[i-1]));
        if(num<Number.MAX_SAFE_INTEGER){
            exponentialFactor3.push(num);
        }
    }
    chartFive.updateSeries([
        {
            name:" Number of cases ",
            type: "line",
            data: exponentialFactor3
        }
    ])
}
function createGraphData(){
    for (let i=0;i<fetchData.data.length;i++){
        dates.push(fetchData.data[i].data);
        totalCasesSeriesTwo.push(fetchData.data[i].totale_positivi);
        totalCasesSeries.push({
            x: fetchData.data[i].data,
            y: fetchData.data[i].totale_positivi
        })
        totalHospitalizedSeries.push({
            x: fetchData.data[i].data,
            y: fetchData.data[i].totale_ospedalizzati
        })
        newInfectedSeries.push({
            x: fetchData.data[i].data,
            y: fetchData.data[i].nuovi_positivi
        })
        if(i>0){
            rateOfGrowth.push({
                x: fetchData.data[i].data,
                y: (fetchData.data[i].nuovi_positivi /  fetchData.data[i-1].nuovi_positivi).toFixed(3)
            });
            exponentialFactor3.push(
                parseInt(e * parseFloat(exponentialFactor3[i-1]))
            );
            console.log(fetchData.data[i].nuovi_positivi ,  fetchData.data[i-1].nuovi_positivi , (fetchData.data[i].nuovi_positivi /  fetchData.data[i-1].nuovi_positivi).toFixed(3));
        }

        exponentialFactor2.push({
            x: fetchData.data[i].data,
            y: Math.pow(2,i+1)
        })

    }
    // for (let i=0;i<52;i++){
    //     exponentialFactor4.push(
    //         (60000000 /(1+ (((60000000 / 211)-1) * Math.exp(-0.16*i)))).toFixed(0)
    //     )
    // }
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
            name: "New cases per day",
            data: newInfectedSeries
        }
    ])
    chartFive.updateSeries([
        {
            name:" Number of cases ",
            type: "line",
            data: exponentialFactor3
        }
    ])
    
//    for (let i=0;i<fetchData.romeData.length;i++){
//        romeData.push({
//         x: fetchData.romeData[i].data,
//         y: fetchData.romeData[i].totale_casi
//     })
//    }
//    chartSix.updateSeries([
//         {
//             name:" Rome cases ",
//             type: "line",
//             data: romeData
//         }
//    ])
}