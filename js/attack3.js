const nuckAttackWithFrequency = (arr , productId , genere , rateValue , dataInjectNum) =>{

    // Attack to productId, meanwhile rate other items too for normal behaviour
    const otherItems = [
        // g stands for genere
        //productId don't need genere here
        {id:productId , g: genere},{id:243 , g :16},{id:148, g:13},{id:239, g:15},
        {id:73, g:16},{id:72, g:1},{id:91, g:10},{id:53, g:3},{id:1047, g:15},
        {id:325, g:16},{id:451, g:5},{id:304, g:3},{id:241, g:2},{id:332, g:14},
        {id:690, g:3},{id:559, g:8},{id:231, g:16},{id:2, g:1},{id:281, g:5},
        {id:455, g:6},{id:77, g:4},{id:476, g:13},{id:255, g:8},{id:1028, g:1},{id:109, g:2},
        {id:68, g:4},{id:367, g:1},{id:321, g:4},{id:227, g:15},{id:410, g:5},{id:879, g:11},{id:402, g:11},
    ]
    for(let i=1 ; i<=dataInjectNum ; i++){
        let RAUserId = 5000 + i;
            dataset[0].push(
                {
                    user_id : RAUserId,
                    rating : [{
                        item : otherItems[0].id,
                        genere : otherItems[0].g,
                        rate: rateValue
                    }]
                }
            );
        let findUser = dataset[0].find((user)=> user.user_id === RAUserId);
        for(let j=1 ; j<otherItems.length ; j++){
            findUser.rating.push({
                item : otherItems[j].id,
                genere : otherItems[j].g,
                rate: rateValue
            });
        }
        
        
        for(let j=0 ; j<otherItems.length ; j++){
            let findedProduct = arr.find((product)=>{
                return product.item_id === otherItems[j].id;
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

