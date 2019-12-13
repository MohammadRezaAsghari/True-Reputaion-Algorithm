let dataset;

let xhr = new XMLHttpRequest() ;
xhr.open('GET' , './js/dataset.json', true);
xhr.send();
xhr.onload = function () {
    dataset = JSON.parse(xhr.responseText);
}

setTimeout(function() {
    console.log(dataset);

    giveUsersRates(24);
    console.log(giveRates(1));
    console.log(calculateBsicReputation(giveRates(1)));

} ,1000);
