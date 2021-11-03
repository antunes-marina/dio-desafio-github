function filtraPares(array) {
  return array.filter(callback);
}

function callback(item) {
  return item % 2 === 0;
}

const minhaArray = [2, 35, 26, 33, 95, 88];

console.log(filtraPares(minhaArray));