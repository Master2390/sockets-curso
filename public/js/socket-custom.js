var socket = io();

//on para escuchar al servidor
socket.on('connect', function() {
    console.log('Conectado al Server');
});
socket.on('disconnect', function() {
    console.log('Conexion Fuera de linea..!!');
});

socket.on('enviaServer', function(msg) {
    console.log(msg);
});

//emit para enviar Informacion
socket.emit('enviaDato', {
    user: 'Javier',
    msg: 'Yo envio una IDEA'
});

socket.emit('sumar', {
    n1: 5,
    n2: 5
}, function(res) {
    console.log('suma es: ', res);
});