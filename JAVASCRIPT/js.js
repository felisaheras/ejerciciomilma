/*alert("Hola mundo");
Después del primer mensaje se carga el siguiente
alert("Soy el primer Script");*/

function Mifuncion(){
    var nombre = prompt("Hola, introduce tu nombre");
    if (nombre != null) {
        document.getElementById("parrafo").innerHTML =
        "¡Hola " + nombre +"! ¿Cómo estás?";

    }

}