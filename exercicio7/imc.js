const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //Aqui estou pegando os elementos pelo id e atribuindo nas varíaveis

    if (nome !== '' && altura !== '' && peso !== '') {
    // Se o nome, altura e peso não estiverem vazios então ele vai calcular o imc
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'peso normal';
        }else if (valorIMC > 25){
            classificacao = 'acima do peso';
        }else {
            classificacao = 'com obesidade grau III.';
    //Aqui é feito a classificação do imc de acordo com o resultado que o usuário digitou.

        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        //Aqui é mostrado na tela para o usuário o imc dele.
    }else {
        resultado.textContent = 'Preencha todos os campos';
        //Esse else é para caso o usuário não digite nenhum campo
    }

}

calcular.addEventListener('click', imc);
//Quando alguem clicar no botão, vai ser executado a função imc