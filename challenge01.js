
  
let clubes = ["Clube1", "Clube2", "Clube3", "Clube4", "Clube5"];
let pontos = [10,27,21, 20,14];

function calcularPontos(clubes, pontos){

    let ordenar = [];

    for (let i = 0; i < clubes.length; i++) {

        ordenar.push({clubes : clubes[i], pontos : pontos[i] + 3});  
         
    }

    let resultado =  ordenar.sort((a, b) => b.pontos - a.pontos);

    return resultado;

}

console.log(calcularPontos(clubes, pontos));
                

