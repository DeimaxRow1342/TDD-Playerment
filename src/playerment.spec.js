import cargarDatos from "./datosPracticas.js";

describe("Crear un programa gamificado para TDDLab", () => {
    it("Si ingreso el nombre de una practica, me regresa el nombre", () => {
        expect(cargarDatos("FizzBuzz")).toEqual("FizzBuzz");
    });
});