const express = require("express");
const router = express.Router();
const Airline = require("../Schema/Airline")
const { validationResult } = require("express-validator");
const middleware = require('../middleware');

router.post("/airline/addairline",middleware, async (req, res) => {
    try {
        const {Indigo,Vistara,Qatar} = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const airline = new Airline ({
          Indigo,  
          Vistara,
          Qatar,
          airlineid: req.airlineid.id
        });
        console.log(req.user.airlineid.id,"jkjnk");
        console.log("nbxjjkjhjkhjk");
        const savedairline = await airline.save();
        console.log(savedairline);
        res.json({"Success": "Ticket Add Successfully",savedairline});
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
});

router.get('/airline/getairline', async (req, res) => {
    try {
        const getcart = await Ticket.find({ airlineid: req.user.id});
        console.log(getcart);
        res.json(getcart)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});
module.exports = router;