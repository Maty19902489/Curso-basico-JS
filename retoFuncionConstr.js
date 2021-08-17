/* Inicializo variables
 */
let autos = [];
let cantidadAutos = 0;
let cantRegistrados = 0;

/* creo funcion constructora */

function Auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

/* le solicito al usuario cuantos autos va a registrar */
cantidadAutos = prompt("Cuantos autos desea registrar");

/* Ejecuto este ciclo mientras la cantidad de autos registrados sea 
menor a la cantidad de autos que el usuario desea registrar. */

while ( cantRegistrados < cantidadAutos) {
      /* defino variables con scope local*/
      let marca = prompt("Marca: ");
      let modelo = prompt("Modelo: ");
      let annio = prompt("Año: ");

      /* paso las variables de scope local a la func constructora */
      var autoNuevo = new Auto(marca, modelo, annio);

      /* agrego el auto a mi arreglo de autos */
         autos.unshift(autoNuevo);

         /* incremento la cantidad de autos registrados en 1 */
         cantRegistrados++;
 
 /* Retorno por consola el arreglo con todos los autos
 registrados por el usuario   */      

 console.log(autos);
}
