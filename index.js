const express = require('express');
const app = express();
const port = 8000;

// Use Express Router
app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${port}`);
    }

    console.log(`Server is runing on port: ${port}`);
});