const http = require('http');
let visitorCount = 0;

const server = http.createServer((req, res) => {
    visitorCount++;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to My Server</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #2de2e2;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    text-align: center;
                }
                h1 {
                    font-size: 3rem;
                    color: #333;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to Nethopper v2.0</h1>
                <p>Version: v2.0</p>
                <p>Visitor Count: ${visitorCount}</p>
            </div>
        </body>
        </html>
    `);
    res.end();
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});