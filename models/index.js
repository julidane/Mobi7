const connection = require('./connection');

const getAllCarsPositions = async() => {
    const allCarsPositions = await connection()
    .then((db) => db.collection('posicoes').find().toArray());    
    return allCarsPositions;
};

const getAllCheckPoints = async() => {
    const allCheckPoints = await connection()
    .then((db) => db.collection('base').find().toArray());    
    return allCheckPoints;
};

module.exports = { getAllCarsPositions, getAllCheckPoints };