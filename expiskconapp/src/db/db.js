const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nityaseva', {
    useUnifiedTopology: true
}).then(()=> {console.log('Connected successfully')}).catch((err)=> {console.log(err)})