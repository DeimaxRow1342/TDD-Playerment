document.addEventListener("load", function(event){
  event.preventDefault();
  let contenido = document.querySelector("#tabla-practicas");
  let salida = "";

  for(let i=0; i<numeroPracticas; i++){
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
  let nombres = ["FizzBuzz", "Totalizador"];
  let descripciones = ["Una practica de TDD donde se retorna una cadena de Fizz, Buzz o FizzBuzz de acuerdo a ciertas reglas", "Una practica de TDD donde se realiza un totalizador que calcula el precio total de una cantidad de productos aplicando ciertos impuestos y descuentos"];
  let fechas = ["20/02/2024","24/3/2024"];
  let enlaces = ["https://github.com/DeimaxRow1342/SecuenciaFizzBuzz", "https://github.com/Dylancalle/Tarea7"];
  let numeroPracticas = 2;

  const nombre = document.querySelectorById("nombre");
  const descripcion = document.querySelectorById("descripcion");
  const fecha = document.querySelectorById("fecha");
  const enlace = document.querySelectorById("enlace");

  nombres += nombre;
  descripciones += descripcion;
  fechas += this.toString(fecha);
  enlaces += enlace;
  numeroPracticas = numeroPracticas + 1;

  nombre = "";
  descripcion = "";
  fecha = null;
  enlace = "";
});