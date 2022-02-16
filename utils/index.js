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

module.exports = { isInside };

//Referência para fórmula de distância:
//https://www.geeksforgeeks.org/program-distance-two-points-earth/#:~:text=For%20this%20divide%20the%20values,is%20the%20radius%20of%20Earth