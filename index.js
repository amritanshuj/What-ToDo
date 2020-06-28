const express = require('express');
const app = express();
const port = 8000;

// Use Express Router
app.use('/', require('./routes/index'));

// Set up the viw engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${port}`);
    }

    console.log(`Server is runing on port: ${port}`);
});