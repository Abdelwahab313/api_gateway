const express = require('express')
const {setupLogging} = require("./logging");
const {ROUTES} = require("./routes");
const {setupProxies} = require("./proxy");
const {setupRateLimit} = require("./ratelimit");


const app = express()
const port = 4000;

setupLogging(app);
setupRateLimit(app, ROUTES);
setupProxies(app, ROUTES);


app.get('/hello', (req, resp) => {
    return resp.send('HELLO WORLD!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

