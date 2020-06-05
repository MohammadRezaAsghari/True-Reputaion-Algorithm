const attack = (arr , productId , genere , rateValue , dataInjectNum) =>{
    let findedProduct = arr.find((product)=>{
        return product.item_id === productId;
    })
    for(let i=1 ; i<=dataInjectNum ; i++){
        let RAUserId = 5000 + i;
        dataset[0].push(
            {
                user_id : RAUserId,
                rating : {
                    item : productId,
                    genere : genere,
                    rate: rateValue
                }
            }
        );
        findedProduct.rated.push(
            {
                user_id : RAUserId,
                rate : rateValue
            }
        );
    }
}

