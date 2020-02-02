let dataset = DataSet;

setTimeout(() =>{
    init();
    TrueReputation();
    
} ,1000);


let TrueReputation = () => {
    for(let i=0 ; i<2; i++){
        setUP(false);
        calculateRateObjectivity(false);
        registerRateObjectivity();
        calculateUserObjectivity();
        calculateUserConsistency();
        calculateTR();
        registerTR();
        calculateNewReputation();
    }
}
console.log(dataset);

//reports
console.log(lessThan50());
console.log(dangerUser());


