function calcularImc(peso, altura){
    let resultadorImc = peso / (altura * altura);
    return resultadorImc;
}

function calcular(){
    let valorPeso = parseFloat(document.getElementById('peso').value);
    let valorAltura = parseFloat(document.getElementById('altura').value);

    let resultado = Number(calcularImc(valorPeso, valorAltura).toFixed(2));

    console.log(valorPeso, valorAltura, resultado);
}

