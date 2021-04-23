var express = require('express');
var router = express.Router();
var Secondteam = require('../models/Secondteam');

//Creating Second Team records using POST Request
router.post('/create',(req,res,next) => {

    var newSecondteam = new Secondteam({
        playername:req.body.playername,
        playerteam:req.body.playerteam,
        playerturn:req.body.playerturn,
        playerrank:req.body.playerrank,
        playerover:req.body.playerover,
        playerwickets:req.body.playerwickets,
        playerwicketname:req.body.playerwicketname
    });
    
    newSecondteam.save((err,secondteam) => {
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:secondteam});
    });
});


//Fetching all the records of Second Team created by POST Request
router.get('/read',(req,res,next) => {
    Secondteam.find({},(err,secondteam)=> {
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:secondteam});

    });
});

//Updating the First team particular record based on _id passed in the body section
router.put('/update',(req,res,next) => {
    Secondteam.findById(req.body._id,(err,secondteam)=> {
        if(err)
          res.status(500).json({errmsg:err});
          secondteam.playername = req.body.playername;
          secondteam.playerteam = req.body.playerteam;
          secondteam.playerturn = req.body.playerturn;
          secondteam.playerrank = req.body.playerrank;
          secondteam.playerover = req.body.playerover;
          secondteam.playerwickets = req.body.playerwickets;
          secondteam.playerwicketname = req.body.playerwicketname;
          

          secondteam.save((err,secondteam)=>{
            if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:secondteam});
        }); 
    });
});

//Deleting the First team record based on _id passed in the url
router.delete('/delete/:id', (req,res,next) => {
    Secondteam.findByIdAndRemove({_id:req.params.id},(err,secondteam)=> {
        if(err)
        res.status(500).json({errmsg:err});
    res.status(200).json({msg:secondteam});
    });
});

module.exports = router;   