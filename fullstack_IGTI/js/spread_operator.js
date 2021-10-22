let array = [1, 2, 3, 4, 5, 6];

//adicionando com array.push
function add1(value) {
	array.push(value);
	console.log(array);
}

//adicionando elementos com spread operator
function add2(value) {
	array = [...array, value];
	console.log(array);
}

add1(10);
add2(20);
