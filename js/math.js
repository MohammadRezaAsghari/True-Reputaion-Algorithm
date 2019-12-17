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
        sum = sum + item;
    });
    return sum;
}


