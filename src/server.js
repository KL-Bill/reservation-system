const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

console.log('Wow amazing! Updated ka na ba?')

server.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
})