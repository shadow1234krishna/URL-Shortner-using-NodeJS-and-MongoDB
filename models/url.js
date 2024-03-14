
const mongoose = require("mongoose")

const urlScheme=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        require:true,
    },
    visitHistory:[{
        timestamp:{type:Number}
    }],
},
{timestamps:true}
);

const URL=mongoose.model('url',urlScheme);

module.exports=URL;