// console.log('Hola JS') // - imprime por consola

// Tipado
// const nombre = 'Andres'
// nombre = 'Jose'

// let nombre = 'Andres'
// nombre = 'Jose'
// // nombre = 1
// console.log(typeof nombre)

// let esMayorDeEdad = true


// Operadores
// Aritmeticos -> + - * / % 

/*

Comentarios
*/
const edad = 18
const mayoriaEdad = 18

const aumentoEdad = edad + 1

// console.log(aumentoEdad)

// Logicos > < <= >= != !== == === 

// let esMayorDeEdad = mayoriaEdad <= edad
let esMayorDeEdad = edad >= mayoriaEdad

console.log(esMayorDeEdad)


// Estructura de control -> de flujo
if(edad > mayoriaEdad){
    console.log('Es mayor')
}else if(edad === mayoriaEdad){
    console.log('Tiene' + ' ' + mayoriaEdad)
}else{
    console.log('es menor')
}

