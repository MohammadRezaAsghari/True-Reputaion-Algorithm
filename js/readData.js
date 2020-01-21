
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


            console.log(dataset);
            
        }
        req.send();

        
       
