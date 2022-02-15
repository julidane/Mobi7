const getArea = (latA, latB, longA, longB) => {
    const area = Math.sqrt(
        (Math.abs(latA) - Math.abs(latB))**2 + (Math.abs(longA) - Math.abs(longB))**2);
    return area;
}



console.log(getArea(-402, -200, -2231, -1000));

const isInside = (latA, latB, longA, longB, rad) => {     
    
    if((Math.abs(latA) - Math.abs(latB))**2 + (Math.abs(longA) - Math.abs(longB))**2 <= rad**2){
        return true;
    }    
    else {
        return false;
    }
}

module.exports = { getArea, isInside };

// https://www.geeksforgeeks.org/find-if-a-point-lies-inside-or-on-circle/