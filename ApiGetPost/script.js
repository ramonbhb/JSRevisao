window.onload = function() {    
    const tabela = document.querySelector("#usuarios tbody");   
    preencherDados(tabela);

    botao = document.querySelector("#addPost");

    botao.addEventListener("click",function() {
        inserirPost();
    });
}

async function inserirPost() {
    let post = {
        title: 'Cruzeiro é Melhor que o Atlético',
        body: 'Cruzeiro melhor time de minas, vence várias vezes, muito ótimo excelente!',
        userId: 1,
    }
    let req = await fetch(
        'https://jsonplaceholder.typicode.com/posts/', {
            method: 'post',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });      

    let dados = await req.json();
    console.log(dados);
}



async function preencherDados(tabela) {
    let req = await fetch('https://jsonplaceholder.typicode.com/users');
    let dados = await req.json();
    //* dados = array = vários usuarios */
    //for (let i=0;i<dados.length;i++) { }
        
    dados.forEach( usuario => {
        let linha = tabela.insertRow(-1);
        let nome = linha.insertCell(0);
        let email = linha.insertCell(1);
        let info = linha.insertCell(2);

        nome.innerHTML = usuario.name;
        email.innerHTML = usuario.email;
        info.innerHTML = 
        "<a href='detalhe-usuario.html?id="+ usuario.id + "'>+</a>";
    });

    document.querySelector("#usuarios").style.display = 'block';
    document.querySelector("#carregando").style.display = 'none';
}

