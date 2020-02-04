function lessThan50(){
    let sum=0;
    dataset[1].forEach(product =>{
        if(product.rated.length >=90 && product.rated.length <=110){
            sum+=1;
        }
    });
    return sum;
}

function dangerUser(){
    
    let dangerProduct = dataset[1].filter(product =>{
        // if(product.rated.length >=90 && product.rated.length <=140){
        if(product.rated.length >=200){
            return true;
        }
    });
    return dangerProduct;
};

