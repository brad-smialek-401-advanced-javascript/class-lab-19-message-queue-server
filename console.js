'use strict';

const theword = require('./theword.js');

const io = require('socket.io-client');
//connecting to AWS
const socket = io.connect('http://SocketServer-env.2ixrzi57cy.us-east-2.elasticbeanstalk.com');


//listenting for a string
socket.on('the-bird', theword);