//window.onload = function() {
    
const botao = document.querySelector('#btn1');
                          
botao.addEventListener("click", function() {
    let aluno = prompt("Digite o nome do aluno aprovado:");
    if (aluno) {
        const lista = document.querySelector('#aprovados');
        const item = document.createElement('li');
        const botaoLista = document.createElement('button');

        item.textContent = aluno;
        botaoLista.textContent = 'Apagar';
        lista.appendChild(item);
        lista.appendChild(botaoLista);        

        botaoLista.addEventListener("click", function() {
            lista.removeChild(item);
            lista.removeChild(botaoLista);
        })

    }
    else {
        alert("Você não digitou o nome de um aluno");
    }
});

//}

// OUTRA MANEIRA DE SELECIONAR //