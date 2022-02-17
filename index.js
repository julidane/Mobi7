const express = require('express');

const { getCarsWithDuration } = require('./controllers');

const app = express();
app.use(express.json());

app.get('/', getCarsWithDuration);

app.listen(3001, () => {
    console.log('Ouvindo na porta 3001')
});