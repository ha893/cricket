var mongoose = require('mongoose');

var firstSchema = mongoose.Schema({
    playername:{
        type:String
    },
     
    playerteam: {
        type:String
    },

    playerturn:{
        type:String
    },

    playerrank:{
        type:String
    },

    playerscore:{
        type:[Number]
    },

    playersixer:{
        type:Number
    },

    playerfours:{
        type:Number
    },




    

});
module.exports = mongoose.model('firstteam',firstSchema);