//init
let init = () => {
    setUP(true);
    calculateRateObjectivity(true);
    registerRateObjectivity();
    calculateUserObjectivity();
    calculateUserConsistency();
    calculateTR();
    registerTR();
    calculateNewReputation();
}

//giveUsers: give it and item id --> returns an array of users who rated that item
let giveUsers = m =>{
    const usersRatesOnProduct = [];
    let properItem = dataset[1].find(item => item.item_id === m);
    properItem.rated.forEach(item => usersRatesOnProduct.push(item.user_id));
    return usersRatesOnProduct;
}

//giveRates: give it and item id --> returns an array of rates which belongs to that item
let giveRates = (product , initlz) =>{  
    let ratesOnProduct = [];  
    if(initlz){
        product.rated.forEach(item => {
            ratesOnProduct.push(item.rate);
        });
    }else{
        product.rated.forEach(item => {
            ratesOnProduct.push(item.calcRep);
        });
    }
    
    return ratesOnProduct;
}

//giveUsersRates(): give it a user id --> returns that activity number of that user
const giveUsersRates = u => {
    let properUser = dataset[0].find(item => item.user_id === u);
}

//calculate reputation and standard deviation
const setUP = (state) =>{
    dataset[1].forEach((item) =>{
        let ratesArray = giveRates(item, state);
        //calc rep
        let rep = getMean(ratesArray);
        item['rep'] = rep;
        //cal sd
        let sd = getSD(ratesArray);
        //put sd
        item['sd'] = sd;
    });
}

//calculateRateObjectivity : call it and then --> the dataset[1].rated has a new property
let calculateRateObjectivity = (initlz) => {
    dataset[1].forEach(item => {
        item.rated.forEach(subItem =>{
            let or;
            if(initlz){
                or = Math.abs((subItem.rate - item.rep) / (item.sd + 1));
                
            }else{
                
                or = Math.abs((subItem.rate - item.rep) / (item.sd + 1));
            }
            
            subItem['or'] = or;
        });
    });
}

// dataset[1].rated has a property named [or]
// extracting all these [or] values in items and ... (continue in next function)
const extractRateObjectivity = userId => {
    const userOR = [];
    dataset[1].forEach(item =>{
        let userFind = item.rated.find(subItem => subItem.user_id === userId);
        if(userFind){
        // later : cheack here whether userFind is !== -1
        userOR.push({userOR : userFind.or , item : item.item_id});
        }
    });
    return userOR;
};

//add it to dataset[0] for each user
const registerRateObjectivity =  () => {
    dataset[0].forEach(item => {
        const val = extractRateObjectivity(item.user_id);
        item['orArray'] = val;
    })
}

//calculateUserObjectivity
const calculateUserObjectivity = () =>{
    dataset[0].forEach(item =>{
        item['oStar'] = (arraySum(item.orArray) / item.orArray.length);
    });
}

//calculate consistency , bpr stands for box-plot result
const calculateUserConsistency = ()=>{
    dataset[0].forEach((item) => {
        const rate = orArrayRate(item.orArray);
        let bpr = setBoxPlot(rate);
        let crArray = [];
        item.orArray.forEach((orItem) =>{
            let cr;
            //outliers
            if((orItem.userOR > (bpr.q3 + (1.5*bpr.IQR))) || (orItem.userOR < (bpr.q1 - (1.5 * bpr.IQR)))){
                cr = 0;
            }
            //confidence of .5
            if(((orItem.userOR <= (bpr.q3 + (1.5*bpr.IQR))) && (orItem.userOR > (bpr.q3 + (1 * bpr.IQR)))) ||
               ((orItem.userOR >= (bpr.q1 - (1.5*bpr.IQR))) && (orItem.userOR < (bpr.q1 - (1 * bpr.IQR)))))
            {
                cr = 0.5;
            }
            //confidence of .7
            if(((orItem.userOR <= (bpr.q3 + (1 * bpr.IQR))) && (orItem.userOR > (bpr.q3 + (0.5 * bpr.IQR)))) ||
               ((orItem.userOR >= (bpr.q1 - (1 * bpr.IQR))) && (orItem.userOR < (bpr.q1 - (0.5 * bpr.IQR)))))
            {
                cr = 0.7;
                
            }
            //confidence of .9
            if(((orItem.userOR <= (bpr.q3 + (0.5 * bpr.IQR))) && (orItem.userOR > bpr.q3)) ||
               ((orItem.userOR >= (bpr.q1 - (0.5 * bpr.IQR))) && (orItem.userOR < bpr.q1)))
            {
                cr = 0.9;
            }
            else{
                cr = 1;
            }
            crArray.push(
                {
                    item:orItem.item,
                    cr : cr
                }
             );
        });
        item['crArray'] = crArray;
    })
}

//calculate Trust = O(n^2)
const calculateTR = () =>{
    dataset[0].forEach((user)=>{
        const trArray = [];
        const actv = user.rating.length;
        const obj = user.oStar;
        let tr;
        if(user.rating.length !== undefined){
            user.rating.forEach((rte , indx)=>{
                //be careful about user.crArray[indx] in order (decided not to go through base on id)
                tr = obj * actv * user.crArray[indx].cr;
                rte['tr'] = tr;
                trArray.push({item : rte.item,tr : tr , user:user.user_id });
            });
        }
        else{
            tr = obj * 1 * user.crArray[0].cr;
            user.rating['tr'] = tr;
            trArray.push({item : user.rating.item , tr : tr , user:user.user_id});
        }
       
        user['trArray'] = trArray;
    })
}

// injecting proper tr into item profile (item.rated now has a new value called tr)
const injectTR = (trArray) =>{
    //let's decide about trArray one by one
    trArray.forEach(trObject => {
        //find the right item
        findedProduct = dataset[1].find(product => trObject.item === product.item_id);
        //find the right user on that item
        findedUser = findedProduct.rated.find(rtd => rtd.user_id === trObject.user);
        //assign the calculated tr on that user
        findedUser.tr = trObject.tr;
    })
}

//  O(n^3)
const registerTR = () =>{
    //for every user , send their trArray to 
    //put tr in the right place
    dataset[0].forEach(user => {
        injectTR(user.trArray);
    })
}

//calculateNewReputation
const calculateNewReputation = () =>{
    dataset[1].forEach(product => {
        let sumOfTR = 0;
        product.rated.forEach(prObj =>{
            sumOfTR += prObj.tr;
        });
        product.rated.forEach(prObj =>{
            prObj.calcRep = (prObj.rate * prObj.tr) / sumOfTR ;
        })
    })
}

// Arash PourZarrabi
// Poune Groji
// Mohammad Salehe
// and all other borthers and sisters
// we never forget you