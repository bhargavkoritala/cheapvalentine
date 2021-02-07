const express = require('express');
const router = express.Router();
const places = require('../models/places');

//getrecommendations
router.post('/places', async (req,res) => {
    try{
        console.log(req.body)
        const recommendation = await user.find({category : req.body.category});
        if(recommendation!=Null) {
            res.json(recommendation);
        } else {
               res.json({message : 'Please enter a location and category'})
        }
    }catch(err){
        console.log(err);
        res.json({
            message : err
        })
    }
});

module.exports = router;