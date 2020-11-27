const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
var slider = document.getElementById("myRange");
var output = document.getElementById("number");
var writenNumber = document.querySelector('#writtenNumber');

inputSlider.oninput = (() => {
	let value = inputSlider.value;
	slideValue.textContent = value;
	slideValue.style.left = (value / 10) + "%";
	slideValue.classList.add("show");

	var unidades = ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
	var especiais = ["Dez", "Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"];
	var dezenas = ["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
	var centenas = ["Cem", "Duzentos", "Trezentos", "Quatrocentos", "Quinhentos", "Seiscentos", "Setecentos", "Oitocentos", "Novecentos"];


	if ((slider.value).length == 1) {
		writenNumber.innerHTML = (unidades[parseInt(slider.value[0])]);

	} else if (slider.value.length === 2) {

		//Especiais
		if ((slider.value[0] == '1') && (slider.value[1] == '0' || slider.value[1] == '1' || slider.value[1] == '2' || slider.value[1] == '3' || slider.value[1] == '4' || slider.value[1] == '5' || slider.value[1] == '6' || slider.value[1] == '7' || slider.value[1] == '8' || slider.value[1] == '9')) {
			writenNumber.innerHTML = (especiais[parseInt(slider.value[1])]);
		}

		//Dezenas
		else if ((slider.value[0] == '2' || slider.value[0] == '3' || slider.value[0] == '4' || slider.value[0] == '5' || slider.value[0] == '6' || slider.value[0] == '7' || slider.value[0] == '8' || slider.value[0] == '9') && slider.value[1] == '0') {
			writenNumber.innerHTML = (dezenas[parseInt(slider.value[0] - 2)]);
		}

		//Dezenas compostas
		else {
			writenNumber.innerHTML = (dezenas[parseInt(slider.value[0] - 2)] + " e " + unidades[parseInt(slider.value[1])]);
		}
	} else if (slider.value.length === 3) {
		//Centenas inteiras
		if ((slider.value[0] == '1' || slider.value[0] == '2' || slider.value[0] == '3' || slider.value[0] == '4' || slider.value[0] == '5' || slider.value[0] == '6' || slider.value[0] == '7' || slider.value[0] == '8' || slider.value[0] == '9') && (slider.value[1] == '0' && slider.value[2] == '0')) {
			writenNumber.innerHTML = (centenas[parseInt(slider.value[0] - 1)])
		}
		//"centos"
		else if ((slider.value[0] == '1' && slider.value[1] == '0') && slider.value != 0) {
			writenNumber.innerHTML = "Cento e " + (unidades[parseInt(slider.value[2])]);
		} else if (slider.value[0] == '1' && slider.value[1] == '1') {
			writenNumber.innerHTML = "Cento e " + (especiais[parseInt(slider.value[2])])
		} else if (slider.value[0] == '1' && (slider.value[1] != '0' && slider.value[1] != '1' && slider.value[2] != '0')) {
			writenNumber.innerHTML = "Cento e " + (dezenas[parseInt(slider.value[1] - 2)] + " e " + unidades[parseInt(slider.value[2])]);
		} else if (slider.value[0] == '1' && (slider.value[1] != '0' && slider.value[1] != '1' && slider.value[2] == '0')) {
			writenNumber.innerHTML = "Cento e " + (dezenas[parseInt(slider.value[1] - 2)]);
		}
		//outras centenas
		else if ((slider.value[0] != '1' && slider.value[1] == '0') && slider.value != 0) {
			writenNumber.innerHTML = (centenas[parseInt(slider.value[0] - 1)]) + ' e ' + (unidades[parseInt(slider.value[2])]);
		} else if (slider.value[0] != '1' && slider.value[1] == '1') {
			writenNumber.innerHTML = (centenas[parseInt(slider.value[0] - 1)]) + ' e ' + (especiais[parseInt(slider.value[2])]);
		} else if ((slider.value[0] != '1' && slider.value[1] != '1') && slider.value[2] != '0') {
			writenNumber.innerHTML = (centenas[parseInt(slider.value[0] - 1)]) + ' e ' + (dezenas[parseInt(slider.value[1] - 2)] + " e " + unidades[parseInt(slider.value[2])]);
		} else if ((slider.value[0] != '1' && slider.value[1] != '1') && slider.value[2] == '0') {
			writenNumber.innerHTML = (centenas[parseInt(slider.value[0] - 1)]) + ' e ' + (dezenas[parseInt(slider.value[1] - 2)]);
		}
	}




});
inputSlider.onblur = (() => {
	slideValue.classList.add("remove");
});