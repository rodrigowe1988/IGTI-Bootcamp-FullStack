//usando o rest operator para expressar que a função receberá inúmeros parâmetros

function infiniteSum(...numbers) {
	let sum = 0;

	for (let i = 0; i < numbers.length; i++)
		sum += numbers[i];


	return sum;
}

console.log(infiniteSum(1, 2));
console.log(infiniteSum(1, 2, 3, 5));
console.log(infiniteSum(1, 2, 4, 67, 122, 1444));
console.log(infiniteSum(1, 2, 132, 1231, 0 ,12313, 412321));

