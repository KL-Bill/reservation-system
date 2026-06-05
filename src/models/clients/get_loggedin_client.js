const db = require('../../_db/db_functions')

const getClientModel = (req_body) => {
    return db.getClient(req_body.id);
}

module.exports = getClientModel;