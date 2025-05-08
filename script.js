let numeros = document.querySelectorAll('.box .numero');
const numero1Content = document.getElementById('valor1');
const numero2Content = document.getElementById('valor2');
const opContent = document.getElementById('op');
const resultado = document.getElementById('total');
let contador = 1;
let validar = false;
let op = '';
let v1 = 0 , v2 = 0;
console.log(contador);
numeros.forEach(numero =>{
    numero.addEventListener('click' , ()=>{
        if(contador == 1){
            console.log(contador);
            let n1 = numero.dataset.value;
            if(n1 == '+' || n1 == '-' || n1 == '=' || n1 == '/' || n1 == 'x'){
               alert('valor inválido');
            }else{
                numero1Content.textContent = n1;
                contador++;
                v1 = parseInt(n1)
            }
        }else if(contador == 2){
            let operador = numero.dataset.value;
            console.log(contador);
            console.log(operador)
            if(operador == '+' || operador == '-' || operador == 'x' || operador == '/'){
                contador++;
                opContent.textContent = operador;
                if(operador == '+'){
                    op = '+';
                }else if(operador == '-'){
                    op = '-';
                }else if(operador == 'x'){
                    op = 'x';
                }else if(operador == '/'){
                    op = '/';
                }
            }else{
                alert('operação inválida');
            }
        }else if(contador == 3){
            let n2 = numero.dataset.value;
            if(n2 == '+' || n2 == '-' || n2 == '=' || n2 == '/' || n2 == 'x'){
                alert('valor inválido');
            }else{
                contador++;
                numero2Content.textContent = n2;
                validar = true;
                v2 = parseInt(n2);
            }
        }
    });
});
function calcular(){
    if(validar){
        if(op == '+'){
            let soma = v1 + v2;
            numero1Content.textContent = '';
            numero2Content.textContent = '';
            opContent.textContent = '';
            resultado.textContent = soma;
        }else if(op == '-'){
            let sub = v1 - v2;
            numero1Content.textContent = '';
            numero2Content.textContent = '';
            opContent.textContent = '';
            resultado.textContent = sub;
        }else if(op == 'x'){
            let mult = v1 * v2;
            numero1Content.textContent = '';
            numero2Content.textContent = '';
            opContent.textContent = '';
            resultado.textContent = mult;
        }else if(op == '/'){
            let div = v1 / v2;
            numero1Content.textContent = '';
            numero2Content.textContent = '';
            opContent.textContent = '';
            resultado.textContent = div;
            // let divString = div.toString();
            // let partes = divString.split('.');
            // if(partes[1].length > 4){
            //     resultado.textContent = div.toFixed(4);
            // }else{
               
            // }
        }
    }else{
        
    }
}
