//alert('Mi archivo está bien linkeado');

//Segundos a horas, minutos y segundos

//Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la
//conversión en horas, minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos).(Usar operador módulo)

const segundos = prompt ('Ingrese segundos a convertir');
const horas = ( Number(segundos) / 3600);
const restoHs = ( Number (segundos) % horas);
const minutos = (restoHs / 60);
const restoSeg = (restoHs % 60);

alert( `${segundos}  segundos, corresponden a: ${horas} horas, ${minutos}  minutos y ${restoSeg} segundos.`);