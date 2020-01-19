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
    for(let i=0 ; i<1000 ; i++){
        setUP(false);
        calculateRateObjectivity(false);
        registerRateObjectivity();
        calculateUserObjectivity();
        calculateUserConsistency();
        calculateTR();
        registerTR();
        calculateNewReputation();
    }
    console.log(dataset);
}
