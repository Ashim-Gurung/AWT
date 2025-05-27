const express = require('express');
const server = express();

server.use(express.json());

let quotes = [
  {id : 1,text: 'it works on my machine!'  },
  {id : 2,text: 'I will start learning react tomorrow'  },
];

server.get('/quotes',(request,response) => {
  response.json(quotes);
});