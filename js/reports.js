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
    // let dangerProduct = dataset[1].filter(product =>{
    //     if((product.rated.length >=90 && product.rated.length <=120) || product.rated.length === 97
    //     ||product.rated.length === 102||product.rated.length === 107||product.rated.length === 112||product.rated.length === 117
    //     || product.rated.length === 122 || product.rated.length === 127 || product.rated.length === 132){
    //         // if(product.rated.length === 357){
    //         return true;
    //     }
    // });
    let dangerProduct = dataset[1].filter(product =>{
        if((product.rated.length < 10)){
            // if(product.rated.length === 357){
            return true;
        }
    });
    return dangerProduct;
};

