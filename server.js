const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')

app.use(cors())

app.use(express.json(), express.urlencoded({ extended:true }))

require("./server/config/mongoose.config") // import mongoose.config 

require("./server/routes/routes")(app); // import routes for API calls



app.listen(port, () => console.log(`listening on port ${port}`))