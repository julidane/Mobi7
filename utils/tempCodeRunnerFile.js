const getArea = (latA, latB, longA, longB) => {
    const area = Math.sqrt((Math.abs(latA) - Math.abs(latB))**2 + (Math.abs(longA) - Math.abs(longB))**2);
    return area;
}

// const getArea = (latA, longA) => {
//     const area = Math.sqrt((latA)**2 + (longA)**2);
//     return area;
// }

console.log(getArea(-402, -200, -2231, -1000));