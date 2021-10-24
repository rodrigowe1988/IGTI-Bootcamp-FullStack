//podemos usar valores default para nosso parâmetros que são passados às funções
function sum(a, b = 10) {
	return a +b;
}

//sem valores default
function sum2(a, b) {
	if (!b)
		return a + 10;
	return a + b;
}

console.log(sum(3, 5));
console.log(sum(2));
console.log(sum2(2));
