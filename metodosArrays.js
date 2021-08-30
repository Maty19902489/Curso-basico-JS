/* generamos un array que su contenido sean objetos
y aprender con metodos de recorrido como podemos
obtener propiedades especificas de estos objetos */

var articulos = [
    /* simpre un objeto se abre con llaves */
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

/* FILTER: ayuda a filtrar ciertas Cosas, no modifica
el array original. Valida si algo es v o f y lo mete en
un nuevo array */

var articulosFiltrados = articulos.filter(function (articulo)
{
return articulo.costo <= 500
}); 



/* MAP (crea un nuevo array con los resultados de la llamada a la funcion
    indicada aplicados a cada uno de sus elementos); */

var nombre Articulos = articulos.map(function(articulo)){
    return articulo.nombre
});

/* trae todos los nombres en string de los articulos que
ya teniamos */

/* FIND: (devuelve el primer valor que coincide de la condicion definida, una vez
    que coincida, no verificara los valores restantes) */

var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

/* Ejecuta la funcion indicada una vez por cada elemento del array*/

/* SOME (regresa una validacion de V o F para articulos que la cumplan) */

var articulosBaratos = articulos.some(function (articulo){
    return articulo.costo <= 700;
});

/* aqui arrojaria un true ya que existen articulos menores a 700 */


/* FILTER Crea un nuevo array con los elementos del array que se pasó 
como parámetro y que cumplan con la condición definida. */

    
 Agregar o eliminar elementos 
/* Agregar al final= .push()
Eliminar al final= .pop()
Agregar al inicio= .unshift()
Eliminar al inicio= .shift()  */



