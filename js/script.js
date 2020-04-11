let dataset = DataSet;
let test;


setTimeout(() =>{
    pushAttack(dataset[1] , 265);
    // pushAttack(dataset[1] , 173);
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




