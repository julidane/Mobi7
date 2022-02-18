const service = require('../services/ServiceByLicensePlate');

const getByLicensePlate = async (req, res, _next) => {
    const { licensePlate } = req.body;
    const byLicensePlate = await service.getByLicensePlate(licensePlate);
    return res.status(200).send(byLicensePlate);
};

module.exports = { getByLicensePlate };