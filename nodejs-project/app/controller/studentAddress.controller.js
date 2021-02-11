const db = require('../config/db.config.js');
const studentAddress = db.studentAddress;


exports.create = (req, res) => {
    // Save to PostgreSQL database
    studentAddress.create({
        "address": req.body.address,
        "aditional": req.body.aditional,
        "pin_code": req.body.pin_code,
        "city": req.body.city,
        "state": req.body.state
    }).then(studentaddress => {
        res.json(studentaddress);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findAll = (_req, res) => {
    studentAddress.findAll().then(studentaddress => {
        res.json(studentaddress.sort(function(c1, c2) { return c1.id - c2.id }));
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findOne = (req, res) => {
    const city = req.params.city;
    studentAddress.findOne({ where: { city: city } })
        .then(studentaddress => {
            res.json(studentaddress);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: "error", details: err });
        });
};