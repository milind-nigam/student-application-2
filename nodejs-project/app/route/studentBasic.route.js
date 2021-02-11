module.exports = function(app) {
    const studentBasic = require('../controller/studentBasic.controller.js');

    app.post('/api/studentBasic', studentBasic.create);

    app.get('/api/studentBasic', studentBasic.findAll);

    app.get('/api/studentBasic/:student_name', studentBasic.findOne);

}