let numeros = document.querySelectorAll('.box .numero');
let operacoes = document.querySelectorAll('.box .op');
const resultado = document.getElementById('resultado');
let contador = 1;
let validarTotal = false;
let validarOp = true;
let op = '';
let n1 = '', n2 = '';
if(validarOp){
    operacoes.forEach(operacao =>{
        operacao.addEventListener('click',()=>{
            if(n1 == ''){
                alert('Número inválido')
            }else{
                op = operacao.dataset.value;
                contador++;
                resultado.textContent = op;
            }
        })
    })
}

    numeros.forEach(numero =>{
        numero.addEventListener('click',()=>{
            if(contador == 1){
                let valor = numero.dataset.value;
                n1 = n1 + valor;
                console.log(n1)
                validarOp = true;
                console.log(validarOp)
                resultado.textContent = n1;
            }else if(contador == 2){
                let valor = numero.dataset.value;
                n2 = n2 + valor;
                console.log(n2)
                resultado.textContent = n2;
                validarTotal = true
            }
        })
    })     
    
    

function calcular(){
    if(validarTotal){
        if(op == '+'){
            let soma = parseInt(n1) + parseInt(n2);
            resultado.textContent = soma;
        }else if(op == '-'){
            let sub = parseInt(n1) - parseInt(n2);
            resultado.textContent = sub;
        }else if(op == 'x'){
            let mult = parseInt(n1) * parseInt(n2);
            resultado.textContent = mult;
        }else if(op == '/'){
            let div = parseInt(n1) / parseInt(n2);
            resultado.textContent = div;
            let divString = div.toString();
            let partes = divString.split('.');
            if(partes[1].length > 4){
                resultado.textContent = div.toFixed(4);
            }
        }
    }else{
        
    }
}
function del(){
    resultado.textContent = ''
    contador = 1;
    validarTotal = false;
    validarOp = true;
    op = '';
    n1 = '', n2 = '';
}
