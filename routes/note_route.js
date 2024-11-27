const express = require('express');
const router = express.Router();
const Note = require('../models/note');






router.get('/searchbyuserid/:userid', async (req, res) => {
    const noteUseridS = await Note.find({ userid: req.params.userid });
    res.json(noteUseridS);

});

/////////////
router.get('/list/bodyid', async (req, res) => {
    const noteUserid = await Note.find({ userid: req.body.userid });
    res.json(noteUserid);

});
router.get('/lista', async (req, res) => {


    const noteslist = await Note.find();
    console.log(res.statusCode);
    res.json(noteslist);
});
/////////////////


///////////////////
router.get('/delete/:id', async (req, res) => {
    await Note.deleteOne({ id: req.params.id });
    const responce = { message: 'note is deleted successfully' + `id : ${req.params.id}+ ${res.statusCode}` };

    res.json(responce);
});
//////////////////
router.post('/deleteform', async (req, res) => {
    await Note.deleteOne({ id: req.body.id });
    const responce = { message: 'note deleted successfully' + `${req.body.id}` };
    res.json(responce)
})
//////////////////
router.post('/addnewnoteform', async (req, res) => {

    const newnoteparam = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
    });
    await newnoteparam.save();
    if (res.statusCode == 200) {
        const responce = { message: "new note params add successfully" + `ìd: ${req.body.id}`, statusCode: res.statusCode };
        res.json(responce);
    } else {
        const responce = { message: "Error to add note", statusCode: res.statusCode };
        res.json(responce);
    }


});
////////////////

router.get('/addnew', async (req, res) => {
    const newnote = new Note({
        id: '0004',
        userid: 'mohad47@gmail.com',
        title: 'first note',
        content: 'hi this is the first title',

    });
    await newnote.save();
    const responce = { message: 'new note add successfully' };

    res.send(responce);

});



module.exports = router;