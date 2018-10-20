const { io } = require('../server');

io.on('connection', (client) => {

    client.on('disconnect', () => {
        console.log('Usuario Fuera de linea');
    });

    client.on('enviaDato', (msg) => {
        console.log(msg);
        client.broadcast.emit('enviaServer', msg);
    })

    client.on('sumar', (msg, callback) => {
        console.log(msg);
        callback({
            suma: msg.n1 + msg.n2
        })
    });

})