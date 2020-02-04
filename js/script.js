let dataset = DataSet;

// console.log(dataset);
// Attack
pushAttack(dataset , 1014);

setTimeout(() =>{
    init();
    TrueReputation();
    
} ,1000);


let TrueReputation = () => {
    for(let i=0 ; i<6; i++){
        setUP(false);
        calculateRateObjectivity(false);
        registerRateObjectivity();
        calculateUserObjectivity();
        calculateUserConsistency();
        calculateTR();
        registerTR();
        calculateNewReputation();
    }

    
    let userToAttack = dangerUser();
    console.log(userToAttack);
    let val = giveRates(userToAttack[3] , true);
    console.log(getMean(val));
}
console.log(dataset);




