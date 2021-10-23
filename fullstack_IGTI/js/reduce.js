const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//utilizando reduce para somar os valores do array
//0 (zero) é o segundo parâmetro do reduce
const sum = array.reduce((accumulator, currentItem) => {
	return accumulator + currentItem
}, 0);

console.log(`A soma do array é ${sum}`);

//somando os números ímpares
const oddSum = array.reduce((accumulator, currentItem) => {
	const numberToSum = currentItem % 2 === 1 ? currentItem : 0;
	return accumulator + numberToSum;
}, 0);
