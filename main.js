
// Funciones

function resta(a, b) {
    return a - b
}
console.log(resta(15, 2));

function calcularNota() {
    let nota = +prompt("Introduce tu nota")
    switch (true) {
        case nota <= 4:
            resultado = "Insuficiente"
            break;
        case nota == 5 || nota == 6:
            resultado = "Suficiente"
            break;
        case nota == 7 || nota == 8:
            resultado = "Notable"
            break;
        case nota == 9 || nota == 10:
            resultado = "Sobresaliente"
            break;

        default:
            break;
    }
    return `Tu nota es ${resultado}`
}
// console.log(calcularNota());


function duplicarNumero(num) {
    if (typeof num == "number") {
        return num * 2
    } else {
        return "Debo ser ejecutada con un número "
    }
}

console.log(duplicarNumero(9))


function caracterInicial(string) {
    if (typeof string !== "string") {
        return "Debo ser ejecutado como string"
    }
    if (string == "") {
        return "Debo ser ejecutado como string no vacio"
    }
    return string.charAt(0)

}
console.log(caracterInicial("hola"));


function ultimoCaracter(string) {
    if (typeof string !== "string") {
        return "Debo ser ejecutado como string"
    }
    if (string == "") {
        return "Debo ser ejecutado como string no vacio"
    }
    return string.slice(-1)

}
console.log(ultimoCaracter("hola"));

function cuentaCaracter(string) {
    if (typeof string !== "string") {
        return "Debo ser ejecutada con un string"
    }
    if (typeof string == "string") {
        return string.length
    }

}
console.log(cuentaCaracter("hola"));

function esPalindromo(text) {
    let invertedText = text.split("").reverse().join("");
    if (text === invertedText) {
        return "Es palindromo"
    } else {
        return "No es palindromo"
    }
}
console.log(esPalindromo("somos"));

function getPrecioMostrar(text) {
    if (typeof text !== "number") {
        return "No es un formato correcto"
    }
    if (typeof text === "number") {
        return text.toFixed(2) + "€"
    }
}
console.log(getPrecioMostrar(3));

function division(a, b) {
    return a / b
}
console.log(23 / 4);

/*function array5oMas(array) {
    let arrayNumeros = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 5) {
            arrayNumeros.push(array[i]);
        }

        return arrayNumeros;
    }
}
let numeros = [6, 2, 8, 5, 3, 9];
let arrayNumeros = array5oMas(numeros);
console.log(arrayNumeros);*/

function nums5oMayor(array) {
    let numerosArray = [];
    for (let numero of array) {
        if (numero >= 5) {
            numerosArray.push(numero);
        }
    }
    return numerosArray;
}
let numeros = [4,6,7,2,5];
let numerosArray = nums5oMayor(numeros);
console.log(numerosArray);