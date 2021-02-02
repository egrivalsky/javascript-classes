const express = require('express');
const app = express();

//add home route
app.get('/', (req, res) => {
    res.send("Today's topic: Classes")
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('spooling up the FTLs --', `${PORT}`)
});