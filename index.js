const express = require('express');
const app = express();
const Note = require('./models/note')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const noteRouter = require('./routes/note_route');
const mongoDbAtlasPath = 'mongodb+srv://admin:fcb1234567890@affiliate.d2hwz.mongodb.net/?retryWrites=true&w=majority&appName=affiliate';
//const mongoDbPath = 'mongodb://localhost:27017/affiliate_db1'



mongoose.connect(mongoDbAtlasPath).then(() => {
    console.log('connected successfully elhamdolilah');

    app.use('/note', noteRouter);
    app.get('/', (req, res) => {
        const responce = { statuscode: res.statusCode, message: 'Api Works' };
        res.json(responce);
    });



}).catch((error) => {
    console.log('error of connect', error);
});
const port = process.env.port || 3000;


app.listen(port, () => {
    console.log('successfullly connected at port' + `${port}`)

});




