const service = require('../services');

const getAllCarsPositions = async(_req, res, _next) => {
    const allCarsPositions = await service.getAllCarsPositions();    
    return res.status(200).send(allCarsPositions);
};

const getAllCheckPoints = async(_req, res, _next) => {
    const allCheckPoints = await service.getAllCheckPoints();    
    return res.status(200).send(allCheckPoints);
};

const getCarsPositionsCheckPoints = async(_req, res, _next) => {
    const carCheckPoints = await service.getCarsPositionsCheckPoints();     
    return res.status(200).send(carCheckPoints);
};


module.exports = { getAllCarsPositions, getAllCheckPoints, getCarsPositionsCheckPoints  };