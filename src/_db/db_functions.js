const users = [];
const clients = [];


const addClient = (id, username, name, password) => {
    clients.push({
        id,
        username,
        name,
        password
    })
    return true
}


const addUser = (id, username, name, password) => {
    users.push({
        id,
        username,
        name,
        password
        
    })

    return true
}

const getAllUser = () => {
    return users;
}

const getUser = (id) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return users[i]
        }
    }
}

const checkLogin = (username, password) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            return users[i];
        }
    }

    return null;
}

module.exports = {
    addUser,
    getAllUser,
    getUser,
    checkLogin,
    addClient
}