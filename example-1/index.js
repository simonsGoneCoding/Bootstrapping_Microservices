const express = require('express');

const app = express();
const port = 3000; 

// register HTTP GET route handler
app.get('/', (req, res) => {
    res.send("It's working!");
});

// start the HTTP server
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}, point your browser to http://localhost:${port}`);
});
