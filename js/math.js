// Arithmetic mean
let getMean =  data => {
    return data.reduce( (a, b) => {
        return Number(a) + Number(b);
    }) / data.length;
};

// Standard deviation
let getSD = data =>{
    let m = getMean(data);
    if(data.length === 1){
        return 0;
    }
    else{
        return Math.sqrt(data.reduce((sq, n) => {
            return sq + Math.pow(n - m, 2);
        }, 0) / (data.length - 1));   
    }  
};


// sum of and specific array
let arraySum = arrayOfNumbers =>{
    let sum = 0;
    arrayOfNumbers.forEach(item => {
        sum = sum + item.userOR;
    });
    return sum;
}

//Finding Median
function calculateMedian(values){
    if(values.length ===0) return 0;

    values.sort((a,b)=> {
      return a-b;
    });
    let half = Math.floor(values.length / 2);
  
    if (values.length % 2)
    return values[half];

    return (values[half - 1] + values[half]) / 2.0;
}

let setBoxPlot = arr => {
    let firstHalf , secondHalf , q1 , q3 , IQR;
    //calculate median
    const median = calculateMedian(arr);
    if(!(arr.length % 2)){
        arr.splice(arr.length/2 , 0 , median);
    }
    //split arry to get 25th & 75th percentile
    firstHalf = arr.slice(-arr.length , -arr.length/2 -1);
    secondHalf = arr.slice(-arr.length/2);
    //median of 25th percentile
    q1 = calculateMedian(firstHalf);
    //median of 75th percentile
    q3 = calculateMedian(secondHalf);
    //put the median if its a new value
    if(!(firstHalf.length % 2)){
        firstHalf.splice(firstHalf.length/2 , 0 , q1);
    }
    if(!(secondHalf.length % 2)){
        secondHalf.splice(secondHalf.length/2 , 0 , q3);
    }
    //Caculate IQR : The Proper Values for Ratigs are between q1 and q3 plus 1 for median
    IQR = Math.ceil((firstHalf.length) / 2) + Math.ceil((secondHalf.length /2)) + 1;
    //Final Array : leftSide + median + rightSide
    let wisker = firstHalf.concat(median).concat(secondHalf);
    return {
        wisker,
        median,
        q1,
        q3,
        IQR
    };
}

//Tesing
// let value = setBoxPlot([1.4 , 1.1 , 1.5 , 2 , 5 , 0.8 , 0.8, 0.3 , 0.9 , 1.3 , 1.3 , 2]);

let orArrayRate = arr =>{
    const array = [];
    arr.forEach(item =>{
        array.push(item.userOR);
    });
    return array;
}