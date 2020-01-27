//how many movies got less than 50 user's rate?
function lessThan50(){
    let sum=0;
    dataset[1].forEach(product =>{
        if(product.rated.length >=300){
            sum+=1;
        }
    });
    return sum;
}