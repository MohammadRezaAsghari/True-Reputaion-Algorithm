       if(localStorage.getItem('DATA') === null){
        console.log('inside if');
       
        let url = "Movie.xlsx";
        
        /* set up async GET request */
        let req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "arraybuffer";
        req.onload = function(e) {
            let data = new Uint8Array(req.response);
            console.log("reading, please wait...")
            let workbook = XLSX.read(data, {
                type: "array"
            });

            /* DO SOMETHING WITH workbook HERE */
            let first_sheet_name = workbook.SheetNames[0];
            let address_of_cell = 'A1';

            /* Get worksheet */
            let worksheet = workbook.Sheets[first_sheet_name];
            let dataset = XLSX.utils.sheet_to_json(worksheet);
             
            localStorage.setItem('DATA' , JSON.stringify(dataset));
        }
        req.send();
    }

    let MovieData = JSON.parse(localStorage.getItem('DATA'));
    console.log(MovieData);
    let DataSet = [[] , []];
    MovieData.forEach(md =>{
        //fill out DataSet[0]
        findedUser = DataSet[0].find(user =>{
            return user.user_id === Number(md[196]);
        });
        
        if(findedUser === undefined){
            DataSet[0].push(
                {
                    user_id : Number(md[196]),
                    rating : [
                        {
                            item : Number(md[242]) , 
                            rate : Number(md[3]),
                            genere:Number(md[16])
                        }
                    ]
                }
            );
        }else{
            
            findedUser.rating.push({
                item : Number(md[242]),
                rate : Number(md[3]),
                genere:Number(md[16])
            });
        }

        //fill out DataSet[1]
        findedItem = DataSet[1].find(product =>{
            return product.item_id === Number(md[242]);
        });
        if(findedItem === undefined){
            DataSet[1].push({
                item_id : Number(md[242]),
                genere : Number(md[16]),
                rated : [
                    {
                        user_id : Number(md[196]), 
                        rate : Number(md[3])
                    }
                ]
            });
        }else{
            findedItem.rated.push({
                user_id : Number(md[196]),
                rate : Number(md[3])
            });
        }
    });

       
