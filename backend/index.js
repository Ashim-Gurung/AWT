const express = require('express');
const server = express();

server.get('/', (request, response) => {
  response.send('Hello World');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 

server.use(express.json());

let quotes = [
  {id : 1,text: 'it works on my machine!'  },
  {id : 2,text: 'I will start learning react tomorrow'  },
];

server.get('/quotes',(request,response) => {
  response.json(quotes);
});