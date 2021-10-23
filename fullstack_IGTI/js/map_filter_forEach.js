const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array)

//gerando um array com valores triplicados
const tripled = array.map(item => item * 3);
console.log(tripled);

//gerando um array com os números pares
const evenNumbers = array.filter(item => item % 2 === 0);
console.log(evenNumbers);

//percorrendo o array e mostrando cada um dos seus valores
//perceba que há um segundo parâmetro opcional que é o índice do array
array.forEach((item, index) => {
	console.log(`O valor do índice ${index} é ${item}`);
});
