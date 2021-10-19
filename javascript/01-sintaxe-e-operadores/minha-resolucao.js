function comparaNumeros(num1, num2) {
  if(num1 == 0 || num2 == 0){
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);
    return `${primeiraFrase} ${segundaFrase}`;
  } else if(!num1 || !num2) {
    return "Defina um número!";
  } else {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);
    return `${primeiraFrase} ${segundaFrase}`;
  }
}

function criaPrimeiraFrase(num1, num2) {
  let saoIguais = '';

  if(num1 !== num2) {
    saoIguais = ' não';
  }

  return `Os números ${num1} e ${num2}${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;

  let resultado10 = ' ';
  let resultado20 = ' ';

  if(soma == 10) {
    resultado10 = 'o mesmo'
  } else if (soma > 10){
    resultado10 = 'maior'
  } else {
    resultado10 = 'menor'
  };

  if(soma == 20) {
    resultado20 = 'o mesmo'
  } else if (soma > 20){
    resultado20 = 'maior'
  } else {
    resultado20 = 'menor'
  };

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNumeros(0,1));