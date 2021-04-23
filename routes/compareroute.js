var express = require('express');
var router = express.Router();
var Fteam = require('../models/fteamscore')
var Steam = require('../models/steamscore');
var i = 0;
var k = 0;
var totalscore = 0;
var totalscore1 = 0;

//Creating POST Request to create records of First Team to be Compared
router.post('/create',(req,res,next) => {

    var newFteam = new Fteam({
        playername:req.body.playername,
        playerteam:req.body.playerteam,
        playerturn:req.body.playerturn,
        playerrank:req.body.playerrank,
    });
    newFteam.save((err,fteam) => {
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:fteam});
    });


    // While Loop for Looping over 5 overs
    while(i<=5)
    {
        //Inner Loop for looping over 6 balls in an over
        for (let index = 0; index <=6; index++) {
            var newFteam = new Fteam({
            playerscore:req.body.playerscore,
            playersixer:req.body.playersixer,
            playerfours:req.body.playerfours
        });
        newFteam.save((err,fteam) => {
            if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:fteam});
        });
        //Saving Total score of the First Team in variable total score
        totalscore = totalscore + playerscore;
        console.log(totalscore);
        var newSteam = new Steam({
            playerover:req.body.playerover,
            playerwickets:req.body.playerwickets,
            playerwicketname:req.body.playerwicketname
        });
        newSteam.save((err,steam) => {
            if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:steam});
        });
            
        }
       i++; 
    }
});



//Creating POST Request to create records of Second Team to be Compared
router.post('/create1',(req,res,next) => {

    var newFteam = new Fteam({
        playername:req.body.playername,
        playerteam:req.body.playerteam,
        playerturn:req.body.playerturn,
        playerrank:req.body.playerrank,
    });
    newFteam.save((err,fteam) => {
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:fteam});
    });
 // While Loop for Looping over 5 overs
    while(i<=5)
    {
        //Inner Loop for looping over 6 balls in an over
        for (let index = 0; index <=6; index++) {
            var newFteam = new Fteam({
            playerscore:req.body.playerscore,
            playersixer:req.body.playersixer,
            playerfours:req.body.playerfours
        });
        newFteam.save((err,fteam) => {
            if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:fteam});
        });
        //Saving Total score of the First Team in variable total score
        totalscore1 = totalscore1 + playerscore;
        console.log(totalscore);
        var newSteam = new Steam({
            playerover:req.body.playerover,
            playerwickets:req.body.playerwickets,
            playerwicketname:req.body.playerwicketname
        });
        newSteam.save((err,steam) => {
            if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:steam});
        });
            
        }
       i++; 
    }
});

if(totalscore >totalscore1){
    console.log("Team A wins");
}
else{
    console.log("Team b Wins");
}


router.get('/read',(req,res,next) => {
    Fteam.find({},(err,fteam)=> {
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:fteam});

    });
});

router.get('/update1', (req,res,next) => {
    Fteam.findById({_id:req.body.id},(err,fteam)=> {
        if(err)
        res.status(500).json({errmsg:err});
    res.status(200).json({msg:fteam});
    console.log(fteam.playerscore);
    });
});

router.delete('/delete/:id', (req,res,next) => {
    Fteam.findByIdAndRemove({_id:req.params.id},(err,fteam)=> {
        if(err)
        res.status(500).json({errmsg:err});
    res.status(200).json({msg:fteam});
    });
});
module.exports = router;   