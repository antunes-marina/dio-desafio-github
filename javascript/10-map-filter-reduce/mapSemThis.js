function mapSemThis(array) {
  return array.map(function(item){
    return item * 2;
  });
}

const numeros = [2, 4, 6, 8, 10];

console.log(mapSemThis(numeros));