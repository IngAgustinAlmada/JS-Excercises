/* a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/
var year;
year = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (year[4], year [10]);

/* b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
//console.log (year.sort());

/* c) Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
year.unshift("SubEnero");
year.push("SupraDiciembre");
console.log (year);

/* d) Quitar un elemento del principio y del final del array (utilizar shift y pop). */
year.shift();
year.pop();

/* e) Invertir el orden del array (utilizar reverse). */
//console.log (year.reverse()); 

/* f) Unir todos los elementos del array en un único string donde cada mes este separado
por un guión - (utilizar join). */
console.log (year.join("-"));

/* g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice).*/
var yearCut;
yearCut = year.slice(4,11);
console.log (yearCut);

