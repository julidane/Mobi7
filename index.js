const express = require('express');

const { getCarsWithDuration } = require('./controllers');
const { getByLicensePlate } = require('./controllers/ControllerByLicensePlate');

const app = express();
app.use(express.json());

app.get('/', getCarsWithDuration);
app.get('/placa', getByLicensePlate);

app.listen(3001, () => {
    console.log('Ouvindo na porta 3001')
});