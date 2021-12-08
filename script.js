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