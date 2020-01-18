let dataset;


if(!(localStorage.getItem('dataset'))){
    let xhr = new XMLHttpRequest() ;
    xhr.open('GET' , './js/dataset.json', true);
    xhr.send();
    xhr.onload = function () {
        dataset = JSON.parse(xhr.responseText);
        localStorage.setItem('dataset' , JSON.stringify(dataset));
    }
}else{
    dataset = JSON.parse(localStorage.getItem('dataset'));
}



setTimeout(() =>{
    init();
    console.log(dataset);
    TrueReputation();
    
} ,1000);


let TrueReputation = () => {
    for(let i=0 ; i<2000 ; i++){
        dataset[1].forEach((item) =>{
            let ratesArray = giveRates(item.item_id , false);
            //initialize basic reputation
            let rep = getMean(ratesArray);
            item['rep'] = rep;
            //initialize standard deviation
            let sd = getSD(ratesArray);
            item['sd'] = sd;
        });
        calculateRateObjectivity(false);
        registerRateObjectivity();
        calculateUserObjectivity();
        calculateUserConsistency();
        calculateTrust();
        registerTRUST();
    }
    console.log(dataset);
}
