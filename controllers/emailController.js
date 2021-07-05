const express = require('express');
const router = express.Router();
const Email = require('../model/emailModel');


router.get('/', async (req, res) => {

    try {
        
        const data = await Email.find();

        res.json(data)


    } catch (err) {
        console.error(err.messgage);
        res.status(500).send('Server Error')
    }



})


router.post('/', async (req, res) => {
    
    

    try {
        
        const {domainAddress, firstName, lastName} = req.body;

        email = new Email({
            domainAddress,
            firstName,
            lastName
        })
    
      const uniqueEmail = await email.save();

        res.json(uniqueEmail);


    } catch (err) {
        console.error(err.messgage);
        res.status(500).send('Server Error')
    }
   



})


module.exports = router;