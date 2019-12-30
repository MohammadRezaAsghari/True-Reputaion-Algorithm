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
    init();
    console.log(dataset);
    
} ,1000);
