const teste2 = [
    {
      "_id": "620ac083b019181096deb5d5",
      "placa": "TESTE001",
      "data_posicao": "Wed Dec 12 2018 00:04:03 GMT-0200 (Hora oficial do Brasil)",
      "velocidade": 0,
      "longitude": -51.469891,
      "latitude": -25.3649141,
      "ignicao": "false",
      "ponto": "PONTO 24"
    },
    {
      "_id": "620ac083b019181096deb5d6",
      "placa": "TESTE001",
      "data_posicao": "Wed Dec 12 2018 00:34:06 GMT-0200 (Hora oficial do Brasil)",
      "velocidade": 0,
      "longitude": -51.4699098,
      "latitude": -25.3649175,
      "ignicao": "false",
      "ponto": "PONTO 24"
    },
    {
      "_id": "620ac083b019181096deb5d7",
      "placa": "TESTE001",
      "data_posicao": "Wed Dec 12 2018 03:34:26 GMT-0200 (Hora oficial do Brasil)",
      "velocidade": 0,
      "longitude": -51.4699506,
      "latitude": -25.3649141,
      "ignicao": "false",
      "ponto": "PONTO 24"
    }
];

var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  
console.log(groupBy(teste2, 'ponto'));