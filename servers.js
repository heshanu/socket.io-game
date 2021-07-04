const express=require('express');
const app=express();
app.use(express.static(__dirname+'/public'));

const socketio=require('socket.io');
const expressServer=app.listen(3001);

const io=socketio(expressServer);
console.log('Express and sockets are listing on port 3000');


