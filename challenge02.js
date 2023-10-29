

let clubes = ["Clube1", "Clube2", "Clube3", "Clube4", "Clube5"];
let pontos = [10,27,21, 20,14];

function calcularPontos(clubes, pontos){

    const Ordenar = [];

    for (let i = 0; i < clubes.length; i++) {
        if( pontos[i] % 2 == 0) {
            Ordenar.push({clubes : clubes[i] , pontos : pontos[i] + 3});
        } else{
            Ordenar.push( {clubes : clubes[i] , pontos : pontos[i]});
        }
        
    }

    let resuldado = Ordenar.sort((a, b) => b.pontos - a.pontos)

    return resuldado;

}

console.log(calcularPontos(clubes, pontos));


  