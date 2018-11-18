const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    req.send("Hi there'");
});

app.listen('8080', () => {
    console.log("listening 8080");
});