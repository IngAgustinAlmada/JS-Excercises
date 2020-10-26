/* a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/
var word1, letters;
word1 = "Congratulations";
console.log (word1.toUpperCase());
letters = word1.length;
console.log ("PD: La palabra " + '"' + word1 + '"' + " tiene " + letters + " letras.");

/* b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var startWord;
startWord = word1.substring(0,5);
console.log (startWord);

/* c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var endWord;
endWord = word1.substring(12,15);
console.log (endWord);

/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */
var word2,firstLetter,restOfLetters,frankenstein;
word2 = "cOnGrAtUlATiOnS";
firstLetter = word2.substring(0,1);
restOfLetters = word2.substring(1,15);
frankenstein = firstLetter.toUpperCase() + restOfLetters.toLowerCase();
console.log (frankenstein);

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
var sentence1, blankSpacePosition;
sentence1 = "Beautiful Place";
blankSpacePosition = sentence1.indexOf(" "); 
console.log (blankSpacePosition); 

/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +). */
var sentence2,frankenstein2;
sentence2 = "bEATIFUL bUTTERFLIES";
frankenstein2 = sentence2.substring(0,1).toUpperCase() + sentence2.substring(1,8).toLowerCase() + sentence2.substring(sentence2.indexOf(" "),9) + sentence2.substring(9,10).toUpperCase() + sentence2.substring(10,20).toLowerCase();
console.log (frankenstein2);

