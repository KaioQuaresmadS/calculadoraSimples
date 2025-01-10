function calcularNum(){
    const numOne = document.getElementById('n1').value;
    const numTwo = document.getElementById('n2').value;
    let operador = document.getElementById("opMathe").value
    
    if(!numOne && !numTwo){
        alert('Tem que preencher com os números');
        return
    };

    switch (operador){
        case "soma":
            console.log(parseInt(numOne) + parseInt(numTwo));
            document.querySelector('p').innerHTML = `<p id = "text">Resultado da ${operador} é: ${parseInt(numOne) + parseInt(numTwo)} </p>`;
        break;

        case "subtracao":
            console.log(parseInt(numOne) - parseInt(numTwo));
            document.querySelector('p').innerHTML = `<p id = "text">Resultado da ${operador} é: ${parseInt(numOne) - parseInt(numTwo)} </p>`;
        break;

        case "multiplicacao":
        console.log(parseInt(numOne) * parseInt(numTwo));
        document.querySelector('p').innerHTML = `<p id = "text">Resultado da ${operador} é: ${parseInt(numOne) * parseInt(numTwo)} </p>`;
        break;

        case "divisao":
            console.log(parseInt(numOne) / parseInt(numTwo));
            document.querySelector('p').innerHTML = `<p id = "text">Resultado da ${operador} é: ${parseInt(numOne) / parseInt(numTwo)} </p>`;
        break;
    }
};
/*

location.reload(false) – Faz um recarregamento parcial da página, usando o cache do navegador, ou seja, os recursos como imagens, scripts e CSS já carregados podem ser reutilizados.

location.reload(true) – Faz um recarregamento completo, ignorando o cache do navegador e forçando o carregamento de todos os recursos novamente.

*/
function limparPage(){
    location.reload();
}
