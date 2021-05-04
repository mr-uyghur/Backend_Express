const mongoose = require('mongoose')
//DB is connected to mongoose in this file
mongoose.connect("mongodb://localhost/crud-server", {
    useNewUrlParser:true,//optional code for getting rid off deprecation code in ur terminal
    useUnifiedTopology: true,
})
.then(() => console.log('found the mongoose'))
.catch(() => console.log('where did the mongoose go', err))