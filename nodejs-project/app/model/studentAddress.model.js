module.exports = (sequelize, Sequelize) => {
    const StudentAddress = sequelize.define('studentAddress', {
        address: {
            type: Sequelize.STRING(256)
        },
        aditional: {
            type: Sequelize.STRING(256)
        },
        pin_code: {
            type: Sequelize.BIGINT
        },
        city: {
            type: Sequelize.STRING(56)
        },
        state: {
            type: Sequelize.STRING(56)
        }
    }, { timestamps: false });

    return StudentAddress;
}