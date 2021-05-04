
const Controller = require("../controllers/controller")// import controllers, CRUD logic

module.exports = app =>{
    app.get('/api',Controller.findAll)
    app.get('/api:_id',Controller.findOne)
    app.post('/api/new',Controller.create)
    app.put('/api/update/:_id',Controller.update)
    app.delete('/api/delete/:_id',Controller.delete)
    
}