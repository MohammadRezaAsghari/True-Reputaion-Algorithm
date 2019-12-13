//functions 


//giveUsers
//input: an specific item (m)
//process :
//return  all users give rate to item m




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


//calculateBsicReputation
//input an array
//process : (sum)/numner of items
// output : return the medium
let calculateBsicReputation = function(arrayOfRates){
    let sum = 0;
    arrayOfRates.forEach(function(rate) {
        sum += rate;
    })
    return (sum / arrayOfRates.length);
}