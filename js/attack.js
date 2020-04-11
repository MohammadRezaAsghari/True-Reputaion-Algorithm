const pushAttack = (arr , productId) =>{
    let findedProduct = arr.find((product)=>{
        return product.item_id === productId;
    })
    for(let i=1 ; i<=100 ; i++){
        let RAUserId = 5000 + i;
        dataset[0].push(
            {
                user_id : RAUserId,
                rating : {
                    item : productId,
                    rate: 5
                }
            }
        );
        findedProduct.rated.push(
            {
                user_id : RAUserId,
                rate : 5
            }
        );
    }
}

