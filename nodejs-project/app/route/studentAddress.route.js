module.exports = function(app) {
    const studentAddress = require('../controller/studentAddress.controller.js');

    app.post('/api/studentAddress', studentAddress.create);

    app.get('/api/studentAddress', studentAddress.findAll);

    app.get('/api/studentAddress/:city', studentAddress.findOne);

}