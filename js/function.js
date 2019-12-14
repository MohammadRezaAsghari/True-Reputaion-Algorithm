//functions 

//init
let init = function () {
    
    dataset[1].forEach(function(item){
        let ratesArray = giveRates(item.item_id);
        //initialize basic reputation
        let rep = getMean(ratesArray);
        item['rep'] = rep;
        //initialize standard deviation
        let sd = getSD(ratesArray);
        item['sd'] = sd;
    });
    calculateRateObjectivity();

}

// Arithmetic mean
let getMean = function (data) {
    return data.reduce(function (a, b) {
        return Number(a) + Number(b);
    }) / data.length;
};

// Standard deviation
let getSD = function (data) {
    let m = getMean(data);
    return Math.sqrt(data.reduce(function (sq, n) {
            return sq + Math.pow(n - m, 2);
        }, 0) / (data.length - 1));
};

//giveUsers
//input: an specific item (m)
//process :
//return  all users give rate to item m
let giveUsers = function(m){
    const usersRatesOnProduct = [];
    let properItem = dataset[1].find(function(item) {
        return item.item_id === m;
    });
    properItem.rated.forEach(function (item) {
        usersRatesOnProduct.push(item.user_id);
    });
    return usersRatesOnProduct;
}

//giveRates 
//input: an specific item (m) --> id of item : number
//process
//output: returns all rates to item (m) in array
let giveRates = function(productId){  
    let ratesOnProduct = [];  
    let properItem = dataset[1].find(function(product) {
        return product.item_id === productId;
    });
    properItem.rated.forEach(function (item) {
        ratesOnProduct.push(item.rate);
    });
    return ratesOnProduct;
}

//giveUsersRates()
//input: an specific user (u) --> u = id of user like : e9343-3434
//process:
//output: return all rates submited by user u
const giveUsersRates = function (u) {
    let properUser = dataset[0].find(function(item) {
        return item.user_id === u;
    });
    console.log(properUser);
    console.log(properUser.rating.length);
}

//calculateRateObjectivity
//input (rep + sd + rate)
//process : Math.abs((rate - rep)/sd)
//output : objectivity of rate

let calculateRateObjectivity = function() {
    dataset[1].forEach(function (item) {
        item.rated.forEach(function (subItem) {
            let or = Math.abs((subItem.rate - item.rep) / item.sd);
            subItem['or'] = or;
        });
    });
}