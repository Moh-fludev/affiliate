const mongoose =  require('mongoose');

const noteSchema = mongoose.Schema({
    id:{
        type:String,
        unique : true,
        required : true,
    },
    userid:{
        type:String,
        unique:true,
        require:true,
    },
    title:{
        type:String,
        required:true,

    },
    content:{
        type:String,
    },
    dateAdd:{
        type:Date,
        default:Date.now,
    }
});



module.exports =  mongoose.model('Note',noteSchema)