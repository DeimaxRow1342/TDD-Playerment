fetch("pruebasTDD.json")

.then(function(response){
  return Response.json();
})

.then(function(practicas){
  let placeholder = document.querySelector("#tabla-practicas");
  
  let salida = "";

  for(let practica of practicas){
    salida += `<tr> 
                <td>${practica.Nombre}</td>
                <td>${practica.Descripcion}</td>
                <td>${practica.Fecha}</td>
                <td>a${practica.Enlace}</td>
              </tr>`;
  }
})

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
