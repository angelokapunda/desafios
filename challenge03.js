

let numeros = [4,5,3,7,6,4,9,10];

function recebeNumeros(numeros) {

    let divisivel = [];
    for (let i = 0; i < numeros.length; i++) {
        
        if (numeros[i] % 2 == 0) {
            divisivel.push(numeros[i])
        } 
    }
    
    let resultado = divisivel.sort((a, b) => b - a)

    return resultado;
}

console.log(recebeNumeros(numeros));


// if (numeros[i] % 2 == 0) {
        //     return numeros.sort((a,b) => b - a);
        // }else {
        //     console.log("Não são multiplos de 2")
        // }