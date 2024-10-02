const express = require('express');

const app = express();
const Note  = require('./models/note')
const mongoose = require('mongoose');

const mongoDbPath = 'mongodb+srv://admin:fcb1234567890@affiliate.d2hwz.mongodb.net/?retryWrites=true&w=majority&appName=affiliate';
mongoose.connect(mongoDbPath).then(() => {
    console.log('connected successfully elhamdolilah');
    app.get('/',(req,res)=>{
        const responce = {statuscode:res.statusCode,message:'Api Works'};
        res.json(responce);

    })
    //////////
    // app.get('/notes/list', async (req, res) => {
    //     const notes = await Note.find();
    //     console.log(notes)
    //     res.json(notes);
       
    // });
    ///////////////////
    const noteRouter = require('./routes/note_route')

    app.use('/note', noteRouter);


}).catch((error) => {
    console.log('error of connect', error);
});
const port = process.env.port||3000;


app.listen(port, () => {
    console.log('successfullly connected at port' + `${port}`)
});


// app.post('/api/add_person',(req,res)=>{

//     console.log('result',req.body);
// const pdata = {

//     'id':personeData.length+1,
//     'name':req.body.name,
//     'phone':req.body.phone,
//     'age':req.body.age,
// }
// personeData.push(pdata),
// console.log('final result',pdata),

// res.send('new person')

// // res.statusCode(200).send({
// //     "Status_code" : 200,
// //     "Message":"data is added successfully",
// //     "person":pdata,
// // });

// })


