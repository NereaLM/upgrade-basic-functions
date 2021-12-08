//ITERACIÓN#1: BUSCAR EL MÁXIMO

//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
   if(numberOne < numberTwo){
       return numberTwo;
   }else{
       return numberOne;
   }
}
console.log(sum(654555874,88488));


 //ITERACIÓN#2: BUSCAR LA PALABRA MÁS LARGA
  
  //Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
  //Puedes usar este array para probar tu función:

  const avengers = [
    'Hulk',
    'Thor', 
    'IronMan', 
    'Captain A.', 
    'Spiderman', 
    'Captain M.'
];
function findLongestWord(param) {
  let longest = param[0]
  param.forEach((avengers) =>{
      let longtitudMasLargo = longest.length
      let longtitudValorActual = avengers.length
      if(longtitudValorActual > longtitudMasLargo) {
          longest = avengers
      }
  })
  return longest
}

let resultado = findLongestWord(avengers)
 console.log(resultado)   


 //ITERACIÓN#3: CALCULAR LA SUMA

//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
//Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];
let total = numbers.reduce((a, b) => a + b, 0);
 console.log(total);



 //ITERACION#4: CALCULAR EL PROMEDIO
//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let sum = numbers2.reduce((a, b) => a + b, 0);
     let promedio = sum / numbers2.length;
     return promedio;
}
 console.log(average(numbers2));


 //ITERACION#5: CALCULAR PROMEDIO DE STRING
//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
// Array.isArray()
// let miArray = []

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let total = 0
  for(let i = 0; i < param.length; i++) {
      debugger
      if (typeof param[i] ==="number") {
          total += param[i]
      } else {
          total += param[i].length
      }
  } 
   return total
}
let resultado = averageWord(mixedElements)
console.log(resultado)
