const db = require('../../_db/db_functions')

const getUserModel = () => {
    return db.getUser();
}

module.exports = getUserModel;