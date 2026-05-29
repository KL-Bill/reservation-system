const db = require('../../_db/db_functions')

const getUserModel = (req_body) => {
    return db.getUser(req_body.id);
}

module.exports = getUserModel;