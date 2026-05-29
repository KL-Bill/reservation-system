const db = require('../../_db/db_functions')

const getAllUsersModel = () => {
    return db.getAllUser();
}

module.exports = getAllUsersModel;