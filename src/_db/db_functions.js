const users = [
    {id: 111, username: "sups", password: "sups123", name: "Superman"},
    {id: 222, username: "batsy", password: "bats123", name: "Batman"},
    {id: 333, username: "spidey", password: "spidey123", name: "Spiderman"},
];

const addUser = (id, username, password, name) => {
    users.push({
        id,
        username,
        password, 
        name
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
    checkLogin
}