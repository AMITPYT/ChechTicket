const express = require("express");
const router = express.Router();
const Ticket = require("../Schema/Ticket")
// const Airline =  require("../Schema/Airline")
const { validationResult } = require("express-validator");
var jwt = require('jsonwebtoken');


const JWT_SECRET = 'Amitisagoodb$oy'
router.post("/ticket/addticket", async (req, res) => {
    try {
        const {source,destination,date } = req.body;

        console.log(req.body.source);
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
         const ticket = await Ticket.create ({
          source,  
          destination,
          date
        });
        const data = {
          ticket:{
              id: ticket.id
          }
      }
      const authtoken  = jwt.sign(data,  JWT_SECRET);
        res.json({"Success": "Ticket Add Successfully",authtoken});
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
});

router.get('/ticket/getticket/:id', async (req, res) => {
    try {
        const getcart = await Ticket.find(req.params.id);
        console.log(getcart);
        res.json(getcart)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/check/getairline', async(req, res) => {
  try{
   
  }
  catch(err){
    res.status(500).send("Internal Server Error");
  }
})
module.exports = router;