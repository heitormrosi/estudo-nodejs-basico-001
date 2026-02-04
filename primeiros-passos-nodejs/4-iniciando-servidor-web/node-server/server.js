const http = require("http");

const dados_globais = {
    violao: "gosto"
}

const server = http.createServer((req, res) => {
    console.log("[INFO] Servidor acessado!");
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);

    // Talvez seria melhor um switch...
    if (req.url == "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Hello, World!</h1>");
    } else if (req.url == "/json") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(dados_globais));
    } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Rota errada, volta pra /  :-P</h1>");
    }
});

server.listen(8080, () => {
    console.log("[INFO] Ouvindo em http://localhost:8080");
});