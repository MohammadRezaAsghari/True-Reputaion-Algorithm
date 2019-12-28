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
    registerRateObjectivity();
    calculateUserObjectivity();

}

//giveUsers: give it and item id --> returns an array of users who rated that item
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

//giveRates: give it and item id --> returns an array of rates which belongs to that item
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

//giveUsersRates(): give it a user id --> returns that activity number of that user
const giveUsersRates = function (u) {
    let properUser = dataset[0].find(function(item) {
        return item.user_id === u;
    });
    console.log(properUser.rating.length);
}

//calculateRateObjectivity : call it and then --> the dataset[1].rated has a new property
// called [or] --> or = |(item_rate - reputation of the item)/standard_deviation|
let calculateRateObjectivity = function() {
    dataset[1].forEach(function (item) {
        item.rated.forEach(function (subItem) {
            let or = Math.abs((subItem.rate - item.rep) / item.sd);
            subItem['or'] = or;
        });
    });
}

// dataset[1].rated has a property named [or]
// extracting all these [or] values in items and ... (continue in next function)
let extractRateObjectivity = function(userId) {
    const userOR = [];
    dataset[1].forEach(function (item) {
        let userFind = item.rated.find(function (subItem) {
            return subItem.user_id === userId;
        });
        // later : cheack here whether userFind is !== -1
        userOR.push({userOR : userFind.or , item : item.item_id});
    });
    return userOR;
};

//add it to dataset[0] for each user
let registerRateObjectivity = function (){
    dataset[0].forEach(function (item) {
        const val = extractRateObjectivity(item.user_id);
        item['orArray'] = val;
    })
}

//calculateUserObjectivity
let calculateUserObjectivity = function () {
    dataset[0].forEach(function (item) {
        item['oStar'] = (arraySum(item.orArray) / item.orArray.length);
    });
}
