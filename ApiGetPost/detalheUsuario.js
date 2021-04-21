window.onload = function() {    
     preencherDados();
}

async function preencherDados() {
    let url = window.location;
    let params = new URLSearchParams(url.search);
   // console.log(params);
    let id = params.get('id');
    let req = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    let dados = await req.json();
    //* dados = array = vários usuarios */
    //for (let i=0;i<dados.length;i++) { }
    document.querySelector("#nome").innerHTML = dados.name
    document.querySelector("#usuario").innerHTML = dados.username
    document.querySelector("#email").innerHTML = dados.email
    document.querySelector("#endereco").innerHTML = dados.phone
}