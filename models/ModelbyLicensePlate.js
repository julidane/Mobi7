const connection = require('./connection');

const getAllCheckPoints = async () => {
    const allCheckPoints = await connection()
    .then((db) => db.collection('base').find().toArray());    
    return allCheckPoints;
};

const getByLicensePlate = async (licensePlate) => {
    const placa = licensePlate;
    const byLicensePlate = await connection()
    .then((db) => db.collection('posicoes').find({ placa }).toArray());    
    return byLicensePlate;
};

module.exports = { getAllCheckPoints, getByLicensePlate };