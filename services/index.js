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
    const allCarsPositions = await model.getAllCarsPositions();
    const allCheckPoints = await model.getAllCheckPoints();  
 
    let carsCheckPoints = allCarsPositions;
    let checkPoints = allCheckPoints;    
    let carPonto;
    for (let i = 0; i <= carsCheckPoints.length; i++) {
        let j = 0;
        while (j < checkPoints.length) {            
            if (
                isInside(
                    carsCheckPoints[i].latitude, checkPoints[j].latitude, carsCheckPoints[i].longitude, checkPoints[j].longitude, checkPoints[j].raio
                    )) {
                carPonto = checkPoints[j].nome;
                carsCheckPoints[i].point = carPonto;
                console.log(carPonto, 'dentro do for');
                j++
                
            }
            j++;
            console.log(carPonto, 'fora do for');
        }
        console.log(carPonto, 'fora do while');

    }
    // for (let car of carsCheckPoints) {
    //     let i = 0;
    //     while (i < checkPoints.length) {            
    //         if (
    //             isInside(
    //                 car.latitude, checkPoints[i].latitude, car.longitude, checkPoints[i].longitude, checkPoints[i].raio
    //                 )) {
    //             carPonto = checkPoints[i].nome;
    //             car.ponto = carPonto;
    //             console.log(carPonto, 'dentro do for');
    //             i++;
    //         }
    //         i++;
    //         console.log(carPonto, 'fora do for');
    //     }
    //     console.log(carPonto, 'fora do while');
    // }
    
    return carsCheckPoints;
}

module.exports = { getAllCarsPositions, getAllCheckPoints, getCarsPositionsCheckPoints };