const CalcularMedia = new function() {
    this.totalNotas = 0;

    this.exibirInputs = function() {
        this.totalNotas = parseInt(document.getElementById("totalNotas").value);
        const calculoDiv = document.getElementById("calculo");
        calculoDiv.style.display = "block";

        const elementoHtml = '';
        for (var i = 0; i < this.totalNotas; i++) {
            elementoHtml += '<input type="text" id="nota_' + i + '" value="" /><br />'
        } 
        const entradasDiv = document.getElementById("entradas");
        entradasDiv.innerHTML = elementoHtml

        // Essa função faz com que quando o usuário digite o numero total de notas, apareça os inputs de acordo com a quantidade digitada
    };

    this.calcularMedia = function() {
        const total = 0;
        for (var i = 0; i < this.totalNotas; i++) {
            total += parseFloat(document.getElementById("nota_" + i).value);
            // Percorre todas as notas que o usuário digitou e vai somando as notas e colocando na variável total
        }
        const media = total / this.totalNotas;
            // Calcula a media, dividindo a nota total com o numero de notas.
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTNL = media;
            // Adiciona o resultado no HTML.
    }
}