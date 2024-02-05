const express = require("express");
require("./db");
const app = express();

const port = process.env.PORT || 5000; 
const cors = require('cors');

app.use(cors());
app.use(express.json())

app.use(express.json())
app.use( require('./Routers/Airline'));
app.use(require('./Routers/Ticket'));


app.listen(port, () => {
    console.log(`connection is setup at localhost:${port}`)
});