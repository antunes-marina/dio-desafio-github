function trocaElementos(array){
	if(!array) return -1;
	if(!array.length) return -1;
	
	for(let i=0; i < array.length; i++){
		if (array[i] !== 0 && array[i] % 2 === 0) {
			array[i] = 0;
		}
	}
	return array;
}
let vetor = [1, 3, 4, 6, 80, 0, 23, 90];
console.log(trocaElementos(vetor));


