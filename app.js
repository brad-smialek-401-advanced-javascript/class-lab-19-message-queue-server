'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://SocketServer-env.2ixrzi57cy.us-east-2.elasticbeanstalk.com');

const faker = require('faker');

//emits speak and passes a hacker phrase as payload every second
setInterval( () => {
  socket.emit('speak', faker.hacker.phrase());
},1000);