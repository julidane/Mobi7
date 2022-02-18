//Referência para fórmula de distância:
//https://www.geeksforgeeks.org/program-distance-two-points-earth/#:~:text=For%20this%20divide%20the%20values,is%20the%20radius%20of%20Earth

const isInside = (latA, latB, longA, longB, rad) => {
    const latARad = Math.abs(latA * Math.PI/180);
    const latBRad = Math.abs(latB * Math.PI/180);
    const longARad = Math.abs(longA * Math.PI/180);
    const longBRad = Math.abs(longB * Math.PI/180);
    const radioKm = rad / 1000;    
    const dLat = Math.abs(latARad - latBRad);
    const dLon = Math.abs(longARad - longBRad);
    const radioEarth = 6371;    

    const a = Math.pow(Math.sin(dLat/2), 2) + Math.cos(latARad) * Math.cos(latBRad) * Math.pow(Math.sin(dLon/2), 2);
    const b = 2 * Math.asin(Math.sqrt(a));    

    const distance = b * radioEarth;    

    if (distance <= radioKm) {
        return true;
    } else {
        return false;
    } 
}
//Referência para calcular diferença entre datas
//https://bearnithi.com/2019/11/10/how-to-calculate-the-time-difference-days-hours-minutes-between-two-dates-in-javascript/

const timeDifference = (dateFuture, dateNow) => {
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;  

    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;    

    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;    

    let difference = '';
    if (days > 0) {
      difference += (days === 1) ? `${days} dia, ` : `${days} dias, `;
    }

    difference += (hours === 0 || hours === 1) ? `${hours} hora, ` : `${hours} horas, `;

    difference += (minutes === 0 || hours === 1) ? `${minutes} minuto` : `${minutes} minutos`; 

    return difference;
};

const formatAnswer = (arrayA, arrayB, arrayC, arrayD, indexes) => {
    let firstA = arrayA.sort()[0];    
    let lastA = arrayA.sort().reverse()[0];
    let firstB = arrayB[0];
    let lastB = arrayB.sort().reverse()[0];
    let firstC = arrayC[0];
    let lastC = arrayC.sort().reverse()[0];
    let firstD = arrayD[0];
    let lastD = arrayD.sort().reverse()[0];

    let finalA = timeDifference(lastA, firstA);
    let finalB = timeDifference(lastB, firstB);
    let finalC = timeDifference(lastC, firstC);
    let finalD = timeDifference(lastD, firstD);

    let result = [];
    
    result.push({...indexes[0], "duracao": finalA}, {...indexes[1], "duracao":finalB}, {...indexes[2], "duracao":finalC}, {...indexes[3],"duracao":finalD});

    let final = result.map(({ "0": carro, "1": placa, ...rest }) => ({ carro, placa, ...rest }));

    final = Object.assign({}, final);
  
    return final;
}

module.exports = { isInside, timeDifference, formatAnswer };