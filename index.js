const express = require('express');

const { getAllCarsPositions, getAllCheckPoints, getCarsPositionsCheckPoints } = require('./controllers');

const app = express();
app.use(express.json());

app.get('/', getAllCarsPositions);
app.get('/checkpoints', getAllCheckPoints);
app.get('/pontos', getCarsPositionsCheckPoints);

app.listen(3001, () => {
    console.log('Ouvindo na porta 3001')
});