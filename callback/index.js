function suma(num1, num2){
    return num1 + num2;
}

function resta(num1, num2){
    return num1 - num2;
}

function multiplicacion(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}

function calculadora(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calculadora(5, 5, suma)); // 10
console.log(calculadora(5, 5, resta)); // 0
console.log(calculadora(5, 5, multiplicacion)); // 25
console.log(calculadora(5, 5, division)); // 1

// setTimeout
setTimeout(function(){
    console.log('Hola Mundo');
}, 2000)

function saludo(name){
    console.log(`Hola ${name}`);
}

setTimeout(saludo, 2000, 'Arturo');