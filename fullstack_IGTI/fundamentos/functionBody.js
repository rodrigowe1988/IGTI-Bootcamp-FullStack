/**
 * @param {Number} totalSales Total de vendas
 * @param {Number} reference Valor de referência
 * @param {Number} bestBonus Bônus melhor
 * @param {Number} worstBonus Bônus pior
 */
function calculaBonus(totalSales, reference, bestBonus, worstBonus) {
	let bonus =
		totalSales >= reference ? totalSales * bestBonus : totalSales * worstBonus;

	return bonus;
}

calculaBonus(1000, 600, 0.1, 0.05);
calculaBonus(500, 600, 0.1, 0.05);
