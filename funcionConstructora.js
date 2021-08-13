/* var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}; */

function auto(marca, modelo, annio) { 
/* dentro de auto ponemos las propiedades que esperamos
tenga el objeto */
    this.marca = marca; 
    /* this hace referencia a auto y con marca seleccionamos la propiedad */
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
/* New es una nueva instancia de esta funcion constructora */
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);