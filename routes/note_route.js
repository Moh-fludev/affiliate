const express =  require('express');

const router = express.Router();



const Note = require('./../models/note');


router.get('/:userid',async(req,res)=>{
    const noteUserid = await Note.find({userid:req.params.userid});
    res.json(noteUserid);

});
/////////////
router.get('/list/bodyid',async(req,res)=>{
    const noteUserid = await Note.find({userid:req.body.userid});
    res.json(noteUserid);

})
///////////////////////
router.get('/list', async (req, res) => {
    const notes = await Note.find();
    console.log(res.json(notes));
    res.json(notes);


});
///////////////////
router.get('/:deletenote',async(req,res)=>{
    await Note.deleteOne({id:req.params.id});
    const responce = {message:'note is deleted successfully'+`id : ${req.params.id}`};

    res.json(responce);
});
//////////////////
router.post('/addnewnoteform',async(req,res)=>{
   
    const newnoteparam = new Note({
        id:req.body.id,
        userid:req.body.userid,
        title:req.body.title,
        content:req.body.content,
    });
await newnoteparam.save();
const responce = {message:"new note params add successfully"+`ìd: ${req.body.id}`};

res.json(responce);

});
////////////////

router.get('/addnew',async(req,res)=>{
    const newnote =new Note({
    id:'0004',
    userid:'mohad47@gmail.com',
    title:'first note',
    content:'hi this is the first title',

    });
    await newnote.save();
    const responce = {message:'new note add successfully'};

    res.send(responce);

});



module.exports = router;