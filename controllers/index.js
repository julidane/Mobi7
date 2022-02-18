const service = require('../services');

const getCarsWithDuration = async(_req, res, _next) => {
    const carsWithDuration = await service.getCarsWithDuration();
    return res.status(200).send(carsWithDuration);
};

const getByLicensePlate = async(req, res, _next) => {
    const { licensePlate } = req.body;
    const byLicensePlate = await service.getByLicensePlate(licensePlate);
    return res.status(200).send(byLicensePlate);
}

module.exports = { getCarsWithDuration, getByLicensePlate };