var slider = document.getElementById("myRange");
var output = document.getElementById("number");
var writenNumber = document.querySelector('#writtenNumber');
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;

  var unidades=["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
  var especiais=["Dez","Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"]; 
  var dezenas=["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
  var centenas=["Cem", "Duzentos", "Trezentos", "Quatrocentos", "Quinhentos", "Seiscentos","Setecentos","Oitocentos", "Novecentos"];
  

  if((this.value).length == 1){
    writenNumber.innerHTML = (unidades[parseInt(this.value[0])]);

} else if(this.value.length === 2) {
        
        //Especiais
        if((this.value[0]=='1') && (this.value[1]=='0'||this.value[1]=='1'||this.value[1]=='2'||this.value[1]=='3'||this.value[1]=='4'||this.value[1]=='5'||this.value[1]=='6'||this.value[1]=='7'||this.value[1]=='8'||this.value[1]=='9')) {
            writenNumber.innerHTML = (especiais[parseInt(this.value[1])]);
        }
        
        //Dezenas
        else if((this.value[0]=='2'||this.value[0]=='3'||this.value[0]=='4'||this.value[0]=='5'||this.value[0]=='6'||this.value[0]=='7'||this.value[0]=='8'||this.value[0]=='9') && this.value[1]=='0') {
            writenNumber.innerHTML = (dezenas[parseInt(this.value[0]-2)]);
        }

        //Dezenas compostas
        else {
            writenNumber.innerHTML = (dezenas[parseInt(this.value[0]-2)]+" e "+unidades[parseInt(this.value[1])]);
        }
    }
        else if (this.value.length === 3) {
        //Centenas inteiras
        if ((this.value[0]=='1'||this.value[0]=='2'||this.value[0]=='3'||this.value[0]=='4'||this.value[0]=='5'||this.value[0]=='6'||this.value[0]=='7'||this.value[0]=='8'||this.value[0]=='9') && (this.value[1]=='0' && this.value[2]=='0')) {
            writenNumber.innerHTML = (centenas[parseInt(this.value[0]-1)])
        }
        //"centos"
        else if((this.value[0] == '1' && this.value[1] == '0') && this.value != 0){
            writenNumber.innerHTML = "Cento e " + (unidades[parseInt(this.value[2])]);
        } else if(this.value[0] == '1' && this.value[1] == '1'){
            writenNumber.innerHTML = "Cento e " + (especiais[parseInt(this.value[2])])
        } else if(this.value[0] == '1' && (this.value[1] != '0' && this.value[1] != '1' && this.value[2] != '0')){
            writenNumber.innerHTML = "Cento e " + (dezenas[parseInt(this.value[1]-2)]+" e "+ unidades[parseInt(this.value[2])]);
        }else if(this.value[0] == '1' && (this.value[1] != '0' && this.value[1] != '1' && this.value[2] == '0')){ 
            writenNumber.innerHTML = "Cento e " + (dezenas[parseInt(this.value[1]-2)]);
        }else if((this.value[0] != '1' && this.value[1] == '0') && this.value != 0){
            writenNumber.innerHTML = (centenas[parseInt(this.value[0]-1)]) + ' e ' + (unidades[parseInt(this.value[2])]);
        } else if(this.value[0] != '1' && this.value[1] == '1'){
            writenNumber.innerHTML = (centenas[parseInt(this.value[0]-1)]) + ' e ' + (especiais[parseInt(this.value[2])]);
        } else if((this.value[0] != '1' && this.value[1] != '1') && this.value[2] != '0'){
            writenNumber.innerHTML = (centenas[parseInt(this.value[0]-1)]) + ' e ' + (dezenas[parseInt(this.value[1]-2)]+ " e "+ unidades[parseInt(this.value[2])]);
        } else if((this.value[0] != '1' && this.value[1] != '1') && this.value[2] == '0'){
            writenNumber.innerHTML = (centenas[parseInt(this.value[0]-1)]) + ' e ' + (dezenas[parseInt(this.value[1]-2)]);
        }
    }
}



