console.log('Hi');
setTimeout(function cb1() {
	console.log('cb1');
}, 5000);
console.log('Bye');

//Executando após 1 segundo
setTimeout(() => {
	console.log('setTimeout')
}, 1000);

for (let i = 1; i <= 5; i++) {
	console.log(i);
}
