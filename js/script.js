let dataset;


if(!(localStorage.getItem('dataset'))){
    let xhr = new XMLHttpRequest() ;
    xhr.open('GET' , './js/dataset.json', true);
    xhr.send();
    xhr.onload = function () {
        dataset = JSON.parse(xhr.responseText);
        localStorage.setItem('dataset' , JSON.stringify(dataset));
    }
}else{
    dataset = JSON.parse(localStorage.getItem('dataset'));
}


setTimeout(function() {
    console.log(dataset);

    init();

    // giveUsersRates(24);
    // console.log(giveRates(1));
    // console.log(getMean(giveRates(1)));
    // console.log(getSD(giveRates(1)));
    // console.log(giveUsers(0));

} ,1000);
