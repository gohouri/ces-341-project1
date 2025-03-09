const express = require('express');
const app = express();

const port = process.env.PORT || 1408;

app.use('/', require('./routes'));

app.listen(port, () => { console.log(`Running on port ${port}`)});