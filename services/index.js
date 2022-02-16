const model = require('../models');
const { isInside } = require('../utils');

const getAllCarsPositions = async() => {
    const allCarsPositions = await model.getAllCarsPositions();      
    return allCarsPositions;
};

const getAllCheckPoints = async() => {
    const allCheckPoints = await model.getAllCheckPoints();    
    return allCheckPoints;
};

const getCarsPositionsCheckPoints = async () => {
    let cars = await getAllCarsPositions();
    let points = await getAllCheckPoints();
    let carsPoints = [];
    
    cars.forEach((car) => {
        points.forEach((point) => {
            if (isInside (car.latitude, point.ponto_latitude, car.longitude, point.ponto_longitude, point.raio)) {
                car.ponto = point.nome;
                carsPoints.push(car);
            }
        })
    });    
    
    return carsPoints;
};

module.exports = { getAllCarsPositions, getAllCheckPoints, getCarsPositionsCheckPoints };