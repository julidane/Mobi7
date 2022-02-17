const service = require('../services');

const getCarsWithDuration = async(_req, res, _next) => {
    const carsWithDuration = await service.getCarsWithDuration();
    return res.status(200).send(carsWithDuration);
}

module.exports = { getCarsWithDuration  };