
module.exports = function makeExchange(currency) {

  //проверки по условию
  if (currency <= 0) return {};
  if (currency > 10000 ) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

  let obj = {};

  //создаем многомерный массив для хранения данных 
  //[[количество монет данного типа, цена монеты, обозначение монеты],...]
  let arrData = [[0, 50, 'H'], [0, 25, 'Q'], [0, 10, 'D'], [0, 5, 'N'], [0, 1, 'P']];  

  for (let i=0; i<arrData.length; i++) {
    arrData[i][0] = Math.floor(currency / arrData[i][1]);

    if (arrData[i][0] > 0) obj[arrData[i][2]] = arrData[i][0];

    currency -= arrData[i][0] * arrData[i][1];
  }

  return obj;
}
