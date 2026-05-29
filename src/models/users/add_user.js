const db = require('../../_db/db_functions')

const addUserModel = (req_body) => {
    const { id, name, username, password } = req_body;

    const response = db.addUser(id, username, password, name);

    return response;
}

module.exports = addUserModel;