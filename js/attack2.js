const PushAttackWithFrequency = (arr , productId , genere , rateValue , dataInjectNum) =>{

    // Attack to productId, meanwhile rate other items too for normal behaviour
    const otherItems = [productId,86,690,498,504,164,48,705,484,66]
    for(let i=1 ; i<=dataInjectNum ; i++){
        let RAUserId = 5000 + i;
            dataset[0].push(
                {
                    user_id : RAUserId,
                    rating : [{
                        item : otherItems[0],
                        genere : genere,
                        rate: rateValue
                    }]
                }
            );
        let findUser = dataset[0].find((user)=> user.user_id === RAUserId);
        for(let j=1 ; j<otherItems.length ; j++){
            findUser.rating.push({
                item : otherItems[j],
                genere : genere,
                rate: rateValue
            });
        }
        
        
        for(let j=0 ; j<otherItems.length ; j++){
            let findedProduct = arr.find((product)=>{
                return product.item_id === otherItems[j];
            });
            findedProduct.rated.push(
                {
                    user_id : RAUserId,
                    rate : rateValue
                }
            );
        }
    }
}

