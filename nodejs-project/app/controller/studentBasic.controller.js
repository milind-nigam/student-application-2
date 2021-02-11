const db = require('../config/db.config.js');
const studentBasic = db.studentBasic;


exports.create = (req, res) => {
    // Save to PostgreSQL database
    studentBasic.create({
        "student_name": req.body.student_name,
        "email": req.body.email,
        "mobile": req.body.mobile,
        "DOB": req.body.DOB,
        "gender": req.body.gender
    }).then(studentbasic => {
        res.json(studentbasic);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findAll = (_req, res) => {
    studentBasic.findAll().then(studentbasic => {
        res.json(studentbasic.sort(function(c1, c2) { return c1.id - c2.id }));
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findOne = (req, res) => {
    const student_name = req.params.student_name;
    studentBasic.findOne({ where: { student_name: student_name } }).then(studentbasic => {
        res.json(studentbasic);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};