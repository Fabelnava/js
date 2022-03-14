//objeto fechas
//js usa zona horaria del navegdor y mostrara una fecha como cadena de texto complta

//console.log(Date());

let fecha = new Date();
console.log(fecha);

let year = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();
let Hora = fecha.getHours() +":" + fecha.getMinutes();
console.log(year + "/" + mes + "/" + dia + ":" + Hora);

let formatofecha = `El dia es: $(dia) del mes de: $(mes) del año $(year)`