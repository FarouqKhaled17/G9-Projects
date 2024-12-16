const http = require('http');

const hostname = 'localhost';
const port = 3000;

const user = {
  name: 'Farouk',
  age: 22,
  email: 'faroukkhaled@gmail.com',
};

const server = http.createServer((req, res) => {
  res.end(JSON.stringify(user));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
