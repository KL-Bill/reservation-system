const users = [];
const clients = [
    {
        id: 1,
        name: "Bebot Billones",
        username: "Bebot",
        password: "bebot123"
    },
    {
        id: 2,
        name: "Jaireh Villamor",
        username: "Jaireh",
        password: "jaireh123"
    },
    {
        id: 3,
        name: "Thayer Villamor",
        username: "Thayer",
        password: "thayer123"
    }
];
const admin = [{
    id: 1,
    name: "adminName",
    username: "admin",
    password: "admin123"
}]

const events = [
    {
        id: 1,
        clientId: 2,
        date: "June 10, 2026",
        time: "9:00am - 5:00pm",
        venue: "D'veranda",
        type: "Birthday"
    },
    {
        id: 2,
        clientId: 3,
        date: "June 20, 2026",
        time: "6:00am - 10:00am",
        venue: "Rotary",
        type: "Wedding"
    },
    {
        id: 3,
        clientId: 1,
        date: "June 15, 2026",
        time: "11:00am - 6:00pm",
        venue: "Pool @Prk.Papaya, Mankilam",
        type: "Party"
    }
]




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

const getAllClients = () => {
    return clients;
}

const getAllEvents = () => {
    return events;
}

const getUser = (id) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return users[i]
        }
    }
}

const getClient = (id) => {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id == id) {
            return clients[i]
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

const clientCheckLogin = (username, password) => {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].username == username && clients[i].password == password) {
            return clients[i];
        }
    }

    return null;
}

const adminCheckLogin = (username, password) => {
    for (let i = 0; i < admin.length; i++) {
        if (admin[i].username == username && admin[i].password == password) {
            return admin[i];
        }
    }

    return null;
}

module.exports = {
    addUser,
    getAllUser,
    getUser,
    checkLogin,
    addClient,
    getAllClients,
    clientCheckLogin,
    adminCheckLogin,
    getClient
}