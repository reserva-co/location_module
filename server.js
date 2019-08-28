const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
const controller = require('./server/controller');

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/api/location/:id', controller.get);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
