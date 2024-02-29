function stringCincoCaracteres(array){
    let novoArray = []
    for (let i = 0; i < array.length; i++){
        if(array[i].replace(/\s/g, '').length > 5){
            novoArray.push(array[i])
        }

    }
    return novoArray
}

const arrayOriginal = ["banana","maçã","abacaxi","laranja","uva","morango","v"];
const arrayfiltrada = stringCincoCaracteres
(arrayOriginal);
console.log(arrayfiltrada);
