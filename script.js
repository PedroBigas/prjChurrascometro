            // Carne - 400 gr por pessoa + de 6 horas - 650
            // Cerveja - 1200 ml por pessoa + 6 horas - 2000ml
            // Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

            // crianças valem 0,5

const d = document;
let qntAdulto = d.getElementById("adultos");
let qntCriancas = d.getElementById("criancas");
let qntHoras = d.getElementById("duracao");

let resultado = d.getElementById("resultado");

var churras = { carne: 400,
                cerveja: 1200,
                bebida: 1000 }

console.log(churras);

    function calcDurac(){
        let valorHoras = qntHoras.value;
        

            if (valorHoras >= 6) {
                churras.carne = 650;
                churras.cerveja = 2000;
                churras.bebida = 1500;     
                console.log(churras);
                calc();
            } else {
                calc();
            }
}

    function calc() {

        let valorAdulto = qntAdulto.value;
        let valorCriancas = qntCriancas.value;

        let qntTotalC = churras.carne * valorAdulto + (churras.carne / 2 * valorCriancas);
        console.log(qntTotalC); 

        let qntTotalCerveja = churras.cerveja * valorAdulto;
        console.log(qntTotalCerveja);

        let qntTotalB = churras.bebida * valorAdulto + (churras.bebida / 2 * valorCriancas);
        console.log(qntTotalB);

        resultado.innerHTML = `<p>🍖 ${qntTotalC / 1000} Kg de Carne </p>`
        resultado.innerHTML += `<p>🍻 ${Math.ceil(qntTotalCerveja / 355)} Latas de Cerveja </p>`
        resultado.innerHTML += `<p>🥤 ${Math.ceil(qntTotalB / 2000)} Garrafas de 2L de Bebida </p>`


}