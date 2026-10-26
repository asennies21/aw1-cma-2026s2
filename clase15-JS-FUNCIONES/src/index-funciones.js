// Funciones

// Declaración

// function suma(a, b){
//     //console.log(a + b)
//     return a + b
// }

// // Invocar / Ejecutar / llamar
// const resultado = suma(10,2)

// console.log(resultado)


// Función flecha -> anónima
// FatArrow

// const resta = (a, b)=>{
//     return a - b
// }

// const resta = (a, b)=> a + b
//
// const resta = a => a + 5

// Callback

const a = (cb)=>{
    console.log('Se ejecutó a')

    cb('Hola')
}

// Nuestro callback
const b = (saludo)=>{
    console.log('Se ejecutó el callback b ' + saludo)
}
// console.log(b())
a(b)

// a(()=>{
//      console.log('Se ejecutó el callback b')
// })

