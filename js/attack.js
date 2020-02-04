const pushAttack = (dataset , productId) =>{
    let findedProduct = dataset[1].find((product)=>{
        return product.item_id === productId;
    })
    for(let i=1 ; i<=147 ; i++){
        let RAUserId = 5000 + i;
        dataset[0].push(
            {
                user_id : RAUserId,
                rating : {
                    item : productId,
                    rate: 1
                }
            }
        );
        findedProduct.rated.push(
            {
                user_id : RAUserId,
                rate : 1
            }
        );
    }
}

