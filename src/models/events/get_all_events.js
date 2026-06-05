const db = require('../../_db/db_functions')

const getAllEventsModel = (req, res) =>{
    return db.getAllEvents()
}

module.exports = getAllEventsModel;