function somaNumeros(array) {
  return array.reduce(function(prev, current) {
    return prev + current;
  })
}

const array = [1, 2];

console.log(somaNumeros(array));