const http = require('http');


http.createServer((req, res) => {


    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Juan Camanei',
        edad: '200'
    }

    res.write(JSON.stringify(salida))

    res.end();
}).listen(8080);

console.log('Listener 8080');