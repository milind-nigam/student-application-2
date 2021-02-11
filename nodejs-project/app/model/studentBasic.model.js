module.exports = (sequelize, Sequelize) => {
    const StudentBasic = sequelize.define('studentBasic', {
        student_name: {
            type: Sequelize.STRING(56)
        },
        email: {
            type: Sequelize.STRING(112)
        },
        mobile: {
            type: Sequelize.BIGINT
        },
        DOB: {
            type: Sequelize.DATEONLY
        },
        gender: {
            type: Sequelize.STRING(12)
        }
    }, { timestamps: false });

    return StudentBasic;
}