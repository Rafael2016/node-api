const http = require('http');


http
    .createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/json' });


        if (req.url == '/produtos') {
            res.end(JSON.stringify(
                {
                    message: 'API Produtos'
                }));
        }
        if (req.url == '/usuarios') {
            res.end(JSON.stringify(
                {
                    message: 'API Usuarios'
                }));
        }

    })
    .listen(3000, () => console.log('Servidor rodando na porta 3000'));