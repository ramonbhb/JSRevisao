function operacao(operador) {
    const vl1 = document.getElementById('vl1').value;
    const vl2 = document.getElementById('vl2').value;
    if (!vl1) {
        document.getElementById('resultado').innerHTML = `Digite o valor um`;    
        document.getElementById('vl1').focus();
    }
    else if (!vl2) {
        document.getElementById('resultado').innerHTML = `Digite o valor dois`;    
        document.getElementById('vl2').focus();
    }
    else {
        let resultado;
        resultado = eval(`${vl1} ${operador} ${vl2}`);
        document.getElementById('resultado').innerHTML = `${vl1} ${operador} ${vl2} = ${resultado}`;    
        /*
        switch(operador) {
            case '+':
                resultado = Number(vl1) + Number(vl2);
                document.getElementById('resultado').innerHTML = `${vl1} + ${vl2} = ${resultado}`;    
                break;
            case '-':
                resultado = Number(vl1) - Number(vl2);
                document.getElementById('resultado').innerHTML = `${vl1} - ${vl2} = ${resultado}`;    
                break;
            case '/':
                resultado = Number(vl1) / Number(vl2);
                document.getElementById('resultado').innerHTML = `${vl1} / ${vl2} = ${resultado}`;    
                break;
            case '*':   
                resultado = Number(vl1) * Number(vl2);
                document.getElementById('resultado').innerHTML = `${vl1} * ${vl2} = ${resultado}`;    
                break;
        }*/
    }
}

function somar() {
    const vl1 = document.getElementById('vl1');
    const vl2 = document.getElementById('vl2');
    const resultado = Number(vl1.value) + Number(vl2.value);
    if (!vl1.value || !vl2.value) {
        document.getElementById('resultado').innerHTML = `Digite os dois valores`;    
        vl1.focus();
    }
    else {
        document.getElementById('resultado').innerHTML = `${vl1.value} + ${vl2.value} = ${resultado}`;    
    }
}

function subtrair() {
    const vl1 = document.getElementById('vl1');
    const vl2 = document.getElementById('vl2');
    const resultado = Number(vl1.value) - Number(vl2.value);
    if (!vl1.value || !vl2.value) {
        document.getElementById('resultado').innerHTML = `Digite os dois valores`;    
        vl1.focus();
    }
    else {
        document.getElementById('resultado').innerHTML = `${vl1.value} - ${vl2.value} = ${resultado}`;    
    }
}

function multiplicar() {
    const vl1 = document.getElementById('vl1');
    const vl2 = document.getElementById('vl2');
    const resultado = Number(vl1.value) * Number(vl2.value);
    if (!vl1.value || !vl2.value) {
        document.getElementById('resultado').innerHTML = `Digite os dois valores`;    
        vl1.focus();
    }
    else {
        document.getElementById('resultado').innerHTML = `${vl1.value} * ${vl2.value} = ${resultado}`;    
    }
}

function dividir() {
    const vl1 = document.getElementById('vl1');
    const vl2 = document.getElementById('vl2');
    const resultado = Number(vl1.value) / Number(vl2.value);
    if (!vl1.value || !vl2.value) {
        document.getElementById('resultado').innerHTML = `Digite os dois valores`;    
        vl1.focus();
    }
    else {
        document.getElementById('resultado').innerHTML = `${vl1.value} / ${vl2.value} = ${resultado}`;    
    }
}

function limpar() {
    document.getElementById('vl1').value = '';
    document.getElementById('vl2').value = '';
    document.getElementById('resultado').innerHTML = '';
}
window.onload = function() {
    //window.location.href = "https://www.google.com.br";
}