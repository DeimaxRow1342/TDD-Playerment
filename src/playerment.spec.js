import Practicas from "./datosPracticas.js";

describe("Crear un programa gamificado para TDDLab", () => {
    it("Si ingreso el nombre de una practica, me regresa el nombre", () => {
        const practica = new Practicas();
        practica.cargarDatos("FizzBuzz");
        expect(practica.nombre).toEqual("FizzBuzz");
    });
    it("Si ingreso el nombre y la descripcion de una practica, me regresa el nombre y la descripcion en una clase", () => {
        const practica = new Practicas();
        practica.cargarDatos("FizzBuzz", "Una practica de TDD donde se retorna una cadena de Fizz, Buzz o FizzBuzz de acuerdo a ciertas reglas");
        expect(practica.descripcion).toEqual("Una practica de TDD donde se retorna una cadena de Fizz, Buzz o FizzBuzz de acuerdo a ciertas reglas");
    });
});