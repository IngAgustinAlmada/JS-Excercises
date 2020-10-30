/* a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

function suma(num1,num2) {
    return num1 + num2;
}
var rtado = suma(5,2);
console.log(rtado);

/* b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */
function suma(num1,num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" ){
      alert("Uno de los parámetros tiene error");
      return "NaN";
    }else{
      return num1 + num2;
    }
}

console.log(suma (5,2));
console.log(suma (5,"2"));

/* c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */

function validateInteger(num) {
  return Number.isInteger(num);    
}

console.log(validateInteger(5));  
console.log(validateInteger(5.5));

/* d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */

function sumaEnteros(num1,num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number" ){
    //alert("Uno de los parámetros tiene error"); //Molesta la alerta en si.
    return NaN;
  } else if (Number.isInteger(num1) && Number.isInteger(num2)) {
    return num1 + num2;
  } else {
    return Math.round(num1 + num2);
  }
}
console.log(sumaEnteros(4,7));
console.log(sumaEnteros(4,"7"));
console.log(sumaEnteros(4,7.7));

/* e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual. */

function tipoNumero(a,b) {
  if (typeof a!== "number" || typeof b!== "number" ){
    //alert("Uno de los parámetros tiene error");
    return "NaN";
  }
}

function suma(num1,num2) {
    if(tipoNumero(num1,num2)!= "NaN"){
      return num1 + num2;
    }
}


console.log(suma (5,4));
console.log(suma (5,"2"));


