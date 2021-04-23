var express = require('express');
var router = express.Router();
var Firstteam = require('../models/Firstteam');
var i = 1;

//Creating First Team records using POST Request
router.post('/create',(req,res,next) => {

    var newFirstteam = new Firstteam({
        playername:req.body.playername,
        playerteam:req.body.playerteam,
        playerturn:req.body.playerturn,
        playerrank:req.body.playerrank,
        playerscore:req.body.playerscore,
        playersixer:req.body.playersixer,
        playerfours:req.body.playerfours
    });
    newFirstteam.save((err,firstteam) => {
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:firstteam});
    });
});

//Fetching all the records of First Team created by POST Request
router.get('/read',(req,res,next) => {
    Firstteam.find({},(err,firstteam)=> {
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:firstteam});

    });
});

//Updating the First team particular record based on _id passed in the body section
router.put('/update',(req,res,next) => {
    Firstteam.findById(req.body._id,(err,firstteam)=> {
        if(err)
          res.status(500).json({errmsg:err});
          firstteam.playername = req.body.playername;
          firstteam.playerteam = req.body.playerteam;
          firstteam.playerturn = req.body.playerturn;
          firstteam.playerrank = req.body.playerrank;
          firstteam.playerscore = req.body.playerscore;
          firstteam.playersixer = req.body.playersixer;
          firstteam.playerfours = req.body.playerfours;
          

          firstteam.save((err,firstteam)=>{
            if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:firstteam});
        }); 
    });
});

//Deleting the First team record based on _id passed in the url
router.delete('/delete/:id', (req,res,next) => {
    Firstteam.findByIdAndRemove({_id:req.params.id},(err,firstteam)=> {
        if(err)
        res.status(500).json({errmsg:err});
    res.status(200).json({msg:firstteam});
    });
});

module.exports = router;   