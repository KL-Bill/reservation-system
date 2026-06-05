const db = require('../../_db/db_functions')

const getEventsCountModel = (req, res) => {
    return db.getEventsCounter()
}

module.exports = getEventsCountModel