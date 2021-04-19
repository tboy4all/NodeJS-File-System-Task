const express = require('express');
const app = express();
const fs = require('fs');
const axios = require('axios');

const getResult= async ()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        let result =  JSON.stringify(res.data);

        fs.writeFile('./results/posts.json',result ,(err)=>{
            if(err){
                throw err;
            }
            console.log('your data is saved');
        })
};

app.get('/', (req, res) => {
    res.send('Hello World!');
    getResult();
  });


//===== SENDING RESULT TO POST.JSON FILE INSIDE RESULT DIRECTORY===//

app.listen(8000,()=>{
    console.log('application started on port 8000')
})