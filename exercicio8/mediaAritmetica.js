function media(){
     const valor1 = parseFloat(document.getElementById("valor1").value);
     const valor2 = parseFloat(document.getElementById("valor2").value);
     const valor3 = parseFloat(document.getElementById("valor3").value);

     const media = (valor1 + valor2 + valor3)/3 ;
     const resultadoDiv = document.getElementById("resultado");
     alert(media);
}
