function loopWithLet(number) {
	for (let i = 0; i < number; i++)
		console.log(`let ${i}`);
}
loopWithLet(5);

//fora do escopo não tenho mais acesso à variável i pois ela existe somente dentro da função, essa é uma das funções de se usar let ao invés do var
console.log(`Aqui não possuo mais acesso à variável i que é ${i}.`)
