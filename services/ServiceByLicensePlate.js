const model = require('../models/ModelbyLicensePlate');
const { isInside, formatAnswer } = require('../utils');

const getAllCheckPoints = async() => {
    const allCheckPoints = await model.getAllCheckPoints();    
    return allCheckPoints;
};

const getCarsPositionsCheckPoints = async (cars, points) => { 
    
    let carsPoints = [];
    
    cars.forEach((car) => {
        points.forEach((point) => {
            if (isInside (car.latitude, point.ponto_latitude, car.longitude, point.ponto_longitude, point.raio)) {
                car.ponto = point.nome;
                car.data = new Date(car.data_posicao);
                carsPoints.push(car);                
            }
        })
    });
        
    return carsPoints;
};

//Referência para remover arrays duplicadas dentro de um array
// https://stackoverflow.com/questions/44014799/javascript-how-to-remove-duplicate-arrays-inside-array-of-arrays

const getIndexes = async (cars) => {
        
    let indexes = [];
    cars.forEach((car) => {        
        indexes.push([car.placa, car.ponto]);
    });    
    
    let newIndexes = indexes.filter(( t={}, a=> !(t[a]=a in t) ));  
    return newIndexes;   
};

const getCarsWithDates = async (cars) => {    
    let dates = [];
       
    cars.map((car) => {
        dates.push({placa: car.placa, ponto: car.ponto, data:car.data});
    }); 
                 
    return dates;
};

const getCarsWithDuration = async (indexes, carsWithDate) => {    
    let teste01Ponto24 = [];
    let teste01Ponto2 = [];
    let teste01Ponto1 = [];
    let car12Ponto24 = [];
    
    carsWithDate.forEach((car) => {        
        if (car.placa ==="TESTE001" && car.ponto === "PONTO 24") {
            teste01Ponto24.push(car.data);
        };    
        if (car.placa ==="TESTE001" && car.ponto === "PONTO 2") {            
            teste01Ponto2.push(car.data);
        };
        if (car.placa ==="TESTE001" && car.ponto === "PONTO 1") {            
            teste01Ponto1.push(car.data);
        };
        if (car.placa ==="CAR0012" && car.ponto === "PONTO 24") {           
            car12Ponto24.push(car.data);
        };
    });
           
    const result = formatAnswer(teste01Ponto24, teste01Ponto2,teste01Ponto1,car12Ponto24, indexes);
    return result;
}

const getByLicensePlate =  async (licensePlate) => {
    
    const cars = await model.getByLicensePlate(licensePlate);
    const points = await getAllCheckPoints();

    let carsPositions = await getCarsPositionsCheckPoints(cars, points);
    
    const indexes = await getIndexes(cars);
    const carsWithDate = await getCarsWithDates(carsPositions);
    
    const byLicensePlate = await getCarsWithDuration(indexes, carsWithDate);    

    return byLicensePlate;
}

module.exports = { getByLicensePlate };