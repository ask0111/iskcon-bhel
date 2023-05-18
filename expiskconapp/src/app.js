const express = require('express');
const Collection = require('./db/model');
// const bodyParser = require('body-parser');
const router = new express.Router()

require('./db/db');

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(router);



router.get('/nityaslist' , async(req, res)=>{
    const nityasevalist = await Collection.find();
    console.log(nityasevalist);
    res.send(nityasevalist)
})



router.post('/nityas', (req, res)=>{
    try {
        console.log('kkii', req.body);
        const {fName, mName, lName, mobile, email, pledge, smonth, dob, words, tc} = req.body;
        const addUser = new Collection({fName, mName, lName, mobile, email, pledge, smonth, dob, words, tc});
        addUser.save();
        console.log(addUser, 'userdatas');
        res.status(201).send(addUser);
        // window.alert('Successfully Added!')
    } catch (error) {
        console.log('data')
        // console.alert('Not Added!')
        res.status(404).send(error);
    }
})




app.listen(port, (err)=>{
    console.log(err)
})