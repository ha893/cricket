var mongoose = require('mongoose');

var secondSchema = mongoose.Schema({
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
module.exports = mongoose.model('secondteam',secondSchema);