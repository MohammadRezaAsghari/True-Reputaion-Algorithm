let dataset = DataSet;
let test;


setTimeout(() =>{
    // arr , productId , genere , rateValue , dataInjectNum
    // PushAttackWithFrequency(dataset[1] , 346 ,3 , 5 , 5);
    nuckAttackWithFrequency(dataset[1] , 358 ,12 , 1 , 35);
    // attack(dataset[1] , 358 ,12 , 1 , 25);
    // attack(dataset[1] , 86 ,1 , 5 , 101);
    // attack(dataset[1] , 118 ,3 , 5 , 202);
    // attack(dataset[1] , 332 ,14 , 5 , 100);
    // attack(dataset[1] , 498 ,7 , 5 , 100);
    // attack(dataset[1] , 231 , 16 , 1 , 104);
    init();
    TrueReputation();
    
} ,1000);


let TrueReputation = () => {
    for(let i=0 ; i<6; i++){
        // setUP(false);
        calculateRateObjectivity(false);
        registerRateObjectivity();
        calculateUserObjectivity();
        calculateUserConsistency();
        // specifityDataPreparing();
        // calculateSpecifity();
        calculateTR();
        registerTR();
        calculateNewReputation();
    }
    // after the loop setUp again to inject the last loop data
    // setUP(false); 
    test = dangerUser();
    console.log(test);
}
console.log(dataset);




