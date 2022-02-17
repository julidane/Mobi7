const exemplo = 'Wed Dec 19 2018 21:22:30 GMT-0200 (Hora oficial do Brasil)';
const exemploFormatado = new Date(exemplo);

const exemplo2 = 'Wed Dec 19 2018 21:30:30 GMT-0200 (Hora oficial do Brasil)';
const exemploFormatado2 = new Date(exemplo2);
console.log(exemploFormatado2, exemploFormatado);
console.log((exemploFormatado2 - exemploFormatado)%(24*60*60*1000)/(60*1000));
