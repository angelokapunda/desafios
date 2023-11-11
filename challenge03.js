

let numeros = [4,5,3,7,6,4,9,3];

function recebeNumeros(numeros) {

    let numerosOrdenados = numeros.sort((a,b) => b -a);

    for (let i = 0; i < numeros.length; i++) {
        
        if ((numeros[i] % 2) == 0) {
            console.log(numerosOrdenados)
        }
        
    }
    
}

console.log(recebeNumeros(numeros));