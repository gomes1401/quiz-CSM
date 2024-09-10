// Respostas corretas (indexadas de 0 a 9)
const respostasCorretas = [3, 0, 0, 3, 0, 2, 2, 0, 2, 0]; // Índices das respostas corretas

function verificarRespostas() {
    let acertos = 0;
    let erros = 0;

    // Verifica a resposta da primeira pergunta
    const resposta1 = document.querySelector('input[name="pergunta1"]:checked');
    if (resposta1 && parseInt(resposta1.value) === respostasCorretas[0]) {
        acertos++;
    } else {
        erros++;
    }

    // Verifica a resposta da segunda pergunta
    const resposta2 = document.querySelector('input[name="pergunta2"]:checked');
    if (resposta2 && parseInt(resposta2.value) === respostasCorretas[1]) {
        acertos++;
    } else {
        erros++;
    }

    // Verifica a resposta da terceira pergunta
    const resposta3 = document.querySelector('input[name="pergunta3"]:checked');
    if (resposta3 && parseInt(resposta3.value) === respostasCorretas[2]) {
        acertos++;
    } else {
        erros++;
    }

    // Verifica a resposta da quarta pergunta
    const resposta4 = document.querySelector('input[name="pergunta4"]:checked');
    if (resposta4 && parseInt(resposta4.value) === respostasCorretas[3]) {
        acertos++;
    } else {
        erros++;
    }

    // Verifica a resposta da quinta pergunta
    const resposta5 = document.querySelector('input[name="pergunta5"]:checked');
    if (resposta5 && parseInt(resposta5.value) === respostasCorretas[4]) {
        acertos++;
    } else {
        erros++;
    }

    // Verifica a resposta da sexta pergunta
    const resposta6 = document.querySelector('input[name="pergunta6"]:checked');
    if (resposta6 && parseInt(resposta6.value) === respostasCorretas[5]) {
        acertos++;
    } else {
        erros++;
    }

    // Verifica a resposta da sétima pergunta
    const resposta7 = document.querySelector('input[name="pergunta7"]:checked');
    if (resposta7 && parseInt(resposta7.value) === respostasCorretas[6]) {
        acertos++;
    } else {
        erros++;
    }

    // Verifica a resposta da oitava pergunta
    const resposta8 = document.querySelector('input[name="pergunta8"]:checked');
    if (resposta8 && parseInt(resposta8.value) === respostasCorretas[7]) {
        acertos++;
    } else {
        erros++;
    }

    // Verifica a resposta da nona pergunta
    const resposta9 = document.querySelector('input[name="pergunta9"]:checked');
    if (resposta9 && parseInt(resposta9.value) === respostasCorretas[8]) {
        acertos++;
    } else {
        erros++;
    }

    // Verifica a resposta da décima pergunta
    const resposta10 = document.querySelector('input[name="pergunta10"]:checked');
    if (resposta10 && parseInt(resposta10.value) === respostasCorretas[9]) {
        acertos++;
    } else {
        erros++;
    }

    // Armazena os resultados no localStorage
    localStorage.setItem("acertos", acertos);
    localStorage.setItem("erros", erros);

    // Redireciona para a página de resultados
    window.location.href = "resultado.html";
}
