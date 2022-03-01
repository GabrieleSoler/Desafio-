function main(){
    const n = Number(prompt('Quantos elementos: '))

    const vetorA = Array(n) 

    for (var i = 0; i < n; i++){
        vetorA[i] = Number(prompt(`Elemento ${i}: `))
        //Esse for vai pedir os elementos um por um de acordo com a quantidade de elementos escolhidas
    }

    if (contemRepetidos(vetorA)){
        console.log('Há elementos repetidos')
    } else{
        console.log('Não há elementos repetidos')
    }
}

function contemRepetidos(vetor) {
    const elemento
    const contador
    for (var i = 0; i < vetor.length; i++){
        elemento = vetor[i]
        contador = contadorElementos(vetor, elemento)
        // Esse primeiro for percorre todos os elementos
        for (var j = 0; j < vetor.length; j++){
            if (elemento === vetor[j]){
                contador++
                //Esse for percorre os elementos tentando encontrar um repetido, adicionando no contador
            }
        }

        if(contador > 1){
            return true
            //Se o contador estiver com valor maior que 1, então quer dizer que há elemento repetido.
        }
    }

    return false
}

function contadorElementos(vetor, elemento){
    const contador = 0
    for (var i = 0; i < vetor.length; i++){
        if (elemento === vetor[i]){
            contador++
        }
    }
    return contador
}