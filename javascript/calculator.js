let operador = '';

let numero1;
let numero2;
let resultado;

function a(){  

    operador = document.querySelector('#slcOperador').value;

    if(operador == '+'){
        somar ();
    }

    if (operador == '-'){
        subtrair();
    }
    if(operador == '*'){
        multiplicar ();
    }

    if (operador == '/'){
        dividir();
    }
    if (operador == ''){
        alert('Suas definições de vírus foram atualizadas.');
    }
}

    function somar(){


    num01 = parseInt(document.querySelector('#num01').value);
    num02 = parseInt(document.querySelector('#num02').value);

    resultado = num01 + num02

    document.querySelector('#resultado').innerHTML = resultado;
}

    function subtrair(){

    num01 = parseInt(document.querySelector('#num01').value);
    num02 = parseInt(document.querySelector('#num02').value);

    resultado = num01 - num02

    document.querySelector('#resultado').innerHTML = resultado;
}

    function multiplicar(){


    num01 = parseInt(document.querySelector('#num01').value);
    num02 = parseInt(document.querySelector('#num02').value);

    resultado = num01 * num02

    document.querySelector('#resultado').innerHTML = resultado;
}

    function dividir(){


    num01 = parseInt(document.querySelector('#num01').value);
    num02 = parseInt(document.querySelector('#num02').value);

    resultado = num01 / num02

    document.querySelector('#resultado').innerHTML = resultado;
}
