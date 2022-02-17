const model = require('../models');
const { isInside, formatAnswer } = require('../utils');

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
    const points = await getAllCheckPoints();
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

const getIndexes = async () => {
    const cars = await getCarsPositionsCheckPoints();    
    let indexes = [];
    cars.forEach((car) => {        
        indexes.push([car.placa, car.ponto]);
    });    
    
    let newIndexes = indexes.filter(( t={}, a=> !(t[a]=a in t) ));  
    return newIndexes;   
};

const getCarsWithDates = async () => {    
    let dates = [];
    const cars = await getCarsPositionsCheckPoints();     
    cars.map((car) => {
        dates.push({placa: car.placa, ponto: car.ponto, data:car.data});
    }); 
                 
    return dates;
};

const getCarsWithDuration = async () => { 
    const indexes = await getIndexes();    
    const carsWithDate = await getCarsWithDates();
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

module.exports = { getCarsWithDuration };