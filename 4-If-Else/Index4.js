/* a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

var numRamdom;
numRamdom = Math.random();
if(numRamdom >= 0.5){
    alert(numRamdom + " " + "is greater than 0.5")
}else{
    alert(numRamdom + " " + "is lower than 0.5")
};

/* b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
    i) “Bebe” si la edad es menor a 2 años
    ii) “Nino” si la edad es entre 2 y 12 años
    iii) “Adolecente” si la edad es entre 13 y 19 años
    iv) “Joven” si la edad está entre 20 y 30 años
    v) “Adulto” entre 31 y 60 años
    vi) “Adulto mayor” entre 61 y 75 años
    vii) “Anciano” si es mayor a 75 años.*/
    var Age = Math.floor(Math.random() * 100);
        
    if(Age < 2){
        alert("Bebe" + " " + Age + " años")
    }else if (Age >= 2 && Age <= 12){
        alert("Nino" + " " + Age + " años")
    }else if (Age >= 13 && Age <= 19){
        alert("Adolecente" + " " + Age + " años")
    }else if (Age >= 20 && Age <= 30){
        alert("Joven" + " " + Age + " años")
    }else if (Age >= 31 && Age <= 60){
        alert("Adulto" + " " + Age + " años")
    }else if (Age >= 61 && Age <= 75){
        alert("Adulto Mayor" + " " + Age + " años")
    }else {
        alert("Anciano" + " " + Age + " años")
    };
   



