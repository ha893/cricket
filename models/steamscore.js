var mongoose = require('mongoose');

var sSchema = mongoose.Schema({
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

    playerover:{
        type:Number
    },

    playerwickets:{
        type:Number
    },

    playerwicketname:{
        type:String
    },

});
module.exports = mongoose.model('steam',sSchema);