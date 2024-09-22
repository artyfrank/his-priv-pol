const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/hello-world.html');
});

app.get('/privacy-policy', (req, res) => {
    res.sendFile(__dirname + '/privacy-policy.html');
});

app.get('/tos', (req, res) => {
    res.sendFile(__dirname + '/tos.html');
});
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
