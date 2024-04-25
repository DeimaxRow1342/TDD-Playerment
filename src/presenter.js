/*const practica1 = new Practicas();
const practica2 = new Practicas ();
practica1.cargarDatos(nombres[0], descripciones[0], fechas[0], enlaces[0]);
practica1.cargarDatos(nombres[1], descripciones[1], fechas[1], enlaces[1]);
let practicas = [practica1, practica2];
let numeroPracticas = 2;


document.addEventListener("DOMContentLoaded", function(event){
  event.preventDefault();
  let contenido = document.querySelector("#tabla-practicas");
  let salida = "";

  for(practica in practicas){
    salida += `
            <tr> 
              <td>${practica.nombre}</td>
              <td>${practica.descripcion}</td>
              <td>${practica.fecha}</td>
              <td>${practica.enlace}</td>
            </tr>
    `;
  }
  contenido.innerHTML = salida;
})

document.getElementById("proyectoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.querySelectorById("nombre");
  const descripcion = document.querySelectorById("descripcion");
  const fecha = document.querySelectorById("fecha");
  const enlace = document.querySelectorById("enlace");

  nombres += nombre;
  descripciones += descripcion;
  fechas += this.toString(fecha);
  enlaces += enlace;
  numeroPracticas = numeroPracticas + 1;

  const nuevaPractica = new Practicas();
  nuevaPractica.cargarDatos(nombres[numeroPracticas-1], descripciones[numeroPractica-1], fechas[numeroPracticas-1], enlaces[numeroPracticas-1]);

  nombre = "";
  descripcion = "";
  fecha = null;
  enlace = "";
});*/

import Practicas from "./datosPracticas.js";

let nombres = ["FizzBuzz", "Totalizador"];
let descripciones = ["Una practica de TDD donde se retorna una cadena de Fizz, Buzz o FizzBuzz de acuerdo a ciertas reglas", "Una practica de TDD donde se realiza un totalizador que calcula el precio total de una cantidad de productos aplicando ciertos impuestos y descuentos"];
let fechas = ["20/02/2024","24/3/2024"];
let enlaces = ["https://github.com/DeimaxRow1342/SecuenciaFizzBuzz", "https://github.com/Dylancalle/Tarea7"];
let practicas = [];

document.addEventListener("DOMContentLoaded", function() {
  cargarPracticasIniciales();

  document.getElementById("proyectoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.toString();
    const descripcion = document.getElementById("descripcion").value.toString();
    const fecha = document.getElementById("fecha").value.toString();
    const enlace = document.getElementById("enlace").value.toString();

    const nuevaPractica = new Practicas(nombre, descripcion, fecha, enlace);
    practicas.push(nuevaPractica);

    this.reset();

    actualizarTablaPracticas();
  });
});

function cargarPracticasIniciales() {
  for (let i = 0; i < nombres.length; i++) {
    const nuevaPractica = new Practicas();
    nuevaPractica.cargarDatos(nombres[i], descripciones[i], fechas[i], enlaces[i]);
    practicas.push(nuevaPractica);
  }

  actualizarTablaPracticas();
}

function actualizarTablaPracticas() {
  const contenido = document.querySelector("#tabla-practicas");
  let salida = "";

  practicas.forEach(practica => {
    salida += `
      <tr>
        <td>${practica.nombre}</td>
        <td>${practica.descripcion}</td>
        <td>${practica.fecha}</td>
        <td><a href="${practica.enlace}">${practica.enlace}</a></td>
      </tr>
    `;
  });

  contenido.innerHTML = salida;
}
