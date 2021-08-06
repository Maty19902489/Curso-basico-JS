var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(alumno){
    console.log(`Hola, ${alumno}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

/* for(var alumno of estudiantes){
    saludarEstudiantes(estudiante);
} */
/* otra forma de hacerlo, recorre todo los elementos
del array */

/* si usamos while Seria asi.
mientas lo del parentesis sea verdad
se va a ejecutar lo de las llaves


while(estudiantes.length > 0){
    var alumno = estudiantes.shift();
    saludarEstudiantes(alumno)
} */