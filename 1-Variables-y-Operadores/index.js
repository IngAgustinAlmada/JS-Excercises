/* a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.*/
var num1, num2, suma;
num1 = 5;
num2 = 6;
suma = num1 + num2;
console.log (suma);

/* b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/
var pala1, pala2, orac;
pala1 = "Hola";
pala2 = "Mundo";
orac = pala1 + " " + pala2 + "!";
console.log (orac);

/* c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).*/
var length1, length2, total;
length1 = pala1.length;
length2 = pala2.length;
total = length1 + length2 ;
console.log ("La oración: " + '"' + orac + '"' + " tiene " + total + " letras.");