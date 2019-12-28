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


// sum of and specific array

let arraySum = function (arrayOfNumbers) {
    let sum = 0;
    arrayOfNumbers.forEach(function (item) {
        sum = sum + item.userOR;
    });
    return sum;
}

//Finding Median
function median(values){
    if(values.length ===0) return 0;
  
    values.sort(function(a,b){
      return a-b;
    });
    console.log(values);
    var half = Math.floor(values.length / 2);
  
    if (values.length % 2)
      return values[half];
  
    return (values[half - 1] + values[half]) / 2.0;
  }
let randomArr = [2,1,3,4,5,4,5,2,3,4,1.5 ,5]
let medianVal = median(randomArr);
if(!(randomArr.length % 2)){
    randomArr.splice(randomArr.length/2 , 0 , medianVal);
}
console.log(medianVal);
console.log(randomArr);
